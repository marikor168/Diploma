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
    services.options[1].value = 1500;
    services.options[2].value = 2000;
    services.options[3].value = 2500;

    let inputData = () => {
        total = 1000;

        if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
            totalValue.innerHTML = 0;
        } else {
            total = (indexSize + indexMaterial) * total + +services.options[services.selectedIndex].value;
            totalValue.innerHTML = total;
            promocode.value = '';
        }
    };

    size.addEventListener('change', () => {
        indexSize = +size.options[size.selectedIndex].value;
        inputData();
    });

    material.addEventListener('change', () => {
        indexMaterial = +material.options[material.selectedIndex].value;
        inputData();
    });

    services.addEventListener('change', () => {
        inputData();
    });

    promocode.addEventListener('input', () => {

        if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
            totalValue.innerHTML = 0;
            promocode.value = '';
        } else if (promocode.value === 'IWANTPOPART') {
            totalValue.innerHTML = total - total * 0.3;
        } else {
            totalValue.innerHTML = total;
        }
    });
};

module.exports = calc;