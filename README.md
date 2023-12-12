# Exercise API

## Overview

The exercise API provides information about exercises, body parts, and targets. Users can retrieve details about specific exercises, explore different body parts, and identify targeted muscle groups.

## Features

-   **Exercise Retrieval:** Retrieve information about specific exercises.
-   **Body Parts:** Explore information about different body parts.
-   **Targets:** Identify muscle groups targeted by exercises.
-   **Exercise Name:** Search for exercises based on partial or exact matches of exercise names.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/cybermaxi7/exercise-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd exercise-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

Start the JSON Server with the following command:

```bash
npm start
```

This will launch the API server, and you can then make requests to the available endpoints.

## API Endpoints

-   **Retrieve Exercise by ID:**

    ```
    GET /exercises/:id
    ```

-   **Search for Exercises:**

    ```
    GET /exercises?name=:searchTerm
    ```

-   **Retrieve Body Parts:**

    ```
    GET /bodyParts
    ```

-   **Retrieve Targets:**
    ```
    GET /targets
    ```

## Examples

### Retrieve Exercise by ID

```bash
curl http://localhost:3000/exercises/1
```

### Search for Exercises

```bash
curl http://localhost:3000/exercises?name=push
```

## Contributing

If you would like to contribute to this project, please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact Cybermaxi at maximusagbe@gmail.com



Feel free to use and modify this template as needed for your project.

