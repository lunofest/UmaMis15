// ------------------- AOS ----------------------

AOS.init();


// --------------------- music -------------------------

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.querySelector(".music__audio");
    const playButton = document.querySelector(".music__play");
    const pauseButton = document.querySelector(".music__pause");
    const rewindButton = document.querySelector(".music__rewind");
    const forwardButton = document.querySelector(".music__forward");

    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Ocultar el botón de play
        pauseButton.style.display = "block"; // Mostrar el botón de pausa
    });

    pauseButton.addEventListener("click", function () {
        audio.pause();
        pauseButton.style.display = "none"; // Ocultar el botón de pausa
        playButton.style.display = "block"; // Mostrar el botón de play
    });

    rewindButton.addEventListener("click", function () {
        audio.currentTime -= 10; // Rebobinar 10 segundos
    });

    forwardButton.addEventListener("click", function () {
        audio.currentTime += 10; // Adelantar 10 segundos
    });
});





// ---------------------- temporizador -------------------------
function updateTimer() {
    const targetDate = new Date("november 15, 2025 21:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);



// ------------------- fotos ----------------------

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 4,
        depth: 3,
        modifier: 50,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000, // Time between slides in milliseconds (e.g., 3 seconds)
        disableOnInteraction: false, // Set to true to stop autoplay on user interaction (e.g., dragging)
    },
    loop: true, // Enable infinite loop
});


// --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const recipientNumber1 = '542995961595'; // Número para el primer botón
    const recipientNumber2 = '542993266901'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const userName = document.getElementById('userFullName').value.trim();
        const userMessage = document.getElementById('customMessage').value.trim();
        const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');
  
        if (!attendanceStatus) {
            alert('Por favor, selecciona si asistirás o no.');
            return;
        }
  
        if (userName === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }
  
        const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userFullName').value = '';
        document.getElementById('customMessage').value = '';
        document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);
  
        // Volver al bloque de formulario
        document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('botoncito1').addEventListener('click', function() {
        sendMessage(recipientNumber1);
    });
  
    document.getElementById('botoncito2').addEventListener('click', function() {
        sendMessage(recipientNumber2);
    });
  });




  // --------------------------- dresscode-------------------------

const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function() {
  lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
  textoDesplegable.classList.toggle('oculto');
});







// ---------------- REGALOS --------------------

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.gift__regalos, .gift__regalos2');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const giftText = button.nextElementSibling;
            const otherTexts = document.querySelectorAll('.gift__text.open');

            // Cerrar otros elementos abiertos
            otherTexts.forEach(text => {
                if (text !== giftText) {
                    text.classList.remove('open');
                    text.style.maxHeight = null;
                    text.style.padding = "0";
                }
            });

            // Alternar el elemento actual
            giftText.classList.toggle('open');
            if (giftText.style.maxHeight) {
                giftText.style.maxHeight = null;
                giftText.style.padding = "0";
            } else {
                giftText.style.maxHeight = "300px";
                giftText.style.padding = ".5em 1em";
            }
        });
    });
});


// ------------------ whatsapp -----------------------

document.getElementById('musicForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombre = document.getElementById('nombre').value;
    const cancion = document.getElementById('cancion').value;
    const mensaje = `Hola, mi nombre es *${nombre}* y te recomiendo la canción: *${cancion}*.`;
    const telefono = '543816591298'; // Reemplaza esto con tu número de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');
  
    boton.addEventListener('click', function () {
      textoDesplegable.classList.toggle('mostrar');
    });
  });
  
  
  function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
  }
  
  
  
  function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');
  
    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
  }
  




// ----------------target-------------------------

document.addEventListener('DOMContentLoaded', () => {
    function scrollToHash() {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - (window.innerHeight / 2) + (element.offsetHeight / 2);

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    }

    window.addEventListener('hashchange', scrollToHash);
    scrollToHash(); // Para manejar el caso de cargar la página con un hash
});

