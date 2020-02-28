let datos = [
    { linea: "501", descripcion: "SANTA CLARA a SOMISA por TERM", tiempo: 2 },
    { linea: "501", descripcion: "SANTA CLARA a SOMISA por SAVIO", tiempo: 5 },
    { linea: "512", descripcion: "LOS FRESNOS a LA EMILIA", tiempo: 5 },
    { linea: "512", descripcion: "LOS FRESNOS a LA EMILIA", tiempo: 5 },
    { linea: "512", descripcion: "LOS FRESNOS a LA EMILIA", tiempo: 5 },
    { linea: "507", descripcion: "ARROYO DEL MEDIO a B IVBA", tiempo: 7 },
];

function CargarTabla() {
    let html = "";
    datos.map(d => {
        html += `
            <tr>
                <td>${d.linea}</td>
                <td>${d.descripcion}</td>
                <td>
                    <span class="numero">${d.tiempo}</span><span class="minutos">min</span>
                </td>
            </tr>
        `
    });

    document.getElementById("tabla").innerHTML = html;
}

CargarTabla();