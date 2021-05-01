import {
  Entity,
  Column
} from "typeorm"
import { BaseEntity } from "./BaseEntity"

@Entity()
export class Sample extends BaseEntity
{
  constructor() {
    super()
  }
  @Column({ type: 'varchar', length: 256, comment: '氏名' })
  name!: string

  @Column({ type: 'varchar', length: 256, comment: 'メールアドレス' })
  email!: string

  @Column({ type: 'smallint', comment: '年齢' })
  age!: number
}
