import { FaUserCircle, FaThumbsUp, FaComment} from "react-icons/fa";

export default function PostPreview({username,message,author,source,}) {
  return (
    <div className="postPreview">
      <header>
        <FaUserCircle style={{ width: "30px", height: "30px" }} />
        <strong>{username}</strong>
      </header>
      <main className="postContain">
        <div className="contain">{message}</div>
        <div className="author"><i style={{color: 'gray'}}>{author}</i></div>
        <div className="source"><i><strong>{source}</strong></i></div>
      </main>
      <footer>
        <div className="iconPost">
            <div className="likeButton">
              <div className="countLike">0</div> 
              <FaThumbsUp />
            </div>
            <div className="commentButton">
              <div className="countComments">0</div> 
              <FaComment />
            </div>
        </div>
      </footer>
    </div>
  );
}
