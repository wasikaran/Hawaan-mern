import React from 'react'

const RP = () => {
  return (
    <div>
      
  <main>

    <div className="page-container">
      <div className="container">
        
        <div className="page-header">
          <h1 className="page-title">Return & Exchange Policy</h1>
          <p className="page-subtitle">We want you to love your purchase. If you're not completely satisfied, we're here to help.</p>
          <div className="policy-highlights">
            <span><ion-icon name="checkmark-circle-outline"></ion-icon> 30-Day Returns</span>
            <span><ion-icon name="checkmark-circle-outline"></ion-icon> Free Return Shipping</span>
            <span><ion-icon name="checkmark-circle-outline"></ion-icon> Easy Exchange Process</span>
          </div>
        </div>

        <div className="return-policy-content">
          
          <section className="policy-overview">
            <div className="overview-card">
              <div className="overview-icon">
                <ion-icon name="return-up-back-outline"></ion-icon>
              </div>
              <div className="overview-content">
                <h3>Our Promise to You</h3>
                <p>At HAWAAN, your satisfaction is our top priority. We offer a comprehensive 30-day return and exchange policy to ensure you're completely happy with your purchase. If for any reason you're not satisfied, we'll make it right.</p>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>1. Return Window & Eligibility</h2>
            <p>We accept returns within 30 days of delivery for most items. Here's what you need to know:</p>
            
            <div className="eligibility-grid">
              <div className="eligibility-card eligible">
                <div className="card-header">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <h4>Eligible for Return</h4>
                </div>
                <ul>
                  <li>Items in original condition with tags attached</li>
                  <li>Unworn, unwashed, and undamaged items</li>
                  <li>Items in original packaging</li>
                  <li>Items purchased within the last 30 days</li>
                  <li>Items with original receipt or order confirmation</li>
                </ul>
              </div>

              <div className="eligibility-card not-eligible">
                <div className="card-header">
                  <ion-icon name="close-circle-outline"></ion-icon>
                  <h4>Not Eligible for Return</h4>
                </div>
                <ul>
                  <li>Intimate apparel and undergarments</li>
                  <li>Swimwear and activewear (for hygiene reasons)</li>
                  <li>Personalized or customized items</li>
                  <li>Items damaged by normal wear and tear</li>
                  <li>Items purchased with final sale pricing</li>
                  <li>Gift cards and digital products</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>2. How to Initiate a Return</h2>
            <p>Starting a return is quick and easy. Follow these simple steps:</p>
            
            <div className="return-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Log Into Your Account</h4>
                  <p>Sign in to your HAWAAN account and navigate to "My Orders" to find the item you want to return.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Select Return Items</h4>
                  <p>Choose the items you want to return and select the reason for return from the dropdown menu.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Print Return Label</h4>
                  <p>Download and print the prepaid return shipping label. No need to pay for return shipping!</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Package & Ship</h4>
                  <p>Pack items securely in original packaging, attach the label, and drop off at any authorized shipping location.</p>
                </div>
              </div>
            </div>

            <div className="alternative-methods">
              <h4>Alternative Return Methods</h4>
              <div className="method-grid">
                <div className="method-card">
                  <ion-icon name="call-outline"></ion-icon>
                  <h5>Call Customer Service</h5>
                  <p>Call (607) 936-8058 and our team will help you process your return over the phone.</p>
                </div>

                <div className="method-card">
                  <ion-icon name="mail-outline"></ion-icon>
                  <div>
                    <h5>Email Support</h5>
                    <p>Email returns@hawaan.com with your order number and return request details.</p>
                  </div>
                </div>

                <div className="method-card">
                  <ion-icon name="chatbubbles-outline"></ion-icon>
                  <div>
                    <h5>Live Chat</h5>
                    <p>Use our live chat feature for instant assistance with your return request.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>3. Exchange Policy</h2>
            <p>Need a different size or color? Our exchange process makes it simple:</p>
            
            <div className="exchange-info">
              <div className="exchange-types">
                <div className="exchange-type">
                  <div className="exchange-icon">
                    <ion-icon name="resize-outline"></ion-icon>
                  </div>
                  <h4>Size Exchanges</h4>
                  <p>Free exchanges for different sizes within 30 days. We'll send the new size as soon as we receive your return.</p>
                  <div className="exchange-details">
                    <span>✓ Free shipping both ways</span>
                    <span>✓ Priority processing</span>
                    <span>✓ Same-day shipping when possible</span>
                  </div>
                </div>

                <div className="exchange-type">
                  <div className="exchange-icon">
                    <ion-icon name="color-palette-outline"></ion-icon>
                  </div>
                  <h4>Color/Style Exchanges</h4>
                  <p>Want a different color or style? Exchange for any item of equal or lesser value at no extra cost.</p>
                  <div className="exchange-details">
                    <span>✓ Equal or lesser value items</span>
                    <span>✓ Pay difference for higher value items</span>
                    <span>✓ Full refund if exchanging for lower value</span>
                  </div>
                </div>
              </div>

              <div className="exchange-timeline">
                <h4>Exchange Timeline</h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>Day 1</h5>
                      <p>Initiate exchange request online or via customer service</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>Day 2-3</h5>
                      <p>Ship original item back using our prepaid label</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>Day 5-7</h5>
                      <p>We receive and process your return</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>Day 8-10</h5>
                      <p>Your exchange item ships out to you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>4. Refund Information</h2>
            <p>We process refunds quickly and transparently. Here's what to expect:</p>
            
            <div className="refund-details">
              <div className="refund-methods">
                <h4>Refund Methods</h4>
                <div className="method-list">
                  <div className="refund-method">
                    <ion-icon name="card-outline"></ion-icon>
                    <div>
                      <h5>Original Payment Method</h5>
                      <p>Refunds are processed to your original payment method within 3-5 business days after we receive your return.</p>
                    </div>
                  </div>

                  <div className="refund-method">
                    <ion-icon name="gift-outline"></ion-icon>
                    <div>
                      <h5>Store Credit</h5>
                      <p>Choose store credit for instant refunds that never expire. Get an additional 10% bonus credit for future purchases.</p>
                    </div>
                  </div>

                  <div className="refund-method">
                    <ion-icon name="wallet-outline"></ion-icon>
                    <div>
                      <h5>Digital Wallet</h5>
                      <p>For digital wallet payments (PayPal, Apple Pay, etc.), refunds are processed within 1-2 business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="refund-amounts">
                <h4>What You'll Receive</h4>
                <div className="amount-breakdown">
                  <div className="breakdown-item">
                    <span className="label">Product Cost:</span>
                    <span className="value">Full refund</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Original Shipping:</span>
                    <span className="value">Refunded if order over $55</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Return Shipping:</span>
                    <span className="value">Free (we cover it)</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Processing Fee:</span>
                    <span className="value">None</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>5. Special Circumstances</h2>
            <p>We handle special situations with care and flexibility:</p>
            
            <div className="special-cases">
              <div className="case-card">
                <div className="case-icon">
                  <ion-icon name="warning-outline"></ion-icon>
                </div>
                <h4>Damaged or Defective Items</h4>
                <p>If you receive a damaged or defective item, we'll provide a full refund plus return shipping costs. Contact us immediately with photos of the damage.</p>
                <div className="case-actions">
                  <span>✓ Full refund guaranteed</span>
                  <span>✓ Return shipping covered</span>
                  <span>✓ Priority processing</span>
                </div>
              </div>

              <div className="case-card">
                <div className="case-icon">
                  <ion-icon name="swap-horizontal-outline"></ion-icon>
                </div>
                <h4>Wrong Item Received</h4>
                <p>If we sent you the wrong item, we'll send the correct item immediately and provide a prepaid label for the incorrect item.</p>
                <div className="case-actions">
                  <span>✓ Immediate replacement</span>
                  <span>✓ No return required until replacement arrives</span>
                  <span>✓ Expedited shipping</span>
                </div>
              </div>

              <div className="case-card">
                <div className="case-icon">
                  <ion-icon name="gift-outline"></ion-icon>
                </div>
                <h4>Gift Returns</h4>
                <p>Gift recipients can return items for store credit without a receipt. Original purchaser can process returns for full refund.</p>
                <div className="case-actions">
                  <span>✓ Store credit for gift recipients</span>
                  <span>✓ Full refund for original purchaser</span>
                  <span>✓ Extended 45-day window for gifts</span>
                </div>
              </div>

              <div className="case-card">
                <div className="case-icon">
                  <ion-icon name="time-outline"></ion-icon>
                </div>
                <h4>Late Returns</h4>
                <p>Missed the 30-day window? Contact us anyway. We may offer store credit or exchange options on a case-by-case basis.</p>
                <div className="case-actions">
                  <span>✓ Case-by-case review</span>
                  <span>✓ Possible store credit</span>
                  <span>✓ Customer service discretion</span>
                </div>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>6. International Returns</h2>
            <p>We make international returns as easy as possible:</p>
            
            <div className="international-info">
              <div className="international-grid">
                <div className="international-item">
                  <h4><ion-icon name="globe-outline"></ion-icon> Supported Countries</h4>
                  <p>We accept returns from all countries where we ship. Return processes may vary by location due to local regulations.</p>
                </div>

                <div className="international-item">
                  <h4><ion-icon name="card-outline"></ion-icon> Return Shipping</h4>
                  <p>International return shipping costs are covered by HAWAAN for orders over $100. Smaller orders may have return shipping deducted from refund.</p>
                </div>

                <div className="international-item">
                  <h4><ion-icon name="time-outline"></ion-icon> Processing Time</h4>
                  <p>International returns may take 7-14 business days to process due to customs and shipping times. We'll keep you updated throughout.</p>
                </div>

                <div className="international-item">
                  <h4><ion-icon name="document-text-outline"></ion-icon> Customs & Duties</h4>
                  <p>Any customs duties or taxes paid on the original order are not refundable. These are government fees outside our control.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>7. Return Status Tracking</h2>
            <p>Stay informed about your return every step of the way:</p>
            
            <div className="tracking-info">
              <div className="tracking-methods">
                <div className="tracking-method">
                  <div className="tracking-icon">
                    <ion-icon name="notifications-outline"></ion-icon>
                  </div>
                  <h4>Email Updates</h4>
                  <p>Receive automatic email notifications when we receive your return, process your refund, and complete the transaction.</p>
                </div>

                <div className="tracking-method">
                  <div className="tracking-icon">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                  </div>
                  <h4>SMS Notifications</h4>
                  <p>Opt-in for SMS updates to get real-time notifications about your return status directly to your phone.</p>
                </div>

                <div className="tracking-method">
                  <div className="tracking-icon">
                    <ion-icon name="person-circle-outline"></ion-icon>
                  </div>
                  <h4>Account Dashboard</h4>
                  <p>Check your return status anytime by logging into your account and viewing the "Returns & Exchanges" section.</p>
                </div>
              </div>

              <div className="status-meanings">
                <h4>Return Status Meanings</h4>
                <div className="status-list">
                  <div className="status-item">
                    <span className="status-badge initiated">Initiated</span>
                    <span>Return request created and label generated</span>
                  </div>
                  <div className="status-item">
                    <span className="status-badge in-transit">In Transit</span>
                    <span>Package is on its way back to our warehouse</span>
                  </div>
                  <div className="status-item">
                    <span className="status-badge received">Received</span>
                    <span>We've received your return and are processing it</span>
                  </div>
                  <div className="status-item">
                    <span className="status-badge processed">Processed</span>
                    <span>Return approved and refund has been issued</span>
                  </div>
                  <div className="status-item">
                    <span className="status-badge completed">Completed</span>
                    <span>Refund has been sent to your payment method</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="return-section">
            <h2>8. Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Can I return sale items?</h4>
                <p>Yes, sale items can be returned within 30 days unless marked as "Final Sale." Final sale items are not eligible for return or exchange.</p>
              </div>

              <div className="faq-item">
                <h4>What if I lost my receipt?</h4>
                <p>No problem! We can look up your order using your email address or phone number. You can also find your order confirmation in your account.</p>
              </div>

              <div className="faq-item">
                <h4>Can I return items to a physical store?</h4>
                <p>Currently, we operate online only. All returns must be shipped back to our warehouse using our prepaid return labels.</p>
              </div>

              <div className="faq-item">
                <h4>How long do refunds take?</h4>
                <p>Refunds are processed within 3-5 business days after we receive your return. Bank processing may take an additional 1-2 business days.</p>
              </div>

              <div className="faq-item">
                <h4>Can I exchange for a different product?</h4>
                <p>Yes! You can exchange for any item of equal or lesser value. If the new item costs more, you'll pay the difference.</p>
              </div>

              <div className="faq-item">
                <h4>What if my return is damaged in shipping?</h4>
                <p>We inspect all returns carefully. If your return is damaged during shipping, we'll still process your refund and file a claim with the carrier.</p>
              </div>
            </div>
          </section>

          <section className="contact-section">
            <div className="contact-card">
              <div className="contact-icon">
                <ion-icon name="headset-outline"></ion-icon>
              </div>
              <div className="contact-content">
                <h3>Need Help with Your Return?</h3>
                <p>Our customer service team is here to help make your return process as smooth as possible. Don't hesitate to reach out with any questions.</p>
                <div className="contact-options">
                  <div className="contact-option">
                    <ion-icon name="call-outline"></ion-icon>
                    <div>
                      <strong>Phone Support</strong>
                      <p>(607) 936-8058<br/>Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="contact-option">
                    <ion-icon name="mail-outline"></ion-icon>
                    <div>
                      <strong>Email Support</strong>
                      <p>returns@hawaan.com<br/>Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="contact-option">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    <div>
                      <strong>Live Chat</strong>
                      <p>Available on our website<br/>Instant assistance</p>
                    </div>
                  </div>
                </div>
                <div className="contact-actions">
                  <a href="/other pages/contact.html" className="btn-primary">Contact Support</a>
                  <a href="/other pages/faq.html" className="btn-secondary">View FAQ</a>
                </div>
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

export default RP
