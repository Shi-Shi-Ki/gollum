"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAllStdIn = void 0;
function withAllStdIn(callback) {
    const ret = [];
    let len = 0;
    const stdin = process.stdin;
    stdin.on("readable", function () {
        let chunk;
        while ((chunk = stdin.read())) {
            if (!(chunk instanceof Buffer))
                throw new Error("Did not receive buffer");
            ret.push(chunk);
            len += chunk.length;
        }
    });
    stdin.on("end", function () {
        callback(Buffer.concat(ret, len));
    });
}
exports.withAllStdIn = withAllStdIn;
//# sourceMappingURL=util.js.map