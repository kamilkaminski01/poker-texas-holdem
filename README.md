# Poker Texas Hold'em

Poker Texas Hold'em is a multiplayer web app where users
can create, join and play Texas Hold'em. It allows users to
customize the games settings, invite other players and compete
with each other playing poker.

## Resources

The code repository is hosted on
[GitHub](https://github.com/kamilkaminski01/poker-texas-holdem).

WebSockets are handled by the `django-channels` framework.

Channel layers are handled by [Redis](https://redis.io/).

## Running from sources

### Docker Compose setup

```bash
git clone https://github.com/kamilkaminski01/poker-texas-holdem.git
cd poker-texas-holdem/
make build
make run
```

[Docker Compose](https://docs.docker.com/compose/install/) is leveraged
for reproducible builds and consistent local development environments.
The default [`docker-compose.yml`](docker-compose.yml) file is set up
to support local development with code reload and debug mode.

[`Makefile`](Makefile) contains common commands that can be used to
build, run, and test the project. The most important commands include:

- `build`: builds the project with Docker Compose.
- `run`: runs the project with Docker Compose.
- `check`: performs backend static code checks.
- `frontcheck`: performs frontend static code checks.
- `pytest`: runs backend unit tests.
- `pytest_module module={module_name}`: runs backend unit tests in passed module
- `clear`: stops the currently running services and removes the volumes.

When using a local Python environment, [`pre-commit`](https://pre-commit.com/)
is installed and ran on staged files to ensure that the code
quality standards are met.

#### Troubleshooting

In case of errors with typing or missing dependencies, try to rebuild the
Docker images:

```bash
make clear
make recreate
```

If `make` is not supported, the associated Docker Compose commands can be
used directly in order to build and run the project:

```bash
git clone https://github.com/kamilkaminski01/poker-texas-holdem
cd poker-texas-holdem/
docker compose build
docker compose run
```

## Code quality standards

The `master` branch is a stable branch used for releases.

Git branches are named according to the
[Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) methodology.
For example:

```bash
# Branches:
feature/add-user-model
fix/invalid-card-bug

# Commit names:
Add user model
```

### Backend

All backend code is formatted and verified by the `black`, `flake8`,
`mypy` and `isort` tools. Their configurations can be found in the
[.setup.cfg](backend/setup.cfg) file. Additionally, `pre-commit` [checks](.pre-commit-config.yaml)
are performed in order to verify whitespaces, credentials, etc.

Custom functions and methods use **type hints** to improve IDE code
completions, prevent from type errors and extend code documentation.

### Frontend

All frontend code is formatted and verified by the `prettier`
and `eslint` tools.
