// --- High-Graphics Micro 3D Glass Arrow Cursor Dynamic Tilt Engine ---
const cursorDot = document.querySelector('.custom-cursor-dot');
const cursorArrow = document.querySelector('.custom-cursor-arrow');

let lastMouseX = 0;
let lastMouseY = 0;

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorArrow.style.left = `${posX}px`;
    cursorArrow.style.top = `${posY}px`;

    const deltaX = posX - lastMouseX;
    const deltaY = posY - lastMouseY;

    const tiltX = Math.min(Math.max(-deltaY * 0.6, -25), 25);
    const tiltY = Math.min(Math.max(deltaX * 0.6, -25), 25);

    const isHovered = cursorArrow.classList.contains('expand');
    const scaleFactor = isHovered ? 1.15 : 1;
    cursorArrow.style.transform = `perspective(400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scaleFactor})`;

    lastMouseX = posX;
    lastMouseY = posY;
});

const interactiveTargets = document.querySelectorAll('a, button, .project-card, .modal-control-btn, .skill-tag');
interactiveTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursorArrow.classList.add('expand');
    });
    target.addEventListener('mouseleave', () => {
        cursorArrow.classList.remove('expand');
        cursorArrow.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

// --- High-Performance Magnetic Button Tracker Engine ---
const magneticBtns = document.querySelectorAll('.magnetic-btn');

magneticBtns.forEach(btn => {
    const wrapper = btn.parentElement;

    wrapper.addEventListener('mousemove', (e) => {
        const boundBox = wrapper.getBoundingClientRect();
        const relX = e.clientX - boundBox.left - (boundBox.width / 2);
        const relY = e.clientY - boundBox.top - (boundBox.height / 2);

        btn.style.transform = `translate(${relX * 0.35}px, ${relY * 0.35}px)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

// --- Typing Text Effect Sequence ---
const words = ["Computer Engineer.", "UI/UX Designer.", "Frontend Developer."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}

window.addEventListener('DOMContentLoaded', () => {
    typingEffect();
});

// --- Dynamic Scroll Monitor for Active Navigation Highlighting ---
const sections = document.querySelectorAll("section, header");
const navLi = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});

// --- High Graphics Resume Pop-up Modal Controller ---
const resumeModal = document.getElementById('resume-modal');
const openResumeBtn = document.getElementById('open-resume-btn');
const closeResumeBtn = document.getElementById('close-resume-btn');
const overlayClose = document.getElementById('modal-overlay-close');
const navResumeLink = document.querySelector('a[href="#resume"]');

function openModal(e) {
    e.preventDefault();
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = ''; 
}

openResumeBtn.addEventListener('click', openModal);
closeResumeBtn.addEventListener('click', closeModal);
overlayClose.addEventListener('click', closeModal);
if (navResumeLink) { navResumeLink.addEventListener('click', openModal); }

// --- Interactive Project Detailed Panel Drawer Engine ---
const projectModal = document.getElementById('project-modal');
const pModalBody = document.getElementById('p-modal-body');
const pModalCloseBtn = document.getElementById('p-modal-close-btn');
const pModalCloseOverlay = document.getElementById('p-modal-close-overlay');
const projectCards = document.querySelectorAll('.project-card');

// Dynamic Project Information Dataset
const projectData = {
    tagkart: {
        title: "Tag Kart E-Commerce Platform",
        desc: "A highly meticulous, comprehensive multi-vendor retail prototype engineered within Figma. Built specifically upon rigorous user interaction matrices, transaction flows, and modular token scaling systems that minimize workflow conversion drop-offs.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/jmchavda2006-glitch/Figma-and-UI-UX-Projects/tree/main/Tag%20Kart" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Repository</a>
                    <a href="https://figma.com" target="_blank" class="p-link-btn p-btn-ppt" style="background: #f24e1e;"><i class="fab fa-figma"></i> Figma File</a>
                </div>`
    },
    smartattendance: {
        title: "SmartAttendance Verification System",
        desc: "An advanced automated logging application written natively for Android operating systems using Java. Leverages on-device hardware manipulation via CameraX APIs alongside client-side embedded TensorFlow Lite face-inference models for seamless local data capture.",
        links: `<div class="p-links-flex">
                    <a href="SA.pptx" download class="p-link-btn p-btn-ppt"><i class="fas fa-file-powerpoint"></i> Project PPT</a>
                </div>`
    },
    thoughtoftheday: {
        title: "Web-based 'Thought of the Day' Platform",
        desc: "Built a highly responsive automated delivery structure that mounts, decodes, and maps fresh daily content arrays directly sourced from localized CSV database fields using pure Vanilla JavaScript state architectures without any external frame weight.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/radhekrishna08jc-design/Gita-Thoughs-08" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Source Code</a>
                    <a href="https://radhekrishna08jc-design.github.io/Gita-Thoughs-08/" target="_blank" class="p-link-btn p-btn-ppt" style="background: #10b981;"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                </div>`
    },
    calculator: {
        title: "Simple Calculator | InternPE Project",
        desc: "A beautifully styled, high-graphics calculator app created during my 2-week web development internship at InternPE. Features a modern glassmorphic interface tracking multi-step calculation input histories, clear error handling, and fluid responsive layouts utilizing clean CSS Grid blueprints.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/jmchavda2006-glitch/Web-Development-Internship-Tasks-of-InternPe/tree/main/Task%201%20Simple%20Calculator" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Source Code</a>
                    <a href="https://jmchavda2006-glitch.github.io/Web-Development-Internship-Tasks-of-InternPe/Task%201%20Simple%20Calculator/" target="_blank" class="p-link-btn p-btn-ppt" style="background: #10b981;"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                </div>`
    },
    "internpe-ecommerce": {
        title: "E-Commerce LimeCart | InternPE Project",
        desc: "Developed as a core graduation requirement for my InternPE internship module. This platform focuses entirely on fluid frontend catalog rendering, crisp interaction loops, responsive shopping cart arrays, and pricing accumulation states using pure Vanilla JavaScript logic.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/jmchavda2006-glitch/Web-Development-Internship-Tasks-of-InternPe/tree/main/Task%202%20E-Commerce%20Website" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Code Repository</a>
                    <a href="https://jmchavda2006-glitch.github.io/Web-Development-Internship-Tasks-of-InternPe/Task%202%20E-Commerce%20Website/" target="_blank" class="p-link-btn p-btn-ppt" style="background: #10b981;"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                </div>`
    },
    "ca-lowfi": {
        title: "Low-Fidelity Wireframe (Education Platform) | CodeAlpha Task",
        desc: "The primary structural foundation mapping out screen information architectures, workspace boundaries, and functional hierarchies for a comprehensive Education Platform app. Engineered entirely in Figma during my UI/UX internship to test workflow logic with zero asset distractions.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/jmchavda2006-glitch/codealpha_tasks/tree/main/Task%201" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Repository</a>
                    <a href="https://www.figma.com/design/FEbHtBLmlm9jhKd3rxnlwu/CodeAlpha-UI-UX-Design-Task-1?node-id=0-1&t=1aEod0BVISlebbrh-1" target="_blank" class="p-link-btn p-btn-ppt" style="background: #f24e1e;"><i class="fab fa-figma"></i> Figma File</a>
                </div>`
    },
    "ca-hifi": {
        title: "High-Fidelity UI Design (Education Platform) | CodeAlpha Task",
        desc: "Translated structural low-fidelity assets into a high-end, responsive visual screen matrix. Implemented a tailored color array, precise geometry variables, component variants, and strict atomic design system frameworks inside Figma to optimize mobile app clarity.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/jmchavda2006-glitch/codealpha_tasks/tree/main/Task%202" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Repository</a>
                    <a href="https://www.figma.com/design/gvGRhkz6WjKG3tRKuse30q/CodeAlpha-UI-UX-Design-Task-2?node-id=0-1&t=2TVNkVKs6YxOeRp4-1" target="_blank" class="p-link-btn p-btn-ppt" style="background: #f24e1e;"><i class="fab fa-figma"></i> Figma File</a>
                </div>`
    },
    "ca-prototype": {
        title: "Interactive UX Prototype (Education Platform) | CodeAlpha Task",
        desc: "An advanced, functional design flow demonstrating end-to-end user navigation pathways, micro-interactions, modal behaviors, and click configurations. Built inside Figma using smart animations to validate core behavioral paths before development handoff.",
        links: `<div class="p-links-flex">
                    <a href="https://github.com/jmchavda2006-glitch/codealpha_tasks/tree/main/Task%204" target="_blank" class="p-link-btn p-btn-git"><i class="fab fa-github"></i> Repository</a>
                    <a href="https://www.figma.com/proto/d9NAsN7vxr5NoDXwOAmg2l/CodeAlpha-UI-UX-Design-Task-4?page-id=0%3A1&node-id=2-154&p=f&viewport=709%2C244%2C0.29&t=qelrgv923OOg7n3J-1&scaling=contain&content-scaling=fixed&starting-point-node-id=2%3A127&show-proto-sidebar=1" target="_blank" class="p-link-btn p-btn-ppt" style="background: #f24e1e;"><i class="fab fa-figma"></i> Figma File</a>
                </div>`
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const pKey = card.getAttribute('data-project');
        if(projectData[pKey]) {
            pModalBody.innerHTML = `
                <div class="p-details-body">
                    <h3>${projectData[pKey].title}</h3>
                    <p>${projectData[pKey].desc}</p>
                    ${projectData[pKey].links}
                </div>
            `;
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeProjectModal() {
    projectModal.classList.remove('active');
    if(!resumeModal.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}
pModalCloseBtn.addEventListener('click', closeProjectModal);
pModalCloseOverlay.addEventListener('click', closeProjectModal);

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeProjectModal();
    }
});

// Dynamic EmailJS Library Loader
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = function() {
        emailjs.init("3-FoUxnG5SXKY5Ama"); // Replace with your real Public Key string
    };
    document.head.appendChild(s);
})();

// Secure Form Submission Engine with Anti-Spam Control Hooks
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // --- HOST DOMAIN AUTONOMOUS SHIELD ---
    const currentHost = window.location.hostname;
    const isAuthorized = currentHost === "localhost" || 
                         currentHost === "127.0.0.1" || 
                         currentHost === "" || 
                         currentHost === "jmchavda2006-glitch.github.io";
    
    if (!isAuthorized) {
        alert("Unauthorized domain execution detected. Form submission blocked.");
        return; 
    }
    
    // --- GOOGLE RECAPTCHA SECURITY TOKEN CHECK ---
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert("Please complete the 'I'm not a robot' verification before sending your message.");
        return; 
    }
    
    const submitBtn = document.getElementById('contact-submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending... <i class="fas fa-spinner fa-spin" style="margin-left: 10px;"></i>`;
    submitBtn.style.opacity = "0.7";

    emailjs.sendForm('service_n7dam1h', 'template_p3j2zz3', this)
        .then(() => {
            alert('Thank you! Your message has been sent successfully to Jigar.');
            document.getElementById('contact-form').reset(); 
            grecaptcha.reset(); // Safely clear the checkbox validation token
        }, (error) => {
            console.error('EmailJS Error Log:', error);
            alert('Oops! Transmission failed. Please contact me directly via LinkedIn.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.opacity = "1";
        });
});

// ==========================================================================
// HIGH-PERFORMANCE INTUITIVE CLIENT-SIDE THEME STORAGE ENGINE
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeToggleBtn.querySelector('i');

const cachedTheme = localStorage.getItem('portfolio-theme');

if (cachedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'fas fa-sun'; 
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkNow = document.body.classList.contains('dark-theme');
    
    if (isDarkNow) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('portfolio-theme', 'light');
    }
});
// --- BACK TO TOP SCROLL ACCELERATION HANDLING ---
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Function to show the premium toast layer
function showNotification(message, isSuccess = true) {
    const toast = document.getElementById('toast-notification');
    const icon = document.getElementById('toast-icon');
    const msgSpan = document.getElementById('toast-message');
    
    msgSpan.textContent = message;
    toast.className = 'toast-card show ' + (isSuccess ? 'toast-success' : 'toast-error');
    icon.className = isSuccess ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
// ==========================================================================
// HIGH-PERFORMANCE INTERSECTION OBSERVER TIMELINE ANIMATION ENGINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        root: null,          // Tracks parameters relative straight to device window viewports
        threshold: 0.15,     // Triggers animations once 15% of the card is visible on screen
        rootMargin: "0px 0px -50px 0px"
    };

    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Injects the active state utility properties to trigger CSS animation easing
                entry.target.classList.add('active');
                // Unobserves the target node so the item stays unlocked once loaded
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});
// ==========================================================================
// INTERACTIVE PORTAL MODAL CONTROLLER FOR CERTIFICATE VERIFICATION
// ==========================================================================
const certModal = document.getElementById('cert-modal');
const certModalImg = document.getElementById('cert-modal-img');
const certCloseBtn = document.getElementById('cert-modal-close-btn');
const certOverlayClose = document.getElementById('cert-modal-overlay');
const certButtons = document.querySelectorAll('.cert-trigger');

function openCertModal(e) {
    const targetSrc = e.currentTarget.getAttribute('data-cert');
    if (targetSrc) {
        certModalImg.src = targetSrc;
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevents layout background displacement
    }
}

function closeCertModal() {
    certModal.classList.remove('active');
    // Maintain scrolling lockdown block if the interactive resume popup layer remains operational
    if (!resumeModal.classList.contains('active') && !projectModal.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

// Attach event tracking logic grids to components
certButtons.forEach(btn => btn.addEventListener('click', openCertModal));
certCloseBtn.addEventListener('click', closeCertModal);
certOverlayClose.addEventListener('click', closeCertModal);

// Integrate escape hotkey boundary conditions into your active window listeners
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertModal();
    }
});