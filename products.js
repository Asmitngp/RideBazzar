// Products Database
const productsDB = {
  // Sample products
  products: [
    // Electronics
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      category: "electronics",
      price: 60000,
      quantity: 1,
      condition: "new",
      description: "256GB, Deep Purple, Excellent condition",
      images: [
        "https://readdy.ai/api/search-image?query=iPhone%2014%20Pro%20Max%20Deep%20Purple&width=400&height=300&seq=1&orientation=landscape"
      ],
      seller: {
        id: 1,
        name: "Asmit Yadav",
        rating: 4.8
      },
      postedDate: "2024-03-20",
      status: "available"
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      category: "electronics",
      price: 2999,
      quantity: 1,
      condition: "new",
      description: "Noise cancelling, Black, Sealed box",
      images: [
        "https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5&width=400&height=300&seq=2&orientation=landscape"
      ],
      seller: {
        id: 2,
        name: "Karuna Jagadale",
        rating: 4.9
      },
      postedDate: "2024-03-22",
      status: "available"
    },
    {
      id: 3,
      name: "MacBook Pro M2",
      category: "electronics",
      price: 120000,
      quantity: 1,
      condition: "new",
      description: "16-inch, 16GB RAM, 512GB SSD",
      images: [
        "https://readdy.ai/api/search-image?query=MacBook%20Pro%20M2&width=400&height=300&seq=3&orientation=landscape"
      ],
      seller: {
        id: 3,
        name: "Rahul Sharma",
        rating: 4.7
      },
      postedDate: "2024-03-21",
      status: "available"
    },
    {
      id: 4,
      name: "Samsung Galaxy S23 Ultra",
      category: "electronics",
      price: 85000,
      quantity: 1,
      condition: "new",
      description: "256GB, Phantom Black, Brand new",
      images: [
        "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S23%20Ultra&width=400&height=300&seq=4&orientation=landscape"
      ],
      seller: {
        id: 4,
        name: "Priya Patel",
        rating: 4.6
      },
      postedDate: "2024-03-19",
      status: "available"
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      category: "electronics",
      price: 35000,
      quantity: 1,
      condition: "new",
      description: "45mm, GPS + Cellular, Midnight",
      images: [
        "https://readdy.ai/api/search-image?query=Apple%20Watch%20Series%208&width=400&height=300&seq=5&orientation=landscape"
      ],
      seller: {
        id: 5,
        name: "Amit Kumar",
        rating: 4.8
      },
      postedDate: "2024-03-18",
      status: "available"
    },
    {
      id: 6,
      name: "Bose QuietComfort 45",
      category: "electronics",
      price: 2500,
      quantity: 1,
      condition: "used",
      description: "Black, Excellent condition, 6 months old",
      images: [
        "https://readdy.ai/api/search-image?query=Bose%20QuietComfort%2045&width=400&height=300&seq=6&orientation=landscape"
      ],
      seller: {
        id: 6,
        name: "Neha Gupta",
        rating: 4.5
      },
      postedDate: "2024-03-17",
      status: "available"
    },
    {
      id: 7,
      name: "iPad Pro 12.9",
      category: "electronics",
      price: 75000,
      quantity: 1,
      condition: "new",
      description: "M2 chip, 256GB, Space Gray",
      images: [
        "https://readdy.ai/api/search-image?query=iPad%20Pro%2012.9&width=400&height=300&seq=7&orientation=landscape"
      ],
      seller: {
        id: 7,
        name: "Vikram Singh",
        rating: 4.9
      },
      postedDate: "2024-03-16",
      status: "available"
    },
    {
      id: 8,
      name: "Sony PlayStation 5",
      category: "electronics",
      price: 45000,
      quantity: 1,
      condition: "new",
      description: "Digital Edition, Brand new in box",
      images: [
        "https://readdy.ai/api/search-image?query=PlayStation%205&width=400&height=300&seq=8&orientation=landscape"
      ],
      seller: {
        id: 8,
        name: "Rohan Mehta",
        rating: 4.7
      },
      postedDate: "2024-03-15",
      status: "available"
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      category: "electronics",
      price: 28000,
      quantity: 1,
      condition: "new",
      description: "White, Brand new with receipt",
      images: [
        "https://readdy.ai/api/search-image?query=Nintendo%20Switch%20OLED&width=400&height=300&seq=9&orientation=landscape"
      ],
      seller: {
        id: 9,
        name: "Ananya Reddy",
        rating: 4.8
      },
      postedDate: "2024-03-14",
      status: "available"
    },
    {
      id: 10,
      name: "DJI Mini 3 Pro",
      category: "electronics",
      price: 65000,
      quantity: 1,
      condition: "new",
      description: "Drone with RC-N1 Controller",
      images: [
        "https://readdy.ai/api/search-image?query=DJI%20Mini%203%20Pro&width=400&height=300&seq=10&orientation=landscape"
      ],
      seller: {
        id: 10,
        name: "Arjun Kapoor",
        rating: 4.9
      },
      postedDate: "2024-03-13",
      status: "available"
    },

    // Vehicles
    {
      id: 11,
      name: "Trek Mountain Bike",
      category: "vehicles",
      price: 4500,
      quantity: 1,
      condition: "used",
      description: "21-speed, 26\" wheels, Lightly used",
      images: [
        "https://readdy.ai/api/search-image?query=Trek%20Mountain%20Bike&width=400&height=300&seq=11&orientation=landscape"
      ],
      seller: {
        id: 11,
        name: "Harshit Kumar",
        rating: 4.5
      },
      postedDate: "2024-03-19",
      status: "available"
    },
    {
      id: 12,
      name: "Royal Enfield Classic 350",
      category: "vehicles",
      price: 180000,
      quantity: 1,
      condition: "used",
      description: "2022 model, 5000km, Gunmetal Grey",
      images: [
        "https://readdy.ai/api/search-image?query=Royal%20Enfield%20Classic%20350&width=400&height=300&seq=12&orientation=landscape"
      ],
      seller: {
        id: 12,
        name: "Rajesh Verma",
        rating: 4.6
      },
      postedDate: "2024-03-18",
      status: "available"
    },
    {
      id: 13,
      name: "Honda Activa 6G",
      category: "vehicles",
      price: 75000,
      quantity: 1,
      condition: "used",
      description: "2023 model, 2000km, Pearl Spartan Red",
      images: [
        "https://readdy.ai/api/search-image?query=Honda%20Activa%206G&width=400&height=300&seq=13&orientation=landscape"
      ],
      seller: {
        id: 13,
        name: "Sneha Patel",
        rating: 4.7
      },
      postedDate: "2024-03-17",
      status: "available"
    },
    {
      id: 14,
      name: "Hero Splendor Plus",
      category: "vehicles",
      price: 65000,
      quantity: 1,
      condition: "new",
      description: "2024 model, 0km, Black and Red",
      images: [
        "https://readdy.ai/api/search-image?query=Hero%20Splendor%20Plus&width=400&height=300&seq=14&orientation=landscape"
      ],
      seller: {
        id: 14,
        name: "Amit Kumar",
        rating: 4.8
      },
      postedDate: "2024-03-16",
      status: "available"
    },
    {
      id: 15,
      name: "Bajaj Pulsar NS200",
      category: "vehicles",
      price: 140000,
      quantity: 1,
      condition: "used",
      description: "2023 model, 3000km, Racing Red",
      images: [
        "https://readdy.ai/api/search-image?query=Bajaj%20Pulsar%20NS200&width=400&height=300&seq=15&orientation=landscape"
      ],
      seller: {
        id: 15,
        name: "Vikram Singh",
        rating: 4.5
      },
      postedDate: "2024-03-15",
      status: "available"
    },

    // Furniture
    {
      id: 16,
      name: "Modern Coffee Table",
      category: "furniture",
      price: 450,
      quantity: 1,
      condition: "used",
      description: "Solid wood, Scandinavian design",
      images: [
        "https://readdy.ai/api/search-image?query=Modern%20Coffee%20Table&width=400&height=300&seq=16&orientation=landscape"
      ],
      seller: {
        id: 16,
        name: "Vikas Saini",
        rating: 4.7
      },
      postedDate: "2024-03-21",
      status: "available"
    },
    {
      id: 17,
      name: "L-Shaped Sofa Set",
      category: "furniture",
      price: 25000,
      quantity: 1,
      condition: "used",
      description: "Brown leather, 6 months old",
      images: [
        "https://readdy.ai/api/search-image?query=L%20Shaped%20Sofa%20Set&width=400&height=300&seq=17&orientation=landscape"
      ],
      seller: {
        id: 17,
        name: "Priya Sharma",
        rating: 4.6
      },
      postedDate: "2024-03-20",
      status: "available"
    },
    {
      id: 18,
      name: "Queen Size Bed",
      category: "furniture",
      price: 15000,
      quantity: 1,
      condition: "used",
      description: "With storage, 1 year old",
      images: [
        "https://readdy.ai/api/search-image?query=Queen%20Size%20Bed&width=400&height=300&seq=18&orientation=landscape"
      ],
      seller: {
        id: 18,
        name: "Rahul Gupta",
        rating: 4.5
      },
      postedDate: "2024-03-19",
      status: "available"
    },
    {
      id: 19,
      name: "Study Table",
      category: "furniture",
      price: 2000,
      quantity: 1,
      condition: "new",
      description: "Wooden, with bookshelf",
      images: [
        "https://readdy.ai/api/search-image?query=Study%20Table&width=400&height=300&seq=19&orientation=landscape"
      ],
      seller: {
        id: 19,
        name: "Anjali Patel",
        rating: 4.8
      },
      postedDate: "2024-03-18",
      status: "available"
    },
    {
      id: 20,
      name: "Dining Table Set",
      category: "furniture",
      price: 12000,
      quantity: 1,
      condition: "used",
      description: "6 seater, Glass top",
      images: [
        "https://readdy.ai/api/search-image?query=Dining%20Table%20Set&width=400&height=300&seq=20&orientation=landscape"
      ],
      seller: {
        id: 20,
        name: "Mohit Sharma",
        rating: 4.7
      },
      postedDate: "2024-03-17",
      status: "available"
    },

    // Clothing
    {
      id: 21,
      name: "Leather Jacket",
      category: "clothing",
      price: 2500,
      quantity: 1,
      condition: "used",
      description: "Black, Size M, Genuine leather",
      images: [
        "https://readdy.ai/api/search-image?query=Leather%20Jacket&width=400&height=300&seq=21&orientation=landscape"
      ],
      seller: {
        id: 21,
        name: "Rahul Verma",
        rating: 4.6
      },
      postedDate: "2024-03-16",
      status: "available"
    },
    {
      id: 22,
      name: "Designer Saree",
      category: "clothing",
      price: 3500,
      quantity: 1,
      condition: "new",
      description: "Silk, Handcrafted, Blue",
      images: [
        "https://readdy.ai/api/search-image?query=Designer%20Saree&width=400&height=300&seq=22&orientation=landscape"
      ],
      seller: {
        id: 22,
        name: "Priya Reddy",
        rating: 4.8
      },
      postedDate: "2024-03-15",
      status: "available"
    },
    {
      id: 23,
      name: "Nike Air Max",
      category: "clothing",
      price: 4500,
      quantity: 1,
      condition: "new",
      description: "Size 9, White and Black",
      images: [
        "https://readdy.ai/api/search-image?query=Nike%20Air%20Max&width=400&height=300&seq=23&orientation=landscape"
      ],
      seller: {
        id: 23,
        name: "Amit Kumar",
        rating: 4.7
      },
      postedDate: "2024-03-14",
      status: "available"
    },
    {
      id: 24,
      name: "Formal Suit",
      category: "clothing",
      price: 5000,
      quantity: 1,
      condition: "used",
      description: "Black, Size 40, 2 months old",
      images: [
        "https://readdy.ai/api/search-image?query=Formal%20Suit&width=400&height=300&seq=24&orientation=landscape"
      ],
      seller: {
        id: 24,
        name: "Vikram Singh",
        rating: 4.5
      },
      postedDate: "2024-03-13",
      status: "available"
    },
    {
      id: 25,
      name: "Designer Kurti",
      category: "clothing",
      price: 1200,
      quantity: 1,
      condition: "new",
      description: "Handblock print, Size M",
      images: [
        "https://readdy.ai/api/search-image?query=Designer%20Kurti&width=400&height=300&seq=25&orientation=landscape"
      ],
      seller: {
        id: 25,
        name: "Neha Gupta",
        rating: 4.9
      },
      postedDate: "2024-03-12",
      status: "available"
    },

    // Books
    {
      id: 26,
      name: "Atomic Habits",
      category: "books",
      price: 299,
      quantity: 1,
      condition: "new",
      description: "Hardcover, Brand new",
      images: [
        "https://readdy.ai/api/search-image?query=Atomic%20Habits%20Book&width=400&height=300&seq=26&orientation=landscape"
      ],
      seller: {
        id: 26,
        name: "Rohan Mehta",
        rating: 4.8
      },
      postedDate: "2024-03-11",
      status: "available"
    },
    {
      id: 27,
      name: "Harry Potter Collection",
      category: "books",
      price: 2500,
      quantity: 1,
      condition: "used",
      description: "Complete set, Good condition",
      images: [
        "https://readdy.ai/api/search-image?query=Harry%20Potter%20Collection&width=400&height=300&seq=27&orientation=landscape"
      ],
      seller: {
        id: 27,
        name: "Ananya Reddy",
        rating: 4.7
      },
      postedDate: "2024-03-10",
      status: "available"
    },
    {
      id: 28,
      name: "The Alchemist",
      category: "books",
      price: 199,
      quantity: 1,
      condition: "used",
      description: "Paperback, Like new",
      images: [
        "https://readdy.ai/api/search-image?query=The%20Alchemist%20Book&width=400&height=300&seq=28&orientation=landscape"
      ],
      seller: {
        id: 28,
        name: "Arjun Kapoor",
        rating: 4.6
      },
      postedDate: "2024-03-09",
      status: "available"
    },
    {
      id: 29,
      name: "Rich Dad Poor Dad",
      category: "books",
      price: 249,
      quantity: 1,
      condition: "new",
      description: "Paperback, Latest edition",
      images: [
        "https://readdy.ai/api/search-image?query=Rich%20Dad%20Poor%20Dad&width=400&height=300&seq=29&orientation=landscape"
      ],
      seller: {
        id: 29,
        name: "Rajesh Verma",
        rating: 4.9
      },
      postedDate: "2024-03-08",
      status: "available"
    },
    {
      id: 30,
      name: "The Psychology of Money",
      category: "books",
      price: 299,
      quantity: 1,
      condition: "new",
      description: "Hardcover, Brand new",
      images: [
        "https://readdy.ai/api/search-image?query=The%20Psychology%20of%20Money&width=400&height=300&seq=30&orientation=landscape"
      ],
      seller: {
        id: 30,
        name: "Sneha Patel",
        rating: 4.8
      },
      postedDate: "2024-03-07",
      status: "available"
    },

    // Other
    {
      id: 31,
      name: "Yoga Mat",
      category: "other",
      price: 499,
      quantity: 1,
      condition: "new",
      description: "Non-slip, Purple",
      images: [
        "https://readdy.ai/api/search-image?query=Yoga%20Mat&width=400&height=300&seq=31&orientation=landscape"
      ],
      seller: {
        id: 31,
        name: "Priya Sharma",
        rating: 4.7
      },
      postedDate: "2024-03-06",
      status: "available"
    },
    {
      id: 32,
      name: "Guitar",
      category: "other",
      price: 3500,
      quantity: 1,
      condition: "used",
      description: "Acoustic, 6 months old",
      images: [
        "https://readdy.ai/api/search-image?query=Acoustic%20Guitar&width=400&height=300&seq=32&orientation=landscape"
      ],
      seller: {
        id: 32,
        name: "Rahul Gupta",
        rating: 4.6
      },
      postedDate: "2024-03-05",
      status: "available"
    },
    {
      id: 33,
      name: "Dumbbell Set",
      category: "other",
      price: 1200,
      quantity: 1,
      condition: "new",
      description: "5kg each, Pair",
      images: [
        "https://readdy.ai/api/search-image?query=Dumbbell%20Set&width=400&height=300&seq=33&orientation=landscape"
      ],
      seller: {
        id: 33,
        name: "Anjali Patel",
        rating: 4.8
      },
      postedDate: "2024-03-04",
      status: "available"
    },
    {
      id: 34,
      name: "Skateboard",
      category: "other",
      price: 1500,
      quantity: 1,
      condition: "used",
      description: "Complete set, 3 months old",
      images: [
        "https://readdy.ai/api/search-image?query=Skateboard&width=400&height=300&seq=34&orientation=landscape"
      ],
      seller: {
        id: 34,
        name: "Mohit Sharma",
        rating: 4.5
      },
      postedDate: "2024-03-03",
      status: "available"
    },
    {
      id: 35,
      name: "Camera Tripod",
      category: "other",
      price: 800,
      quantity: 1,
      condition: "new",
      description: "Aluminum, Lightweight",
      images: [
        "https://readdy.ai/api/search-image?query=Camera%20Tripod&width=400&height=300&seq=35&orientation=landscape"
      ],
      seller: {
        id: 35,
        name: "Rahul Verma",
        rating: 4.7
      },
      postedDate: "2024-03-02",
      status: "available"
    }
  ],

  // Get all products
  getAllProducts: function() {
    return this.products;
  },

  // Get product by ID
  getProductById: function(id) {
    return this.products.find(product => product.id === id);
  },

  // Get products by category
  getProductsByCategory: function(category) {
    return this.products.filter(product => product.category === category);
  },

  // Add new product
  addProduct: function(product) {
    const newId = this.products.length > 0 
      ? Math.max(...this.products.map(p => p.id)) + 1 
      : 1;
    
    const newProduct = {
      ...product,
      id: newId,
      postedDate: new Date().toISOString().split('T')[0],
      status: "available"
    };
    
    this.products.push(newProduct);
    return newProduct;
  },

  // Update product
  updateProduct: function(id, updates) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        ...updates 
      };
      return this.products[index];
    }
    return null;
  },

  // Delete product
  deleteProduct: function(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  },

  // Search products
  searchProducts: function(query) {
    const searchTerm = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  },

  // Get featured products
  getFeaturedProducts: function(limit = 4) {
    return this.products
      .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
      .slice(0, limit);
  }
};

// Export the database
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productsDB;
}

window.viewProduct = function(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}; 