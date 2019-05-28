let calc = () => {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        services = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        totalValue = document.querySelector('.calc-price'),
        total = 1000,
        indexSize = 0,
        indexMaterial = 0;

    size.options[0].value = 0;
    size.options[1].value = 0.5;
    size.options[2].value = 1;
    size.options[3].value = 1.5;
    size.options[4].value = 2;

    material.options[0].value = 0;
    material.options[1].value = 0.5;
    material.options[2].value = 1;
    material.options[3].value = 1.5;

    services.options[0].value = 0;
    services.options[1].value = 1.5;
    services.options[2].value = 2;
    services.options[3].value = 2.5;
    
    // console.log(size);
    // console.log(material);
    // console.log(promocode);

    size.addEventListener('change', function () {

        indexSize = +size.options[size.selectedIndex].value;

        total = 1000;

        // console.log('total', total);
        // console.log('indexSize', size.options[size.selectedIndex].value);
        // console.log('indexMaterial', material.options[material.selectedIndex].value);
        // console.log('indexSize + indexMaterial',indexSize + indexMaterial);
        // console.log('total',total);

        if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
            totalValue.innerHTML = 0;
        } else {
            total = (indexSize + indexMaterial) * total;
            totalValue.innerHTML = total + 1000 * +services.options[services.selectedIndex].value;
        }
    });

    material.addEventListener('change', function () {
        indexMaterial = +material.options[material.selectedIndex].value;

        // console.log('total', total);
        // console.log('indexSize', size.options[size.selectedIndex].value);
        // console.log('indexMaterial', material.options[material.selectedIndex].value);
        // console.log('indexSize + indexMaterial',indexSize + indexMaterial);
        // console.log('total',total);

        total = 1000;

        if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
            totalValue.innerHTML = 0;
        } else {
            total = (indexSize + indexMaterial) * total;
            totalValue.innerHTML = total + 1000 * +services.options[services.selectedIndex].value;
        }
    });
    
    services.addEventListener('change', function () {
        total = 1000;
        if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
            totalValue.innerHTML = 0;
        } else {

            // console.log(total);
            let a = 1000;
            total = (indexSize + indexMaterial) * total + a * +this.options[this.selectedIndex].value;
            totalValue.innerHTML = total;
            // console.log(total);
        
        }
    });

    
    promocode.addEventListener('input', () => {
        document.addEventListener('click', function(event) {
            var isClickInside = promocode.contains(event.target);
        
            if (!isClickInside) {
                //the click was outside the specifiedElement, do something
                if (promocode.value === 'IWANTPOPART') {
                    console.log('true');
                    console.log(total);
        
                    totalValue.innerHTML = total - total * 0.3;
                    // totalValue.innerHTML = (total + total * +services.options[services.selectedIndex].value) - (total + total * +services.options[services.selectedIndex].value) * 0.3;
                }
            }
        });
    });
    // promocode.addEventListener('input', () => {
    //     console.log(total);

    //     if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
    //         totalValue.innerHTML = 0;
    //     } 
    //     if (promocode.value === 'IWANTPOPART') {
    //         console.log('true');
    //         console.log(total);

    //         totalValue.innerHTML = total - total * 0.3;
    //         // totalValue.innerHTML = (total + total * +services.options[services.selectedIndex].value) - (total + total * +services.options[services.selectedIndex].value) * 0.3;
    //     }
    // });
};

module.exports = calc;