import React, { forwardRef, useImperativeHandle, useState } from "react";
// To get ref's to be accepted inside a component, the forwardRed function is called and applied as shown below. This will now make it permissible for components to accept refs'
const Button = forwardRef((props, ref) => {
	const [toggle, setToggle] = useState(false);

	// In simpler terms, the useImperativeHandle hook is a function that allows us to define functions based on the ref that can be called using the ref. In this instance, the function below is used to access the state of a child from a parent location.
	useImperativeHandle(ref, () => ({
		alterToggle() {
			setToggle(!toggle);
		},
	}));
	return (
		<>
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Button From Child
			</button>
			<div>{toggle && <span>Toggle</span>}</div>
			<h2></h2>
		</>
	);
});

export default Button;
