


function main() {
    const filters = {
        searchText: '',
    };
    const divSelector = document.querySelector('#RLCText');
    const userInputFieldSelector = document.querySelector('#userText');

    const userTypedText = document.createElement('p');
    userTypedText.id = 'RLCTextP'
    divSelector.appendChild(userTypedText);

    userInputFieldSelector.addEventListener('input', function (event) {
        filters.searchText = event.target.value;
        printInput();
        copyButtonClicked();
    })


    function printInput() {
        const arrayNew = [];
        const stringSplit = filters.searchText.split('');
        stringSplit.forEach(function (letter, index) {
            const random = Math.floor(Math.random() * Math.floor(2));
            if (random === 0) {
                arrayNew[index] = letter.toLowerCase()
            } else if (random === 1) {
                arrayNew[index] = letter.toUpperCase()
            }
        })
        const fullString = arrayNew.join('').toString();
        userTypedText.textContent = fullString;
        divSelector.value = fullString;
    }

    function copyButtonClicked() {
        document.querySelector('#copyButton').addEventListener('click', copyTextFromResult)
    }
}

function copyTextFromResult() {
    navigator.clipboard.writeText(`${document.querySelector('#RLCTextP').textContent}`)
}

main()