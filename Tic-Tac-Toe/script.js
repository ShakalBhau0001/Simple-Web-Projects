let boxes = document.querySelectorAll('.box');
const restart = document.getElementById('restart');
let turn = true;

const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText !== '') return; 
        box.innerText = turn ? 'X' : 'O';
        box.style.backgroundColor = turn ? '#7fffd4' : '#ffb6c1';
        box.style.pointerEvents = 'none'; 
        turn = !turn;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winnerPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 && val1 === val2 && val2 === val3) {
            document.getElementById('msg').innerHTML = `🎉 Congratulations! <span style="color: red;">${val1}</span> Player Wins!`;
            boxes[pattern[0]].style.backgroundColor = '#90ee90';
            boxes[pattern[1]].style.backgroundColor = '#90ee90';
            boxes[pattern[2]].style.backgroundColor = '#90ee90';
            boxes.forEach((box) => box.style.pointerEvents = 'none');
            return;
        }
    }
};

restart.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '#b943fd';
        box.style.pointerEvents = 'auto';
    });
    document.getElementById('msg').innerText = 'Let`s Play The Game';
    turn = true;
});
