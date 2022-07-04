let styleList = [
"font-color",
"link-color",
"header-background",
"footer-bg-color",
"nav-bg-color",
"sidebar-bg-color",
"background-color",
"article",
"code-color",
"highlight-color",
"links",
"box-bg"
]

function switchTheme(e) {

    // get value from select dropdown
    let t = (e.target.value);

    localStorage.setItem('theme', t); 

    // eliminate quotes from value
    let theme = t.substring(1, t.length - 1);
    console.log(theme);


    for (let i = 0; i < styleList.length; i++) {
        let styleName = styleList[i];
        let fullVariable = `var(--${theme}-${styleName})`;
        console.log(fullVariable);

        let variable = "--" + styleName;

        var root = document.querySelector(':root');
        root.style.setProperty(variable, fullVariable);
        console.log(variable, fullVariable);
    }

    console.log(
        'Theme changed to ' + theme
    );
    setBKG();
    
}

function setBKG() {
    let bkg = getComputedStyle(document.documentElement)
    .getPropertyValue('--background-color'); 
    // set html background color to current theme
    document.getElementsByTagName('html')[0].style.backgroundColor = bkg;
}

function loadTheme() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        switchTheme({ target: { value: currentTheme } });
    }
    setBKG();
}


window.onload = () => {
    document.getElementById("theme-switch").onchange = switchTheme;
}


loadTheme();







