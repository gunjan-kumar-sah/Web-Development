const question = [{
    'que': "Which of the following is a markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "PHP",
    'correct': "a"
},
{
    'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b"
},
{
    'que': "What does CSS stand for?",
    'a': "HyperText Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Onject Notation",
    'd': "Helicapters Terminals Motorboats Lamborginis",
    'correct': "b"
},
{
    'que': "What is the requarment for Fronend Developer",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': 'All of the Above',
    'correct': "d"
},
{
    'que': "What is the requarment for Full stack Developer",
    'a': "Frontend",
    'b': "Backend",
    'c': "DataBase",
    'd': "All of the Above",
    'correct': "d"
},
{

    'que': "Which property is used to change the background color of an element?",
'a': "color",
'b': "bgcolor",
'c': "background-color",
'd': "background",
 'correct':"c"
},
{
'que': "What is the correct syntax to make all <p> elements bold using CSS?",
'a': "p {font-weight: bold;}",
'b': "<p style='text:bold';>",
'c': "p: bold;",
'd': "p {text-style: bold;}",
'correct': "a"
},
{
    'que': "Which CSS position value places an element relative to the nearest positioned ancestor?",
'a': "static",
'b': "absolute",
'c': "fixed",
'd': "relative",
'correct': 'b'
},
{
    'que': "Which of the following is a JavaScript framework?",
'a': "Django",
'b': "Flask",
'c': "React",
'd': "Laravel",
'correct': "c"
},
{
'que': "Which tool is used to manage front-end packages?",
'a': "NPM",
'b': "SQL",
'c': "Python",
'd': "PHP",
'correct': "a"
},
{
'que': "Which of the following is a valid responsive design technique?",
'a': "Inline styling",
'b': "Fixed layouts",
'c': "Media Queries",
'd': "Table-based layout",
'correct': "c"


}];

let index = 0;
let total = question.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const ans = getAnswer();
    if (!ans) {
        alert("Please select an answer!");
        return;
    }

    if (ans === question[index].correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3>Thank you for Playing the Game</h3>
        <h2>${right} / ${total} are correct</h2>
    `;
};

// Initial call
loadQuestion();
