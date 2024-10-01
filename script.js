document.addEventListener("DOMContentLoaded", function(ev)
{
    ev.preventDefault();
    document.querySelector("#form-products").addEventListener("click", ev => 
    {
        ev.preventDefault();
        let lista = document.querySelector("#lista-produtos");

        let newItem = document.createElement("li");
        let newItem2 = document.createElement("li");

        let nomeProduto = document.getElementById("product-name").value;
        let valorProduto = document.getElementById("product-value").value;

        newItem.innerText = nomeProduto;
        newItem2.innerText = valorProduto;

        newItem.classList.add("itemNameProduct");
        newItem2.classList.add("itemValorProduct");

        if(lista.childElementCount <= 0)
        {

            lista.appendChild(newItem);
            lista2.appendChild(newItem);
        }

        
    }
    )
}
)