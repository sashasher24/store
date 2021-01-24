const PRODUCTSPERPAGE = 6;

let modelMenu = document.getElementById('modelMenu');
let colorMenu = document.getElementById('colorMenu');
let designMenu = document.getElementById('designMenu');

let subModelMenu = document.getElementById('modelSub');
let subColorMenu = document.getElementById('colorSub');
let subDesignMenu = document.getElementById('designSub');

let modelIsOpen = false;
let colorIsOpen = false;
let designIsOpen = false;

//left submenu
modelMenu.addEventListener('click', function() {
    if (modelIsOpen) {
        subModelMenu.style.display = 'none';
        modelIsOpen = false;
    } else {
        subModelMenu.style.display = 'block';
        modelIsOpen = true;
    }
});

colorMenu.addEventListener('click', function() {
    if (colorIsOpen) {
        subColorMenu.style.display = 'none';
        colorIsOpen = false;
    } else {
        subColorMenu.style.display = 'block';
        colorIsOpen = true;
    }
});

designMenu.addEventListener('click', function() {
    if (designIsOpen) {
        subDesignMenu.style.display = 'none';
        designIsOpen = false;
    } else {
        subDesignMenu.style.display = 'block';
        designIsOpen = true;
    }
});

let productsArray = [{ id: 'redmi1', photo: 'RedmiNote1.1.jpg', title: 'Xiaomi Redmi Note waterproof case', description: 'protect', compatibility: 'redmi', price: 120, availability: 'available', color: 'red' },
    { id: 'iphone121', photo: 'iphone121.1.jpg', title: 'iPhone 12 transparent black case', description: 'protect', compatibility: 'iphone12', price: 115, availability: 'not in stock', color: 'black' },
    { id: 'iphone111', photo: 'iphone111.1.jpg', title: 'iPhone 11 green case', description: 'pocket', compatibility: 'iphone11', price: 118, availability: 'available', color: 'green' },
    { id: 'samsung1', photo: 'Samsung1.1.jpg', title: 'Samsung Galaxy S9 mirror case', description: 'book', compatibility: 'galaxys9', price: 127, availability: 'available', color: 'black' },
    { id: 'iphone112', photo: 'iphone112.1.jpg', title: 'iPhone 11 border case', description: 'protect', compatibility: 'iphone11', price: 112, availability: 'available', color: 'transparent' },
    { id: 'iphone113', photo: 'iphone113.1.jpg', title: 'iPhone 11 transparent case', description: 'protect', compatibility: 'iphone11', price: 98, availability: 'not in stock', color: 'transparent' },
    { id: 'samsung2', photo: 'Samsung2.1.jpg', title: 'Samsung Galaxy S9 brown book-case', description: 'book', compatibility: 'galaxys9', price: 121, availability: 'available', color: 'brown' },
    { id: 'redmi2', photo: 'RedmiNote2.1.jpg', title: 'Xiaomi Redmi Note rainbow case', description: 'protect', compatibility: 'redmi', price: 109, availability: 'available', color: 'transparent' },
    { id: 'redmi3', photo: 'RedmiNote3.1.jpg', title: 'Xiaomi Redmi Note dogs case', description: 'pics', compatibility: 'redmi', price: 56, availability: 'available', color: 'black' },
    { id: 'iphone114', photo: 'iphone114.1.jpg', title: 'iPhone 11 new border case', description: '', compatibility: 'iphone11', price: 83, availability: 'available', color: 'black' },
    { id: 'iphone122', photo: 'iphone122.1.jpg', title: 'iPhone 12 classic case', description: 'protect', compatibility: 'iphone12', price: 76, availability: 'available', color: 'blue' },
    { id: 'iphone123', photo: 'iphone123.1.jpg', title: 'iPhone 12 white case', description: '', compatibility: 'iphone12', price: 93, availability: 'available', color: 'white' },
    { id: 'redmi4', photo: 'RedmiNote4.1.jpg', title: 'Xiaomi Redmi Note book-case', description: 'book', compatibility: 'redmi', price: 112, availability: 'available', color: 'black' },
    { id: 'iphone115', photo: 'iphone115.1.jpg', title: 'iPhone 11 protection case', description: 'protect', compatibility: 'iphone11', price: 67, availability: 'available', color: 'black' },
    { id: 'iphone124', photo: 'iphone124.1.jpg', title: 'iPhone 12 border case', description: 'protect', compatibility: 'iphone12', price: 103, availability: 'not in stock', color: 'black' },
    { id: 'samsung3', photo: 'Samsung3.1.jpg', title: 'Samsung Galaxy S9 galant case', description: '', compatibility: 'galaxys9', price: 157, availability: 'available', color: 'black' }
];

