<a href="https://fokusin.herokuapp.com/">
        <img src="public/assets/img/fokus.inLogo.png" alt="Logo" width="250" height="97">
</a>

# Fokus.in App

Fokus.in is a web-based smart goals planner platform that facilitates users to achieve their goals. Users can choose a goal and will be assigned the tasks / skill set needed that must be mastered according to the goal chosen and has a progress bar that shows the progress of the user's learning journey. It has a daily motivation to motivate users to achieve their goals, users could make their own goals as well, provides learning references / resources, and has a calendar that shows the tasks’ schedule for the user according to their goals.

## Documents Related

1. Research and Userflow (on Miro Board) : https://miro.com/app/board/o9J_lUnA01c=/ 
Database Schema (on dbdiagram.io) : https://dbdiagram.io/d/60366390fcdcb6230b214e5c 
2. Figma : https://www.figma.com/file/iAgYZmitmmtgUoIIQJijzU/mini-project-grup-B?node-id=1:5647
3. Gitlab Repository [Frontend] : https://gitlab.com/synrgy-mini-project-batch-2/team-b/frontend 
4. Gitlab Repository [Backend] : https://gitlab.com/synrgy-mini-project-batch-2/team-b/backend  
5. Heroku Link Deployment [Frontend] : https://fokusin.herokuapp.com/
6. Heroku Link Deployment [Backend] :https://fokusin-backend.herokuapp.com/


## Installation

Instal Dependencies
```
npm install
```
Create database
```
sequelize db:create
```
Migrating
```
sequelize db:migrate
```
Seeding
```
sequelize db:seed:all
```
Running
```
npm run dev
```