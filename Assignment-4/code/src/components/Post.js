import PostFooter from "./Postfooter";
import Postheader from "./Postheader";
import Postimage from "./Postimage";

const Post = ({ config }) => {
    return (
        <div className="Post">
            <Postheader config={config} />
            <Postimage config={config} />
            <PostFooter config={config} />
        </div>
    )
}

export default Post;