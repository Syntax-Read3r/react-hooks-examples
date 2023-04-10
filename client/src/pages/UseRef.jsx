import React, { useRef } from "react";

function UseRef() {
	const inputRef = useRef(null);

	const handleClick = () => {
		// console.log(inputRef.current.value);
        inputRef.current.focus()
	};
	return (
		<div>
			<div>
				<h1>useRef Hook</h1>
				<p>
					In this case, the useRef is used to automatically focus on the input
					area when the button <strong>Change Statement</strong> is clicked.{" "}
					<br />
					<br />
					What does the useRef do? It is the easiest way to access and
					manipulate DOM elements. When coding in vanilla JavaScript as an
					example, there is an method{" "}
					<strong>document.getElementById('')</strong> which is used to access
					individual elements, however in REACT, this is something that is not
					implemented at such a scale as in vanilla. There comes a time when you
					want to make twiks here and there, and this is where useRef shines.{" "}
					<br />
					<br />
				</p>
			</div>
			<div>
				<h3>Cool Weather</h3>
				<input type="text" placeholder="Ex..." ref={inputRef} />
				<div>
					<button onClick={handleClick}>Change Statement</button>
				</div>
			</div>
			<h2></h2>
		</div>
	);
}

export default UseRef;
