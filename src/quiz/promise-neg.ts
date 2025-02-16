import {error} from "express-openapi-validator";

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function logNegatives(arr: number[][]): Promise<void> {
    const containsNegative = (row: number[]): boolean => {
        return row.some(num => num < 0);
    };

    const rowPromises = arr.map((row, index) => new Promise<void>((resolve) => {
        if (containsNegative(row)) {
            console.log(`Row ${index} contains a negative number:`, row);
        }
        resolve();
    }));

    return Promise.all(rowPromises).then(() => {
        console.log("All rows checked.");
    });
}

logNegatives(array2D_3).then().catch(error => console.log(error));