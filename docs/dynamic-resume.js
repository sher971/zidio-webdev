const dynamicResume = (options) => {
  // Helper function to generate HTML for a list of items
  const generateHTMLList = (items) => {
    return items
      .map(item => item ? `<li>${item}</li>` : '')
      .join('');
  };

  // Extract expertise items from options object
  const expertiseItems = [options.exp_1, options.exp_2, options.exp_3];
  const languages = options.languages ? options.languages.split(',') : [];
  const frameworks = options.frameworks ? options.frameworks.split(',') : [];
  const tools = options.tools ? options.tools.split(',') : [];
  const softSkills = options.softSkills ? options.softSkills.split(',') : []; // Extract soft skills

  // Extract experience items from options object
  const experienceYears = Array.isArray(options['experienceYears[]']) 
    ? options['experienceYears[]'] 
    : (options['experienceYears[]'] ? options['experienceYears[]'].split(',') : []);
  const experienceDetails = Array.isArray(options['experienceDetails[]']) 
    ? options['experienceDetails[]'] 
    : (options['experienceDetails[]'] ? options['experienceDetails[]'].split(',') : []);
  
  // Extract project items from options object
  const projectTitles = Array.isArray(options['projectTitles[]']) 
    ? options['projectTitles[]'] 
    : (options['projectTitles[]'] ? options['projectTitles[]'].split(',') : []);
  const projectDescriptions = Array.isArray(options['projectDescriptions[]']) 
    ? options['projectDescriptions[]'] 
    : (options['projectDescriptions[]'] ? options['projectDescriptions[]'].split(',') : []);

  // Extract certificate items from options object
  const certificateTitles = Array.isArray(options['certificateTitles[]']) 
    ? options['certificateTitles[]'] 
    : (options['certificateTitles[]'] ? options['certificateTitles[]'].split(',') : []);
  const certificateDescriptions = Array.isArray(options['certificateDescriptions[]']) 
    ? options['certificateDescriptions[]'] 
    : (options['certificateDescriptions[]'] ? options['certificateDescriptions[]'].split(',') : []);
  
  // Extract training items from options object
  const trainingTitles = Array.isArray(options['trainingTitles[]']) 
    ? options['trainingTitles[]'] 
    : (options['trainingTitles[]'] ? options['trainingTitles[]'].split(',') : []);
  const trainingDescriptions = Array.isArray(options['trainingDescriptions[]']) 
    ? options['trainingDescriptions[]'] 
    : (options['trainingDescriptions[]'] ? options['trainingDescriptions[]'].split(',') : []);
  
  // Extract volunteer items from options object
  const volunteerTitles = Array.isArray(options['volunteerTitles[]']) 
    ? options['volunteerTitles[]'] 
    : (options['volunteerTitles[]'] ? options['volunteerTitles[]'].split(',') : []);
  const volunteerDescriptions = Array.isArray(options['volunteerDescriptions[]']) 
    ? options['volunteerDescriptions[]'] 
    : (options['volunteerDescriptions[]'] ? options['volunteerDescriptions[]'].split(',') : []);

  // Generate HTML for expertise items
  const expertise = generateHTMLList(expertiseItems);

  // Generate HTML for experience items with right-aligned years and left-aligned descriptions
  const experience = experienceYears.map((year, index) => 
    year && experienceDetails[index] ? `
      <li class="experience-item">
        <span class="experience-year">${year}</span>
        <span class="experience-detail">${experienceDetails[index]}</span>
      </li>` : ''
  ).join('');

  // Generate HTML for projects items with right-aligned titles and left-aligned descriptions
  const projects = projectTitles.map((title, index) => 
    title && projectDescriptions[index] ? `
      <li class="project-item">
        <span class="project-title">${title}</span>
        <span class="project-description">${projectDescriptions[index]}</span>
      </li>` : ''
  ).join('');

  // Generate HTML for certificates items with right-aligned titles and left-aligned descriptions
  const certificates = certificateTitles.map((title, index) => 
    title && certificateDescriptions[index] ? `
      <li class="certificate-item">
        <span class="certificate-title">${title}</span>
        <span class="certificate-description">${certificateDescriptions[index]}</span>
      </li>` : ''
  ).join('');

  // Generate HTML for training items with right-aligned titles and left-aligned descriptions
  const trainings = trainingTitles.map((title, index) => 
    title && trainingDescriptions[index] ? `
      <li class="training-item">
        <span class="training-title">${title}</span>
        <span class="training-description">${trainingDescriptions[index]}</span>
      </li>` : ''
  ).join('');

  // Generate HTML for volunteer items with right-aligned titles and left-aligned descriptions
  const volunteers = volunteerTitles.map((title, index) => 
    title && volunteerDescriptions[index] ? `
      <li class="volunteer-item">
        <span class="volunteer-title">${title}</span>
        <span class="volunteer-description">${volunteerDescriptions[index]}</span>
      </li>` : ''
  ).join('');

  // Generate HTML for languages, frameworks, tools, and soft skills
  const languageHTML = languages.map(language => `<span>${language.trim()}</span>`).join(', ');
  const frameworkHTML = frameworks.map(framework => `<span>${framework.trim()}</span>`).join(', ');
  const toolHTML = tools.map(tool => `<span>${tool.trim()}</span>`).join(', ');
  const softSkillHTML = softSkills.map(skill => `<span>${skill.trim()}</span>`).join(', ');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${options.name}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
                height: 11in;
                width: 12in;
                overflow: hidden;
            }
            .container {
                max-width: 100%;
                margin: 0 auto;
                padding: 20px; /* Increased padding */
                background-color: #ffffff;
                border: 1px solid #ddd;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 20px; /* Increased margin */
            }
            .header h1 {
                margin: 0;
                font-size: 28px; /* Increased font size */
            }
            .header h2 {
                margin: 0;
                font-size: 22px; /* Increased font size */
                color: #555;
            }
            .contact-info {
                text-align: center;
                margin: 20px 0; /* Increased margin */
            }
            .contact-info a {
                color: #606060; /* Grey color for links */
                text-decoration: none;
            }
            .contact-info a:hover {
                text-decoration: underline;
            }
            .section {
                margin-bottom: 20px; /* Increased margin */
            }
            .section h2 {
                font-size: 22px; /* Increased font size */
                font-weight: bold;
                border-bottom: 2px solid #606060; /* Gray line */
                padding-bottom: 8px; /* Increased padding */
                margin-bottom: 10px; /* Increased margin */
            }
            .section p {
                font-size: 16px; /* Increased font size */
                line-height: 1.5; /* Increased line-height */
                margin: 0; /* Remove margin */
            }
            .skills ul, .experience ul, .projects ul, .certificates ul, .trainings ul, .volunteers ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .skills li, .experience li, .projects li, .certificates li, .trainings li, .volunteers li {
                margin-bottom: 10px; /* Increased spacing */
            }
            .skills li span, .experience li span, .projects li span, .certificates li span, .trainings li span, .volunteers li span {
                font-weight: bold;
                font-size: 16px; /* Increased font size for spans */
            }
            .detail-container {
                font-size: 16px; /* Increased font size */
            }
            .detail-item {
                margin-right: 12px; /* Increased margin */
            }
            .detail-label {
                font-weight: bold;
            }
            .experience-item, .project-item, .certificate-item, .training-item, .volunteer-item {
                display: flex;
                padding: 8px 0; /* Increased padding */
                font-size: 16px; /* Increased font size */
            }
            .experience-item .experience-year,
            .project-item .project-title,
            .certificate-item .certificate-title,
            .training-item .training-title,
            .volunteer-item .volunteer-title {
                flex: 1;
                text-align: right;
                font-weight: bold;
            }
            .experience-item .experience-detail,
            .project-item .project-description,
            .certificate-item .certificate-description,
            .training-item .training-description,
            .volunteer-item .volunteer-description {
                flex: 4;
                text-align: left;
                font-weight: normal; /* Remove bold styling */
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>${options.name}</h1>
                <h2>${options.jobTitle}</h2> <!-- Added Job Title -->
            </div>
            <div class="contact-info">
                <p><a href="tel:${options.phone}">${options.phone}</a> | <a href="mailto:${options.email}">${options.email}</a></p>
            </div>
            <div class="section summary">
                <h2>Education</h2>
                <p>${options.about}</p>
            </div>
           
            <div class="section skills">
                <h2>Skills</h2>
                <div class="detail-container">
                    <p><span class="detail-label">Languages:</span> ${languageHTML}</p>
                    <p><span class="detail-label">Frameworks:</span> ${frameworkHTML}</p>
                    <p><span class="detail-label">Tools:</span> ${toolHTML}</p>
                     <p><span class="detail-label">softskill:</span> ${softSkillHTML}</p>
                </div>
            </div>

         

            <div class="section experience">
                <h2>Experience</h2>
                <ul>${experience}</ul> <!-- Added Experience Section -->
            </div>

            <div class="section projects">
                <h2>Projects</h2>
                <ul>${projects}</ul> <!-- Added Projects Section -->
            </div>
            
            <div class="section certificates">
                <h2>Certificates</h2>
                <ul>${certificates}</ul> <!-- Added Certificates Section -->
            </div>
            
            <div class="section trainings">
                <h2>Training</h2>
                <ul>${trainings}</ul> <!-- Added Training Section -->
            </div>
            
            <div class="section volunteers">
                <h2>Volunteer Experience</h2>
                <ul>${volunteers}</ul> <!-- Added Volunteer Section -->
            </div>
        </div>
    </body>
    </html>
  `;
};

module.exports = dynamicResume;
