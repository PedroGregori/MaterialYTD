const btn_url = document.querySelector("button#btn-url")
const input_url = document.querySelector("input#input-url")

btn_url.addEventListener("click", () => {
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({"urlYt": input_url.value})
	}

	fetch("http://localhost:3000/api/", fetchOptions)
	.then((response) => console.log(response.body))
})