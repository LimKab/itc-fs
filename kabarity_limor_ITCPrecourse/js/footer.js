
let langs = ["HTML", "CSS", "JS", "c"];
const last_lang = langs.pop();

let sentence = `This page was build using: ${langs.join(', ')} and ${last_lang}.`;

document.getElementsByTagName("footer")[0].innerHTML = sentence;

