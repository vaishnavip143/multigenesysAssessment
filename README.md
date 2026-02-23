# Employee Management System

A simple React-based application to manage employees and countries, built as a technical assignment.

## Tech Stack
- **React**: Latest version (Vite)
- **State Management**: Redux Toolkit (Slices, AsyncThunks)
- **Forms**: React Hook Form
- **UI Library**: Material-UI (MUI)
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library

## Features
1. **Employee List**: Displays a table of employees with readable country names.
2. **Search by ID**: Find specific employees using their ID.
3. **Add/Edit Employee**: Dynamic form for creating and updating employee records with validation.
4. **Delete Employee**: Remove records with a confirmation prompt.
5. **UI Feedback**: Integrated loading and error states for a better user experience.

## Project Structure
```text
src/
├── app/             # Redux Store configuration
├── components/      # Dumb components (List, Form)
├── feature/         # Redux Slices (State logic)
├── pages/           # Smart components (Layout, Data fetching)
├── services/        # Axios configuration
└── ...
```

## Setup and Run

### Prerequisites
- Node.js installed

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.

### Run the App
```bash
npm run dev
```

### Run Tests
```bash
npm test
```

## Assumptions and Decisions
- Used `Redux Toolkit` for clean and scalable state management.
- Implemented `React Hook Form` for efficient form handling and validation.
- Component architecture follows the Smart/Dumb pattern for better maintainability.
