let counter = 1;
function task1() {
    document.getElementById('btn').innerHTML = ++counter;
}
function task2() {
    const answer = document.getElementById("answer1").value;

    if (answer == "אדום") {
        document.getElementById("output1").innerHTML = "נכון"
    } else {
        document.getElementById("output1").innerHTML = "לא נכון"
    }
}
function task3() {

    const city = document.getElementById("city").value;
    if (city == "קרית ארבע") {
        document.getElementById("output2").innerHTML = "נכון";
        document.getElementById("city").style.border = " 3px solid green";
    }
}





function task5() {
    counter2++;

    document.getElementById("btn2").innerHTML = counter2;
    document.getElementById("btn2").style.fontSize = (counter2 * 3 + 18) + "px";
    document.getElementById("btn2").style
}