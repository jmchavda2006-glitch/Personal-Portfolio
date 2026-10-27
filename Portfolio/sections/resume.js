// ==========================================================================
// SECTION 6: RESUME / CURRICULUM VITAE & INTERACTIVE DOCUMENT VIEWER
// File: sections/resume.js
// Edit this file to update your official CV / Resume sections and skills.
// ==========================================================================

document.getElementById('resume-mount').innerHTML = `
    <section id="resume" class="resume-section">
        <h2 class="section-title reveal-on-scroll">Curriculum <span class="gradient-text">Vitae</span></h2>
        <div class="resume-cta-container">
            <div class="glass-card resume-cta-card reveal-on-scroll">
                <i class="fas fa-file-invoice resume-cta-icon"></i>
                <h3>Interactive Document Viewer</h3>
                <p>Click below to inspect my official academic and professional resume formatted into a production-ready A4 document layer, or save it directly as a PDF.</p>
                <div class="resume-cta-actions">
                    <div class="magnetic-wrap">
                        <button type="button" class="btn btn-primary magnetic-btn" id="open-resume-btn">
                            Open Interactive Resume <i class="fas fa-expand" style="margin-left: 6px;"></i>
                        </button>
                    </div>
                    <div class="magnetic-wrap">
                        <button type="button" class="btn btn-secondary magnetic-btn" id="download-resume-pdf-btn">
                            Save / Print PDF <i class="fas fa-file-pdf" style="margin-left: 6px; color: #10b981;"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="resume-modal" class="modal" aria-hidden="true">
        <div class="modal-overlay" id="modal-overlay-close"></div>
        <div class="modal-content glass-card">
            <div class="modal-header">
                <h2>Interactive <span class="gradient-text">Resume</span></h2>
                <div class="modal-actions">
                    <button type="button" class="modal-control-btn" id="print-resume-btn" title="Print / Save as PDF">
                        <i class="fas fa-print"></i>
                    </button>
                    <button type="button" class="modal-control-btn close-btn" id="close-resume-btn" title="Close Window">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="document-wrapper">
                <div class="resume-document">
                    <div class="doc-header">
                        <div class="doc-title">
                            <h1>Jigar Chavda</h1>
                            <p class="doc-subtitle">Aspiring Frontend Engineer &amp; UI/UX Designer</p>
                        </div>
                        <div class="doc-contact">
                            <p><i class="fas fa-map-marker-alt"></i> Gujarat, India</p>
                            <p><i class="fas fa-globe"></i> jmchavda2006-glitch.github.io</p>
                            <p><i class="fab fa-github"></i> github.com/jmchavda2006-glitch</p>
                            <p><i class="fab fa-linkedin"></i> linkedin.com/in/jigar-chavda-6b8322281</p>
                        </div>
                    </div>

                    <hr class="doc-divider">

                    <div class="doc-body">
                        <!-- LEFT MAIN COLUMN -->
                        <div class="doc-col-main">
                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-user"></i> Professional Summary</h3>
                                <p class="doc-summary-text">
                                    Computer Science &amp; Design undergraduate specializing in Frontend Engineering and User-Centric Architecture. I bridge the gap between technical system constraints and intuitive UI/UX design, focusing on building secure responsive environments with a primary emphasis on interaction logic and state management.
                                </p>
                            </div>

                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-graduation-cap"></i> Education</h3>
                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>B.Tech in Computer Science and Design</h4>
                                        <span class="doc-date">2023 - Present</span>
                                    </div>
                                    <p class="doc-org">G H Patel College of Engineering &amp; Technology</p>
                                    <p class="doc-grade">Academic Performance: <strong>7.68 CGPA</strong> (Up to Semester 6)</p>
                                </div>
                            </div>

                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-briefcase"></i> Internships</h3>
                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>UI/UX Design Intern</h4>
                                        <span class="doc-date">1 Month</span>
                                    </div>
                                    <p class="doc-org">CodeAlpha</p>
                                    <p>Developed interactive wireframes, custom digital system components, and user flows optimized for core accessibility requirements.</p>
                                </div>
                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>Web Development Intern</h4>
                                        <span class="doc-date">2 Weeks</span>
                                    </div>
                                    <p class="doc-org">InternPE</p>
                                    <p>Assembled responsive interface features using client-side vanilla scripting frameworks and performance auditing procedures.</p>
                                </div>
                            </div>

                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-laptop-code"></i> Engineering Projects</h3>
                                
                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>SmartAttendance Platform</h4>
                                        <span class="doc-date">2026</span>
                                    </div>
                                    <p class="doc-org">Java / Android Studio / TensorFlow Lite</p>
                                    <p>Engineered facial recognition check-ins using CameraX local pipelines.</p>
                                </div>

                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>Ambient Expense Tracker</h4>
                                        <span class="doc-date">2026</span>
                                    </div>
                                    <p class="doc-org">Google AI Studio / Google AI Agents Track</p>
                                    <p>Built an autonomous financial tracker utilizing prompt chains and functional calling.</p>
                                </div>

                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>Tag Kart E-Commerce Concept</h4>
                                        <span class="doc-date">2025</span>
                                    </div>
                                    <p class="doc-org">Figma / Brand Design / Manual Brochure Design</p>
                                    <p>Designed a multi-vendor prototype concept layout along with marketing brochures.</p>
                                </div>

                                <div class="doc-item">
                                    <div class="doc-item-header">
                                        <h4>Lime Cart E-Commerce Layout</h4>
                                        <span class="doc-date">2026</span>
                                    </div>
                                    <p class="doc-org">HTML5 / CSS3 / Vanilla JavaScript</p>
                                    <p>Developed a responsive layout online storefront during my InternPE tenure.</p>
                                </div>
                            </div>
                        </div>

                        <!-- RIGHT SIDEBAR COLUMN -->
                        <div class="doc-col-side">
                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-tools"></i> Hard Skills</h3>
                                <div class="doc-sub-skill-category">
                                    <h5>Languages</h5>
                                    <p>C, Java, Python</p>
                                </div>
                                <div class="doc-sub-skill-category">
                                    <h5>Frontend &amp; Core</h5>
                                    <p>HTML5, CSS3, Node.js, JavaScript</p>
                                </div>
                                <div class="doc-sub-skill-category">
                                    <h5>Tools &amp; IDEs</h5>
                                    <p>Git, GitHub, Android Studio, VS Code, Figma, Canva Design</p>
                                </div>
                            </div>

                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-brain"></i> Soft Competencies</h3>
                                <ul class="doc-bullet-list">
                                    <li>Critical Thinking &amp; Logic</li>
                                    <li>Team Collaboration</li>
                                    <li>Interpersonal Communication</li>
                                    <li>Resilience &amp; Adaptability</li>
                                    <li>Time Management</li>
                                </ul>
                            </div>

                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-award"></i> Certifications</h3>
                                <ul class="doc-bullet-list">
                                    <li>Cloud Computing (SWAYAM NPTEL)</li>
                                    <li>Introduction to IoT (SWAYAM NPTEL)</li>
                                    <li>Prompt Engineering (Infosys Springboard)</li>
                                    <li>5-Day AI Agents Track (Google / Kaggle)</li>
                                </ul>
                            </div>

                            <div class="doc-section">
                                <h3 class="doc-section-title"><i class="fas fa-external-link-alt"></i> Links</h3>
                                <ul class="doc-bullet-list">
                                    <li>linkedin.com/in/jigar-chavda-6b8322281</li>
                                    <li>github.com/jmchavda2006-glitch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
