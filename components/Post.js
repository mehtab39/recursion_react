import { useState } from "react";

export const Post = ({ data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      {data?.map((el, key) => {
        return (
          <div key={key}>
            <p>{el.author}</p>
            <p>{el.timestamp}</p>
            <p>{el.body}</p>
            {el.replies ? (
              <button onClick={() => setExpand(!expand)}>
                {" "}
                {!expand ? <p>Check Replies</p> : <p>Hide Replies</p>}
              </button>
            ) : (
              <p style={{ color: "red" }}>No Replies yet</p>
            )}
            {expand && el.replies && el.replies.length > 0 ? (
              <Post data={el.replies} />
            ) : (
              <p></p>
            )}
            <hr />
          </div>
        );
      })}
    </div>
  );
};
