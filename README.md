# Proyecto Elex

## Instalación

1. Bajar de Github
git clone https://github.com/ivanteams/elex
2. Importar el proyecto en STS y VSC
3. Instalar la BBDD
Está en src/main/resources/static/elex.mysql
4. Actualizar proyecto: 
   - Botón derecho en elex > Maven > Update project
5. Ejecutar el proyecto
    -  Botón derecho en elex > Ejecutar como > Maven Build > Goals: clean install > [Ejecutar]
6. En el panel (abajo) Boot Dashboard:
   Botón derecho en elex > start
    > OJO: sale un Token
7. Probar en http://localhost:8101/login
    > Anda! Y la contraseña? las credenciales son soltel / admin
8. Está instalado swagger -> http://localhost:8101/swagger-ui/index.html
9. Hay que instalar las dependencias de angular:
```console
    cd elex_angular
    npm install
    npm audit fix
    # En caso de problemas...
    npm audit fix --force

    # Iniciamos el servidor
    ng serve
```
10. Y probamos angular: http://localhost:4200

