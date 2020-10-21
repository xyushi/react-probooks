![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | REACT - PRO

## Learning Goals

In this exercise, the goal is to learn routing and forms in react:

- Axios,
- REST API,
- GET, POST, PUT & DELETE

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Instructions
In this lab we will try to work with API's in react. The main idea of this lab is to fetch details from external API, process it and display it. We have four components 
- HomeComponent
- SearchComponent
- LIKEORNOLIKEComponent
- APIServiceComponent

The main theme behind the lab is to fetch book details and display it for reading. They can like it or dislike it after they have read it. So let's start building it.
```API DETAILS
api = "https://reactnd-books-api.udacity.com"
//token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
//headers
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
```

Kindly see the output:
![Image description](https://i1.faceprep.in/ProGrad/probook.gif)
### PROGRESSION 1 | GO FETCH AND COME BACK

Create an api service component which fetches the data from the above api and keep it as an json array. 

### PROGRESSION 2 | LOAD IT TO ME
Create a search component and when the user enters the book to be searched enter it and then 
## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

