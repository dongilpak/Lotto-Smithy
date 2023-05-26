export const speOne = rangeNum => {
    let lotto = [];
    let mainSection = null;
    const getMain = Math.floor((Math.random() * 10) / 2);

    mainSection = rangeNum[getMain];

    while (lotto.length < 4) {
        const getMainLotto =
            mainSection.length === 5
                ? Math.floor((Math.random() * 10) / 2)
                : Math.floor(Math.random() * 10);

        if (lotto.find(num => num === mainSection[getMainLotto])) continue;

        lotto.push(mainSection[getMainLotto]);
    }

    return getSubLotto(mainSection, lotto, rangeNum);
};

const getSubLotto = (mainSection, lotto, rangeNum) => {
    const subSection = rangeNum.filter(item => item !== mainSection);

    let partBefore = [];

    while (lotto.length < 6) {
        const getSub = Math.floor((Math.random() * 10) / 2);
        if (getSub === 4) continue;

        let part = getSub + 1;

        if (partBefore.find(num => num === getSub + 1)) continue;

        partBefore.push(part);

        const getSubLotto =
            subSection[getSub].length === 5
                ? Math.floor((Math.random() * 10) / 2)
                : Math.floor(Math.random() * 10);

        lotto.push(subSection[getSub][getSubLotto]);
    }

    const sortLotto = lotto.sort((a, b) => a - b);

    return sortLotto;
};
