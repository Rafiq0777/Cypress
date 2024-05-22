**Tracking OwL Cypress**

# Pre-requisite

User should have node.js installed and latest version of vscode installed


## Setup
Open the downloaded project in VSCode

And run the following command to install dependencies 

```bash
npm install 
```
    
## Test Execution 

To run tests in headless mode, run the following command

```bash
  npx cypress run
```

To run tests in headed mode, run the following command

```bash
  npx cypress open
```
This will open the the cypress test runner.
## Environment Variables

To run this project, you will need to add the following environment variables to your cypress.json

`"baseUrl": "https://staging-panel.towl.ai/"`
