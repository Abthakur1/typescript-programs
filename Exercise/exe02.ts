//https://exercism.org/tracks/typescript/exercises/resistor-color
export function resistorColor(color: string): number {
    const colors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];
    return colors.indexOf(color);

}

console.log(resistorColor('Yellow')); // 4
