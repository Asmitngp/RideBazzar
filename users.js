// User Database
const userDB = {
    users: [],

    // Add new user
    addUser: function(user) {
        // Check if user already exists
        if (this.getUserByEmail(user.email)) {
            throw new Error('User with this email already exists');
        }

        // Add user to database
        this.users.push({
            id: this.users.length + 1,
            ...user,
            joinDate: new Date().toISOString().split('T')[0]
        });

        // Save to localStorage
        this.saveToLocalStorage();
    },

    // Get user by email
    getUserByEmail: function(email) {
        return this.users.find(user => user.email === email);
    },

    // Get user by id
    getUserById: function(id) {
        return this.users.find(user => user.id === id);
    },

    // Authenticate user
    authenticate: function(email, password) {
        const user = this.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        return null;
    },

    // Update user profile
    updateUser: function(id, updates) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = {
                ...this.users[userIndex],
                ...updates
            };
            this.saveToLocalStorage();
            return true;
        }
        return false;
    },

    // Save to localStorage
    saveToLocalStorage: function() {
        localStorage.setItem('users', JSON.stringify(this.users));
    },

    // Load from localStorage
    loadFromLocalStorage: function() {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            this.users = JSON.parse(savedUsers);
        }
    }
};

// Load users from localStorage when the script loads
userDB.loadFromLocalStorage();

// Export the user database
if (typeof module !== 'undefined' && module.exports) {
    module.exports = userDB;
} 