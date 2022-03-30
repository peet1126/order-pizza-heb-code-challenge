# Peter McDonald's Project Summary

The goal of this project was to build a pizza ordering application for a restaurant's staff. The user is able to log in, create a pizza order, see an order queue in list format, and delete orders from the order queue. This app is connected to a third-party API, and the user logs in with an authentification token. The user-created orders are added to the API, and the order queue renders all of the API instances.

I used Redux to manage the user's authentification token, log-in status, and log-in errors to demonstrate my state management skillset. I also used standard React prop drilling to manage the rest of the state across the application. For the routs, I used React Router Dom version.

I did run into an issue when attempting to connect to the Order Pizza API provided. This issue proved to be the crux of the project. I could not run GET, POST, or DELETE requests without running into a CORS error (No 'Access-Control-Allow-Origin' header is present on the requested resource). I do not know if this was designed as a part of the assessment, but I had to use a workaround to continue developing the application. In the end, I used a Chrome plug-in to change these response header values. This solution is not ideal, but I decided to use the plug-in in order to finish the requirements for this project. I am curious about finding a real solution to this CORS issue, and I look forward to hearing how others have solved this issue.

## Instructions to Run This Project Locally

- Navigate to my GitHub repository and clone the project.

- - GitHub Repository link - https://github.com/peet1126/order-pizza-heb-code-challenge

- In your terminal, navigate to the place you would like this project to be stored and run the command:

```
$ git clone https://github.com/peet1126/order-pizza-heb-code-challenge.git
```

- Then, CD into the repository and run the command "npm install"

```
$ cd order-pizza-heb-code-challenge/
$ npm install
```

- Next, run the command "npm start" and open your Chrome browser to http://localhost:3000/

```
$ npm start
```

- Then, you will have to install the Chrome plug-in, ModHeader, into your browser in order to circumvent the cors errors.

ModHeader link-https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/related

- Open up the ModHeader plug-in and insert the following three Response headers:

```
Name: Access-Control-Allow-Headers | Value: *
Name: Access-Control-Allow-Origin | Value: *
Name:Access-Control-Allow-Methods | Value: *
```

- Next, refresh the http://localhost:3000/ page, and the app should be working as intended.

- To log in, enter the following:

```
username: test
password: test
```

## Boilerplate create-react-app README

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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
