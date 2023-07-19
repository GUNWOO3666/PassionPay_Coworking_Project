FROM python:3.9-alpine

WORKDIR /app/WebClock_docker_toy

COPY . .

RUN pip install --upgrade pip

RUN pip install fastapi==0.95.1

RUN pip install uvicorn==0.21.1

RUN pip install jinja2==3.1.2

RUN chmod +x entrypoint.sh

EXPOSE 8080

ENTRYPOINT [ "sh", "-c", "./entrypoint.sh & tail -f /dev/null" ]