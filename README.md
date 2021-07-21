## About

A simple todo app that loads a list of todos (tasks which need to be completed) from a remote server. Each todo has a status indicating if it has been completed or not as well as an optional due date. When a todo is marked as complete, the server should be notified about the updated status. If a todo is past its due date but not yet completed it should be clearly indicated to the user that it is overdue.

The items in the todo list are sorted in the following order:
- Overdue items at the top
- Uncompleted items in the middle
- Completed items at the bottom

Each of the above sections are also sorted by due date (oldest due date at the top).

## Setup

In order to properly run this project, first navigate the the root folder and run `npm install`.

## Run the App

`npm start` will run the app in the development mode at [http://localhost:3000](http://localhost:3000).

- The page will reload if you make edits.
- You will also see any lint errors in the console.

## Notes

- This project was created with `create-react-app`