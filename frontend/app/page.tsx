"use client";

import axios from "axios";

export default function Home() {
	type msg = { name: string };
	const setCookie = async () => {
		axios
			.get<msg>("http://localhost:3001/api/setCookie", {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data.name);
			});
	};

	const getCookie = () => {
		fetch("http://localhost:3001/api/getCookie", { credentials: "include" });
	};

	return (
		<>
			<h1>Hello!</h1>
			<button onClick={setCookie}>asdf</button>
			<button onClick={getCookie}>asdf</button>
		</>
	);
}
