# Stage 1: Build the React TypeScript Vite project
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire project to the container
COPY . .

# Build the project
RUN yarn build

# Stage 2: Create a production-ready image with only the built files
FROM nginx:alpine

# Set the working directory to Nginx's web root
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built files from the previous stage
COPY --from=build /app/dist .

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx and serve the application
CMD ["nginx", "-g", "daemon off;"]
