
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number; 

    @Column({
        unique: true,
        length: 20,
    })
    username: string;

    @Column()
    password: string;

    @Column() 
    salt: string;


}