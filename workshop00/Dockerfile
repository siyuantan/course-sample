FROM node:16.13-alpine
# Create directory app
ARG APP_DIR=/app
# set directory to APP_DIR
WORKDIR ${APP_DIR}

ADD app.js .
ADD package.json .
ADD package-lock.json .

# frontend directory
ADD frontend frontend

# install npm dependencies
RUN npm ci

# run application
ENV PORT=3000
EXPOSE ${PORT}

ENTRYPOINT ["node", "app.js"]
