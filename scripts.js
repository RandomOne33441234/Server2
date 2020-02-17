var count;
    count=0;
var dealertotal;
    dealertotal=0;
var playertotal;
    playertotal=0;
var pass;
    pass=true;
function Twist(){
    let x=Math.ceil((Math.random()*10))
    var y = Number(document.getElementById("total").innerHTML);
    document.getElementById("new").innerHTML = x;
    if (y+x>21){
        document.getElementById("winner").innerHTML = "dealer has won,again";
        pass=false
        console.log("bust");
    }
    else {
        document.getElementById("total").innerHTML = x + y;
        count=count+1
    }
}
function Stick() {
    var dealertotal=0;
    var playertotal=document.getElementById("total").innerHTML;
    while (dealertotal<15){
        var newcard=Math.ceil(Math.random()*10)
        document.getElementById("newdealer").innerHTML = newcard;
        dealertotal=dealertotal+newcard
        document.getElementById("totaldealer").innerHTML = dealertotal;
    }
    if(dealertotal>=playertotal) {
        if (dealertotal < 22) {
            document.getElementById("winner").innerHTML = "dealer has won,again";
        }
        else
            document.getElementById("winner").innerHTML = "you have won well done, for now";
    }

    else if (playertotal>dealertotal){
        if (pass==true) {
            document.getElementById("winner").innerHTML = "you have won for now well done";
        }
        else
            document.getElementById("winner").innerHTML = "dealer has won,again";

    }
}
function workplease(newdealer){
    console.log("hi")
    document.getElementById("newdealer").innerHTML="";
    document.getElementById("totaldealer").innerHTML="";
    document.getElementById("new").innerHTML="";
    document.getElementById("total").innerHTML="";
    document.getElementById("winner").innerHTML="undecided";
    dealertotal=0
    playertotal=0
    pass=true

}
