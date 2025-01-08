# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem Statement

# What is a Look?

A look is an entity which may have a set of images, videos etc. showcasing one or more of products posted by someone. It can have one or more images, videos and associated set of products. If the look has images, each image also have annotation shown by dots pointing out different products in that look.

# What is a lookbook?

Way to showcase looks to a user

### Specs

1. Preview of images/videos
2. Image displayed with a 5-second timer and video previewed till completion.
3. Annotations and legends to highlight products
4. Product click-through to detail pages
5. Primary focus on mobile web

## Initial Thoughts

This is a combination of a reel(vertical scroll) and a story(horizontal carousel) component.

Media type should be identifiable.

Swipe handling and snapping using CSS

Should contain information about where to display annotations in terms of position relative to top-left corner

Should contain links to PDP, hence each point should also have a link associated to it.

Desktop should have adjusted annotation positions according to a standard screen size.

## Steps I took to implement

1. I searched for a React Package which could simplify the story implementation since it involved a lot of working parts like support for image and video, countdowns, etc.
2. Found [react-insta-stories](https://github.com/mohitk05/react-insta-stories#readme) and decided to go ahead with it since it checked all the basics and advanced features like custom components.
3. Implemented Reel-like scrolling using Vanilla CSS.
4. Added Product Carousel.
5. Added button for Like, Share and Mute/Unmute.
6. Added Annotations for highlighting the products.
