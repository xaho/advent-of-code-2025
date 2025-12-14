export function process(input: string) {
    const corners = input.split(/\r?\n/)
        .filter(x => x)
        .map(line => {
            const [x, y] = line.split(',');
            if (x === undefined || y === undefined) throw new Error();
            return {x: +x, y: +y};
        });
    let largest = 0;
    for (let a of corners) {
        for (let b of corners) {
            let area = (Math.abs(a.x-b.x)+1) * (Math.abs(a.y-b.y)+1);
            if (area > largest) {
                largest = area;
            }
        }
    }
    return largest;
}