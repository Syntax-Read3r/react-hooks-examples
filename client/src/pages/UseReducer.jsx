import React, { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1, showText: state.showText };
		case "toggleShowText":
			return { count: state.count, showText: !state.showText };
		default:
			return state;
	}
};

function UseReducer() {
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

	return (
		<div>
			<h1>useReducer Hook</h1>
			<p>
				Description: The useReducer hook is similar to useState. What it does
				differently is that it manages two or more states at the same time as a
				system management tool. This system will keep track of all the states
				that are on the page and collectively manage them however way <br />
				<br />
				To access reducer state, one must first specify the collection of states
				just as if they are accessing an object using the dot notation.
			</p>
			<h3>{state.count}</h3>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT" });
					dispatch({ type: "toggleShowText" });
				}}
			>
				Click Me
			</button>
			{state.showText && <p>Even Number</p>}
			{!state.showText && <p>Odd Number</p>}
		</div>
	);
}

export default UseReducer;
