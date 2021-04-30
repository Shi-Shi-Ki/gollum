import { container, DependencyContainer } from "tsyringe"
import * as useCase from "../useCase"

/**
 * DIコンテナの設定
 */
export class DependencyInitializer
{
  async init(): Promise<DependencyContainer>
  {
    await this._initUseCase(container)
    return container
  }

  private _initUseCase(container: DependencyContainer)
  {
    container.registerSingleton(
      useCase.PingPongUseCase.name,
      useCase.PingPongUseCaseInteracter
    )
  }
}

