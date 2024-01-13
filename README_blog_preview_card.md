# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements on the page
- In this case the interactive element is the blog card with shadow changing on hover

### Screenshot

[](./assets/screenshots/screenshot_desktop.jpg)
[](./assets/screenshots/screenshot_desktop_hover.jpeg)
[](./assets/screenshots/screenshot_mobile.jpg)


### Links

- [Solution URL](https://github.com/adriankae/blog-preview-card-frontentmentor)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1. Created sketch on how to structure it.
2. Created html structure.
3. Wrote CSS code top-down for desktop view.
4. Created hover animation.
5. Added CSS code for mobile media queries.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

What was new to me in this project was CSS animations. Furthermore, I used new properties in CSS to broaden and deepen my knowledge like border-radius and box-shadow. 

Apart from that and due to the project's size, it was a nice little exercise to practice a very concise and structured approach to design, conceptualize and implement this card.   

```css
box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);

@media (min-width: 376px) {
    .card:hover {
        box-shadow: 14px 14px 0px 0px rgba(0, 0, 0, 1);
    }
}
```

## Author

- Website - [Adrian Käsdorf](https://adriankae.github.io/)
- Frontend Mentor - [@adriankae](https://www.frontendmentor.io/profile/adriankae)
- LinkedIn - [@kasdorf](https://www.linkedin.com/in/kasdorf/)
- X - [@adrianjazzdorf](https://x.com/adrianjazzdorf)
