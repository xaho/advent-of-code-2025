const offsets = [
    {xOffset: -1, yOffset: -1},
    {xOffset: 0, yOffset: -1},
    {xOffset: 1, yOffset: -1},
    {xOffset: 1, yOffset: 0},
    {xOffset: -1, yOffset: 0},
    {xOffset: -1, yOffset: 1},
    {xOffset: 0, yOffset: 1},
    {xOffset: 1, yOffset: 1},
]

export function process(input: string) {
    const grid = input.split(/\r?\n/)
        .filter(x => x)
        .map(x => x.split(''))

    let liftable = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (grid[y]?.[x] === '@') {
                const neighbours = getNeighbours(grid, x, y);
                const paperRolls = countPaperRolls(neighbours);
                if (paperRolls < 4) {
                    liftable++;
                }
            }
        }
    }
    return liftable;
}

function getNeighbours(grid: string[][], x: number, y: number): string[] {
    return offsets.map(({xOffset, yOffset}) =>
        grid[y + yOffset]?.[x + xOffset] ?? '.')
}

function countPaperRolls(spaces: string[]): number {
    return spaces.reduce((prev, cur) =>
        cur === '@' ? prev + 1 : prev, 0);
}