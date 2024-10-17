const resumeData = {
 "personalInfo": {
    "name": "Jane Doe",
    "position": "Senior Software Engineer",
    "email": "jane.doe@email.com",
    "phone": "+1 (555) 123-4567",
    "location": "New York, NY",
    "linkedIn": "linkedin.com/in/janedoe",
    "portfolio": "janedoe.com",
    "profilePicture": "https://img1.teletype.in/files/40/e7/40e747b1-c99f-4d9a-946b-e8b7e551dd93.jpeg" // Placeholder image URL
  },
  "summary": "Experienced software engineer with a passion for creating efficient and scalable applications. Skilled in full-stack development and cloud technologies.",
  "skills": [
    "JavaScript", "Python", "React", "Node.js", "AWS", "Docker", "Git", "Agile methodologies"
  ],
  "workExperience": [
    {
      "title": "Senior Software Engineer",
      "company": "Tech Innovations Inc.",
      "location": "New York, NY",
      "startDate": "2019-03-01",
      "endDate": "Present",
      "responsibilities": [
        "Lead development of microservices architecture",
        "Mentor junior developers",
        "Implement CI/CD pipelines"
      ]
    },
    {
      "title": "Software Developer",
      "company": "WebSolutions Co.",
      "location": "Boston, MA",
      "startDate": "2016-06-15",
      "endDate": "2019-02-28",
      "responsibilities": [
        "Developed responsive web applications",
        "Optimized database queries for improved performance",
        "Collaborated with UX team to improve user interfaces"
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University of Technology",
      "location": "Cambridge, MA",
      "graduationDate": "2016-05-15"
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "dateObtained": "2020-09-01"
    }
  ],
  "languages": [
    {
      "language": "English",
      "proficiency": 80
    },
    {
      "language": "Korean",
      "proficiency": 60
    },
    {
      "language": "Russian",
      "proficiency": 100
    }
  ],
  "projects": [
    {
      "name": "E-commerce Platform",
      "description": "Developed a scalable e-commerce platform using React and Node.js",
      "url": "https://infometka.com/"
    }
  ],
  "interests": ["Hiking", "Photography", "Machine Learning", "Open Source Contributing"]
};

function createResumeHTML() {
  const leftColumn = document.getElementById('left-column');
  const rightColumn = document.getElementById('right-column');
  
  // Left Column Content
  leftColumn.innerHTML = `
    <div class="flex flex-col items-center mb-6">
      <div class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white">
        <img src="${resumeData.personalInfo.profilePicture}" alt="${resumeData.personalInfo.name}" class="w-full h-full object-cover">
      </div>
      <h1 class="text-3xl font-bold text-white mb-2 text-center">${resumeData.personalInfo.name}</h1>
      <p class="text-xl text-gray-300 mb-4 text-center">${resumeData.personalInfo.position}</p>
    </div>
    <div class="mb-6">
      <p class="flex items-center mb-2"><i class="fas fa-envelope w-6"></i> ${resumeData.personalInfo.email}</p>
      <p class="flex items-center mb-2"><i class="fas fa-phone w-6"></i> ${resumeData.personalInfo.phone}</p>
      <p class="flex items-center mb-2"><i class="fas fa-map-marker-alt w-6"></i> ${resumeData.personalInfo.location}</p>
      <p class="flex items-center mb-2"><i class="fab fa-linkedin w-6"></i> <a href="https://${resumeData.personalInfo.linkedIn}" class="text-blue-300 hover:underline">${resumeData.personalInfo.linkedIn}</a></p>
      <p class="flex items-center mb-2"><i class="fas fa-globe w-6"></i> <a href="https://${resumeData.personalInfo.portfolio}" class="text-blue-300 hover:underline">${resumeData.personalInfo.portfolio}</a></p>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-white mb-2">Education</h2>
      ${resumeData.education.map(edu => `
        <div class="mb-2">
          <p class="font-semibold">${edu.degree}</p>
          <p class="text-gray-300">${edu.institution}</p>
          <p class="text-gray-300">${edu.graduationDate}</p>
        </div>
      `).join('')}
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-white mb-2">Certifications</h2>
      ${resumeData.certifications.map(cert => `
        <div class="mb-2">
          <p class="font-semibold">${cert.name}</p>
          <p class="text-gray-300">${cert.issuer}, ${cert.dateObtained}</p>
        </div>
      `).join('')}
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-white mb-2">Languages</h2>
      ${resumeData.languages.map(lang => `
        <div class="mb-2">
          <p class="font-semibold">${lang.language}</p>
          <div class="w-full bg-gray-700 rounded-full h-2.5">
            <div class="bg-blue-300 h-2.5 rounded-full" style="width: ${lang.proficiency}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;


  // Right Column Content
  rightColumn.innerHTML = `
    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
      <p class="text-gray-700">${resumeData.summary}</p>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
      <div class="flex flex-wrap">
        ${resumeData.skills.map(skill => `
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${skill}
          </span>
        `).join('')}
      </div>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Work Experience</h2>
      ${resumeData.workExperience.map(job => `
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-gray-800">${job.title}</h3>
          <p class="text-gray-600">${job.company}, ${job.location}</p>
          <p class="text-gray-600">${job.startDate} - ${job.endDate}</p>
          <ul class="list-disc list-inside text-gray-700 mt-2">
            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
      ${resumeData.projects.map(project => `
        <div class="mb-2">
          <h3 class="text-xl font-semibold text-gray-800">${project.name}</h3>
          <p class="text-gray-700">${project.description}</p>
          <a href="https://${project.url}" class="text-blue-600 hover:underline">${project.url}</a>
        </div>
      `).join('')}
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Interests</h2>
      <div class="flex flex-wrap">
        ${resumeData.interests.map(interest => `
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${interest}
          </span>
        `).join('')}
      </div>
    </div>
  `;
}

// Call the function to create the resume when the page loads
window.onload = createResumeHTML;