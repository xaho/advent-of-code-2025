export function process(input: string) {
    const processedInput = input.split(/\r?\n/)
        .filter(x => x)
        .map(line => ({direction: line.slice(0, 1), amount: +line.slice(1)}));

    let dial = 50;
    let solution = 0;
    let passedZero = 0;
    for (let {direction, amount} of processedInput) {
        let remainder = amount % 100;
        let fullRevolutions = (amount - remainder) / 100;

        passedZero += fullRevolutions;
        let startedFromZero = dial === 0;

        if (direction === 'L') {
            dial -= remainder;
            if (dial < 0) {
                // we may have come from 0
                if (!startedFromZero) {
                    passedZero++;
                }
                dial += 100;
            }
        } else {
            dial += remainder;
            if (dial >= 100) {
                dial -= 100;
                if (!startedFromZero && dial !== 0)
                    passedZero++;
            }
        }
        if (dial === 0) {
            solution++;
            passedZero++;
        }
    }
    return {atZero: solution, passedZero};
}