
---

# Todo Application

This is a simple Todo application built using React, Redux, TypeScript, and Chakra UI, with Vite as the build tool. The application allows users to fetch a list of todos from an external API, add new todos, delete existing todos, and edit the task name and status of the todos.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API](#api)
- [Deployed Application](#deployed-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch a list of todos from the JSONPlaceholder API.
- Display todos in the UI with their title and completion status.
- Add new todos.
- Delete existing todos.
- Edit the task name and status of todos.
- Stylish scrollbar using Chakra UI.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/shailendra7518/todo-app-new.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

## Usage

### Running the Application

After starting the development server, you can use the application in your browser. The main features include:

- **Fetching Todos**: The application automatically fetches the todos from the JSONPlaceholder API and displays them.
- **Adding a Todo**: Use the input field and button to add a new todo. The first letter of the task name will be capitalized automatically.
- **Deleting a Todo**: Click the delete button next to a todo item to remove it.
- **Editing a Todo**: Click the edit button next to a todo item to open a modal where you can edit the task name and status.

### Folder Structure

Here is the folder structure of the project:

```
todo-app/
│
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx
│   │   ├── EditTodoModal.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   │
│   ├── hooks/
│   │   └── useActions.ts
│   │
│   ├── services/
│   │   └── api.ts
│   │
│   ├── state/
│   │   ├── store.ts
│   │   ├── todosSlice.ts
│   │   └── types/
│   │       └── todo.ts
│   │
│   ├── utils/
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── vite.config.ts
├── package.json
└── README.md
```

### API

The application interacts with the JSONPlaceholder API to fetch, add, delete, and update todos.

- **Fetch Todos**: `GET https://jsonplaceholder.typicode.com/todos`
- **Add Todo**: `POST https://jsonplaceholder.typicode.com/todos`
- **Delete Todo**: `DELETE https://jsonplaceholder.typicode.com/todos/:id`
- **Edit Todo**: `PUT https://jsonplaceholder.typicode.com/todos/:id`

## Deployed Application

The application is deployed and can be accessed at [https://live-todo-web-app.netlify.app/](https://live-todo-web-app.netlify.app/).

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

