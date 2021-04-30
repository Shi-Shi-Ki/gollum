import { injectable, inject } from 'tsyringe'
import { IPingPongService } from "../../generated/pingpong_grpc_pb"
import {
  PingPongService,
  PingRequest,
  PingResponse
} from "../../generated/controller/pingpong_pb_controller"

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
  constructor()
  {
    super()
  }

  async ping(req: PingRequest): Promise<PingResponse>
  {
    console.log("call ping")
    console.log(req)

    return {
      message: `hello ping!! res: ${req.name}`
    }
  }
}
