const btn_search = document.querySelector("button#btn-search")
const input_url = document.querySelector("input#input-url")
const video_title = document.querySelector("h3#video-title")
const video_description = document.querySelector("p#video-description")
const video_thumbnail = document.querySelector("img#video-thumbnail")

async function fetchVideoInfo(url) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "url_yt": url })
    };

    const response = await fetch("http://localhost:3000/url/formats/req/", fetchOptions);
    return await response.json();
}

function updateVideoInfo(data) {
    const { title, description, thumbnails } = data.videoDetails;
    const thumbnailUrl = thumbnails[0]?.url;

    if (video_title) video_title.textContent = title;
    if (video_description) video_description.textContent = description;
    if (video_thumbnail) video_thumbnail.src = thumbnailUrl;
}

btn_search.addEventListener("click", async () => {
    const url = input_url.value.trim();

    if (!url || !url.includes("youtube.com") && !url.includes("youtu.be")) {
        alert("Por favor, insira uma URL válida do YouTube.");
        return;
    }

    btn_search.disabled = true;
    btn_search.textContent = "Carregando...";

    try {
        const data = await fetchVideoInfo(url);
        updateVideoInfo(data);
		console.log(data);
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Ocorreu um erro ao buscar as informações do vídeo.");
    } finally {
        btn_search.disabled = false;
        btn_search.textContent = "Pesquisar";
    }
});