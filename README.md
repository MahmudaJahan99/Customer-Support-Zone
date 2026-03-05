**What is JSX, and why is it used?**

JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It is used in React to describe what the UI should look like.
JSX is used to -
 1. Makes UI code more readable
 2. Allows writing HTML inside JavaScript
 3. Helps React efficiently update the DOM
 4. Improves developer productivity


**What is the difference between State and Props?**

In React, both *State* and *Props* are used to store data that influences the output of a render, but they function differently:

|  *Feature* |                       *State*                            |                         *Props*                            |
|------------|------------------------------------------------|------------------------------------------------------------|
|Definition  | Data managed internally by a component.        | Data passed from a parent component to a child component.  |
|Mutability  | Mutable (Updated via set functions).           | Immutable (Read-only for the child)                        |
|Ownership   | The component itself.                          | Parent component                                           |
|Purpose     | Used to manage dynamic data within a component.| Used to pass information between components.               |
|Example     | ```                                            | ```                                                        |
|            | const [count, setCount] = useState(0);         | function Greeting(props) {                                 |
|            | ```                                            |   return <h1>Hello {props.name}</h1>;                      |
|            |                                                | }                                                          |
|            |                                                | ```                                                        |


**What is the useState hook, and how does it work?**

useState is a React Hook that lets you add state to a functional component. When the state changes, React automatically re-renders the component to reflect the new data. It returns two values:
 1. The current state value
 2. A setter function to update that state

Example:
```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

How it works:
 - useState(0) initializes the state with 0.
 - count stores the current state value.
 - setCount() updates the state.
 - When the state changes, React re-renders the component.


**How can you share state between components in React?**

State can be shared between components using several methods:
 1. Lifting State Up: Move the state to the closest common parent component and pass it down using props.
 2. Context API: React Context allows global data sharing without passing props through every component.
 3. State Management Libraries: For massive applications, tools like Redux, Zustand, or Recoil provide a centralized store outside the component tree.


**How is event handling done in React?**

Handling events in React is very similar to handling events on DOM elements, with a few key syntax differences:
 1. CamelCase: Events are named using camelCase (e.g., onClick instead of onclick).
 2. Function Reference: You pass a function as the event handler rather than a string.