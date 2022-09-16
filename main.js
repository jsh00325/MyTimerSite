const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const body = document.querySelector('body');
const timer_html = document.querySelector('.timer__clock');
const playBtn = document.querySelector('.timer__button__play');
const pauseBtn = document.querySelector('.timer__button__pause');

const alarm = [new Audio('sound/alarm1.mp3'), new Audio('sound/alarm2.mp3')];
const work_time = 30, relax_time = 10;

var isWork = true, time, timer;

init_var();

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
 * 상태에 따른 변수 초기화 및 타이머 화면 갱신
 */
function init_var() {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";

    time = isWork ? work_time : relax_time;
    timer_html.innerHTML = get_time_string(time);
}

/**
 * timer 가동
 * @param {integer} time 설정한 시간을 초로 입력
 * @param {object} obj 타이머를 실행할 객체를 입력
 */
function start_timer(obj) {
    timer = setInterval(function() {
        time--;
        obj.innerHTML = get_time_string(time);

        if (time == 0) time_end();
    }, 1000);
}
/**
 * timer 일시정지
 */
function stop_timer() {
    clearInterval(timer);
}

/**
 * 초 형태의 시간을 00:00 형태로 반환
 * @param {integer} time 초단위의 시간 입력 
 */
function get_time_string(time) {
    var minute = Math.floor(time / 60);
    var second = time % 60;

    var rslt = "";
    if (minute < 10) rslt += "0";
    rslt += minute;

    rslt += ":";

    if (second < 10) rslt += "0";
    rslt += second;

    return rslt;    
}

/**
 * 타이머가 다 됐을 때 다음 동작을 설정하는 함수
 * @todo 알람으로 사용자에게 시간이 다 되었음을 알려주는 기능 추가
 */
function time_end() {
    stop_timer();

    alarm[0].play();
    body.classList.toggle('relax');
    navbar.classList.toggle('relax');
    
    isWork = !isWork;
    init_var();
}