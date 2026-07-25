FROM node:18-alpine

WORKDIR /usr/src/app

# Install dependencies (use package-lock if present)
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --production

# Copy app source
COPY . .

ENV NODE_ENV=production
EXPOSE 5000

CMD ["node", "server.js"]
