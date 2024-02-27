export async function generateMetadata({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  let post = await response.json();
  return {
    title: `${post.title}`,
    description: `This is a article about ${post.title}`,
  };
}

export default async function Page({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return (
    <div>
      <h1> Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
