// Create beads
beadDom = document.querySelector('#docoration-beads')

const numOfBeads = 6
let beadRows = ''

for (let i = 0; i < numOfBeads; i++) {
    beadRows += `<div class="bead__row"><div class="bead"></div><div class="bead"></div></div>`
}

beadDom.innerHTML = beadRows;

// Styling the cards depending on display's dimensions
const cardRestyle = () => {
    const cards = document.querySelectorAll('.card')

    const cardRows = [[]]
    let controlTop = cards[0].getBoundingClientRect().top;

    cards.forEach(card => {
        // Check if current Card is aligned with the previous card, if not, create a new row
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop === controlTop) cardRows[cardRows.length - 1].push(card)
        if (cardTop > controlTop) {
            cardRows.push([])
            cardRows[cardRows.length - 1].push(card)
        }
        controlTop = cardTop;
    })

    cardRows.forEach((cr, crIndex) => {
        let controlHeight = 0;

        cr.forEach((card, cIndex) => {
            // Reset everything (for window resize)
            card.style.borderBottomLeftRadius = '0px'
            card.style.borderBottomRightRadius = '0px'
            card.style.borderTopLeftRadius = '0px'
            card.style.borderTopRightRadius = '0px'
            // Border Radius Situation
            if (cIndex === 0) {
                if (crIndex === 0) card.style.borderTopLeftRadius = '5px'
                if (crIndex == cardRows.length - 1) card.style.borderBottomLeftRadius = '5px'
            }
            if (cIndex === cr.length - 1) {
                if (crIndex === 0) card.style.borderTopRightRadius = '5px'
                if (crIndex === cardRows.length - 1) card.style.borderBottomRightRadius = '5px'
            }

            // Paragraph Height Situation
            const cardParagraph = card.querySelector('.card__paragraph')
            cardParagraph.style.height='fit-content'
            if (cardParagraph.offsetHeight > controlHeight) controlHeight = cardParagraph.offsetHeight
        })
        cr.forEach(card => { card.querySelector('.card__paragraph').style.height = `${controlHeight}px` })
    })
}

cardRestyle()
window.addEventListener('resize', cardRestyle)