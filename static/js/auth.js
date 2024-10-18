const usernameInput = document.getElementById('username');

const validusernameMessage = document.getElementById('valid-username-message');
const InvalidusernameMessage = document.getElementById('invalid-username-message');

usernameInput.addEventListener('input', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetch(`/check_username/?username=${username}`)
        .then(response => response.json())
        .then(data => {
        if (data.exists) {
            InvalidusernameMessage.innerHTML = `username already exists
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
            `;
            validusernameMessage.innerHTML = '';
        } else {
            validusernameMessage.innerHTML = `username available 
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            `;
            InvalidusernameMessage.innerHTML = '';
        }
        });
    } else {
        validusernameMessage.innerHTML = '';
        InvalidusernameMessage.innerHTML = '';
    }
});



const emailInput = document.getElementById('email');

const validemailMessage = document.getElementById('valid-email-message');
const InvalidemailMessage = document.getElementById('invalid-email-message');

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    if (email) {
        fetch(`/check_email/?email=${email}`)
        .then(response => response.json())
        .then(data => {
        if (data.exists) {
            InvalidemailMessage.innerHTML = `email already exists
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
            `;
            validemailMessage.innerHTML = '';
        } else {
            validemailMessage.innerHTML = `email available 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            `;
            InvalidemailMessage.innerHTML = '';
        }
        });
    } else {
        validemailMessage.innerHTML = '';
        InvalidemailMessage.innerHTML = '';
    }
});




var myInput = document.getElementById("pass1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}