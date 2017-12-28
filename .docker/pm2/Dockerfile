FROM keymetrics/pm2-docker-alpine:latest

ARG ENV

EXPOSE 3000

CMD ["pm2-docker", "start", "app.json", "-i", "max"]