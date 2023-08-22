// Створити сторінку, що показує нумерований список пісень:

/*let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
const playListUl = document.createElement('ul');
playListUl.id = 'playlist';
document.body.appendChild(playListUl);
playList.forEach((item, index) => {
    const liItem = document.createElement('li');
    liItem.textContent = `${index + 1}. ${item.song} by ${item.author}`;
    playListUl.appendChild(liItem);
    liItem.style.paddingBottom = "20px";
});*/
/*

Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити".
Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.*/

/*const openBtn = document.createElement('button');
openBtn.textContent = 'Open';
document.body.appendChild(openBtn);


const modal = document.createElement('section');
modal.style.width = '800px';
modal.style.height = '1000px';
modal.style.backgroundColor = 'gray';
modal.style.display = 'none';

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Close';
modal.appendChild(closeBtn);
document.body.appendChild(modal);

openBtn.addEventListener ('click', () => {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})



let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
const playListUl = document.createElement('ul');
playListUl.id = 'playlist';
playListUl.style.color = 'white';
modal.appendChild(playListUl);
playList.forEach((item, index) => {
    const liItem = document.createElement('li');
    liItem.textContent = `${index + 1}. ${item.song} by ${item.author}`;
    playListUl.appendChild(liItem);
    liItem.style.paddingBottom = "20px";
});*/


// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.




const mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.id = 'trafficlight';

const redCircle = document.createElement('div');
mainDiv.appendChild(redCircle);
redCircle.classList.add('red', 'circle', 'active', 'white');



const yellowCircle = document.createElement('div');
mainDiv.appendChild(yellowCircle);
yellowCircle.classList.add('yellow', 'circle', 'active', 'white');



const greenCircle = document.createElement('div');
mainDiv.appendChild(greenCircle);
greenCircle.classList.add('green', 'circle', 'active', 'white');



const switchBtn = document.createElement('button');
switchBtn.id = 'switchbtn';
switchBtn.textContent = 'Click for switch';
document.body.appendChild(switchBtn);


const circles = document.querySelectorAll('.circle');
const switchLightButton = document.getElementById('switchbtn');
let currentLight = 0;
switchLightButton.addEventListener('click', () => {
    circles.forEach (circle=> circle.classList.remove('active'));
    circles[currentLight].classList.add('active')
    currentLight = (currentLight + 1) % circles.length;
});


/*switchLightButton.addEventListener('click', () => {
    circles[currentLight].classList.remove(circles[currentLight].classList[1]);
    currentLight = (currentLight + 1) % circles.length;
    circles[currentLight].classList.add('active');
});*/



/*
switchLightButton.addEventListener('click', () => {
    redCircle.style.backgroundColor = 'white';
    yellowCircle.style.backgroundColor = 'white';
    greenCircle.style.backgroundColor = 'white';
})
*/





