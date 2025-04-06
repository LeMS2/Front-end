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








