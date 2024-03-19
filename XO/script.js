var turn = "X";
var finished = false;

var x_result = 0;
var o_result = 0;

// ------------------------------------------------------

function f(n)
{
    if (document.getElementById("s" + n).innerHTML != "" || finished == true)
    {
        var sound = new Audio("sounds/s (5).mp3");
        sound.play();
        return;
    }
        

    document.getElementById("s" + n).innerHTML = turn;

    check_wining();

    if (turn == "X")
    {
        var sound = new Audio("sounds/s (2).mp3");
        sound.play();
        turn = "O";
    }
    else
    {
        var sound = new Audio("sounds/s (3).mp3");
        sound.play();
        turn = "X";
    }
}

// ------------------------------------------------------

function check_wining()
{
    var s1 = document.getElementById("s1").innerHTML;
    var s2 = document.getElementById("s2").innerHTML;
    var s3 = document.getElementById("s3").innerHTML;

    var s4 = document.getElementById("s4").innerHTML;
    var s5 = document.getElementById("s5").innerHTML;
    var s6 = document.getElementById("s6").innerHTML;


    var s7 = document.getElementById("s7").innerHTML;
    var s8 = document.getElementById("s8").innerHTML;
    var s9 = document.getElementById("s9").innerHTML;

    if (s1 == s2 && s2 == s3 && s1 != "")
    {
        finished = true;
        show_line("70px" , "50px" , "line1");
        document.getElementById("s1").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s2").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s3").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s4 == s5 && s5 == s6 && s4 != "")
    {
        finished = true;
        show_line("180px" , "50px" , "line1");
        document.getElementById("s4").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s5").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s6").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s7 == s8 && s8 == s9 && s7 != "")
    {
        finished = true;
        show_line("290px" , "50px" , "line1");
        document.getElementById("s7").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s8").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s9").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s1 == s4 && s4 == s7 && s7 != "")
    {
        finished = true;
        show_line("50px" , "73px" , "line2");
        document.getElementById("s1").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s4").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s7").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s2 == s5 && s5 == s8 && s8 != "")
    {
        finished = true;
        show_line("50px" , "203px" , "line2");
        document.getElementById("s2").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s5").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s8").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s3 == s6 && s6 == s9 && s9 != "")
    {
        finished = true;
        show_line("50px" , "333px" , "line2");
        document.getElementById("s3").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s6").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s9").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s1 == s5 && s5 == s9 && s9 != "")
    {
        finished = true;
        show_line("10px" , "210px" , "line3");
        document.getElementById("s1").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s5").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s9").style.backgroundColor = "rgb(117, 255, 105)";
    }
    else if (s3 == s5 && s5 == s7 && s7 != "")
    {
        finished = true;
        show_line("10px" , "200px" , "line4");
        document.getElementById("s3").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s5").style.backgroundColor = "rgb(117, 255, 105)";
        document.getElementById("s7").style.backgroundColor = "rgb(117, 255, 105)";
    }

    if (finished == false && s1!="" && s2!="" && s3!="" && s4!="" && s5!="" && s6!="" && s7!="" && s8!="" && s9!="")
        document.getElementById("again").style.display = "block";

    if (finished == true)
    {
        document.getElementById("again").style.display = "block";

        if (turn =="X")
        {
            x_result++;
            document.getElementById("x").innerHTML = x_result;
        }
        else if (turn =="O")
        {
            o_result++;
            document.getElementById("o").innerHTML = o_result;
        }
    }

}

// ------------------------------------------------------

function show_line(top , left , nam)
{
    var line = document.getElementById(nam);
    line.style.display = "block";
    line.style.top = top ;
    line.style.left = left ;
}

// ------------------------------------------------------

function restart()
{
    finished = false;
    turn = "X";

    document.getElementById("s1").innerHTML = "";
    document.getElementById("s2").innerHTML = "";
    document.getElementById("s3").innerHTML = "";

    document.getElementById("s4").innerHTML = "";
    document.getElementById("s5").innerHTML = "";
    document.getElementById("s6").innerHTML = "";

    document.getElementById("s7").innerHTML = "";
    document.getElementById("s8").innerHTML = "";
    document.getElementById("s9").innerHTML = "";

    document.getElementById("line1").style.display = "none";
    document.getElementById("line2").style.display = "none";
    document.getElementById("line3").style.display = "none";
    document.getElementById("line4").style.display = "none";

    document.getElementById("s1").style.backgroundColor = "#c7ecff";
    document.getElementById("s2").style.backgroundColor = "#c7ecff";
    document.getElementById("s3").style.backgroundColor = "#c7ecff";

    document.getElementById("s4").style.backgroundColor = "#c7ecff";
    document.getElementById("s5").style.backgroundColor = "#c7ecff";
    document.getElementById("s6").style.backgroundColor = "#c7ecff";

    document.getElementById("s7").style.backgroundColor = "#c7ecff";
    document.getElementById("s8").style.backgroundColor = "#c7ecff";
    document.getElementById("s9").style.backgroundColor = "#c7ecff";

    document.getElementById("again").style.display = "none";

    var sound = new Audio("sounds/s (6).mp3");
    sound.play();

}