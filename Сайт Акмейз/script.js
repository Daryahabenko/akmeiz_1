let img = document.getElementById('img');
let indicator = document.getElementById('indicator');
let num = 0;
let arr_img = [
    {
        'src':'images/banner_1.png',
        'alt': 'картинка1'
    },
    {
        'src': 'images/banner_2.png',
        'alt': 'картинка2'
    },
    {
        'src': 'images/banner_3.png',
        'alt': 'картинка3'
    }
];

let getIndicator = () => {
    indicator.innerHTML = '';
    arr_img.forEach(function(item, index, array) {
        let indic_img = document.createElement('img');
        if (index == num) {
            indic_img.src = 'images/indicator_1.png'
        } else {
            indic_img.src = 'images/indicator_2.png'
        }
        indic_img.classList.add('indicatorimg');
        indicator.appendChild(indic_img);
    });
}


let startSlider = () => {
    if (num > arr_img.length - 1) {
        num = 0;
    }
    img.alt = arr_img[num].alt;
    img.src = arr_img[num].src;
    getIndicator();
    num++;
}

startSlider();

setInterval(startSlider, 4000);
    