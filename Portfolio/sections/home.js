// ==========================================================================
// SECTION 1: HOME (HERO & AVAILABILITY STATUS BADGE)
// File: sections/home.js
// Edit this file to update your Hero title, availability badge, typing roles, or buttons.
// ==========================================================================

window.PORTFOLIO_TYPING_WORDS = [
    "Computer Engineer.",
    "UI/UX Designer.",
    "Frontend Developer.",
    "AI Agent Builder."
];

document.getElementById('home-mount').innerHTML = `
    <header id="hero" class="hero-section">
        <div class="hero-content reveal-on-scroll">
            <a href="#hero" class="logo-link" title="Jigar Chavda">
                <img src="J.png" alt="Jigar Chavda Logo" class="site-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="hero-logo-fallback" style="display: none;"><span class="gradient-text">J</span></div>
            </a>

            <div class="availability-pill">
                <span class="status-pulse-dot"></span>
                <span>Available for 4–6 Month Internships (Frontend / UI-UX) &bull; Starting Jan 2027</span>
            </div>

            <h3>Bridging Code &amp; Aesthetics</h3>
            <h1>Hi, I'm <span class="gradient-text">Jigar Chavda</span></h1>
            <h2>I am a <span class="typing-text"></span></h2>
            <p>Computer Science &amp; Design undergraduate specializing in Frontend Engineering and User-Centric Architecture. I turn complex logic into fluid digital reality.</p>
            <div class="hero-btns">
                <div class="magnetic-wrap"><a href="#projects" class="btn btn-primary magnetic-btn">View My Work</a></div>
                <div class="magnetic-wrap"><a href="#contact" class="btn btn-secondary magnetic-btn">Let's Talk</a></div>
            </div>
        </div>
    </header>
`;
