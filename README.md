# JS OOP Task Manager

![GitHub repo size](https://img.shields.io/github/repo-size/bielgirao/js-oop-task-manager?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/bielgirao/js-oop-task-manager?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/bielgirao/js-oop-task-manager?style=for-the-badge)

<img src="https://i.postimg.cc/RC7hXhnp/js-oop-cover.jpg" alt="JS OOP Task Manager Banner">

> This project is a modular JavaScript task manager built for learning purposes, showcasing essential OOP concepts and SOLID principles while maintaining a clear separation between domain models, services, and UI logic.

## 💻 Technologies

- JavaScript, HTML, CSS

## Features

- **Task Model** with validation and state management  
- **TaskList Model** for adding, updating, and removing tasks  
- **Modal Service** to render dynamic dialogs for creating and editing tasks  
- **Status Selector Component** for changing task status in place  
- **Validation Service** centralizing input checks  
- **TaskList Renderer** service isolating DOM rendering logic  
- **Sample Data Generator** to bootstrap the app with example tasks

## 🚀 Running Locally

Follow these steps to launch the portfolio on your machine:

#### 1. Clone the repository and navigate into the project folder

```bash
git clone https://github.com/bielgirao/js-oop-task-manager.git
cd js-oop-task-manager
```

#### 2. Open in your browser

Open index.html in your browser or serve the folder with a simple HTTP server

## Usage

- Click Add Task to open the modal and enter task details
- Use the Edit button next to each task to modify its title or description
- Change the task status via the dropdown selector
- Click Remove to delete a task

All changes are immediately reflected in the UI thanks to a centralized renderer service.

## Architecture

```bash
/src
  /models
    Task.js
    TaskList.js
    Status.js
  /services
    ValidationService.js
    SampleDataGenerator.js
    Modal.js
    TaskFormModal.js
    StatusSelector.js
    TaskListRenderer.js
  index.js
  index.html
  styles.css
```
- Models encapsulate domain data and behavior
- Services handle UI rendering, modal logic, and data validation
- index.js ties everything together and wires up event handlers

## SOLID Principles

- Single Responsibility: each class or service has one clear responsibility
- Open/Closed: services can be extended without modifying existing code
- Liskov Substitution: models can be replaced or extended with subclasses
- Interface Segregation: small, focused methods instead of large interfaces
- Dependency Inversion: high-level modules depend on abstractions, not details

## 🤝 Developer

<table>
  <tr>
    <td>
      <a href="https://github.com/bielgirao" title="Gabriel Girão GitHub Profile">
        <img src="https://avatars.githubusercontent.com/u/72451904" width="100px;" alt="Gabriel Girão Profile Image"/><br>
        <sub>
          <b>Gabriel Girão</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
