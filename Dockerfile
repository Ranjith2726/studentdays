FROM node:20-alpine

WORKDIR /app

# ================== BACKEND SETUP ==================
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --only=production

# ================== FRONTEND SETUP ==================
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm ci

# Copy frontend source and build it
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Copy backend source
COPY backend/ ./backend/

# Expose port
EXPOSE 5000

# Start the backend (which now serves frontend too)
CMD ["npm", "start", "--prefix", "backend"]