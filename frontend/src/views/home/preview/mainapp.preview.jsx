import { lazy, Suspense, useState } from "react";
import { useEffect } from "react";
import { NabarPreview } from "./composant/navbar.preview";
import { ErrorBoundary } from "../../error/ErrorBoundary";

export function MainappPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="mainappPreview">
      <NabarPreview />

      <div className="somePosts">
        {/* contenir tous les post apres traitement dans le useEffect */}
        {
          <ErrorBoundary fallback={<p>Impossible de charger les posts</p>}>
            {asynchroniousPost(posts)}
          </ErrorBoundary>
        }
      </div>
    </div>
  );
}

const asynchroniousPost = function (posts) {
  const PostLazy = lazy(() => import("./composant/post.preview"));

  return (
    <Suspense fallback={<div className="loader"></div>}>
      {posts.map((data, key) => (
        <PostLazy
          key={key}
          username={data.username}
          message={data.message}
          author={data.author}
          source={data.source}
        />
      ))}
    </Suspense>
  );
};

const getPosts = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/posts/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });

    if (req.status === 200) {
      return req.json();
    }
    throw new Error("Impossible de contacter le serveur");
  } catch (err) {
    console.log(`une erreur est survenus ${err.message}`);
  }
};
