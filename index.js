const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const pdf = require("html-pdf");
const dynamicResume = require("./docs/dynamic-resume");

const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Serve React app
app.use(express.static(path.join(__dirname, "client/login-app/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/login-app/build", "index.html"));
});

app.get("/server-home", (req, res) => {
  res.send("Welcome to the Server Home Page");
});

// Use express-ejs-layouts
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route for home
app.get("/home", (req, res) => {
  res.render("home");
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Add your login logic here
  if (email === 'test@example.com' && password === 'password') {
    res.redirect('/home');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

const options = {
  height: "14in",
  width: "12in",
};

app.get("/resume-maker/:theme", (req, res, next) => {
  console.log("theme:", req.params.theme);
  switch (req.params.theme) {
    case "1":
      res.render("resume-maker", { theme: "blue" });
      break;
    case "2":
      res.render("resume-maker", { theme: "green" });
      break;
    default:
      res.render("resume-maker", { theme: "blue" });
      break;
  }
});

app.post("/resume-maker", (req, res, next) => {
  console.log(req.body);
  const userName = req.body.name;
  const lowercaseName = userName.toLowerCase();
  const noSpaceName = lowercaseName.replace(/\s/g, ""); // Replacing all spaces
  const shortName = noSpaceName.substring(0, 10); // Extracting first 10 characters
  console.log("shortName:", shortName);

  // Initialize theme options
  let themeOptions = {
    leftTextColor: "",
    leftBackgroundColor: "",
    wholeBodyColor: "",
    rightTextColor: ""
  };

  // Set theme-specific options
  if (req.body.theme === 'green') {
    themeOptions = {
      leftTextColor: "rgb(241, 241, 241)",
      leftBackgroundColor: "rgb(0, 0, 58)",
      wholeBodyColor: "rgb(255, 255, 255)",
      rightTextColor: "rgb(1, 0, 66)"
    };
  } else if (req.body.theme === 'blue')  {
    themeOptions = {
      leftTextColor: "rgb(241, 241, 241)",
      leftBackgroundColor: "rgb(12, 36, 58)",
      wholeBodyColor: "rgb(255, 255, 255)",
      rightTextColor: "rgb(1, 0, 66)"
    };
  } else {
    // Handle any other theme value (optional)
    console.log("Unknown theme, defaulting to blue theme.");
    themeOptions = {
      leftTextColor: "rgb(241, 241, 241)",
      leftBackgroundColor: "rgb(12, 36, 58)",
      wholeBodyColor: "rgb(255, 255, 255)",
      rightTextColor: "rgb(1, 0, 66)"
    };
  }

  // Generate the HTML string
  const htmlContent = dynamicResume(req.body, themeOptions);

  // Create PDF
  pdf.create(htmlContent, options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
    if (error) {
      console.error("Error creating PDF:", error);
      return res.status(500).send("Error creating PDF");
    }
    console.log("PDF created:", response.filename);
    res.sendFile(response.filename);
  });
});

// New route to handle PDF generation
app.post("/generate-pdf", (req, res, next) => {
  console.log(req.body);
  const userName = req.body.name;
  const lowercaseName = userName.toLowerCase();
  const noSpaceName = lowercaseName.replace(/\s/g, ""); // Replacing all spaces
  const shortName = noSpaceName.substring(0, 10); // Extracting first 10 characters
  console.log("shortName:", shortName);

  // Initialize theme options
  let themeOptions = {
    leftTextColor: "",
    leftBackgroundColor: "",
    wholeBodyColor: "",
    rightTextColor: ""
  };

  // Set theme-specific options
  if (req.body.theme === 'green') {
    themeOptions = {
      leftTextColor: "rgb(241, 241, 241)",
      leftBackgroundColor: "rgb(0, 0, 58)",
      wholeBodyColor: "rgb(255, 255, 255)",
      rightTextColor: "rgb(1, 0, 66)"
    };
  } else if (req.body.theme === 'blue')  {
    themeOptions = {
      leftTextColor: "rgb(241, 241, 241)",
      leftBackgroundColor: "rgb(12, 36, 58)",
      wholeBodyColor: "rgb(255, 255, 255)",
      rightTextColor: "rgb(1, 0, 66)"
    };
  } else {
    // Handle any other theme value (optional)
    console.log("Unknown theme, defaulting to blue theme.");
    themeOptions = {
      leftTextColor: "rgb(241, 241, 241)",
      leftBackgroundColor: "rgb(12, 36, 58)",
      wholeBodyColor: "rgb(255, 255, 255)",
      rightTextColor: "rgb(1, 0, 66)"
    };
  }

  // Generate the HTML string
  const htmlContent = dynamicResume(req.body, themeOptions);

  // Create PDF
  pdf.create(htmlContent, options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
    if (error) {
      console.error("Error creating PDF:", error);
      return res.status(500).send("Error creating PDF");
    }
    console.log("PDF created:", response.filename);
    res.download(response.filename);
  });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Add your login logic here
  if (email === 'test@example.com' && password === 'password') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});
