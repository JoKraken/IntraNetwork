# IntraNetwork

An application to connect Developers

Live Demo: https://connectdevelopers.herokuapp.com/

* Users can: 
  - Sign Up and Login to the app
  - Create their own profile and view profiles of other.To get the avatar (profile imamge), user need to have a [Gravatar](https://en.gravatar.com/)
  - Edit and Update their Profile
  - Create a Post , add comment on other's post , like and dislike other's post
  
  ## Technologies used

* [Reactjs](https://reactjs.org/docs/getting-started.html) 
* [ReduxJS](https://redux.js.org/) 
* [Nodejs](https://nodejs.org/en/docs/) 
* [MongoDB](https://docs.mongodb.com/) 
* [PassportJS](http://www.passportjs.org/docs/) 
  

### Installing


```
> git clone https://github.com/jbidari15/DevelopersNetwork
> npm install (installs the dependencies for back-end)
>cd client
>npm install (installs the dependencies for front-end)
>cd ..(get out of client)
>Before running the project set up your mLab account for database and create file named Keys_dev.js with the following code 
>const db = {
  mongoURI: "YOUR MONGO URI",
  secret: "your secret keyword"
};
module.exports = db;
> npm run dev (this one starts the front-end and back-end server together as concurrently is used for development)

```
### List of API used

#### User API
* `'/api/users/signup' - POST` - SignUp user
* `'/api/users/login' - POST` - Login user

#### Message API

* `'/api/messages' - GET`- Get all posts
* `'/api/messages/:id/messages/:message_id' - GET` - Get specific message
* `'/api/message' - POST`- Create new message
* `'/api/messages/:id/messages/:message_id' - DELETE` - Delete specific message





## Author

* **Jaya Kumar Bidari** - [jbidari15]


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



