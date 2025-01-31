const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "developer_profiles",
    password: "Sql@123",
  });
  db.connect(err => {
    if (err) {
      console.error("Database connection error:", err);
      return;
    }
    console.log("Connected to database!");
  });
// try{
//   connection.query("SHOW TABLES",(err,results)=>{
//     if(err) throw err;
//     console.log(results);

//   })
// }catch(err){
//   console.log(err);
// }
// connection.end();
// let data=[
//     {
//         id: uuidv4(),
//       imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
//       name: "Alex Johnson",
//       title: "Full-Stack Developer",
//       bio: "Passionate developer specializing in creating scalable web applications and delightful user experiences.",
//       password:"123456",
//       projects: [
//         {
//           projectName: "TaskMaster Pro",
//           projectLink: "https://taskmasterpro.com"
//         },
//         {
//           projectName: "DevConnect API",
//           projectLink: "https://api.devconnect.com"
//         }
//       ],
//       skills: ["JavaScript", "React", "Node.js", "Python", "Docker", "GraphQL"],
//       portfolioLink: "https://alexjohnson.dev",
//       githubLink: "https://github.com/alexjohnson",
//       linkedinLink: "https://linkedin.com/in/alexjohnson",
//       instaLink: "https://instagram.com/codewithalex",
//       xLink: "https://twitter.com/alexdev"
//     },
//     {
//         id: uuidv4(),
//       imageUrl: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg",
//       name: "Jamie Lee",
//       title: "Frontend Engineer",
//       bio: "Crafting pixel-perfect interfaces and bringing delightful user interactions to life.",
//       password:"123456",
//       projects: [
//         {
//           projectName: "UI Motion Kit",
//           projectLink: "https://uimotionkit.com"
//         },
//         {
//           projectName: "CSS Wizardry",
//           projectLink: "https://csswizardry.io"
//         }
//       ],
//       skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Tailwind CSS", "Figma"],
//       portfolioLink: "https://jamielee.dev",
//       githubLink: "https://github.com/jamielee",
//       linkedinLink: "https://linkedin.com/in/jamielee",
//       instaLink: "https://instagram.com/designwithjamie",
//       xLink: "https://twitter.com/jamiecodes"
//     },
//     {
//         id: uuidv4(),
//       imageUrl: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg",
//       name: "Sam Patel",
//       title: "Data Scientist",
//       bio: "Turning data into actionable insights with machine learning and AI models.",
//       password:"123456",
//       projects: [
//         {
//           projectName: "PredictAI",
//           projectLink: "https://predictai.io"
//         },
//         {
//           projectName: "DataViz Hub",
//           projectLink: "https://datavizhub.com"
//         }
//       ],
//       skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Tableau", "R"],
//       portfolioLink: "https://sampatel.ai",
//       githubLink: "https://github.com/sampatel",
//       linkedinLink: "https://linkedin.com/in/sampatel",
//       instaLink: "https://instagram.com/datainsights",
//       xLink: "https://twitter.com/datasam"
//     },
//     {
//         id: uuidv4(),
//       imageUrl: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
//       name: "Riley Chen",
//       title: "DevOps Engineer",
//       bio: "Automating infrastructure and optimizing CI/CD pipelines for high-performance teams.",
//       password:"123456",
//       projects: [
//         {
//           projectName: "Cloudify",
//           projectLink: "https://cloudify.io"
//         },
//         {
//           projectName: "Pipeline Wizard",
//           projectLink: "https://pipelinewizard.dev"
//         }
//       ],
//       skills: ["AWS", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Linux"],
//       portfolioLink: "https://rileychen.dev",
//       githubLink: "https://github.com/rileychen",
//       linkedinLink: "https://linkedin.com/in/rileychen",
//       instaLink: "https://instagram.com/cloudopslife",
//       xLink: "https://twitter.com/devopsriley"
//     },
//     {
//         id: uuidv4(),
//       imageUrl: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg",
//       name: "Taylor Green",
//       title: "Mobile App Developer",
//       bio: "Building high-performance native and cross-platform mobile apps.",
//       password:"123456",
//       projects: [
//         {
//           projectName: "FitLife App",
//           projectLink: "https://fitlifeapp.com"
//         },
//         {
//           projectName: "TravelMate",
//           projectLink: "https://travelmate.dev"
//         }
//       ],
//       skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "UI/UX"],
//       portfolioLink: "https://taylorgreen.dev",
//       githubLink: "https://github.com/taylorgreen",
//       linkedinLink: "https://linkedin.com/in/taylorgreen",
//       instaLink: "https://instagram.com/mobilewithtaylor",
//       xLink: "https://twitter.com/devtaylorg"
//     }
//   ];
  // Insert Users