let localI;
if (!localStorage.length) localI = 0;
else localI = localStorage.length / 2;

//display products
function ProductPreview(product) {
    this.element = document.createElement('div');
    this.element.className = 'product';
    this.element.style.display = 'none';

    this.productPicture = document.createElement('img');
    this.productPicture.setAttribute('src', `assets/images/cases/${product.photo}`);
    this.productPicture.setAttribute('class', 'productPicture');
    this.productName = document.createElement('h3');
    this.productName.textContent = product.title;
    this.productName.setAttribute('class', 'productName');
    this.productPrice = document.createElement('p');
    this.productPrice.textContent = `${product.price} uah`;
    this.productPrice.setAttribute('class', 'productPrice');

    if (product.availability == 'available') {
        this.productStock = document.createElement('button');
        this.productStock.textContent = 'Add to Cart';
        this.productStock.setAttribute('class', 'addButton');
        this.productStock.addEventListener('click', function() {

            console.log(`storage length is ${localStorage.length}`);

            if (localStorage.length < 1) {
                localStorage.setItem(`count${localI}`, 1);
                localStorage.setItem(`product${localI}`, product.title);
                localI++;
            } else {
                let alreadyPresent;
                for (let i = 0; i < localStorage.length / 2; i++) {
                    if (localStorage.getItem(`product${i}`) == product.title) {
                        localStorage.setItem(`count${i}`, Number(localStorage.getItem(`count${i}`)) + 1);
                        alreadyPresent = true;
                        break;
                    } else alreadyPresent = false;
                }

                if (!alreadyPresent) {
                    localStorage.setItem(`count${localI}`, 1);
                    localStorage.setItem(`product${localI}`, product.title);
                    localI++;
                }
            }
            displayCart()
        });
    } else {
        this.productStock = document.createElement('p');
        this.productStock.textContent = 'Not In Stock';
        this.productStock.setAttribute('class', 'notinstock');
    }

    this.element.append(this.productPicture);
    this.element.append(this.productName);
    this.element.append(this.productPrice);
    this.element.append(this.productStock);
}


let clearCart = document.getElementById('clearCart');
clearCart.addEventListener('click', function() {
    localStorage.clear();
    localI = 0;
    displayCart();
});

function displayCart() {
    let carItems = document.getElementById('cartItems');
    // setLocalStorage();

    if (localStorage.length) {
        carItems.textContent = '';
        for (let i = 0; i < localStorage.length / 2; i++) {
            carItems.innerHTML += `${localStorage.getItem(`count${i}`)} x ${localStorage.getItem(`product${i}`)}<br>`;    
        }
    } else {
        carItems.innerHTML = `your cart is empty :(<br>Go buy something`;
    }
}
displayCart();


ProductPreview.prototype = {
    getProduct: function() {
        return this.element;
    }
}

function ProductsListView(products) {
    this.products = products;
}

ProductsListView.prototype = {
    renderProducts: function(container) {
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'productsContainer');
        this.products = products;
        let wrap = document.createDocumentFragment();

        Array.prototype.forEach.call(products.getProducts(), function(product) {
            let productPreview = new ProductPreview(product);
            wrap.append(productPreview.getProduct());
        });

        this.container.append(wrap);
        container.append(this.container);
    }
}

function ProductsList(products) {
    this.products = products;
}

ProductsList.prototype = {
    getProducts: function() {
        return this.products;
    }
}

let products;
let productsList;

function showProducts(productsArr) {
    products = new ProductsList(productsArr);
    productsList = new ProductsListView(products);
    productsList.renderProducts(document.querySelector('#products'));
}
showProducts(productsArray);

