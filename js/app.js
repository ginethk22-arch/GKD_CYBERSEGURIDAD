document.addEventListener('DOMContentLoaded', () => {
  console.log('Ya cargo');

  const form = document.querySelector('.formulario-footer form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por dejar tu correo, pronto te contactaremos.');
  });
});