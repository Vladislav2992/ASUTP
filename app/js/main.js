function openModal (btn, modal) {
    btn.addEventListener('click', ()=> {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    })
}


(function() {
    const makeOrderButtons = document.querySelectorAll('.make-order');    
    if(makeOrderButtons.length < 1) false
        const modal = document.querySelector('.modal-form')
        makeOrderButtons.forEach(button => {
           openModal(button, modal)
        })    
})();

(function () {
    const cards = document.querySelectorAll('.card');
    if(cards.length < 0) false;
    cards.forEach(card => {
        const btn = card.querySelector('.btn');
        const modal = card.querySelector('.card-modal')
        openModal(btn, modal)
    })
})();

(function  () {
    const modals = document.querySelectorAll('.modal')
    if(modals.length < 1) false
    modals.forEach(modal => {
      modal.querySelector('.close-btn')
        .addEventListener('click', ()=> {
            modal.classList.remove('active')
            document.body.style.overflow = 'auto';
        });
    })
})();

