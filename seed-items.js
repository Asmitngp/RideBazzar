const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('ridebazzar.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database');
        cleanupAndSeed();
    }
});

// Featured items data
const featuredItems = [
    {
        title: "iPhone 14 Pro Max",
        description: "256GB, Deep Purple, Excellent condition",
        price: 160000,
        category: "electronics",
        condition: "new",
        location: "Mumbai",
        seller_id: 1,
        image_url: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/03/apple-iphone-14-pro-max.jpg"
    },
    {
        title: "Trek Mountain Bike",
        description: "21-speed, 26\" wheels, Lightly used",
        price: 35000,
        category: "vehicles",
        condition: "used",
        location: "Delhi",
        seller_id: 1,
        image_url: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2022/03/3.jpg"
    },
    {
        title: "Modern Coffee Table",
        description: "Solid wood, Scandinavian design",
        price: 4500,
        category: "furniture",
        condition: "used",
        location: "Bangalore",
        seller_id: 1,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SJgecDXMbV-00Y1sEQLqjYhXJvv4ovJKSg&s"
    },
    {
        title: "Sony WH-1000XM5",
        description: "Noise cancelling, Black, Sealed box",
        price: 29999,
        category: "electronics",
        condition: "new",
        location: "Chennai",
        seller_id: 1,
        image_url: "https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    },
    {
        title: "ASUS ROG Strix G15",
        description: "RTX 3060, 16GB RAM, 1TB SSD",
        price: 75000,
        category: "electronics",
        condition: "used",
        location: "Pune",
        seller_id: 1,
        image_url: "https://i.ytimg.com/vi/weU1pYsMnRk/maxresdefault.jpg"
    },
    {
        title: "Apple Watch Series 8",
        description: "GPS + Cellular, 45mm, Midnight",
        price: 35000,
        category: "electronics",
        condition: "new",
        location: "Hyderabad",
        seller_id: 1,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQln8h20IHXCSQkGWMiqXXn4SSJ8xtJ-ZH9VUgoc-WeVhusHPHtlZsITXU2-oXpSX3b-I&usqp=CAU"
    },
    {
        title: "Sony A7 III",
        description: "Full Frame, 24.2MP, With Kit Lens",
        price: 120000,
        category: "electronics",
        condition: "used",
        location: "Kolkata",
        seller_id: 1,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyjsDF0Gb9G-3fpeEvu39RTyt9OPOzeHOww&s"
    },
    {
        title: "PlayStation 5",
        description: "Digital Edition, 825GB SSD",
        price: 45000,
        category: "electronics",
        condition: "new",
        location: "Ahmedabad",
        seller_id: 1,
        image_url: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/118b4825e679e993bfabee1b560ccd65.jpg"
    }
];

// Function to cleanup and seed
function cleanupAndSeed() {
    // First delete all existing items
    db.run('DELETE FROM items', (err) => {
        if (err) {
            console.error('Error cleaning up items:', err);
            return;
        }
        console.log('Cleaned up existing items');
        // Then seed new items
        seedItems();
    });
}

// Function to seed items
function seedItems() {
    const stmt = db.prepare(`INSERT INTO items (
        title, description, price, category, condition, location, seller_id, image_url
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);

    featuredItems.forEach(item => {
        stmt.run(
            item.title,
            item.description,
            item.price,
            item.category,
            item.condition,
            item.location,
            item.seller_id,
            item.image_url,
            (err) => {
                if (err) {
                    console.error('Error inserting item:', err);
                } else {
                    console.log('Added item:', item.title);
                }
            }
        );
    });

    stmt.finalize();
    console.log('Finished seeding items');
    db.close();
} 