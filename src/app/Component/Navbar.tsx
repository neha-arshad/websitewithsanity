// "use client";
// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Image from "next/image";

// const Navbar = () => {
//   return (
//     <nav className="p-2 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logoo.webp"
//             alt="logo"
//             width={60}
//             height={60}
//             className="rounded-full"
//           />
//         </Link>

//         {/* Left side: Links */}
//         <div className="hidden md:flex space-x-4 items-start mr-20">
//           <Link
//             href="/"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             Home
//           </Link>
//           <Link
//             href="/product/product.id"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Blog"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             About
//           </Link>
//           <Link
//             href="/Contact"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             Shop
//           </Link>
//           <Link
//             href="/Contact"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Right side: Login, Signup, Cart */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Button className="text-xs hover:text-[#272343]" variant="outline">
//             Login
//           </Button>
//           <Button className="text-xs hover:text-[#272343]" variant="outline">
//             Signup
//           </Button>
//           <Link href="/cart">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7.5m1.5-7.5H4m3 0h10m-7 0l1.5 7.5M17 13l1.5 7.5M6 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
//               />
//             </svg>
//           </Link>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </SheetTrigger>
//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle className="font-bold my-4">Menu</SheetTitle>
//                 <SheetDescription>
//                   <div className="flex flex-col gap-6">
//                     <Link href="/">Home</Link>
//                     <Link href="/about">About</Link>
//                     <Link href="/blog">Blog</Link>
//                     <Link href="/contact">Contact</Link>
//                     <div className="flex space-x-2">
//                       <Button className="text-xs" variant="outline">
//                         Login
//                       </Button>
//                       <Button className="text-xs" variant="outline">
//                         Signup
//                       </Button>
//                     </div>
//                   </div>
//                 </SheetDescription>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useContext, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CartContext } from "./Context/CartContext";
// import Cart from "./Cart/page";

// const Navbar = () => {
//   const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);

//   const handleCartClick = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <nav className="p-2 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logoo.webp"
//             alt="logo"
//             width={60}
//             height={60}
//             className="rounded-full"
//           />
//         </Link>

//         {/* Left side: Links */}
//         <div className="hidden md:flex space-x-4 items-start mr-20">
//           <Link
//             href="/"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             Home
//           </Link>
//           <Link
//             href="/product/product.id"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Blog"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             About
//           </Link>
//           <Link
//             href="/Contact"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300 hover:text-[#272343]"
//           >
//             Shop
//           </Link>
//           <Link
//             href="/Contact"
//             className="hover:scale-10 hover:font-semibold transition-transform duration-300"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Right side: Login, Signup, Cart */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Button className="text-xs hover:text-[#272343]" variant="outline">
//             Login
//           </Button>
//           <Button className="text-xs hover:text-[#272343]" variant="outline">
//             Signup
//           </Button>
//           <button
//             onClick={handleCartClick}
//             className="relative hover:text-gray-500 transition duration-200"
//             aria-label="Shopping Cart"
//           >
//             <AiOutlineShoppingCart size={24} />
//             {totalQuantity > 0 && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
//                 {totalQuantity}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </SheetTrigger>
//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle className="font-bold my-4">Menu</SheetTitle>
//                 <SheetDescription>
//                   <div className="flex flex-col gap-6">
//                     <Link href="/">Home</Link>
//                     <Link href="/about">About</Link>
//                     <Link href="/blog">Blog</Link>
//                     <Link href="/contact">Contact</Link>
//                     <div className="flex space-x-2">
//                       <Button className="text-xs" variant="outline">
//                         Login
//                       </Button>
//                       <Button className="text-xs" variant="outline">
//                         Signup
//                       </Button>
//                     </div>
//                   </div>
//                 </SheetDescription>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>

//       {/* Cart Sidebar */}
//       {showCart && (
//         <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-20">
//           <Cart />
//           <button
//             onClick={handleCartClick}
//             className="absolute top-4 right-4 text-red-500 hover:text-red-700"
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import Link from "next/link";
// import React, { useContext } from "react";
// import { FiShoppingBag } from "react-icons/fi";
// import Cart from "./Cart/page";
// import { CartContext } from "./Context/CartContext";

// const Navbar = () => {
//   const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);

//   const handleCick = () => {
//     setShowCart(!showCart);
//   };
//   return (
//     <>
//       <div className="w-full h-[80px] bg-white ">
//         <div className="container w-full h-full flex justify-between items-center">
//           <Link href="/" className="logo">
//             Shop
//           </Link>
//           <button className="cart-icon" onClick={handleCick}>
//             <FiShoppingBag />
//             <span className="cart-item-qty">{totalQuantity}</span>
//           </button>
//         </div>
//       </div>

//       {showCart && <Cart />}
//     </>
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { CartContext } from "./Context/CartContext";
import Cart from "./Cart/page";

const Navbar = () => {
  const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);

  const handleCick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div className="w-full h-[80px] bg-white border-b shadow-sm">
        <div className="container mx-auto h-full flex justify-between items-center px-4">
          {/* Left Side: Logo */}
          <Link href="/" className="text-2xl font-semibold text-gray-700">
            Shop
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Product
            </Link>
            <Link
              href="/About"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          {/* Right Side: Signup, Login, and Cart */}
          <div className="flex items-center space-x-4">
						<Link href="/login">
            <Button className="text-xs hover:text-gray-700" variant="outline">
              Login
            </Button>
						</Link>
						<Link href="/signup">
            <Button className="text-xs hover:text-gray-700" variant="outline">
              Signup
            </Button>
						</Link>

            {/* Cart Icon */}
            <button
              className="relative text-gray-600 hover:text-gray-900"
              onClick={handleCick}
              aria-label="Shopping Cart"
            >
              <FiShoppingBag size={24} />
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
