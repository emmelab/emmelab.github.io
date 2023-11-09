function goTo(pantalla) {
    // console.log('HOLA')
    // document.querySelectorAll('.pantalla').forEach(item => {
    //     item.style.display = 'none';
    // })

    document.querySelector(pantalla).scrollIntoView({ behavior: 'smooth' });
}