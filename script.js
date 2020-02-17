//łączenie z api oraz pobieranie danych.
function convertCurrency(){
    var from = document.getElementById('listA').value;
    var to = document.getElementById('listB').value;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://data.fixer.io/api/latest?access_key=ff0d20d947f933010006898f8d9cb650&symbols=" + from + "," + to;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
            var oneUnit = jsResult.rates[to]/jsResult.rates[from];
            var amt = document.getElementById('valueA').value;
            document.getElementById('valueB').value = (oneUnit*amt).toFixed(2);
        }
    }
}
//zamiana flag
/*window.onload = changeFlag();

function changeFlag(){
    var from = document.getElementById('listA').value;
    var to = document.getElementById('listB').value;
    var flagA = document.getElementById('flagA');
    var flagB = document.getElementById('flagB');
    flagA.src="/images/"+from+".png";
    flagB.src="/images/"+to+".png";
}
    */
