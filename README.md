# testCalc
Tests for testCalc Ataccama (test task)
=============================

START UI TESTS
------------

- deploy testCalc.war into Apache Tomcat [*warning*: don't use Java 10] to 'deployed_application_url'
- clone project from repository `git clone https://github.com/azdiana/testCalc.git`
- navigate into project `cd testCalc`
- in terminal, type: `npm install cypress`
- update baserl in `cypress.json` to  'deployed_application_url'
- in terminal, type: `.\node_modules\.bin\cypress open`
- `Run all specs`
![Run tests in cypress](https://github.com/azdiana/testCalc/blob/master/images/run_tests_in_cypress.png)

IMPORT REST API TESTS
------------

- open Postman
- import collection from `testCalc/api_test/testCalc.postman_collection.json`
![Import collection](https://github.com/azdiana/testCalc/blob/master/images/import_postman_collection.png)
- run Postman collection
![Run collection](https://github.com/azdiana/testCalc/blob/master/images/run_postman_collection.png)

[Video with collection run](https://www.dropbox.com/s/8i421fdadldvrg0/postman_tests.mp4?dl=0)


**Bugs description** is added [here](https://github.com/azdiana/testCalc/blob/master/bugs/bugs.md).