import React, { useState } from "react";

function UseState() {
	const [inputValue, SetInputValue] = useState("Cool Weather");
	const [counter, SetCounter] = useState(0);

	// start of counter functions
	const increase = () => {
		SetCounter(counter + 1);
	};

	const decrease = () => {
		SetCounter(counter - 1);
	};
	// end of counter functions

	// start of input function
	const handleChange = (e) => {
		const newValue = e.target.value;
		SetInputValue(newValue);
	};

	return (
		<div>
			<div>
				<div>{counter}</div>
				<button onClick={decrease}>-</button>
				<button onClick={increase}>+</button>
			</div>
			<div>
				<input
					type="text"
					onChange={handleChange}
					placeholder="type something"
				/>
				<div>{inputValue}</div>
			</div>
		</div>
	);
}

export default UseState;
