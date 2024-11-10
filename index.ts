//listing element
document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
    const responseContent = document.getElementById("responseContent") as HTMLElement;
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
  
    resumeForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Collecting form values
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const degree = (document.getElementById("degree") as HTMLInputElement).value;
      const institute = (document.getElementById("institute") as HTMLInputElement).value;
      const year = (document.getElementById("year") as HTMLInputElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  
      // Displaying profile picture if uploaded
      let profilePictureHTML = "";
      if (profilePictureInput.files && profilePictureInput.files[0]) {
        const profilePictureURL = URL.createObjectURL(profilePictureInput.files[0]);
        profilePictureHTML = `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">`;
      }
  
      // Generate the resume content in HTML
      const resumeHTML = `
        <div class="resume">
          <h2> ${profilePictureHTML}
          Personal Information:</h2>
          <p><strong>Name: ${name}</strong>
         
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3>Education:</h3>
          <p><strong>Degree:</strong> ${degree}</p>
          <p><strong>Institute:</strong> ${institute}</p>
          <p><strong>Year:</strong> ${year}</p>
          
          <h3>Experience</h3>
          <p>${experience}</p>
          
          <h3>Skills</h3>
          <p>${skills}</p>
        </div>
      `;
  
      // Insert generated resume into the output container
      responseContent.innerHTML = resumeHTML;
  
      // Show the resume output div
      resumeOutput.classList.remove("resume-output-hidden");
    });
  });
  