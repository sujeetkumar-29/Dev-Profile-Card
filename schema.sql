CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    imageUrl TEXT,
    name VARCHAR(100),
    title VARCHAR(100),
    bio TEXT,
    password VARCHAR(255),
    portfolioLink TEXT,
    githubLink TEXT,
    linkedinLink TEXT,
    instaLink TEXT,
    xLink TEXT
);
CREATE TABLE projects (
    id INT AUTO_INCREMENT  PRIMARY KEY,
    user_id VARCHAR(36),
    projectName VARCHAR(255),
    projectLink TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36),
    skill VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

