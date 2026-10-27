// ==========================================================================
// SECTION 3: PROFESSIONAL JOURNEY (EDUCATION & INTERNSHIPS TIMELINE)
// File: sections/professional-journey.js
// Edit this file to add or modify education milestones and internships.
// ==========================================================================

document.getElementById('professional-journey-mount').innerHTML = `
    <section id="timeline" class="timeline-section">
        <h2 class="section-title reveal-on-scroll">Professional <span class="gradient-text">Journey</span></h2>
        <div class="timeline-container">
            <div class="timeline-line"></div>

            <div class="timeline-item left">
                <div class="timeline-dot"><i class="fas fa-graduation-cap"></i></div>
                <div class="glass-card timeline-content">
                    <span class="timeline-date">2023 - Present</span>
                    <h4>B.Tech in Computer Science &amp; Design</h4>
                    <p class="timeline-org">G H Patel College of Engineering &amp; Technology</p>
                    <p class="timeline-details">Balancing formal undergraduate systems logic with hands-on client-side engineering tasks. Maintaining a stable 7.68 CGPA track across ongoing semesters.</p>
                </div>
            </div>

            <div class="timeline-item right">
                <div class="timeline-dot"><i class="fas fa-briefcase"></i></div>
                <div class="glass-card timeline-content">
                    <span class="timeline-date">May 20, 2026 - June 20, 2026</span>
                    <h4>UI/UX Design Intern (1 Month)</h4>
                    <p class="timeline-org">CodeAlpha</p>
                    <p class="timeline-details">Architected high-fidelity dynamic interface wireframes, custom behavioral clicking paths, and responsive typography tokens mapping seamless user navigation features for mobile applications.</p>
                    
                    <div class="timeline-actions">
                        <div class="magnetic-wrap" style="padding: 0;">
                            <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="JCCodeAlpha.png">
                                <i class="fas fa-certificate"></i> View Certificate
                            </button>
                        </div>
                        <div class="magnetic-wrap" style="padding: 0;">
                            <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="JCCodeAlphaLOR.png">
                                <i class="fas fa-award"></i> View LOR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="timeline-item left">
                <div class="timeline-dot"><i class="fas fa-laptop-code"></i></div>
                <div class="glass-card timeline-content">
                    <span class="timeline-date">May 11, 2026 - May 25, 2026</span>
                    <h4>Web Development Intern (2 Weeks)</h4>
                    <p class="timeline-org">InternPE</p>
                    <p class="timeline-details">Engineered responsive layout storefront patterns and functional mathematical calculation tools using pure client-side Vanilla JavaScript structures and grid design principles.</p>
                    
                    <div class="timeline-actions">
                        <div class="magnetic-wrap" style="padding: 0;">
                            <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="JCInternPe.png">
                                <i class="fas fa-certificate"></i> View Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
