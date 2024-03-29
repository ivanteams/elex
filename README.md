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

## Modelo BBDD

- Empleando Mermaid
  - https://mermaid.js.org/intro/

```mermaid
erDiagram
    TIPOS_EXPEDIENTE ||--o{ EXPEDIENTES : "tiene"
    TIPOS_EXPEDIENTE {
        TINYINT id PK "Clave primaria"
        VARCHAR(20) materia "Materia única"
    }
    EXPEDIENTES ||--o{ ACTUACIONES : "contiene"
    EXPEDIENTES ||--o{ DOCUMENTOS : "contiene"
    EXPEDIENTES {
        INT id PK "Clave primaria"
        VARCHAR(50) codigo "Código único"
        DATE fecha "Fecha de creación"
        ENUM estado "Pendiente / Enviado / Erróneo"
        VARCHAR(70) opciones "Opciones del expediente"
        VARCHAR(255) descripcion "Descripción del expediente"
        TINYINT tipo FK "Tipo de expediente"
    }
    ACTUACIONES {
        INT id PK "Clave primaria"
        VARCHAR(255) descripcion "Descripción de la actuación"
        BOOLEAN finalizado "Estado de finalización"
        DATE fecha "Fecha de la actuación"
        INT expediente FK "Expediente relacionado"
    }
    DOCUMENTOS {
        INT id PK "Clave primaria"
        VARCHAR(255) ruta "Ruta del documento"
        DECIMAL(6,2) tasa "Tasa asociada"
        INT expediente FK "Expediente relacionado"
    }
```