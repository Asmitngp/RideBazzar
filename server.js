const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// Database setup
const db = new sqlite3.Database('ridebazzar.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database');
        createTables();
    }
});

// Create tables
function createTables() {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'user',
        join_date TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL,
        category TEXT NOT NULL,
        condition TEXT NOT NULL,
        location TEXT NOT NULL,
        seller_id INTEGER NOT NULL,
        image_url TEXT,
        status TEXT DEFAULT 'available',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (seller_id) REFERENCES users(id)
    )`);
}

// API Routes

// Register new user
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        
        if (row) {
            res.status(400).json({ error: 'User with this email already exists' });
            return;
        }
        
        // Insert new user
        db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password],
            function(err) {
                if (err) {
                    res.status(500).json({ error: 'Error creating user' });
                    return;
                }
                
                res.status(201).json({
                    id: this.lastID,
                    name,
                    email,
                    role: 'user'
                });
            }
        );
    });
});

// Login user
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    db.get('SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err, row) => {
            if (err) {
                res.status(500).json({ error: 'Database error' });
                return;
            }
            
            if (!row) {
                res.status(401).json({ error: 'Invalid email or password' });
                return;
            }
            
            // Remove password from response
            const { password, ...userWithoutPassword } = row;
            res.json(userWithoutPassword);
        }
    );
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    
    db.get('SELECT id, name, email, role, join_date FROM users WHERE id = ?',
        [userId],
        (err, row) => {
            if (err) {
                res.status(500).json({ error: 'Database error' });
                return;
            }
            
            if (!row) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            
            res.json(row);
        }
    );
});

// Update user profile
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    
    db.run('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
        [name, email, password, userId],
        function(err) {
            if (err) {
                res.status(500).json({ error: 'Error updating user' });
                return;
            }
            
            if (this.changes === 0) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            
            res.json({ message: 'User updated successfully' });
        }
    );
});

// Get all users
app.get('/api/users', (req, res) => {
    db.all('SELECT id, name, email, role, join_date FROM users ORDER BY id DESC',
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: 'Database error' });
                return;
            }
            res.json(rows);
        }
    );
});

// Items API Routes

// Create new item
app.post('/api/items', (req, res) => {
    const { title, description, price, category, condition, location, seller_id, image_url } = req.body;
    
    if (!title || !price || !category || !condition || !location || !seller_id) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    db.run(`INSERT INTO items (title, description, price, category, condition, location, seller_id, image_url) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, description, price, category, condition, location, seller_id, image_url],
        function(err) {
            if (err) {
                res.status(500).json({ error: 'Error creating item' });
                return;
            }
            
            res.status(201).json({
                id: this.lastID,
                title,
                description,
                price,
                category,
                condition,
                location,
                seller_id,
                image_url,
                status: 'available'
            });
        }
    );
});

// Get all items
app.get('/api/items', (req, res) => {
    console.log('Fetching all items...');
    db.all('SELECT * FROM items ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            console.error('Error fetching items:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        console.log('Found items:', rows);
        res.json(rows);
    });
});

// Get items by seller
app.get('/api/items/seller/:seller_id', (req, res) => {
    const sellerId = req.params.seller_id;
    
    db.all('SELECT * FROM items WHERE seller_id = ? ORDER BY created_at DESC', 
        [sellerId],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: 'Database error' });
                return;
            }
            res.json(rows);
        }
    );
});

// Get single item by ID
app.get('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    
    db.get('SELECT * FROM items WHERE id = ?', [itemId], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        
        if (!row) {
            res.status(404).json({ error: 'Item not found' });
            return;
        }
        
        res.json(row);
    });
});

// Update item
app.put('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    const { title, description, price, category, condition, location, image_url, status } = req.body;
    
    db.run(`UPDATE items 
            SET title = ?, description = ?, price = ?, category = ?, 
                condition = ?, location = ?, image_url = ?, status = ?
            WHERE id = ?`,
        [title, description, price, category, condition, location, image_url, status, itemId],
        function(err) {
            if (err) {
                res.status(500).json({ error: 'Error updating item' });
                return;
            }
            
            if (this.changes === 0) {
                res.status(404).json({ error: 'Item not found' });
                return;
            }
            
            res.json({ message: 'Item updated successfully' });
        }
    );
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    
    db.run('DELETE FROM items WHERE id = ?', [itemId], function(err) {
        if (err) {
            res.status(500).json({ error: 'Error deleting item' });
            return;
        }
        
        if (this.changes === 0) {
            res.status(404).json({ error: 'Item not found' });
            return;
        }
        
        res.json({ message: 'Item deleted successfully' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 