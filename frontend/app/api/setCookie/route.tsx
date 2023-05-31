import axios from "axios";

export async function GET(request: Request) {
	const cookie = request.headers.get("cookie");
	console.log(cookie);
	const res = new Response("hello");
	await axios
		.get("http://192.168.10.103:8080/setcookie", { withCredentials: true })
		.then((axiosResponse) => {
			const resCookies = axiosResponse.headers["set-cookie"];
			console.log(resCookies);
			if (resCookies !== undefined) {
				resCookies.forEach((cookie) => {
					res.headers.append(
						"set-cookie",
						cookie.replace("Domain=192.168.10.103; ", "Domain=localhost; ")
					);
				});
			}
		});
	return res;
}
