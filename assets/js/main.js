document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. RECAPTCHA SIMULATION
    // =========================================
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

    // =========================================
    // 2. LOGIN FORM HANDLING
    // =========================================
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        const submitBtn = loginForm.querySelector('.btn-primary');
        const idInput = document.getElementById('username');
        const passInput = document.getElementById('password');

        // Mock Credentials
        const VALID_ID = "02012345";
        const VALID_PASS = "12345";

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // A. Validate Recaptcha First
            if (!isHuman) {
                // Shake animation if they didn't click recaptcha
                if (recaptchaContainer) {
                    recaptchaContainer.style.animation = "shake 0.5s";
                    setTimeout(() => { recaptchaContainer.style.animation = "none"; }, 500);
                }
                alert("Please verify you are not a robot.");
                return; 
            }

            // B. Validate ID and Password
            if (idInput.value !== VALID_ID || passInput.value !== VALID_PASS) {
                alert("Invalid ID or Password.\nHint: Use ID 02012345 and Pass 12345");
                
                // Shake the form to indicate error
                loginForm.style.animation = "shake 0.4s ease-in-out";
                setTimeout(() => { loginForm.style.animation = "none"; }, 400);
                
                // Clear password
                passInput.value = "";
                return;
            }

            // C. Success - Simulate Login Processing
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Authenticating...';
            submitBtn.style.opacity = '0.8';
            submitBtn.style.cursor = 'wait';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Redirect to the new Dashboard Page
                window.location.href = "home.html";
            }, 1500);
        });
    }

    // =========================================
    // 3. DASHBOARD NAVIGATION (DROPDOWNS)
    // =========================================
    // This handles the "Menu" and "Portfolio" dropdowns in home.html
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        if(trigger){
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Stop click from closing immediately
                
                // Close all other open dropdowns first
                dropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });

                // Toggle the clicked one
                dropdown.classList.toggle('active');
            });
        }
    });

    // Close dropdowns if user clicks anywhere else on the page
    document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
    });

  // =========================================
    // 4. HIGH-PERFORMANCE PARALLAX (LAG FIX)
    // =========================================
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    // 1. Just capture coordinates on mouse move (Cheap operation)
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - windowHalfX);
        mouseY = (e.clientY - windowHalfY);
    });

    // 2. Animate in a separate loop (The "Game Loop" approach)
    const mesh = document.querySelector('.background-mesh');
    
    function animateParallax() {
        if (mesh) {
            // Smoothly interpolate towards the target (Easing)
            // 0.05 is the "smoothness" factor. Lower = smoother/slower.
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            // Apply transform
            // Using translate3d forces the GPU to handle the rendering (Hardware Acceleration)
            mesh.style.transform = `translate3d(${-targetX / 25}px, ${-targetY / 25}px, 0)`;
        }
        
        // Loop this function at 60fps
        requestAnimationFrame(animateParallax);
    }

    // Start the loop
    animateParallax();
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

function openLecturerModal(unit) {
            // Update Text
            document.getElementById('modal-unit-code').innerText = unit;
            
            // (Optional) If you have dynamic data, update names here
            // document.getElementById('modal-lecturer-name').innerText = "New Name";
            // document.getElementById('modal-lecturer-name-2').innerText = "New Name";

            // Show Window
            document.getElementById('lecturer-modal').style.display = 'flex';
        }
