document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation (could be extended further)
    if (name && email && message) {
        // Display a thank you message
        alert('Thank you for your feedback, ' + name + '!');
        
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
