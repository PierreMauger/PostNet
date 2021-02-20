import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    school: string;

    @Column()
    experience: number;

    constructor(name: string, age: number, school: string, experience: number) {
        super();
        this.name = name;
        this.age = age;
        this.school = school;
        this.experience = experience;
    }
}
