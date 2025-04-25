// Cart Database
const cartDB = {
    items: [],

    // Add item to cart
    addItem: function(product) {
        // Check if item already exists in cart
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            // If item exists, increase quantity
            existingItem.quantity += 1;
        } else {
            // If item doesn't exist, add it with quantity 1
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        // Save to localStorage
        this.saveToLocalStorage();
        
        // Log for debugging
        console.log('Item added to cart:', product);
        console.log('Current cart:', this.items);
    },

    // Remove item from cart
    // will make a new cart and push the items to it which doesnot match which given product id which is to be removed
    removeItem: function(productId) {
        this.items = this.items.filter(item => item.id !== productId);  
        this.saveToLocalStorage();
    },

    // Update item quantity
    updateQuantity: function(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            }
            this.saveToLocalStorage();
        }
    },

    // Get all items in cart
    getItems: function() {
        return this.items;
    },

    // Get total number of items
    getTotalItems: function() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    },

    // Get total price
    getTotalPrice: function() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Clear cart
    clearCart: function() {
        this.items = [];
        this.saveToLocalStorage();
    },

    // Save cart to localStorage
    saveToLocalStorage: function() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        console.log('Cart saved to localStorage:', this.items);
    },


    // Load cart from localStorage
    loadFromLocalStorage: function() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
            console.log('Cart loaded from localStorage:', this.items);
        }
    }
};

// Load cart from localStorage when the script loads
cartDB.loadFromLocalStorage();

// Export the cart database
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cartDB;
} 