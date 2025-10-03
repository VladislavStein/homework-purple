function crypto(pass) {
    const splittedPass = pass.split('');
    const first = splittedPass.slice(0, 4).reverse().join('');
    const second = splittedPass.slice(4).reverse().join('');
    return first + second;
}

function check(str, pass) {
    const block1 = str.slice(0, 4).split('').reverse().join('');
    const block2 = str.slice(4).split('').reverse().join('');
    console.log(block1 + block2);
    const result = block1 + block2;
    if (result === pass) {
        return true;
    } else {
        return false;
    }
}

console.log(check('ssapdrow', 'password'));