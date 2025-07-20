// ...existing code...

/**
 * Rotating typing effect for hero title
 */
document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Hello, I'm Daniel Simon",
        "I'm a Programmer",
        "UI/UX Designer",
        "Videographer",
        "Content Creator",
        "Website Designer",
        "Music Producer and Director"
    ];

    const rotatingText = document.getElementById("rotating-text");
    const cursor = document.getElementById("cursor");
    if (!rotatingText || !cursor) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseTime = 1500;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
            rotatingText.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, typingSpeed / 2);
            }
        } else {
            charIndex++;
            rotatingText.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseTime);
            } else {
                setTimeout(typeEffect, typingSpeed);
            }
        }
    }

    // Blinking cursor effect
    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);

    typeEffect();
});

// ...existing code...// Rotating typing effect for hero title
document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Hello, I'm Daniel Simon",
        "I'm a Programmer",
        "UI/UX Designer",
        "Videographer",
        "Content Creator",
        "Website Designer",
        "Music Producer and Director"
    ];

    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);

    typeEffect();

    const rotatingText = document.getElementById("rotating-text");
    const cursor = document.getElementById("cursor");
    if (!rotatingText || !cursor) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseTime = 1500;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
            rotatingText.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, typingSpeed / 2);
            }
        } else {
            charIndex++;
            rotatingText.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseTime);
            } else {
                setTimeout(typeEffect, typingSpeed);
            }



        }
    }

    // Blinking cursor effect

});


// Theme toggle functionality
//const themeToggleBtn = document.querySelector("[data-theme-btn]");

/*if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark_theme");
        document.body.classList.toggle("light_theme");

        // Save preference
        if (document.body.classList.contains("light_theme")) {
            localStorage.setItem("theme", "light_theme");
        } else {
            localStorage.setItem("theme", "dark_theme");
        }
    });

    // On page load, set theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light_theme") {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
    } else {
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
    }
}*/

// Theme toggle functionality
const themeToggleBtn = document.querySelector("[data-theme-btn]");

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark_theme");
        document.body.classList.toggle("light_theme");

        // Save preference
        if (document.body.classList.contains("light_theme")) {
            localStorage.setItem("theme", "light_theme");
        } else {
            localStorage.setItem("theme", "dark_theme");
        }
    });

    // On page load, set theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light_theme") {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
    } else {
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
    }
}