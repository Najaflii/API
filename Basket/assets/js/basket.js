function GetItemsfromBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);    
    let item = '';

    basket.forEach(x => {
        item += `
        <div class="basket-box col-lg-7 d-flex align-items-center justify-content-between">
            <img src=${x.Image} alt="">
            <h6>${x.Name}</h6>
            <input type="number" value=${x.Count}>
            <p>${x.Price}</p>
        </div>
        `
    })
    document.getElementById('basket-list').innerHTML = item
}

GetItemsfromBasket();
CountBasket()