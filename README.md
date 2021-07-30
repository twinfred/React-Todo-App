## About

A simple todo app that loads a list of todos (tasks which need to be completed) from a remote server. Each todo has a status indicating if it has been completed or not as well as an optional due date. When a todo is marked as complete, the server is notified about the updated status. If a todo is past its due date but not yet completed it is indicated to the user that it is overdue with colors.

The items in the todo list are sorted in the following order:
- Overdue items at the top
- Uncompleted items in the middle
- Completed items at the bottom

Each of the above sections are also sorted by due date (oldest due date at the top).

## Setup

In order to properly run this project, first navigate the the root folder and run `npm install`.

Next, create a `configs.js` file in the `src` folder and add an export for the `SECRET_API_KEY`. (This will require you to get access to the `SECRET_API_KEY` from the repo owner)

## Run the App

`npm start` will run the app in the development mode at [http://localhost:3000](http://localhost:3000).

- The page will reload if you make edits.
- You will also see any lint errors in the console.

## Next Steps

- Testing
  - Jest
  - Cypress
  - Add axe-core testing library to Jest tests to check for WCAG compliance

- UI Changes
  - To improve accessibility, visually indicate that a test is overdue in a way that doesn't rely on color alone

## Notes

- This project was created with `create-react-app`
