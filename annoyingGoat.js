window.alert("Just assume you and a goat is on a trip, where no one knows the direction to follow. The goat will be asking you series of questions.\n Here we go!!!\n \nclick ok to proceed.");
var questionThings = prompt("Make I ask u somtin?\n Yes or No?"); 
var name;
if (questionThings == "yes" || questionThings == "yeah" || questionThings =="ok"){
    start();
    }else{
        insult();
}



function insult(){
    alert("Go jare, u no b better person, i no dey talk to u again!");
    questionThings = prompt(" ok! ma give u one more chance.\n Make i ask dat question again?");
     if (questionThings == "yes" || questionThings == "yeah"){
     start();
 }else{
     alert(" mumu, i no do again!");
     }
 }


 function start(){

     name = prompt(" Pls person! wetin be your name?"); 


     if (name == null || name == ""){
         questionThings = ("boss! na wow for u, u no enter shishi, abi u go get name?");
         if (questionThings == "yea" || questionThings == "yes"){
         insult();
}else if(questionThings =="No"){
    start();
}


 }else if(Number(name)){
     questionThings= prompt("boss! na wow for u, \n u no wetin be name again?\n may b u no understand, ma ask u again?");
    
    if (questionThings == "yes" || questionThings == "yeah"){
         start();
     } else

     insult();

 }else{
    alert(name + " is a nice name!");
     questionThings= prompt("I no dey play again, back to wetin bring us! We don reash?");
 
     while (questionThings!=="yes" && questionThings!=="yeah"){
    questionThings = prompt(" No! Guy why? I don try! I say we don reash where we de go?");
            }


        if(questionThings=="yes"  || questionThings=="yeah"){
             alert("God save you! \n next time i go just waka leave u! \n oya press 'ok' make we continue to waka!.");

         next();

         }
    

 }

}



function next(){
     questionThings = prompt (" Good! where next we de go, left or right?");

     if(questionThings == "right"){
        right();
     }else if(questionThings == "left"){
         left();
     }else
     alert("I no no wetin u dey do self! u mean make i follow u go there?")
     insult();
 }



 function right(){
     alert(" U make nice choice,\n u wont make heaven ba.......! \nclick 'ok' if u won make heaven.")
    questionThings = prompt (" C " + name + ", u go like to make heaven ba...?");
    if (questionThings == "yes"  || questionThings == "yeah") {

         last();
    }else{
         alert(" na wow for u " + name +",\n u won fuck-up ba........ \nbetter repent ooh!");
        repent();
     }

 }

 function repent(){
     questionThings= prompt( name + " u want repent?");
     if(questionThings== "yeah" || questionThings == "yes"){
         right();
     }else
     insult();
 }


 function left(){
     alert(" see u like lefty person! \n right for make sence, bcos me no dey follow u go hell! \n c anoda chance for repentance!");
     next();
 }

 function last(){
     alert(name + "! u na correct person, me too won go there ooh! ");
     bye();
 }


 function bye(){
    alert("E nice to waka wit u. i don waka leave u!");
    alert("bye " + name + " !!!" )
    questionThings = prompt( name + " u enjoy the gist?");
    if(questionThings == "yes" || questionThings == "yeah"){
        alert(name + ", \nu to like gist! \nAbeg press 'ok' moku start from the first again!");
        start();
    }else if(questionThings == "no"){
        alert( name + " U ma self!");
        insult1();
    }else if(questionThings == ""){
        alert(name + "u no enter shishi!");
    }else{
        alert(name + " wetin be " + questionThings + "?");
        insult1();
    }

 }

 function insult1(){
     alert("go jare, \nu no b better person, \ni no dey talk to u again!");
 }
