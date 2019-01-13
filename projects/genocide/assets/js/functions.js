/*jshint esversion: 6 */


$(document).ready(function() {

    let interval = setInterval( function(){

    }, 10);

    $(".select").change(() => {

        clearInterval(interval);

        $(".count").text("00:00:00");
        $(".death-count").text("Deaths: 0.0 people.");

        var genocide_deaths = [
            17000000,
            13000000,
            7500000,
            3000000,
            1750000,
            1500000,
            1000000,
            600000,
            1500000,
            600000,
            3000000,
            750000,
            750000,
            1000000,
            200000,
            500000,
            150000,
            110000,
            200000,
            210000,
            80000,
            200000,
            200000,
            170000,
            110000,
            40000,
            4000,
            4400
        ];

        var genocide_times = [
            6,
            1,
            4,
            2,
            7,
            1,
            3,
            3,
            4,
            1,
            8,
            8,
            20,
            4,
            10,
            1,
            1,
            24,
            2,
            9,
            3,
            3,
            34,
            4,
            1,
            3,
            30,
            3
        ];

        let death_num = genocide_deaths[parseInt($(".select").val())];
        let death_time = genocide_times[parseInt($(".select").val())];

        let per_second = death_num/(death_time*365*24*60*60);
        let count = 0;

        interval = setInterval( function(){

            let deaths = Math.round((per_second/100)*count*10)/10;

            if(String(deaths).length == 1) {
                deaths = String(deaths) + ".0";
            }

            $(".death-count").text("Deaths: " + deaths + " people.");

            let seconds_elapsed = count*10;

            var hours = String(Math.floor((seconds_elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            var minutes = String(Math.floor((seconds_elapsed % (1000 * 60 * 60)) / (1000 * 60)));
            var seconds = String(Math.floor((seconds_elapsed % (1000 * 60)) / 1000));

            if(hours.length == 1) {
                hours = "0" + hours;
            }

            if(minutes.length == 1) {
                minutes = "0" + minutes;
            }

            if(seconds.length == 1) {
                seconds = "0" + seconds;
            }

            $(".count").text(hours + ":" + minutes + ":" + seconds);
            count++;

        }, 10);

    });

});
