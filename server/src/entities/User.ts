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
    image: string;

    constructor(name: string, image: string) {
        super();
        this.name = name;
        this.image = image;
    }
}
