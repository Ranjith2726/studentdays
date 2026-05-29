# ====================== Multi-Stage Dockerfile ======================

# Stage 1: Build Frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci --only=production=false

COPY frontend/ ./
RUN npm run build

# Stage 2: Production Backend
FROM node:20-alpine

WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./backend/
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy backend code
COPY backend/ ./backend/

# Copy built frontend from previous stage
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Expose port
EXPOSE 5000

# Environment
ENV NODE_ENV=production

# Start command
CMD ["node", "backend/Server.js"]