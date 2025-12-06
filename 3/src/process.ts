export function process(input: string) {
    const processed = input.split(/\r?\n/)
        .filter(x => x)
        .map(x => x.split('').map(x => +x));
    return processed.map(bank => {
        if (bank[0] === undefined || bank[1] === undefined) throw new Error();
        let tens = Math.max(...bank.slice(0, bank.length - 1));
        let tensIndex = bank.indexOf(tens);
        let singles = Math.max(...bank.slice(tensIndex+1));
        return tens * 10 + singles;
    }).reduce((a, b) => a + b);
}