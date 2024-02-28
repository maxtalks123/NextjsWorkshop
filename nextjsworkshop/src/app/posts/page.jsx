import { sql } from "@vercel/postgres";
// import Link from "next/link";

export default async function PostsPage() {
  const posts = await sql`
  SELECT * FROM posts;`;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.rows.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
// export default async function PostsPage({ searchParams }) {
//   console.log("searchParams", searchParams);
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await response.json();
//   if (searchParams.sort === "desc") {
//     posts.reverse();
//   }

//   return (
//     <div>
//       <h1>Posts</h1>
//       <Link href="/posts?sort=asc">Sort ascending</Link>
//       <Link href="/posts?sort=desc">Sort descending</Link>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
