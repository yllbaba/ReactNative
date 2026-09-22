fetch("data.json")
    .then(response => response.json())
    .then(personat => {

        const container = document.getElementById("persons-container");

        personat.forEach(person => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <h2>${person.emri} ${person.mbiemri}</h2>

                <p><strong>ID:</strong> ${person.id}</p>
                <p><strong>Mosha:</strong> ${person.mosha} vjeç</p>
                <p><strong>Email:</strong> ${person.email}</p>
                <p><strong>Telefoni:</strong> ${person.telefoni}</p>
                <p><strong>Qyteti:</strong> ${person.qyteti}</p>
                <p><strong>Profesioni:</strong> ${person.profesioni}</p>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => {
        console.error("Gabim gjatë leximit të data.json:", error);
    });   