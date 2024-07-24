 const h3 = document.getElementById("h3");
 setTimeout(() => {
    const h3 = document.createElement("h3");
    h3.style.innerText = 'Uraaa';
    document.body.append(h3);
}, 10000);


var t = new Date,
    f = 1,
    s, n;
t.setHours(0, 0, 0, 0);
window.localStorage.getItem('f') && (f = ~~window.localStorage.getItem('f'));
window.localStorage.getItem('t') && (t = new Date(window.localStorage.getItem('t')));
document.getElementsByTagName("div")[0].innerHTML = t.toLocaleTimeString()
function Timer() {
    t = new Date(t.getTime() + f * ((new Date).getTime() - s.getTime()));
    document.getElementsByTagName("div")[0].innerHTML = t.toLocaleTimeString();

    s = new Date;
    window.localStorage.setItem('t', t);
    n = setTimeout(arguments.callee, 500)
}
function New_start() {
    window.clearTimeout(n);
    t.setHours(0, 0, 0, 0);
    s = new Date;
    Timer()
}
function Pause() {
    s ? (window.clearTimeout(n), s = !1) : (s = new Date, Timer())
}
function BackTimer() {
    window.clearTimeout(n);
    f = -f;
    window.localStorage.setItem('f', f);
    s = new Date;
    Timer()
}
function Set() {
    var a =  parseInt(document.getElementById("sec").value, 10) || 0;
    t.setHours(0, 0, a, 0);
    document.getElementsByTagName("div")[0].innerHTML = t.toLocaleTimeString()
};
Pause()



