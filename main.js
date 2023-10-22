window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav-bar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  // Add smooth scrolling to anchor links
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     const targetId = this.getAttribute("href").substring(1);
  //     const targetElement = document.getElementById(targetId);

  //     if (targetElement) {
  //       window.scrollTo({
  //         behavior: "smooth",
  //         top: targetElement.offsetTop,
  //       });
  //     }
  //   });
  // });
});

// Check if the current page is "contact.html" and add contact-specific code
if (window.location.pathname.includes("contact.html")) {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Name validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
      valid = false;
      nameError.textContent = "Name is required.";
    } else {
      nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      emailError.textContent = "Enter a valid email address.";
    } else {
      emailError.textContent = "";
    }

    // Message validation
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
      valid = false;
      messageError.textContent = "Message is required.";
    } else {
      messageError.textContent = "";
    }

    if (!valid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
}
