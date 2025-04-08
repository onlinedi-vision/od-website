import React, {useState} from 'react';
import './Sessions.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { FaRocketchat } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IoMailOpenOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoIosSchool } from "react-icons/io";
import { useRef } from 'react';
import { IoSend } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router"

export default function Session() {
const [isOpen, setIsOpen] = useState(false);
const [isLoaded, setLoaded] = useState(0);
const [messages, setMessages] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const [chatm, setChatm] = useState("");
const navigate = useNavigate();

    const toggleChat = () => {
        setIsOpen(prevState => !prevState);
    };

const cardRefs = useRef([]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


    const getThemes = () => {
        return {
          themes: [
            {
              id: "Lecture 1",
              title: "Intro to React & JSX",
              description: "Learn the basics of React.",
              curriculum: [
                `1. What is React and what is it used for?
              React is a JavaScript library developed by Meta (Facebook), designed to build fast and interactive user interfaces. It is widely used for modern web and mobile applications. One of React’s core concepts is componentization — breaking the UI into small, reusable pieces called components.
              
              React is ideal for building Single Page Applications (SPAs) — apps where navigating between "pages" doesn’t reload the entire site. Instead, only specific parts of the screen update, offering a faster and smoother user experience.
              
              Another major benefit of React is its reactive interface model: when data changes, React automatically knows which parts of the UI to update and does it efficiently through a mechanism called the Virtual DOM.`,
              
                `2. How to set up a React project (Vite / Create React App)
              To start using React, there are several ways to set up a project. The most popular options are:
              
              Create React App (CRA) – an official tool offered by the React team, perfect for beginners. It creates a fully configured React project that’s ready to use.
              
              Vite – a faster and more modern alternative, increasingly popular for quick and efficient development.
              
              Both methods give you a complete development environment with JSX support, modules, hot reloading, and more.`,
              
                `3. What is JSX and how does it combine JavaScript with HTML?
              JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code directly inside JavaScript files. This means you can build UI structures intuitively without using document.createElement() or other traditional methods.
              
              Although it looks like HTML, JSX is actually transformed into JavaScript function calls during compilation. This makes it highly flexible, allowing you to embed any JavaScript logic within the visual structure.`,
              
                `4. JSX Rules (e.g., one root element, className instead of class)
              JSX has some important rules you must follow:
              
              You must return a single root element. If you want to return multiple elements, they need to be wrapped in a single <div> or a <React.Fragment>.
              
              Use className instead of class. Since class is a reserved keyword in JavaScript, JSX uses className to apply CSS styles.
              
              Use curly braces {} to embed JavaScript expressions inside JSX, such as variables, functions, or conditions.`,
              
                `5. What does a basic component look like?
              A React component is simply a function that returns a visual structure (written in JSX). Each component represents a reusable part of your application's interface. Components can receive props — external data passed into them — and can also manage internal logic using state.
              
              Components are the foundation of everything in React: from a small button to the entire page — everything is built as a component.`
              ]
              
              
            },
            {
                id: "Lecture 2",
                title: "Components & Props",
                description: "Learn the basics of React",
                curriculum: [
                  "1. What are React components? React components are the building blocks of any React application. A component is essentially a function (or class) that returns a visual part of the UI written in JSX. They help break down complex interfaces into smaller, reusable pieces, making code more modular, readable, and maintainable. Components can be either functional (using functions) or class-based (using ES6 classes). Each component should ideally represent a single responsibility or part of the UI.",
                  
                  "2. Difference between functional and class components: Functional components are JavaScript functions that return JSX and can use hooks like useState or useEffect. They are the modern standard in React development. Class components are ES6 classes that extend React.Component and use lifecycle methods instead of hooks. Although both are valid, functional components are preferred today due to their simplicity, cleaner syntax, and the power of hooks, which provide more flexibility and reduce boilerplate code.",
                  
                  "3. Props: passing data between components. Props (short for 'properties') are a way of passing data from a parent component to a child component. They are read-only and allow components to be dynamic and flexible. By using props, you can make reusable components that adapt based on the data they receive. For example, you can create a Button component that displays different labels depending on the prop passed to it. Props are immutable, which ensures that a component's behavior remains consistent.",
                  
                  "4. Using defaultProps for default values: React allows you to set default values for props using the `defaultProps` property. This is useful if you want to ensure that a prop has a value, even if the parent component does not explicitly provide one. For example, you can set a default label for a Button component, which can be overridden when the parent passes a value for that prop.",
                  
                  "5. Passing functions as props: In addition to passing data (like strings or numbers), you can also pass functions as props. This allows child components to trigger actions in their parent components. For example, you can pass an event handler like an `onClick` function to a button component, enabling the button to interact with the parent component's state or behavior.",
                  
                  "6. PropTypes: PropTypes is a built-in feature in React that allows you to define the types of props that a component should receive. It acts as a form of runtime validation, ensuring that the correct type of data is passed to a component. This helps prevent bugs and makes code easier to understand. You can define PropTypes for required props, optional props, and their types (string, number, array, etc.).",
                  
                  "7. Destructuring props: In modern JavaScript, you can destructure props directly in the function signature or inside the function body to simplify the code. For example, instead of `props.name`, you can destructure it like this: `({ name }) => <h1>{name}</h1>`. This improves code readability and makes it more concise.",
                  
                  "8. Passing objects or arrays as props: You can pass more complex data structures like arrays or objects as props. For instance, you might pass an array of users to a List component, which then renders each user. Keep in mind that props should remain immutable, so avoid modifying the props directly in child components.",
                  
                  "9. State vs. Props: While both state and props are used to store and manage data in React, there is an important distinction. Props are used to pass data from parent to child components, whereas state is used to manage data within a component. The key difference is that props are read-only and cannot be modified by the child component, whereas state can be updated and is used to handle dynamic data within a component.",
                  
                  "10. Prop drilling and solutions: Prop drilling occurs when you pass props from a parent component through several layers of child components until they reach the component that actually needs them. While this works fine for small applications, it can become cumbersome in larger apps. Solutions to prop drilling include using context or state management libraries like Redux to pass data without the need to pass props through every intermediate component.",
                  
                  "11. React children prop: The `children` prop is a special prop that allows you to pass components or elements as children to a parent component. It is often used to create reusable layout components. For example, a Modal component might use `children` to dynamically render content inside the modal body.",
                  
                  "12. Functional components with props vs class components: Both functional and class components can receive props, but they handle them differently. Functional components typically receive props as function arguments, while class components access props via `this.props`. As React has moved toward functional components with hooks, using props in functional components is now the preferred approach."
                ]
              },         
              {
                id: "Lecture 3",
                title: "State & Events",
                description: "Learn the basics of React",
                curriculum: [
                  "1. What is state and why do we need it? State is a way to store and manage dynamic data within a component. It allows React to know when to re-render a component, based on changes in its internal data. This ensures that the UI stays in sync with the underlying data.",
                  
                  "2. Using useState: The useState hook allows you to add state to a functional component. It provides a way to declare a state variable and a function to update its value. The state variable stores the current value, and the updater function allows you to modify that value. This hook is essential for maintaining dynamic data in components.",
                  
                  "3. How to handle events (onClick, onChange): In React, you can handle user interactions (like clicks or text changes) using event handlers. Common events include onClick (for button clicks), onChange (for form input changes), onSubmit (for form submission), onMouseEnter/Leave (for mouse interactions), and many more. Event handlers are typically passed as props to components, allowing them to respond to user input.",
                  
                  "4. Why is state important in React applications? State is crucial because it lets you manage how components change over time in response to user actions, making your app interactive and dynamic. Without state, React would be unable to update the UI when the data changes. For example, when a user types into a text field, the value of the field is stored in the component’s state.",
                  
                  "5. Updating state in React: When state changes, React automatically re-renders the component to reflect the new state. You can use the setState function (or the state updater from useState) to trigger updates. React optimizes re-rendering, only updating parts of the UI that actually need to change, improving performance.",
                  
                  "6. State immutability: State in React should never be mutated directly. Instead of modifying the state directly, you should always use the state updater function (such as setState or the updater returned by useState) to update the state. This ensures that React can properly detect changes and re-render the component efficiently.",
                  
                  "7. Passing state between components: React allows you to pass state between components using props. You can lift state up from child components to parent components, allowing the parent to control the shared state. This enables data flow from top to bottom in the component tree, facilitating communication between components.",
                  
                  "8. Event delegation: Event delegation is a technique where you attach a single event listener to a parent element and handle events for multiple child elements. This can be useful for handling dynamic or large numbers of elements (e.g., a list of items) where you don’t need to attach event listeners to each child individually.",
                  
                  "9. Synthetic events in React: React uses a system of synthetic events, which wraps the native browser events to provide consistent behavior across different browsers. React's synthetic events normalize the event objects, allowing you to write cross-browser compatible code without worrying about inconsistencies in event handling.",
                  
                  "10. useEffect with state changes: You can use the useEffect hook to perform side effects in response to state changes. For example, you can fetch data from an API when the state updates, or set up subscriptions when a component mounts. useEffect runs after the component renders and can be used for operations like updating the DOM or fetching external data.",
                  
                  "11. Controlled vs. Uncontrolled components: In React, controlled components are components where the state is managed by React, and uncontrolled components are those where the state is handled by the DOM itself. Controlled components are more predictable and easier to manage, as the state is always in sync with the component's data.",
                  
                  "12. Event bubbling and capturing: In JavaScript, events propagate through the DOM in a process called bubbling (from child to parent) and capturing (from parent to child). React provides an abstraction to handle both of these, allowing you to manage event listeners efficiently. In React, events are automatically bubbled up through the component tree.",
                  
                  "13. Preventing default events: You can prevent the default behavior of an event using `event.preventDefault()`. This is commonly used in form submissions, where you want to handle the form submission programmatically instead of the browser’s default form submission behavior.",
                  
                  "14. Debouncing and Throttling: Debouncing and throttling are techniques used to limit the number of times a function is called, especially in response to user input. Debouncing delays the execution of a function until a certain amount of idle time has passed, while throttling limits the number of times a function is executed over a given period of time. These techniques are especially useful when handling events like typing or scrolling.",
                  
                  "15. Conditional rendering with state: You can use state to conditionally render parts of your UI. For example, you can display a loading spinner while fetching data, or show a success message once a form is submitted. By updating state, you can dynamically change what is rendered on the page."
                ]
              },
              {
                id: "Lecture 4",
                title: "Conditional Rendering & Lists",
                description: "Learn the basics of React",
                curriculum: [
                  "1. Conditional rendering (if, ternary, &&): In React, you can conditionally render content based on certain conditions. You can use if statements, ternary operators, or logical AND (&&) to control what gets displayed depending on the state or props. For example, you can show a loading spinner while data is being fetched, or display a message if a list is empty.",
                  
                  "2. Rendering lists with map(): You can display a list of elements by mapping over an array of data and returning JSX for each item. The `map()` function is commonly used for rendering dynamic lists in React components. It is a key method for creating repeatable elements like lists of items, user profiles, or blog posts.",
                  
                  "3. Using the key attribute: When rendering lists, it's important to include a unique 'key' prop for each element to help React efficiently update and re-render the components. The key helps React identify which items have changed, been added, or removed. Without keys, React may face performance issues or incorrectly update components. The key should be a unique and stable identifier (e.g., an ID).",
                  
                  "4. How conditional rendering enhances user experience: Conditional rendering allows you to display different content based on user interactions, state, or props, improving the interactivity and responsiveness of your app. For example, you can show different buttons based on whether the user is logged in or logged out, or render error messages if something goes wrong.",
                  
                  "5. Combining conditional rendering with lists: You can combine conditional rendering with list rendering to display specific content based on conditions for each item in the list. This is useful for displaying different UI elements based on the data. For example, showing different icons or components based on the status of each item in a list (e.g., a task that’s marked as completed vs. one that’s still in progress).",
                  
                  "6. Rendering dynamic content based on props: You can pass dynamic data as props to components and use conditional rendering to display different content based on those props. For example, you can show a component differently if the user has a certain role, or render different sections of the app depending on the user’s preferences.",
                  
                  "7. Short-circuit evaluation with && operator: In React, you can use the `&&` operator for short-circuit evaluation, where the right-hand side of the expression is rendered only if the left-hand side is true. For example, `isLoggedIn && <LogoutButton />` will render the `<LogoutButton />` only if `isLoggedIn` is true.",
                  
                  "8. Ternary operator for concise conditional rendering: The ternary operator is often used for inline conditional rendering. It provides a compact way to write if-else conditions. For example, `isLoggedIn ? <WelcomeUser /> : <LoginButton />` will render `WelcomeUser` if `isLoggedIn` is true, otherwise, it will render `LoginButton`.",
                  
                  "9. Conditional rendering in class components: In class components, conditional rendering works similarly to functional components. You can use the `if` statement inside the `render()` method or use ternary operators and logical `&&` to conditionally render JSX.",
                  
                  "10. Performance considerations for conditional rendering: While conditional rendering can enhance user experience, it's important to avoid unnecessary re-renders by ensuring that conditions are evaluated efficiently. Using React’s `PureComponent`, `memo`, or `useMemo` can help optimize performance in complex conditional rendering scenarios.",
                  
                  "11. Rendering empty states: It's common to display specific content when a list or array is empty, such as a message like 'No items found' or an illustration. Using conditional rendering with an empty array or object, you can inform the user that no data is available, improving the overall UX.",
                  
                  "12. Combining loops with conditional logic: You can loop through an array and apply conditional logic to each element. For example, you may want to render a list of users, but only show users who are active or have a certain role. This allows you to filter the list before rendering it, which can be useful when displaying filtered or search results.",
                  
                  "13. Nested conditional rendering: Sometimes, you may need to render multiple conditions within each other. This can be done using nested ternary operators or by using `if` statements within other conditional structures. It's essential to keep your code readable and avoid overly complex nested conditions.",
                  
                  "14. Using React Fragments for conditional rendering: In certain cases, you may want to return multiple elements without adding an extra DOM node (e.g., a wrapper div). You can use `React.Fragment` or the shorthand `<>` to group multiple elements and apply conditional rendering to them. This keeps the DOM tree clean and avoids unnecessary wrappers.",
                  
                  "15. Handling async rendering: You can use conditional rendering to handle asynchronous data loading. For example, showing a loading spinner while fetching data, or rendering different content once the data has loaded. This helps improve user experience by indicating that something is happening in the background."
                ]
              },              
              {
                id: "Lecture 5",
                title: "Basic Forms & Controlled Inputs",
                description: "Learn the basics of React",
                curriculum: [
                  "1. Creating forms in React: Forms in React are built using JSX and managed by React's state. You'll define the structure of the form and input elements such as text fields, radio buttons, and checkboxes. React ensures that form values are linked to the component’s state, providing dynamic control over the form.",
                  
                  "2. Controlled components and linking them with state: A controlled component is an input field whose value is controlled by React state. By using the `useState` hook, we can bind the input’s value to the state, and any changes to the input will automatically update the state. This allows you to track and manage form inputs effectively.",
                  
                  "3. Handling form submissions: When a user submits a form, the data entered into the form needs to be captured. You can handle this with an event handler function (e.g., `handleSubmit`) that prevents the default form behavior and processes the input data (e.g., sends it to an API or logs it to the console).",
                  
                  "4. Handling multiple form fields: React allows you to manage multiple input fields in the same form. You can use a single state object to store the values of all input fields, or you can use separate `useState` hooks for each field. Each input element will need an `onChange` handler to update the state.",
                  
                  "5. Form validation: Ensuring the user has entered valid information is a crucial part of working with forms. React doesn’t provide built-in form validation, but you can easily add custom validation logic (such as checking if an email is valid or ensuring required fields aren’t empty). You can also use third-party libraries like `Formik` or `React Hook Form` for more complex validation scenarios.",
                  
                  "6. Working with checkboxes and radio buttons: For handling checkboxes and radio buttons, you'll need to manage boolean values (true/false) or specific selected options in the state. Checkboxes may be part of a group, and radio buttons work by ensuring only one option is selected at a time.",
                  
                  "7. Controlled vs. Uncontrolled components: In React, there are controlled and uncontrolled components. A controlled component is one where React manages the form data through the state, while an uncontrolled component allows the DOM to manage its own state. You typically want to use controlled components for better predictability.",
                  
                  "8. Resetting a form: Sometimes, after form submission or user interaction, you may want to reset the form. This can be done by clearing the form state values, either through a button or by setting the state to its initial value.",
                  
                  "9. Using the `useEffect` hook with forms: The `useEffect` hook can be useful when you need to perform actions like fetching data when the form component mounts or when certain fields change. For example, you could automatically fetch suggestions based on the input field value.",
                  
                  "10. Styling form components: Forms are often styled using CSS or CSS-in-JS libraries like styled-components. You can apply styling directly to the input fields, labels, and buttons, or you can add custom validation feedback messages based on the form state (such as displaying error messages or changing input borders).",
                  
                  "11. Handling errors and feedback: It’s important to provide feedback to the user about the form state. You can show error messages if the user inputs invalid data (such as an invalid email address) or provide confirmation messages after a successful submission."
                ]
              }              
        ]};
    };

    const sendMessage = () => {
        let payload = {
            username: 'alex',
            content: chatm,
            session: searchParams.get('id')
        }
        axios.post('https://onlinedi.vision/api/send_session_message', payload)
        .then(
            resp => {
              setLoaded(1);
              console.log('test');
           }
        ).catch(
          err => {
          console.log('fail');
            setLoaded(1);
            setMessages([]);
          }
        );
    }

    const getMessages = () => {
        if(isLoaded === 1) return messages;
        console.log(searchParams.get('id'));
        let payload = {
            session:searchParams.get('id')
        }
	  console.log(payload);
        axios.post('https://onlinedi.vision/api/fetch_session_message', payload)
                .then(
                    resp => {
                      setMessages(resp.data.messages);
                      setLoaded(1);
                      console.log(messages);
                   }
                ).catch(
                  err => {
                  console.log('fail');
                    setLoaded(1);
                    setMessages([]);
                  }
                );
	    return messages;
      };
    return (
<>
<div className={`right-sidebar ${isOpen ? 'shifted' : ''}`}>
            <Nav defaultActiveKey="/sessions" className="flex-column">
                <Nav.Link onClick={()=>toggleChat()}>
                    { isOpen ? (
                        <IoMailOpenOutline id="chat-icon" size={30} />
                    ):(
                        <MdMailOutline id="chat-icon" size={30} />
                    )}
                </Nav.Link>
            </Nav>
            
        <div className={`chat-section ${isOpen ? 'open' : ''}`}>
            <div className="chat-content"> 
	    	{getMessages().map((msg, index) => (
                    <div key={index} className={`chat-message-received `}>
                        <p className="align">
                       <b> {`${msg.username}: `} </b>  {`${msg.content}`}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bar">
                <div className="chatbar" placeholder='Chat here'>
                        <input className="chatin" value={chatm} onChange={(e)=>{setChatm(e.target.value);}} placeholder='Chat...' />
                    </div>
                    <button className="pfp2" onClick={()=>sendMessage()}>
                        <VscSend size={40} />
                    </button>
            </div>
        </div>
        </div>

          <Col>
                <h1 className='h1-course'>
                    <IoIosSchool className='icon-course' />
                    React Basics
                </h1>
                {getThemes().themes.map((item, index) => (
                <Card
                    key={item.id}
                    ref={(el) => (cardRefs.current[index] = el)} 
                    className='hover-course'
                    style={{ width: '100%', height: '100%', marginBottom: '1rem' }}
                >
                     <Card.Body className='course'>
                        <h1>{item.id}</h1>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <p><strong>Curriculum:</strong></p>
                        <p>{item.curriculum}</p>
                        
                    </Card.Body>
                </Card>
                ))}
        </Col>

</>

    );

}
