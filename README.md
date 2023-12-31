# TALK PULSE - Frontend (reddit clone)

## This is a school project MERN stack assignment

### Backend for this project
Backend part of the project: https://github.com/xxrobone/talkpulse_server-cme

# PREVIEW
### Talk Pulse App 
<img src="src/assets/talkpulse.gif" alt="Project image" width="150">

## Features included

### Reading posts no sign-in needed

### USER
- Sign up
- Sign in
- Auth using JsonWebTokens
- User email verification and reset password

### Posts (User log-in)
- User can create, update and delete own posts 
- "Real time" updates with React Router using loaders (reads) and actions (writes)

### Comment & Votes
- Comments and votes if user is signed in

## Features not included
- ~~Subreddits~~ 
- ~~Additional features or libraries for realtime like socket.io, websockets or swr~~

### Getting started

Clone the repo: (or fork it)

```sh
git clone https://github.com/xxrobone/talkpulse-cme.git
```
Install dependencies:

```sh
npm i
```
### For this project to work you need the backend part or your own backend
You can find the backend here: https://github.com/xxrobone/talkpulse_server-cme

To Start the project:    
```sh
npm run dev
```


## TECH USED IN THIS PROJECT:
- Vite
- React.js
- React-router-dom
- Sass

Just my notes don't mind these...

TODO:
Verification [x] - working on live site
Password reset [x] - working on live site
Votes post & comments [x] - working on live site

USER!
Password verification [x]
Password reset [x]

IMAGES! 
Add images [x]
Update images [x]

Add redirects /close functions to:
comments:   [x]
posts:      [x]
delete:     [x]

Styling fixes update forms [x]

Future features // 

User logout after token expires or refresh token activation []

Future features // 
SUBREDDITS!
ADD model:              []
ADD controllers:        []
ADD routing:            []


REPLIES!
ADD model:              []
ADD controllers:        []
ADD routing:            []

USER!
Profile page /settings page []