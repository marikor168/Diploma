let form = () => {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let formDesign = document.querySelector('.popup-design form'),
        inputDesign = formDesign.getElementsByTagName('input'),
        inputName = inputDesign[1],
        inputPhone = inputDesign[2],
        inputMail = inputDesign[3],
        comment = formDesign.getElementsByTagName('textarea')[0],
        statusMessage = document.createElement('div');

    let formConsult = document.querySelector('.popup-consultation form'),
    inputConsult = formConsult.getElementsByTagName('input'),
    inputNameConsult = inputConsult[0],
    inputPhoneConsult = inputConsult[1];

    let modalDesign = document.querySelector('.popup-design');
 
    inputName.addEventListener('input', () => {
        inputName.value = inputName.value.replace(/[A-z\d]/g, "");
    });
    
    inputPhone.addEventListener('input', () => {
        inputPhone.value = inputPhone.value.replace(/[^0-9+]/g, "");
        // inputPhone.value = inputPhone.value.replace(/(?<!^)\+/g, "");
        if (inputPhone.value.length > 12) {
                inputPhone.value = inputPhone.value.substr(0, 12);
            }
    });

    comment.addEventListener('input', () => {
        comment.value = comment.value.replace(/[A-z]/g, "");
    });

    inputNameConsult.addEventListener('input', () => {
        inputNameConsult.value = inputNameConsult.value.replace(/[A-z\d]/g, "");
    });
    
    inputPhoneConsult.addEventListener('input', () => {
        inputPhoneConsult.value = inputPhoneConsult.value.replace(/[^0-9+]/g, "");
        // inputPhoneConsult.value = inputPhoneConsult.value.replace(/(?<!^)\+/g, "");
        if (inputPhoneConsult.value.length > 12) {
                inputPhoneConsult.value = inputPhoneConsult.value.substr(0, 12);
            }
    });

    let sendForm = (elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            let postData = (data) => {
                return fetch('server.php', {
                    method: 'POST',
                    body: data
                });
            };

            let clearInput = (elem) => {
                let input = elem.getElementsByTagName('input');
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                comment.value = '';
            };           

            postData(formData)
                .then(() => {
                    statusMessage.innerHTML = "<img src='img/ajax-loader.gif'>";
                    statusMessage.style.cssText = "text-align: center; padding-top: 20px;";
                })               
                .then(() => {
                    // statusMessage.innerHTML = message.success;
                    // modalDesign.style.display = 'none';
                    statusMessage.innerHTML = "<img src='img/success.jpg'>";
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput(elem));

        });
    };

    sendForm(formDesign);
    sendForm(formConsult);

};

module.exports = form;