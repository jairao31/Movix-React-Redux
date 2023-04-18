import { useEffect, useState } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

function App() {
	const apiTest = () => {
		fetchDataFromApi("/movie/popular").then((res) => {
			console.log(res);
		});
	};

	useEffect(() => {
		apiTest();
	}, []);
	return <div className="App">App</div>;
}

export default App;
