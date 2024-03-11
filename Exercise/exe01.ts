// https://exercism.org/tracks/typescript/exercises/two-fer

function dialogue(name?: string) : string {
    let message: string = `One for value, one for me`;
    if(name) {
        message = message.replace(/value/gi, name);
    } else {
        message = message.replace(/value/gi, 'you');
    }

    return message;

}

console.log(dialogue('Abhishek'));  // o/p : One for Abhishek, one for me
console.log(dialogue()); // o/p : One for you, one for me