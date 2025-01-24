// "use client";

// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { useContext, useState, useEffect } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { CartContext } from "@/app/Component/Context/CartContext";

// const ProductDetails = ({ product }: any) => {
//   const [loading, setLoading] = useState(true); // State for loading
//   const { cartItems, addProduct, qty, decQty, incQty }: any =
//     useContext(CartContext);

//   useEffect(() => {
//     setLoading(false);
//   }, [product]);

//   if (loading) {
//     return <div className="text-center py-20">Loading product details...</div>;
//   }

//   if (!product || !product.image) {
//     return <div className="text-center py-20">Product not found.</div>;
//   }

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Product Image */}
//           <div className="flex justify-center">
//             <div className="relative max-w-sm lg:max-w-md mt-20">
//               {product.image ? (
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.title || "Product Image"}
//                   width={400}
//                   height={400}
//                   className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//                 />
//               ) : (
//                 <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg">
//                   No Image Available
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div>
//             <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
//               {product.title || "Unnamed Product"}
//             </h1>
//             <p className="text-lg text-gray-700 mt-4 leading-relaxed">
//               {product.description ||
//                 "No description available for this product."}
//             </p>
//             <div className="text-2xl font-bold text-yellow-600 mt-6">
//               Price: ${product.price || "0.00"}
//             </div>
//             <div className="text-lg text-gray-600 mt-2">
//               <span className="line-through">
//                 ${product.priceWithoutDiscount || "0.00"}
//               </span>{" "}
//               <span className="ml-2 text-green-600 font-bold">
//                 Save $
//                 {(product.priceWithoutDiscount || 0) - (product.price || 0)}
//               </span>
//             </div>
//             {product.badge && (
//               <div className="mt-4 text-sm bg-yellow-100 text-yellow-700 py-1 px-3 rounded">
//                 {product.badge}
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div className="mt-8 flex items-center gap-4">
//               <h3 className="text-lg font-semibold text-gray-800">Quantity:</h3>
//               <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
//                 <button
//                   className="text-gray-600 hover:text-yellow-500 transition"
//                   onClick={decQty}
//                 >
//                   <AiOutlineMinus size={20} />
//                 </button>
//                 <span className="text-lg font-medium text-gray-800">{qty}</span>
//                 <button
//                   className="text-gray-600 hover:text-yellow-500 transition"
//                   onClick={incQty}
//                 >
//                   <AiOutlinePlus size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addProduct(product, qty)}
//               className="mt-8 w-full lg:w-auto bg-yellow-500 text-white py-3 px-8 rounded-md font-semibold shadow-md hover:bg-yellow-600 transition duration-300"
//             >
//               Add to Cart
//             </button>

//             {/* Inventory Information */}
//             {product.inventory !== undefined && (
//               <div className="mt-4 text-sm text-gray-600">
//                 {product.inventory > 0
//                   ? `${product.inventory} items in stock.`
//                   : "Out of stock."}
//               </div>
//             )}

//             {/* Tags */}
//             {product.tags && product.tags.length > 0 && (
//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold text-gray-800">Tags:</h4>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {product.tags.map((tag: string, index: number) => (
//                     <span
//                       key={index}
//                       className="text-sm bg-gray-200 text-gray-700 py-1 px-3 rounded"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;



"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useContext, useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "@/app/Component/Context/CartContext";

const ProductDetails = ({ product }: any) => {
  const [loading, setLoading] = useState(true); // State for loading
  const { cartItems, addProduct, qty, decQty, incQty }: any =
    useContext(CartContext);

  useEffect(() => {
    setLoading(false);
  }, [product]);

  if (loading) {
    return <div className="text-center font-semibold text-[#272343] py-20">Loading product details...</div>;
  }

  if (!product || !product.image) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative max-w-sm lg:max-w-md mt-20">
              {product.image ? (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title || "Product Image"}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  No Image Available
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              {product.title || "Unnamed Product"}
            </h1>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              {product.description ||
                "No description available for this product."}
            </p>
            <div className="text-2xl font-bold text-red-700 mt-6">
              Price: ${product.price || "0.00"}
            </div>
            <div className="text-lg text-gray-600 mt-2">
              <span className="line-through">
                ${product.priceWithoutDiscount || "0.00"}
              </span>
              <span className="ml-2 text-green-600 font-bold">
                Save $
                {(product.priceWithoutDiscount || 0) - (product.price || 0)}
              </span>
            </div>
            {product.badge && (
              <div className="mt-4 text-sm bg-yellow-300 text-yellow-700 py-1 px-3 rounded inline-block">
                {product.badge}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-8 flex items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-800">Quantity:</h3>
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
                <button
                  className="text-gray-600 hover:text-teal-500 transition"
                  onClick={decQty}
                >
                  <AiOutlineMinus size={20} />
                </button>
                <span className="text-lg font-medium text-gray-800">{qty}</span>
                <button
                  className="text-gray-600 hover:text-teal-500 transition"
                  onClick={incQty}
                >
                  <AiOutlinePlus size={20} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addProduct(product, qty)}
              className="mt-8 w-full lg:w-auto bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 px-8 rounded-md font-semibold shadow-md hover:from-teal-600 hover:to-blue-700 transition duration-300"
            >
              Add to Cart
            </button>

            {/* Inventory Information */}
            {product.inventory !== undefined && (
              <div className="mt-4 text-sm text-gray-600">
                {product.inventory > 0
                  ? `${product.inventory} items in stock.`
                  : "Out of stock."}
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Tags:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-200 text-gray-700 py-1 px-3 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
