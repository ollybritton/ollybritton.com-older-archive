let scale_names = ["major", "minor", "pentatonic", "blues", "chromatic"]

let scales = {
    "major": ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"],
    "minor": ["C4", "D4", "Eb4", "F4", "G4", "Ab4", "B4", "C5", "D5", "Eb5", "F5", "G5"],
    "pentatonic": ["C4", "D4", "E4", "G4", "A4", "C5", "D5", "E5", "G5", "A5", "C6", "D6"],
    "blues": ["C4", "Eb4", "F4", "Gb4", "G4", "Bb4", "C5", "Eb5", "F5", "Gb5", "G5", "Bb5"],
    "chromatic": ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"]
}

let current_scale_index = 0
let current_scale_name = scale_names[current_scale_index]
let current_scale = scales[current_scale_name]

var dist = new Tone.Vibrato().toMaster();

var synth1 = new Tone.FMSynth().toMaster().connect(dist); // Bad Programming? Nahhhh.
var synth2 = new Tone.FMSynth().toMaster().connect(dist);
var synth3 = new Tone.FMSynth().toMaster().connect(dist);
var synth4 = new Tone.FMSynth().toMaster().connect(dist);
var synth5 = new Tone.FMSynth().toMaster().connect(dist);
var synth6 = new Tone.FMSynth().toMaster().connect(dist);
var synth7 = new Tone.FMSynth().toMaster().connect(dist);
var synth8 = new Tone.FMSynth().toMaster().connect(dist);
var synth9 = new Tone.FMSynth().toMaster().connect(dist);
var synth10 = new Tone.FMSynth().toMaster().connect(dist);
var synth11 = new Tone.FMSynth().toMaster().connect(dist);
var synth12 = new Tone.FMSynth().toMaster().connect(dist);

dist.wet.value = 0.0;

var shift_bool = false

var notes = [["", ""], [current_scale_name, "Vibrato", dist.wet.value], []] // Last Key Pressed: "t", Trigger: "C4 synth" | Scale: "major", Distortion: "Vibrato" | "bdm bdm tsh"

function display_info() {
    result = ""
    result += `Last Key Pressed: <strong>${notes[0][0]}</strong>, Trigger: <strong>${notes[0][1]}</strong> | `
    result += `Scale: <strong>${notes[1][0]}</strong>, Distortion: <strong>${notes[1][1]}</strong> (<strong>${Math.round(notes[1][2] * 10)}/10</strong>) | `
    
    result += "<strong>"
    
    if(notes[2].length > 5) {
        result += "..." + notes[2].slice(-5).join(" ")
    } else {
        result += notes[2].slice(-5).join(" ")
    }
    
    result += "</strong>"
    
    document.getElementById("notes").innerHTML = result
}

