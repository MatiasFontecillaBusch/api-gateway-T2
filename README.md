# API Gateway Vicente Alaracón y Matias Fontecilla

Este proyecto es un **API Gateway** desarrollado en Node.js con Express que centraliza la comunicación entre varios microservicios. Utiliza Docker Compose para levantar el entorno completo, incluyendo bases de datos y colas de mensajes.

---

#### Requisitos
   - [Node.js](https://nodejs.org/) v22+
   - [Docker](https://www.docker.com/) y Docker Compose



### **Componentes del entorno de Docker Compose**:
   - **RabbitMQ**: Para manejo de colas de mensajes (puerto `5672` y consola de administración en `15672`).
   - **PostgreSQL**: Base de datos relacional (puerto `5432`).
   - **MongoDB**: Base de datos NoSQL (puerto `27017`).
   - **SQL Server**: Base de datos adicional para servicios específicos (puerto `1433`).

---

#### Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/MatiasFontecillaBusch/api-gateway-T2.git
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```
3. **Variables de entorno**:
   - Copia el archivo `.env.example` a `.env`:
     ```bash
     cp .env.example .env
     ```
   - Personaliza las variables si es necesario, NODE_ENV debe ser "production".
---
4. **Levantar servicios con Docker Compose**:
   ```bash
   docker-compose up -d
   ```

   Esto levantará los servicios definidos en el archivo `docker-compose.yml`.

5. **Ejecutar el servidor Node.js**:
   ```bash
   npm start
   ```
---

**Notas Importante:**
- El primer servicio que debe ser ejecutado es el de **Users**, sino, el servicio de **Access** no funcionará correctamente.
- Antes de ejecutar este proyecto, asegúrate de que todos los microservicios relacionados (**Access**, **Careers**, **Users**) están funcionando y accesibles en las URLs especificadas en las variables de entorno (`ACCESS_URL`, `CAREERS_URL`, `USERS_URL`). 
- Para ejecutar los flujos y la aplicación desde *Postman* se debe importar las colecciones y entornos que se encuentran en el proyecto.