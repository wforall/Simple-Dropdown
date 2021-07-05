var answer = document.getElementsByClassName('answer');
var open_close = document.getElementsByClassName('open_close');
var part_question_answer = document.getElementsByClassName('part_question_answer');


window.addEventListener('DOMContentLoaded', function() {
    FnRunProject();

})


function FnRunProject() {
    for (let i = 0; i < open_close.length; i++) {
        open_close[i].addEventListener('click', function() {



            switch (open_close[i].id) {
                case 'btn1':

                    open_close[i].innerHTML = FnchangeIconBtn(open_close[i].innerHTML);
                    FnopenAnswers('part1');
                    break;
                case 'btn2':
                    open_close[i].innerHTML = FnchangeIconBtn(open_close[i].innerHTML);


                    FnopenAnswers('part2');

                    break;
                case 'btn3':
                    open_close[i].innerHTML = FnchangeIconBtn(open_close[i].innerHTML);


                    FnopenAnswers('part3');

                    break;

                default:
                    break;
            }
        })


    }

    function FnopenAnswers(prt) {
        for (let i = 0; i < part_question_answer.length; i++) {
            if (part_question_answer[i].id == prt) {
                part_question_answer[i].classList.toggle('part_question_answer_open')
            }

        }
    }

    function FnchangeIconBtn(btnicon) {
        if (btnicon == '+') {
            btnicon = '-';
        } else {
            btnicon = '+';

        }
        return btnicon;
    }
}