$(document).ready(function () {

    setInterval(function () {
        var d = new Date();
        var hourTime = d.getHours();
        var minTime = d.getMinutes();
        var secTime = d.getSeconds();

        var hrotation = 30 * hourTime + minTime / 2;
        var mrotation = 6 * minTime;
        var srotation = 6 * secTime;

        $('#HourHand').css("transform",`rotate(${hrotation}deg)`)
        $('#MinutesHand').css("transform",`rotate(${mrotation}deg)`)
        $('#SecondHand').css("transform" ,`rotate(${srotation}deg)`)

    }, 1000);
});