![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)


# Kalvium Lab | REACT HOOKS - BASIC

## Learning Goals

In this exercise, the goal is to learn various use cases with hooks:

- React Hooks

## Instructions
In this lab we will try to work with hooks in react. You can use a single component or create one component for each progression. This lab is just for your reference and kinldy explore the power of react hooks.

### PROGRESSION 1 | UPDATE STATE USING `useState`

The following piece of code is written inside `UseState.jsx` componenet. This component will be rendered inside `App.jsx`. 
The following piece of code displays as how `useState` hook can be used to update an element.
Free feel to copy this code, and experiment around.

```jsx

import { useState } from "react";
import "../App.css"

function UseState(){
  const [currAge,setAge] = useState(19);
  
  const handleAge = ()=>{
    setAge(currAge+1);
  }

  return (
    <div>
      <h3>My Current Age is {currAge}</h3>
      <button onClick={handleAge}>Get Older</button>
    </div>
  );
}

export default UseState;

```

![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/usestatehookOne.gif)

### PROGRESSION 2 | MULTIPLE STATE

Adding multiple `useState` hook, inside `UseState.jsx` file. This component will be rendered inside `App.jsx`. 
The following piece of code displays as how multiple `useState` hooks can be used to update elements.
Free feel to copy this code, and experiment around.

```jsx


import { useState } from "react";
import "../App.css"

function UseState(){
  const [currAge,setAge] = useState(19);
  const [currSib, setSib] = useState(1);
  
  const handleAge = ()=>{
    setAge(currAge+1);
  }

  const handleSib = ()=>{
    setSib(currSib+1);
  }


  return (
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSib}>Get more Sib</button>
    </div>
  );
}

export default UseState;

```
![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/multipleStateHook.gif)

### PROGRESSION 3 | USE OBJECT STATE

We can modify the above `UseState.jsx` file, and get the same output by setting the initial value inside `useState` as an `object`. 
The output of the following code will be the same as the above output that we got from `PROGRESSION 2`.
Feel free to copy this code, and experiment more.

```jsx


import { useState } from "react";
import "../App.css"


function UseState(){

  const [state, setState] = useState({age:19, siblings:3});

  const handleState = (val)=>{
  
    setState({
      ...state,[val]:state[val]+1
    })
  }

  const {age,siblings} = state;

  return(
    <div>
      <h3>My Current Age is {age}</h3>
      <h4>My siblings {siblings}</h4>
      <button onClick={()=>{handleState("age")}}>age</button>
      <button onClick={()=>{handleState("siblings")}}>sib</button>
    </div>
  )

}

export default UseState;

```

### PROGRESSION 4 | INITIALIZE STATE FROM FUNCTION

We can modify the above `UseState.jsx` file, and get the same output by initializing state from function. 
The output of the following code will be the same as the above output that we got from `PROGRESSION 2`.
Feel free to copy this code, and experiment more.


```jsx

import { useState } from "react";
import "../App.css"


function UseState(){

  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(3);

  return(
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
      <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
    </div>
  )

}

export default UseState;

```

### PROGRESSION 5 | `useEffect`

By adding a `useEffect` hook to the same `UseState.jsx` file (used in `PROGRESSION 4` ) , the following output can be achieved - as shown in the given gif.
There are few things, which you should explore and experiment. 

1. Try replacing [currAge] with [currSib] --> and see what happens. When you are 
   replacing [currAge] to [currSib], don't forget to make changes in alert().
2. Try giving an empty array as well, as the second parameter of `useEffect`.

Apart from the above two exploration tasks, you can experiment more to get a better understanding of the code.

```jsx

import { useState } from "react";
import { useEffect } from "react";

function UseState(){

  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(3);

  useEffect(()=>{
    alert(`something changed ${currAge}`)
  },[currAge])

  return(
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
      <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
    </div>
  )

}


export default UseState;

```

![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/useEffectHook.gif)


### PROGRESSION 6 | `useContext`

Here the focus is on using the hook `useContext`. You can refer to the following code, which provides a toggle functionality -> which can changes the background color whenever it the toggle button is clicked.
Feel free to copy this piece of code, and experiment around.

`App.jsx`:

```jsx

import { useState } from 'react';
import './App.css';
import UseContext from './components/UseContext';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;

```

`UseContext.jsx`:

```jsx

import { useContext } from "react";
import { ToggleTheme } from "../App";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      This is made by Kalvium
    </div>
  )
}

export default UseContext;

```

![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/useContextHook.gif)

### Task:

Once you have understood the above `hooks` mentioned, let's quickly test our understanding. Your task is to get an output shown below, by using the following hooks:

1. useState
2. useEffect
3. useContext

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/TaskHook.gif)


Happy Coding ❤️!

