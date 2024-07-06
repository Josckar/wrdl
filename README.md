# Wrdl

<!-- [![Run Pytest](https://github.com/software-students-spring2024/5-final-project-spring-2024-snailman-inc/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/software-students-spring2024/5-final-project-spring-2024-snailman-inc/actions/workflows/unit-tests.yml)

[![Server Test](https://github.com/software-students-spring2024/5-final-project-spring-2024-snailman-inc/actions/workflows/test-server.yml/badge.svg)](https://github.com/software-students-spring2024/5-final-project-spring-2024-snailman-inc/actions/workflows/test-server.yml) -->

A personal clone of a class exercise in software development teamwork, subsystem communication, containers, deployment, and CI/CD pipelines. See [original project](https://github.com/software-students-spring2024/5-final-project-spring-2024-snailman-inc?tab=readme-ov-file) for the original iteration.

This version migrates the html to an angular frontend, and makes a docker composition with the backend, database, and (TBA) frontend.

## About the Game

**wrdl**: A deceptively difficult word game. 16 letters are given, from which the player must recreate 4 words of length 4. Add friends and compare the number of boards you've won.

### Running the Server

To run the server on port 5000:

```
docker compose up 
```

### [Pytest](https://docs.pytest.org/en/stable/)

In [/flask-backend](./flask-backend): to run tests using pytest, build the dockerfile with:
```bash
docker build -t test-image -f PytestDockerfile .
```
`MONGO_URI` and `MONGO_DB` environment variables must be specified. If using a `.env` file created in the root directory, you can run the following command to test the server:
```bash
docker run --env-file .env test-image
```
## Contributors

* [Josckar Palomeque-Elias](https://github.com/josckar)

### Additional Original Contributors

* [Corina Luca](https://github.com/CorinaLucaFocsan)
* [Jakob Hablitz](https://github.com/jsh9965)
* [Stella Zhang](https://github.com/qq3173732005)
