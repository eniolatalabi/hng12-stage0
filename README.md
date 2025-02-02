HNG12 Stage 0 - Public API

Overview

This repository contains a simple public API for the HNG12 Stage 0 Backend Task. The API provides the following information in JSON format:

The registered email used for HNG12.

The current datetime in ISO 8601 format.

The GitHub repository URL of this project.

Technology Stack

Language/Framework: JavaScript (Node.js + Express)

Hosting: Vercel

Dependencies: Express, CORS

Project Setup (Run Locally)

Clone the Repository

git clone https://github.com/eniolatalabi/hng12-stage0
cd hng12-stage0

Install Dependencies

npm install

Start the API

npm start

The API will be accessible at http://localhost:3000.

API Documentation

Endpoint: GET /

Response:

{
  "email": "eniola.talabi@aol.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/eniolatalabi/hng12-stage0"
}

Deployment Details

This API was deployed using GitHub and Vercel.

The code was pushed to a public GitHub repository: HNG12 Stage 0 API.

The repository was linked to Vercel for seamless deployment.

Vercel automatically detected the repository and configured the build settings.

The deployment was completed successfully, making the API publicly accessible.

Any further code updates pushed to the main branch trigger automatic redeployment on Vercel.




Author: Eniola 
TalabiGitHub: eniolatalabi

