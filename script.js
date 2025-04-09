document.addEventListener("DOMContentLoaded", function () {
    const pages = ["salgados.html", "doces.html", "vegetarianos.html", "lanches.html"];
    const productContainer = document.getElementById("product-container");
    const searchBar = document.getElementById("search-bar");

    let allProducts = []; 

    
    function loadProducts() {
        productContainer.innerHTML = ""; 
        allProducts = []; 

        pages.forEach(page => {
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(data, "text/html");
                    let products = doc.querySelectorAll(".product");

                    products.forEach(product => {
                        let clonedProduct = product.cloneNode(true);
                        allProducts.push(clonedProduct); // Armazena os produtos originais
                        productContainer.appendChild(clonedProduct);
                    });
                })
                .catch(error => console.error("Erro ao carregar produtos:", error));
        });
    }

    
    function searchProducts() {
        let searchValue = searchBar.value.toLowerCase();

        
        productContainer.innerHTML = "";

        if (searchValue === "") {
            
            allProducts.forEach(product => productContainer.appendChild(product));
        } else {
            
            allProducts.forEach(product => {
                let title = product.querySelector("h2").textContent.toLowerCase();
                if (title.includes(searchValue)) {
                    productContainer.appendChild(product);
                }
            });
        }
    }

   
    searchBar.addEventListener("input", searchProducts);

   
    loadProducts();
});

//POP-UP CODE

//doces
const productDetails = {
    rosquinha: {
      title: "Rosquinha",
      ingredients: [
        "Farinha de trigo",
        "Açúcar",
        "Ovos",
        "Fermento",
        "Leite"
      ],
      lactose: true
    },

    muffins: {
        title: "Muffins  ",
        ingredients: [
          "Farinha de trigo",
          "Açúcar",
          "Ovos",
          "Fermento",
          "Leite",
          "Manteiga"
        ],
        lactose: true
      },

      palhaitaliana: {
        title: "Palha Italiana  ",
        ingredients: [
          "Chcoloate",
          "Açúcar",
          "Biscoito",
          
        ],
        lactose: true
      },

      tortasabores: {
        title: "Torta Sabores  ",
        ingredients: [
          "Biscoito",
          "Açúcar",
          "Manteiga",
          "Frutas",
          "Leite"
        ],
        lactose: true
      },


      bolosabores: {
        title: "Bolo Sabores  ",
        ingredients: [
          "Farinha de trigo",
          "Açúcar",
          "Ovos",
          "Fermento",
          "Leite"
        ],
        lactose: true
      },

      //salgados

      esfirra: {
        title: "Esfirra ",
        ingredients: [
          "Farinha de trigo",
          "Carne/Frango/Queijo",
          "Ovos",
          "Fermento",
          "Leite"
        ],
        lactose: true
      },

  folhado: {
        title: "Folhado  ",
        ingredients: [
          "Farinha de trigo",
          "Sal",
          "Ovos",
          "Leite"
        ],
        lactose: true
      },

      pastel: {
        title: "Pastel  ",
        ingredients: [
          "Farinha de trigo",
          "Carne/Frango/Queijo",
          "Ovos",
          "Fermento",
          "Leite"
        ],
        lactose: true
      },

      coxinha: {
        title: "Palha Itliana  ",
        ingredients: [
          "Farinha de trigo",
          "Frango",
          "Ovos",
          "Leite"
        ],
        lactose: true
      },

      palito: {
        title: "Paito de Queijo ",
        ingredients: [
          "Farinha",
          "Queijo",
        ],
        lactose: true
      },

      //lanches

      nuggets: {
        title: "Nuggets   ",
        ingredients: [
          "Farinha de trigo",
          "Frango",
          "Tempeiros",
          "Ovo",
          "Leite"
        ],
        lactose: true
      },

      hamburger: {
        title: "Hamburguer  ",
        ingredients: [
          "Alface",
          "Carne/Frango/Bancon",
          "Molhos",
          "Salada"
        ],
        lactose: true
      },

      shawarma: {
        title: "Shawarma ",
        ingredients: [
          "Massa Arábe",
          "Carne/Frango",
          "Salada",
          "Molhos",
        ],
        lactose: true
      },

      empadao: {
        title: "Empadão ",
        ingredients: [
          "Farinha de trigo",
          "Manteiga",
          "Frango",
          "Requeijão"
        ],
        lactose: true
      },

      misto: {
        title: "Misto Quente  ",
        ingredients: [
          "Pão",
          "Queijo",
          "Presunto",
          "Manteiga"
        ],
        lactose: true
      },
//vegetariano

  hamburgerveg: {
        title: "Hamburguer Vegano  ",
        ingredients: [
          "Pão ",
          "Salada",
          "Proteína de soja",
          "Tofu",
          "Molhos"
        ],
        lactose:false
      },

      jaca: {
        title: "Coxinha de Jaca  ",
        ingredients: [
          "Farinha de trigo",
          "Cebola",
          "Alho",
          "Temperos",
        ],
        lactose: false
      },

      nuggetsveg: {
        title: "Nuggets  ",
        ingredients: [
          "Farinha de trigo",
          "Cenoura",
          "Cebola",
          "Milho",
          "Fariha de Rosca"
        ],
        lactose: false
      },

     grao: {
        title: "Bowl de grãos ",
        ingredients: [
          "Grão de Bico",
          "Legumes",
          "Tofu",
          "Sementes/Ervas",
          "Temperos"
        ],
        lactose: false
      },

      quiche: {
        title: "Quiche  ",
        ingredients: [
          "Farinha de trigo",
          "Congumelo",
          "Carne vegetal",
          "Pimentao",
          "Tempeiros"
        ],
        lactose: false
      },

  };


  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("product-modal");
    const title = document.getElementById("modal-title");
    const ingredientsList = document.getElementById("modal-ingredients");
    const lactoseInfo = document.getElementById("modal-lactose");
    const closeBtn = document.querySelector(".close-button");
  
    document.querySelectorAll(".product-image").forEach(img => {
      img.addEventListener("click", () => {
        const id = img.getAttribute("data-product-id");
        const product = productDetails[id];
        if (product) {
          title.textContent = product.title;
  
          ingredientsList.innerHTML = "";
          product.ingredients.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ingredientsList.appendChild(li);
          });
  
          lactoseInfo.innerHTML = product.lactose
            ? "🥛 Contém lactose"
            : " ❌ Sem lactose";
  
          modal.style.display = "flex";
        }
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });











