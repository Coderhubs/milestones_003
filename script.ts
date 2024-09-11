document.getElementById('resume-form')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    generateResume();
});

function changePhoto(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const profilePhoto = document.getElementById('profilePhoto') as HTMLImageElement;
    
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e: ProgressEvent<FileReader>) {
            if (e.target && profilePhoto) {
                profilePhoto.src = e.target.result as string; // Set the new image source
            }
        };
        
        reader.readAsDataURL(fileInput.files[0]); // Read the selected file as a data URL
    }
}

function generateResume(): void {
    // Get form values
    const nameElement = document.getElementById('Name') as HTMLInputElement | null;
    const contactElement = document.getElementById('Contact Details') as HTMLInputElement | null;
    const emailElement = document.getElementById('Emails') as HTMLInputElement | null;
    const institutionElement = document.getElementById('institution') as HTMLInputElement | null;
    const qualificationElement = document.getElementById('Qualification') as HTMLInputElement | null;
    const fieldOfStudyElement = document.getElementById('field-of-study') as HTMLInputElement | null;
    const startDateElement = document.getElementById('start-date') as HTMLInputElement | null;
    const endDateElement = document.getElementById('end-date') as HTMLInputElement | null;
    const descriptionElement = document.getElementById('text') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('Skills') as HTMLInputElement | null;
    const experienceElement = document.getElementById('text') as HTMLTextAreaElement | null;
    const profilePhotoElement = document.getElementById('profilePhoto') as HTMLImageElement | null;

    // Check if all elements are present
    if (nameElement && contactElement && emailElement && institutionElement &&
        qualificationElement && fieldOfStudyElement && startDateElement &&
        endDateElement && descriptionElement && skillsElement && experienceElement && profilePhotoElement) {

        // Get values from form elements
        const name = nameElement.value;
        const contact = contactElement.value;
        const email = emailElement.value;
        const institution = institutionElement.value;
        const qualification = qualificationElement.value;
        const fieldOfStudy = fieldOfStudyElement.value;
        const startDate = startDateElement.value;
        const endDate = endDateElement.value;
        const description = descriptionElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const profilePhotoSrc = profilePhotoElement.src;

        // Create resume output
        const resumeOutput = `
        <h1> My Resume </h1>

         <img src="${profilePhotoSrc}" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #295263;
          object-fit: cover;  text-align:center; justify-content: center;
          object-fit: cover; display:block;margin: 0 auto 20px;">
        
             <h2> Personal Information </h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email}</p>
            
            <h2>Education</h2>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Qualification:</strong> ${qualification}</p>
            <p><strong>Field of Study:</strong> ${fieldOfStudy}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Description:</strong> ${description}</p>
            
            <h2>Skills</h2>
            <p>${skills}</p>
            
            <h2>Work Experience </h2>
        <p><strong>Experience:</strong> ${experience}</p>
        `;

        // Display the resume
        const resumeOutputElement = document.getElementById('resume-output') as HTMLElement | null;
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
}
