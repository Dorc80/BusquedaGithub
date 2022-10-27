document.querySelector('#github').addEventListener('click', function() {
    obtenerNombre().then((data) => {
        console.log(data);
        document.querySelector('#name').innerText = data.name}
    );
});

function obtenerNombre() {
    return new Promise((success, reject) => {
        $.get('https://api.github.com/users/Dorc80', success);
    });
}