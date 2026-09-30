function enviardatos(event) {
    event.preventDefault();
    alert('¡Gracias por participar! Redirigiendo para reclamar tu premio...');
    sessionStorage.setItem('formularioEnviado', 'true');
    window.location.href = "cupones.html";
}