document.addEventListener("DOMContentLoaded", function(ev)
{
    ev.preventDefault();
const openPopupBtn = document.getElementById('openPopupBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close');
const formPagina = document.querySelector('#form-products');
const elementFormPopUp = document.querySelector('#popupForm-id');
let produtos = [];




    document.querySelector("#submitButton").addEventListener("click", ev => 
    {
        ev.preventDefault();
        if(formPagina.checkValidity() )
        {
            
           
            let nomeProduto = document.getElementById("product-name").value;
            let valorProduto = parseFloat(document.getElementById("product-value").value); 
            if (nomeProduto && !isNaN(valorProduto)) {
                
                produtos.push({ nome: nomeProduto, valor: valorProduto });

                
                ordenarEAtualizarLista();
            } 
        
        }
        else
        {
            if(!formPagina.checkValidity())
            {
                formPagina.reportValidity();
            }
        }
        
    }
    )

    document.querySelector("#submitButtonPopup").addEventListener("click", function(ev) {
        ev.preventDefault(); 

        document.getElementById("form-products").reset();

        if(formPagina.checkValidity() || elementFormPopUp.checkValidity())
        {
            let nomeProduto = document.getElementById("popup-product-name").value;
            let valorProduto = parseFloat(document.getElementById("popup-product-value").value); 
          
            produtos.push({ nome: nomeProduto, valor: valorProduto });

         
            ordenarEAtualizarLista();

            elementFormPopUp.reset();
            popupForm.style.display = 'none'; 
        } else {
            elementFormPopUp.reportValidity();
        }
    });

    function ordenarEAtualizarLista() {
        
        produtos.sort((a, b) => a.valor - b.valor);
    
       
        let listaNomeProduto = document.querySelector("#lista-nome-id");
        let listaValorProduto = document.querySelector("#lista-valor-id");
        listaNomeProduto.innerHTML = '';
        listaValorProduto.innerHTML = '';
        
        produtos.forEach(produto => {
            let newItemNome = document.createElement("li");
            let newItem2Valor = document.createElement("li");
    
            newItemNome.innerText = produto.nome;
            newItem2Valor.innerText = produto.valor;
            console.log(produto.nome);
            console.log(produto.valor)
    
            newItemNome.classList.add("itemNameProduct");
            newItem2Valor.classList.add("itemValorProduct");
    
            listaNomeProduto.appendChild(newItemNome);
            listaValorProduto.appendChild(newItem2Valor);
        });
    }


 


openPopupBtn.addEventListener('click', function() {
    document.getElementById("form-products").reset();
    popupForm.style.display = 'flex';
});


closeBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
    elementFormPopUp.reset();
});


window.addEventListener('click', function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = 'none';
        elementFormPopUp.reset();
    }
});
}
)
