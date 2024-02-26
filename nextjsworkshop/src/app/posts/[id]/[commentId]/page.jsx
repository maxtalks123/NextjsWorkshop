export default function CommentPage({ params }) {
  console.log(params);
  return (
    <h1>
      Post Page ID:{params.id}, Comment ID: {params.commentID}
    </h1>
  );
}
