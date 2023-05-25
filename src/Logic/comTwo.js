export const comTwo = rangeNum => {
    let lotto = [];
    let mainSection = [];

    while (mainSection.length < 2) {
        const getRandomNum = Math.floor((Math.random() * 10) / 2);

        if (mainSection[0] && mainSection[0] === rangeNum[getRandomNum]) {
            continue;
        } else {
            mainSection.push(rangeNum[getRandomNum]);
        }
        let count = 0;
        while (count < 2) {
            const getRandomLotto =
                mainSection[mainSection.length - 1].length === 5
                    ? Math.floor((Math.random() * 10) / 2)
                    : Math.floor(Math.random() * 10);

            if (
                lotto[lotto.length - 1] ===
                mainSection[mainSection.length - 1][getRandomLotto]
            )
                continue;

            lotto.push(mainSection[mainSection.length - 1][getRandomLotto]);
            count++;
        }
    }

    return getSubLotto(mainSection, lotto, rangeNum);
};

const getSubLotto = (mainSection, lotto, rangeNum) => {
    const subSection = rangeNum.filter(
        item => item !== mainSection[0] && item !== mainSection[1]
    );

    let partBefore = 0;

    while (lotto.length < 6) {
        const getSub = Math.floor((Math.random() * 10) / 3);
        if (getSub === 3) continue;

        if (partBefore === getSub + 1) continue;

        partBefore = getSub + 1;

        const getSubLotto =
            subSection[getSub].length === 5
                ? Math.floor((Math.random() * 10) / 2)
                : Math.floor(Math.random() * 10);

        lotto.push(subSection[getSub][getSubLotto]);
    }

    return lotto;
};