// data.forEach(user => {
//   connection.query(
//     `INSERT INTO users (id, imageUrl, name, title, bio, password, portfolioLink, githubLink, linkedinLink, instaLink, xLink) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//     [user.id, user.imageUrl, user.name, user.title, user.bio, user.password, user.portfolioLink, user.githubLink, user.linkedinLink, user.instaLink, user.xLink],
//     (err, results) => {
//       if (err) throw err;
//       console.log("Inserted user:", user.name);

//       // Insert projects
//       user.projects.forEach(project => {
//         connection.query(
//           `INSERT INTO projects (user_id, projectName, projectLink) VALUES (?, ?, ?)`,
//           [user.id, project.projectName, project.projectLink],
//           (err, results) => {
//             if (err) throw err;
//             console.log("Inserted project:", project.projectName);
//           }
//         );
//       });

//       // Insert skills
//       user.skills.forEach(skill => {
//         connection.query(
//           `INSERT INTO skills (user_id, skill) VALUES (?, ?)`,
//           [user.id, skill],
//           (err, results) => {
//             if (err) throw err;
//             console.log("Inserted skill:", skill);
//           }
//         );
//       });
//     }
//   );
// });

// Close connection
// setTimeout(() => connection.end(), 5000);
  // console.log(data);

  // app.get("/", (req, res) => {
  //   let q=`SELECT count(*) FROM users`;
  //   try{
  //     connection.query(q,(err,results)=>{
  //       if(err) throw err;
  //       console.log(results);
  //       res.send({count:results[0]['count(*)']});
  
  //     })
  //   }
  //   catch(err){
  //     console.log(err);
  //     res.send("Error in fetching data");
  //   }
  //   // res.send("Welcome to the Developer Profiles API");
  // });
// Route to fetch and display user data
app.get("/", (req, res) => {
  let query = `
    SELECT users.*, 
           GROUP_CONCAT(DISTINCT projects.projectName, '::', projects.projectLink) AS projects,
           GROUP_CONCAT(DISTINCT skills.skill) AS skills
    FROM users
    LEFT JOIN projects ON users.id = projects.user_id
    LEFT JOIN skills ON users.id = skills.user_id
    GROUP BY users.id;
  `;

  db.query(query, (err, results) => {
    if (err) throw err;

    // Format results into structured JSON
    let users = results.map(row => ({
      id: row.id,
      imageUrl: row.imageUrl,
      name: row.name,
      title: row.title,
      bio: row.bio,
      skills: row.skills ? row.skills.split(",") : [],
      projects: row.projects
        ? row.projects.split(",").map(proj => {
            let [projectName, projectLink] = proj.split("::");
            return { projectName, projectLink };
          })
        : [],
      portfolioLink: row.portfolioLink,
      githubLink: row.githubLink,
      linkedinLink: row.linkedinLink
    }));

    res.render("index", { users });
  });
});

// Route to render the add developer form
app.get("/add", (req, res) => {
  res.render("add");
});

// Route to handle form submission
app.post("/add", (req, res) => {
  const { name, title, bio, imageUrl, skills, portfolioLink, githubLink, linkedinLink } = req.body;

  // Insert into the users table
  const userQuery = `INSERT INTO users (name, title, bio, imageUrl, portfolioLink, githubLink, linkedinLink) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(userQuery, [name, title, bio, imageUrl, portfolioLink, githubLink, linkedinLink], (err, result) => {
    if (err) throw err;

    const userId = result.insertId;

    // Insert skills into skills table
    const skillList = skills.split(",").map(skill => skill.trim());
    const skillQuery = `INSERT INTO skills (user_id, skill) VALUES ?`;
    const skillValues = skillList.map(skill => [userId, skill]);

    db.query(skillQuery, [skillValues], err => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});


  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });