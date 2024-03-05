import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not found</h2>
      <p>Could not find requested post</p>
      <Link href="/">Return to the homepage</Link>
    </div>
  );
}