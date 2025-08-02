# VeriFact - AI-Powered News Fact-Checking System

A comprehensive fact-checking platform powered by Google Gemini 2.0 Flash AI and vector search technology to combat misinformation.

## 🚀 Live Demo

**Deployment Link:** [https://verifact-188avyplb-nagur-meeras-projects.vercel.app](https://verifact-188avyplb-nagur-meeras-projects.vercel.app)

## 🚀 Quick Start & Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Git
- MongoDB Atlas account
- Redis Cloud account
- API Keys (see Environment Setup below)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rag0233
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create `server/.env` file with your API keys:
   ```env
   # AI & External APIs
   GEMINI_API_KEY=your_gemini_api_key_here
   NEWS_API_KEY=your_news_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here (optional)
   
   # Vector Database (Pinecone)
   PINECONE_API_KEY=your_pinecone_api_key_here
   PINECONE_INDEX_NAME=verifact-factcheck-index
   
   # Database & Cache
   MONGODB_URI=your_mongodb_atlas_connection_string
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   REDIS_USERNAME=your_redis_username
   REDIS_PASSWORD=your_redis_password
   
   # Configuration
   PORT=5000
   NODE_ENV=development
   VECTOR_DATABASE=memory  # Options: pinecone, chroma, memory
   EMBEDDING_MODEL=custom  # Options: openai, huggingface, custom
   
   # Frontend
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the Application**
   
   **Development Mode:**
   ```bash
   # Terminal 1: Start backend server
   cd server
   npm start
   
   # Terminal 2: Start frontend dev server (from root)
   npm run dev
   ```
   
   **Production Mode:**
   ```bash
   # Build and serve production version
   npm run build
   npm run preview
   
   # Or use deployment script
   scripts\deploy.bat production
   ```

5. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Socket.IO: ws://localhost:5000

## 🔑 API Keys Required

### Essential APIs (Required)

1. **Google Gemini API** - For AI fact-checking
   - Visit: https://aistudio.google.com/app/apikey
   - Create API key and add to `GEMINI_API_KEY`

2. **NewsAPI** - For latest news feed
   - Visit: https://newsapi.org/
   - Get free API key and add to `NEWS_API_KEY`

3. **MongoDB Atlas** - For data persistence
   - Visit: https://cloud.mongodb.com/
   - Create cluster and get connection string for `MONGODB_URI`

4. **Redis Cloud** - For caching and analytics
   - Visit: https://redis.com/redis-enterprise-cloud/
   - Create database and get credentials

### Optional APIs

5. **Pinecone** - For production vector search (optional - fallback to memory)
   - Visit: https://www.pinecone.io/
   - Create index with 384 dimensions

6. **OpenAI** - For advanced embeddings (optional - fallback to custom)
   - Visit: https://platform.openai.com/api-keys
   - Get API key for text-embedding-ada-002

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Prepare for deployment:**
   ```bash
   scripts\deploy.bat production
   ```

2. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel --prod
   ```

3. **Configure environment variables in Vercel dashboard**
   - Add all environment variables from `.env` file
   - Set `NODE_ENV=production`

### Manual Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy built files to your hosting provider**

3. **Ensure all environment variables are configured in production**

## 📊 Core Features

- **Real-time Fact Checking** - Verify claims using advanced AI analysis
- **News Monitoring** - Latest news with credibility scores
- **Vector Search** - RAG-powered similarity search
- **Analytics Dashboard** - Real-time system statistics and trending topics
- **Source Credibility** - Automated source reliability assessment
- **Responsive Design** - Modern Material-UI interface

## 🧪 Testing the System

### Quick Health Check
```bash
# Test backend health
curl http://localhost:5000/api/health

# Test fact-checking
curl -X POST http://localhost:5000/api/fact-check \
  -H "Content-Type: application/json" \
  -d '{"claim": "The sky is blue"}'

# Test analytics
curl http://localhost:5000/api/news/activity
```

## 🔍 Troubleshooting

### Common Issues

1. **Vector Dimension Mismatch**
   - Solution: Set `VECTOR_DATABASE=memory` for development

2. **API Rate Limits**
   - Solution: Check API key quotas and usage limits

3. **Memory Issues**
   - Solution: Use external vector database (Pinecone/Chroma)

### Environment Variables Checklist

- ✅ `GEMINI_API_KEY` - Required for fact-checking
- ✅ `NEWS_API_KEY` - Required for news feed
- ✅ `MONGODB_URI` - Required for data persistence
- ✅ `REDIS_HOST/PORT/PASSWORD` - Required for caching
- ⚠️ `PINECONE_API_KEY` - Optional, fallback to memory storage
- ⚠️ `OPENAI_API_KEY` - Optional, fallback to custom embeddings

## 📄 Project Structure
```
rag0233/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── services/          # API services
│   └── main.jsx           # App entry point
├── server/                # Backend Node.js application
│   ├── controllers/       # API controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic services
│   └── index.js          # Server entry point
├── scripts/              # Deployment scripts
└── package.json          # Frontend dependencies
```

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section above
2. Review API endpoint documentation in project_description.md
3. Verify environment variable configuration
4. Check server logs for detailed error messages

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using React, Node.js, and Google Gemini AI**
