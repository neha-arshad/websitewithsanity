// import React from "react";
// import Image from "next/image";

// const FeaturedProduct = () => {
//   // Array of featured products
//   const products = [
//     {
//       id: 1,
//       description: "Library Stool Chair",
//       image: "/Image1.png",
//       price: "$20",
//       label: "New",
//     },
//     {
//       id: 2,
//       description: "Rose Luxe Armchair",
//       image: "/Image2.png",
//       price: "$20",
//       label: "Sale",
//     },
//     {
//       id: 3,
//       description: "Citrus Edge",
//       image: "/Image3.png",
//       price: "$20",
//     },
//     {
//       id: 4,
//       description: "Ivory Charm",
//       image: "/Image4.png",
//       price: "$20",
//     },
//   ];

//   return (
//     <section className="py-10 px-6 lg:ml-44 lg:mr-44">
//       {/* Section Title */}
//       <h2 className="text-2xl font-medium text-start text-gray-800 mb-8">
//         Featured Products
//       </h2>
//       {/* Products Row */}
//       <div className="flex flex-wrap justify-between gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg overflow-hidden w-[22%] flex-grow"
//           >
//             {/* Product Image with Dynamic Label */}
//             <div className="relative w-full h-60">
//               <Image
//                 src={product.image}
//                 alt="images"
//                 layout="fill"
//                 objectFit="cover"
//               />
//               {/* Conditional Label */}
//               {product.label && (
//                 <div
//                   className={`absolute top-2 left-2 ${
//                     product.label === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
//                   } text-white text-xs  px-2 py-[0.6px] rounded mt-2 ml-2`}
//                 >
//                   {product.label}
//                 </div>
//               )}
//             </div>

//             {/* Product Info */}
//             <div className="p-3">
//               <h3 className="text-sm font-bold text-gray-800 "></h3>
//               <p className="text-gray-600 text-xs">{product.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold">{product.price}</span>
//                 {/* Cart Icon Button */}
//                 <button className="px-3 py-1 rounded-md bg-[#F0F2F3] hover:bg-[#029FAE] transition ">
//                   {/* <FaCartPlus /> */}
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M2.52075 2.97917L4.42742 3.30917L5.31017 13.8261C5.34408 14.2399 5.53278 14.6258 5.83861 14.9066C6.14445 15.1875 6.54494 15.3427 6.96017 15.3413H16.961C17.3586 15.3418 17.743 15.1987 18.0434 14.9383C18.3439 14.6779 18.5402 14.3178 18.5963 13.9242L19.4672 7.91267C19.4904 7.7528 19.4819 7.58991 19.4421 7.43334C19.4023 7.27676 19.332 7.12956 19.2353 7.00015C19.1386 6.87075 19.0173 6.76168 18.8784 6.67918C18.7395 6.59667 18.5857 6.54236 18.4258 6.51934C18.3672 6.51292 4.73359 6.50834 4.73359 6.50834"
//                       stroke="#272343"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M12.9478 9.89542H15.4897"
//                       stroke="#272343"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
//                       fill="#272343"
//                       stroke="#272343"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.466 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.466 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
//                       fill="#272343"
//                       stroke="#272343"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProduct;


import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      description: "Library Stool Chair",
      image: "/Image1.png",
      price: "$20",
      label: "New",
    },
    {
      id: 2,
      description: "Rose Luxe Armchair",
      image: "/Image2.png",
      price: "$20",
      label: "Sale",
    },
    {
      id: 3,
      description: "Citrus Edge",
      image: "/Image3.png",
      price: "$20",
    },
    {
      id: 4,
      description: "Ivory Charm",
      image: "/Image4.png",
      price: "$20",
    },
  ];

  return (
    <section className="py-10 mt-14 px-6 lg:ml-44 lg:mr-44">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Featured Products
      </h2>
      {/* Products Row */}
      <div className="flex flex-wrap justify-between gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg  bg-zinc-100 p-4 shadow-md hover:shadow-lg transition w-[22%] flex-grow"
          >
            {/* Product Image with Dynamic Label */}
            <div className="relative w-full h-48 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full mt-5 overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.description}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              {/* Conditional Label */}
              {product.label && (
                <div
                  className={`absolute top-1 left-1 px-2 py-[0.6px] rounded text-white text-xs ${
                    product.label === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                  }`}
                >
                  {product.label}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="text-center mt-4">
              <p className="text-lg  text-[#272343]">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-semibold text-[#272343]">
                  {product.price}
                </span>
                {/* Cart Icon Button */}
                <Button className="px-3 py-2 rounded-full hover:scale-100 transition-transform duration-300" variant="outline" >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.52075 2.97917L4.42742 3.30917L5.31017 13.8261C5.34408 14.2399 5.53278 14.6258 5.83861 14.9066C6.14445 15.1875 6.54494 15.3427 6.96017 15.3413H16.961C17.3586 15.3418 17.743 15.1987 18.0434 14.9383C18.3439 14.6779 18.5402 14.3178 18.5963 13.9242L19.4672 7.91267C19.4904 7.7528 19.4819 7.58991 19.4421 7.43334C19.4023 7.27676 19.332 7.12956 19.2353 7.00015C19.1386 6.87075 19.0173 6.76168 18.8784 6.67918C18.7395 6.59667 18.5857 6.54236 18.4258 6.51934C18.3672 6.51292 4.73359 6.50834 4.73359 6.50834"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.9478 9.89542H15.4897"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
                      fill="#272343"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.466 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.466 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
                      fill="#272343"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
