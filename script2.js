// Optional feature: Hide the button when scrolling down, and show when scrolling up
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const whatsappButton = document.getElementById('whatsapp-button');
    const instagramButton = document.getElementById('instagram-button');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Hide buttons when scrolling down
        whatsappButton.style.display = 'none';
        instagramButton.style.display = 'none';
    } else {
        // Show buttons when scrolling up
        whatsappButton.style.display = 'block';
        instagramButton.style.display = 'block';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});


function sendWhatsAppMessage() {
    let name = document.getElementById("cf-name").value.trim();
    let message = document.getElementById("cf-message").value.trim();

    if (name === "" || message === "") {
        alert("Please enter both Name and Message.");
        return;
    }

    let whatsappMessage = `Hello Mam, My name is ${name}.\nSubject- Yoga train enquiry.\nMessage- ${message}`;
    let phoneNumber = "7249858595";  // WhatsApp Number
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
}