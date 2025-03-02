
const header = document.querySelector(".header");
const addDiv = document.querySelector("#add");

addDiv.addEventListener("click",()=>{
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");

    let container = document.createElement("div");
    container.classList.add("container");

    
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","input");
    input.setAttribute("autocomplete","off");
    input.setAttribute("placeholder","Enter your question");

    let option1 = document.createElement("input");
    option1.setAttribute("type","text");
    option1.setAttribute("placeholder","option1");
    option1.setAttribute("class","options");

    let option2 = document.createElement("input");
    option2.setAttribute("type","text");
    option2.setAttribute("placeholder","option2");
    option2.setAttribute("class","options");


    let option3 = document.createElement("input");
    option3.setAttribute("type","text");
    option3.setAttribute("placeholder","option3");
    option3.setAttribute("class","options");


    let option4 = document.createElement("input");
    option4.setAttribute("type","text");
    option4.setAttribute("placeholder","option4");
    option4.setAttribute("class","options");

    
    let addButton = document.createElement("button");
    addButton.id = "addbtn";
    addButton.innerText = "Add Question";

    let counter = 0;
    addButton.addEventListener("click",()=>{
        let newQuestion = document.createElement("div");
        newQuestion.classList.add("newQuestion");
        counter++;
        newQuestion.innerHTML = counter + ". " + input.value;

        let options = [option1.value,option2.value,option3.value,option4.value];

        options.forEach((option=>{
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.style.margin = '5px';
            radio.type = 'radio';
            radio.name = 'option';  // Same name so only one can be selected
            radio.value = option.toLowerCase();
            
            label.appendChild(document.createElement ('br'));
            newQuestion.appendChild(label);
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            container.appendChild(newQuestion);


            input.value = "";
            // options.forEach((option)=>{
            //     option.values = "";
            // })
            option1.value = "";
            option2.value = "";
            option3.value = "";
            option4.value = "";

        }))
    })

    header.replaceWith(newDiv)
    newDiv.appendChild(input);
    newDiv.appendChild(option1);
    newDiv.appendChild(option2);
    newDiv.appendChild(option3);
    newDiv.appendChild(option4);
    newDiv.appendChild(addButton);
    document.body.appendChild(container);

})