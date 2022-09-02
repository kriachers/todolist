const todoInput = document.querySelector('.todo__input');
const todoForm = document.querySelector('.todo__form');
const todoAdd = document.querySelector('.todo__add');
const divDeal = document.querySelector('.deal');
const divCounting = document.querySelector('.counting');
const divWelcome = document.querySelector('.welcome');

let currentTasks = 0;
let doneTasks = 0;

todoAdd.addEventListener('click', function () {
    event.preventDefault();

    // проверяем, что строка не пустая, если пустая - форма анимируется (тряска)
    let SpaceCheck = todoInput.value.trim();
    if ((SpaceCheck.length == 0)) {
        todoForm.classList.add('animation-shake')

        // убираем класс через 2000мс, чтобы воспроизвести анимацию снова при следующей if==true
        function removeClass() {
            todoForm.classList.remove('animation-shake')
        }
        setTimeout(removeClass, 2000)
    }
    else {
        var newDiv = document.createElement("div");
        newDiv.classList.add('deals__item');
        newDiv.innerHTML = `<p class="deal__text">${todoInput.value}</p> <div class='green-line'></div> <div class='buttons-flex-wrapper'> <button class="deal__done"><img class="deal__done--img" src="./img/checked.svg" alt=""> </button> <button class="deal__delete"><img class='deal__delete--img' src="./img/trash.svg" alt=""></button></div>`
        divDeal.appendChild(newDiv);
        currentTasks++;
        showTasks();
        clearWelcomeText();
    }
})

const buttonDone = document.querySelector('.deal__done');
const greenLine = document.querySelector('.green-line');

divDeal.addEventListener('click', function () {

    let buttonTarget = event.target;

    // если кликнем по самой кнопке
    if (buttonTarget.className == 'deal__done') {
        let target = event.target.parentElement;
        target = target.parentElement;
        target.classList.add('overline');
        // чтобы исчезла сама галочка
        buttonTarget.classList.add('not-active');
        doneTasks++;
        currentTasks--;
        showTasks()
    }

    // если кликнем по иконке "галочка"
    if (buttonTarget.className == 'deal__done--img') {
        let GreenButtontarget = event.target.parentElement;
        target = GreenButtontarget.parentElement;
        target = target.parentElement;
        target.classList.add('overline');
        // чтобы исчезла сама галочка
        GreenButtontarget.classList.add('not-active');
        doneTasks++;
        currentTasks--;
        showTasks()
    }

})




divDeal.addEventListener('click', function () {

    let buttonTarget = event.target;

    if (buttonTarget.className == 'deal__delete') {
        let target = event.target.parentElement;
        target = target.parentElement;

        // счетчик - проверка (если задание уже было выполнено и зачеркнуто - не уменьшать знаечние счетчика)
        if (target.classList.contains('overline')) {
            doneTasks
        } else currentTasks--

        // для исчезнования блока с эффектом анимациия
        target.classList.add('not-active-animation');
        function notActive() {
            target.classList.add('not-active')
        }
        setTimeout(notActive, 1000)

        showTasks()

    }

    // если кликнем по иконке 
    if (buttonTarget.className == 'deal__delete--img') {
        let target = event.target.parentElement;
        target = target.parentElement;
        target = target.parentElement;

        // счетчик - проверка (если задание уже было выполнено и зачеркнуто - не уменьшать знаечние счетчика)
        if (target.classList.contains('overline')) {
            doneTasks
        } else currentTasks--


        // для исчезнования блока с эффектом анимациия
        target.classList.add('not-active-animation');
        function notActive() {
            target.classList.add('not-active')
        }
        setTimeout(notActive, 1000)
        showTasks()
    }
})


function showTasks() {
    divCounting.innerHTML = `<div class='counting__wrapper'><p class='counting__paragraph'>You need to make ${currentTasks} tasks!</p> <p class='counting__paragraph'>Already done ${doneTasks} tasks!</p></div>`
}
showTasks();


if (currentTasks === 0) {
    showWelcomeText();
}

function showWelcomeText() {
    divWelcome.innerHTML = `<p class='welcome__text'>You don't have any tasks yet! Create your first task now!</p>`
}

if (currentTasks > 0) {
    clearWelcomeText();
    divWelcome.innerHTML = ``
}

function clearWelcomeText() {
    divWelcome.innerHTML = ``
}
