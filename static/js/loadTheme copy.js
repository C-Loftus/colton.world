function switchTheme(e) {

    // get value from select dropdown
    let t = (e.target.value);

    localStorage.setItem('theme', t); 

    let theme = t.substring(1, t.length - 1);
    console.log(theme);


    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/css/themes/' + theme + '.css';
    document.head.appendChild(style);

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

// wrap in try catch
try {
document.getElementById("theme-switch").onchange = switchTheme;
} catch (e) {
}

loadTheme();







