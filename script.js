const inputGroups = document.querySelectorAll('.input-group');
const radio = document.querySelectorAll('.radio');
const checkBox = document.querySelector('#check');
const checkBoxContent = document.querySelector('.check-box');
const form = document.querySelector('form');
const errors = document.querySelectorAll('.error');
const errCheck = document.querySelectorAll('.err-check');
const completed = document.querySelector('.completed');
let a = false;
let b = false;
let c = false;
let d = false;
let f = false;
let g = false;

function firstName() {
    if (inputGroups[0].children[0].children[1].value == "") {
        inputGroups[0].children[0].children[1].parentElement.children[2].classList.replace('invisible', 'visible');
        inputGroups[0].children[0].children[1].parentElement.children[1].classList.replace('border-[var(--Grey-500-medium)]', 'border-[var(--Red)]');
        a = false;
    } else {
        inputGroups[0].children[0].children[1].parentElement.children[2].classList.replace('visible', 'invisible');
        inputGroups[0].children[0].children[1].parentElement.children[1].classList.replace('border-[var(--Red)]', 'border-[var(--Grey-600-medium)]');
        a = true;
    }
}

function lastName() {
    if (inputGroups[0].children[1].children[1].value == "") {
        inputGroups[0].children[1].children[1].parentElement.children[2].classList.replace('invisible', 'visible');
        inputGroups[0].children[1].children[1].parentElement.children[1].classList.replace('border-[var(--Grey-500-medium)]', 'border-[var(--Red)]');
        b = false;
    } else {
        inputGroups[0].children[1].children[1].parentElement.children[2].classList.replace('visible', 'invisible');
        inputGroups[0].children[1].children[1].parentElement.children[1].classList.replace('border-[var(--Red)]', 'border-[var(--Grey-600-medium)]');
        b = true;
    }
}

function validEmail() {
    if (inputGroups[1].children[1].value !== "") {
        const email = inputGroups[1].children[1].value;
        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (emailPattern.test(email)) {
                return true;
            } else {
                return false;
            }
        }
        if (validateEmail(email)) {
            inputGroups[1].children[1].nextElementSibling.classList.replace('visible', 'invisible');
            inputGroups[1].children[1].classList.replace('border-[var(--Red)]', 'border-[var(--Grey-500-medium)]');
            c = true;
        } else {
            inputGroups[1].children[1].nextElementSibling.classList.replace('invisible', 'visible')
            inputGroups[1].children[1].classList.replace('border-[var(--Grey-500-medium)]', 'border-[var(--Red)]');
            c = false;
        }
    }
}

[...inputGroups[2].children].forEach((radios) => {
    radios.addEventListener('click', (e) => {
        if (e.currentTarget.children[0] == inputGroups[2].children[0].children[0]) {
            radio[0].checked = true;
            inputGroups[2].children[0].children[0].children[1].children[0].classList.replace('hidden', 'flex');
            inputGroups[2].children[0].children[0].children[1].classList.remove('border-2');
            inputGroups[2].children[0].children[0].classList.replace("border-[var(--Grey-500-medium)]", "border-[var(--Green-600-medium)]")
            inputGroups[2].children[0].children[0].classList.add("bg-[var(--Green-200-lighter)]")


            if (radio[1].checked == false) {
                inputGroups[2].children[1].children[0].children[1].children[0].classList.replace('flex', 'hidden');
                inputGroups[2].children[1].children[0].children[1].classList.add('border-2');
                inputGroups[2].children[1].children[0].classList.replace("border-[var(--Green-600-medium)]", "border-[var(--Grey-500-medium)]");
                inputGroups[2].children[1].children[0].classList.remove("bg-[var(--Green-200-lighter)]")
            }
        }
        if (e.currentTarget.children[0] == inputGroups[2].children[1].children[0]) {
            radio[1].checked = true;
            inputGroups[2].children[1].children[0].children[1].children[0].classList.replace('hidden', 'flex');
            inputGroups[2].children[1].children[0].children[1].classList.remove('border-2');
            inputGroups[2].children[1].children[0].classList.replace("border-[var(--Grey-500-medium)]", "border-[var(--Green-600-medium)]");
            inputGroups[2].children[1].children[0].classList.add("bg-[var(--Green-200-lighter)]")


            if (radio[0].checked == false) {
                inputGroups[2].children[0].children[0].children[1].children[0].classList.replace('flex', 'hidden');
                inputGroups[2].children[0].children[0].children[1].classList.add('border-2');
                inputGroups[2].children[0].children[0].classList.replace("border-[var(--Green-600-medium)]", "border-[var(--Grey-500-medium)]");
                inputGroups[2].children[0].children[0].classList.remove("bg-[var(--Green-200-lighter)]")
            }
        }
        [...radio].some((rad) => {
            if (rad.checked) {
                document.querySelector('#radio-err').classList.replace('visible', 'invisible');
                d = true;
            }
        });
    })
});

