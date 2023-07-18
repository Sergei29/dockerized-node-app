# 1. Docker image to use as a base ( find on Docker hub )
FROM node:18-alpine

# 2. Copy local files necessary for installation, into Image file system
COPY ./ ./

# 3. Install dependencies
RUN npm install

# 4. Tell image what to do when strart up as a container
CMD [ "npm", "start" ]