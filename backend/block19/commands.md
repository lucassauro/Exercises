# Used commands

## Exercise 1
touch some.html

echo "<html><head><title>Lucas</title></head><body><h1>Something</h1><p>Something else</p></body></html>" | cat >> some.html

docker container run -v "/home/ltx/Testes/exercicios_docker/:/usr/local/apache2/htdocs/" -p 4545:80 --name exercise -d httpd:2.4

nano missao_trybe.html # to edit
cat missao_trybe.html

docker ps -l

docker inspect exercise

docker container stop exercise

docker container rm exercise

docker image rm ad17

## Exercise 2
echo "
version: '3'
services:
	ghost:
		image: ghost:1-alpine
		ports:
			- 2368:3268" | cat >> docker-compose.yaml

docker-compose up

## Exercise 3, 4
docker-compose up


## Exercise 5
npx create-react-app exercise5

docker-compose up --build