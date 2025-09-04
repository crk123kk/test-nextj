import { headers } from "next/headers";

const fetchImg = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  return res.json();
};

export default async function Home() {
  await headers();
  const obj1 = await fetchImg();
  const obj2 = await fetchImg();
  const obj3 = await fetchImg();
  await headers();
  return <div></div>;
}
