var typed2 = new Typed('.text',{
    strings:[,'Software Engineer--','Frontend Developer--','Designer--'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop:true,
})
let bar=document.querySelector('.bars')
let side_bar=document.querySelector('.side_bar')
bar.addEventListener('click',()=>{
    side_bar.classList.toggle('show_side_bar');
});
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('submitBtn').addEventListener('click', function (e) {
      e.preventDefault();

      // Collect input values
      const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
      const subject = document.querySelector('input[placeholder="Your Subject"]').value.trim();
      const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
      const message = document.querySelector('input[placeholder="Your Message"]').value.trim();

      if (!name || !subject || !email || !message) {
        alert('Please fill all the fields before submitting.');
        return;
      }

      const whatsappNumber = "919500652202"; // ✅ <--- Place your WhatsApp number here (WITHOUT + sign or spaces)

      // Create message text
      const text = `Hello, I have a new message from your website contact form:\n\n` +
                   `Name: ${name}\nSubject: ${subject}\nEmail: ${email}\nMessage: ${message}`;

      // Encode message for URL
      const encodedText = encodeURIComponent(text);

      // WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      // Open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');
    });
  });
