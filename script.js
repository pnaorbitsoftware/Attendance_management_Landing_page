
    // toast helper
    function showToast(msg, isError = false) {
        let toast = document.createElement('div');
        toast.innerText = msg;
        toast.style.position = 'fixed';
        toast.style.bottom = '25px';
        toast.style.right = '25px';
        toast.style.background = isError ? '#d32f2f' : '#1e2a3a';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '60px';
        toast.style.zIndex = '999';
        toast.style.fontWeight = '500';
        toast.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    }


    function toggleProductsMenu(){
    document.getElementById("productsMenu")
    .classList.toggle("active");
}

window.addEventListener("click", function(e){

    const products = document.querySelector(".products-dropdown");

    if(products && !products.contains(e.target)){
        document.getElementById("productsMenu")
        .classList.remove("active");
    }

});

    function toggleCountryMenu(){
    document.getElementById("countryMenu")
    .classList.toggle("active");
}

function selectCountry(name, flagSrc){

    document.getElementById("selectedCountry").innerText = name;

    document.getElementById("selectedFlag").src = flagSrc;

    document.getElementById("countryMenu")
    .classList.remove("active");
}

window.addEventListener("click", function(e){

    const dropdown = document.querySelector(".country-dropdown");

    if(!dropdown.contains(e.target)){
        document.getElementById("countryMenu")
        .classList.remove("active");
    }

});

    // Appointment form handler
    const appointForm = document.getElementById('appointmentForm');
    if(appointForm) {
        appointForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const company = document.getElementById('companyName').value.trim();
            const cname = document.getElementById('contactName').value.trim();
            const cnum = document.getElementById('contactNumber').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const emp = document.getElementById('employeeCount').value;
            const msg = document.getElementById('message').value.trim();
            const terms = document.getElementById('termsAppoint').checked;

            if(!company || !cname || !cnum || !email || !emp || !msg || !terms) {
                showToast('Please fill all fields and accept Terms & Privacy Policy.', true);
                return;
            }
            if(!email.includes('@')) {
                showToast('Enter a valid email address.', true);
                return;
            }
            showToast(`✅ Thank you ${cname}! Your demo request for ${company} has been sent. Our team will contact you within 24h.`, false);
            appointForm.reset();
            document.getElementById('employeeCount').value = '';
        });
    }

    // smooth anchor and demo button interactions
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
