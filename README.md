# API del juego FIFA 21 Ultimate Team

Para iniciar la aplicación con docker:


    docker-compose build
	docker-compose up

Para iniciar la aplicación mediante npm:


    npm run server

### End Points 
#### Post


    /api/v1/team
Se debe realizar un post pasando los valores de "Name" y "Page"

#### Get


    /api/v1/players
    
Se pueden utilizar las queries para realizar la busqueda de un jugador, ordenar ascendende o descendentemente y cambia de página


     /api/v1/players?search=cris&order=asc&page=1
	 
Para modificar el orden se puede ingresar "asc" o "desc" para cambiarlo ascendente o descendentemente respectivamente. Por default va a ser ascedentemente.

**Nota:** Las variables de entorno han sido incluidas en el repositorio para facilitar la ejecución de la API.
