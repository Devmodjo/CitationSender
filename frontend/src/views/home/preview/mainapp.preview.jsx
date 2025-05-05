import React, { useState } from "react";
import { useEffect } from "react";
import { NabarPreview } from "./composant/navbar.preview";
import { PostPreview } from "./composant/post.preview";

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
  });

  return (
    <div className="mainappPreview">
      <NabarPreview />

      <div className="somePosts">
        {/* contenir tous les post apres traitement dans le useEffect */}
        {posts.map((post, index) => (
          <PostPreview
            key={index}
            username={post.username}
            message={post.message}
            author={post.author}
            source={post.source}
          />
        ))}
      </div>
    </div>
  );
}

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
