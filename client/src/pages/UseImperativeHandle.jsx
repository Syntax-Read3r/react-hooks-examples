import React, { useRef } from "react";
import Button from "../components/ButtonImp";

function UseImperativeHandle() {
	const buttonRef = useRef(null);

	return (
		<div>
			<div>
				<h1>useImperativeHandle Hooks</h1>
				<p>
					<strong>useImperativeHandle</strong> is a hook in React that allows
					you to customize the instance value that is exposed to the parent
					component when using <strong>ref</strong>. It provides a way to expose
					a specific set of functions or properties of a child component to its
					parent component. <br />
					<br />
					When you create a <strong>ref</strong> in a parent component and pass
					it to a child component, the parent can access the child's properties
					and methods through the <strong>current</strong> property of the{" "}
					<strong>ref</strong>. However, in some cases, you may want to restrict
					the properties and methods that the parent component can access.
					That's where <strong>useImperativeHandle</strong> comes in.
					<br />
					<br />
					With <strong>useImperativeHandle</strong>, you can define a set of
					functions or properties that will be exposed to the parent component
					through the <strong>ref</strong>. These functions or properties are
					defined inside the child component using the{" "}
					<strong>useImperativeHandle</strong> hook. This allows you to
					encapsulate the implementation details of the child component and only
					expose a specific set of features to the parent component.
					<br />
					<br />
					In simpler terms, the useImperativeHandle hook is a function that
					allows us to define functions based on the ref that can be called
					using the ref. In this instance, the function child{" "}
					<strong>ButtonImp</strong> is used to access the state of{" "}
					<strong>ButtonImp</strong> from a parent location using the{" "}
					<strong>ref</strong> which what imported the same way{" "}
					<strong>props</strong> are. <br />
					<br />
					Finally, to get ref's to be accepted inside a component, the
					forwardRed function is called and applied as shown below. This will
					now make it permissible for components to accept refs'. When importing a ref, they can only be placed after props.
				</p>
			</div>
			<div>
				<button
					onClick={() => {
						buttonRef.current.alterToggle();
					}}
				>
					Button From Parent
				</button>
				<Button ref={buttonRef} />
			</div>
		</div>
	);
}

export default UseImperativeHandle;
