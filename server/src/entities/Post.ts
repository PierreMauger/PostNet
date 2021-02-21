import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';

@Entity()
export default class Post extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    textPost?: string;

    @Column()
    imagePost?: string;

    @Column()
    postDate: string;

    constructor(textPost: string, imagePost: string, postDate: string) {
        super();
        this.textPost = textPost;
        this.imagePost = imagePost;
        this.postDate = postDate;
    }
}
