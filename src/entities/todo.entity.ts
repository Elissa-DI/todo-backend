import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  } from "typeorm";
  import { UserEntity } from "./user.entity";
  import { CoreEntity } from "./core.entity";
  
  @Entity("todos")
  export class TodoEntity extends CoreEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;  
    @Column({ type: "varchar", length: 255 })
    title: string;  
    @Column({ type: "text" })
    description: string;  
    @Column({ type: "boolean", default: false })
    status: boolean;  
    @Column({ type: "date", nullable: true })
    dueDate: Date;  
    @ManyToOne(() => UserEntity, (user) => user.todos, { onDelete: "CASCADE" })
    user: UserEntity;
  }
  