You can clone this directly using the steps:
1.	Clone the repo: git clone <repo-link>
Install the dependencies: 
A.	npm create vite@latest ./ -- --template react
B.	npm install -D tailwindcss postcss autoprefixer
C.	npx tailwindcss init -p
D.	npm install react-icons –save
E.	npm i framer-motion

All the text on the website are written in a separate file called index.js . So, the updates in the image and the text will have to be made in this file. 


There are in total 5 pages – the home page, About you page, Tech stack, Projects and contact page and all are mobile responsive.
These appear as a single page to maintain the ease of navigation.

The website has the navbar on top (Navbar.jsx) which is fixed at the top in the mobile view. 

The hero section has text on the left and your image on the right. If you wish to make changes in any of these, Hero.jsx is the folder to go it.

A little description about you is in the ‘About Heet’ section of the website. Changes in the CSS can be made by navigating to the About.jsx file.
A separate section for the technology you use – are shown using only the icons that are installed using a standard library are present in the Technology.jsx file.

The experience section in your website contains the certificate when the user clicks on the role (Experience.jsx). This is to make the website more clean with less things interrupting the user navigation experience.

The projects are in the Projects.jsx file and the corresponding details like the project name, images, tech used, etc is in the ‘index.js’ file. 

The ‘Contact Me’ section of your website has your location, email and links to the socials.   
