export function process(input: string) {
    const [part1, part2] = input.split(/\r?\n\r?\n/).filter(x => x);
    if (part1 === undefined || part2 === undefined) throw new Error();
    const ranges = part1.split(/\r?\n/)
        .map(line => {
            let [min, max] = line.split('-');
            if (min === undefined || max === undefined) throw new Error();
            return {min: +min, max: +max};
        })
    const ids = part2.split(/\r?\n/)
        .filter(x => x)
        .map(x => +x)
        .filter(id => {
            return ranges.some((range) =>
                id <= range.max && id >= range.min)
        })
    return ids.length;
}