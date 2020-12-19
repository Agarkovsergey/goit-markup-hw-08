let x = document.getElementsByClassName("filter__button");
let filter = "any";
const options = [
    "any",
    "website",
    "application",
    "design",
    "marketing"
];

const handler = (option) => (e) => { 
    let btns = document.getElementsByClassName("filter__button");
    for (let j = 0; j < btns.length; j++) { 
        btns[j].classList.remove("filter__button--current");
    }
    e.target.classList.add("filter__button--current");
    
    filter = option;

    let cards = document.getElementsByClassName("card__item");
    for (let j = 0; j < cards.length; j++) { 
        cards[j].classList.remove("card-invisible");
        
        if (filter === "any") {
            continue;
        }

        if (!cards[j].classList.contains(filter)) {
            cards[j].classList.add("card-invisible");
        }
    }
}

for (let i = 0; i < x.length; i++) {   
    x[i].addEventListener('click', handler(options[i]));
}