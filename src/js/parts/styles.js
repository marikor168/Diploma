let styles = () => {
    let btn = document.querySelector('.button-styles'),
    stylesBlocks = document.querySelectorAll('.styles-2'),
    blocks = document.querySelectorAll('.col-xs-offset-1');
    
    let classes =  blocks[0].className;

    btn.addEventListener('click', () => {
        stylesBlocks.forEach((item) => {
            item.className = '';
            item.className = classes;
        });

        btn.style.display = 'none';
    });
};

module.exports = styles;