import Post from '../entities/Post'
import { getConnection, getManager } from "typeorm";

const queryRunner = getManager().queryRunner;
const connection = getConnection().name;

export default async function CreatePost(req, res) {
    const firstUser = await
        .createEntityManager(queryRunner)
            .create(Post);
}