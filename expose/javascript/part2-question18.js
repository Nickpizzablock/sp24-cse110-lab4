let timeout = setInterval(myFunction, 1000);
// setTimeout(clearTimeout(timeout), 1000*2);
// let timetimeout = setInterval(console.log(time), 1000);
// let timetimeout = setInterval(myFunction(), 1000);
// setTimeout(clearTimeout(timetimeout), 1000*20)


function myFunction() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};