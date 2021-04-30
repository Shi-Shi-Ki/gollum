import 'reflect-metadata'
import { Server, ServerCredentials } from 'grpc'
import { DependencyInitializer } from "./DependencyInitializer"
import * as useCase from "../useCase"
import { PingPongService } from '../../generated/pingpong_grpc_pb'
import { PingPongServer } from '../../generated/controller/pingpong_pb_controller'

const serverUri = "localhost:50051"

/**
 * serverの本体
 *
 * DIコンテナ経由で各UseCaseを呼び出す
 */
const run = (async (): Promise<void> => {
  const diInitializer = new DependencyInitializer()
  const container = await diInitializer.init()
  const grpcServer: Server = new Server()

  const pingPongUseCase = container.resolve<useCase.PingPongUseCase>(
    useCase.PingPongUseCase.name
  )
  grpcServer.addService(PingPongService, new PingPongServer(pingPongUseCase))

  console.log(`-- server start! (${serverUri})`)

  grpcServer.bind(serverUri, ServerCredentials.createInsecure())
  grpcServer.start()
})
run()

