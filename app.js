var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
getJSON("https://bitcointry.herokuapp.com/?url=https://www.btcturk.com/api/ticker", function (err, data) {

    if (err)
        console.log("error")
    else {        
        var btc = document.getElementById("btcturk").children;
        btc[1].innerText = " Alış: " + Math.floor(data[0].bid).toString() + " Satış: " + Math.floor(data[0].ask).toString();
        btc[2].innerHTML = "<img src='https://ethereum.org/images/logos/ETHEREUM-ICON_Black.png' height='20' width='20'></img>Alış: " + Math.floor(data[2].bid).toString() + " Satış: " + Math.floor(data[2].ask).toString();
                  
            /*console.log(
                i+" ask : "+data[i].ask+" open : "+data[i].open+" "
                +((data[i].ask-data[i].open)/data[i].open)*100);*/
        if ((data[0].ask-data[0].open)/data[0].open*100 < 0) 
            btc[1].className="negative";
         else 
            btc[1].className="positive";      
        if ((data[2].ask-data[2].open)/data[2].open*100 < 0) 
            btc[2].className="negative";
        else 
            btc[2].className="positive";                   
        
    }
});
getJSON("https://bitcointry.herokuapp.com/?url=https://www.paribu.com/ticker", function (err, data) {

    if (err)
        console.log("error")
    else {
        data = data.BTC_TL;        
        var btc = document.getElementById("paribu").lastElementChild;
        btc.innerText = " Alış: " + Math.floor(data.highestBid).toString() + " Satış: " + Math.floor(data.lowestAsk).toString();
        if (data.percentChange < 0) 
             btc.className="negative";
        else 
            btc.className="positive";
    }
});
getJSON("https://bitcointry.herokuapp.com/?url=https://koinim.com/ticker/", function (err, data) {
    
        if (err)
            console.log("error")
        else {   
            var btc = document.getElementById("koinim").lastElementChild;
            btc.innerText = " Alış: " + Math.floor(data.buy).toString() + " Satış: " + Math.floor(data.sell).toString();
            if (data.change_rate < 0) 
              btc.className="negative";
            else btc.className="positive";
        }
    });
    getJSON("https://bitcointry.herokuapp.com/?url=https://koineks.com/ticker", function (err, data) {
        
            if (err)
                console.log("error")
            else {                
                var btc = document.getElementById("koineks").children;
                btc[1].innerText = " Alış: " + Math.floor(data['BTC'].bid).toString() + " Satış: " + Math.floor(data['BTC'].ask).toString();                
                btc[2].innerHTML = "<img src='https://ethereum.org/images/logos/ETHEREUM-ICON_Black.png' height='20' width='20'></img>Alış: " + Math.floor(data['ETH'].bid).toString() + " Satış: " + Math.floor(data['ETH'].ask).toString();
                btc[3].innerHTML = "<img src='https://litecoin.org/img/litecoin.svg' height='20' width='20'></img>Alış: " + Math.floor(data['LTC'].bid).toString() + " Satış: " + Math.floor(data['LTC'].ask).toString();
                var coins = ["BTC","ETH","LTC"];
                //console.log(data[coins[0]].change_percentage);
                for (var i = 1; i <= 3; i++) {
                    if (data[coins[i-1]].change_percentage < 0) 
                        btc[i].className="negative";
                  else 
                        btc[i].className="positive";                    
                }
            }
        });
