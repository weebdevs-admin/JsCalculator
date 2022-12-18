function calculator( elInput1,elInput2,elInput3){
    var elInput1 = document.querySelector(".input1").value;
    var elInput2 = document.querySelector(".input2").value;
    var elInput3 = document.querySelector(".input3").value;
    var elBtn = document.querySelector(".btn")
    var elTitle = document.querySelector(".title")
    var a = Number(elInput1) + Number(elInput2);
    var b = Number(elInput1) / Number(elInput2);
    var c = Number(elInput1) - Number(elInput2);
    var d = Number(elInput1) * Number(elInput2);

    if(elInput3 == "*"){
        elTitle.textContent = d;
    }else if(elInput3 == "/"){
        elTitle.textContent = b;
    }else if(elInput3 == "-"){
        elTitle.textContent = c;
    }else if(elInput3 == "+"){
        elTitle.textContent = a;
    }else{
        elTitle.textContent = "Kiritilishda Xato!"
    }



}