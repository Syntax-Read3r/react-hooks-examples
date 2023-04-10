import React, { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffect() {
	const inputRef = useRef(null);

	useEffect(() => {
		console.log("useEffect");

		inputRef.current.value = "Awesome Summer";
	}, []);

	useLayoutEffect(() => {
		console.log(inputRef.current.value);
	}, []);
	return (
		<div>
			<div>
				<h1>useLayoutEffect Hook</h1>
				<p>
					What is the difference between useEffect and useLayoutEffect? <br />
					<br />
					<strong>useEffect</strong> is executed after the browser has painted
					the updated screen. It is added to the list of side effects to execute
					after the component has been rendered. Because of this,{" "}
					<strong>useEffect</strong> is non-blocking, which means that it
					doesn't block the rendering of the component. <br />
					<br />
					<strong>useLayoutEffect</strong>, on the other hand, is executed
					synchronously after all DOM mutations have been performed but before
					the browser has painted the updated screen. This hook is useful when
					you need to make sure that some code is executed before the browser
					updates the screen, for example when you need to measure the
					dimensions of an element after it has been rendered. Because{" "}
					<strong>useLayoutEffect</strong> is synchronous, it can potentially
					block the rendering of the component, so it should be used with{" "}
					<strong>caution</strong>. <br />
					<br />
					To summarize, if you need to perform some side effects that don't
					require synchronous updates, you can use <strong>
						useEffect
					</strong>{" "}
					and if the latter, you can use <strong>useLayoutEffect</strong> <br />
					-------------- <br />
					The code that I wrote proves that <strong>useLayoutEffect</strong> is
					called first before the <strong>useEffect</strong>. This is proved by
					the console.log() which logs the default value Munya before useEffect
					is called and change the value.
				</p>
			</div>
			<div>
				<input
					type="text"
					ref={inputRef}
					value="Munya"
					style={{ width: 400, height: 200, fontSize: 40 }}
				/>
			</div>
		</div>
	);
}

export default UseLayoutEffect;
