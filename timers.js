
//1 Таймер должен получать время обратного отсчёта в конструкторе
//2 Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
//3 Должен иметь в конструторе параметр для автоматического запуска(true/false). См на видео пример. 1ый таймер по кнопке запускается, а 2ой автоматически
//4 Длина полоски уменьшается с движением таймера(анимацию советую делать потом отдельно, она в этом задании НЕОБЯЗАТЕЛЬНА)
//Дополнительно: добавьте параметр в конструктор, который позволит передать интервал обновления таймера. Например раз в 1 секунду/100 мс/2с/10с. Обратите внимание на видео – нижний таймер меняется каждые 2 секунды.





const container = document.querySelector("#timers-container");

//const INTERVALS = {
//     timerfirst: "one",
//     timersecond: "two",
//     timertest: "false"
//} 
//
//class Timer {
//    constructor(number,type){
//
//       this.number = number in INTERVALS ? number : "timertest";
//        this.type = type;
//        this.render();
//    }
//    
//    
//    
//        
//        
//    }
//    
//    pauseInterval(){
//        clearInterval(this.interval);
//    }
//    continueInterval(){
//        this.createTimer();
//    }
//    
//    render(){
//        this.timer = document.createElement("div");
//        this.timer.classList.add("counter");
//        this.timer.classList.add(this.number);
//        container.append(this.timer);
//        
//        this.timer.append(this.createTimer());
//
//        
////        this.timer.addEventListener("mouseenter", this.pauseInterval.bind(this));
////        this.timer.addEventListener("mouseleave", this.continueInterval.bind(this));
//        
//    }
//}
//  




class Timer {
    constructor(minutes,step){
        this.step = step;
        this.secondsRem = minutes * 60;
        this.buttonHandler = this.buttonHandler.bind(this);
        this.render();
    }
     

    tick(){
     this.timeDisplay = document.createElement("div");
        
     this.timeDisplay.classList.add("timecounter");
        
        this.interval = setInterval(() =>{   
         
           let min = Math.floor(this.secondsRem / 60);
        
           let sec = this.secondsRem - (min * 60);
        
         if (sec < 10) {
             sec = "0" + sec; 
    }
             let time = min + ":" + sec;
        
             this.timeDisplay.innerHTML = time;
        
         if (this.secondsRem === 0) {
             clearInterval(this.interval);
        }
            this.secondsRem -=(this.step/1000);
         }, this.step);
       return this.timeDisplay; 
         
    }
    
    createButton(){
        this.button = document.createElement("button");
        this.button.classList.add("btn");
        this.button.innerText = "Start";
        this.button.addEventListener("click", this.buttonHandler.bind(this));
        return this.button; 
    }
    
    buttonHandler() {
        if (this._inProccess) {
            this.button.innerText = "Start";
            this.pauseTimer();
        } else {
            this.button.innerText = "Stop";
            this.startTimer();
        }
    }
    render(){
        this.timer = document.createElement("div");
        this.timer.classList.add("counter");
       
        container.append(this.timer);
        
        this.timer.append(this.tick());
        this.timer.append(this.createButton());


        
    }
    
}
    
    new Timer(1,1000);
    new Timer(99,2000);
