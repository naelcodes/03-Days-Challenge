// Card list
const cards = document.querySelectorAll(".card");

//Adding a 'Click' event listener to All the cards
cards.forEach(card => card.addEventListener('click', (e) => {
    /**
     *  Checks whether we clicked the card title or the card itself
     *  If Yes, it delegates the event to the card
     */
    let target_card = (e.target.tagName === 'H3') ? e.target.parentElement : e.target;
    removeExpandClass();
    target_card.classList.add('expand');
}));

function removeExpandClass() {
    cards.forEach(card => card.classList.remove('expand'));
}



