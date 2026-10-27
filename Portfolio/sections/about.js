// ==========================================================================
// SECTION 2: ABOUT ME & CATEGORIZED TECHNICAL STACK
// File: sections/about.js
// Edit this file to update your bio paragraph or add/remove technical skills.
// ==========================================================================

document.getElementById('about-mount').innerHTML = `
    <section id="about" class="about-section">
        <h2 class="section-title reveal-on-scroll">About <span class="gradient-text">Me</span></h2>
        <div class="glass-card about-container reveal-on-scroll">
            <div class="about-text">
                <p>I specialize in bridging the gap between technical system constraints and intuitive UI/UX design. My core focus lies in building secure, responsive web environments with a strong emphasis on client-side state management, interactive animation logic, and seamless front-end integration.</p>
                
                <h3 class="skills-heading">Technical Stack</h3>

                <div class="skill-category-tabs" role="tablist" aria-label="Filter Technical Skills">
                    <button type="button" class="skill-cat-btn active" data-skill-cat="all">All Skills (13)</button>
                    <button type="button" class="skill-cat-btn" data-skill-cat="code">Frontend &amp; Languages</button>
                    <button type="button" class="skill-cat-btn" data-skill-cat="design">UI/UX &amp; Creative</button>
                    <button type="button" class="skill-cat-btn" data-skill-cat="tools">AI, Mobile &amp; Tools</button>
                </div>

                <div class="skills-grid" id="skills-grid">
                    <div class="skill-tag" data-skill-group="code"><i class="fab fa-html5"></i> HTML5 / CSS3 <span class="skill-level-dot">Core</span></div>
                    <div class="skill-tag" data-skill-group="code"><i class="fab fa-js"></i> JavaScript <span class="skill-level-dot">ES6+</span></div>
                    <div class="skill-tag" data-skill-group="code"><i class="fab fa-node-js"></i> Node.js</div>
                    <div class="skill-tag" data-skill-group="code"><i class="fab fa-java"></i> Java</div>
                    <div class="skill-tag" data-skill-group="code"><i class="fab fa-python"></i> Python</div>
                    <div class="skill-tag" data-skill-group="code"><i class="fas fa-code"></i> C Language</div>
                    <div class="skill-tag" data-skill-group="design"><i class="fab fa-figma"></i> Figma UI/UX <span class="skill-level-dot">Pro</span></div>
                    <div class="skill-tag" data-skill-group="design"><i class="fas fa-wand-magic-sparkles"></i> Canva Design</div>
                    <div class="skill-tag" data-skill-group="design"><i class="fas fa-video"></i> Video Editing</div>
                    <div class="skill-tag" data-skill-group="tools"><i class="fab fa-git-alt"></i> Git &amp; GitHub</div>
                    <div class="skill-tag" data-skill-group="tools"><i class="fab fa-microsoft"></i> MS Office (Word/Excel/PPT)</div>
                    <div class="skill-tag" data-skill-group="tools"><i class="fas fa-mobile-alt"></i> Android Studio</div>
                    <div class="skill-tag" data-skill-group="tools"><i class="fab fa-google"></i> Google AI Studio <span class="skill-level-dot">Agents</span></div>
                </div>
            </div>
        </div>
    </section>
`;
