# Use Node.js as the base image for building
FROM node:16.14.2 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Use Nginx as the base image for serving the Angular app
FROM nginx:alpine

# Copy built files from builder stage to Nginx
COPY --from=builder /app/dist/WebApp-Compiler /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
