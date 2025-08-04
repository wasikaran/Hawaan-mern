import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; // We'll create this CSS file next

const Chatbot = () => {
  // Product Database (from your JSON)
  const productDatabase =  {}

  // Chatbot Configuration
  const chatbotConfig = {
    responses: {
      greeting: [
        "Hello! 👋 I'm your e-commerce assistant. How can I help you today?",
        "Hi there! 😊 I'm here to assist you with any questions about our store.",
        "Welcome! 🎉 How may I assist you with your shopping today?"
      ],  
    introduction: {
      detailed: `HAWAAN is Pakistan's fastest growing e-commerce platform with over 1 million satisfied customers. We offer:
      - 100% authentic products with manufacturer warranties
      - Cash on delivery across Pakistan
      - Free returns within 14 days
      - Dedicated customer support 24/7
      
      Our product categories include fashion, electronics, home appliances, beauty products and more.`,
      link: "/about",
      linkText: "Explore our story"
    },
    
    returnPolicy: {
      detailed: `Our hassle-free return policy:
      
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
      detailed: `Your privacy matters to us. Here's how we handle your data:
      
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
      "shoes": ["shoe", "footwear"],
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
  const messagesEndRef = useRef(null);
   const [activeFaqIndex, setActiveFaqIndex] = useState(null);

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
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add user message
  const addUserMessage = (text) => {
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
      const response = chatbotConfig.responses.aboutUs;
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/contact|support|help|customer service/.test(lowerMsg)) {
      const response = chatbotConfig.responses.contactSupport;
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/blog|article|post/.test(lowerMsg)) {
      const response = chatbotConfig.responses.blogArticles;
      addBotMessage(response.text, response.link, response.linkText);
      return;
    }
    
    if (/faq|frequently asked|common questions/.test(lowerMsg)) {
      const response = chatbotConfig.responses.faqs;
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
        
        <div className="chat-messages">
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
)
};

export default Chatbot;
