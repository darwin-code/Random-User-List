document.addEventListener('DOMContentLoaded', function() {
    // mostramos datos de la API
    fetch('https://randomuser.me/api/?results=13')
        .then(response => response.json())
        .then(data => {
            let personas = data.results;
            let tbody = document.querySelector('#personas tbody');

            // se recorre cada persona y agregamos una fila en la tabla
            personas.forEach(persona => {
                let fila = document.createElement('tr');
                //muestro los datos de genero o masculio o femenino ya traducido
                let genero = persona.gender === 'male' ? 'Masculino' : 'Femenino';

                // crear y agregar las celdas de cada persona
                fila.innerHTML = `
                    <td>${persona.name.first} ${persona.name.last}</td>
                    <td>${genero}</td>
                    <td>${persona.email}</td>
                    <td>${persona.location.country}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});