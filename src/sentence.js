const sentences = ['Keep calm and code on!', 
    'There is no cloud, it\'s just someone else\'s computer', 
    'Code is art, that does something', 'ERROR: Webdevelopement', 
    '!FALSE It\'s funny, because it\'s true.'];
var s_len = sentences.length;
var text = document.getElementById("sentence");

text.textContent = sentences[Math.floor(Math.random() * s_len)];