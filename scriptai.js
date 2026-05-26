document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-navbar]");
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const themeToggleBtn = document.querySelector("[data-theme-btn]");
    const goTopBtn = document.querySelector("[data-go-top]");
    const navLinks = document.querySelectorAll(".navbar-link");
    const skillsBox = document.querySelector("[data-skills-box]");
    const toggleBox = document.querySelector("[data-toggle-box]");
    const toggleButtons = document.querySelectorAll("[data-toggle-btn]");
    const revealItems = document.querySelectorAll("section, .footer, .stats-card, .project-card, .skill-card, .contact-form");
    const rotatingText = document.getElementById("rotating-text");
    const cursor = document.getElementById("cursor");

    const phrases = [
        "Hello, I'm Simon Daniel Adoyi.",
        "I design websites with a modern tech edge.",
        "I solve IT support and networking challenges.",
        "I build digital experiences that feel polished.",
        "I create, produce, and ship with purpose."
    ];

    const closeMenu = () => {
        if (!nav || !navToggleBtn) return;
        nav.classList.remove("active");
        navToggleBtn.classList.remove("active");
        navToggleBtn.setAttribute("aria-expanded", "false");
        body.classList.remove("active");
    };

    const openMenu = () => {
        if (!nav || !navToggleBtn) return;
        nav.classList.add("active");
        navToggleBtn.classList.add("active");
        navToggleBtn.setAttribute("aria-expanded", "true");
        body.classList.add("active");
    };

    if (navToggleBtn && nav) {
        navToggleBtn.setAttribute("aria-expanded", "false");
        navToggleBtn.addEventListener("click", () => {
            const isOpen = nav.classList.contains("active");
            if (isOpen) closeMenu();
            else openMenu();
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    const applyTheme = (theme) => {
        const useLight = theme === "light_theme";
        body.classList.toggle("light_theme", useLight);
        body.classList.toggle("dark_theme", !useLight);
        themeToggleBtn?.classList.toggle("active", useLight);
        localStorage.setItem("theme", useLight ? "light_theme" : "dark_theme");
    };

    applyTheme(localStorage.getItem("theme") === "light_theme" ? "light_theme" : "dark_theme");

    themeToggleBtn?.addEventListener("click", () => {
        const nextTheme = body.classList.contains("light_theme") ? "dark_theme" : "light_theme";
        applyTheme(nextTheme);
    });

    if (toggleButtons.length === 2 && toggleBox && skillsBox) {
        toggleButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                toggleButtons.forEach((item) => item.classList.remove("active"));
                button.classList.add("active");
                const showTools = index === 1;
                toggleBox.classList.toggle("active", showTools);
                skillsBox.classList.toggle("active", showTools);
            });
        });
    }

    const updateScrollState = () => {
        const shouldActivate = window.scrollY > 40;
        header?.classList.toggle("active", shouldActivate);
        goTopBtn?.classList.toggle("active", window.scrollY > 500);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState);

    if (revealItems.length) {
        revealItems.forEach((item) => item.setAttribute("data-reveal", ""));

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach((item) => revealObserver.observe(item));
    }

    if (rotatingText && cursor) {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentPhrase = phrases[phraseIndex];
            rotatingText.textContent = currentPhrase.slice(0, charIndex);

            if (!isDeleting && charIndex < currentPhrase.length) {
                charIndex += 1;
                setTimeout(type, 75);
                return;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 1400);
                return;
            }

            if (isDeleting && charIndex > 0) {
                charIndex -= 1;
                setTimeout(type, 40);
                return;
            }

            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 350);
        };

        setInterval(() => {
            cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
        }, 520);

        type();
    }
});
