export const comOne = rangeNum => {
    let lotto = [];
    let mainSection = null;
    const getMain = Math.floor((Math.random() * 10) / 2);

    mainSection = rangeNum[getMain];

    while (lotto.length < 2) {
        const getMainLotto =
            mainSection.length === 5
                ? Math.floor((Math.random() * 10) / 2)
                : Math.floor(Math.random() * 10);

        if (lotto[0] === mainSection[getMainLotto]) continue;

        lotto.push(mainSection[getMainLotto]);
    }

    const subSection = rangeNum.filter(item => item !== mainSection);

    for (let i = 0; i < subSection.length; i++) {
        const getSubLotto =
            subSection[i].length === 5
                ? Math.floor((Math.random() * 10) / 2)
                : Math.floor(Math.random() * 10);

        lotto.push(subSection[i][getSubLotto]);
    }

    const sortLotto = lotto.sort((a, b) => a - b);

    return sortLotto;
};
