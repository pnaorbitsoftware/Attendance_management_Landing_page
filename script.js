// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript loaded successfully!");
    
    // Get form element
    const form = document.getElementById('demoForm');
    const messageDiv = document.getElementById('message');
    
    // Add submit event listener
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page refresh
            
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            
            // Validate
            if(!fullName || !email) {
                messageDiv.innerHTML = '<span style="color: #ef4444;">Please fill all fields!</span>';
                return;
            }
            
            // Success message
            messageDiv.innerHTML = `<span style="color: #22c55e;">✅ Thanks ${fullName}! We'll contact you at ${email}</span>`;
            
            // Clear form
            form.reset();
            
            // Optional: Save to localStorage
            const demoData = {
                name: fullName,
                email: email,
                timestamp: new Date().toISOString()
            };
            
            let requests = JSON.parse(localStorage.getItem('demoRequests') || '[]');
            requests.push(demoData);
            localStorage.setItem('demoRequests', JSON.stringify(requests));
            
            console.log("Form submitted:", demoData);
        });
    }
    
    // Add animation to elements
    const container = document.querySelector('.container');
    if(container) {
        container.style.animation = 'fadeInUp 0.6s ease';
    }
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);