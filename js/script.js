 // Get all section elements
 const sections = document.querySelectorAll('.section');

 // Get overlay and popup elements
 const overlay = document.getElementById('overlay');
 const popup = document.getElementById('popup');
 const closeBtn = document.getElementById('close-btn');
 const popupIframe = document.getElementById('popup-iframe');

 // Add click event listeners to each section
 sections.forEach((section) => {
     section.addEventListener('click', () => {
         const url = section.getAttribute('data-url');
         if (url) {
             // Set the iframe source to the clicked section's URL
             popupIframe.src = url;
             // Display the overlay and popup
             overlay.style.display = 'block';
             popup.style.display = 'block';
         }
     });
 });

 // Add click event listener to close button
 closeBtn.addEventListener('click', () => {
     // Hide the overlay and popup
     overlay.style.display = 'none';
     popup.style.display = 'none';
     // Clear the iframe source
     popupIframe.src = '';
 });