const API_URL = "http://127.0.0.1:5000/forums";

async function fetchForums() {
    const res = await fetch(API_URL);
    const forums = await res.json();
    const container = document.getElementById("forums");
    container.innerHTML = '';

    forums.forEach(forum => {
        const div = document.createElement("div");
        div.className = "p-4 bg-white rounded shadow";

        div.innerHTML = `
            <h2 class="font-bold">${forum.title}</h2>
            <p>${forum.content}</p>
            <button onclick="deleteForum(${forum.id})" class="text-red-500 mr-2">Delete</button>
            <button onclick="editForum(${forum.id}, '${forum.title}', '${forum.content}')" class="text-blue-500">Edit</button>
        `;
        container.appendChild(div);
    });
}

async function createForum() {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
        alert("Judul dan isi forum tidak boleh kosong!");
        return;
    }

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        titleInput.value = "";
        contentInput.value = "";
        fetchForums(); // Reload forum list
    } else {
        const error = await response.json();
        alert("Gagal upload: " + JSON.stringify(error));
    }
}


async function deleteForum(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchForums();
}

function editForum(id, oldTitle, oldContent) {
    const title = prompt("Edit judul:", oldTitle);
    const content = prompt("Edit isi:", oldContent);

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    }).then(fetchForums);
}

fetchForums();
