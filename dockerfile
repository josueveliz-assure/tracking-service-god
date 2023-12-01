# Use Node.js as base image
FROM node:alpine

# Set working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npx tsc

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]