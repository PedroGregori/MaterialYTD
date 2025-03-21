const btn_search = document.querySelector("button#btn-search")
const input_url = document.querySelector("input#input-url")

btn_search.addEventListener("click", () => {
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({"url_yt": input_url.value})
	}

	fetch("http://localhost:3000/url/formats/req", fetchOptions)
	.then((response) => response.json())
	.then((data) => console.log(data))
})