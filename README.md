## Before run test

- cd/full-stack/
- run either backend framework ( php laravel or nest.js ) and the frontend ( react ) // read me included

## Run test

- npm install 
- npx cypress run or npx cypress open (UI)

## Configuration

- any changes in port, should configure cypress.config.js

- if run into err with frontend port failure, try to run with "yarn dev --host" (in the frontend root directory) then copy the network address to cypress.config.js baseUrl
