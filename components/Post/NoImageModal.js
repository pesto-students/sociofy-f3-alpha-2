import React from "react";
import { Image, Card, Icon, Divider } from "semantic-ui-react";
import PostComments from "./PostComments";
import CommentInputField from "./CommentInputField";
import calculateTime from "../../utils/calculateTime";
import Link from "next/link";
import { likePost } from "../../utils/postActions";
import LikesList from "./LikesList";

const NoImageModal = ({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments,
}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Image floated="left" avatar src={post.user.profilePicUrl} />

        <Card.Header className="font-link">
          <Link href={`/${post.user.username}`}>
            <a>{post.user.name}</a>
          </Link>
        </Card.Header>

        <Card.Meta className="font-link">
          {calculateTime(post.createdAt)}
        </Card.Meta>

        {post.location && (
          <Card.Meta className="font-link" content={post.location} />
        )}

        <div
          style={{
            fontSize: "17px",
            letterSpacing: "0.1px",
            color: `${post.textColor}`,
            wordSpacing: "0.35px",
            paddingLeft: "43px",
            paddingTop: "20px",
          }}
          className="font-link"
        >
          {post.text}
        </div>
      </Card.Content>

      <Card.Content extra>
        <Icon
          name={isLiked ? "heart" : "heart outline"}
          color="red"
          style={{ cursor: "pointer" }}
          onClick={() =>
            likePost(post._id, user._id, setLikes, isLiked ? false : true)
          }
        />

        <LikesList
          postId={post._id}
          trigger={
            likes.length > 0 && (
              <span className="spanLikesList">
                {`${likes.length} ${likes.length === 1 ? "like" : "likes"}`}
              </span>
            )
          }
        />
        <Icon
          name="comment outline"
          style={{ marginLeft: "7px" }}
          color="blue"
        />

        <Divider hidden />

        <div
          style={{
            overflow: "auto",
            height: comments.length > 2 ? "200px" : "60px",
            marginBottom: "8px",
          }}
        >
          {comments.length > 0 &&
            comments.map((comment) => (
              <PostComments
                key={comment._id}
                comment={comment}
                postId={post._id}
                user={user}
                setComments={setComments}
              />
            ))}
        </div>

        <CommentInputField
          postId={post._id}
          user={user}
          setComments={setComments}
        />
      </Card.Content>
    </Card>
  );
};

export default NoImageModal;