function deleteProducts() {
    let products = document.querySelector('#products');
    products.innerHTML = '';
}

//filters
let models = document.getElementsByClassName('modelChoice');
let colors = document.getElementsByClassName('colorChoice');
let design = document.getElementsByClassName('designChoice');

let filter = document.getElementById('filter');
filter.addEventListener('click', function() {
    filterProducts();
});

function filterProducts() {
    let filteredProducts = [];

    let models = filterModels();
    let colors = filterColor();
    let designs = filterDesign();

    // if (colors.length > 0 || designs.length > 0) {
    //     filteredProducts = filteredProducts.concat(colors, designs, models);
    // } else {
    //     filteredProducts = models;
    // }

    if (models.length > 0) {
        filteredProducts = filteredProducts.concat(colors, designs, models);
    } else {
        filteredProducts = filteredProducts.concat(colors, designs);
    }

    filteredProducts = filteredProducts.filter((value, index) => filteredProducts.indexOf(value) === index);

    if (filteredProducts.length < 1) {
        deleteProducts();
        let pages = document.getElementById('pages');
        pages.innerHTML = '';
        document.querySelector('#products').innerHTML = 'Sorry, there are no products tat match your filters at the moment';
    } else {
        deleteProducts();
        showProducts(filteredProducts);
        displayProducts();
        let pages = document.getElementById('pages');
        pages.innerHTML = '';
        displayPages();
        pagesClicks();
        if (document.getElementById('leftArrow') && document.getElementById('rightArrow'))
            arrowClicks();
    }
}

function filterModels() {
    let filteredModels = [];

    for (let i = 0; i < models.length; i++) {
        if (models[i].checked)
            filteredModels = filteredModels.concat(productsArray.filter(product => product.compatibility == models[i].id));
    }

    return filteredModels;
}

function filterColor() {
    let arrayToFilter;
    if (filterModels().length > 0)
        arrayToFilter = filterModels();
    else {
        arrayToFilter = [];
        arrayToFilter = arrayToFilter.concat(productsArray);
    }

    let filteredColors = [];

    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked)
            filteredColors = filteredColors.concat(arrayToFilter.filter(product => product.color == colors[i].id));
    }

    return filteredColors;
}

function filterDesign() {
    let arrayToFilter;
    if (filterModels().length > 0)
        arrayToFilter = filterModels();
    else {
        arrayToFilter = [];
        arrayToFilter = arrayToFilter.concat(productsArray);
    }

    let filteredDesigns = [];

    for (let i = 0; i < design.length; i++) {
        if (design[i].checked)
            filteredDesigns = filteredDesigns.concat(arrayToFilter.filter(product => product.description == design[i].id));
    }

    return filteredDesigns;
}

let filters = document.getElementsByClassName('filterOption');
let resetButton = document.getElementById('resetFilters');

resetButton.addEventListener('click', function() {
    sort.innerHTML = 'Sort by price';

    for (let i = 0; i < filters.length; i++) {
        filters[i].checked = false;
    }

    deleteProducts();
    showProducts(productsArray);
    displayProducts();
    let pages = document.getElementById('pages');
    pages.innerHTML = '';
    displayPages();
    pagesClicks();
    if (document.getElementById('leftArrow') && document.getElementById('rightArrow'))
        arrowClicks();
})


//sorting
let sort = document.getElementById('sort');
let sortedAscending = false;

function sortAscending() {
    sortedAscending = true;

    let sortedArray = [];
    sortedArray = sortedArray.concat(productsArray);
    sortedArray = sortedArray.sort(function(a, b) {
        return a.price - b.price;
    });

    sort.innerHTML = 'Sort by price (Sorted by Ascending)';

    deleteProducts();
    showProducts(sortedArray);
    displayProducts();
    let pages = document.getElementById('pages');
    pages.innerHTML = '';
    displayPages();
    pagesClicks();
    if (document.getElementById('leftArrow') && document.getElementById('rightArrow'))
        arrowClicks();
}

