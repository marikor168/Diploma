let menu = (trigger, boxBody) => {
        let button = {
            'element': document.querySelector(trigger),
            'active': false
        };

        const box = document.querySelector(boxBody);
        let activateButton = () => {
            if (button.active === false) {
                button.active = true; 
                box.style.display = 'block';
            } else {
                button.active = false;
                box.style.display = 'none';
            }
        };
        window.addEventListener('resize', () => {

            if (document.body.clientWidth <= 991) {
                if (button.active === true) {
                    button.active = false;
                    box.style.display = 'none';
                }    
                button.element.addEventListener('click', activateButton);
    
            } else {

                if (button.active === true) {
                    button.active = false;
                    box.style.display = 'none';
                }                 
                button.element.removeEventListener('click', activateButton);
            }
        });
};

module.exports = menu;