var handle_input = function(code) {


    if (!shift_bool) {
        switch (code) {
            case keys.plus:
                dist.wet.value += 0.1;

                if (dist.wet.value > 1) {
                    dist.wet.value = 1;

                } else if (dist.wet.value < 0) {
                    dist.wet.value = 0;
                }
                
                notes[0][0] = "+"
                notes[0][1] = "increase distortion"
                
                notes[1][2] = dist.wet.value

                break;

            case keys.minus:
                dist.wet.value -= 0.1;

                if (dist.wet.value > 1) {
                    dist.wet.value = 1;

                } else if (dist.wet.value < 0) {
                    dist.wet.value = 0;
                }
                
                notes[0][0] = "-"
                notes[0][1] = "decrease distortion"
                
                notes[1][2] = dist.wet.value

                break;

            case keys.left_square_bracket:
                current_scale_index -= 1

                if (current_scale_index > 4) {
                    current_scale_index = 4;

                } else if (current_scale_index < 0) {
                    current_scale_index = 0;
                }

                current_scale_name = scale_names[current_scale_index]
                current_scale = scales[current_scale_name]
                
                notes[0][0] = "["
                notes[0][1] = "change scale"
                
                notes[1][0] = current_scale_name

                break;

            case keys.right_square_bracket:
                current_scale_index += 1

                if (current_scale_index > 4) {
                    current_scale_index = 4;

                } else if (current_scale_index < 0) {
                    current_scale_index = 0;
                }

                current_scale_name = scale_names[current_scale_index]
                current_scale = scales[current_scale_name]
                
                notes[0][0] = "]"
                notes[0][1] = "change scale"
                
                notes[1][0] = current_scale_name

                break;

            case keys.q:
                var current_audio = audios.drums.hihat
                var current_key = String.fromCharCode(keys.q)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum hihat"
                
                notes[2].push("tz")
                
                break;

            case keys.w:
                var current_audio = audios.drums.tom
                var current_key = String.fromCharCode(keys.w)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum tom"
                
                notes[2].push("bm")
                
                break;

            case keys.e:
                var current_audio = audios.drums.tom
                var current_key = String.fromCharCode(keys.e)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum tom"
                
                notes[2].push("bom")
                
                break;

            case keys.r:
                var current_audio = audios.drums.openhat
                var current_key = String.fromCharCode(keys.r)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum openhat"
                
                notes[2].push("tsss")
                
                break;

            case keys.t:
                var current_key = String.fromCharCode(keys.t)
                synth1.triggerAttack(current_scale[0])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[0]
                
                break;

            case keys.y:
                var current_key = String.fromCharCode(keys.y)
                synth2.triggerAttack(current_scale[1])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[1]
                
                break;

            case keys.u:
                var current_key = String.fromCharCode(keys.u)
                synth3.triggerAttack(current_scale[2])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[2]
                
                break;

            case keys.i:
                var current_key = String.fromCharCode(keys.i)
                synth4.triggerAttack(current_scale[3])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[3]
                
                break;

            case keys.o:
                var current_key = String.fromCharCode(keys.o)
                synth5.triggerAttack(current_scale[4])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[4]
                
                break;

            case keys.p:
                var current_key = String.fromCharCode(keys.p)
                synth6.triggerAttack(current_scale[5])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[5]
                
                break;

                ///////////////////////////////

            case keys.a:
                var current_audio = audios.drums.snare
                var current_key = String.fromCharCode(keys.a)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum snare"
                
                notes[2].push("th")
                
                break;

            case keys.s:
                var current_audio = audios.drums.kick
                var current_key = String.fromCharCode(keys.s)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum kick"
                
                notes[2].push("bh")
                
                break;

            case keys.d:
                var current_audio = audios.drums.boom
                var current_key = String.fromCharCode(keys.d)
                current_audio.currentTime = 0;
                current_audio.play();

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "drum boom"
                
                notes[2].push("dh")
                
                break;

            case keys.f:
                var current_key = String.fromCharCode(keys.f)
                synth7.triggerAttack(current_scale[6])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[6]
                
                break;

            case keys.g:
                var current_key = String.fromCharCode(keys.g)
                synth8.triggerAttack(current_scale[7])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[7]
                
                break;

            case keys.h:
                var current_key = String.fromCharCode(keys.h)
                synth9.triggerAttack(current_scale[8])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[8]
                
                break;

            case keys.j:
                var current_key = String.fromCharCode(keys.j)
                synth10.triggerAttack(current_scale[9])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[9]
                
                break;

            case keys.k:
                var current_key = String.fromCharCode(keys.k)
                synth11.triggerAttack(current_scale[10])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[10]
                
                break;

            case keys.l:
                var current_key = String.fromCharCode(keys.l)
                synth12.triggerAttack(current_scale[11])

                document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
                
                notes[0][0] = current_key.toUpperCase()
                notes[0][1] = "synth " + current_scale[11]
                
                break;

                ///////////////////////////////////

        //     case keys.z:
        //         var current_audio = audios.drum_loops.alternative
        //         var current_key = String.fromCharCode(keys.z)
        //         current_audio.currentTime = 0;
        //         current_audio.play();
        // 
        //         document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
        //         break;
        // 
        //     case keys.x:
        //         var current_audio = audios.drum_loops.funky
        //         var current_key = String.fromCharCode(keys.z)
        //         current_audio.currentTime = 0;
        //         current_audio.play();
        // 
        //         document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
        //         break;
        // 
        //     case keys.c:
        //         var current_audio = audios.drum_loops.alternative
        //         var current_key = String.fromCharCode(keys.z)
        //         current_audio.currentTime = 0;
        //         current_audio.play();
        // 
        //         document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
        //         break;
        // 
        //     case keys.v:
        //         var current_audio = audios.drum_loops.jazz
        //         var current_key = String.fromCharCode(keys.z)
        //         current_audio.currentTime = 0;
        //         current_audio.play();
        // 
        //         document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
        //         break;
        // 
        //     case keys.b:
        //         var current_audio = audios.drum_loops.reggae
        //         var current_key = String.fromCharCode(keys.z)
        //         current_audio.currentTime = 0;
        //         current_audio.play();
        // 
        //         document.getElementsByClassName(current_key.toLowerCase())[0].classList.add("activated")
        //         break;
        // 
        //     case keys.n:
        //         audios.drums.ride.currentTime = 0;
        //         audios.drums.ride.play();
        //         break;
        // 
        //     case keys.m:
        //         audios.drums.snare.currentTime = 0;
        //         audios.drums.snare.play();
        //         break;
        // 
        //     case keys[","]:
        //         audios.drums.tink.currentTime = 0;
        //         audios.drums.tink.play();
        //         break;
        // 
        //     case keys["."]:
        //         audios.drums.tom.currentTime = 0;
        //         audios.drums.tom.play();
        //         break;
        }
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    console.log(`Incoming Key: ${charCode}, '${evt.key}'`)
    
    handle_input(charCode);
    
    display_info()
};

document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var letter = evt.key

    if (!(charCode == keys.plus || charCode == keys.minus || charCode == keys.left_square_bracket || charCode == keys.right_square_bracket)) {
        document.getElementsByClassName(letter.toLowerCase())[0].classList.remove("activated")
    }
    
    letter = letter.toUpperCase()
    
    switch(letter) {
        case "T":
            synth1.triggerRelease()
            break;
            
        case "Y":
            synth2.triggerRelease()
            break;
            
        case "U":
            synth3.triggerRelease()
            break;
            
        case "I":
            synth4.triggerRelease()
            break;
            
        case "O":
            synth5.triggerRelease()
            break;
            
        case "P":
            synth6.triggerRelease()
            break;
            
        case "F":
            synth7.triggerRelease()
            break;
            
        case "G":
            synth8.triggerRelease()
            break;
            
        case "H":
            synth9.triggerRelease()
            break;
            
        case "J":
            synth10.triggerRelease()
            break;
            
        case "K":
            synth11.triggerRelease()
            break;
        
        case "L":
            synth12.triggerRelease()
            break;
    }
};