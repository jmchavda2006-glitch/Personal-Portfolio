// ==========================================================================
// SECTION 4: CERTIFICATES & CONTINUOUS UPSKILLING
// File: sections/certificates.js
// Edit this file to add new certificates or update credential details.
// ==========================================================================

document.getElementById('certificates-mount').innerHTML = `
    <section id="credentials" class="credentials-section">
        <div class="timeline-container">
            <h3 class="skills-heading reveal-on-scroll" style="text-align: center; margin-bottom: 2rem;">Continuous Upskilling &amp; Certifications</h3>
            
            <div class="credentials-grid">
                <div class="glass-card timeline-content credential-card reveal-on-scroll">
                    <div>
                        <span class="timeline-date">SWAYAM NPTEL Academic Track | 2025</span>
                        <h4><i class="fas fa-cloud"></i> Cloud Computing</h4>
                        <p class="timeline-org" style="font-size: 0.88rem; margin-bottom: 0.8rem;">Ministry of Education, India</p>
                        <p class="timeline-details" style="font-size: 0.86rem; margin-bottom: 1.5rem;">Earned a formal academic credential mapping enterprise virtualization architectures, distributed microservice infrastructures, and cloud load-balancing logic systems.</p>
                    </div>
                    <div class="magnetic-wrap" style="padding: 0; margin-top: auto; align-self: flex-start;">
                        <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="NPTELCC.png">
                            <i class="fas fa-certificate"></i> View Certificate
                        </button>
                    </div>
                </div>

                <div class="glass-card timeline-content credential-card reveal-on-scroll">
                    <div>
                        <span class="timeline-date">SWAYAM NPTEL Academic Track | 2026</span>
                        <h4><i class="fas fa-network-wired"></i> Introduction to IoT</h4>
                        <p class="timeline-org" style="font-size: 0.88rem; margin-bottom: 0.8rem;">Ministry of Education, India</p>
                        <p class="timeline-details" style="font-size: 0.86rem; margin-bottom: 1.5rem;">Certified integration mapping physical sensor networks, controller telemetry arrays, protocol handling layers, and real-time data ingestion pipelines.</p>
                    </div>
                    <div class="magnetic-wrap" style="padding: 0; margin-top: auto; align-self: flex-start;">
                        <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="NPTELIoT.jpeg">
                            <i class="fas fa-certificate"></i> View Certificate
                        </button>
                    </div>
                </div>

                <div class="glass-card timeline-content credential-card reveal-on-scroll">
                    <div>
                        <span class="timeline-date">Infosys Springboard Hub | June 2026</span>
                        <h4><i class="fas fa-terminal"></i> Prompt Engineering</h4>
                        <p class="timeline-org" style="font-size: 0.88rem; margin-bottom: 0.8rem;">Infosys Professional Ecosystem</p>
                        <p class="timeline-details" style="font-size: 0.86rem; margin-bottom: 1.5rem;">Mastered structured contextual prompting methods, advanced few-shot chain-of-thought logic frameworks, and system role engineering to safely minimize LLM hallucination limits.</p>
                    </div>
                    <div class="magnetic-wrap" style="padding: 0; margin-top: auto; align-self: flex-start;">
                        <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="ISBPE.png">
                            <i class="fas fa-certificate"></i> View Certificate
                        </button>
                    </div>
                </div>

                <div class="glass-card timeline-content credential-card reveal-on-scroll">
                    <div>
                        <span class="timeline-date">Kaggle AI Continuum | June 2026</span>
                        <h4><i class="fab fa-google"></i> 5-Day AI Agents</h4>
                        <p class="timeline-org" style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.8rem;">Intensive Vibe Coding Course With Google</p>
                        <p class="timeline-details" style="font-size: 0.86rem; margin-bottom: 1.5rem;">Executed active cloud-inference agents utilizing Google ecosystem frameworks. Specialized in prompt design logic, functional calling trees, and autonomous workflow chains.</p>
                    </div>
                    <div class="magnetic-wrap" style="padding: 0; margin-top: auto; align-self: flex-start;">
                        <button type="button" class="p-link-btn credential-btn cert-trigger" data-cert="KWG.png">
                            <i class="fas fa-certificate"></i> View Certificate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certificate Verification Lightbox Modal -->
    <div id="cert-modal" class="p-modal" aria-hidden="true">
        <div class="p-modal-overlay" id="cert-modal-overlay"></div>
        <div class="p-modal-content glass-card">
            <button type="button" class="p-close-btn" id="cert-modal-close-btn" aria-label="Close certificate preview">
                <i class="fas fa-times"></i>
            </button>
            <div class="cert-img-wrapper">
                <img id="cert-modal-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Jigar Chavda Verification Credential" onerror="this.style.display='none'; document.getElementById('cert-fallback-msg').style.display='block';">
                <div id="cert-fallback-msg" class="cert-fallback-box" style="display: none;">
                    <i class="fas fa-certificate" style="font-size: 2.5rem; color: #10b981; margin-bottom: 0.75rem;"></i>
                    <h4 id="cert-fallback-title" style="color: var(--text-primary); margin-bottom: 0.35rem;">Credential Preview</h4>
                    <p style="font-size: 0.9rem;">Place the credential image file in the portfolio root folder to render the full scan.</p>
                </div>
            </div>
        </div>
    </div>
`;
