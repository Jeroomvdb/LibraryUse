import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@jeroomvdb/mystorybooklibrary";

function App() {
	return (
		<div className="App">
			<Button label="primaryBtn" text="Green PandaPanda Button" />
			<Button label="secondaryBtn" text="Pink PandaPanda Button" />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