function sortDescending() {
    sortedAscending = false;

    let sortedArray = [];
    sortedArray = sortedArray.concat(productsArray);
    sortedArray = sortedArray.sort(function(a, b) {
        return b.price - a.price;
    });

    sort.innerHTML = 'Sort by price (Sorted by Descending)';

    deleteProducts();
    showProducts(sortedArray);
    displayProducts();
    let pages = document.getElementById('pages');
    pages.innerHTML = '';
    displayPages();
    pagesClicks();
    if (document.getElementById('leftArrow') && document.getElementById('rightArrow'))
        arrowClicks();
}

sort.addEventListener('click', function() {
    if (sortedAscending == false) {
        sortAscending();
    } else {
        sortDescending();
    }
});



//pages
let currentPage = 1;

function displayPages() {
    let displayedProducts = document.getElementsByClassName('product');
    let pages = document.getElementById('pages');
    let numberOfProducts = displayedProducts.length;

    let i = 1;
    while (numberOfProducts > 0) {
        let span = document.createElement('span');
        span.setAttribute('id', `page${i}`);
        span.setAttribute('class', `prodPage`);
        span.textContent = i;
        pages.appendChild(span);
        numberOfProducts -= PRODUCTSPERPAGE;
        i++;
    }

    if (i - 1 > 1) {
        let leftArrow = document.createElement('span');
        leftArrow.textContent = '<';
        leftArrow.setAttribute('class', 'pageArrow');
        leftArrow.setAttribute('id', 'leftArrow');

        let rightArrow = document.createElement('span');
        rightArrow.textContent = '>';
        rightArrow.setAttribute('class', 'pageArrow');
        rightArrow.setAttribute('id', 'rightArrow');

        pages.insertBefore(leftArrow, pages.childNodes[0]);
        pages.appendChild(rightArrow);
    }
}
displayPages();

let displayedProducts = document.getElementsByClassName('product');

function displayProducts(page = 1) {
    let n = PRODUCTSPERPAGE * (page - 1);

    for (let i = 0; i < PRODUCTSPERPAGE && i + n < displayedProducts.length; i++) {
        displayedProducts[i + n].style.display = 'block';
    }
    if (page == 1) {
        for (let i = PRODUCTSPERPAGE; i < displayedProducts.length; i++) {
            displayedProducts[i].style.display = 'none';
        }
    } else if (page > 1) {
        for (let i = 0; i < n; i++) {
            displayedProducts[i].style.display = 'none';
        }
        for (let i = n + PRODUCTSPERPAGE; i < displayedProducts.length; i++) {
            displayedProducts[i].style.display = 'none';
        }
    }

};
displayProducts();

function pagesColor() {
    let pageButtons = document.getElementsByClassName('prodPage');
    Array.prototype.forEach.call(pageButtons, page => {
        page.style.color = 'black';
    });
}

function colorPage() {
    let pageButtons = document.getElementsByClassName('prodPage');

    Array.prototype.forEach.call(pageButtons, page => {
        if (page.textContent == currentPage) {
            page.style.color = 'rgb(252, 185, 86)';
        }
    });
}

function pagesClicks() {
    let pageButtons = document.getElementsByClassName('prodPage');
    Array.prototype.forEach.call(pageButtons, page => {
        page.addEventListener('click', function() {
            displayProducts(event.target.textContent);
            currentPage = Number(event.target.textContent);
            pagesColor();
            event.target.style.color = 'rgb(252, 185, 86)';
        })
    });
}
pagesClicks();

function arrowClicks() {
    let displayedProducts = document.getElementsByClassName('product');
    let leftArrow = document.getElementById('leftArrow');
    let rightArrow = document.getElementById('rightArrow');

    leftArrow.addEventListener('click', function() {
        if (currentPage > 1) {
            displayProducts(Number(currentPage) - 1);
            currentPage -= 1;
            pagesColor();
            colorPage();
        }
    });

    rightArrow.addEventListener('click', function() {
        if (currentPage <= displayedProducts.length / PRODUCTSPERPAGE) {
            displayProducts(Number(currentPage) + 1);
            currentPage += 1;
            pagesColor();
            colorPage();
        }
    });
}
arrowClicks();