/*let input = document.querySelector('input');
let container = document.querySelector('.container');
let X = true
input.addEventListener('mousedown' (e) ,{
    if(X = true){
        document.write('X');
        X = false;
    }
})
input.addEventListener('mousedown' (e) ,{
    if(X = false){
        document.write('O');
        X = true;
    }
})
*/
document.write("Child-Preadtor-Toe");
let X = false;
let counter = 0;
let idkCheck = 0;
let idk1Check = 0;
let idk2Check = 0;
let idk3Check = 0;
let idk4Check = 0;
let idk5Check = 0;
let idk6Check = 0;
let idk7Check = 0;
let idk8Check = 0;
function myCoolFunction(){
    if(idk1Check == 1 && idk2Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk7Check == 1 && idk6Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk1Check == 2 && idk2Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk7Check == 2 && idk6Check == 2 && X == true){
        document.write("X WINS");
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idkCheck = 1;
        document.getElementById("idk").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idkCheck = 2;
        document.getElementById("idk").innerHTML = "X";    
        counter++;
        X = false;
    }
}
function myCoolerFunction(){
    if(idkCheck == 1 && idk2Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk8Check == 1 && idk5Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk3Check == 1 && idk6Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk7Check == 1 && idk4Check == 1 && X == false){
        document.write("O WINS");
    }   
    if(idkCheck == 2 && idk2Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk8Check == 2 && idk5Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk3Check == 2 && idk6Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk7Check == 2 && idk4Check == 2 && X == true){
        document.write("X WINS");
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk1Check = 1;
        document.getElementById("idk1").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk1Check = 2
        document.getElementById("idk1").innerHTML = "X";    
        counter++;
        X = false;
    }    
}
function myCoolestFunction(){
    if(idk1Check == 1 && idkCheck == 1 && X == false){
        document.write("O WINS");
    }
    if(idk3Check == 1 && idk4Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk1Check == 2 && idkCheck == 2 && X == true){
        document.write("X WINS");
    }
    if(idk3Check == 2 && idk4Check == 2 && X == true){
        document.write("X WINS");
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk2Check = 1;
        document.getElementById("idk2").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk2Check = 2;
        document.getElementById("idk2").innerHTML = "X";    
        counter++;
        X = false;
    }    
}
function myCoolestCoolFunction(){
        if(idk8Check == 1 && idk7Check == 1 && X == false){
            document.write("O WINS")
        }
        if(idk1Check == 1 && idk6Check == 1 && X == false){
            document.write("O WINS");
        }
        if(idk2Check == 1 && idk4Check == 1 && X == false){
            document.write("O WINS")
        }
        if(idk8Check == 2 && idk7Check == 2 && X == true){
            document.write("X WINS")
        }
        if(idk1Check == 2 && idk6Check == 2 && X == true){
            document.write("X WINS");
        }
        if(idk2Check == 2 && idk4Check == 2 && X == true){
            document.write("X WINS")
        }
        if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk3Check = 1;
        document.getElementById("idk3").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk3Check = 2;
        document.getElementById("idk3").innerHTML = "X";    
        counter++;
        X = false;
    }        
}
function myCoolestCoolerFunction(){
    if(idk2Check == 1 && idk3Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk1Check == 1 && idk7Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk5Check == 1 && idk6Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk2Check == 2 && idk3Check == 2 && X == true){
        document.write("X WINS")
    }
    if(idk1Check == 2 && idk7Check == 2 && X == true){
        document.write("X WINS")
    }
    if(idk5Check == 2 && idk6Check == 2 && X == true){
        document.write("X WINS")
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk4Check = 1;
        document.getElementById("idk4").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk4Check = 2;
        document.getElementById("idk4").innerHTML = "X";    
        counter++;
        X = false;
    }        
}
function myCoolestCoolestFunction(){
    if(idk1Check == 1 && idk8Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk4Check == 1 && idk6Check == 2 && X == false){
        document.write("O WINS")
    }
    if(idk1Check == 2 && idk8Check == 2 && X == true){
        document.write("X WINS")
    }
    if(idk4Check == 2 && idk6Check == 2 && X == true){
        document.write("X WINS")
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk5Check = 1;
        document.getElementById("idk5").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk5Check = 2;
        document.getElementById("idk5").innerHTML = "X";    
        counter++;
        X = false;
    }        
}
function myCoolestCoolestCoolFunction(){
    if(idkCheck == 1 && idk7Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk3Check == 1 && idk1Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk5Check == 1 && idk4Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idkCheck == 2 && idk7Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk3Check == 2 && idk1Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk5Check == 2 && idk4Check == 2 && X == true){
        document.write("X WINS")
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk6Check = 1;
        document.getElementById("idk6").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk6Check = 2;
        document.getElementById("idk6").innerHTML = "X";    
        counter++;
        X = false;
    }        
}
function myCoolestCoolestCoolerFunction(){
    if(idk3Check == 1 && idk8Check == 1 && X == false){
        document.write("O WINS");
    }
    if(idk1Check == 1 && idk4Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idkCheck == 1 && idk6Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk3Check == 2 && idk8Check == 2 && X == true){
        document.write("X WINS");
    }
    if(idk1Check == 2 && idk4Check == 2 && X == true){
        document.write("X WINS")
    }
    if(idkCheck == 2 && idk6Check == 2 && X == true){
        document.write("X WINS")
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk7Check = 1;
        document.getElementById("idk7").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk7Check = 2;
        document.getElementById("idk7").innerHTML = "X";    
        counter++;
        X = false;
    }        
}
function myCoolestCoolestCoolestFunction(){
    if(idk3Check == 1 && idk7Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk1Check == 1 && idk5Check == 1 && X == false){
        document.write("O WINS")
    }
    if(idk3Check == 2 && idk7Check == 2 && X == true){
        document.write("X WINS")
    }
    if(idk1Check == 2 && idk5Check == 2 && X == true){
        document.write("X WINS")
    }
    if(counter == 8){
        document.write("TIE GAME!!!!!!!!");
    }
    if(X == false){
        idk8Check = 1;
        document.getElementById("idk8").innerHTML = "O";
        counter++;
        X = true;
    }
    else{
        idk8Check = 2;
        document.getElementById("idk8").innerHTML = "X";    
        counter++;
        X = false;
    }        
}

