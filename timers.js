
//1 Таймер должен получать время обратного отсчёта в конструкторе
//2 Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
//3 Должен иметь в конструторе параметр для автоматического запуска(true/false). См на видео пример. 1ый таймер по кнопке запускается, а 2ой автоматически
//4 Длина полоски уменьшается с движением таймера(анимацию советую делать потом отдельно, она в этом задании НЕОБЯЗАТЕЛЬНА)
//Дополнительно: добавьте параметр в конструктор, который позволит передать интервал обновления таймера. Например раз в 1 секунду/100 мс/2с/10с. Обратите внимание на видео – нижний таймер меняется каждые 2 секунды.





const container = document.querySelector("#timers-container");





class Timer {
    constructor(minutes, step, autoRun = false){
        this.step = step;
        this.secondsRem = minutes * 60;
        this.restart = minutes * 60;
        this.autoRun = autoRun;
        this.counting = false;
        this.buttonHandler = this.buttonHandler.bind(this);
        this.render();
      if(autoRun){
          this.button.innerText = "Stop";
            this.continueInterval();
      }
    }
    
    //метод класса отрисовывает output
     createTimer() {
        this.timeDisplay = document.createElement("div");
        
     this.timeDisplay.classList.add("timecounter");
        return this.timeDisplay;
    }

    tick(){
        
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
              this.secondsRem = this.restart;
             this.buttonHandler();
        }
            this.secondsRem -=(this.step/1000);
            
         }, this.step);
 
    }
    
    
    
    createButton(){
        this.button = document.createElement("button");
        this.button.classList.add("btn");
        this.button.innerText = "Start";
        this.button.addEventListener("click", this.buttonHandler.bind(this));
        return this.button; 
    }
    
    buttonHandler() {
        if (this.counting) {
            this.pauseInterval();
            this.button.innerText = "Start";
            
        } else {
            this.continueInterval();
            this.button.innerText = "Stop";
            
        }
    }
    
    

    continueInterval(){
        this.counting = true;
        this.tick();
    }
    
    pauseInterval(){
        this.counting = false;
        clearInterval(this.interval);
        this.interval = null;
    }
    
    
    render(){

        container.append(this.createTimer());
        container.append(this.createButton());

    }
    
}
    
    new Timer(0.5, 1000);
    new Timer(1, 2000, true);
