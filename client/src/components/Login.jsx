import React, { useContext } from "react";
import App from "../App";
import { AppContext } from "../pages/UseContext";
// NOTE: In order to use the values of the Context.Provider, the useContext Hook is to be imported and then import the created Context.

function Login() {
	const { username, setUsername } = useContext(AppContext);
    // COMMENT: Then finally grab the states from the AppContext as shown above.

	const handleChange = (e) => {
		setUsername(e.target.value);
	};
	return (
		<div>
			<input type="text" onChange={handleChange} />
		</div>
	);
}

export default Login;
