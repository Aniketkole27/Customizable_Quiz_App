const mainDiv = document.querySelector(".main_contaner")
const header = document.querySelector(".header");
const addDiv = document.querySelector("#add");
const startTest = document.querySelector(".startTest");

let container = document.createElement("div");
container.classList.add("container");

let newDiv = document.createElement("div");
newDiv.classList.add("newDiv");

addDiv.addEventListener("click", () => {

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("placeholder", "Enter your question...");

    let option1 = document.createElement("input");
    option1.setAttribute("type", "text");
    option1.setAttribute("class", "options");
    option1.setAttribute("placeholder", "option 1");

    let option2 = document.createElement("input");
    option2.setAttribute("type", "text");
    option2.setAttribute("class", "options");
    option2.setAttribute("placeholder", "option 2");

    let option3 = document.createElement("input");
    option3.setAttribute("type", "text");
    option3.setAttribute("class", "options");
    option3.setAttribute("placeholder", "option 3");

    let option4 = document.createElement("input");
    option4.setAttribute("type", "text");
    option4.setAttribute("class", "options");
    option4.setAttribute("placeholder", "option 4");

    let addButton = document.createElement("button");
    addButton.id = "addbtn";
    addButton.classList.add("btn");
    addButton.innerText = "Add Question";

    addButton.addEventListener("click", () => {
        let a1 = option1.value;
        let a2 = option2.value;
        let a3 = option3.value;
        let a4 = option4.value;



        let options = [a1, a2, a3, a4];
        if (input.value !== '' && a1, a2, a3, a4 !== '') {
            checkMarks(options);
        }

        input.value = "";
        // options.forEach((option)=>{
        //     option.values = "";
        // })
        option1.value = "";
        option2.value = "";
        option3.value = "";
        option4.value = "";

    })

    header.replaceWith(newDiv)
    newDiv.appendChild(input);
    newDiv.appendChild(option1);
    newDiv.appendChild(option2);
    newDiv.appendChild(option3);
    newDiv.appendChild(option4);
    newDiv.appendChild(addButton);
    mainDiv.appendChild(container);

})

let counter = 0;
const checkMarks = (arr) => {
    let newQuestion = document.createElement("div");
    newQuestion.classList.add("newQuestion");
    counter++;

    let numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.innerText = counter + ". ";

    let textSpan = document.createElement("span");
    textSpan.classList.add("text");
    textSpan.innerText = input.value;

    newQuestion.appendChild(numberSpan);
    newQuestion.appendChild(textSpan);

    if (counter >= 1) {
        container.style.backgroundColor = "bisque";
    }

    if (counter === 1) {
        let start = document.createElement('button');
        start.setAttribute = "button"
        start.innerText = "Start Test";
        start.id = "sTest";
        start.classList.add('btn');

        let timer = document.createElement('input');
        timer.setAttribute("type", "time");
        timer.setAttribute('class',"add");
        mainDiv.appendChild(timer);
        mainDiv.appendChild(start);
        
        document.querySelector("#sTest").addEventListener('click', () => {
            console.log("Hey i am clicked");
            mainDiv.replaceChild(container,newDiv);
            start.style.display = "none";
        })
    }



    arr.forEach((option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.style.margin = '5px';
        radio.type = 'radio';
        radio.name = "option" + counter;  // Same name so only one can be selected
        radio.value = option.toLowerCase();

        label.appendChild(document.createElement('br'));
        newQuestion.appendChild(label);
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        container.appendChild(newQuestion);
    }))
}
