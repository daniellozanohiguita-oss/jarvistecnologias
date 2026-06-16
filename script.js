// Mensaje de bienvenida en consola para verificar funcionamiento
console.log("JARVIS TECNOLOGIAS - Sitio web cargado correctamente.");

// Animación simple al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Asegura un comportamiento limpio al desplazarse
        const targetId = this.getAttribute('href');
        if(targetId.startsWith('#')) {
            console.log(`Navegando a la sección: ${targetId}`);
        }
    });
});
