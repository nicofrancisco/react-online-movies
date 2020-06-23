# React Online Movies - Create React App

### Movie App Demo Url

### [https://react-online-movies.herokuapp.com/](https://react-online-movies.herokuapp.com/)

##### The basic purpose of the demo:
  - to implement a solid configuration of the React's stack.
  - the use of good practices such as Typescript, Prettier.
  - to provide a good UX while keeping it simple.

##### Insights

-This project is using Redux and React-Redux to control the flow of data through the components. The application is being updated accordingly to a global store. Redux is creating a central store & encapsulating all the states/slices of the application.

-Components dispatches actions and the action creator fetches the data from the server to send it back to the reducer. The reducer is responsible to update the store, not through the 'connect' function of redux, but using useSelector() from React-Redux instead.

### Project Setup

- Go create an account on [themoviesdb.com](themoviesdb.com)
  Go to Settings and create your api_key.

- Back in your project create a `.env` file in the project and set the REACT_APP_API_KEY:

```
REACT_APP_API_KEY="your moviedb api_key"
```

- `npm install` -> install all dependencies.

- `npm start-dev` -> run the project locally.
