function crypto(pass) {
    const splittedPass = pass.split('');
    const [first, second, third, ...others] = splittedPass;
    const result = [second, third, others, first].flat();
    return result;
}

function check(str, pass) {
    const block1 = str.slice(0, 2).join('');
    const block2 = str.slice(2, -1).join('');
    const block3 = str.slice(-1).join('');
    const result = block3 + block1 + block2;
    if (result === pass) {
        return true;
    } else {
        return false;
    }
}
