# Use official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the service code
COPY . .

# Expose the port auth-service listens on
EXPOSE 4001

# Start the service
CMD ["npm", "start"]
