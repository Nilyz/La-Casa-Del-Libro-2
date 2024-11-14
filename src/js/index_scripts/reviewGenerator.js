let i = 0;

fetch("/src/json/review.json")
    .then((response) => {
        if (!response.ok)
            throw new Error("No se pudo cargar el archivo review.json");
        return response.json();
    })
    .then((data) => {
        setReviewContent(data, i);
        setInterval(() => nextReview(data), 5000);
    });

function setReviewContent(data, i) {
    document.getElementById("user-img").src = data[i].img;
    document.getElementById("user-name").textContent = data[i].name;
    document.getElementById("review-date").textContent = data[i].date;
    document.getElementById("review-text").textContent = data[i].review;

    // Llenar estrellas según la valoración
    for (let j = 0; j < data[i].valoration; j++) {
        document.getElementById("star" + j).src =
            "src/imagenes/iconos/star-svgrepo-com.svg";
    }
    // Vaciar las estrellas restantes
    for (let j = data[i].valoration; j < 5; j++) {
        document.getElementById("star" + j).src =
            "src/imagenes/iconos/star2-svgrepo-com.svg";
    }
}

function nextReview(data) {
    i++;
    if (i >= data.length) {
        i = 0;
    }
    setReviewContent(data, i);
}
