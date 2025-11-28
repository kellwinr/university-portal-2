document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Recaptcha Simulation ---
    const recaptchaContainer = document.getElementById('recaptcha-container');
    const checkboxBox = document.getElementById('recaptcha-box');
    const spinner = document.getElementById('recaptcha-spinner');
    const checkmark = document.getElementById('recaptcha-check');
    
    // Track state
    let isHuman = false;
    let isLoading = false;

    if (recaptchaContainer) {
        recaptchaContainer.addEventListener('click', () => {
            // Prevent clicking if already done OR if currently loading
            if (isHuman || isLoading) return; 

            // Start Loading
            isLoading = true;
            recaptchaContainer.classList.add('loading');
            if(checkboxBox) checkboxBox.style.display = 'none';
            if(spinner) spinner.style.display = 'block';

            // Simulate Network Delay (1.5 seconds)
            setTimeout(() => {
                if(spinner) spinner.style.display = 'none';
                if(checkmark) checkmark.style.display = 'block';
                
                recaptchaContainer.classList.remove('loading');
                recaptchaContainer.classList.add('success');
                
                isHuman = true;
                isLoading = false;
            }, 1500);
        });
    }

    // --- 2. Login Form Handling ---
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        const submitBtn = loginForm.querySelector('.btn-primary');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validation: Check Recaptcha first
            if (!isHuman) {
                // Shake animation if they didn't click recaptcha
                if (recaptchaContainer) {
                    recaptchaContainer.style.animation = "shake 0.5s";
                    setTimeout(() => { recaptchaContainer.style.animation = "none"; }, 500);
                }
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
    }

    // --- 3. Background Parallax Effect (Visual Flair) ---
    // This moves the background slightly when mouse moves
    document.addEventListener('mousemove', (e) => {
        const mesh = document.querySelector('.background-mesh');
        if(mesh) {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            mesh.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });
});

/* Inject CSS for the Shake Animation dynamically */
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
