const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql2");


// Database connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_mysql_password",
    database: "developer_profiles"
  });

let data=[
    {
        id: uuidv4(),
      imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      name: "Alex Johnson",
      title: "Full-Stack Developer",
      bio: "Passionate developer specializing in creating scalable web applications and delightful user experiences.",
      password:"123456",
      projects: [
        {
          projectName: "TaskMaster Pro",
          projectLink: "https://taskmasterpro.com"
        },
        {
          projectName: "DevConnect API",
          projectLink: "https://api.devconnect.com"
        }
      ],
      skills: ["JavaScript", "React", "Node.js", "Python", "Docker", "GraphQL"],
      portfolioLink: "https://alexjohnson.dev",
      githubLink: "https://github.com/alexjohnson",
      linkedinLink: "https://linkedin.com/in/alexjohnson",
      instaLink: "https://instagram.com/codewithalex",
      xLink: "https://twitter.com/alexdev"
    },
    {
        id: uuidv4(),
      imageUrl: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg",
      name: "Jamie Lee",
      title: "Frontend Engineer",
      bio: "Crafting pixel-perfect interfaces and bringing delightful user interactions to life.",
      password:"123456",
      projects: [
        {
          projectName: "UI Motion Kit",
          projectLink: "https://uimotionkit.com"
        },
        {
          projectName: "CSS Wizardry",
          projectLink: "https://csswizardry.io"
        }
      ],
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Tailwind CSS", "Figma"],
      portfolioLink: "https://jamielee.dev",
      githubLink: "https://github.com/jamielee",
      linkedinLink: "https://linkedin.com/in/jamielee",
      instaLink: "https://instagram.com/designwithjamie",
      xLink: "https://twitter.com/jamiecodes"
    },
    {
        id: uuidv4(),
      imageUrl: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg",
      name: "Sam Patel",
      title: "Data Scientist",
      bio: "Turning data into actionable insights with machine learning and AI models.",
      password:"123456",
      projects: [
        {
          projectName: "PredictAI",
          projectLink: "https://predictai.io"
        },
        {
          projectName: "DataViz Hub",
          projectLink: "https://datavizhub.com"
        }
      ],
      skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Tableau", "R"],
      portfolioLink: "https://sampatel.ai",
      githubLink: "https://github.com/sampatel",
      linkedinLink: "https://linkedin.com/in/sampatel",
      instaLink: "https://instagram.com/datainsights",
      xLink: "https://twitter.com/datasam"
    },
    {
        id: uuidv4(),
      imageUrl: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
      name: "Riley Chen",
      title: "DevOps Engineer",
      bio: "Automating infrastructure and optimizing CI/CD pipelines for high-performance teams.",
      password:"123456",
      projects: [
        {
          projectName: "Cloudify",
          projectLink: "https://cloudify.io"
        },
        {
          projectName: "Pipeline Wizard",
          projectLink: "https://pipelinewizard.dev"
        }
      ],
      skills: ["AWS", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Linux"],
      portfolioLink: "https://rileychen.dev",
      githubLink: "https://github.com/rileychen",
      linkedinLink: "https://linkedin.com/in/rileychen",
      instaLink: "https://instagram.com/cloudopslife",
      xLink: "https://twitter.com/devopsriley"
    },
    {
        id: uuidv4(),
      imageUrl: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg",
      name: "Taylor Green",
      title: "Mobile App Developer",
      bio: "Building high-performance native and cross-platform mobile apps.",
      password:"123456",
      projects: [
        {
          projectName: "FitLife App",
          projectLink: "https://fitlifeapp.com"
        },
        {
          projectName: "TravelMate",
          projectLink: "https://travelmate.dev"
        }
      ],
      skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "UI/UX"],
      portfolioLink: "https://taylorgreen.dev",
      githubLink: "https://github.com/taylorgreen",
      linkedinLink: "https://linkedin.com/in/taylorgreen",
      instaLink: "https://instagram.com/mobilewithtaylor",
      xLink: "https://twitter.com/devtaylorg"
    }
  ];
  
  console.log(data);