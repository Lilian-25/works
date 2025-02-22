function jugar() {
  // Función para generar un número aleatorio entre 1 y 9
  const numeroComputadora = Math.floor(Math.random() * 9) + 1;

  // Función para solicitar un número al usuario entre 3 y 6
  let numeroUsuario;
  do {
    numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
  } while (numeroUsuario < 3 || numeroUsuario > 6);

  // Función para pedir al usuario adivinar si el número es mayor, menor o igual
  const adivinanza = prompt("¿Es su número mayor, menor o igual al número de la computadora? Responda 'mayor', 'menor' o 'igual'").toLowerCase();

  // Comparar los números y mostrar el resultado
  let mensaje;
  if (adivinanza === "mayor") {
    if (numeroUsuario > numeroComputadora) {
      mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es mayor ¡Ha adivinado!`;
    } else {
      mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es mayor, pero no ha adivinado.`;
    }
  } else if (adivinanza === "menor") {
    if (numeroUsuario < numeroComputadora) {
      mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es menor ¡Ha adivinado!`;
    } else {
      mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es menor, pero no ha adivinado.`;
    }
  } else if (adivinanza === "igual") {
    if (numeroUsuario === numeroComputadora) {
      mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es igual ¡Ha adivinado!`;
    } else {
      mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es igual, pero no ha adivinado.`;
    }
  }

  // Mostrar el mensaje al usuario
  alert(mensaje);

  // Preguntar si el usuario quiere jugar de nuevo
  const jugarDeNuevo = prompt("¿Quieres jugar otra vez? (Sí/No)").toLowerCase();
  if (jugarDeNuevo === "sí") {
    jugar(); // Llamar la función nuevamente si el usuario quiere jugar
  } else {
    // Si el usuario elige no jugar más, mostrar mensaje final con nombre y número de carnet
    alert("Gracias por jugar. ¡Hasta la próxima!\n\nNombre: Lilian Adalinda González Corazón\nNúmero de Carnet: 25004940");
  }
}

// Iniciar el juego
jugar();
