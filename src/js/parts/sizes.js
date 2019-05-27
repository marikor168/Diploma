let sizes = () => {
    let sizesWrapper = document.querySelector('.sizes-wrapper'),
        sizesBlock = document.querySelectorAll('.sizes-block'),
        imgBlock = document.querySelectorAll('.sizes-block img');

    // sizesBlock[0].addEventListener('mouseover', () => {
    //     sizesBlock[0].innerHTML = "<img class=size-1 src=img/sizes-1-1.png alt>";    
    // });

    console.log(imgBlock);
    


    // for (let i = 0; i < sizesBlock.length; i++) {
    //     sizesBlock[i].addEventListener('mouseover', () => {
    //         sizesBlock[i].innerHTML = `<img class=size-${i+1} src=img/sizes-${i+1}-1.png alt>`;
    //     });
    //     sizesBlock[i].addEventListener('mouseout', () => {
    //         sizesBlock[i].innerHTML = `<img class=size-${i+1} src=img/sizes-${i+1}.png alt>`;
    //     });
    // }

    // sizesBlock[0].addEventListener('mouseout', () => {
    //     // sizesBlock[0].innerHTML = "<img class=size-1 src=img/sizes-1.png alt><p class=size>40x50</p><p class=starting-price>5 290 руб.</p><p class=final-price>3 670 руб.</p>";  
    //     console.log('out');
    // });

    // sizesWrapper.addEventListener('click', (event) => {
    //     // console.log("OPA");

    //     for (let i = 0; i < sizesBlock.length + 1; i++) {
    //         if (event.target.classList.contains('sizes-block') && event.target == sizesBlock[i - 1]) {
    //             console.log("OPANA");
    //         }
    //     }
    // });

    function changeImg(source) {
        imgBlock.src = source;
    }
    console.log(imgBlock[0].src);

    imgBlock[0].addEventListener('click', () => {
        changeImg('img/sizes-1-1.png' );
    });
    
};

module.exports = sizes;