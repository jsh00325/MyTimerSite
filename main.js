const body = document.querySelector('body');

const navbar = document.querySelector('.navbar');

const reports = document.querySelectorAll('#report');
const settings = document.querySelectorAll('#setting');
const setting_menu = document.querySelector('.navbar__menu #setting');
const setting_icon = document.querySelector('.navbar__button #setting');

const timer_html = document.querySelector('.timer__clock');
const playBtn = document.querySelector('.timer__button__play');
const pauseBtn = document.querySelector('.timer__button__pause');

const work_head_color = "#C65146", relax_head_color = "#379392";
const work_body_color = "#EC6A5C", relax_body_color = "#519D9E";
const work_hover_color = "#AF4034", relax_hover_color = "#548687";

const alarm = [new Audio('sound/alarm1.mp3'), new Audio('sound/alarm2.mp3')];
const work_time = 1, relax_time = 1;

var isWork = true, time, timer;

init_var();

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
reports.forEach((report) => {
    report.addEventListener('click', () => {
        view_report();
    });
});
settings.forEach((setting) => {
    setting.addEventListener('click', () => {
        view_setting();
    });
});

/**
 * 상태에 따른 변수 초기화 및 타이머 화면 갱신
 */
function init_var() {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";

    time = isWork ? work_time : relax_time;
    timer_html.innerHTML = get_time_string(time);

    document.documentElement.style.setProperty("--head-color", 
        isWork ? work_head_color : relax_head_color);
    document.documentElement.style.setProperty("--body-color", 
        isWork ? work_body_color : relax_body_color);
    document.documentElement.style.setProperty("--hover-color", 
        isWork ? work_hover_color : relax_hover_color);
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
 */
function time_end() {
    stop_timer();

    alarm[0].play();
    
    isWork = !isWork;
    init_var();
}

/**
 * 사용자의 통계를 보여주기
 * @todo 통계 저장하고 깔끔하게 보여줄 수 있을까...?
 */
function view_report() {
    alert('미구현입니다...!');
}

/**
 * 사용자에게 설정창 보여주기
 * @todo html에서 설정창 만들고, 이를 보여주기 구현
 */
function view_setting() {
    alert('구현중입니다...!')
}