import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ product }) {
  console.log(product);
  return (
    <>
      <Header />
      <Featured product={product} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProdcutId = "64568824337c2fdf7b82d2be";
  await mongooseConnect();
  const product = await Product.findById(featuredProdcutId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
