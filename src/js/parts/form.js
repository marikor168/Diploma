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
        commentDesign = formDesign.getElementsByTagName('textarea')[0],
        statusMessage = document.createElement('div');

    let formConsult = document.querySelector('.popup-consultation form'),
        inputConsult = formConsult.getElementsByTagName('input'),
        inputNameConsult = inputConsult[0],
        inputPhoneConsult = inputConsult[1];

    let formMain = document.querySelector('.consultation form'),
        inputMain = formMain.getElementsByTagName('input'),
        inputNameMain = inputMain[0],
        inputPhoneMain = inputMain[1],
        commentMain = inputMain[3];

    // let modalDesign = document.querySelector('.popup-design');
    commentDesign.classList.add('message');
    commentMain.classList.add('message');

    let nameValidation = (input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[A-z\d]/g, "");
        });
    };

    nameValidation(inputName);
    nameValidation(inputNameConsult);
    nameValidation(inputNameMain);

    let phoneValidation = (input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^0-9+]/g, "");
            input.value = input.value.replace(/(?<!^)\+/g, "");
            if (input.value.length > 12) {
                    input.value = input.value.substr(0, 12);
                }
        });
    };

    phoneValidation(inputPhone);
    phoneValidation(inputPhoneConsult);
    phoneValidation(inputPhoneMain);

    let commentValidation = (input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[A-z]/g, "");
        });
    };

    commentValidation(commentDesign);
    commentValidation(commentMain);


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
                let comment = elem.getElementsByClassName('.message');
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
                    statusMessage.innerHTML = message.success;
                    // modalDesign.style.display = 'none';
                    // statusMessage.innerHTML = "<img src='img/success.jpg'>";
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput(elem));

        });
    };

    sendForm(formDesign);
    sendForm(formConsult);
    sendForm(formMain);

};

module.exports = form;