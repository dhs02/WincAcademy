const body = document.querySelector('body');
const navMenu = document.querySelector('#nav-menu');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const navUl = document.querySelector('#nav-ul');
const navLis = document.querySelectorAll('.nav-li');
const innerText = document.querySelector('#inner-text');

const showNavMenu = () => {
    navUl.classList.remove('hide');
};

const hideNavMenu = () => {
    navUl.classList.add('hide');
};

hamburgerIcon.addEventListener('mouseover', () => {
    showNavMenu();
});

navMenu.addEventListener('mouseleave', () => {
    hideNavMenu();
});
// Uncheck radio buttons
const uncheckBoxes = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].querySelector('input').checked = false;
    }
}
// Check selected radio button
const checkBox = (element) => {
    element.querySelector('input').checked = true;
}

navLis.forEach(el => {
    el.addEventListener('click', () => {
        let navLiClassList = el.classList;
        uncheckBoxes(navLis);
        checkBox(el);
        body.className = navLiClassList[navLiClassList.length - 1];
        innerText.innerHTML = `<span>${el.innerText}</span>`;
        hideNavMenu();
    });
});
// Keyboard functions
body.addEventListener('keydown', (e) => {
    uncheckBoxes(navLis);
    if (e.key == '1') {
        checkBox(navLis[0]);
        body.className = 'grey';
        innerText.innerHTML = `<span>Home</span>`;
    } else if (e.key == '2') {
        checkBox(navLis[1]);
        body.className = 'red';
        innerText.innerHTML = `<span>Red</span>`;
    } else if (e.key == '3') {
        checkBox(navLis[2]);
        body.className = 'orange';
        innerText.innerHTML = `<span>Orange</span>`;
    } else if (e.key == '4') {
        checkBox(navLis[3]);
        body.className = 'purple';
        innerText.innerHTML = `<span>Purple</span>`;
    } else if (e.key == '5') {
        checkBox(navLis[4]);
        body.className = 'green';
        innerText.innerHTML = `<span>Green</span>`;
    }
});