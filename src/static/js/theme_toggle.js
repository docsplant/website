// global object
THEME_TOGGLE = {};

// color profile
THEME_TOGGLE.themeColors = {
    light: {
        primary: "#002868",
        primary_light: "#586585",
        secondary: "#547C45",
        secondary_light: "#CFDACB",
        text: "#131D1E",
        background: "#FFFFFF",
    },
    dark: {
        primary: "#527DC1",
        primary_light: "#C0CAE3",
        secondary: "#547C45",
        secondary_light: "#4E5A49",
        text: "#FFFFFF",
        background: "#2C2C2C",
    },
};

THEME_TOGGLE.getTheme = () => {
    const session_theme = sessionStorage.getItem("theme")
    if (session_theme == "dark" || (session_theme == null && matchMedia("(prefers-color-scheme: dark)"))) {
        return THEME_TOGGLE.themeColors.dark
    }
    return THEME_TOGGLE.themeColors.light
}

THEME_TOGGLE.updateTheme = () => {
    const theme = THEME_TOGGLE.getTheme()
    for (let property in theme) {
        const color = theme[property];
        document.documentElement.style.setProperty(`--${property}`, color);
    }
    document.body.className = (theme === THEME_TOGGLE.themeColors.dark) ? "dark" : "light";
}

THEME_TOGGLE.toggleTheme = () => {
    if (THEME_TOGGLE.getTheme() === THEME_TOGGLE.themeColors.dark) {
        sessionStorage.setItem("theme", "light");
    }
    else {
        sessionStorage.setItem("theme", "dark");
    }
    THEME_TOGGLE.updateTheme();
}

THEME_TOGGLE.InitToggleTheme = () => {
    const triggers = Array.from(document.getElementsByClassName("theme_toggler"));
    // if theme toggler is null or undefined
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", THEME_TOGGLE.toggleTheme);
    }
    );
}

// Initial update
THEME_TOGGLE.updateTheme()