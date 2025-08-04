import React from 'react'

const faq = () => {
  return (
    <div>
      
  <main>

    <div class="page-container">
      <div class="container">
        
        <div class="page-header">
          <h1 class="page-title">Frequently Asked Questions</h1>
          <p class="page-subtitle">Find answers to common questions about shopping with HAWAAN</p>
        </div>

        <div class="faq-content">
          
          <section class="faq-search">
            <div class="search-container">
              <input type="text" id="faqSearch" placeholder="Search for answers..." class="faq-search-input"/>
              <button class="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
          </section>

          <section class="faq-categories">
            <h2>Browse by Category</h2>
            <div class="faq-category-grid">
              <div class="faq-category-card active" data-category="all">
                <div class="category-icon">
                  <ion-icon name="apps-outline"></ion-icon>
                </div>
                <h3>All Questions</h3>
                <span class="question-count">24 questions</span>
              </div>
              
              <div class="faq-category-card" data-category="orders">
                <div class="category-icon">
                  <ion-icon name="bag-outline"></ion-icon>
                </div>
                <h3>Orders & Shipping</h3>
                <span class="question-count">8 questions</span>
              </div>
              
              <div class="faq-category-card" data-category="returns">
                <div class="category-icon">
                  <ion-icon name="return-up-back-outline"></ion-icon>
                </div>
                <h3>Returns & Exchanges</h3>
                <span class="question-count">6 questions</span>
              </div>
              
              <div class="faq-category-card" data-category="account">
                <div class="category-icon">
                  <ion-icon name="person-outline"></ion-icon>
                </div>
                <h3>Account & Payment</h3>
                <span class="question-count">5 questions</span>
              </div>
              
              <div class="faq-category-card" data-category="products">
                <div class="category-icon">
                  <ion-icon name="shirt-outline"></ion-icon>
                </div>
                <h3>Products & Sizing</h3>
                <span class="question-count">5 questions</span>
              </div>
            </div>
          </section>

          <section class="faq-list">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-category-section" data-category="orders">
              <h3 class="category-title">Orders & Shipping</h3>
              
              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How can I track my order?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You can also log into your account to view order status and tracking information.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>What are your shipping options and costs?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>We offer several shipping options:</p>
                  <ul>
                    <li>Standard Shipping (5-7 business days): $5.99</li>
                    <li>Express Shipping (2-3 business days): $12.99</li>
                    <li>Overnight Shipping (1 business day): $24.99</li>
                    <li>Free Standard Shipping on orders over $55</li>
                  </ul>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>Do you ship internationally?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Additional customs duties and taxes may apply and are the responsibility of the customer.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How long does processing take before my order ships?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Most orders are processed within 1-2 business days. During peak seasons or sales events, processing may take up to 3-5 business days. You'll receive a confirmation email once your order has been processed and shipped.</p>
                </div>
              </div>

            </div>

            <div class="faq-category-section" data-category="returns">
              <h3 class="category-title">Returns & Exchanges</h3>
              
              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>What is your return policy?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>We offer a 30-day return policy for most items. Items must be in original condition with tags attached and in original packaging. Some items like underwear, swimwear, and personalized items are not eligible for return for hygiene reasons.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How do I initiate a return or exchange?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>To start a return or exchange:</p>
                  <ol>
                    <li>Log into your account and go to "Order History"</li>
                    <li>Select the order and click "Return Items"</li>
                    <li>Choose the items you want to return and the reason</li>
                    <li>Print the prepaid return label</li>
                    <li>Package the items and ship them back to us</li>
                  </ol>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>Who pays for return shipping?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Return shipping is free for defective items or our errors. For other returns, a $6.99 return shipping fee will be deducted from your refund. Exchanges for size or color are free if initiated within 14 days of delivery.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How long does it take to process a refund?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Once we receive your returned items, refunds are typically processed within 3-5 business days. It may take an additional 3-7 business days for the refund to appear on your original payment method, depending on your bank or credit card company.</p>
                </div>
              </div>

            </div>

            <div class="faq-category-section" data-category="account">
              <h3 class="category-title">Account & Payment</h3>
              
              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>What payment methods do you accept?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely using SSL encryption.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>Do I need to create an account to place an order?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, view order history, and receive exclusive offers. It also makes future purchases faster and easier.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How do I reset my password?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Click "Forgot Password" on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. If you don't receive the email, check your spam folder.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>Is my personal information secure?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Yes, we take your privacy and security seriously. We use industry-standard SSL encryption to protect your personal and payment information. We never store your credit card details on our servers, and we don't share your information with third parties without your consent.</p>
                </div>
              </div>

            </div>

            <div class="faq-category-section" data-category="products">
              <h3 class="category-title">Products & Sizing</h3>
              
              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How do I find the right size?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Each product page includes a detailed size chart. We recommend measuring yourself and comparing to our size guide for the best fit. If you're between sizes, we generally recommend sizing up. You can also read customer reviews for fit feedback.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>Are the colors accurate on your website?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>We strive to display colors as accurately as possible, but colors may vary slightly due to monitor settings and lighting conditions. If color is critical to your purchase, we recommend ordering samples when available or taking advantage of our easy return policy.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>How do I care for my items?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>Care instructions are provided on each product page and on the care label attached to your item. Generally, we recommend following the care label instructions, washing in cold water, and air drying when possible to maintain the quality and longevity of your items.</p>
                </div>
              </div>

              <div class="faq-item" data-accordion-btn>
                <div class="faq-question">
                  <h4>Do you restock sold-out items?</h4>
                  <ion-icon name="chevron-down-outline" class="faq-icon"></ion-icon>
                </div>
                <div class="faq-answer" data-accordion>
                  <p>We regularly restock popular items, but availability depends on various factors. You can sign up for restock notifications on product pages to be alerted when items become available again. Follow us on social media for updates on new arrivals and restocks.</p>
                </div>
              </div>

            </div>

          </section>

          <section class="contact-support">
            <div class="support-card">
              <div class="support-icon">
                <ion-icon name="headset-outline"></ion-icon>
              </div>
              <h3>Still need help?</h3>
              <p>Can't find the answer you're looking for? Our customer support team is here to help.</p>
              <div class="support-actions">
                <a href="/other pages/contact.html" class="btn-primary">Contact Support</a>
                <a href="mailto:support@hawaan.com" class="btn-secondary">Email Us</a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>

  </main>

    </div>
  )
}

export default faq
