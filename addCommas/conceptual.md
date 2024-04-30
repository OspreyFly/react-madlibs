### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JavaScript library for creating reactive user interfaces. It is especially useful for applications that have a lot of user interactivity that changes what is shown on the front-end.

- What is Babel?
    Babel is a JavaScript compiler that can convert the latest JS versions and additions into code that is widely supported by browsers. It can also change code like JSX into compatible JS.

- What is JSX?
    JSX, or JavaScript XML, is a syntax extension for JavaScript that is primarily used with React. JSX allows developers to write UI components in a more intuitive and readable way, similar to how HTML is used to structure web pages.

- How is a Component created in React?
    First, defining a JavaScript function. The function name must begin with a capital letter to allow React to recognize it as a component. Next, inside the function return JSX markup. JSX requires a compiler like Babel to transform it into standard JavaScript. Finally, you can export the component to use it in other parts of your application. This is done using the export default syntax.

- What are some differences between state and props?
    Props are used to pass data from one component to another, while state is used to manage the internal data of a component. Props are read-only and are passed down from parent components to child components, whereas state is local to the component and can be modified within the component itself. Changes to props do not trigger a re-render of the component, whereas changes to state do.

- What does "downward data flow" refer to in React?
    It refers to the unidirectional flow of data from parent components to child components through props. This approach provides several benefits, including easier debugging, better performance, and a more predictable state management. It also simplifies the data flow within an application, making it easier to understand and maintain.

- What is a controlled component?
    A controlled component in React is a component where the form data is managed by the component's state, rather than the DOM. Any changes to the form elements are handled through callbacks like onChange. The parent component manages the state and passes the current values as props to the controlled component.

- What is an uncontrolled component?
    An uncontrolled component in React is a component that manages its own state internally and does not rely on React's state mechanism to control its value. Uncontrolled components use ref to directly access the value of form elements from the DOM which allows them to retrieve the current value of an input field without needing to synchronize it with React's state.

- What is the purpose of the `key` prop when rendering a list of components?
    The key prop in React is crucial when rendering lists of components because it helps React identify which items have changed, been added, or been removed. Without keys, React might re-render more components than necessary, leading to performance issues and potential bugs.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    The key prop should be unique and stable across re-renders. Using an array index as a key does not guarantee this, especially if items can be added or removed from the list.

- Describe useEffect.  What use cases is it used for in React components?
    The useEffect hook allows functional components to perform side effects, such as data fetching, subscriptions, or changing the DOM, after the component has rendered. This hook takes two arguments: a callback function containing the side effect logic, and an optional array of dependencies that determines whether the effect should be re-run.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef allows you to access DOM nodes or React elements directly. Since the identity of the useRef object itself does not change when its .current property is updated, React does not consider it a state or prop change that would trigger a re-render.

- When would you use a ref? When wouldn't you use one?
    You would use a ref in React when you need to directly access DOM elements, store mutable data that doesn't affect rendering, manage intervals or timeouts, track previous state or props, or implement custom hooks. You wouldn't use a ref when the data affects the component's output or when a re-render is needed upon data change.

- What is a custom hook in React? When would you want to write one?
    A custom hook is a function that starts with the word "use" and can call other hooks. Custom hooks allow you to extract component logic into reusable functions. They are used to share logic across multiple components without repeating code, making your code more readable and maintainable. This can include setting up event listeners, making API calls, or managing state.