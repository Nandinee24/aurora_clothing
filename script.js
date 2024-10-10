const switchPage = (pageName) => {
    window.location.href = pageName;
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;


    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(function () {
        successMessage.style.display = 'none';
        document.getElementById('contactForm').reset();
    }, 3000);
});
