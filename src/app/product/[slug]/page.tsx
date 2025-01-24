
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Navbar, ProductDetails } from "@/app/Component";

interface Product {
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image?: { asset: { _ref: string } }; // Image with asset reference
  category?: { _ref: string };
  description: string;
  inventory: number;
  tags?: string[];
  slug: { current: string };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURIComponent(params.slug);

  // Fetch product data from Sanity
  const query = groq`*[_type == "products"]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "image": image.asset->url, // Resolve the image URL
    category,
    description,
    inventory,
    tags,
    slug
  }`;

  const products: Product[] = await client.fetch(query);

  // Find the product by slug
  const product = products.find((product) => product?.slug?.current === slug);

  // Handle product not found
  if (!product) {
    return (
      <>
        
        <div className="text-center py-10">
          <h1 className="text-2xl font-semibold text-red-500">
            Product not found
          </h1>
          <p className="text-gray-600">
            The product you're looking for does not exist.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      
      <ProductDetails product={product} />
    </>
  );
};

export default Page;
