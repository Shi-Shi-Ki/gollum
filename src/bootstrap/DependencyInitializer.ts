import {
  container,
  DependencyContainer
} from "tsyringe"
import {
  createConnection,
  getConnectionOptions
} from "typeorm"
import { DiSymbols } from "./DiSymbols"
import * as useCase from "../useCase"
import { AllModels } from "../entity/AllModels"

/**
 * DIコンテナの設定
 */
export class DependencyInitializer
{
  async init(): Promise<DependencyContainer>
  {
    await this._initDatabase(container)
    await this._initUseCase(container)
    return container
  }

  private async _initDatabase(container: DependencyContainer)
  {
    const connectionOptions = await getConnectionOptions()
    Object.assign(connectionOptions, { entities: AllModels })
    container.registerInstance(
      DiSymbols.Transactor,
      await createConnection(connectionOptions)
    )
  }

  private _initUseCase(container: DependencyContainer)
  {
    container.registerSingleton(
      useCase.PingPongUseCase.name,
      useCase.PingPongUseCaseInteracter
    )
  }
}

