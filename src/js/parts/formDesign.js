function formDesign() {
    let form = document.querySelector('.popup-design form'),
        input = form.getElementsByTagName('input'),
        inputName = input[1],
        inputPhone = input[2],
        inputMail = input[3],
        comment = form.getElementsByTagName('textarea')[0];

    console.log(inputName);
    console.log(inputPhone);
    console.log(inputMail);
    console.log(comment);

    



}

module.exports = formDesign;