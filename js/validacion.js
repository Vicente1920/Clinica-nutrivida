// validacion.js
// Valida el formulario de agendamiento de citas (agendar.html).
// No hay backend: se valida en el navegador y se simula el envío.

const formulario = document.querySelector('#form-agendar');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.querySelector('#nombre');
  const correo = document.querySelector('#correo');
  const telefono = document.querySelector('#telefono');
  const nutricionista = document.querySelector('#nutricionista');
  const servicio = document.querySelector('#servicio');
  const fecha = document.querySelector('#fecha');
  const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');

  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patronTelefono = /^\+?\d[\d\s]{7,14}$/;
  let formularioValido = true;

  mensajeConfirmacion.textContent = '';

  // Nombre: no puede estar vacío
  if (nombre.value.trim() === '') {
    nombre.classList.add('campo-error');
    document.querySelector('#error-nombre').textContent = 'Ingresa tu nombre completo.';
    formularioValido = false;
  } else {
    nombre.classList.remove('campo-error');
    document.querySelector('#error-nombre').textContent = '';
  }

  // Correo: debe tener formato válido
  if (!patronCorreo.test(correo.value.trim())) {
    correo.classList.add('campo-error');
    document.querySelector('#error-correo').textContent = 'Ingresa un correo válido. Ej: nombre@correo.com';
    formularioValido = false;
  } else {
    correo.classList.remove('campo-error');
    document.querySelector('#error-correo').textContent = '';
  }

  // Teléfono: solo números, con largo razonable
  if (!patronTelefono.test(telefono.value.trim())) {
    telefono.classList.add('campo-error');
    document.querySelector('#error-telefono').textContent = 'Ingresa un teléfono válido. Ej: +56912345678';
    formularioValido = false;
  } else {
    telefono.classList.remove('campo-error');
    document.querySelector('#error-telefono').textContent = '';
  }

  // Nutricionista: debe elegir una opción
  if (nutricionista.value === '') {
    nutricionista.classList.add('campo-error');
    document.querySelector('#error-nutricionista').textContent = 'Selecciona un nutricionista.';
    formularioValido = false;
  } else {
    nutricionista.classList.remove('campo-error');
    document.querySelector('#error-nutricionista').textContent = '';
  }

  // Servicio: debe elegir una opción
  if (servicio.value === '') {
    servicio.classList.add('campo-error');
    document.querySelector('#error-servicio').textContent = 'Selecciona el motivo de tu consulta.';
    formularioValido = false;
  } else {
    servicio.classList.remove('campo-error');
    document.querySelector('#error-servicio').textContent = '';
  }

  // Fecha: no puede estar vacía ni ser anterior a hoy
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const fechaElegida = new Date(fecha.value + 'T00:00:00');

  if (fecha.value === '' || fechaElegida < hoy) {
    fecha.classList.add('campo-error');
    document.querySelector('#error-fecha').textContent = 'Elige una fecha válida, no anterior a hoy.';
    formularioValido = false;
  } else {
    fecha.classList.remove('campo-error');
    document.querySelector('#error-fecha').textContent = '';
  }

  if (formularioValido) {
    mensajeConfirmacion.textContent = 'Tu solicitud de cita fue registrada correctamente.';
    formulario.reset();
  }
});
