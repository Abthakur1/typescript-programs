//https://exercism.org/tracks/typescript/exercises/binary-search
function binarySearch(arr: number[], item: number): void {
    const arrLength = arr.length;
    const midIndex = Math.trunc(arrLength/2);
    let flag: boolean = false;
    if (item == arr[midIndex]) {
        console.log("item is found at index:" + midIndex);
        flag = true;
    }
    else if (item > arr[midIndex]) {
        for (let i = midIndex; i < arrLength; i++) {
            if (arr[i] == item) {
                console.log("item is found at index:" + i);
                flag = true;
            }
            else {
                flag = false;
            }
        }
    }
    else if (item < arr[midIndex]) {
        for (let i = 0; i < midIndex; i++) {
            if (arr[i] == item) {
                console.log("item is found at index:" + i);
                flag = true;
            }
            else {
              flag = false;
            }
        }

    }

    if(flag = false)
    console.log("item is not in the list")
}

binarySearch([4, 8, 12, 16, 23, 28, 32], 23);