document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Recaptcha Simulation ---
    const recaptchaContainer = document.getElementById('recaptcha-container');
    const checkboxBox = document.getElementById('recaptcha-box');
    const spinner = document.getElementById('recaptcha-spinner');
    const checkmark = document.getElementById('recaptcha-check');
    const recaptchaText = document.getElementById('recaptcha-text');
    let isHuman = false;

    recaptchaContainer.addEventListener('click', () => {
        if (isHuman) return; // Already checked

        // Start Loading
        recaptchaContainer.classList.add('loading');
        checkboxBox.style.display = 'none';
        spinner.style.display = 'block';

        // Simulate Network Delay (1.5 seconds)
        setTimeout(() => {
            spinner.style.display = 'none';
            checkmark.style.display = 'block';
            recaptchaContainer.classList.remove('loading');
            recaptchaContainer.classList.add('success');
            isHuman = true;
        }, 1500);
    });

    // --- 2. Login Form Handling ---
    const loginForm = document.getElementById('loginForm');
    const submitBtn = loginForm.querySelector('.btn-primary');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!isHuman) {
            // Shake animation if they didn't click recaptcha
            recaptchaContainer.style.animation = "shake 0.5s";
            setTimeout(() => { recaptchaContainer.style.animation = "none"; }, 500);
            return; 
        }

        // Simulate Login Processing
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Authenticating...';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'wait';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert("Success! Welcome to the new UTAR Portal.");
            
            // Reset button
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.disabled = false;
        }, 2000);
    });
});

/* Add this Shake Keyframe to CSS via JS or in CSS file */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(styleSheet);
