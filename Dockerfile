# Use Node.js 21 as base image
FROM node:21 AS builder

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Start a new stage for a lighter base image
FROM node:21-alpine

# Set working directory in the container
WORKDIR /app

# Copy only necessary files from the previous stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies
RUN npm install --production

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]

