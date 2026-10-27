// ==========================================================================
// SECTION 7: GET IN TOUCH (CONTACT FORM, SOCIAL CHANNELS & QUICK COPY PILL)
// File: sections/get-in-touch.js
// Edit this file to update social profile links, email copy address, or form fields.
// ==========================================================================

window.PORTFOLIO_CONTACT_EMAIL = "jmchavda2006@gmail.com";

document.getElementById('get-in-touch-mount').innerHTML = `
    <section id="contact" class="contact-section">
        <h2 class="section-title reveal-on-scroll">Get In <span class="gradient-text">Touch</span></h2>
        <div class="glass-card contact-container reveal-on-scroll">
            <div class="contact-social-channels">
                <a href="https://github.com/jmchavda2006-glitch" target="_blank" rel="noopener noreferrer" class="contact-link-tag">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="https://linkedin.com/in/jigar-chavda-6b8322281" target="_blank" rel="noopener noreferrer" class="contact-link-tag">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <button type="button" id="copy-email-btn" class="contact-link-tag" title="Copy direct email address">
                    <i class="fas fa-copy"></i> Copy Email
                </button>
            </div>
            
            <form id="contact-form">
                <div class="form-group">
                    <input type="text" name="from_name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" name="reply_to" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>

                <div class="form-group recaptcha-group">
                    <div class="g-recaptcha" data-sitekey="6LeQZhstAAAAAF0-hS1B5tgJS3aI1DBjWoVRQXbM" data-theme="light"></div>
                </div>

                <div class="magnetic-wrap" style="width: 100%; padding: 0;">
                    <button type="submit" id="contact-submit-btn" class="btn btn-primary magnetic-btn" style="width: 100%; margin: 0;">
                        Send Message <i class="fas fa-paper-plane" style="margin-left: 8px;"></i>
                    </button>
                </div>
            </form>
        </div>
    </section>
`;
