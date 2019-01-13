var editor = ace.edit("editor");

let themes = ["twilight", "chrome", "monokai", "solarized_light", "solarized_dark", "github"];
let theme_backgrounds = ["#141414", "#FFFFFF", "#272822", "#FDF6E3", "#002B36", "#FFFFFF"];

let languages = ["markdown", "python", "javascript", "html", "text"];

editor.setTheme(`ace/theme/${themes[0]}`);
editor.session.setMode(`ace/mode/${languages[0]}`);

let press_counter = {
    "theme": 0,
    "language": 0
};

function changeTheme() {
    let new_theme = themes[press_counter.theme % themes.length];

    Snackbar.show({
        pos: "bottom-center",
        text: "Theme changed to: " + new_theme
    });

    editor.setTheme(`ace/theme/${new_theme}`);

}

function changeLanguage() {
    let new_language = languages[press_counter.language % languages.length];

    Snackbar.show({
        pos: "bottom-center",
        text: "Language changed to: " + new_language
    });

    editor.session.setMode(`ace/mode/${new_language}`);
}

document.addEventListener("keydown", (e) => {
    if (e.which === 89 && e.ctrlKey) {
        // Ctrl+Y, THEME
        press_counter.theme += 1;
        changeTheme();

    } else if (e.which === 87 && e.ctrlKey) {
        // Ctrl+W, LANGUAGE
        press_counter.language += 1;
        changeLanguage();

    }
});