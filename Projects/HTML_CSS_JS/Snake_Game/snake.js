document.addEventListener('DOMContentLoaded',()=>{
    const squares=document.querySelectorAll('.grid div');
    const scoreDisplay=document.querySelector('span');
    const startBtn=document.querySelector('.start');

    const width=10;
    let currentIndex=0;
    let appleIndex=0;
    let currentSnake=[2,1,0];
    let direction=1;
    let score=0;
    let speed=0.9;
    let intervalTime=0;
    let interval=0;

    function startGame(){
        currentSnake.forEach(index=>squares[index].classList.remove('snake'));
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score=0;
        randomApple();
        direction=1;
        scoreDisplay.innerText=score;
        intervalTime=1000;
        currentSnake=[2,1,0];
        currentIndex=0;
        currentSnake.forEach(index=>squares[index].classList.add('snake'));
        console.log('curret Snale is at ',currentSnake);
        interval=setInterval(moves,intervalTime);
    }

    function randomApple(){
      do{
        appleIndex=Math.floor(Math.random()*squares.length);
        console.log('apple index is at ',appleIndex);
        console.log('Snake is at ',currentSnake[0]);
      }
      while(squares[appleIndex].classList.contains('snake')){
        // randomApple();
        squares[appleIndex].classList.add('apple');

      }
    }

    function moves(){
        if(
            (currentSnake[0]+width>=(width*width)&& direction===width) ||
            (currentSnake[0]-width < 0 && direction===-width) ||
            (currentSnake[0] % width === 0 && direction===-1) ||
            (currentSnake[0] % width===(width-1) && direction===1) ||
            squares[currentSnake[0]+direction].classList.contains('snake')
        ){
            const position=currentSnake[0]
            alert('GAME IS OVER');
            console.log('value is ',position);
            return clearInterval(interval);

        }
        const tail=currentSnake.pop();
        squares[tail].classList.remove('snake');
        currentSnake.unshift(currentSnake[0]+direction);
        if(squares[currentSnake[0]].classList.contains('apple')){
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            score++;
            scoreDisplay.textContent=score;
            console.log('the score is ',scoreDisplay);
            randomApple();
           
            clearInterval(interval);
            intervalTime=intervalTime*speed;
            interval=setInterval(moves,intervalTime);
        }
        squares[currentSnake[0]].classList.add('snake');

    }
    function control(e){
        if(e.keyCode===39){
            direction=1
        }
        else if(e.keyCode===37){
            direction=-1
        }
        else if(e.keyCode===38){
            direction=-width
        }
        else if(e.keyCode===40){
            direction=+width
        }
    }
document.addEventListener('keyup',control)
    startBtn.addEventListener('click',startGame)
})