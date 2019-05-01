(function(){
    
    const houseGraphs = document.querySelectorAll('.house-list__item-scale');
    const infoPanel = document.querySelector('.additional-sections-wrapper');

    const addClass = (elem, className) => {
        if(!elem.classList.contains(className)){
            elem.classList.add(className);
        }
    };

    houseGraphs.forEach(graph => {
        graph.addEventListener('click', () => {
            document.querySelectorAll('.houses-list__item').forEach(item => {
                if(item.classList.contains('houses-list__item--active')){
                    item.classList.remove('houses-list__item--active');
                }
            });
            addClass(
                graph.closest('.houses-list__item'), 'houses-list__item--active'
            );

            addClass(
                infoPanel, 
                'additional-section--active'
            );
        });
    });
})();