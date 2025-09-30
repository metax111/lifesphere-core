# Use official Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all service source code
COPY . .

# Expose the port notification-service listens on
EXPOSE 4006

# Start the service
CMD ["npm", "start"]
