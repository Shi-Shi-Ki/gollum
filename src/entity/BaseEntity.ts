import { DateTime } from "luxon"
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from "typeorm"

export class BaseEntity
{
  @PrimaryGeneratedColumn()
  readonly id!: number

  @Column({ unsigned: true, nullable: true, comment: "削除ユーザー" })
  deletedUserId?: number

  @Column({ nullable: true, comment: "作成ユーザー" })
  createdUserId?: number

  @CreateDateColumn({ comment: "作成日" })
  createdAt!: Date

  @Column({ nullable: true, comment: "更新ユーザー" })
  updatedUserId?: number

  @UpdateDateColumn({ comment: "更新日" })
  updatedAt!: Date

  @DeleteDateColumn({ nullable: true, comment: "削除日。論理削除用" })
  deletedAt?: Date
}
