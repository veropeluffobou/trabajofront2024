document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const cardText = card.querySelector('.card-text');
        const btnToggle = card.querySelector('.btn-toggle');
        
        btnToggle.addEventListener('click', () => {
            card.classList.toggle('expanded');
            btnToggle.textContent = card.classList.contains('expanded') ? 'Leer menos' : 'Leer más';
        });
    });
});

/*
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente!');
});
*/
function validateForm() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    var direccion = document.getElementById("direccion").value;

    // Validar que todos los campos estén completos
    if (nombre == "" || mail == "" || telefono == "" || mensaje == "" || direccion == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validar el formato del mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Validar que el nombre tenga al menos 3 caracteres
    if (nombre.length < 3) {
        alert("Por favor, ingrese un nombre válido (mínimo 3 caracteres).");
        return false;
    }

    // Validar que el teléfono sea un número
    if (isNaN(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido.");
        return false;
    }

    // Si pasa todas las validaciones, enviar el formulario
    alert("Formulario enviado correctamente!!!");
    return true;
}