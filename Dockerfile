FROM node:20-alpine

WORKDIR /app

# Backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --only=production

# Frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy all source
COPY frontend/ ./frontend/
COPY backend/ ./backend/

# Build frontend AFTER all source is copied
RUN cd frontend && npm run build

EXPOSE 5000

CMD ["node", "backend/Server.js"]