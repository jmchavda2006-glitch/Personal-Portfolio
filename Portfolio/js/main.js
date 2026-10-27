// ==========================================================================
// CORE INTERACTION, SMOOTH CURSOR, FILTERS, SPOTLIGHT & ANIMATION ENGINE
// File: js/main.js
// ==========================================================================

// --- 1. Toast Notification Helper (Replaces blocking browser alerts) ---
function showNotification(message, isSuccess = true) {
    const toast = document.getElementById('toast-notification');
    const icon = document.getElementById('toast-icon');
    const msgSpan = document.getElementById('toast-message');
    if (!toast || !icon || !msgSpan) return;

    msgSpan.textContent = message;
    toast.className = 'toast-card show ' + (isSuccess ? 'toast-success' : 'toast-error');
    icon.className = isSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';

    if (window._toastTimer) clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 4200);
}

// --- 2. Ultra-Smooth 120fps Lerp-Interpolated 3D Glass Arrow Cursor ---
(function initSmoothCursor() {
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorArrow = document.querySelector('.custom-cursor-arrow');
    if (!cursorDot || !cursorArrow) return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let arrowX = targetX;
    let arrowY = targetY;
    let dotX = targetX;
    let dotY = targetY;
    let tiltX = 0;
    let tiltY = 0;
    let isHovered = false;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!isVisible) {
            arrowX = dotX = targetX;
            arrowY = dotY = targetY;
            isVisible = true;
        }
    }, { passive: true });

    function renderCursor() {
        const dx = targetX - arrowX;
        const dy = targetY - arrowY;

        arrowX += dx * 0.42;
        arrowY += dy * 0.42;

        dotX += (targetX - dotX) * 0.18;
        dotY += (targetY - dotY) * 0.18;

        const desiredTiltX = Math.min(Math.max(-dy * 0.55, -22), 22);
        const desiredTiltY = Math.min(Math.max(dx * 0.55, -22), 22);
        tiltX += (desiredTiltX - tiltX) * 0.25;
        tiltY += (desiredTiltY - tiltY) * 0.25;

        const scaleFactor = isHovered ? 1.18 : 1;

        cursorArrow.style.transform = `translate3d(${arrowX.toFixed(2)}px, ${arrowY.toFixed(2)}px, 0) perspective(400px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale(${scaleFactor})`;
        cursorDot.style.transform = `translate3d(${(dotX - 14).toFixed(2)}px, ${(dotY - 14).toFixed(2)}px, 0)`;

        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    document.addEventListener('mouseover', (e) => {
        const interactive = e.target.closest('a, button, .project-card, .modal-control-btn, .skill-tag, .cert-trigger, .filter-tab-btn, .skill-cat-btn');
        if (interactive) {
            isHovered = true;
            cursorArrow.classList.add('expand');
            cursorDot.classList.add('expand');
        }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
        const interactive = e.target.closest('a, button, .project-card, .modal-control-btn, .skill-tag, .cert-trigger, .filter-tab-btn, .skill-cat-btn');
        if (interactive) {
            isHovered = false;
            cursorArrow.classList.remove('expand');
            cursorDot.classList.remove('expand');
        }
    }, { passive: true });
})();

