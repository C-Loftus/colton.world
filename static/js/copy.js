// select all pre
const pre = document.getElementsByTagName('pre');
// create a button at the end of each element
for (let i = 0; i < pre.length; i++) {
  // let div = document.createElement('div');
  // div.classList.add('verticalText');
  // div.textContent = 'Copy';
  div.onclick = () => {
    const text = pre[i].innerText;
    navigator.clipboard.writeText(text);
  }
  // pre[i].prepend(div);
}

