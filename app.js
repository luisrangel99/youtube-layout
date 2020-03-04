(function(){
    const btnMenu = document.getElementById('btn-menu');
    const container = document.getElementsByClassName('container')[0];
    btnMenu.addEventListener( 'click', ( e ) => {
        container.classList.toggle('active');
    });

    const comprobateWidth = () => {
        if ( window.innerWidth <= 768 ){
            container.classList.remove('active');
        } else {
            container.classList.add("active");
        }
    };

    comprobateWidth();
    window.addEventListener( 'resize', () => {
        comprobateWidth();
    })
}());