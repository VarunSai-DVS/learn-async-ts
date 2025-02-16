const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sum2DArray(arr: number[][]): Promise<number> {
    const sumRow = (row: number[]): number => {
        return row.reduce((acc, num) => acc + num, 0);
    };

    const rowSumsPromises = arr.map(async (row) => {
        return sumRow(row);
    });

    const rowSums = await Promise.all(rowSumsPromises);
    return rowSums.reduce((total, rowSum) => total + rowSum, 0);
}

sum2DArray(array2D_1).then(res => console.log(res))