export const speTwo = rangeNum => {
    let lotto = [];
    let mainSection = [];

    while (mainSection.length < 3) {
        const getRandomNum = Math.floor((Math.random() * 10) / 2);

        if (mainSection.find(part => part === rangeNum[getRandomNum])) continue;

        mainSection.push(rangeNum[getRandomNum]);
    }

    return getMainLotto(mainSection, lotto);
};

const getMainLotto = (mainSection, lotto) => {
    for (let i = 0; i < mainSection.length; i++) {
        let count = 0;
        while (count < 2) {
            const getRandomLotto =
                mainSection[i].length === 5
                    ? Math.floor((Math.random() * 10) / 2)
                    : Math.floor(Math.random() * 10);

            if (lotto[lotto.length - 1] === mainSection[i][getRandomLotto])
                continue;

            lotto.push(mainSection[i][getRandomLotto]);
            count++;
        }
    }

    const sortLotto = lotto.sort((a, b) => a - b);

    return sortLotto;
};
