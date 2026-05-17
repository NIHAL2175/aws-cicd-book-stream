# AWS CI/CD Book Stream

A cloud-integrated full-stack web application deployed using a complete CI/CD pipeline on AWS. This project demonstrates automated build, deployment, scaling and continuous integration practices using AWS DevOps services such as CodePipeline, CodeBuild, CodeDeploy, Elastic Beanstalk, IAM and S3.

---

# Project Overview

AWS CI/CD Book Stream is a scalable web application designed to demonstrate:

- Full-stack web application deployment
- Continuous Integration and Continuous Deployment (CI/CD)
- Cloud-native deployment using AWS services
- Automated build and deployment workflows
- Infrastructure scalability and service integration
- Database management using DBeaver with Amazon RDS

---

# Technologies Used

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MySQL
- Amazon RDS
- DBeaver (used for database management and SQL operations)

## AWS Services
- AWS CodePipeline
- AWS CodeBuild
- AWS CodeDeploy
- AWS Elastic Beanstalk
- Amazon S3
- AWS IAM
- Amazon RDS

## Other Tools
- Git
- GitHub
- NPM

---

# AWS Services Used

## AWS CodePipeline
Used to automate the complete CI/CD workflow.

### Responsibilities
- Connects GitHub repository
- Triggers automatic builds
- Automates deployment workflow
- Integrates CodeBuild and Elastic Beanstalk

---

## AWS CodeBuild
Used for automated application build processing.

### Responsibilities
- Installs dependencies
- Executes build commands
- Generates deployment artifacts
- Uses buildspec.yaml

---

## AWS CodeDeploy
Used for deployment automation and release management.

### Responsibilities
- Handles deployment stages
- Deploys updated application versions
- Supports automated delivery workflow

---

## AWS Elastic Beanstalk
Used for application hosting and scaling.

### Responsibilities
- Deploys web application
- Manages application environment
- Handles load balancing and scaling
- Simplifies infrastructure management

---

## Amazon S3
Used for artifact and deployment storage.

### Responsibilities
- Stores pipeline artifacts
- Maintains deployment packages
- Supports CI/CD workflow storage

---

## AWS IAM
Used for secure access and permission management.

### Responsibilities
- Provides service roles
- Secures AWS resource communication
- Controls access between AWS services

---

## Amazon RDS
Used for managed relational database hosting.

### Responsibilities
- Stores application data
- Provides scalable MySQL database
- Ensures cloud database availability

---

## DBeaver
Used as the database administration and management tool.

### Responsibilities
- Connects with Amazon RDS
- Executes SQL queries
- Manages database tables
- Performs database operations and monitoring

---

# CI/CD Pipeline Workflow

```text
GitHub Repository
        ↓
AWS CodePipeline
        ↓
AWS CodeBuild
        ↓
Build Artifacts stored in S3
        ↓
AWS CodeDeploy
        ↓
AWS Elastic Beanstalk
        ↓
Live Application Deployment
```

---

# Project Architecture

The project follows a cloud-based multi-tier architecture.

## Presentation Layer
- React.js frontend
- User interface and interaction

## Application Layer
- Node.js + Express.js backend
- Business logic and APIs

## Data Layer
- MySQL database hosted in Amazon RDS
- Database managed using DBeaver

---

# Features

- User-friendly interface
- Book management system
- Cloud deployment using AWS
- Automated CI/CD pipeline
- Secure IAM role integration
- Scalable deployment architecture
- Automated build and deployment
- Full-stack application structure
- Centralized cloud database
- Artifact management using S3
- Database management using DBeaver

---

# Folder Structure

```text
aws-cicd-book-stream/
│
├── configs/
├── controllers/
├── frontend/
├── routes/
├── node_modules/
│
├── app.js
├── server.js
├── buildspec.yaml
├── db.sql
├── sanitize_ids.sql
├── package.json
├── package-lock.json
└── README.md
```

---

# Build Specification

The project uses a buildspec.yaml file for AWS CodeBuild automation.

### Responsibilities
- Install dependencies
- Build application
- Generate deployment artifacts
- Prepare deployment package

---

# Installation and Setup

## Clone Repository

```bash
git clone <your-github-repository-url>
```

---

## Install Backend Dependencies

```bash
npm install
```

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## Configure Database

Import the SQL file:

```bash
db.sql
```

Use DBeaver to:
- Connect with Amazon RDS
- Execute SQL queries
- Manage database tables and records

Configure database credentials in the application configuration files.

---

## Run Backend

```bash
node server.js
```

---

## Run Frontend

```bash
npm start
```

---

# Deployment Process

The deployment process is fully automated using AWS services.

## Deployment Flow

1. Developer pushes code to GitHub
2. CodePipeline detects changes
3. CodeBuild starts automated build
4. Build artifacts are stored in S3
5. CodeDeploy triggers deployment
6. Elastic Beanstalk updates application
7. Application becomes live automatically

---

# Scalability

The project supports cloud scalability using Elastic Beanstalk features:

- Auto Scaling
- Managed Deployment
- Load Balancing
- Environment Management
- Cloud Monitoring

---

# Security

Security is managed using AWS IAM roles and permissions.

### Security Features
- IAM role-based access
- Secure AWS service communication
- Controlled deployment permissions
- Managed cloud access

---

# Conclusion

AWS CI/CD Book Stream demonstrates a complete cloud-integrated DevOps workflow using AWS services. The project successfully automates application build, deployment and scaling processes using a modern CI/CD pipeline architecture.

It provides hands-on experience with cloud deployment, automated workflows, scalable infrastructure management and database administration using DBeaver with Amazon RDS.
