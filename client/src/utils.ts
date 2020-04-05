export const generateRandomNum = (maxNum: number, minNum: number): number => ( // this is a util
    Math.floor(Math.random() * maxNum + 1 - minNum)
);
