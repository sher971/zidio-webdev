# Resume Builder and Login App

This project combines a resume builder application with a login system. The resume builder allows users to create and download resumes with various themes, while the login system provides user authentication.

## Features

- User authentication with login and signup
- Dynamic resume creation with multiple themes
- PDF generation of resumes
- Integration with a React frontend for an interactive user interface
- Backend built with Express and MongoDB

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository

```sh
git clone https://github.com/yourusername/resume-builder-login-app.git
cd resume-builder-login-app
Install Dependencies
Navigate to the root directory and install the dependencies:

sh
Copy code
npm install
Navigate to the React app directory and install its dependencies:

sh
Copy code
cd client/login-app
npm install
Build the React App
sh
Copy code
npm run build
Run the MongoDB Server
Ensure that MongoDB is running. You can start it with the following command if you have MongoDB installed locally:

sh
Copy code
mongod
Start the Server
Navigate back to the root directory and start the server:

sh
Copy code
cd ../../
nodemon app.js
The server should be running on http://localhost:5001.

Usage
Access the Application
Open your browser and navigate to:

arduino
Copy code
http://localhost:5001
Login
Use the login form to enter your credentials. The default credentials are:

Email: test@example.com
Password: password
Create a Resume
Navigate to the resume builder page by selecting a theme.
Fill in your resume details.
Submit the form to generate and download your resume in PDF format.
Project Structure
plaintext
Copy code
resume-builder-login-app/
├── client/
│   └── login-app/
│       ├── build/  # React build output
│       ├── src/    # React source files
│       ├── public/
│       └── package.json
├── docs/
│   └── dynamic-resume.js
├── node_modules/
├── public/
├── views/
│   └── home.ejs
│   └── resume-maker.ejs
├── app.js
├── package.json
└── README.md
Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or need further assistance, please contact:

shereen rafi
Email: shereenrafi36@gmail.com
GitHub: sher971


Feel free to adjust the content to better fit your specific project details and preferences.

![Screenshot (526)](https://github.com/user-attachments/assets/011decf0-e6bf-4be1-8434-b929f7b72885)
![Screenshot (525)](https://github.com/user-attachments/assets/a88ae45d-b0c9-405b-98ea-3edd65cbb3ec)
![Screenshot (524)](https://github.com/user-attachments/assets/f4101318-880a-4243-86a2-777513a0b594)
