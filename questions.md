1. Component:

Component is the base class for React class components.
When a component updates, Component will re-render the component and all its child components, regardless of whether the component's props or state have actually changed.
we can prevent rerendering using shouldComponentUpdate or PureComponent
PureComponent is a subclass of Component with a built-in shouldComponentUpdate() implementation.
When a component updates, PureComponent performs a shallow(!!!) comparison of the component's new and previous props and state.
If the new props and state are shallowly equal to the previous props and state, PureComponent prevents the re-rendering of the component and its child components. to have deep checking if props or state was changed we have to use shouldComponentUpdate
 ----------------------------------------------------------------

2. Using Context in combination with shouldComponentUpdate can introduce potential issues, few reasons why:

Incorrect Rendering Optimization: The primary purpose of shouldComponentUpdate is to optimize rendering by preventing unnecessary updates.  when using Context along with shouldComponentUpdate, it becomes challenging to accurately determine the impact of context changes on the component's rendering. This can lead to incorrect rendering optimizations

we can miss some variables from shouldComponentUptate, the component may fail to update correctly when the context changes, leading to inconsistencies in the UI.

Context Consumer Limitations: When a component is consuming context using Context.Consumer, the shouldComponentUpdate method is not automatically aware of context changes. It means that even if the context changes, the shouldComponentUpdate method might not trigger, resulting in the component not updating when it should.
Complexity and Maintenance: Combining Context and shouldComponentUpdate adds complexity to the component logic and can make it harder to reason about the component's behavior.

it's possible to use both, but we have to be careful or just use memo or useCallback, useMemo hooks

----------------------------------------------------------------
3. Props: The most common way to pass information from a child component to its parent is through props. The parent component can pass a function as a prop to the child component, and the child component can invoke that function with the necessary data as arguments. This allows the child component to communicate information back to its parent.
Another way to pass information from a child component to its parent is by using callback functions. Instead of passing a function as a prop, the child component receives a callback function from the parent component. The child component can then call the callback function and pass the necessary data as arguments. 
The Context API in React allows for sharing data between components without having to pass props through every level of the component hierarchy. With context, a parent component can create a context and provide a value to it. The child components can then access that value from the context. If the child component needs to update the parent with information, it can access a function from the context to do so.

----------------------------------------------------------------
4. In React, there are a few ways to prevent components from re-rendering unnecessarily, which can help optimize the performance of our application. Here are two approaches we can use:

Use shouldComponentUpdate or PureComponent:
By implementing this method in our component, we can compare the current props and state with the next props and state to determine whether a re-render is necessary. If the component's data hasn't changed, we can return false from shouldComponentUpdate to prevent the re-render. 

React provides a higher-order component called React.memo that can be used to wrap a functional component. React.memo will only re-render the component if its props have changed. It performs a shallow comparison of the previous and next props and re-renders only if there are differences. 

----------------------------------------------------------------

5. In React, a fragment is a component that allows us to group multiple elements together without introducing an additional DOM element. Fragments are helpful when we need to return multiple elements from a component without wrapping them in a single parent element. to declare fragrment we can use <Fragment></Fragment> or <></>

While fragments provide flexibility and convenience, there are cases where using them might break our app:

Key Prop: When rendering a list of items using fragments, make sure to provide a unique key prop to each fragment. The key prop helps React identify each individual item and efficiently update the DOM when the list changes. Forgetting to provide a key prop or using non-unique keys can lead to incorrect rendering or performance issues.

Limitations with Some APIs: Fragments are not supported by all React APIs. Some third-party libraries or components may not handle fragments correctly, expecting a single root element instead. 


----------------------------------------------------------------

6. 
The Higher-Order Component (HOC) pattern in React allows for component composition and code reuse by wrapping components with additional functionality. Here are three examples of the HOC pattern:

An authentication HOC can be used to restrict access to certain components based on the user's authentication status. It wraps the target component and checks whether the user is authenticated. If authenticated, it renders the component; otherwise, it redirects to a login page. 

A logging HOC can be used to add logging functionality to components, capturing and logging important lifecycle events or specific component actions. It wraps the target component and adds logging statements before or after certain operations. 
jsx

A styling HOC can be used to apply common styles or CSS classes to a component, enhancing its appearance or ensuring consistent styling across multiple components. It wraps the target component and provides additional style-related props. 

