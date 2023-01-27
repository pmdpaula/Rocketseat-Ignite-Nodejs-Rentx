# Docker com Dockerfile

## Criação da imagem lendo o arquivo Dockerfile

```
docker build -t rentx .
```

## Execução do docker

```
docker run -p 3333:3333 rentx
```

## Ver o container rodando

```
docker ps
```

Saída:
```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                    NAMES
83510611706b   rentx     "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   0.0.0.0:3333->3333/tcp   hungry_spence
```


## Acessar o container após subí-lo

```
docker exec -it hungry_spence /bin/bash
```
hungry_spence -> é o nome que o decker deu para container.
/bin/bash -> é o que iremos executar


# Docker com docker-compose

## Execução do docker

```
docker-compose up -d
```
:arrow_right:	Iniciar o projeto com o comando acima.

## Ver a saída do servidor (console.log)
```
docker logs -f rentx
```
