export function process(input: string) {
    const processed = input.split(',')
        .filter(x => x)
        .map(range => {
            let [start, end] = range.split('-').map(x => +x);
            if (start === undefined || end === undefined) throw new Error();
            return {start, end};
        })
    let invalidIds = 0;
    let part2 = 0;
    for (let {start, end} of processed) {
        for (let i = start; i <= end; i++) {
            let str = i.toString(10);
            let half = str.length / 2;
            if (str.length % 2 === 0) {
                let left = str.substring(0, half);
                let right = str.substring(half);
                if (left === right) {
                    invalidIds += i;
                }
            }

            // part 2:
            for (let length = 1; length <= half; length++) {
                if (str.length % length !== 0) continue;
                if (str.substring(0, length).repeat(str.length / length) === str) {
                    part2 += i;
                    break;
                }
            }
        }
    }
    return {invalidIds, part2};
}