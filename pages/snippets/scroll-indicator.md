---
title: Scroll Indicator
date: 2019/4/16
description: How to create a scroll indicator with JavaScript
tag: web development, javascript, css, html
author: Tristan
---

**Objective:** To add a progress bar along the top of our window when the user scrolls down the page.

### HTML

Add the following HTML to the section of your site that you want the bar to be positioned, in this case I am adding it to the header.

```html
<header class="header">
  <div class="progress_container">
    <div class="progress_bar" id="progressBar"></div>
  </div>  
</header>
```

### CSS

Add the following CSS in your sites stylesheet or in a style tag within your sites head tags.

```css
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}
.progress_container {
  position: absolute;
  top: 0;
  width: 100%;
  background: transparent;
}
.progress_bar {
  height: 5px;
  background-color: #000fff;
  width: 0%;
  max-width: 100%;
}
```

### JavaScript

Add the following script in your projects JavaScript file or inside a script tag just before you close your body tag.

```javascript
window.onscroll = function() {
  scrollIndicator()
};

function scrollIndicator() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
```