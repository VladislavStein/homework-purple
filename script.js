function crypto(pass) {
    const splittedPass = pass.split('');
    const first = splittedPass.slice(0, 4).reverse().join('');
    let second = splittedPass.slice(4).reverse().join('');
    second = second[0] + second[2] + second[1] + second[3];
    return first + second;
}

function check(str, pass) {
    const block1 = str.slice(0, 4).split('').reverse().join('');
    let block2 = str.slice(4).split('').reverse().join('');
    block2 = block2[0] + block2[2] + block2[1] + block2[3];
    console.log(block1 + block2);
    const result = block1 + block2;
    if (result === pass) {
        return true;
    } else {
        return false;
    }
}

console.log(check('ssapdorw', 'password'));     
// console.log(crypto('password'));