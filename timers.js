
//1 Таймер должен получать время обратного отсчёта в конструкторе
//2 Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
//3 Должен иметь в конструторе параметр для автоматического запуска(true/false). См на видео пример. 1ый таймер по кнопке запускается, а 2ой автоматически
//4 Длина полоски уменьшается с движением таймера(анимацию советую делать потом отдельно, она в этом задании НЕОБЯЗАТЕЛЬНА)
//Дополнительно: добавьте параметр в конструктор, который позволит передать интервал обновления таймера. Например раз в 1 секунду/100 мс/2с/10с. Обратите внимание на видео – нижний таймер меняется каждые 2 секунды.





const container = document.querySelector("#timers-container");

const INTERVALS = {
     timerfirst: 59000,
     timersecond: 98*60*1000,
     timertest: 20000
} 

class Timer {
    constructor(){
//        this.distance = 59000;
        this.type = INTERVALS.timersecond;
        this.render();
    }
     
    createTimer(){
        let xTime = new Date("Jan 5, 2019 15:37:00").getTime();
        let countDownDate = xTime + this.type;
    this.interval = setInterval(() =>{
        xTime +=1000;
        let diff = countDownDate - xTime;
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
  // Display the result in the element with id=""
      document.getElementById("timers").innerHTML = minutes + ": " + seconds;

  // If the count down is finished, write some text 
   if (diff <= 0) {
       clearInterval(this.interval);
       document.getElementById("timers").innerHTML = "01"+":"+"00";
    }
 }, 1000);
        
        
    }
    
    pauseInterval(){
        clearInterval(this.interval);
    }
    continueInterval(){
        this.createTimer();
    }
    
    render(){
        this.timer = document.createElement("div");
        this.timer.classList.add("counter");
        this.timer.classList.add("this.type");
        this.timer.append(this.createTimer());
        
        container.append(this.timer);
        this.timer.addEventListener("mouseenter", this.pauseInterval.bind(this));
        this.timer.addEventListener("mouseleave", this.continueInterval.bind(this));
    }
}
   
 new Timer();   