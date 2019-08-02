// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1WVNqfcf0JIeHzw1Ee_h3zYpm4lzJeVk",
    authDomain: "web-portfolio-3b24a.firebaseapp.com",
    databaseURL: "https://web-portfolio-3b24a.firebaseio.com",
    projectId: "web-portfolio-3b24a",
    storageBucket: "web-portfolio-3b24a.appspot.com",
    messagingSenderId: "1038768008789",
    appId: "1:1038768008789:web:cce940023eacb94c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('web-portfolio-3b24a');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}