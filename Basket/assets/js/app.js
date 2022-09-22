if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
}

function GetProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        let item = '';
        data.forEach(product => {
            item += `
            <div class="col-lg-4">
            <div id=${product.id} class="card">
              <img class="card-img-top" src=${product.image} alt="Card image cap">
              <div class="card-body">
                <h3 class="card-title">${product.title}</h3>
                <p>${product.price} AZN</p>
                <button class="btn btn-success btn_add"><i class="fa-solid fa-basket-shopping"></i> Add to cart</button>
              </div>
            </div>
          </div>
            `
        })
        document.getElementById('list').innerHTML = item
    })
    .catch(error => console.log(error))

    CountBasket()
}

GetProducts();
function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    if(basket.length === 0 ) {
        document.getElementById('count').style.display = 'none'
    }
}

CountBasket()

let btns = document.getElementsByClassName('btn_add');

setTimeout(() => {
    for(let btn of btns) {
        btn.onclick = function(e) {
            let basket = JSON.parse(localStorage.getItem('basket'))
            let id = e.target.parentElement.parentElement.id;
            let price = e.target.previousElementSibling.innerHTML;
            let title = e.target.parentElement.children[0].innerHTML;
            let image = e.target.parentElement.previousElementSibling.src;

            let existProd = basket.find(x => x.Id == id);

            if(existProd == undefined) {
                basket.push({
                    Id: id,
                    Name: title,
                    Price: price,
                    Image: image,
                    Count: 1
                })
            }
            localStorage.setItem('basket',JSON.stringify(basket));
            CountBasket();
        }
    }
}, 2000);

CountBasket()


