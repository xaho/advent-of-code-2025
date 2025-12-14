export function process(input: string) {
    const grid = input.split(/\r?\n/)
        .filter(x => x)
        .map(x => x.split(''));
    if (grid[0] === undefined) throw new Error();
    let splits = 0;
    let x = grid[0].indexOf('S');
    let beams = new Set([x]);
    for (let y = 1; y < grid.length; y++) {
        let row = grid[y];
        if (row === undefined) throw new Error();
        let beamsCopy = new Set([...beams]);
        for (const beam of beamsCopy) {
            if (grid[y+1]?.[beam] === '^') {
                splits++;
                beams.delete(beam);
                if (beam > 0) beams.add(beam-1);
                if (beam < grid[0].length - 1) beams.add(beam+1);
            }
        }
    }
    return {splits};
}

export function part2(input: string) {
    const grid = input.split(/\r?\n/)
        .filter(x => x)
        .map(x => x.split(''));
    if (grid[0] === undefined) throw new Error();
    let splits = 0;
    let x = grid[0].indexOf('S');
    let beams: { [p: number]: number } = { [x]: 1 };
    for (let y = 1; y < grid.length; y++) {
        for (let [beam, amount] of Object.entries(beams)) {
            if (grid[y]?.[+beam] === '^') {
                splits += amount * 2;
                beams[+beam-1] ??= 0;
                beams[+beam-1]+=amount;
                beams[+beam+1] ??= 0;
                beams[+beam+1]+=amount;
                delete beams[+beam];
            }
        }
    }
    return Object.values(beams).reduce((a, b) => a + b);
}
