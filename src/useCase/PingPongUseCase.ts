import { injectable, inject } from 'tsyringe'
import { Connection } from "typeorm"
import { IPingPongService } from "../../generated/pingpong_grpc_pb"
import {
  PingPongService,
  PingRequest,
  PingResponse
} from "../../generated/controller/pingpong_pb_controller"
import { DiSymbols } from "../bootstrap/DiSymbols"

/**
 * UseCaseクラス
 */
export abstract class PingPongUseCase implements PingPongService
{
  abstract ping(req: PingRequest): Promise<PingResponse>
}

@injectable()
export class PingPongUseCaseInteracter extends PingPongUseCase
{
  constructor(
    @inject(DiSymbols.Transactor) private _transactor: Connection
  )
  {
    super()
  }

  async ping(req: PingRequest): Promise<PingResponse>
  {
    console.log("call ping")
    console.log(req)

    await this._transactor.transaction(async (tx) => {
      const findData = await tx.find('Sample', { id: 1 })
      console.log(findData)
    })

    return {
      message: `hello ping!! res: ${req.name}`
    }
  }
}
