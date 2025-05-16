const dotenv = require("dotenv").config();
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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
  db.connect(err => {
    if (err) {
      console.error("Database connection error:", err);
      return;
    }
    console.log("Connected to database!");
  });
  db.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
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
  let { name, imageUrl, title, bio, password, skills, projects, portfolioLink, githubLink, linkedinLink } = req.body;
  
  let id = uuidv4(); // Generate unique ID

  let skillArray = skills.split(",").map(skill => skill.trim());
  let projectArray = projects.split(",").map(proj => {
    let [projectName, projectLink] = proj.split("::").map(p => p.trim());
    return { projectName, projectLink };
  });

  let insertUserQuery = `INSERT INTO users (id, name, imageUrl, title, bio, password, portfolioLink, githubLink, linkedinLink) 
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(insertUserQuery, [id, name, imageUrl, title, bio, password, portfolioLink, githubLink, linkedinLink], (err, result) => {
    if (err) throw err;

    // Insert skills
    let insertSkillQuery = "INSERT INTO skills (user_id, skill) VALUES ?";
    let skillValues = skillArray.map(skill => [id, skill]);

    db.query(insertSkillQuery, [skillValues], (err, result) => {
      if (err) throw err;
    });

    // Insert projects
    let insertProjectQuery = "INSERT INTO projects (user_id, projectName, projectLink) VALUES ?";
    let projectValues = projectArray.map(proj => [id, proj.projectName, proj.projectLink]);

    db.query(insertProjectQuery, [projectValues], (err, result) => {
      if (err) throw err;
    });

    res.redirect("/");
  });
});
app.get("/edit/:id", (req, res) => {
  let userId = req.params.id;

  let query = `
    SELECT users.*, 
           GROUP_CONCAT(DISTINCT projects.projectName, '::', projects.projectLink) AS projects,
           GROUP_CONCAT(DISTINCT skills.skill) AS skills
    FROM users
    LEFT JOIN projects ON users.id = projects.user_id
    LEFT JOIN skills ON users.id = skills.user_id
    WHERE users.id = ?
    GROUP BY users.id;
  `;

  db.query(query, [userId], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.send("User not found!");
    }

    let user = {
      id: results[0].id,
      name: results[0].name,
      imageUrl: results[0].imageUrl,
      title: results[0].title,
      bio: results[0].bio,
      skills: results[0].skills ? results[0].skills.split(",") : [],
      projects: results[0].projects
        ? results[0].projects.split(",").map(proj => {
            let [projectName, projectLink] = proj.split("::");
            return { projectName, projectLink };
          })
        : [],
      portfolioLink: results[0].portfolioLink,
      githubLink: results[0].githubLink,
      linkedinLink: results[0].linkedinLink,
    };

    res.render("edit", { user });
  });
});

app.post("/edit/:id", (req, res) => {
  let userId = req.params.id;
  let { name, imageUrl, title, bio, password, skills, projects, portfolioLink, githubLink, linkedinLink } = req.body;

  // First, verify the password
  db.query("SELECT password FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.send("User not found!");
    }

    if (results[0].password !== password) {
      return res.send("Incorrect password! Please try again.");
    }

    // Update user information
    let updateUserQuery = `UPDATE users SET name=?, imageUrl=?, title=?, bio=?, portfolioLink=?, githubLink=?, linkedinLink=? WHERE id=?`;
    let userValues = [name, imageUrl, title, bio, portfolioLink, githubLink, linkedinLink, userId];
 
    db.query(updateUserQuery, userValues, (err, result) => {
      if (err) throw err;

      // Delete old skills & insert new ones
      db.query("DELETE FROM skills WHERE user_id = ?", [userId], () => {
        let skillArray = skills.split(",").map(skill => skill.trim());
        let insertSkillQuery = "INSERT INTO skills (user_id, skill) VALUES ?";
        let skillValues = skillArray.map(skill => [userId, skill]);

        db.query(insertSkillQuery, [skillValues], () => {});
      });

      // Delete old projects & insert new ones
      db.query("DELETE FROM projects WHERE user_id = ?", [userId], () => {
        let projectArray = projects.split(",").map(proj => {
          let [projectName, projectLink] = proj.split("::").map(p => p.trim());
          return { projectName, projectLink };
        });
        let insertProjectQuery = "INSERT INTO projects (user_id, projectName, projectLink) VALUES ?";
        let projectValues = projectArray.map(proj => [userId, proj.projectName, proj.projectLink]);

        db.query(insertProjectQuery, [projectValues], () => {});
      });

      res.redirect("/");
    });
  });
});

app.post("/delete/:id", (req, res) => {
  let userId = req.params.id;
  let { password } = req.body;

  // Verify password before deletion
  db.query("SELECT password FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.send("User not found!");
    }

    if (results[0].password !== password) {
      return res.send("Incorrect password! Please try again.");
    }

    // Delete user from the database
    db.query("DELETE FROM users WHERE id = ?", [userId], (err) => {
      if (err) throw err;

      // Delete associated skills
      db.query("DELETE FROM skills WHERE user_id = ?", [userId], (err) => {
        if (err) throw err;
      });

      // Delete associated projects
      db.query("DELETE FROM projects WHERE user_id = ?", [userId], (err) => {
        if (err) throw err;
      });

      res.redirect("/");
    });
  });
});



  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });