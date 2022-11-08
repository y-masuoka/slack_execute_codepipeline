FROM python:3.6

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

RUN apt-get update -y && apt-get upgrade -y \
        && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
        && apt-get install -y nodejs \
        && pip install awscli \
        && npm install -g serverless \
        && sls config credentials --provider aws --key $AWS_ACCESS_KEY_ID --secret $AWS_SECRET_ACCESS_KEY
