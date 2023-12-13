# Assignment | Pro-Hooks

**Live link:** https://pro-hooks-assignment.netlify.app

<br/>

![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

## Learning Goals

In this exercise, the aim is to understand the following hooks:

- useMemo
- useCallback

### Steps to follow:

1. clone this repository.
2. use `npm install` or `npm i`, to install all the dependancies.
3. use `npm run dev` to run the application - and check whether the application is running or not.

# Task:

Initially, you will see the application running in the following manner -

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/lab-react-pro-hook-boiler.gif)

And if you open you console, you will see the console, in the following way -

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/lab-react-pro-hook-console-boiler.gif)

**NOTE:** You must have observed, the delay while clicking on the `dark` and `change value` button. You must have observed that, when you change the background color, there is a delay.

Your task is to optimize the given code, and remove the delay - as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/lab-react-pro-hook-sol.gif)

**NOTE:** You must have also observed, that initially, in your console, if you click any button -->
`Delay function ran` and `callback function was called` --> these two text message get consoled everytime you click any of the three buttons.

Your task is to optimize the code in such a way --> that these two texts : `Delay function ran` and `callback function was called`, only appear in console, when you click on `change value ` button - as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/lab-react-hooks-console-sol.gif)

Happy Coding ❤️!
