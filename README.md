# TALK PULSE - Frontend (reddit clone)

## This is a school project MERN stack assignment

## This project is hosted on two providers
Backend on Render (node express server)
Frontend on Render https://talkpulse.onrender.com/ - (images somehow flow over container)
Frontend on Vercel https://talkpulse-cme.vercel.app/ (images dont flow over container)

About the images its, even after my fix - it is wierd that one hosting provider makes the container flow over but not the other

### Backend for this project
Backend part of the project: https://github.com/xxrobone/talkpulse_server-cme

# PREVIEW
### Talk Pulse App 
<img src="src/assets/talkpulse.gif" alt="Project image" width="150">

## Features included

### Reading posts no sign-in needed

### USER - AUTH
- Sign up
- Sign in
- Auth using JsonWebTokens
- User email verification and reset password
(Verificatio will come from an email hiphopsthlm@gmail.com, using google mail)

### Posts (User signed in) - crud functionality
- User can create, update and delete own posts 
- "Real time" updates with React Router using loaders (reads) and actions (writes)

### Comment & Votes (signed in) - crud functionality on comments
- User can add comments and votes, vote up or down if user is signed in

## Features not included
- Additional features
- Libraries for realtime like socket.io, websockets or swr
- Used react-router-dom whichs should be somewhat realtime
- Subreddits

### Getting started

Clone the repo: (or fork it)

```sh
git clone https://github.com/xxrobone/talkpulse-cme.git
```
Install dependencies:

```sh
npm i
```
### For this project to work you need the a backend part 
You can find my version of the backend here: https://github.com/xxrobone/talkpulse_server-cme

When connected to a backend or using mockData you can try it out

To Start the project:    
```sh
npm run dev
```


## TECH USED IN THIS PROJECT:
- Vite
- React.js
- React-router-dom
- Sass

<br>
 

 <br>

 ---

 


<p align="left">
<a href="https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/" target="blank"><img align="center" src="https://github.com/xxrobone/dablog/blob/main/readmeimages/LinkedIN.png" alt="" height="30" /></a>
<a href="https://github.com/robonexx" target="blank"><img align="center" src="https://github.com/xxrobone/dablog/blob/main/readmeimages/Github.png" alt="" height="30" /></a>
<a href="https://codepen.io/robertwagar" target="blank"><img align="center" src="https://github.com/xxrobone/dablog/blob/main/readmeimages/Codeopen.png" alt="" height="30" /></a>
<img align="center" src="socials/Discord.png" alt="" height="30" />
</p>



### Have and Idea you want to bring to life?
- 💬 Reach out and lets have a chat?

#### You can reach me at:

✉️ robertwagar@gmail.com

<br>
<br>

 ---


## Future features

### Separate Loaders and Actions
- [ ] Separate Actions
- [ ] Separate Loaders

### User

- [ ] User logout after token expires or refresh token activation

### SUBREDDITS

- [ ] ADD model
- [ ] ADD controllers
- [ ] ADD routing

### REPLIES

- [ ] ADD model
- [ ] ADD controllers
- [ ] ADD routing

### USER

- [ ] Profile page / settings page

<br> 
<br>
<br>
<br> 
<br>
<br>



#### Just my notes don't mind these...

## My TODO List

- [x] Verification - working on live site
- [x] Password reset - working on live site
- [x] Votes post & comments - working on live site

### IMAGES

- [x] Add images
- [x] Update images

### Add redirects / close functions to:

- [x] comments
- [x] posts
- [x] delete

### Styling fixes update forms

- [x] Styling fixes update forms