checkBoxContent.parentElement.addEventListener('click', function () {
    if (checkBox.checked == false) {
        checkBoxContent.children[1].classList.replace('hidden', 'block');
        checkBox.checked = true;
    }
    else {
        checkBoxContent.children[1].classList.replace('block', 'hidden');
        checkBox.checked = false;
    }
})

inputGroups[4].addEventListener('click', () => {
    if (checkBox.checked == true) {
        document.querySelector('#checkbox-err').classList.replace('visible', 'invisible');
        g = true;
    }
})

inputGroups[0].children[0].children[1].addEventListener('input', () => {
    firstName();
});
inputGroups[0].children[1].children[1].addEventListener('input', () => {
    lastName();
});

inputGroups[1].children[1].addEventListener('input', () => {
    validEmail();
    if (inputGroups[1].children[1].value !== "") {
        inputGroups[1].children[1].nextElementSibling.innerText = 'Please enter a valid email address';
        c = false;
    }
});

function textArea() {
    if (inputGroups[3].children[1].value == "") {
        document.querySelector('#msg-err').classList.replace('hidden', 'block');
        inputGroups[3].children[1].classList.replace('border-[var(--Grey-500-medium)]', 'border-[var(--Red)]');
        f = false;
    } else {
        document.querySelector('#msg-err').classList.replace('block', 'hidden');
        inputGroups[3].children[1].classList.replace('border-[var(--Red)]', 'border-[var(--Grey-500-medium)]');
        f = true;
    }
}

inputGroups[3].children[1].addEventListener('input', () => {
    if (inputGroups[3].children[1].value !== "") {
        document.querySelector('#msg-err').classList.replace('block', 'hidden');
        inputGroups[3].children[1].classList.replace('border-[var(--Red)]', 'border-[var(--Grey-500-medium)]');
        f = true;
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = [...radio].some((rad) => {
        return rad.checked
    });
    if (result == false) {
        document.querySelector('#radio-err').classList.replace('invisible', 'visible');
        d = false;
    } else {
        document.querySelector('#radio-err').classList.replace('visible', 'invisible');
        d = true;
    }
    firstName();
    lastName();
    validEmail();
    textArea();

    // email condition

    if (inputGroups[1].children[1].value == "") {
        inputGroups[1].children[1].nextElementSibling.innerText = 'This felid is required';
        inputGroups[1].children[1].nextElementSibling.classList.replace('invisible', 'visible');
        inputGroups[1].children[1].classList.replace('border-[var(--Grey-500-medium)]', 'border-[var(--Red)]');
        c = false;
    } else {
        inputGroups[1].children[1].nextElementSibling.classList.replace('visible', 'invisible');
        inputGroups[1].children[1].classList.replace('border-[var(--Red)]', 'border-[var(--Grey-500-medium)]');
        c = true;
    }

    if (checkBoxContent.children[0].checked == true) {
        document.querySelector('#checkbox-err').classList.replace('visible', 'invisible');
    } else {
        document.querySelector('#checkbox-err').classList.replace('invisible', 'visible');
    }

    const countErr = [];
    countErr.push(a, b, c, d, f, g);
    const resultErr = countErr.every(err => err)
    if (resultErr == true) {
        completed.classList.replace('hidden', 'block');
        form.reset();
        inputGroups[2].children[1].children[0].children[1].children[0].classList.replace('flex', 'hidden');
        inputGroups[2].children[1].children[0].children[1].classList.add('border-2');
        inputGroups[2].children[1].children[0].classList.replace("border-[var(--Green-600-medium)]", "border-[var(--Grey-500-medium)]");
        inputGroups[2].children[1].children[0].classList.remove("bg-[var(--Green-200-lighter)]")
        inputGroups[2].children[0].children[0].children[1].children[0].classList.replace('flex', 'hidden');
        inputGroups[2].children[0].children[0].children[1].classList.add('border-2');
        inputGroups[2].children[0].children[0].classList.replace("border-[var(--Green-600-medium)]", "border-[var(--Grey-500-medium)]");
        inputGroups[2].children[0].children[0].classList.remove("bg-[var(--Green-200-lighter)]")
        checkBoxContent.children[1].classList.replace('block', 'hidden');
    }
})