let sizes = () => {
    let sizesBlock = document.querySelectorAll('.sizes-block');

    sizesBlock.forEach((item, i) => {
        item.onmouseover = function () {
            this.querySelector("img").src = `img/sizes-${i+1}-1.png`;
            this.querySelectorAll('p').forEach((item, i) => {
                // табличка ХИТ ПРОДАЖ
                if(i !== 3) {
                item.style.display = 'none';
                }
            });            
        };
    });        
    
    sizesBlock.forEach((item, i) => {
        item.onmouseout = function () {
            this.querySelector("img").src = `img/sizes-${i+1}.png`;
            this.querySelectorAll('p').forEach((item) => {
                item.style.display = 'block';
            });
        };
    }); 

    sizesBlock.forEach((item, i) => {
        item.touchstart = function () {
            this.querySelector("img").src = `img/sizes-${i+1}-1.png`;
            this.querySelectorAll('p').forEach((item, i) => {
                // табличка ХИТ ПРОДАЖ
                if(i !== 3) {
                item.style.display = 'none';
                }
            });            
        };
    });        
    
    sizesBlock.forEach((item, i) => {
        item.touchcancel = function () {
            this.querySelector("img").src = `img/sizes-${i+1}.png`;
            this.querySelectorAll('p').forEach((item) => {
                item.style.display = 'block';
            });            
        };
    }); 
    
};

module.exports = sizes;