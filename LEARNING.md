# React Form Concepts: Controlled vs Uncontrolled Components

***Controlled Components***
The form input’s value is controlled by React state.
You set the input’s value prop to a state variable.
You update that state via onChange handler when the user types.
React is the “single source of truth” for the input value.
This lets you easily validate, manipulate, or reset inputs because you have full control over the data.
Example:


const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>


***Uncontrolled Components***
The input manages its own state internally in the DOM.
You do not set the value prop.
Instead, you can use a React ref to read the input’s current value when you need it (e.g., on form submit).
React does not track or update the input’s value as you type.
Less code for simple forms but less control and flexibility.
Example:


const inputRef = useRef();

<input type="text" ref={inputRef} />


// Later, to get the value:
const name = inputRef.current.value;