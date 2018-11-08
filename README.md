# testCalc
Tests for testCalc Ataccama (test task)
=============================

INIT UI TESTS
------------

- deploy testCalc.war into Apache Tomcat [*warning*: don't use Java 10] to 'deployed_application_url'
- clone project from repository `git clone https://github.com/azdiana/testCalc.git`
- navigate into project `cd testCalc`
- in terminal, type: `npm install cypress`
- update baserl in `cypress.json` to  'deployed_application_url'
- in terminal, type: `.\node_modules\.bin\cypress open`
- `Run all specs`
![Run tests in cypress](https://raw.githubusercontent.com/azdiana/testCalc.git/images/run_tests_in_cypress.png)

IMPORT REST API TESTS
------------

- open Postman
- import collection from `testCalc/api_test/testCalc.postman_collection.json`
![Import collection](https://raw.githubusercontent.com/azdiana/testCalc.git/images/import_postman_collection.png)
- run Postman collection
![Run collection](https://raw.githubusercontent.com/azdiana/testCalc.git/images/run_postman_collection.png)