# Use an official Node runtime as the base image
FROM node:20.10.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install any needed packages specified in package.json
RUN yarn install

# Bundle the app source inside the Docker image
COPY . .

# Make port 5000 available to the outside world
EXPOSE 5000

# Run the app when the container launches
CMD ["yarn", "dev"]