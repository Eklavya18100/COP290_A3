# COP290_A3
Assignment 3 COP290 - proVis Website code

This is the guideline for software development,
operations and system administration

## Runtime Setup

### Install all npm packages

1. Install NPM into your machine.

2. To install yarn, type ```npm install -global yarn```

3. Type ```yarn``` command to install all packages. After that, you should see your node_modules folder containing all third party packages

### Running server

1. To start your server in local machine, type:
>yarn start


2. Type ```localhost:5000``` into your browser. <br><br>
   A ```Hello world``` message indicates it succeeds

-----

### Appendix

Please refer to (https://github.com/ssgl-dev/security) for the guidelines of handling secret files

#### Secret files

| decrypted_name | encrypted_name |  path | description                 |
|:----------|:---------------|:--------------------|:----------------------------|
| .env     | .env.aes  | .              | Server environment variable |
