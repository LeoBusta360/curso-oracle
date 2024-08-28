document.addEventListener('DOMContentLoaded', () => {
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');
    const copiarBtn = document.getElementById('copiarBtn');
    const cajaCopiar = document.getElementById('cajaCopiar');
    const texto = document.getElementById('texto');
    const textoCopiado = document.getElementById('textoCopiado');
    const imagenDerecha = document.querySelector('.ImagenDerecha');
    const abajoImagenDerecha = document.querySelector('.AbajoImagenDerecha');

    function encriptarTexto(texto) {
        return texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    }

    function desencriptarTexto(texto) {
        return texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
    }

    function actualizarVista() {
        if (texto.value.trim() === '') {
            imagenDerecha.style.display = 'block';
            abajoImagenDerecha.style.display = 'block';
            cajaCopiar.style.display = 'none';
        } else {
            imagenDerecha.style.display = 'none';
            abajoImagenDerecha.style.display = 'none';
            cajaCopiar.style.display = 'flex';
        }
    }

    function mostrarResultado(texto) {
        textoCopiado.value = texto;
        actualizarVista();
    }

    encriptarBtn.addEventListener('click', () => {
        const textoEncriptado = encriptarTexto(texto.value);
        mostrarResultado(textoEncriptado);
    });

    desencriptarBtn.addEventListener('click', () => {
        const textoDesencriptado = desencriptarTexto(texto.value);
        mostrarResultado(textoDesencriptado);
    });

    copiarBtn.addEventListener('click', () => {
        textoCopiado.select();
        document.execCommand('copy');
    });

    // Actualizar vista inicial
    texto.addEventListener('input', actualizarVista);
});
