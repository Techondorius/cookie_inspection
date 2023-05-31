import axios from "axios";

export async function GET(request: Request) {
	const cookie = request.headers.get("cookie");
	console.log(cookie);
	await axios
		.get("http://192.168.10.103:8080/getcookie", {
			headers: {
				cookie: cookie,
			},
		})
		.then((res) => {
			console.log(res.data);
		});
	return new Response("ok");
}
