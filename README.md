<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## 🍹 Aplicación de Cocktails

Una aplicación para gestionar y descubrir deliciosas recetas de cocktails.

## 🚀 Instalación

```bash
$ npm install
```

## 🏃‍♂️ Ejecución

```bash
# desarrollo
$ npm run start

# modo desarrollo con recarga automática
$ npm run start:dev

# modo producción
$ npm run start:prod
```

## 🧪 Pruebas

```bash
# pruebas unitarias
$ npm run test

# pruebas e2e
$ npm run test:e2e

# cobertura de pruebas
$ npm run test:cov
```

## 🗄️ Base de Datos

El proyecto utiliza PostgreSQL como base de datos principal. La configuración se realiza a través de variables de entorno:

### 📋 Configuración de la Conexión

```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  autoLoadEntities: true,
  synchronize: true,
})
```

### 🐳 Docker Compose

El proyecto incluye un archivo `docker-compose.yaml` para facilitar la configuración de la base de datos:

```yaml
version: '3'
services:
  db:
    image: postgres:14.3
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    container_name: cocktailssb
    volumes:
      - ../postgres_data_cocktailssb:/var/lib/postgresql/data
```

Para iniciar la base de datos, ejecuta:

```bash
$ docker-compose up -d
```

## 📝 Variables de Entorno Requeridas

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cocktails
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña
```

## 🛠️ Tecnologías

- [NestJS](https://nestjs.com/) - Framework de Node.js
- [TypeORM](https://typeorm.io/) - ORM para TypeScript y JavaScript
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional
- [Docker](https://www.docker.com/) - Contenedorización

## 📡 API Endpoints

La API está disponible bajo el prefijo `/api`. Todos los endpoints devuelven respuestas en formato JSON.

### 🍹 Cocktails

- `GET /api/cocktails` - Obtener todos los cocktails
- `GET /api/cocktails/:id` - Obtener un cocktail por ID
- `POST /api/cocktails` - Crear un nuevo cocktail
- `PATCH /api/cocktails/:id` - Actualizar un cocktail existente
- `DELETE /api/cocktails/:id` - Eliminar un cocktail

### 🥃 Distillates & Spirits

- `GET /api/distillates-spirits` - Obtener todos los destilados y espirituosos
- `GET /api/distillates-spirits/:id` - Obtener un destilado/espirituoso por ID
- `POST /api/distillates-spirits` - Crear un nuevo destilado/espirituoso
- `PATCH /api/distillates-spirits/:id` - Actualizar un destilado/espirituoso existente
- `DELETE /api/distillates-spirits/:id` - Eliminar un destilado/espirituoso

### 🥄 Equipments

- `GET /api/equipments` - Obtener todos los equipamientos
- `GET /api/equipments/:id` - Obtener un equipamiento por ID
- `POST /api/equipments` - Crear un nuevo equipamiento
- `PATCH /api/equipments/:id` - Actualizar un equipamiento existente
- `DELETE /api/equipments/:id` - Eliminar un equipamiento

### 🍸 Glassware

- `GET /api/glassware` - Obtener todos los tipos de vasos
- `GET /api/glassware/:id` - Obtener un tipo de vaso por ID
- `POST /api/glassware` - Crear un nuevo tipo de vaso
- `PATCH /api/glassware/:id` - Actualizar un tipo de vaso existente
- `DELETE /api/glassware/:id` - Eliminar un tipo de vaso

### 🧊 Ice Types

- `GET /api/ice-types` - Obtener todos los tipos de hielo
- `GET /api/ice-types/:id` - Obtener un tipo de hielo por ID
- `POST /api/ice-types` - Crear un nuevo tipo de hielo
- `PATCH /api/ice-types/:id` - Actualizar un tipo de hielo existente
- `DELETE /api/ice-types/:id` - Eliminar un tipo de hielo

### 🍒 Garnish Types

- `GET /api/garnish-types` - Obtener todos los tipos de guarniciones
- `GET /api/garnish-types/:id` - Obtener un tipo de guarnición por ID
- `POST /api/garnish-types` - Crear un nuevo tipo de guarnición
- `PATCH /api/garnish-types/:id` - Actualizar un tipo de guarnición existente
- `DELETE /api/garnish-types/:id` - Eliminar un tipo de guarnición

### 🥤 Mixing Methods

- `GET /api/mixing-methods` - Obtener todos los métodos de mezcla
- `GET /api/mixing-methods/:id` - Obtener un método de mezcla por ID
- `POST /api/mixing-methods` - Crear un nuevo método de mezcla
- `PATCH /api/mixing-methods/:id` - Actualizar un método de mezcla existente
- `DELETE /api/mixing-methods/:id` - Eliminar un método de mezcla

### 🌱 Seed Data

- `POST /api/common/seed` - Cargar datos iniciales en la base de datos
  - Este endpoint carga datos predefinidos para todas las entidades del sistema
  - Útil para inicializar la base de datos con datos de ejemplo
  - Solo debe ejecutarse el metodo post con el la tabla en el body

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).

