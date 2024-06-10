# Getting Started with Create React App

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

### `File Structure`
Creating a diagrammatic representation of your React app's file structure can help you understand and visualize the project's layout. Below is a diagram representing the structure :

```
YT-CLONE/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── categoriesBar/
│   │   │   ├── _categoriesBar.scss
│   │   │   └── categoriesBar.js
│   │   ├── header/
│   │   │   ├── _header.scss
│   │   │   └── header.js
│   │   ├── sidebar/
│   │   │   ├── _sideBar.scss
│   │   │   └── sidebar.js
│   │   ├── video/
│   │       └── Video.js
│   │
│   ├── screens/
│   │   └── homeScreen/
│   │       └── homeScreen.js
│   │
│   ├── _app.scss
│   ├── _base.scss
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── [M4]
```

### Explanation:

- **YT-CLONE/**: The root directory of the project.
  - **node_modules/**: Directory for installed Node.js packages.
  - **public/**: Typically contains static assets like index.html.
  - **src/**: Source code directory.
    - **components/**: Directory for reusable components.
      - **categoriesBar/**: Directory for the categories bar component.
        - `_categoriesBar.scss`: SCSS file for styling the categories bar component.
        - `categoriesBar.js`: JavaScript file for the categories bar component.
      - **header/**: Directory for the header component.
        - `_header.scss`: SCSS file for styling the header component.
        - `header.js`: JavaScript file for the header component.
      - **sidebar/**: Directory for the sidebar component.
        - `_sideBar.scss`: SCSS file for styling the sidebar component.
        - `sidebar.js`: JavaScript file for the sidebar component.
      - **video/**: Directory for the video component.
        - `Video.js`: JavaScript file for the video component.
    - **screens/**: Directory for different screens/pages.
      - **homeScreen/**: Directory for the home screen component.
        - `homeScreen.js`: JavaScript file for the home screen.
    - `_app.scss`: SCSS file for global styles.
    - `_base.scss`: Base SCSS file for foundational styles.
    - `App.js`: Main App component file.
    - `index.js`: Entry point of the React application.
  - **.gitignore**: Git ignore file to exclude certain files from version control.
  - **package-lock.json**: Lockfile for installed npm dependencies.
  - **package.json**: Metadata file for npm dependencies and scripts.
  - **README.md**: Project description and instructions.
  - **[M4]**: Unclear based on given context; possibly a placeholder or specific folder.


