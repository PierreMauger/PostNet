import User from './User'
import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';

@Entity()
export default class Post extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    idUser?: User;

    @Column()
    textPost?: string;

    @Column()
    imagePost?: string;

    @Column()
    postDate: string;

    constructor(idUser: User, textPost: string, imagePost: string, postDate: string) {
        super();
        this.idUser = idUser;
        this.textPost = textPost;
        this.imagePost = imagePost;
        this.postDate = postDate;
    }
}
