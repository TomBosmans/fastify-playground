start:
	docker-compose up -d

stop:
	docker-compose stop

restart:
	docker-compose restart $(service)

log:
	docker-compose logs -f $(service)

build:
	docker-compose build

shell:
	docker-compose run --rm --no-deps $(service) sh

psql:
	docker-compose exec postgres sh -c "su - postgres -c 'psql $(db)'"
