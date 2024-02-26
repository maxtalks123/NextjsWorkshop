export default function Page({ params }) {
  console.log(params);
  return <p>My new dynamic page {params.id}</p>;
}
