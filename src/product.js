const Products = [
  {
    id: 1,
    name: "white-grey Hoodie",
    img: "hoodie1.jpg",
    category: "hoodies",
    description: "Soft fleece hoodie for everyday comfort",
    price: 1499,
    isNew: true,
    quantity: 1
  },
   {
    id: 2,
    name: "grey Hoodie",
    img: "hoodie2.jpg",
    category: "hoodies",
    description: "Soft fleece hoodie for men",
    price: 1499,
    isNew: true,
    quantity: 1
  },
  {
    id: 3,
    name: "baggy style Hoodie",
    img: "hoodie3.jpg",
    category: "hoodies",
    description: "Oversized baggy hoodie for street style",
    price: 2500,
    isNew: true,
    quantity: 1
  },
  {
    id: 4,
    name: "Black Hoodie",
    img: "hoodie4.jpg",
    category: "hoodies",
    description: "Classic black hoodie with soft fabric",
    price: 2430,
    isNew: false,
    quantity: 1
  },

  // Women
  {
    id: 5,
    img: "womens1.jpg",
    name: "bonanza suit 3-piece",
    category: "women",
    description: "Elegant 3-piece stitched suit",
    price: 1700,
    isNew: true,
    quantity: 1
  },
  {
    id: 6,
    img: "women2.jpg",
    name: "girl suit",
    category: "women",
    description: "Comfortable casual wear for girls",
    price: 1900,
    isNew: true,
    quantity: 1
  },
  {
    id: 7,
    img: "women3.jpg",
    name: "nishat suit",
    category: "women",
    description: "Premium embroidered Nishat suit",
    price: 3000,
    isNew: false,
    quantity: 1
  },
  {
    id: 8,
    img: "women4.jpg",
    name: "jeans shirt",
    category: "women",
    description: "Stylish denim shirt for women",
    price: 2000,
    isNew: false,
    quantity: 1
  },

  // T-Shirts
  {
    id: 9,
    img: "tshirts1.jpg",
    name: "black t shirt",
    category: "tshirt",
    description: "Comfortable black cotton T-shirt",
    price: 2599,
    isNew: false,
    quantity: 1
  },
  {
    id: 10,
    img: "tshirts2.jpg",
    name: "blue baggy t shirt",
    category: "tshirt",
    description: "Oversized blue streetwear T-shirt",
    price: 2533,
    isNew: true,
    quantity: 1
  },
  {
    id: 11,
    img: "tshirts4.jpg",
    name: "white t shirt",
    category: "tshirt",
    description: "Classic white everyday T-shirt",
    price: 2500,
    isNew: false,
    quantity: 1
  },
  {
    id: 12,
    img: "tshirts3.jpg",
    name: "stylish t shirt",
    category: "tshirt",
    description: "Modern printed fashion T-shirt",
    price: 1450,
    isNew: true,
    quantity: 1
  },

  // Men
  {
    id: 13,
    name: "men shirt",
    category: "men",
    img: "mens2.jpg",
    description: "Slim fit formal shirt for men",
    price: 999,
    isNew: false,
    quantity: 1
  },
  {
    id: 14,
    name: "casual shirt",
    category: "men",
    img: "mens3.jpg",
    description: "Lightweight casual shirt",
    price: 800,
    isNew: true,
    quantity: 1
  },
  {
    id: 15,
    name: "casual shirt summer",
    category: "men",
    img: "mens4.jpg",
    description: "Breathable summer cotton shirt",
    price: 1490,
    isNew: false,
    quantity: 1
  },
  {
    id: 16,
    name: "casual shirt office",
    category: "men",
    img: "mens1.jpg",
    description: "Office wear premium shirt",
    price: 2050,
    isNew: true,
    quantity: 1
  },

  // Clothes
  {
    id: 17,
    name: "pant coat",
    category: "clothes",
    img: "clothes2.jpg",
    description: "Premium formal pant coat",
    price: 2100,
    isNew: false,
    quantity: 1
  },
  {
    id: 18,
    name: "kids wear",
    category: "clothes",
    img: "clothes1.jpg",
    description: "Comfortable clothing for kids",
    price: 2200,
    isNew: true,
    quantity: 1
  },
  {
    id: 19,
    name: "kids summer",
    category: "clothes",
    img: "clothes3.jpg",
    description: "Lightweight summer kids outfit",
    price: 2400,
    isNew: true,
    quantity: 1
  },
  {
    id: 20,
    name: "baggy lining shirt",
    category: "clothes",
    img: "clothes4.jpg",
    description: "Trendy striped baggy shirt",
    price: 2590,
    isNew: false,
    quantity: 1
  },

  // New Arrival
  {
    id: 21,
    img: "newarrival1.jpg",
    name: "sapphire suit",
    category: "newarrival",
    description: "Latest Sapphire designer collection",
    price: 2510,
    isNew: true,
    quantity: 1
  },
  {
    id: 22,
    img: "newarrival2.jpg",
    name: "white shirt",
    category: "newarrival",
    description: "Fresh arrival premium white shirt",
    price: 2500,
    isNew: true,
    quantity: 1
  },
  {
    id: 23,
    img: "newarrival3.jpg",
    name: "shirt",
    category: "newarrival",
    description: "New fashion casual shirt",
    price: 2400,
    isNew: true,
    quantity: 1
  },
  {
    id: 24,
    img: "newarrival4.jpg",
    name: "kids mehndi dress",
    category: "newarrival",
    description: "Traditional kids mehndi dress",
    price: 3000,
    isNew: true,
    quantity: 1
  },

  // Jeans
  {
    id: 25,
    img: "jeans.jpg",
    name: "blue jeans",
    category: "jeans",
    description: "Classic blue denim jeans",
    price: 1500,
    isNew: false,
    quantity: 1
  },
  {
    id: 26,
    img: "jeans5.jpg",
    name: "black jeans",
    category: "jeans",
    description: "Stretchable slim fit jeans",
    price: 2000,
    isNew: false,
    quantity: 1
  },
  {
    id: 27,
    img: "jeans2.jpg",
    name: "ripped jeans",
    category: "jeans",
    description: "Stylish ripped denim jeans",
    price: 1500,
    isNew: true,
    quantity: 1
  },
  {
    id: 28,
    img: "jeans3.jpg",
    name: "baggy jeans",
    category: "jeans",
    description: "Relaxed fit baggy denim jeans",
    price: 1500,
    isNew: true,
    quantity: 1
  }
];


export default Products;
