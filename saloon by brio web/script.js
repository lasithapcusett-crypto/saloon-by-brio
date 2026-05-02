document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate hamburger to X (optional enhancement)
        menuToggle.classList.toggle('is-active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(17, 17, 17, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // WhatsApp Booking Form Submission
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Validation (basic)
        if (!name || !service || !date || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Format Date for better reading (optional)
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });

        // Construct WhatsApp Message
        const message = `Hello Saloon By Brio, I would like to book an appointment.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Date:* ${formattedDate}%0A*Time:* ${time}%0A%0APlease confirm if this slot is available. Thank you!`;

        // Replace with actual WhatsApp Number (Format: CountryCode + Number, e.g., 94771234567 for Sri Lanka)
        const whatsappNumber = '94751250590'; // User's WhatsApp number

        // Create WhatsApp API URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset form after booking request
        bookingForm.reset();
    });
});
