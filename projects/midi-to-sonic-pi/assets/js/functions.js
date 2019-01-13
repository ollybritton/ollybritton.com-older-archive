var settings = {

    cutoff: 200,
    shift: 0,
    synth: "piano",
    speed_multiplier: 1

};

if (!(window.File && window.FileReader && window.FileList && window.Blob)) {

    document.querySelector(".top p").textContent = "Reading files not supported by this browser";

} else {

    var drop = document.querySelector(".top");
    var input = document.querySelector(".top input");

    drop.addEventListener("dragenter", function() {
        drop.classList.add("hover");
    });

    drop.addEventListener("dragleave", function() {
        drop.classList.remove("hover");
    });

    drop.addEventListener("drop", function() {
        drop.classList.remove("hover");
    });

    input.addEventListener("change", function(e) {

        var files = e.target.files;
        if (files.length > 0) {
            var file = files[0];
            document.querySelector(".top p").textContent = file.name;
            parseFile(file);
        }
    });

}

function parseData(data) {

    data = data.tracks[1].notes;
    answer = "";

    if (settings.cutoff == "false") {

        cutoff = data.length;

    } else {

        cutoff = settings.cutoff;

    }

    answer += "# MidiToSonicPi created by Olly, file made " + new Date() + "\n\n";
    answer += "use_synth :piano \n\n";

    for (var i = 0; i < cutoff; i++) {

        answer += "play " + (data[i].midi + settings.shift) + ", release: " + Math.round(data[i].time * settings.speed_multiplier * 1000) / 1000 + "\n";
        answer += "sleep " + Math.round(data[i].duration * settings.speed_multiplier * 1000) / 1000 + "\n";
        answer += "\n";

    }

    return answer;

}

function parseFile(file) {
    //read the file
    var reader = new FileReader();
    reader.onload = function(e) {

        var partsData = MidiConvert.parse(e.target.result);
        var result = parseData(partsData);
        document.querySelector(".result").innerHTML = result;

    };

    reader.readAsBinaryString(file);
}

var copy_textarea = document.querySelector(".copy");

copy_textarea.addEventListener('click', function(e) {
    var code = document.querySelector('.result');
    code.select();


    try {

        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

    } catch (err) {

        alert('Oops, unable to copy – Click on the text and then press Ctrl-A then Ctrl C.');

    }

    if (document.selection) {
        document.selection.empty();
    } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
});
