let formDesign = () => {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.popup-design form'),
        input = form.getElementsByTagName('input'),
        inputName = input[1],
        inputPhone = input[2],
        inputMail = input[3],
        comment = form.getElementsByTagName('textarea')[0],
        statusMessage = document.createElement('div');

    console.log(inputName);
    console.log(inputPhone);
    console.log(inputMail);
    console.log(comment);

    // inputPhone.addEventListener('input', () => {
    //     inputPhone.value = inputPhone.value.replace(/[^0-9+]/g, "");
    //     inputPhone.value = inputPhone.value.replace(/(?<!^)\+/g, "");
    // });

    // inputName.addEventListener('input', () => {
    //     inputName.value = inputName.value.replace(/[^А-я]/g, "");
    // });

    // comment.addEventListener('input', () => {
    //     comment.value = comment.value.replace(/[^А-я]/g, "");
    // });

    // let telPlaceholder = "+7(___) ___-____";
    // let numsOnly = "";

    // inputPhone.addEventListener('focus', () => {
    //     if (numsOnly.length !== 10) {
    //         inputPhone.value = telPlaceholder;
    //     }
    // });

    // inputPhone.addEventListener('input', () => {
    //     let rawTel = inputPhone.value;
    //     numsOnly = rawTel.replace(/\D/g, "");

    //     let result = telPlaceholder.split("");
    //     for (let i = 0, j = 0; i < result.length; i++) {
    //         // if (i == 0 || i == 4 || i == 5 || i == 9){
    //         if (i == 0 || i == 1 || i == 2 || i == 6 || i == 7 || i == 11) {
    //             continue;
    //         }

    //         let tmp = numsOnly[j++];
    //         if (tmp !== undefined) {
    //             result[i] = tmp;
    //         }
    //     }

    //     inputPhone.value = result.join("");

    //     if (numsOnly.length > 10) {
    //         numsOnly = numsOnly.substr(0, 10);
    //     }

    //     setCursorPosition();
    // });

    // function setCursorPosition() {
    //     let length = numsOnly.length;
    //     if (length >= 2 && length <= 5) {
    //         inputPhone.setSelectionRange(length + 3, length + 3);
    //     } else if (length >= 6 && length <= 8) {
    //         inputPhone.setSelectionRange(length + 5, length + 5);
    //     } else {
    //         inputPhone.setSelectionRange(length + 6, length + 6);
    //     }
    // }

    // inputPhone.addEventListener('blur', () => {
    //     if (numsOnly.length !== 10) {
    //         inputPhone.value = '';
    //     }
    // });


    let sendForm = (elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            let postData = (data) => {
                return  fetch('server.php', {
                    method: 'POST',
                    body: data
                });
            };

            let clearInput = () => {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                comment.value = '';
            };

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

        });
    };

    sendForm(form);

};

module.exports = formDesign;