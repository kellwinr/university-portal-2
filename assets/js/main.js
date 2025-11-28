document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = loginForm.querySelector('.btn-primary');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate processing state
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Authenticating...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert("This is a demo UI. In a real environment, this would log you into the UTAR portal.");
            
            // Reset button
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });

    // Add subtle parallax effect to background on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        const mesh = document.querySelector('.background-mesh');
        mesh.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});
