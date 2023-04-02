function mostrarGato() {
    // URL da API de imagens de gatos
    var url = "https://api.thecatapi.com/v1/images/search";
  
    // Faz uma requisição GET para a API
    fetch(url)
      .then(function(response) {
        // Transforma a resposta em um objeto JSON
        return response.json();
      })
      .then(function(data) {
        // Obtém a URL da imagem
        var imagemUrl = data[0].url;
  
        // Cria um elemento de imagem e atribui a URL
        var imagem = document.createElement("img");
        imagem.src = imagemUrl;
  
        // Adiciona a imagem à página
        var imagemContainer = document.getElementById("imagem-gato");
        imagemContainer.innerHTML = "";
        imagemContainer.appendChild(imagem);
      })
      .catch(function(error) {
        // Exibe um alerta caso ocorra um erro
        alert("Erro ao carregar a imagem: " + error.message);
      });
  }  