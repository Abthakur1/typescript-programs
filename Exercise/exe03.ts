//https://exercism.org/tracks/typescript/exercises/leap

export function leapYear(year: number): string {
    let leapOrNot: boolean;
    let output: string;

    leapOrNot = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    if (leapOrNot)
        output = 'Leap year';
    else
        output = 'Not a Leap year';
    return output;

}

console.log(leapYear(2024)); // Leap year
console.log(leapYear(2021)); // Not a Leap year
console.log(leapYear(1999)); // Not a Leap year