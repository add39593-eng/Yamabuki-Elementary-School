function updateCounter(){
  if(localStorage.visits){
    localStorage.visits = Number(localStorage.visits) + 1;
  }else{
    localStorage.visits = 1;
  }
  var el = document.getElementById("visitCount");
  if(el){ el.innerHTML = localStorage.visits; }
}

function updateCountdown(){
  var closingDate = new Date("2013/03/31 00:00:00");
  var now = new Date();
  var diff = closingDate - now;

  var el = document.getElementById("countdown");

  if(!el) return;

  if(diff > 0){
    var days = Math.floor(diff/(1000*60*60*24));
    var hours = Math.floor((diff/(1000*60*60))%24);
    var minutes = Math.floor((diff/(1000*60))%60);
    var seconds = Math.floor((diff/1000)%60);

    el.innerHTML =
      "閉校まであと " +
      days + "日 " +
      hours + "時間 " +
      minutes + "分 " +
      seconds + "秒";
  }else{
    el.innerHTML = "本校は閉校しました。";
  }
}

window.onload = function(){
  updateCounter();
  setInterval(updateCountdown,1000);
}