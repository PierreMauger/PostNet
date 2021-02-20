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
                    imgPostUrl="https://i.kym-cdn.com/entries/icons/facebook/000/021/565/angry.jpg"
                    postTitle="Universal collapse"
                    postMessage="I will kill you all."
                />
            )
        } </div>
    );
}