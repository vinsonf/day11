 document.querySelector('h1').innerHTML ='';
setTimeout(() => {
    select1();
}, 3000);


function select1() {
    const h1 = document.querySelector('h1');
    h1.classList.remove('slide-in-left');
    h1.classList.remove('slide-in-right');
    setTimeout(() => {
        h1.classList.add('slide-in-left');
    });
   
    document.querySelector('h1').innerHTML = 'Back to the first tab';
    console.log('select1');
    const tabs = document.querySelector('.tabs');

    tabs.classList.remove('active2', 'active3');
    tabs.classList.add('active1');
}

function select2() {
    const h1 = document.querySelector('h1');
    h1.classList.remove('slide-in-left');
    h1.classList.remove('slide-in-right');
    setTimeout(() => {
        h1.classList.add('slide-in-right');
    });
   
    document.querySelector('h1').innerHTML = 'Back to the second tab';
    const tabs = document.querySelector('.tabs');

    tabs.classList.remove('active1', 'active3');
    tabs.classList.add('active2');
}

function select3() {
    const h1 = document.querySelector('h1');
    h1.classList.remove('slide-in-left');
    h1.classList.remove('slide-in-right');
    setTimeout(() => {
        h1.classList.add('slide-in-left');
    });
   
    document.querySelector('h1').innerHTML = 'Back to the third tab';
    const tabs = document.querySelector('.tabs');

    tabs.classList.remove('active2', 'active1');
    tabs.classList.add('active3');
}