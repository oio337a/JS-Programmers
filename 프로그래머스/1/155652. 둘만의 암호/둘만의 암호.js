function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const availableChars = alphabet.filter(char => !skip.includes(char));
    const availableLen = availableChars.length;

    return s.split('').map(char => {
        const currentIndex = availableChars.indexOf(char);
        const newIndex = (currentIndex + index) % availableLen;
        return availableChars[newIndex];
    }).join('');
}
