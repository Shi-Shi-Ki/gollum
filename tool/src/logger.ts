import fs from "fs"

export class Logger {
  static default = new Logger()
  constructor(private logFile: string = __dirname + "/gen.log") {
    fs.writeFileSync(logFile, "-- run at " + new Date() + "\n")
  }

  log(msg: string): void {
    fs.appendFileSync(this.logFile, msg + "\n")
  }
}

export default Logger.default

