import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
	const [data, setData] = useState({
		name: "",
		email: "",
		content: "",
	});
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
			let name = res.data[0].name;
			let email = res.data[0].email;
			let content = res.data[0].body;

			setData({ name, email, content });

			console.log("API called");
		});
	}, [count]);

  // handles
  const handleClick = () => {
    setCount(count + 1)
  }
 
	return (
		<div>
			<div>
				<h1>useEffect Hook</h1>
				<p>
					The useEffect hook is a function that will be called whenever a page
					is rendered. It's also worth noting that is a very powerful hook that
					can be used to detect when a page is re-rendered and also can be used
					to specify what it is to be detected. As an example, imagine that you
					want to have a function that is immedeately called when a page is
					rendered and console.log()'s a message';
					<br />
					<br />
					Changing a state of an application will re-render the page. There are
					work around on this, and require very specify methods on how to deal
					with such situations.
					<br />
					<br />
					Small explanation on why the useEffect runs multiple times. In the
					above example, If the [ ] bracket was not included, the useEffect
					would be called infinitely. First the use effect is called when the
					page renders, then it's called because an axios call was made which
					updated the <strong>data</strong> object and thus re-rendered the
					page.
					<br />
					<br />
					The [ ] bracket or array is used to pass through all state that you
					want to listen to. Meaning that every single state that is passed
					through the array, will trigger a useEffect call whenever the value of
					that state changes. Imagine that, right now there is only one state
					called <strong>data</strong> and we do not want to call data again
					when the state changes else where in the application or even now as I
					type in this paragraph, state is changing. To prevent{" "}
					<strong>data</strong> from triggering the useEffect call, an empty
					array is passed.

          <br /><br />To further explain this topic, I have added a <strong>counter</strong>. I have also added the <strong>counter</strong> state in the dependance array and this will call the <strong>useEffect</strong> hook each time the <strong>counter</strong> state is triggered through button click.
<br /><br />
          <strong>Use Cases</strong>
<br /><br /> useEffect is useful for many things, primary when making API calls. As an example, when you go on instagram, a bunch of images appear. It is very similar to that. 

				</p>
			</div>
			<div>
				<h2>Data Received</h2>
				<p>Name: {data.name}</p>
				<p>Email: {data.email}</p>
				<p>Content: {data.content}</p>
			</div>
			<div>
				<h3>Counter</h3>
				<p>{count}</p>
				<button onClick={handleClick}>Click Me</button>
			</div>
		</div>
	);
}

export default UseEffect;
