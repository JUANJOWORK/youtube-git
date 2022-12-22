let tbody = document.getElementById("bodyTabla");

fetch("https://api.datos.gob.mx/v1/calidadAire")
    .then(response => response.json())
    .then(data => {

        let datos = data['results'];
        datos.forEach(i => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            td1.textContent = i['stations'][0].id
            td2.textContent = i['stations'][0].name;
            td3.textContent = i['stations'][0]['indexes'][0].value;
            td4.textContent = i['stations'][0]['indexes'][0].scale;
            tbody.appendChild(tr);


        })
    });


let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", () => {
    // Obtener el valor del input y convertirlo a minúsculas
    let searchValue = document.querySelector("#search-input").value.toLowerCase();

    // Filtrar las filas de la tabla que coincidan con el valor de búsqueda
    let rows = Array.from(tbody.querySelectorAll("tr"));
    let filteredRows = rows.filter(row => row.innerText.toLowerCase().includes(searchValue));

    // Ocultar todas las filas de la tabla
    rows.forEach(row => row.style.display = "none");

    // Mostrar las filas filtradas
    filteredRows.forEach(row => row.style.display = "table-row");
})

let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    // Limpiar el valor del input
    document.querySelector("#search-input").value = "";
    // Mostrar todas las filas de la tabla
    let rows = Array.from(tbody.querySelectorAll("tr"));
    rows.forEach(row => row.style.display = "table-row");
});
