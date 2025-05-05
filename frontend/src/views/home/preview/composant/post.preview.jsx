import { FaUserCircle, FaThumbsUp, FaComment} from "react-icons/fa";

export function PostPreview({
  username,
  message,
  author,
  source,
}) {
  return (
    <div className="commentPreview">
      <header>
        {/* {profilePicture ? (
          <img src={profilePicture} width={50} height={50} className="pp"></img>
        ) : (
          <FaUserCircle
            style={{ color: "white", width: "50px", height: "50px" }}
          />
        )} */}
        <strong>{username}</strong>
      </header>
      <main>
        <div className="contain">{message}</div>
        <div className="author">{author}</div>
        <div className="source">{source}</div>
      </main>
      <footer>
        <div className="iconPost">
            <div><FaThumbsUp /> . j'aime</div>
            <div><FaComment /> . commentaire</div>
        </div>
      </footer>
    </div>
  );
}
