# Use official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all gateway source code
COPY . .

# Expose the internal port the gateway listens on
EXPOSE 4000

# Start the gateway
CMD ["npm", "start"]
