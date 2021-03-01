const data = [
    {
        id: 1,
        imgUrl: 'img/bat.jpg',
        counter: 2
    },
    {
        id: 2,
        imgUrl: 'img/bear.jpg',
        counter: 2
    },
    {
        id: 3,
        imgUrl: 'img/cat.jpg',
        counter: 2
    },
    {
        id: 4,
        imgUrl: 'img/cow.jpg',
        counter: 2
    },
    {
        id: 5,
        imgUrl: 'img/dog.jpg',
        counter: 2
    },
    {
        id: 6,
        imgUrl: 'img/elephant.jpg',
        counter: 2
    },
    {
        id: 7,
        imgUrl: 'img/hamster.jpg',
        counter: 2
    },
    {
        id: 8,
        imgUrl: 'img/spider.jpg',
        counter: 2
    }
];


const play = document.querySelector('.btn-reset');
const svgContainer = document.getElementById('svg');

const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_wzq5hrhg.json'
});

play.addEventListener('click', () => {
    // svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0, true);
})

// animItem.addEventListener('complete', () => {
//     svgContainer.classList.add('hide');
// })