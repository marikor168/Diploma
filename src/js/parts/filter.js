let filter = () => {
    let filtersWrapper = document.querySelector('.portfolio-menu'),
        filters = filtersWrapper.querySelectorAll('li'),
        portfolioNo = document.querySelector('.portfolio-no'),
        blocksAll = document.querySelectorAll('.portfolio-wrapper .all'),
        blocksLovers = document.querySelectorAll('.portfolio-wrapper .lovers'),
        blocksChef = document.querySelectorAll('.portfolio-wrapper .chef'),
        blocksGirl = document.querySelectorAll('.portfolio-wrapper .girl'),
        blocksGuy = document.querySelectorAll('.portfolio-wrapper .guy');

    let show = (blocks) => {
        blocksAll.forEach((item) => {
            item.style.display = 'none';
        });
        blocks.forEach((item) => {
            item.style.display = 'block';
        });
        portfolioNo.style.display ='none';
    };

    let showPortfolioNo = () => {
        blocksAll.forEach((item) => {
            item.style.display = 'none';
        });
        portfolioNo.style.display ='block';
    };

    let changeStyle = (filterHeader) => {
        filters.forEach((item) => {
            item.classList.remove('active');
        });
        filterHeader.classList.add('active');
    };
    
    let blocks = [blocksAll, blocksLovers, blocksChef, blocksGirl, blocksGuy];
    for (let i = 0; i < 5; i++) {
        filters[i].addEventListener('click', () => {
        show(blocks[i]);
        changeStyle(filters[i]);
        });
    }

    filters[5].addEventListener('click', () => {
        showPortfolioNo();
        changeStyle(filters[5]);
    });
    filters[6].addEventListener('click', () => {
        showPortfolioNo();
        changeStyle(filters[6]);
    });

};

module.exports = filter;