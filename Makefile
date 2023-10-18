.PHONY: build run recreate superuser check frontcheck lint pytest migrations migrate clear

build:
	docker compose build

run:
	docker compose up

recreate:
	docker compose up --build --force-recreate

superuser:
	docker compose run --rm web python manage.py createsuperuser

check:
	docker compose run --rm web isort --check-only .
	docker compose run --rm web black --check .
	docker compose run --rm web flake8 .
	docker compose run --rm web mypy .

frontcheck:
	docker compose run --rm -T frontend npm run check

lint:
	docker compose run --rm -T web isort .
	docker compose run --rm -T web black .
	docker compose run --rm -T web flake8 .
	docker compose run --rm -T web mypy .

pytest:
	docker compose run --rm web pytest

pytest_module:
	docker compose run --rm web pytest $(module)/

migrations:
	docker compose run --rm web python manage.py makemigrations

migrate:
	docker compose run --rm web python manage.py migrate

clear:
	docker compose down -v
	docker system prune --force
	docker volume prune --force
