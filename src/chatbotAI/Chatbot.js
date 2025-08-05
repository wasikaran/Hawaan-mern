
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; // We'll create this CSS file next

const Chatbot = () => {
  // Product Database (from your JSON)
  const productDatabase =  {
            "mens-collection": {
                "formal": [
                    {
                        "id": "mf003",
                        "name": "Leather Formal Shoes",
                        "price": 150.99,
                        "originalPrice": 199.99,
                        "image": "/images/products/shoe-1.jpg",
                        "hoverImage": "/images/products/shoe-1_1.jpg",
                        "description": "Genuine leather formal shoes with comfortable sole",
                        "brand": "FormalStep",
                        "rating": 4,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "7",
                            "8",
                            "9",
                            "10",
                            "11"
                        ],
                        "colors": [
                            "Black",
                            "Brown"
                        ]
                    },
                    {
                        "id": "mf004",
                        "name": "Casual Brown Shoes",
                        "price": 99,
                        "originalPrice": 105,
                        "image": "/images/products/shoe-2.jpg",
                        "hoverImage": "/images/products/shoe-2_1.jpg",
                        "description": "Comfortable brown casual shoes for everyday wear",
                        "brand": "ComfortStep",
                        "rating": 5,
                        "inStock": true,
                        "category": "formal",
                        "sizes": [
                            "7",
                            "8",
                            "9",
                            "10",
                            "11"
                        ],
                        "colors": [
                            "Brown",
                            "Tan"
                        ]
                    },
                    {
                        "id": "mf687a1b4cbf151",
                        "name": "adas",
                        "price": 232,
                        "originalPrice": 244,
                        "image": "/images/products/jacket-3.jpg",
                        "hoverImage": "/images/products/jacket-4.jpg",
                        "description": "123",
                        "brand": "Hawaan",
                        "rating": 4,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Navy",
                            "Charcoal"
                        ]
                    },
                    {
                        "id": "mf687a2b9bcf80d",
                        "name": "Classic Black Suit",
                        "price": 241,
                        "originalPrice": 255,
                        "image": "/images/products/jacket-3.jpg",
                        "hoverImage": "/images/products/jacket-4.jpg",
                        "description": "2312",
                        "brand": "Hawaan",
                        "rating": 5,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Navy",
                            "Charcoal"
                        ]
                    },
                    {
                        "id": "mf687a6078a8df4",
                        "name": "adas",
                        "price": 24,
                        "originalPrice": 29,
                        "image": "/images/products/jacket-3.jpg",
                        "hoverImage": "/images/products/jacket-4.jpg",
                        "description": "hamza",
                        "brand": "Hawaan",
                        "rating": 5,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Navy",
                            "Charcoal"
                        ]
                    }
                ],
                "casual": [
                    {
                        "id": "mc001",
                        "name": "Casual Brown Shoes",
                        "price": 99,
                        "originalPrice": 105,
                        "image": "/images/products/shoe-2.jpg",
                        "hoverImage": "/images/products/shoe-2_1.jpg",
                        "description": "Comfortable brown casual shoes for everyday wear",
                        "brand": "ComfortStep",
                        "rating": 5,
                        "inStock": true,
                        "category": "casual",
                        "sizes": [
                            "7",
                            "8",
                            "9",
                            "10",
                            "11"
                        ],
                        "colors": [
                            "Brown",
                            "Tan"
                        ]
                    },
                    {
                        "id": "mc002",
                        "name": "Winter Leather Jacket",
                        "price": 189.99,
                        "originalPrice": 250,
                        "image": "/images/products/jacket-1.jpg",
                        "hoverImage": "/images/products/jacket-2.jpg",
                        "description": "Stylish winter leather jacket for casual wear",
                        "brand": "StyleCraft",
                        "rating": 4,
                        "inStock": true,
                        "category": "casual",
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Brown"
                        ]
                    }
                ],
                "tshirts": [
                    {
                        "id": "mt001",
                        "name": "Cotton T-Shirt",
                        "price": 29.99,
                        "originalPrice": 39.99,
                        "image": "/images/products/2.jpg",
                        "hoverImage": "/images/products/3.jpg",
                        "description": "100% cotton comfortable t-shirt",
                        "brand": "ComfortWear",
                        "rating": 4,
                        "inStock": true,
                        "category": "tshirts",
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "White",
                            "Black",
                            "Navy",
                            "Gray"
                        ]
                    }
                ],
                "jackets": [
                    {
                        "id": "mj001",
                        "name": "Fleece Full-Zip Jacket",
                        "price": 58,
                        "originalPrice": 65,
                        "image": "/images/products/jacket-5.jpg",
                        "hoverImage": "/images/products/jacket-6.jpg",
                        "description": "Warm fleece jacket with full-zip design",
                        "brand": "StyleCraft",
                        "rating": 3,
                        "inStock": true,
                        "category": "jackets",
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Navy",
                            "Black",
                            "Gray"
                        ]
                    }
                ],
                "shorts": [
                    {
                        "id": "ms001",
                        "name": "French Terry Sweatshorts",
                        "price": 78,
                        "originalPrice": 85,
                        "image": "/images/products/shorts-1.jpg",
                        "hoverImage": "/images/products/shorts-2.jpg",
                        "description": "Comfortable French terry sweatshorts",
                        "brand": "ComfortWear",
                        "rating": 3,
                        "inStock": true,
                        "category": "shorts",
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Gray",
                            "Navy",
                            "Black"
                        ]
                    }
                ]
            },
            "womens-collection": {
                "formal": [
                    {
                        "id": "wf001",
                        "name": "Black Floral Wrap Midi Skirt",
                        "price": 25,
                        "originalPrice": 35,
                        "image": "/images/products/clothes-3.jpg",
                        "hoverImage": "/images/products/clothes-4.jpg",
                        "description": "Elegant floral wrap midi skirt perfect for formal occasions",
                        "brand": "FashionPlus",
                        "rating": 5,
                        "inStock": true,
                        "category": "formal",
                        "sizes": [
                            "XS",
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Navy",
                            "Burgundy"
                        ]
                    },
                    {
                        "id": "wf687a2d58589d6",
                        "name": "haa",
                        "price": 241,
                        "originalPrice": 255,
                        "image": "/images/products/jacket-3.jpg",
                        "hoverImage": "/images/products/jacket-4.jpg",
                        "description": "21",
                        "brand": "Hawaan",
                        "rating": 3,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Navy",
                            "Charcoal"
                        ]
                    }
                ],
                "kurtas&suits": [
                    {
                        "id": "wk001",
                        "name": "Traditional Kurta Set",
                        "price": 89.99,
                        "originalPrice": 120,
                        "image": "/images/products/clothes-3.jpg",
                        "hoverImage": "/images/products/clothes-4.jpg",
                        "description": "Beautiful traditional kurta with matching dupatta",
                        "brand": "EthnicWear",
                        "rating": 4,
                        "inStock": true,
                        "category": "kurtas&suits",
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Pink",
                            "Blue",
                            "Green",
                            "Yellow"
                        ]
                    }
                ],
                "saree": [
                    {
                        "id": "ws001",
                        "name": "Silk Saree",
                        "price": 199.99,
                        "originalPrice": 299.99,
                        "image": "/images/products/clothes-3.jpg",
                        "hoverImage": "/images/products/clothes-4.jpg",
                        "description": "Premium silk saree with intricate designs",
                        "brand": "SilkTradition",
                        "rating": 5,
                        "inStock": true,
                        "category": "saree",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Red",
                            "Blue",
                            "Green",
                            "Gold"
                        ]
                    }
                ],
                "lehenga&cholis": [
                    {
                        "id": "wl001",
                        "name": "Designer Lehenga Choli",
                        "price": 299.99,
                        "originalPrice": 450,
                        "image": "/images/products/clothes-3.jpg",
                        "hoverImage": "/images/products/clothes-4.jpg",
                        "description": "Stunning designer lehenga choli for special occasions",
                        "brand": "DesignerWear",
                        "rating": 5,
                        "inStock": true,
                        "category": "lehenga&cholis",
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Pink",
                            "Red",
                            "Blue",
                            "Purple"
                        ]
                    }
                ],
                "dupattas&shawls": [
                    {
                        "id": "wd001",
                        "name": "Silk Dupatta",
                        "price": 49.99,
                        "originalPrice": 69.99,
                        "image": "/images/products/clothes-3.jpg",
                        "hoverImage": "/images/products/clothes-4.jpg",
                        "description": "Elegant silk dupatta with beautiful embroidery",
                        "brand": "SilkCraft",
                        "rating": 4,
                        "inStock": true,
                        "category": "dupattas&shawls",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Pink",
                            "Blue",
                            "Green",
                            "Gold"
                        ]
                    }
                ]
            },
            "kids-collection": {
                "formal": [
                    {
                        "id": "kf001",
                        "name": "Kids Formal Suit",
                        "price": 79.99,
                        "originalPrice": 99.99,
                        "image": "/images/products/1.jpg",
                        "hoverImage": "/images/products/2.jpg",
                        "description": "Adorable formal suit for kids",
                        "brand": "KidsFashion",
                        "rating": 4,
                        "inStock": true,
                        "category": "formal",
                        "sizes": [
                            "2T",
                            "3T",
                            "4T",
                            "5T",
                            "6T"
                        ],
                        "colors": [
                            "Navy",
                            "Black",
                            "Gray"
                        ]
                    }
                ],
                "casual": [
                    {
                        "id": "kc001",
                        "name": "Kids Casual Outfit",
                        "price": 39.99,
                        "originalPrice": 49.99,
                        "image": "/images/products/3.jpg",
                        "hoverImage": "/images/products/4.jpg",
                        "description": "Comfortable casual outfit for kids",
                        "brand": "KidsComfort",
                        "rating": 5,
                        "inStock": true,
                        "category": "casual",
                        "sizes": [
                            "2T",
                            "3T",
                            "4T",
                            "5T",
                            "6T"
                        ],
                        "colors": [
                            "Blue",
                            "Red",
                            "Green",
                            "Yellow"
                        ]
                    }
                ],
                "shorts": [
                    {
                        "id": "ks001",
                        "name": "Kids Summer Shorts",
                        "price": 24.99,
                        "originalPrice": 29.99,
                        "image": "/images/products/shorts-1.jpg",
                        "hoverImage": "/images/products/shorts-2.jpg",
                        "description": "Comfortable summer shorts for kids",
                        "brand": "SummerKids",
                        "rating": 4,
                        "inStock": true,
                        "category": "shorts",
                        "sizes": [
                            "2T",
                            "3T",
                            "4T",
                            "5T",
                            "6T"
                        ],
                        "colors": [
                            "Blue",
                            "Red",
                            "Green"
                        ]
                    }
                ],
                "trousers": [
                    {
                        "id": "kt001",
                        "name": "Kids Formal Trousers",
                        "price": 34.99,
                        "originalPrice": 44.99,
                        "image": "/images/products/1.jpg",
                        "hoverImage": "/images/products/2.jpg",
                        "description": "Formal trousers for kids",
                        "brand": "KidsFormal",
                        "rating": 4,
                        "inStock": true,
                        "category": "trousers",
                        "sizes": [
                            "2T",
                            "3T",
                            "4T",
                            "5T",
                            "6T"
                        ],
                        "colors": [
                            "Navy",
                            "Black",
                            "Khaki"
                        ]
                    }
                ],
                "tshirts": [
                    {
                        "id": "kt001",
                        "name": "Kids Cotton T-Shirt",
                        "price": 19.99,
                        "originalPrice": 24.99,
                        "image": "/images/products/2.jpg",
                        "hoverImage": "/images/products/3.jpg",
                        "description": "Soft cotton t-shirt for kids",
                        "brand": "KidsComfort",
                        "rating": 5,
                        "inStock": true,
                        "category": "tshirts",
                        "sizes": [
                            "2T",
                            "3T",
                            "4T",
                            "5T",
                            "6T"
                        ],
                        "colors": [
                            "White",
                            "Blue",
                            "Pink",
                            "Yellow"
                        ]
                    }
                ]
            },
            "makeup": {
                "lipstick": [
                    {
                        "id": "ml001",
                        "name": "Matte Lipstick",
                        "price": 24.99,
                        "originalPrice": 29.99,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Long-lasting matte lipstick",
                        "brand": "BeautyPro",
                        "rating": 4,
                        "inStock": true,
                        "category": "lipstick",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Red",
                            "Pink",
                            "Nude",
                            "Berry"
                        ]
                    },
                    {
                        "id": "ml68796cb6d0a64",
                        "name": "adas",
                        "price": 132,
                        "originalPrice": 222,
                        "image": "/images/products/jacket-3.jpg",
                        "hoverImage": "/images/products/jacket-4.jpg",
                        "description": "free! free! free!",
                        "brand": "Hawaan",
                        "rating": 4,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "Black",
                            "Navy",
                            "Charcoal"
                        ]
                    },
                    {
                        "id": "ml68796cfe555ea",
                        "name": "adas",
                        "price": 23,
                        "originalPrice": 31,
                        "image": "/images/products/jacket-3.jpg",
                        "hoverImage": "/images/products/jacket-4.jpg",
                        "description": "231",
                        "brand": "13",
                        "rating": 3,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "1"
                        ],
                        "colors": [
                            "231"
                        ]
                    }
                ],
                "eyeliner": [
                    {
                        "id": "me001",
                        "name": "Waterproof Eyeliner",
                        "price": 19.99,
                        "originalPrice": 24.99,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Smudge-proof waterproof eyeliner",
                        "brand": "EyePerfect",
                        "rating": 5,
                        "inStock": true,
                        "category": "eyeliner",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Black",
                            "Brown",
                            "Blue"
                        ]
                    }
                ],
                "primer": [
                    {
                        "id": "mp001",
                        "name": "Face Primer",
                        "price": 34.99,
                        "originalPrice": 39.99,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Smoothing face primer for flawless makeup",
                        "brand": "PrimePerfect",
                        "rating": 4,
                        "inStock": true,
                        "category": "primer",
                        "sizes": [
                            "30ml",
                            "50ml"
                        ],
                        "colors": [
                            "Clear",
                            "Tinted"
                        ]
                    }
                ],
                "mascara": [
                    {
                        "id": "mm001",
                        "name": "Volume Mascara",
                        "price": 29.99,
                        "originalPrice": 34.99,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Volumizing mascara for dramatic lashes",
                        "brand": "LashPerfect",
                        "rating": 5,
                        "inStock": true,
                        "category": "mascara",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Black",
                            "Brown",
                            "Blue"
                        ]
                    }
                ]
            },
            "perfumes": {
                "floral": [
                    {
                        "id": "pf001",
                        "name": "Rose Garden Perfume",
                        "price": 89.99,
                        "originalPrice": 120,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Elegant floral perfume with rose notes",
                        "brand": "FloralScents",
                        "rating": 5,
                        "inStock": true,
                        "category": "floral",
                        "sizes": [
                            "50ml",
                            "100ml"
                        ],
                        "colors": [
                            "Pink Bottle",
                            "Clear Bottle"
                        ]
                    }
                ],
                "oriental": [
                    {
                        "id": "po001",
                        "name": "Oriental Spice",
                        "price": 99.99,
                        "originalPrice": 130,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Rich oriental perfume with spicy notes",
                        "brand": "OrientalLux",
                        "rating": 4,
                        "inStock": true,
                        "category": "oriental",
                        "sizes": [
                            "50ml",
                            "100ml"
                        ],
                        "colors": [
                            "Gold Bottle",
                            "Black Bottle"
                        ]
                    }
                ],
                "woody": [
                    {
                        "id": "pw001",
                        "name": "Sandalwood Essence",
                        "price": 79.99,
                        "originalPrice": 99.99,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Warm woody perfume with sandalwood base",
                        "brand": "WoodScents",
                        "rating": 4,
                        "inStock": true,
                        "category": "woody",
                        "sizes": [
                            "50ml",
                            "100ml"
                        ],
                        "colors": [
                            "Brown Bottle",
                            "Clear Bottle"
                        ]
                    }
                ],
                "fougere": [
                    {
                        "id": "pfo001",
                        "name": "Fresh Fougu00e8re",
                        "price": 69.99,
                        "originalPrice": 89.99,
                        "image": "/images/products/perfume.jpg",
                        "hoverImage": "/images/products/perfume.jpg",
                        "description": "Fresh fougu00e8re perfume with herbal notes",
                        "brand": "FreshScents",
                        "rating": 4,
                        "inStock": true,
                        "category": "fougere",
                        "sizes": [
                            "50ml",
                            "100ml"
                        ],
                        "colors": [
                            "Green Bottle",
                            "Clear Bottle"
                        ]
                    },
                    {
                        "id": "pf688b0fb344a36",
                        "name": "wasik5738@gmail.com",
                        "price": 46796,
                        "originalPrice": 8374,
                        "image": "/assets/images/products/shirt-1.jpg",
                        "hoverImage": "/assets/images/products/shirt-2.jpg",
                        "description": "kjbddiubbwuidbnuwbd wduvdd wwhudhdhwhwv dh eubdy dhh dbcchnxjw nw djnasbxubdjnn dnq jbhdbwjdbwnbd jbhbjnw dnnhvjsd xmnjj n nd sihhmw dm hxk cncbbxi dn  dnpiodhdnd dnidvhdn d mnchxoojdbn dbibcn nbjchdjdhbdj ddhdn d ",
                        "brand": "FormalWear",
                        "rating": 3,
                        "inStock": true,
                        "is_featured": false,
                        "sizes": [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ],
                        "colors": [
                            "White",
                            "Light Blue",
                            "Pink"
                        ]
                    }
                ]
            },
            "jewellery": {
                "earrings": [
                    {
                        "id": "je001",
                        "name": "Diamond Stud Earrings",
                        "price": 199.99,
                        "originalPrice": 299.99,
                        "image": "/images/products/jewellery-1.jpg",
                        "hoverImage": "/images/products/jewellery-2.jpg",
                        "description": "Elegant diamond stud earrings",
                        "brand": "DiamondLux",
                        "rating": 5,
                        "inStock": true,
                        "category": "earrings",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Silver",
                            "Gold",
                            "Rose Gold"
                        ]
                    }
                ],
                "couplerings": [
                    {
                        "id": "jc001",
                        "name": "Couple Wedding Rings",
                        "price": 299.99,
                        "originalPrice": 399.99,
                        "image": "/images/products/jewellery-1.jpg",
                        "hoverImage": "/images/products/jewellery-2.jpg",
                        "description": "Beautiful couple wedding rings set",
                        "brand": "LoveRings",
                        "rating": 5,
                        "inStock": true,
                        "category": "couplerings",
                        "sizes": [
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10"
                        ],
                        "colors": [
                            "Gold",
                            "Silver",
                            "Platinum"
                        ]
                    }
                ],
                "necklace": [
                    {
                        "id": "jn001",
                        "name": "Pearl Necklace",
                        "price": 149.99,
                        "originalPrice": 199.99,
                        "image": "/images/products/jewellery-1.jpg",
                        "hoverImage": "/images/products/jewellery-2.jpg",
                        "description": "Classic pearl necklace",
                        "brand": "PearlElegance",
                        "rating": 4,
                        "inStock": true,
                        "category": "necklace",
                        "sizes": [
                            "16 inch",
                            "18 inch",
                            "20 inch"
                        ],
                        "colors": [
                            "White Pearl",
                            "Black Pearl",
                            "Pink Pearl"
                        ]
                    }
                ],
                "bracelet": [
                    {
                        "id": "jb001",
                        "name": "Gold Bracelet",
                        "price": 179.99,
                        "originalPrice": 229.99,
                        "image": "/images/products/jewellery-1.jpg",
                        "hoverImage": "/images/products/jewellery-2.jpg",
                        "description": "Elegant gold bracelet",
                        "brand": "GoldCraft",
                        "rating": 4,
                        "inStock": true,
                        "category": "bracelet",
                        "sizes": [
                            "Small",
                            "Medium",
                            "Large"
                        ],
                        "colors": [
                            "Gold",
                            "Rose Gold",
                            "White Gold"
                        ]
                    }
                ]
            },
            "mens-accessories": {
                "sunglasses": [
                    {
                        "id": "mas001",
                        "name": "Aviator Sunglasses",
                        "price": 89.99,
                        "originalPrice": 120,
                        "image": "/images/products/glasses.jpg",
                        "hoverImage": "/images/products/glasses.jpg",
                        "description": "Classic aviator sunglasses",
                        "brand": "SunStyle",
                        "rating": 4,
                        "inStock": true,
                        "category": "sunglasses",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Black",
                            "Brown",
                            "Silver"
                        ]
                    }
                ],
                "watches": [
                    {
                        "id": "maw001",
                        "name": "Luxury Watch",
                        "price": 299.99,
                        "originalPrice": 399.99,
                        "image": "/images/products/watch-1.jpg",
                        "hoverImage": "/images/products/watch-2.jpg",
                        "description": "Premium luxury watch",
                        "brand": "TimeLux",
                        "rating": 5,
                        "inStock": true,
                        "category": "watches",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Silver",
                            "Gold",
                            "Black"
                        ]
                    }
                ],
                "wallets": [
                    {
                        "id": "maw001",
                        "name": "Leather Wallet",
                        "price": 59.99,
                        "originalPrice": 79.99,
                        "image": "/images/products/shoe-1.jpg",
                        "hoverImage": "/images/products/shoe-1_1.jpg",
                        "description": "Premium leather wallet",
                        "brand": "LeatherCraft",
                        "rating": 4,
                        "inStock": true,
                        "category": "wallets",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Black",
                            "Brown",
                            "Tan"
                        ]
                    }
                ],
                "shoes": [
                    {
                        "id": "mas001",
                        "name": "Casual Sneakers",
                        "price": 79.99,
                        "originalPrice": 99.99,
                        "image": "/images/products/sports-2.jpg",
                        "hoverImage": "/images/products/sports-4.jpg",
                        "description": "Comfortable casual sneakers",
                        "brand": "SportStyle",
                        "rating": 4,
                        "inStock": true,
                        "category": "shoes",
                        "sizes": [
                            "7",
                            "8",
                            "9",
                            "10",
                            "11"
                        ],
                        "colors": [
                            "White",
                            "Black",
                            "Gray"
                        ]
                    }
                ]
            },
            "electronics": {
                "sw": [
                    {
                        "id": "esw001",
                        "name": "Smart Watch Pro",
                        "price": 299.99,
                        "originalPrice": 399.99,
                        "image": "/images/products/watch-1.jpg",
                        "hoverImage": "/images/products/watch-2.jpg",
                        "description": "Advanced smartwatch with health monitoring",
                        "brand": "TechPro",
                        "rating": 5,
                        "inStock": true,
                        "category": "sw",
                        "sizes": [
                            "42mm",
                            "46mm"
                        ],
                        "colors": [
                            "Black",
                            "Silver",
                            "Gold"
                        ]
                    }
                ],
                "stv": [
                    {
                        "id": "estv001",
                        "name": "4K Smart TV",
                        "price": 799.99,
                        "originalPrice": 999.99,
                        "image": "/images/electronics-banner-1.jpg",
                        "hoverImage": "/images/electronics-banner-2.jpg",
                        "description": "Ultra HD 4K Smart TV with streaming apps",
                        "brand": "VisionTech",
                        "rating": 5,
                        "inStock": true,
                        "category": "stv",
                        "sizes": [
                            "43 inch",
                            "55 inch",
                            "65 inch"
                        ],
                        "colors": [
                            "Black"
                        ]
                    }
                ],
                "mouse": [
                    {
                        "id": "em001",
                        "name": "Wireless Gaming Mouse",
                        "price": 59.99,
                        "originalPrice": 79.99,
                        "image": "/images/electronics-banner-2.jpg",
                        "hoverImage": "/images/electronics-banner-1.jpg",
                        "description": "High-precision wireless gaming mouse",
                        "brand": "GameTech",
                        "rating": 4,
                        "inStock": true,
                        "category": "mouse",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Black",
                            "White",
                            "RGB"
                        ]
                    }
                ],
                "microphone": [
                    {
                        "id": "emic001",
                        "name": "USB Microphone",
                        "price": 89.99,
                        "originalPrice": 120,
                        "image": "/images/electronics-banner-1.jpg",
                        "hoverImage": "/images/electronics-banner-2.jpg",
                        "description": "Professional USB microphone for streaming",
                        "brand": "AudioPro",
                        "rating": 4,
                        "inStock": true,
                        "category": "microphone",
                        "sizes": [
                            "One Size"
                        ],
                        "colors": [
                            "Black",
                            "Silver"
                        ]
                    }
                ]
            }
        }



  // Chatbot Configuration
  const chatbotConfig = {
    responses: {
      greeting: [
        "Hello! 👋 I'm your e-commerce assistant. How can I help you today?",
        "Hi there! 😊 I'm here to assist you with any questions about our store.",
        "Welcome! 🎉 How may I assist you with your shopping today?"
      ],  
      introduction: {
        text: `HAWAAN is Pakistan's fastest growing e-commerce platform with over 1 million satisfied customers. We offer:
        - 100% authentic products with manufacturer warranties
        - Cash on delivery across Pakistan
        - Free returns within 14 days
        - Dedicated customer support 24/7
        
        Our product categories include fashion, electronics, home appliances, beauty products and more.`,
        link: "/about",
        linkText: "Explore our story"
      },
      returnPolicy: {
        text: `Our hassle-free return policy:
        
        🛍️ Fashion Items: 30 days return
        - Must be unused with original tags
        - Original packaging required
        
        📱 Electronics: 14 days return
        - Factory seals must be intact
        - Complete accessories required
        
        🔄 Process:
        1. Initiate return in "My Orders"
        2. Get pickup scheduled
        3. Refund processed in 3-5 working days
        
        *Some items marked "Final Sale" cannot be returned`,
        link: "/returns",
        linkText: "Read full policy"
      },
      privacyPolicy: {
        text: `Your privacy matters to us. Here's how we handle your data:
        
        🔒 Data Security:
        - 256-bit SSL encryption
        - PCI-DSS compliant payments
        - Regular security audits
        
        📋 Data We Collect:
        - Account information (name, email, phone)
        - Order history
        - Device information for security
        
        🚫 What We Don't Do:
        - Never sell your data
        - No unnecessary data collection
        - Transparent about data usage`,
        link: "/privacy",
        linkText: "Full privacy policy"
      },
      faqs: {
        sections: [
          {
            question: "How long does delivery take?",
            answer: `Standard delivery times:
            - Karachi: 1-2 working days
            - Lahore/Islamabad: 2-3 working days
            - Other cities: 3-5 working days
            
            Express delivery available at checkout.`,
            link: "/shipping",
            linkText: "Delivery info"
          },
          {
            question: "What payment methods do you accept?",
            answer: `We accept:
            - Credit/Debit Cards (Visa, MasterCard)
            - EasyPaisa/JazzCash
            - Bank Transfers
            - Cash on Delivery
            - Installment plans via credit cards`,
            link: "/payments",
            linkText: "Payment options"
          },
          {
            question: "How do I track my order?",
            answer: `Track your order:
            1. Go to "My Orders"
            2. Click "Track Package"
            3. Get real-time updates
            
            You'll also receive SMS/email notifications at each stage.`,
            link: "/track",
            linkText: "Track now"
          },
          {
            question: "Do you offer international shipping?",
            answer: `Currently we only ship within Pakistan. We're working to expand to:
            - UAE
            - USA
            - UK
            - Canada
            
            Sign up for updates on international shipping.`,
            link: "/notify-me",
            linkText: "Get notified"
          },
          {
            question: "What if I receive a damaged product?",
            answer: `If you receive a damaged item:
            1. Don't accept delivery or take photos if already opened
            2. Contact us within 24 hours
            3. We'll arrange replacement immediately
            
            No questions asked replacement policy for damaged items.`,
            link: "/contact",
            linkText: "Report issue"
          }
        ]
      },
      unknown: [
        "I'm not sure I understand. Could you rephrase your question?",
        "I don't have information on that. Please contact our support team for assistance.",
        "That's beyond my current knowledge. Try asking about our products, policies, or services."
      ],
      productGuide: {
        default: "I can help you find products. Please tell me:\n- What category you're interested in (e.g., electronics, clothing)\n- Your budget range\n- Any specific features you need",
        categories: {
          electronics: "We have a wide range of electronics including smartphones, laptops, and accessories.",
          clothing: "Our clothing collection features the latest fashion trends for men, women, and kids.",
          home: "Discover home essentials from kitchenware to furniture and decor items."
        },
        budget: {
          low: "Here are affordable options under $50:",
          medium: "Here are quality products between $50-$200:",
          high: "Here are premium products over $200:"
        }
      }
    },
    categoryKeywords: {
      "mens-collection": ["men", "man", "gentleman", "male", "mens", "mans", "men's"],
      "mens-accessories": ["men-accesssories", "mens-accesssories", "accesssories for men", "male-accesssories", "accesssories"],
      "womens-collection": ["women", "woman", "lady", "female", "womens", "ladies"],
      "kids-collection": ["kids", "kid", "children", "child", "boys", "girls"],
      "makeup": ["makeup", "cosmetic", "beauty"],
      "perfumes": ["perfume", "fragrance", "scent"],
      "jewellery": ["jewelry", "jewellery", "ring", "necklace", "earring"],
      "electronics": ["electronic", "tech", "gadget", "device"]
    },
    subcategoryKeywords: {
      "formal": ["formal", "office", "business", "suit", "dress"],
      "casual": ["casual", "everyday", "regular"],
      "tshirts": ["tshirt", "t-shirt", "shirts"],
      "jackets": ["jacket", "coat", "blazer"],
      "shorts": ["shorts", "short pants"],
      "kurtas": ["kurta", "traditional", "ethnic"],
      "saree": ["saree", "sari"],
      "lehenga": ["lehenga", "choli"],
      "dupattas": ["dupatta", "shawl", "scarf"],
      "trousers": ["trouser", "pants", "slacks"],
      "lipstick": ["lipstick", "lip color"],
      "eyeliner": ["eyeliner", "eye liner"],
      "primer": ["primer", "base"],
      "mascara": ["mascara", "lash"],
      "floral": ["floral", "flower"],
      "oriental": ["oriental", "spice", "spicy"],
      "woody": ["woody", "wood", "sandalwood"],
      "fougere": ["fougere", "fresh"],
      "earrings": ["earring", "ear ring"],
      "couplerings": ["couple ring", "wedding ring", "marriage ring"],
      "necklace": ["necklace", "chain"],
      "bracelet": ["bracelet", "bangle"],
      "sunglasses": ["sunglass", "sun glass"],
      "watches": ["watch", "timepiece"],
      "wallets": ["wallet", "money"],
      "shoes": ["shoe", "footwear", "shoes"],
      "sw": ["smart watch", "smartwatch"],
      "stv": ["smart tv", "television", "tv"],
      "mouse": ["mouse", "computer mouse"],
      "microphone": ["microphone", "mic"]
    },
    quickReplies: [
      "Return policy",
      "Contact support",
      "Find men's formal shoes",
      "Find dresses under $100 for ladies",
      "About us",
      "What's your privacy policy?",
      "Privacy policy",
      "men-accessories"
    ]
  };

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Function to toggle FAQ items
  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const showFaqResponse = () => {
    return {
      id: Date.now(),
      sender: 'bot',
      text: "Here are answers to frequently asked questions:",
      faqs: chatbotConfig.responses.faqs,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollButton(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (messagesContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        setShowScrollButton(scrollTop < scrollHeight - clientHeight - 50);
      }
    };

    const container = messagesContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  // Add user message
  const addUserMessage = (text) => {
    if (!text.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Add bot message with typing effect
  const addBotMessage = (text, link = null, linkText = null, products = null) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        text,
        sender: 'bot',
        link,
        linkText,
        products,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
      
      // Add quick replies if not a product response
      if (!products) {
        addQuickReplies();
      }
    }, 1500);
  };

  // Format product cards
  const formatProducts = (products) => {
    return products.map(product => {
      const discount = product.originalPrice ? 
        Math.round(100 - (product.price / product.originalPrice * 100)) : 0;
      
      return (
        <div key={product.id} className="product-card">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p className="product-price">
            {product.originalPrice && <span className="original-price">${product.originalPrice.toFixed(2)}</span>}
            ${product.price.toFixed(2)}
            {discount > 0 && <span style={{color: 'var(--accent-color)'}}>({discount}% off)</span>}
          </p>
          <a href={product.link || '#'} className="product-link">View Product</a>
        </div>
      );
    });
  };

  const addQuickReplies = () => {
    // Get 3 random quick replies
    const shuffled = [...chatbotConfig.quickReplies].sort(() => 0.5 - Math.random());
    const selectedReplies = shuffled.slice(0, 3);
    
    const quickReplyButtons = selectedReplies.map((reply, index) => (
      <button 
        key={index} 
        className="quick-reply-btn"
        onClick={() => {
          addUserMessage(reply);
          processUserMessage(reply);
        }}
      >
        {reply}
      </button>
    ));
    
    // Create a new message with quick replies
    const newMessage = {
      id: Date.now(),
      sender: 'bot',
      quickReplies: quickReplyButtons,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Add to messages state
    setMessages(prev => [...prev, newMessage]);
  };

  // Process user message
  const processUserMessage = (message) => {
    const lowerMsg = message.toLowerCase();
    
    // Check for greeting
    if (/hi|hello|hey/.test(lowerMsg)) {
      addBotMessage(getRandomResponse(chatbotConfig.responses.greeting));
      return;
    }
    
    // Check for different query types
    if (/who are you|introduction|about your company/.test(lowerMsg)) {
      const response = chatbotConfig.responses.introduction;
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/return|refund|exchange/.test(lowerMsg)) {
      const response = chatbotConfig.responses.returnPolicy;
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/privacy|data|gdpr/.test(lowerMsg)) {
      const response = chatbotConfig.responses.privacyPolicy;
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/about us|about the company|our story/.test(lowerMsg)) {
      const response = chatbotConfig.responses.introduction; // Using introduction for about us
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/contact|support|help|customer service/.test(lowerMsg)) {
      addBotMessage("You can contact our support team at support@hawaam.com or call us at +92 300 1234567.");
      return;
    }
    
    if (/blog|article|post/.test(lowerMsg)) {
      addBotMessage("Check out our latest blog posts at /blog");
      return;
    }
    
    if (/faq|frequently asked|common questions/.test(lowerMsg)) {
      setMessages(prev => [...prev, showFaqResponse()]);
      return;
    }
    
    // Product search queries
    if (/find|search|look for|show me|product|buy|shop|want|need|looking|give me|display|list/i.test(lowerMsg)) {
      const products = searchProducts(message);
      
      if (products.length > 0) {
        let responseText = `I found ${products.length} matching products:`;
        
        // Add context about what was searched
        const mainCategory = Object.entries(chatbotConfig.categoryKeywords).find(
          ([_, keywords]) => keywords.some(kw => lowerMsg.includes(kw)))
        ?.[0];
        
        const subcategory = Object.entries(chatbotConfig.subcategoryKeywords).find(
          ([_, keywords]) => keywords.some(kw => lowerMsg.includes(kw)))
        ?.[0];
        
        if (mainCategory) {
          const prettyCategory = mainCategory.replace('-collection', '').replace(/-/g, ' ');
          responseText += ` in ${prettyCategory} collection`;
          
          if (subcategory) {
            responseText += ` (${subcategory} category)`;
          }
        }
        
        const priceMatch = message.match(/\$?(\d+)/);
        if (priceMatch) {
          const price = parseFloat(priceMatch[1]);
          if (/under|below|less/i.test(lowerMsg)) {
            responseText += ` under $${price}`;
          } else if (/over|above|more/i.test(lowerMsg)) {
            responseText += ` over $${price}`;
          } else {
            responseText += ` around $${price}`;
          }
        }
        
        addBotMessage(responseText, null, null, products);
      } else {
        let notFoundMessage = "I couldn't find any products matching your request.";
        
        // Give specific feedback about what wasn't found
        const mainCategory = Object.entries(chatbotConfig.categoryKeywords).find(
          ([_, keywords]) => keywords.some(kw => lowerMsg.includes(kw)))
        ?.[0];
        
        const subcategory = Object.entries(chatbotConfig.subcategoryKeywords).find(
          ([_, keywords]) => keywords.some(kw => lowerMsg.includes(kw)))
        ?.[0];
        
        if (mainCategory) {
          const prettyCategory = mainCategory.replace('-collection', '').replace(/-/g, ' ');
          notFoundMessage += ` We currently don't have products in our ${prettyCategory} collection`;
          
          if (subcategory) {
            notFoundMessage += ` (${subcategory} category)`;
          }
          
          notFoundMessage += " or they may be out of stock.";
        }
        
        addBotMessage(notFoundMessage);
      }
      return;
    }
    
    // Budget queries
    if (/\$|dollar|price|cost|budget|cheap|expensive|affordable/.test(lowerMsg)) {
      handleBudgetQuery(message);
      return;
    }
    
    if (/faq|frequently asked|common questions|help|query|doubts/.test(lowerMsg)) {
      setMessages(prev => [...prev, showFaqResponse()]);
      return;
    }
    
    // If no matches found
    addBotMessage(getRandomResponse(chatbotConfig.responses.unknown));
  };

  // Search products based on query
  const searchProducts = (query) => {
    const lowerQuery = query.toLowerCase();
    let foundProducts = [];
    
    // 1. Determine main category
    let mainCategory = null;
    for (const [category, keywords] of Object.entries(chatbotConfig.categoryKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        mainCategory = category;
        break;
      }
    }
    
    // 2. Determine subcategory
    let subcategory = null;
    for (const [subcat, keywords] of Object.entries(chatbotConfig.subcategoryKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        subcategory = subcat;
        break;
      }
    }
    
    // 3. Extract price range
    const priceMatch = lowerQuery.match(/\$?(\d+)/);
    const price = priceMatch ? parseFloat(priceMatch[1]) : null;
    const underPrice = /under \$?\d+|less than \$?\d+|below \$?\d+|upto \$?\d+|maximum \$?\d+/i.test(lowerQuery);
    const overPrice = /over \$?\d+|more than \$?\d+|above \$?\d+|minimum \$?\d+/i.test(lowerQuery);
    const exactPrice = /for \$?\d+|around \$?\d+|near \$?\d+/i.test(lowerQuery);
    
    // 4. Search logic
    if (mainCategory) {
      // Search in specific main category
      const categoryProducts = productDatabase[mainCategory];
      
      if (subcategory) {
        // Search in specific subcategory
        if (categoryProducts && categoryProducts[subcategory]) {
          foundProducts = filterByPrice(categoryProducts[subcategory], price, underPrice, overPrice, exactPrice);
        }
      } else {
        // Search all subcategories in main category
        if (categoryProducts) {
          for (const subcatProducts of Object.values(categoryProducts)) {
            foundProducts = foundProducts.concat(
              filterByPrice(subcatProducts, price, underPrice, overPrice, exactPrice)
            );
          }
        }
      }
    } else if (subcategory) {
      // Search subcategory across all main categories
      for (const categoryProducts of Object.values(productDatabase)) {
        if (categoryProducts[subcategory]) {
          foundProducts = foundProducts.concat(
            filterByPrice(categoryProducts[subcategory], price, underPrice, overPrice, exactPrice)
          );
        }
      }
    } else if (price) {
      // Search all products by price only
      for (const categoryProducts of Object.values(productDatabase)) {
        for (const subcatProducts of Object.values(categoryProducts)) {
          foundProducts = foundProducts.concat(
            filterByPrice(subcatProducts, price, underPrice, overPrice, exactPrice)
          );
        }
      }
    } else {
      // No specific filters - search all products for keywords
      for (const categoryProducts of Object.values(productDatabase)) {
        for (const subcatProducts of Object.values(categoryProducts)) {
          foundProducts = foundProducts.concat(
            filterByKeywords(subcatProducts, lowerQuery)
          );
        }
      }
    }
    
    // Remove duplicates and limit results
    return [...new Set(foundProducts)].slice(0, 5);
  };

  // Helper function to filter by price
  const filterByPrice = (products, price, underPrice, overPrice, exactPrice) => {
    if (!price) return products;
    
    return products.filter(product => {
      if (exactPrice) {
        // ±20% range for "around $X" queries
        return product.price >= price * 0.8 && product.price <= price * 1.2;
      } else if (underPrice) {
        return product.price <= price;
      } else if (overPrice) {
        return product.price >= price;
      } else {
        // Default to "under X" if no modifier specified
        return product.price <= price;
      }
    });
  };

  // Helper function to filter by keywords
  const filterByKeywords = (products, query) => {
    const searchTerms = query.split(/\s+/);
    return products.filter(product => {
      const productText = `${product.name} ${product.description} ${product.brand}`.toLowerCase();
      return searchTerms.every(term => productText.includes(term));
    });
  };

  // Handle budget-related queries
  const handleBudgetQuery = (message) => {
    const priceMatch = message.match(/\$?(\d+)/);
    if (priceMatch) {
      const price = parseInt(priceMatch[1]);
      let budgetRange = '';
      
      if (price < 50) {
        budgetRange = 'low';
      } else if (price <= 200) {
        budgetRange = 'medium';
      } else {
        budgetRange = 'high';
      }
      
      // Find products in the budget range
      const products = [];
      for (const [coll, categories] of Object.entries(productDatabase)) {
        for (const [cat, items] of Object.entries(categories)) {
          for (const product of items) {
            if (
              (budgetRange === 'low' && product.price < 50) ||
              (budgetRange === 'medium' && product.price >= 50 && product.price <= 200) ||
              (budgetRange === 'high' && product.price > 200)
            ) {
              products.push(product);
            }
          }
        }
      }
      
      // Show up to 3 random products in the budget range
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      const selectedProducts = shuffled.slice(0, 3);
      
      if (selectedProducts.length > 0) {
        addBotMessage(
          chatbotConfig.responses.productGuide.budget[budgetRange],
          null,
          null,
          selectedProducts
        );
      } else {
        addBotMessage(
          `We couldn't find products in that price range. Try adjusting your budget or browse our full catalog.`,
          '/products',
          'View all products'
        );
      }
    } else {
      addBotMessage("Please specify a budget amount (e.g., 'under $100') so I can recommend suitable products.");
    }
  };

  // Helper function to get random response from array
  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      addUserMessage(userInput);
      setUserInput('');
      processUserMessage(userInput);
    }
  };

  // Initialize with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(getRandomResponse(chatbotConfig.responses.greeting));
    }
  }, [isOpen]);

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className={`chat-window ${isOpen ? 'active' : ''}`}>
          <div className="chat-header">
            <h3>E-commerce Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          
          <div className="chat-messages" ref={messagesContainerRef}>
            {messages.map((message) => (
              <React.Fragment key={message.id}>
                <div className={`message message-${message.sender}`}>
                  {message.text && (
                    <div className={`message-content ${message.sender}-message`}>
                      {message.text}
                      {message.link && (
                        <a href={message.link} className="chat-link" target="_blank" rel="noopener noreferrer">
                          {message.linkText || 'Learn more'}
                        </a>
                      )}
                      {message.products && formatProducts(message.products)}
                    </div>
                  )}
                  {message.quickReplies && (
                    <div className="quick-replies">
                      {message.quickReplies}
                    </div>
                  )}
                  <span className="message-timestamp">{message.timestamp}</span>
                </div>

                {message.faqs && (
                  <div className="message message-bot">
                    <div className="message-content bot-message">
                      <div className="faq-accordion">
                        <h4>Frequently Asked Questions:</h4>
                        {message.faqs.sections.map((faq, index) => (
                          <div 
                            key={index} 
                            className={`faq-item ${activeFaqIndex === index ? 'open' : ''}`}
                          >
                            <button 
                              className="faq-question"
                              onClick={() => toggleFaq(index)}
                            >
                              {faq.question}
                              <span className="faq-icon">
                                {activeFaqIndex === index ? '−' : '+'}
                              </span>
                            </button>
                            <div className="faq-answer">
                              <p>{faq.answer}</p>
                              {faq.link && (
                                <a href={faq.link} className="faq-link" target="_blank" rel="noopener noreferrer">
                                  {faq.linkText}
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
            
            {isTyping && (
              <div className="message message-bot">
                <div className="message-content bot-message typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {showScrollButton && (
            <button className="scroll-down-btn" onClick={scrollToBottom}>
              ↓
            </button>
          )}
          
          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              autoComplete="off"
            />
            <button type="submit" className="send-btn">
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </button>
          </form>
        </div>
      )}
      
      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Chatbot;