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

        let telPlaceholder = "(___) ___-____";
        let numsOnly ="";
        
        input.addEventListener('focus', () => {
            if (numsOnly.length !== 10){
                input.value = telPlaceholder;
            }
        });
        
        input.addEventListener('input', () => {
            let rawTel = input.value;
            numsOnly = rawTel.replace(/\D/g, "");
            
            let result = telPlaceholder.split("");
            for (let i = 0, j = 0; i < result.length; i++) {
                if (i == 0 || i == 4 || i == 5 || i == 9){
                    continue;
                }
                
                let tmp = numsOnly[j++];
                if (tmp !== undefined){
                    result[i] = tmp;
                } 
            }
            
            input.value = result.join("");
        
            if (numsOnly.length > 10) {
                numsOnly = numsOnly.substr(0, 10);
            } 
        
            setCursorPosition();
        });
        
        function setCursorPosition(){
            let length = numsOnly.length;
            if (length >= 0 && length <= 3) {
                input.setSelectionRange(length + 1, length + 1);
            } else if (length >= 4 && length <= 6){
                input.setSelectionRange(length + 3, length + 3);
            } else {
                input.setSelectionRange(length + 4, length + 4);
            }
        }
        
        input.addEventListener('blur', () => {
            if (numsOnly.length !== 10){
                input.value = '';    
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
                    elem.appendChild(statusMessage);
                    statusMessage.innerHTML = "<img src='img/ajax-loader.gif'>";
                    statusMessage.style.cssText = "text-align: center; padding-top: 20px;";
                })               
                .then(() => {
                    elem.innerHTML = message.success;
                })
                .catch(() => {
                    elem.innerHTML = message.failure;
                })
                .then(clearInput(elem));   
                              
            });

    };

    sendForm(formDesign);
    sendForm(formConsult);
    sendForm(formMain);

};

module.exports = form;