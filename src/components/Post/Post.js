import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import {
  Wrapper,
  Header,
  Date,
  OutlineIcon,
  SolidIcon,
  Title,
  Body,
} from "./Post.style";

const Post = ({ title, body, date }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 2000,
      reset: true,
    });

    sr.reveal("#post-wrapper", { delay: 200 });
    sr.reveal("#post-date", { delay: 400 });
    sr.reveal("#post-title", { delay: 500 });
    sr.reveal("#post-description", { delay: 600 });
  }, []);

  return (
    <Wrapper id="post-wrapper">
      <Header>
        <Date id="post-date">{date}</Date>
        {favorite ? (
          <SolidIcon
            onClick={() => {
              setFavorite(!favorite);
            }}
          />
        ) : (
          <OutlineIcon
            onClick={() => {
              setFavorite(!favorite);
            }}
          />
        )}
      </Header>
      <Title id="post-title">{title}</Title>
      <Body id="post-body">{body}</Body>
    </Wrapper>
  );
};

export default Post;
