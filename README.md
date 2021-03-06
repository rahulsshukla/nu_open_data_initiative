This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Important Links
Home Page:
https://www.nodi.nu

Admin Panel:
https://www.nodi.nu/admin/
(see slack for login info)

Knowledge Base
https://medium.com/@grepdennis/how-a-sql-database-engine-works-c67364e5cdfd
https://blog.hubspot.com/marketing/sql-tutorial-introduction
https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/

Database GUI (for viewing the data)
https://tableplus.com/

### Django Docs
https://docs.djangoproject.com/en/3.1/

How we get the data from the database
https://docs.djangoproject.com/en/3.1/ref/models/querysets/

How non devs access the data
https://docs.djangoproject.com/en/3.1/ref/contrib/admin/

How we display the react page (and handle endpoints)
https://docs.djangoproject.com/en/3.1/topics/http/urls/


## Django Setup

Activate venv: 
```
$ python -m venv venv # only run first time
$ venv/bin/activate
``` 

Install packages
```
$ pip install -r requirements.txt

# If build errors with psycopg2:
$ env LDFLAGS='-L/usr/local/lib -L/usr/local/opt/openssl/lib
-L/usr/local/opt/readline/lib' pip install -r requirements.txt
```

Add local env variables to `.env` file
```
SETTINGS_ENV=DEVELOPMENT
DB_HOST=localhost
DB_USER=<your user here>
DB_PSWD=
```

### DB setup
Install postgresql
```
$ brew install postgresql
$ brew services start postgresql
```

Create DB
```
$ psql postgres
postgres=# CREATE DATABASE nodi;
```
Run migrations
```
$ python manage.py migrate
```

Start server
```
$ python manage.py runserver
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
