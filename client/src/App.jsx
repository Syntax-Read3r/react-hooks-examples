import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

//components
import Layout from "./components/Layout";

// pages
import UseState from "./pages/UseState";
import UseReducer from "./pages/UseReducer";
import UseEffect from "./pages/UseEffect";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <UseState />,
			},
			{
				path: "/useReducer",
				element: <UseReducer />,
			},
			{
				path: "/useEffect",
				element: <UseEffect />,
			},
		],
	},
]);

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;