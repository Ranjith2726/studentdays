FROM node:20-alpine

WORKDIR /app

# ================== BACKEND SETUP ==================
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --only=production

# ================== FRONTEND SETUP ==================
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install   # ← Changed from npm ci

# Copy frontend source and build it
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Copy backend source
COPY backend/ ./backend/

EXPOSE 5000

CMD ["npm", "start", "--prefix", "backend"]