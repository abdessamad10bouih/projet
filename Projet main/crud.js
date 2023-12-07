let data = [
    {id: 1, name: "Abdessamad Bouih", email: "abdessamad.bouih@gmail.com"},
    {id: 1, name: "Abderrahmane Boulmane", email: "abderrahmane.boulmane@gmail.com"},
]

function readALL() {
    var tbdata = document.querySelector(".table-data")
    var elements = "";
    data.map(d => (
        elements += <tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.password}</td>
            <td>${d.commande}</td>
            <td>
                <button>Update</button>
                <button>Delete</button>
            </td>
        </tr>
    ))
    .tbdata.innerHTML = elements;
} 

