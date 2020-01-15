let menuContainer;

window.addEventListener('click', () => {
    menuContainer.innerHTML = '';
})

window.addEventListener('DOMContentLoaded', () => {
    menuContainer = document.querySelector('#search-menu-container')

    menuContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    let searchInput = document.querySelector('#search-input');
    let ref;
    
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        if (ref) { //si il ya une recherche en cours, clearle time ou ne prend en compte que la dernière recherche
            clearTimeout(ref)//permet d'attendre un certain avant d'effectuer la fonction
        }
        ref = setTimeout(() => {
            axios.get('/users?search=' + value)
                .then(response => {
                    menuContainer.innerHTML = response.data;
                })
                .catch(err => {
                    console.log(err.message);
                })
        }, 2000);
    })
});