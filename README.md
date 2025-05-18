AI Blog Summarizer
AI Blog Summarizer is a full-stack web application that leverages AI to generate concise summaries of blog articles. Built with a modern tech stack, it streamlines the process of digesting lengthy content.

# 🚀 Features
AI-Powered Summarization: Utilizes advanced AI models to produce coherent summaries.

History Tracking: Maintains a record of previously summarized articles.

Responsive Design: Ensures optimal viewing across devices.

# 🛠️ Tech Stack
**Frontend**: React, Tailwind CSS

**Backend**: Node.js, Express

**Database**: PostgreSQL

**AI Integration**: OpenAI

# 📦 Installation
## Clone the repository:
```bash
git clone https://github.com/fujiblaze/ai-blog-summarizer.git
cd ai-blog-summarizer
```

## Install dependencies:
```bash
npm install
```
## Set up environment variables:

Create a .env files in directories like this:
## Frontend:
```env
VITE_API_URL=http://localhost:5000/api
VITE_ENV=env_name_here
```

## Backend:
```env
PORT=express_port
DB_HOST=database_hostname
DB_PORT=database_port
DB_USER=database_user
DB_PASSWORD=databse_password
DB_NAME=database_name
OPENAI_API_KEY=openai_api_key_here
DATABASE_URL=database_url_here
JWT_SECRET=jwt_secret_key_here
```

Start the development server:
```bash
npm run dev
```
The application will be accessible at **http://localhost:3000**

# 📁 Project Structure
```bash
ai-blog-summarizer/
├── client/            # React frontend
├── server/            # Express backend
├── db/                # Database configuration
├── .vscode/           # VSCode settings
├── package.json       # Project metadata and scripts
└── README.md          # Project documentation
```
