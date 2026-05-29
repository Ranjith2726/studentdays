# ====================== Dockerfile ======================

# Use Node.js official image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install backend dependencies
RUN npm ci --only=production

# Copy backend code
COPY backend/ ./backend/

# Copy frontend code
COPY frontend/ ./frontend/

# Build the frontend
RUN cd frontend && npm ci && npm run build

# Expose port
EXPOSE 5000

# Set environment
ENV NODE_ENV=production

# Start the backend
CMD ["node", "backend/Server.js"]