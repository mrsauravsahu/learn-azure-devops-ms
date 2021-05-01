FROM node:14 As development

ARG SERVICE_NAME

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build ${SERVICE_NAME}

FROM node:14-alpine as production

ARG SERVICE_NAME
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}
ENV SERVICE_NAME=${SERVICE_NAME}

WORKDIR /app

COPY package*.json ./

RUN npm install --prod

COPY --from=development /app/dist ./dist

EXPOSE 80

CMD node dist/apps/$SERVICE_NAME/main