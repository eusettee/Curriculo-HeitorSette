// Upload da imagem de perfil
document.getElementById('input-foto').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('imagem-perfil').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
