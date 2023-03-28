# COP290_A3
Assignment 3 COP290 - proVis Website code

proVis
A website to make the process of house construction(interior design, furniture etc) contracting frictionless and reliable.

Team Members-
Eklavya Agarwal - 2022VST9017
Mihir Kaskhedikar - 2021CS10551
Aaveg Jain - 2021CS10073
Tejas Anand - 2021CS50595.

Detailed Description:

Once the user has contacted the company and scheduled a consultation, the app could send reminders or notifications to ensure that both parties are on the same page and that the meeting is not missed. The app could also provide users with tips and advice on how to prepare for the consultation, such as what questions to ask and what information to bring.

After the consultation, the user may decide to move forward with the company and hire them for their construction project. At this point, the app could provide users with tools and resources to help them manage the project, such as a project management dashboard or budget tracker. The app could also facilitate payments and invoicing to make the payment process more streamlined and convenient.

After a user schedules a consultation with a construction company through your app, the company will typically reach out to confirm the meeting details and provide any additional information or instructions. During the consultation, the company will likely ask the user about their construction project, discuss their needs and preferences, and provide recommendations on how to proceed.

Depending on the type and scope of the project, the consultation may also include a site visit, where the company representative can inspect the property and assess the work that needs to be done. This will allow the company to provide a more accurate estimate of the cost and timeline for the project.

After the consultation, the construction company will typically prepare a proposal or estimate that outlines the scope of the work, the cost, and the timeline for completion. The user can then review the proposal and decide whether or not to move forward with the company.

If the user decides to hire the company, they will typically sign a contract that outlines the terms of the agreement, including the scope of the work, the cost, the payment schedule, and the timeline for completion. The app could facilitate this process by providing users with templates for contracts or by allowing them to sign contracts electronically.

Throughout the construction process, the user and the construction company will likely communicate frequently to ensure that the project is progressing smoothly and to address any issues or concerns that arise. The app could provide tools and resources to facilitate this communication, such as a messaging system or a project management dashboard. Additionally, the app could provide users with tips and advice on how to manage the project effectively, such as how to deal with unexpected delays or how to handle change orders.

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
