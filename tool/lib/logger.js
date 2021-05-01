"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs_1 = __importDefault(require("fs"));
class Logger {
    constructor(logFile = __dirname + "/gen.log") {
        this.logFile = logFile;
        fs_1.default.writeFileSync(logFile, "-- run at " + new Date() + "\n");
    }
    log(msg) {
        fs_1.default.appendFileSync(this.logFile, msg + "\n");
    }
}
exports.Logger = Logger;
Logger.default = new Logger();
exports.default = Logger.default;
//# sourceMappingURL=logger.js.map