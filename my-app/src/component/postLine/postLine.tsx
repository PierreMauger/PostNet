import Post from '../post/post'

export default function Postline() {
    const items = [1, 2, 3, 4, 5];
    return (
        <div> {
            items.map((item) =>
                <Post
                    imgProfileURL="https://www.pikpng.com/pngl/m/279-2797878_meme-man-god-of-hyperdeath-png-download-mask.png"
                    profileName="God"
                    profileID={1}
                    postDate="December 12, 2012"
                    imgPostUrl="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/25/796eefd6-4687-11eb-be92-09cd005df0bf_image_hires_171827.jpg?itok=LN5ReEYj&v=1608887922"
                    postTitle="Universal collapse"
                    postMessage="I will kill you all."
                />
            )
        } </div>
    );
}