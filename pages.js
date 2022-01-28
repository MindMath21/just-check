let Up = document.getElementsByClassName("upperbeats");
let box = document.getElementsByClassName("box");
let rodes = document.getElementsByClassName("rodes")
let lower1 = document.getElementsByClassName("lower1");
let lower2 = document.getElementsByClassName("lower2");
let lower3 = document.getElementsByClassName("lower3");
let lower4 = document.getElementsByClassName("lower4");
let button = document.getElementById("button");
let collect = document.getElementsByClassName("collect")
let checkBtn = document.getElementById("checkBtn");

for(let c = 0; c < collect.length; c++){
    collect[c].value = 0;
}

function upper(i){
    Up[i].addEventListener("click",()=>{
        if(!Up[i].classList.contains("down")){
            Up[i].classList.add("down");
            collect[i].value += 5;
        }else if(Up[i].classList.contains("down")){
           Up[i].classList.remove("down");
           collect[i].value += -5;
        }
        box[i].innerHTML = collect[i].value;
    });
}
upper(0);
upper(1);

// first beat
function firstbeat(i){
    lower1[i].addEventListener("click",()=>{//first beat
        if(!lower1[i].classList.contains("up")){
            lower1[i].classList.add("up")
            collect[i].value += 1;//perfect 
        }else if(lower1[i].classList.contains("up") && !lower2[i].classList.contains("up")){
            lower1[i].classList.remove("up")
            collect[i].value += -1;//done
        }else if(lower2[i].classList.contains("up") && !lower3[i].classList.contains("up")){
            lower1[i].classList.remove("up");
            lower2[i].classList.remove("up");
            collect[i].value += -2;//done
        }else if(lower3[i].classList.contains("up") && !lower4[i].classList.contains("up")){
            lower1[i].classList.remove("up");
            lower2[i].classList.remove("up");
            lower3[i].classList.remove("up");
            collect[i].value += -3;
        }else if(lower3[i].classList.contains("up") && lower4[i].classList.contains("up")){
            lower1[i].classList.remove("up");
            lower2[i].classList.remove("up");
            lower3[i].classList.remove("up");
            lower4[i].classList.remove("up");
            collect[i].value += -4;
        }
        box[i].innerHTML = collect[i].value;
    });
}
firstbeat(0);firstbeat(1);
//up down complete

function secondbeat(i){
    lower2[i].addEventListener("click",()=>{//first beat
        if(lower1[i].classList.contains("up") && !lower2[i].classList.contains("up")){
            lower2[i].classList.add("up"); 
            collect[i].value += 1;
        }else if(lower1[i].classList.contains("up") && lower2[i].classList.contains("up") && !lower3[i].classList.contains("up")){
            lower2[i].classList.remove("up");
            collect[i].value += -1;
        }else if(!lower1[i].classList.contains("up")){
            lower1[i].classList.add("up");
            lower2[i].classList.add("up");
            collect[i].value += 2;
        }else if(lower3[i].classList.contains("up") && !lower4[i].classList.contains("up")){
            lower2[i].classList.remove("up");
            lower3[i].classList.remove("up");
            collect[i].value += -2;
        }else if(lower4[i].classList.contains("up")){
            lower2[i].classList.remove("up");
            lower3[i].classList.remove("up");
            lower4[i].classList.remove("up");
            collect[i].value += -3;
        }
        box[i].innerHTML = collect[i].value;
    });
};
secondbeat(0);
secondbeat(1);
//complete up and down

function thirdbeat(i){
    lower3[i].addEventListener("click",()=>{//first beat
        if(lower2[i].classList.contains("up") && !lower3[i].classList.contains("up")){
            lower3[i].classList.add("up");
            collect[i].value += 1;
        }else if(!lower1[i].classList.contains("up")){
            lower1[i].classList.add("up");
            lower2[i].classList.add("up");
            lower3[i].classList.add("up");
            collect[i].value += 3;
        }else if(lower3[i].classList.contains("up") && !lower4[i].classList.contains("up")){
            lower3[i].classList.remove("up");
            collect[i].value += -1;
        }else if(lower1[i].classList.contains("up") && !lower4[i].classList.contains("up")){
            lower2[i].classList.add("up");
            lower3[i].classList.add("up");
            collect[i].value += 2;
        }else if(lower3[i].classList.contains("up") && lower4[i].classList.contains("up")){
            lower3[i].classList.remove("up");
            lower4[i].classList.remove("up");
            collect[i].value += -2;
        }
        box[i].innerHTML = collect[i].value;
    });
};
thirdbeat(0);
thirdbeat(1);
//up down complete

