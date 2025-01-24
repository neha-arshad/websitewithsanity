import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Products = async () => {
  const products = await client.fetch(groq`
    *[_type == "products"]{
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      image,
      category->{
        title
      },
      description,
      inventory,
      tags
    }
  `);

  return (
    <div className="container mx-auto py-16 px-6 lg:px-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Our Exclusive Products
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Browse through our premium selection of products.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: any, index: number) => (
          <div
            key={product._id || index}
            className="group bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Product Image */}
            {product.image && (
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={350}
                  height={350}
                  className="object-cover w-full"
                />
                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-2 left-2 px-2 py-[0.6px] rounded text-white text-xs ${
                      product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
            )}

            {/* Product Details */}
            <div className="p-4">
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition duration-300">
                {product.title}
              </h2>
                  {product.inventory !== undefined && (
                    <p className="mt-1 text-sm text-gray-600">
                      {product.inventory > 0
                        ? `${product.inventory} items in stock.`
                        : "Out of stock."}
                    </p>
                  )}

              {/* Price Section with Cart Icon */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.priceWithoutDiscount && (
                    <p className="text-sm line-through text-gray-500">
                      ${product.priceWithoutDiscount.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Spacing */}
              <div className="flex items-center justify-between mt-4">
                <Link href={`/product/${encodeURIComponent(product.title)}`}>
                  <Button
                    className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:from-teal-600 hover:to-blue-700 transition duration-300"
                    variant="outline"
                  >
                    View Details
                  </Button>
                </Link>
                <Link href={"/Cart"}>
                  <div className="bg-gray-100 text-gray-700 p-3 rounded-full shadow-md hover:bg-teal-500 transition duration-300 cursor-pointer">
                    <FaShoppingCart className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;



