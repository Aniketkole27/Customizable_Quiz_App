const mainDiv = document.querySelector(".main_contaner");
const header = document.querySelector(".header");
const addDiv = document.querySelector("#add");
const startTest = document.querySelector(".startTest");

let container = document.createElement("div");
container.classList.add("container");

let newDiv = document.createElement("div");
newDiv.classList.add("newDiv");

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("autocomplete", "off");
input.setAttribute("placeholder", "Enter your question...");

let option1 = document.createElement("input");
option1.setAttribute("type", "text");
option1.setAttribute("class", "options");
option1.setAttribute("placeholder", "option A");

let option2 = document.createElement("input");
option2.setAttribute("type", "text");
option2.setAttribute("class", "options");
option2.setAttribute("placeholder", "option B");

let option3 = document.createElement("input");
option3.setAttribute("type", "text");
option3.setAttribute("class", "options");
option3.setAttribute("placeholder", "option C");

let option4 = document.createElement("input");
option4.setAttribute("type", "text");
option4.setAttribute("class", "options");
option4.setAttribute("placeholder", "option D");

let answer = document.createElement("input");
answer.setAttribute("type", "text");
answer.setAttribute("class", "options ans");
answer.setAttribute("maxlength", "1");
answer.setAttribute("placeholder", "Enter answer like A, B, C, D");

answer.addEventListener("input", () => {
  answer.value = answer.value.toUpperCase();
  answer.value = answer.value.replace(/[^A-D]/g, "");
});
newDiv.appendChild(answer);

let correctAnswers = [];
function addCorrectAnswer(srNo, correctOption) {
  let answer = {
    SrNo: srNo,
    correctOption: correctOption,
  };
  correctAnswers.push(answer);
}

addDiv.addEventListener("click", () => {
  let addButton = document.createElement("button");
  addButton.id = "addbtn";
  addButton.classList.add("btn");
  addButton.innerText = "Add Question";

  addButton.addEventListener("click", () => {
    addCorrectAnswer(counter, answer.value);
    console.log(correctAnswers);
    let a1 = option1.value;
    let a2 = option2.value;
    let a3 = option3.value;
    let a4 = option4.value;
    let a5 = answer.value;
    let options = [a1, a2, a3, a4];
    if (input.value !== "" && (a1, a2, a3, a4, a5 !== "")) {
        checkMarks(options);
    }

    input.value = "";
    option1.value = "";
    option2.value = "";
    option3.value = "";
    option4.value = "";
    answer.value = "";
  });

  header.replaceWith(newDiv);
  newDiv.appendChild(input);
  newDiv.appendChild(option1);
  newDiv.appendChild(option2);
  newDiv.appendChild(option3);
  newDiv.appendChild(option4);
  newDiv.appendChild(answer);
  newDiv.appendChild(addButton);
  mainDiv.appendChild(container);
});

// function storeAnswers() {
//   console.log("clicked 1");
// }

let endExam = document.createElement("button");
endExam.setAttribute = "button";
endExam.innerText = "End Exam";
endExam.classList.add("btn");
endExam.id = "eExam";

let counter = 0;

const checkMarks = (arr) => {
  counter++;
  let newQuestion = document.createElement("div");
  newQuestion.classList.add("newQuestion");

  let numberSpan = document.createElement("span");
  numberSpan.classList.add("number");
  numberSpan.innerText = counter + ". ";

  let textSpan = document.createElement("span");
  textSpan.classList.add("text");
  textSpan.innerText = input.value;

  //   storeAnswers(counter);
  newQuestion.appendChild(numberSpan);
  newQuestion.appendChild(textSpan);

  if (counter >= 1) {
    container.style.backgroundColor = "bisque";
  }

  if (counter === 1) {
    let start = document.createElement("button");
    start.setAttribute = "button";
    start.innerText = "Start Test";
    start.id = "sTest";
    start.classList.add("btn");

    let label = document.createElement("span");
    label.innerHTML = "Minutes: ";
    label.classList.add("timerText");

    let timer = document.createElement("input");
    timer.setAttribute("type", "number");
    timer.setAttribute("class", "timer");
    timer.setAttribute("placeholder", "SetTime");
    timer.style.margin = "10px";

    startTest.appendChild(start);
    startTest.appendChild(label);
    startTest.appendChild(timer);
    mainDiv.appendChild(startTest);

    document.querySelector("#sTest").addEventListener("click", () => {
      // console.log("Hey i am clicked");
      let time = timer.value;

      if (time !== "") {
        mainDiv.replaceChild(container, newDiv);
        updateTime(time);
        startTest.appendChild(endExam);
        start.style.display = "none";
        timer.style.display = "none";
        label.style.display = "none";

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        alert("Enter the Timing for Exam.");
      }
    });
  }

  let count = "A";
  arr.forEach((option) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.style.margin = "5px";
    radio.type = "radio";
    radio.name = "option" + counter; // Same name so only one can be selected
    radio.value = count;
    count = String.fromCharCode(count.charCodeAt(0) + 1);

    label.appendChild(document.createElement("br"));
    newQuestion.appendChild(label);
    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));
    container.appendChild(newQuestion);
  });
};

const updateTime = (time) => {
  let totalSeconds = time * 60;
  let timeInterval = null;
  const timerDisplay = document.createElement("div");
  timerDisplay.classList.add("timerDisplay");
  mainDiv.insertBefore(timerDisplay, mainDiv.firstChild);

  startTimer();
  function updateTimerDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const second = totalSeconds % 60;
    timerDisplay.innerText = `${minutes}:${second < 10 ? "0" : ""}${second}`;
  }

  function startTimer() {
    timeInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timeInterval);
        timeInterval = null;
        alert("Time's up!");
      }

        function stopTimer() {
          clearInterval(timeInterval);
          timeInterval = null;
          totalSeconds = time * 60;
          updateTimerDisplay();
      }
      endExam.addEventListener("click", ()=>{
          stopTimer();
          timerDisplay.style.display = "none";
      });
    }, 1000);
  }

  updateTimerDisplay();
};

index = 0;
let correct = 0;
endExam.addEventListener("click", () => {
  console.log("clicked");

  let totalQuestions = correctAnswers.length;
  let answers = document.querySelectorAll(".newQuestion");
  console.log(answers);

  answers.forEach((answer, index) => {
    let selected = answer.querySelector("input:checked");
    //   console.log(selected);

    if (selected) {
      let selectedOption = selected.value;
      console.log(selectedOption);
      let correctOption = correctAnswers[index].correctOption;
      // console.log(correctOption);
      if (selectedOption === correctOption) {
        correct++;
      }
    }
  });

  // console.log(correct);
  // alert("Your score is " + correct + " out of " + totalQuestions);
  correct = 0;

  const score = document.createElement("div");
  score.classList.add("score");
  score.innerText = "Score : " + correct + " out of " + totalQuestions + " ";

  const reload = document.createElement("button");
  reload.classList.add("btn");
  reload.innerText = "-> Home Page";
  reload.style.margin = "10px";
  score.appendChild(reload);

  endExam.style.display = "none";
  mainDiv.replaceChild(score, container);


  reload.addEventListener('click',()=>{
      window.location.reload();
  })

});