----------------------------------------------------------------

7. When it comes to handling exceptions in JavaScript, there are several approaches depending on the programming paradigm used: promises, callbacks, and async/await. 
Promises provide a structured way to handle asynchronous operations. When a promise encounters an exception, it transitions to a rejected state and can be caught using the catch method. The catch method allows us to specify a callback function that will be executed when the promise is rejected. 


If any error occurs in the then block or any preceding promise, the control is immediately transferred to the catch block. The error object can be accessed through the error parameter in the catch block.

In callback-based programming: callback function takes two parameters: the first parameter is used for any error that occurred, and the second parameter holds the result of the operation if it was successful. 

The async/await syntax provides a more synchronous-looking code structure for handling asynchronous operations. When using async/await, we can wrap asynchronous calls inside a try-catch block to handle exceptions. 
Within the try block, we can use the await keyword to pause the execution until the promise is resolved. If an exception is thrown in the try block or any of the awaited promises reject, the control transfers to the catch block, allowing we to handle the exception.


Nowadays async/await is common way to handle exceptions

----------------------------------------------------------------

8. setState method is used to update the state of a component. It is an asynchronous function that typically takes two arguments: an object that represents the updated state values (or function, which except previous state and props and return new state object) and an optional callback function that is executed after the state has been updated.

The setState method is designed to be asynchronous for performance reasons. When we call setState, React batches multiple state updates together and performs them in a single update for better performance and rendering optimizations. This means that calling setState multiple times in a row won't trigger multiple re-renders, but rather a single re-render after all the state updates have been processed.

Additionally, the setState method is also asynchronous to ensure consistency and avoid potential issues that can arise when updating state synchronously. By making it asynchronous, React can properly manage the order in which state updates occur and avoid race conditions or conflicting state changes that could lead to unpredictable behavior.

----------------------------------------------------------------

9. To migrate a class component to a function component in React, we can follow these general steps:

Review the existing class component: Understand the functionality and features of the class component we want to migrate. Take note of any state, lifecycle methods, and class-specific syntax being used.

Create a new function component: Create a new function component using the same name or a new name, depending on our preference. Use the basic structure of a function component:

Remove the class-specific syntax: Remove the class-specific syntax, such as the extends React.Component inheritance, constructor, and render method.

Copy over the JSX code: Copy the JSX code from the render method of the class component and place it inside the function component's return statement. Make sure to update any references to this.props to simply props.

Handle state and props: If the class component uses state, we can replace it with the useState hook in the function component. Declare state variables using the useState hook and update them using the returned setter function. Update references to this.state to the state variables declared with useState. Similarly, update this.props to props within the function component.

Convert lifecycle methods to hooks (if necessary): If the class component uses lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount), we can convert them to their equivalent hooks.

componentDidMount can be converted to useEffect with an empty dependency array ([]).
componentDidUpdate can be converted to useEffect with a dependency array containing the variables that should trigger the effect.
componentWillUnmount can be handled within the cleanup function returned by the useEffect hook.
Refactor event handlers: If the class component has event handler methods (e.g., handleClick), we can directly use them within the function component without the need for binding or using arrow functions. Ensure that we update references to this.setState to use the appropriate state setter function from the useState hook.

----------------------------------------------------------------

10. In React, there are multiple ways to apply styles to components. Here are a few common methods:

Inline styles (worst scenario): Styles can be applied directly to JSX elements using the style prop.

CSS classes: Components can be assigned CSS classes by adding the className prop to the JSX element. The className prop accepts a string value containing one or more class names defined in CSS files. This allows we to leverage the power of CSS and its features, such as cascading, specificity, and media queries. I prefer to use tailwind

CSS Modules: CSS Modules is an approach that allows us to write CSS styles in a modular way, where styles are scoped to specific components. This helps avoid naming collisions and keeps styles encapsulated. With CSS Modules, we import a CSS file as an object and use the class names from that object in your component. 


CSS-in-JS libraries: There are various CSS-in-JS libraries available that allow us to define styles directly in our JavaScript code. ( like styled-components in my application)



----------------------------------------------------------------

11. To render an HTML string coming from the server in React, we can use the dangerouslySetInnerHTML prop. 

dangerouslySetInnerHTML={{ __html: htmlString }} 

oooor: document.createElement, but not in our case)) 