function fourthbeat(i){
    lower4[i].addEventListener("click",()=>{//first beat
        if(lower3[i].classList.contains("up") && !lower4[i].classList.contains("up")){
            lower4[i].classList.add("up");
            collect[i].value += 1;
        }else if(lower3[i].classList.contains("up") && lower4[i].classList.contains("up")){
            lower4[i].classList.remove("up");
            collect[i].value += -1;
        }else if(!lower1[i].classList.contains("up")){
            lower1[i].classList.add("up");
            lower2[i].classList.add("up");
            lower3[i].classList.add("up");
            lower4[i].classList.add("up");
            collect[i].value += 4;
        }else if(lower1[i].classList.contains("up") && !lower2[i].classList.contains("up")){
            lower2[i].classList.add("up");
            lower3[i].classList.add("up");
            lower4[i].classList.add("up");
            collect[i].value += 3;
        }else if(lower2[i].classList.contains("up") && !lower3[i].classList.contains("up")){
            lower3[i].classList.add("up");
            lower4[i].classList.add("up");
            collect[i].value += 2;
        }
        box[i].innerHTML = collect[i].value;
    });
};
fourthbeat(0);
fourthbeat(1);
// complete up and down

// button Complete
button.addEventListener("click",()=>{
    let beatupAudio = new Audio("./Audio/beatup.wav")
    
    button.classList.add("slow");
    const allbeats = document.getElementsByClassName("lb")
    for(let i = 0; i<allbeats.length; i++){
       allbeats[i].classList.remove("up");
    }
    for(let i = 0; i < Up.length; i++){
        Up[i].classList.remove("down");
        box[i].innerHTML = 0;
        collect[i].value = 0;
    }
    beatupAudio.play()
});setInterval(function(){button.classList.remove("slow")},240);

let pages_list = document.getElementById("pages_list");
var page = document.getElementById("page");
let header = document.getElementById("header");
let bookLevel = document.getElementById("bookL");
var pagesN = document.querySelectorAll(".t-Pages");
var com = document.getElementsByClassName("com")

console.log(com)

let pageComplete = document.getElementById("pageComplete");
let pageNum2 = document.getElementById("pageNum2");
let goBack = document.getElementById("goBack");
goBack.onclick = ()=>{
    page.classList.remove("show");
    pages_list.classList.remove("gone");
    pageComplete.classList.remove("active");
    header.classList.remove("gone");
    bookLevel.classList.remove("gone");
}
let correct = new Audio("./Audio/correct.wav");
let wrong =new Audio("./Audio/wrong.wav")
console.log(correct)
function pageNumber(pageIndex, pagNum){
    
    page.classList.add("show");
    pages_list.classList.add("gone");
    header.classList.add("gone");
    bookLevel.classList.add("gone");
    page.classList.remove("active")
    page.style.visibility
    console.log(pageIndex);
    var numb = 0;
    newFunction(numb)
    function newFunction(numb){
        pageNum2.innerText = pagNum
        const question = document.getElementById("ques");
        let questionsText = `Q${numb + 1} = ${pageIndex[numb]}`;
        question.innerHTML = questionsText;
        let tqueNum = document.getElementById("number")
        tqueNum.innerText = pageIndex.length;
        let pageNum = document.getElementById("pageNum");
        pageNum.innerText = pagNum;
        let Ans =  addbits(pageIndex[numb]);

        checkBtn.onclick = ()=>{
            checkBtn.classList.add("slow")
            setInterval(function(){checkBtn.classList.remove("slow")},300);
            if(numb + 1 == pageIndex.length){
                if(Ans != `${box[1].innerHTML}${box[0].innerHTML}`){
                    wrong.play()
                    wrong.volume = 0.6;
                }else if(Ans == `${box[1].innerHTML}${box[0].innerHTML}`){
                    correct.pause();
                    correct.currentTime = 0;
                    pageComplete.classList.add("active")
                    console.log(pageComplete);
                    page.classList.add("active");
                    com[pagNum - 1].style.visibility = "visible";
                    let speak = new SpeechSynthesisUtterance(`Well done Page ${pagNum} is Completed`);//by ${authorName.innerText}
                    console.log(speechSynthesis.speak(speak))
                }

            }
            if(Ans == `${box[1].innerHTML}${box[0].innerHTML}`){
                //please don't remove it box[0].innerHTML
                correct.play()
                correct.volume = 0.6;
                if(numb < pageIndex.length - 1){
                    numb++;console.log(numb)
                    newFunction(numb)
                }
                const allbeats = document.getElementsByClassName("lb")
                for(let i = 0; i<allbeats.length; i++){
                   allbeats[i].classList.remove("up");
                }
                for(let i = 0; i < Up.length; i++){
                    Up[i].classList.remove("down");
                    box[i].innerHTML = 0;
                    collect[i].value = 0;
                }
            }else if(Ans != box[0].innerHTML){
                console.log("Try again")
                wrong.play()
                wrong.volume = 0.6;
            }
            
        }
    }
}
function addbits(s) {
    var total = 0;
    s = s.replace(/\s/g, '').match(/[+\-]?([0-9\.\s]+)/g) || [];
    while(s.length) total += parseFloat(s.shift());
    return total;
}