let modelMenu = document.getElementById('modelMenu');
let colorMenu = document.getElementById('colorMenu');
let designMenu = document.getElementById('designMenu');

let subModelMenu = document.getElementById('modelSub');
let subColorMenu = document.getElementById('colorSub');
let subDesignMenu = document.getElementById('designSub');

let modelIsOpen = false;
let colorIsOpen = false;
let designIsOpen = false;

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

let products = [{ photo: 'assets/images/cases/RedmiNote1.1', title: 'Xiaomi Redmi Note case', description: 'protection', compatibility: 'Xiaomi Redmi Note', price: 120, availability: 'available', color: 'red' },
    { photo: 'assets/images/cases/iphone121.1', title: 'iPhone 12 case', description: 'protection', compatibility: 'Iphone 12', price: 115, availability: 'not in stock', color: 'black' },
    { photo: 'assets/images/cases/iphone111.1', title: 'iPhone 11 case', description: 'case with pocket', compatibility: 'Iphone 11', price: 118, availability: 'available', color: 'green' },
    { photo: 'assets/images/cases/Samsung1.1', title: 'Samsung Galaxy S9 case', description: 'case-book', compatibility: 'Samsung Galaxy S9', price: 127, availability: 'available', color: 'black' },
    { photo: 'assets/images/cases/iphone112.1', title: 'iPhone 11 case', description: 'protection', compatibility: 'Iphone 11', price: 112, availability: 'available', color: 'transparent' },
    { photo: 'assets/images/cases/iphone113.1', title: 'iPhone 11 case', description: 'protection', compatibility: 'Iphone 11', price: 98, availability: 'not in stock', color: 'transparent' },
    { photo: 'assets/images/cases/Samsung2.1', title: 'Samsung Galaxy S9 case', description: 'case-book', compatibility: 'Samsung Galaxy S9', price: 121, availability: 'available', color: 'brown' },
    { photo: 'assets/images/cases/RedmiNote2.1', title: 'Xiaomi Redmi Note case', description: 'protection', compatibility: 'Xiaomi Redmi Note', price: 109, availability: 'available', color: 'transparent' },
    { photo: 'assets/images/cases/RedmiNote3.1', title: 'Xiaomi Redmi Note case', description: 'with pictures', compatibility: 'Xiaomi Redmi Note', price: 56, availability: 'available', color: 'black' },
    { photo: 'assets/images/cases/iphone114.1', title: 'iPhone 11 case', description: '', compatibility: 'Iphone 11', price: 83, availability: 'available', color: 'black' },
    { photo: 'assets/images/cases/iphone122.1', title: 'iPhone 12 case', description: 'protection', compatibility: 'Iphone 12', price: 76, availability: 'available', color: 'blue' },
    { photo: 'assets/images/cases/iphone123.1', title: 'iPhone 12 case', description: '', compatibility: 'Iphone 12', price: 93, availability: 'available', color: 'white' },
    { photo: 'assets/images/cases/RedmiNote4.1', title: 'Xiaomi Redmi Note case', description: 'case-book', compatibility: 'Xiaomi Redmi Note', price: 112, availability: 'available', color: 'black' },
    { photo: 'assets/images/cases/iphone115.1', title: 'iPhone 11 case', description: 'protection', compatibility: 'Iphone 11', price: 67, availability: 'available', color: 'black' },
    { photo: 'assets/images/cases/iphone124.1', title: 'iPhone 12 case', description: 'protection', compatibility: 'Iphone 12', price: 103, availability: 'not in stock', color: 'black' },
    { photo: 'assets/images/cases/Samsung3.1', title: 'Samsung Galaxy S9 case', description: '', compatibility: 'Samsung Galaxy S9', price: 157, availability: 'available', color: 'black' }
];