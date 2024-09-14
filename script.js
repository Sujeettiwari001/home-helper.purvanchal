// Room Slider Auto-Move
function showSlide(index) {
    const slidesArr = Array.from(slides.children);
    slidesArr.forEach(slide => slide.classList.remove('active'));
    slidesArr[index].classList.add('active');
    const percentage = -(index * 100);
    slides.style.transform = `translateX(${percentage}%)`;
}

let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    const percentage = -(index * 100);
    slides.style.transform = `translateX(${percentage}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-scroll every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Manual slide navigation using arrows
const nextSlideBtn = document.getElementById('nextSlide');
const prevSlideBtn = document.getElementById('prevSlide');

nextSlideBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();  // Reset the auto-slide timer when manually changing
});

prevSlideBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();  // Reset the auto-slide timer when manually changing
});

// Reset the auto-slide timer after manual navigation
function resetAutoSlide() {
    clearInterval(autoSlide); // Stop the current auto-slide timer
    autoSlide = setInterval(nextSlide, 3000); // Restart the auto-slide timer
}

const loginRegisterLink = document.getElementById('login-register');
const modal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');

// Open the modal when "Login/Register" is clicked
loginRegisterLink.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Email Validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        alert('Login Successful!');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validate Username
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Other validations similar to login form...
    if (isValid) {
        alert('Registration Successful!');
    }
});


// Close the modal when the close (X) button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation (add actual backend authentication here)
    if (email && password) {
        alert(`Login successful for ${email}`);
        modal.style.display = 'none'; // Close the modal on successful login
    } else {
        alert('Please fill in both fields to login.');
    }
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Simple validation (add actual backend registration logic here)
    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert(`Registration successful for ${name}`);
            modal.style.display = 'none'; // Close the modal on successful registration
        } else {
            alert('Passwords do not match. Please try again.');
        }
    } else {
        alert('Please fill in all fields to register.');
    }
});


// 2. Language Switcher
const languageButtons = document.querySelectorAll('.language-switcher button');
let currentLanguage = 'English';

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentLanguage = button.textContent;
        alert('Language switched to: ' + currentLanguage);
        // Implement further language switch logic here
    });
});

// 3. Search Bar Functionality (Activate all search bars)
const searchBars = document.querySelectorAll('.search-bar'); // Select all search bars

searchBars.forEach(searchBar => {
    const searchButton = searchBar.querySelector('button');
    const searchInput = searchBar.querySelector('input[type="text"]');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for rooms in: ${query}`);
            // Add logic to fetch and display search results based on the query
        } else {
            alert('Please enter a location or type to search.');
        }
    });

    // Optionally, trigger search when 'Enter' is pressed in the input field
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the form submission
            searchButton.click(); // Trigger the click event for the search button
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const featuredRoomsContainer = document.querySelector('.featured-rooms-container');
    
    // Example data, replace with your actual data fetching logic
    const rooms = [
        { img: 'room1.jpg', title: 'Spacious Single Room', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '#' },
        { img: 'room2.jpg', title: 'Cozy Double Room', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '#' },
        { img: 'room3.jpg', title: 'Modern Studio Apartment', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '#' }
        // Add more rooms as needed
    ];
    
    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('featured-room');
        roomElement.innerHTML = `
            <img src="${room.img}" alt="${room.title}">
            <div class="room-info">
                <h3>${room.title}</h3>
                <p>${room.desc}</p>
                <a href="${room.link}" class="btn">View Details</a>
            </div>
        `;
        featuredRoomsContainer.appendChild(roomElement);
    });
});

