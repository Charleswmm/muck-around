# muck-around
A copy of a website for learning

### Dependencies 

- NodeJS
- npm
- webpack

### Webpack

Webpack bundles all necessary modules and dependencies, and creates an output of static assets.

#### Input

- index.html
- js
    * app.js
- css
    * app.css
    * normalize.css
- images
    * dis-logo.svg
    * discord.svg

#### Output

- index.html
- js
    * main.js
- css
    * style.css
    

### Breakpoints

https://viewportsizer.com/devices/

- mobile (<480px)
   * scaled from small tablet
- small tablet (480-768px)
   * @media queries to change from mobile to monitor version (<768px)
- large tablet (768-848px)
   * burger menu removed at >848px so that there is a burger menu on large tablets 
- small monitor (848-1024px)
   * some nav bar items need to be removed
- medium monitor (1024-1200px)
   * normal desktop view
- larger monitor (>1200px)
   * retina displays