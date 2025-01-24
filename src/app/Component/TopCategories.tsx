// import Image from "next/image";
// import React from "react";

// const TopCategories = () => {
//   const categories = [
//     {
//       id: 1,
//       image: "/Image4.png",
//       title: "Wing Chair",
//       description: "3,584 Products",
//     },
//     {
//       id: 2,
//       image: "/Image8.png",
//       title: "Wooden Chair",
//       description: "2,145 Products",
//     },
//     {
//       id: 3,
//       image: "/Image6.png",
//       title: "Desk Chair",
//       description: "1,978 Products",
//     },
//   ];

//   return (
//     <section className="lg:ml-44 lg:mt-16 lg:mr-44">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-8">
//         Top Categories
//       </h2>

//       <div className="flex gap-6">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="relative w-full sm:w-1/3 lg:w-1/3 h-80 rounded-lg overflow-hidden"
//           >
//             <Image
//               src={category.image}
//               alt={category.title}
//               width={350}
//               height={350}
//               className="object-cover"
//             />

//             {/* Updated Overlay with Title & Description */}
//             <div className="absolute bottom-0 left-0 w-80 bg-black bg-opacity-70 text-white p-1">
//               <h3 className="text-sm  ml-3 font-light font-inter">
//                 {category.title}
//               </h3>
//               <p className="text-sm font-light ml-3 font-inter">
//                 {category.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TopCategories;



import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useState } from "react";



const TopCategories = async () => {
	const categories = await client.fetch(groq`*[_type == "categories"]`);
  

  return (
    <section className="lg:ml-44 lg:mt-16 lg:mr-44">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Top Categories
      </h2>

      <div className="flex gap-6">
        {categories.map((category:any , index:any) => (
          <div
            key={category._id}
            className="relative w-full sm:w-1/3 lg:w-1/3 h-80 rounded-lg overflow-hidden"
          >
            <Image
              src={urlFor(category.image).url()}
              alt={category.title}
              width={400}
              height={400}
              className="object-cover"
            />

            {/* Overlay with Title & Description */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-3">
              <h3 className="text-sm font-light font-inter">
                {category.title}
              </h3>
              <p className="text-sm font-light font-inter">
                3,584 product
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
