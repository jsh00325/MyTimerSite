const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const timer_html = document.querySelector('.timer__clock');
const playBtn = document.querySelector('.timer__button__play');
const pauseBtn = document.querySelector('.timer__button__pause');

var time = 1500, timer;



toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

playBtn.addEventListener('click', () => {
    start_timer(timer_html);
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
});
pauseBtn.addEventListener('click', () => {
    stop_timer();
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";

});

/**
 * timer 가동
 * @param {integer} time 설정한 시간을 초로 입력
 * @param {object} obj 타이머를 실행할 객체를 입력
 */
function start_timer(obj) {
    timer = setInterval(function() {
        time--;

        var minute = Math.floor(time / 60);
        var second = time % 60;

        var rslt = "";
        if (minute < 10) rslt += "0";
        rslt += minute;
        rslt += ":";
        if (second < 10) rslt += "0";
        rslt += second;

        obj.innerHTML = rslt;

        if (time == 0) {
            stop_timer()
        }
    }, 1000);
}

/**
 * timer 일시정지
 */
function stop_timer() {
    clearInterval(timer);
}