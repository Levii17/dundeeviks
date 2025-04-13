document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    function sendToWhatsApp(formData) {
        const phoneNumber = "+27711798477";
        const message = `New Message from Contact Form:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Send to WhatsApp
            sendToWhatsApp(formData);
            
            // Feedback and reset
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});