// eslint-disable-next-line import/prefer-default-export
export const generateRandomNum = (maxNum: number, minNum: number): number => ( // this is a util
    Math.floor(Math.random() * maxNum + 1 - minNum)
);
