const mt = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let code = expr.match(/.{1,10}/g);
    let res = [];

    for (let i = 0; i < code.length; i++) {
        let sym = code[i].match(/.{1,2}/g);
        let arr = [];
        
        for (let j = 0; j < sym.length; j++) {
            if (sym[j] == 10) {
                arr.push('.');
            } else if (sym[j] == 11) {
                arr.push('-');
            } else if (sym[j] == '**') {
                res.push(' '); 
                break;
            }
        }
        res.push(mt[arr.join('')]);        
    }
    return res.join('');
}

module.exports = {
    decode
}