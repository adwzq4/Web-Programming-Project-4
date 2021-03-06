function requestAddToCart(ele) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            ele.innerHTML = this.responseText;
            ele.classList.add("valid");
            ele.disabled = true;
            setTimeout(() => {
                ele.innerHTML = "Add to cart";
                ele.disabled = false;
                ele.classList.remove("valid");
            }, 2000);
        }
        if(this.status >= 400) {
            ele.innerHTML = "Could not add to cart";
            ele.classList.add("error");
            setTimeout(() => {
                ele.innerHTML = "Add to cart";
                ele.classList.remove("error");
                ele.disabled = false;
            }, 2000);
        }
    };
    xmlhttp.open("GET", "addToCart.php?bike=" + ele.name, true);
    xmlhttp.send();
}