---
coverY: 0
---

# 🖥 Medication Reminder API

This is a Node.js API for managing medication reminders.

## Getting Started

### Prerequisites

* Node.js (https://nodejs.org/)
* MongoDB (https://www.mongodb.com/try/download/community)
* (Optional) Postman (https://www.postman.com/) to explore the API

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/fasasiisrael/MedicationReminderAPI.git
    ```

2. Change into the project directory and install dependencies:

    ```bash
    cd MedicationReminderAPI
    npm install
    ```

3. Create a `.env` file in the project root with the following content:

    ```dotenv
    DB_CONNECTION=<your MongoDB connection string>
    PORT=3000
    ```

   Alternatively, set environment variables inline:

    ```bash
    DB_CONNECTION="mongodb://localhost:27017/medication-reminder" PORT=3000 npm start
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Run tests:

    ```bash
    npm test
    ```

## Usage

The API will be available at `http://localhost:<PORT>` (default port: 3000).

### Medication Endpoints

- **GET** `/api/medications`  
  Retrieve all medications.

- **GET** `/api/medications/:id`  
  Retrieve a medication by its ID.

- **POST** `/api/medications`  
  Create a new medication.  
  **Request body example:**
  ```json
  {
    "name": "Medication Name",
    "dosage": "10mg",
    "frequency": "Once daily"
  }
  ```

- **PUT** `/api/medications/:id`  
  Update an existing medication by ID.  
  **Request body example:**
  ```json
  {
    "dosage": "20mg"
  }
  ```

- **DELETE** `/api/medications/:id`  
  Delete a medication by its ID.

### User Endpoints

- **GET** `/api/users`  
  Retrieve all users.

- **GET** `/api/users/:id`  
  Retrieve a user by its ID.

- **POST** `/api/users`  
  Create a new user.  
  **Request body example:**
  ```json
  {
    "username": "testuser",
    "email": "testuser@example.com"
  }
  ```

## Environment Variables

- `DB_CONNECTION` (required): MongoDB connection string.
- `PORT` (optional): Server port (default: 3000).

## Scripts

- `npm start` – Start the server.
- `npm test` – Run test suite (Jest & Supertest).
- `npm run lint` – Run ESLint.
- `npm run lint-fix` – Run ESLint with auto-fix.

## Postman Collection

Import `postman/MedicationReminderAPI.postman_collection.json` into Postman to explore all endpoints.

## License

MIT
