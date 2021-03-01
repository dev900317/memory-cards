const data = [{
        id: 1,
        imgUrl: 'img/bat.jpg'
    },
    {
        id: 2,
        imgUrl: 'img/bear.jpg'
    },
    {
        id: 3,
        imgUrl: 'img/cat.jpg'
    },
    {
        id: 4,
        imgUrl: 'img/cow.jpg'
    },
    {
        id: 5,
        imgUrl: 'img/dog.jpg'
    },
    {
        id: 6,
        imgUrl: 'img/elephant.jpg'
    },
    {
        id: 7,
        imgUrl: 'img/hamster.jpg'
    },
    {
        id: 8,
        imgUrl: 'img/spider.jpg'
    }
];


const play = document.querySelector('.btn-reset');
const svgContainer = document.getElementById('svg');
const cardContainer = document.querySelector('.cards');
const imgArray = document.querySelectorAll('.card-img');
const scoreBoard = document.querySelector('.js-score');
const cardsArray = document.querySelectorAll('.card');

let counter = 0;
let moves = []
let score = 0;

const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_wzq5hrhg.json'
});

play.addEventListener('click', () => {
    animItem.goToAndPlay(0, true);
})


    const fillCards = () => {
        let shuffledData = [...data, ...data]
        shuffledData = shuffledData.sort(() => Math.random() - 0.5);

        for (let i = 0; i < shuffledData.length; i++) {
            imgArray[i].src = shuffledData[i].imgUrl;
            imgArray[i].closest('.card').dataset.id = shuffledData[i].id;
        }
        cardsArray.forEach(el => el.addEventListener('click', cardClick));
}

const cardClick = (e) => {
    console.log(e.currentTarget);
        // check if user click only 2 times - not more
        if(moves.length > 1) {
            return;
        }

        let currentCard = e.currentTarget;
        currentCard.querySelector('.card-overlay').classList.add('open');
        if(currentCard !== moves[0]) {
            moves.push(currentCard);
            moveChecker(moves);
        }
    }


const moveChecker = (arr) => {
    let [firstMove, secondMove] = arr;

    if(firstMove && secondMove) {
        if(firstMove.dataset.id === secondMove.dataset.id && !firstMove.classList.contains('scored') && !secondMove.classList.contains('scored')) {
            score++;
            scoreBoard.textContent = score;
            firstMove.cursor = 'default';
            firstMove.classList.add('scored');
            firstMove.removeEventListener('click', cardClick);
            secondMove.cursor  = 'default';
            secondMove.classList.add('scored');
            secondMove.removeEventListener('click', cardClick);

            moves = [];
        }
        else if(!firstMove.classList.contains('scored') && !secondMove.classList.contains('scored')) {
            setTimeout(() => {
                firstMove.querySelector('.card-overlay').classList.remove('open');
                secondMove.querySelector('.card-overlay').classList.remove('open');
                moves = [];
            }, 1000)
        }
    } else {
        return;
    }

}

const init = () => {
    fillCards();
}

init();

console.log(cardsArray)