// --- 3. Specular Mouse-Tracking Spotlight & Subtle 3D Card Tilt on Glass Cards ---
(function initGlassSpotlightAndTilt() {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach((card) => {
        const isTiltCard = card.classList.contains('project-card') || card.classList.contains('credential-card');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            if (isTiltCard) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -3.5;
                const rotateY = ((x - centerX) / centerX) * 3.5;
                card.style.transform = `perspective(700px) translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            if (isTiltCard) {
                card.style.transform = '';
            }
        });
    });
})();

// --- 4. Smooth Magnetic Button Engine ---
(function initMagneticButtons() {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach((btn) => {
        const wrapper = btn.parentElement;
        if (!wrapper) return;

        wrapper.addEventListener('mousemove', (e) => {
            const boundBox = wrapper.getBoundingClientRect();
            const relX = e.clientX - boundBox.left - (boundBox.width / 2);
            const relY = e.clientY - boundBox.top - (boundBox.height / 2);
            btn.style.transform = `translate3d(${(relX * 0.3).toFixed(1)}px, ${(relY * 0.3).toFixed(1)}px, 0)`;
        });

        wrapper.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate3d(0px, 0px, 0)';
        });
    });
})();

// --- 5. Typing Text Effect Sequence ---
(function initTypingEffect() {
    const typingEl = document.querySelector('.typing-text');
    if (!typingEl) return;

    const words = window.PORTFOLIO_TYPING_WORDS || ["Computer Engineer.", "UI/UX Designer.", "Frontend Developer."];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
        const currentWord = words[wordIdx];
        if (!isDeleting) {
            charIdx++;
            typingEl.textContent = currentWord.substring(0, charIdx);
            if (charIdx === currentWord.length) {
                isDeleting = true;
                setTimeout(tick, 1900);
                return;
            }
            setTimeout(tick, 90);
        } else {
            charIdx--;
            typingEl.textContent = currentWord.substring(0, charIdx);
            if (charIdx === 0) {
                isDeleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                setTimeout(tick, 420);
                return;
            }
            setTimeout(tick, 50);
        }
    }
    tick();
})();

// --- 6. Technical Stack Category Filter Tabs (About Section) ---
(function initSkillCategoryFilter() {
    const skillCatBtns = document.querySelectorAll('.skill-cat-btn');
    const skillTags = document.querySelectorAll('#skills-grid .skill-tag');
    if (!skillCatBtns.length || !skillTags.length) return;

    skillCatBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const selectedCat = btn.getAttribute('data-skill-cat');
            skillCatBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            skillTags.forEach((tag) => {
                const group = tag.getAttribute('data-skill-group');
                if (selectedCat === 'all' || group === selectedCat) {
                    tag.classList.remove('skill-hidden');
                } else {
                    tag.classList.add('skill-hidden');
                }
            });
        });
    });
})();

// --- 7. Project Category Filter Tabs (Projects Section) ---
(function initProjectCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-tab-btn');
    const projectCards = document.querySelectorAll('#projects-grid .project-card');
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            filterBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach((card) => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.classList.remove('project-hidden');
                } else {
                    card.classList.add('project-hidden');
                }
            });
        });
    });
})();

// --- 8. Mobile Navbar Drawer, Scroll-Spy, Top Scroll Progress Bar & Back-To-Top ---
(function initNavigation() {
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const scrollProgressBar = document.getElementById('scroll-progress-bar');

    if (navToggleBtn && navLinksContainer) {
        navToggleBtn.addEventListener('click', () => {
            const isOpen = navLinksContainer.classList.toggle('nav-open');
            const icon = navToggleBtn.querySelector('i');
            if (icon) {
                icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
            }
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('nav-open');
                const icon = navToggleBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navLinksContainer.classList.contains('nav-open')) {
                navLinksContainer.classList.remove('nav-open');
                const icon = navToggleBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    function onScroll() {
        const scrollY = window.pageYOffset;
        let current = 'hero';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 180) {
                current = section.getAttribute('id') || current;
            }
        });

        navLinks.forEach((a) => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });

        if (scrollTopBtn) {
            if (scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        if (scrollProgressBar) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
            scrollProgressBar.style.width = `${pct.toFixed(1)}%`;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();

// --- 9. Theme Storage Engine (Light / Dark Mode with Safe LocalStorage & 'T' Shortcut) ---
(function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (!themeToggleBtn) return;
    const themeIcon = themeToggleBtn.querySelector('i');

    let cachedTheme = null;
    try {
        cachedTheme = localStorage.getItem('portfolio-theme');
    } catch (err) {
        cachedTheme = null;
    }

    if (cachedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDarkNow = document.body.classList.contains('dark-theme');
        if (themeIcon) {
            themeIcon.className = isDarkNow ? 'fas fa-sun' : 'fas fa-moon';
        }
        try {
            localStorage.setItem('portfolio-theme', isDarkNow ? 'dark' : 'light');
        } catch (err) {
            // Ignore storage restriction in sandboxed environments
        }
        showNotification(isDarkNow ? 'Forest-Night Dark Mode activated.' : 'LimeKart Light Glass Mode activated.', true);
    }

    themeToggleBtn.addEventListener('click', toggleTheme);
    window._togglePortfolioTheme = toggleTheme;
})();

// --- 10. Modals Controller (Resume, Projects with Architecture Highlights, Certificates & Keyboard Shortcuts) ---
(function initModals() {
    const resumeModal = document.getElementById('resume-modal');
    const openResumeBtn = document.getElementById('open-resume-btn');
    const downloadResumePdfBtn = document.getElementById('download-resume-pdf-btn');
    const closeResumeBtn = document.getElementById('close-resume-btn');
    const printResumeBtn = document.getElementById('print-resume-btn');
    const overlayClose = document.getElementById('modal-overlay-close');

    const projectModal = document.getElementById('project-modal');
    const pModalBody = document.getElementById('p-modal-body');
    const pModalCloseBtn = document.getElementById('p-modal-close-btn');
    const pModalCloseOverlay = document.getElementById('p-modal-close-overlay');
    const projectCards = document.querySelectorAll('.project-card');

    const certModal = document.getElementById('cert-modal');
    const certModalImg = document.getElementById('cert-modal-img');
    const certCloseBtn = document.getElementById('cert-modal-close-btn');
    const certOverlayClose = document.getElementById('cert-modal-overlay');
    const certButtons = document.querySelectorAll('.cert-trigger');

    function syncBodyScrollLock() {
        const anyOpen = (resumeModal && resumeModal.classList.contains('active')) ||
                        (projectModal && projectModal.classList.contains('active')) ||
                        (certModal && certModal.classList.contains('active'));
        document.body.style.overflow = anyOpen ? 'hidden' : '';
    }

    // Resume Modal
    function openResumeModal(e) {
        if (e) e.preventDefault();
        if (!resumeModal) return;
        resumeModal.classList.add('active');
        syncBodyScrollLock();
    }

    function closeResumeModal() {
        if (!resumeModal) return;
        resumeModal.classList.remove('active');
        syncBodyScrollLock();
    }

    if (openResumeBtn) openResumeBtn.addEventListener('click', openResumeModal);
    if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResumeModal);
    if (overlayClose) overlayClose.addEventListener('click', closeResumeModal);
    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', () => {
            window.print();
        });
    }
    if (downloadResumePdfBtn) {
        downloadResumePdfBtn.addEventListener('click', () => {
            openResumeModal();
            setTimeout(() => {
                window.print();
            }, 380);
        });
    }

    // Project Modal with Rich Visual Banner & Key Architecture Highlights
    const projectData = window.PORTFOLIO_PROJECT_DATA || {};
    projectCards.forEach((card) => {
        card.addEventListener('click', () => {
            const pKey = card.getAttribute('data-project');
            const item = projectData[pKey];
            if (item && pModalBody && projectModal) {
                const highlightsHtml = Array.isArray(item.highlights) && item.highlights.length
                    ? `<div class="p-highlights-box">
                           <h4><i class="fas fa-layer-group"></i> Key Architecture &amp; Highlights</h4>
                           <ul class="p-highlights-list">
                               ${item.highlights.map((h) => `<li>${h}</li>`).join('')}
                           </ul>
                       </div>`
                    : '';

                pModalBody.innerHTML = `
                    <div class="p-details-body">
                        <div class="p-modal-banner">
                            <div class="p-modal-banner-icon"><i class="${item.icon || 'fas fa-cube'}"></i></div>
                            <div>
                                <div class="p-modal-meta">${item.category || 'Featured Engineering Project'}</div>
                                <h3>${item.title}</h3>
                            </div>
                        </div>
                        <p>${item.desc}</p>
                        ${highlightsHtml}
                        ${item.links}
                    </div>
                `;
                projectModal.classList.add('active');
                syncBodyScrollLock();
            }
        });
    });

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        syncBodyScrollLock();
    }

    if (pModalCloseBtn) pModalCloseBtn.addEventListener('click', closeProjectModal);
    if (pModalCloseOverlay) pModalCloseOverlay.addEventListener('click', closeProjectModal);

    // Certificate Modal
    function openCertModal(e) {
        const targetSrc = e.currentTarget.getAttribute('data-cert');
        if (targetSrc && certModal && certModalImg) {
            const fallbackMsg = document.getElementById('cert-fallback-msg');
            const fallbackTitle = document.getElementById('cert-fallback-title');
            if (fallbackMsg) fallbackMsg.style.display = 'none';
            if (fallbackTitle) fallbackTitle.textContent = `Credential: ${targetSrc}`;
            certModalImg.style.display = 'block';
            certModalImg.src = targetSrc;
            certModal.classList.add('active');
            syncBodyScrollLock();
        }
    }

    function closeCertModal() {
        if (!certModal) return;
        certModal.classList.remove('active');
        syncBodyScrollLock();
    }

    certButtons.forEach((btn) => btn.addEventListener('click', openCertModal));
    if (certCloseBtn) certCloseBtn.addEventListener('click', closeCertModal);
    if (certOverlayClose) certOverlayClose.addEventListener('click', closeCertModal);

    // Keyboard Shortcuts: Escape closes modals, 'R' toggles Resume, 'T' toggles Theme
    window.addEventListener('keydown', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        const isTyping = activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable;

        if (e.key === 'Escape') {
            closeResumeModal();
            closeProjectModal();
            closeCertModal();
            return;
        }

        if (isTyping || e.ctrlKey || e.metaKey || e.altKey) return;

        if (e.key === 'r' || e.key === 'R') {
            e.preventDefault();
            if (resumeModal && resumeModal.classList.contains('active')) {
                closeResumeModal();
            } else {
                openResumeModal();
            }
        } else if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            if (window._togglePortfolioTheme) window._togglePortfolioTheme();
        }
    });
})();

// --- 11. IntersectionObserver Scroll Reveal Engine (Timeline & Glass Cards) ---
(function initScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const revealItems = document.querySelectorAll('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
        timelineItems.forEach((el) => el.classList.add('active'));
        revealItems.forEach((el) => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('active');
                }
                if (entry.target.classList.contains('reveal-on-scroll')) {
                    entry.target.classList.add('revealed');
                }
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    timelineItems.forEach((item) => observer.observe(item));
    revealItems.forEach((item) => observer.observe(item));
})();

// --- 12. Quick Copy-Email Pill & Secure Contact Form Submission Engine ---
(function initContactForm() {
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailToCopy = window.PORTFOLIO_CONTACT_EMAIL || "jmchavda2006@gmail.com";
            const fallbackCopy = (text) => {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                try {
                    document.execCommand('copy');
                    showNotification(`Copied ${text} to clipboard!`, true);
                } catch (err) {
                    showNotification(`Email: ${text}`, true);
                }
                document.body.removeChild(ta);
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(emailToCopy)
                    .then(() => showNotification(`Copied ${emailToCopy} to clipboard!`, true))
                    .catch(() => fallbackCopy(emailToCopy));
            } else {
                fallbackCopy(emailToCopy);
            }
        });
    }

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = function() {
        if (window.emailjs) {
            window.emailjs.init("3-FoUxnG5SXKY5Ama"); // Replace with your real Public Key string
        }
    };
    document.head.appendChild(s);

    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const currentHost = window.location.hostname;
        const isAuthorized = currentHost === "localhost" ||
                             currentHost === "127.0.0.1" ||
                             currentHost === "" ||
                             currentHost === "jmchavda2006-glitch.github.io";

        if (!isAuthorized) {
            showNotification("Unauthorized domain execution detected. Form submission blocked.", false);
            return;
        }

        const recaptchaResponse = (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse) ? grecaptcha.getResponse() : "";
        if (recaptchaResponse.length === 0) {
            showNotification("Please complete the 'I'm not a robot' verification before sending your message.", false);
            return;
        }

        const submitBtn = document.getElementById('contact-submit-btn');
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending... <i class="fas fa-spinner fa-spin" style="margin-left: 10px;"></i>`;
        submitBtn.style.opacity = "0.7";

        if (typeof emailjs === 'undefined') {
            showNotification("Email service is still initializing. Please try again in a moment.", false);
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.opacity = "1";
            return;
        }

        emailjs.sendForm('service_n7dam1h', 'template_p3j2zz3', this)
            .then(() => {
                showNotification('Thank you! Your message has been sent successfully to Jigar.', true);
                contactForm.reset();
                if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
            }, (error) => {
                console.error('EmailJS Error Log:', error);
                showNotification('Transmission failed. Please contact me directly via LinkedIn.', false);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                submitBtn.style.opacity = "1";
            });
    });
})();
