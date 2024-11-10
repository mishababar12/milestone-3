//listing element
document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var responseContent = document.getElementById("responseContent");
    var profilePictureInput = document.getElementById("profilePicture");
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Collecting form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var degree = document.getElementById("degree").value;
        var institute = document.getElementById("institute").value;
        var year = document.getElementById("year").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Displaying profile picture if uploaded
        var profilePictureHTML = "";
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            var profilePictureURL = URL.createObjectURL(profilePictureInput.files[0]);
            profilePictureHTML = "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">");
        }
        // Generate the resume content in HTML
        var resumeHTML = "\n        <div class=\"resume\">\n          <h2> ".concat(profilePictureHTML, "\n          Personal Information:</h2>\n          <p><strong>Name: ").concat(name, "</strong>\n         \n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Phone:</strong> ").concat(phone, "</p>\n          \n          <h3>Education:</h3>\n          <p><strong>Degree:</strong> ").concat(degree, "</p>\n          <p><strong>Institute:</strong> ").concat(institute, "</p>\n          <p><strong>Year:</strong> ").concat(year, "</p>\n          \n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>\n          \n          <h3>Skills</h3>\n          <p>").concat(skills, "</p>\n        </div>\n      ");
        // Insert generated resume into the output container
        responseContent.innerHTML = resumeHTML;
        // Show the resume output div
        resumeOutput.classList.remove("resume-output-hidden");
    });
});
