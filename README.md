### Project Former

### Overview
Welcome to Project Former! Project Former is a React app for building forms and tracking the form responses. You can build multiple forms, submit responses to the forms and see all submitted responses for each form. 

This app includes:
- Home page
- Form builder page
- Form viewer and form submission page
- Submission viewer page sorted by form 
- Delete any form and submission

### Technologies

This project uses React with a json server and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## File Structure

App.js - This component holds the initial fetch requests, all the route paths, and holds the forms and submissions state variables. 

HomePage.js - This component displays the home page

containers - This directory has three components corresponding with the three navigation links to the right of "home".

components - This directory is separated into four sub-directories that contain the navigation components (including the header, footer, and navbar), form builder components, form viewing components, and submissions components. 

## Usage

This is a demo app with no users or login capabilities. 

To build a form, go to "Build" and enter a form name, then click "add a text question", then enter the prompt that you would like to be included in your form. You can click the button to add as many questions as you like. If you add too many questions, you can delete them as necessary. If you do not enter a form name or if you do not add at least one question, you will not be able to save your form. Once your form is created to your liking, click "Save Form".

To view the forms that you've created, click "Forms". From here, you can select the form or delete it.

To submit a response to a form, click "select form" and enter your responses to each question. Click "submit" to submit your responses.

To view the submissions, click "submissions". From here, you can delete any submission. 


## Available Scripts

In the project directory, you can run:

### `npm run server`

Starts the json server on port 3001

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
