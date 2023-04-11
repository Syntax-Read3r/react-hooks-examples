import React, { useState, createContext } from "react";
import Login from "../components/Login";
import User from "../components/User";

import img from "../assets/img/useContext.png";

export const AppContext = createContext(null);

function UseContext() {
	const [username, setUsername] = useState("");
	return (
		<>
			<div>
				<h1>useContext Hook</h1>
				<p>
					The <strong>useContext</strong> hook is a built-in hook in React that
					allows a functional component to consume context provided by a parent
					component without having to explicitly pass it down as props through
					every level of the component tree. <br />
					<br />
					<strong>Context</strong> is a way to share data between components
					that are not directly related to each other in the component tree. For
					example, if you have a theme that you want to apply across your entire
					app, you could use context to make the theme available to all
					components in your app without having to pass it down through every
					level of the component tree. <br />
					<br />
				</p>
				Here's how <strong>useContext</strong> works:
				<ol>
					<li>
						First, you need to create a context object using the{" "}
						<strong>createContext</strong>
						function. This function returns a new context object that you can
						use to provide and consume context data.
					</li>
					<li>
						Next, you can provide context data to a parent component using the
						<strong>Provider</strong> component that comes with the context
						object. You can pass any <strong>value</strong> as the value prop to
						the <strong>Provider</strong>.
					</li>
					<li>
						Finally, you can consume the context data in a child component using
						the <strong>useContext</strong> hook. This hook takes the context
						object as an argument and returns the current value of the context.
					</li>
				</ol>
				<div>
					<img src={img} alt="useContext example" />
				</div>
				<p>
					In this example, the <strong>App</strong> component provides context
					data to the <strong>Toolbar</strong> component using the{" "}
					<strong>ThemeContext.Provider</strong> component. The{" "}
					<strong>Toolbar</strong> component consumes the context data using the{" "}
					<strong>useContext</strong> hook and uses it to style a button. When
					the button is clicked, it will toggle between a light and dark theme
					based on the current value of the context.
				</p>
			</div>
			{/* When creating a ...Provider, you need to pass in a value. The value will be all the states and functions that you want to have access inside of it. */}
			<AppContext.Provider value={{ username, setUsername }}>
				<Login /> <User />
			</AppContext.Provider>
		</>
	);
}

export default UseContext;
