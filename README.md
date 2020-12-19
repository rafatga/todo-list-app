# todo-list-app
- Add a to-do
- Mark a to-do done/undone
- Filter done to-dos
- Delete a to-do
- Sorting (asc/desc) by creation time
- Tagging functionality with a filter (for example to add priorities or categories)
- If your code is readable & properly formatted

## Installation (dev)
```bash
# install dependencies
$ npm install

# (IMPORTANT) add API url to nuxt.config.js
env: {
    baseUrl: 'http://todo-list-api.loc/api/v1'
}

# serve with hot reload at localhost:3000
$ npm run dev
```

## List of things to improve
- Add pagination (sever side) to task list
- Change task list filters to (sever side)
- Change task list table for div component to improve the responsiveness
- Add loading component
- Change create and edit page to a modal for better user experience

