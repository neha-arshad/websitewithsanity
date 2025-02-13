// import React, { useContext } from "react";
// import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { TiDeleteOutline } from "react-icons/ti";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { CartContext } from "../Context/CartContext";
// import ShippoData from "../shippoData";

// const Cart = () => {
//   const {
//     onRemove,
//     toggleCartItemQty,
//     totalPrice,
//     totalQuantity,
//     cartItems,
//     showCart,
//     setShowCart,
//   }: any = useContext(CartContext);

//   const handleClose = () => {
//     setShowCart(!showCart);
//   };

//   const handleCheckout = async () => {
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ products: cartItems }),
//       });
//       const data = await response.json();
//       if (data.url) {
//         window.location.href = data.url;
//       }
//     } catch (error) {
//       console.error("Error during checkout", error);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 space-y-6 relative">
//       {/* Cart Header */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           className="text-xl text-gray-600 hover:text-gray-800 transition-all duration-300"
//           onClick={handleClose}
//         >
//           <AiOutlineLeft />
//         </button>
//         <span className="text-2xl font-semibold text-gray-800">Your Cart</span>
//         <span className="text-sm text-gray-600">{totalQuantity} items</span>
//       </div>

//       {/* Cart Items */}
//       <div className="space-y-6 max-h-96 overflow-y-auto">
//         {cartItems.map((product: any) => (
//           <div
//             key={product._id}
//             className="flex items-center p-4 border border-gray-200 rounded-md hover:shadow-md transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="w-20 h-20 flex-shrink-0">
//               <Image
//                 src={
//                   product.image &&
//                   Array.isArray(product.image) &&
//                   product.image[0]
//                     ? urlFor(product.image[0]).url()
//                     : "/"
//                 }
//                 alt={product.title}
//                 width={80}
//                 height={80}
//                 className="rounded-md object-cover"
//               />
//             </div>

//             {/* Details */}
//             <div className="flex-1 ml-4">
//               <h5 className="text-lg font-semibold text-gray-800">
//                 {product.title}
//               </h5>
//               <p className="text-gray-600 text-sm mt-1">${product.price}</p>

//               {/* Quantity Control */}
//               <div className="flex items-center space-x-4 mt-4">
//                 <button
//                   onClick={() => toggleCartItemQty(product._id, "minus")}
//                   className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all duration-300"
//                 >
//                   <AiOutlineMinus />
//                 </button>
//                 <span className="text-sm font-semibold text-gray-800">
//                   {product.quantity}
//                 </span>
//                 <button
//                   onClick={() => toggleCartItemQty(product._id, "plus")}
//                   className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all duration-300"
//                 >
//                   <AiOutlinePlus />
//                 </button>
//               </div>
//             </div>

//             {/* Remove Item */}
//             <button
//               onClick={() => onRemove(product)}
//               className="text-red-600 hover:text-red-800 ml-4 transition-all duration-300"
//             >
//               <TiDeleteOutline size={24} />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Bottom - Subtotal and Checkout */}
//       {cartItems.length > 0 && (
//         <div className="border-t pt-4">
//           <div className="flex justify-between text-lg font-semibold text-gray-800">
//             <span>Subtotal</span>
//             <span>${totalPrice}</span>
//           </div>
//           <div className="mt-4">
//             <button
//               onClick={handleCheckout}
//               className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
//             >
//               Pay with Stripe
//             </button>
//           </div>
//         </div>
//       )}
// 		<ShippoData />
//     </div>
//   );
// };

// export default Cart;
// "use client"

// import React, { useContext } from "react";
// import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { TiDeleteOutline } from "react-icons/ti";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { CartContext } from "../Context/CartContext";
// import ShippoData from "../shippoData";
// import Link from "next/link";

// const Cart = () => {
//   const {
//     onRemove,
//     toggleCartItemQty,
//     totalPrice,
//     totalQuantity,
//     cartItems,
//     showCart,
//     setShowCart,
//   }:any = useContext(CartContext);

//   const handleClose = () => {
//     setShowCart(false);
//   };

//   const handleCheckout = async () => {
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ products: cartItems }),
//       });
//       const data = await response.json();
//       if (data.url) {
//         window.location.href = data.url;
//       }
//     } catch (error) {
//       console.error("Error during checkout", error);
//     }
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//         showCart ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="p-6 relative h-full flex flex-col">
//         {/* Cart Header */}
//         <div className="flex justify-between items-center mb-4">
//           <button
//             className="text-xl text-gray-600 hover:text-gray-800 transition-all duration-300"
//             onClick={handleClose}
//           >
//             <AiOutlineLeft />
//           </button>
//           <span className="text-2xl font-semibold text-gray-800">
//             Your Cart
//           </span>
//           <span className="text-sm text-gray-600">{totalQuantity} items</span>
//         </div>

//         {/* Cart Items */}
//         <div className="space-y-4 overflow-y-auto flex-1 pr-2">
//           {cartItems.length > 0 ? (
//             cartItems.map((product: any) => (
//               <div
//                 key={product._id}
//                 className="flex items-center p-4 border border-gray-200 rounded-md hover:shadow-md transition-all duration-300"
//               >
//                 {/* Image */}
//                 <div className="w-20 h-20 flex-shrink-0">
//                   <Image
//                     src={
//                       // product.image?.length
//                       //   ? urlFor(product.image[0]).url()
//                       //   : "/placeholder.jpg"
//                       product.image &&
//                       Array.isArray(product.image) &&
//                       product.image[0]
//                         ? urlFor(product.image[0]).url()
//                         : "/"
//                     }
//                     alt={product.title}
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover"
//                   />
//                 </div>

//                 {/* Details */}
//                 <div className="flex-1 ml-4">
//                   <h5 className="text-lg font-semibold text-gray-800">
//                     {product.title}
//                   </h5>
//                   <p className="text-gray-600 text-sm mt-1">${product.price}</p>

//                   {/* Quantity Control */}
//                   <div className="flex items-center space-x-4 mt-2">
//                     <button
//                       onClick={() => toggleCartItemQty(product._id, "minus")}
//                       className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all duration-300"
//                     >
//                       <AiOutlineMinus />
//                     </button>
//                     <span className="text-sm font-semibold text-gray-800">
//                       {product.quantity}
//                     </span>
//                     <button
//                       onClick={() => toggleCartItemQty(product._id, "plus")}
//                       className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all duration-300"
//                     >
//                       <AiOutlinePlus />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Remove Item */}
//                 <button
//                   onClick={() => onRemove(product)}
//                   className="text-red-600 hover:text-red-800 ml-4 transition-all duration-300"
//                 >
//                   <TiDeleteOutline size={24} />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-600">Your cart is empty.</p>
//           )}
//         </div>

//         {/* Cart Bottom - Subtotal and Checkout */}
//         {cartItems.length > 0 && (
//           <div className="border-t pt-4">
//             <div className="flex justify-between text-lg font-semibold text-gray-800">
//               <span>Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
//             >
//               Pay with Stripe
//             </button>
//           </div>
//         )}
//         <Link href="/Shippo">
//           <button className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300">
//             Shippment
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;

"use client"
import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CartContext } from "../Context/CartContext";
import Link from "next/link";

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null; // Ensure component doesn't break if context is undefined
  }

  const {
    onRemove,
    toggleCartItemQty,
    totalPrice,
    totalQuantity,
    cartItems,
    showCart,
    setShowCart,
  } = cartContext;

  const handleClose = () => {
    setShowCart(false);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 relative h-full flex flex-col">
        {/* Cart Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-xl text-gray-600 hover:text-gray-800 transition-all duration-300"
            onClick={handleClose}
          >
            <AiOutlineLeft />
          </button>
          <span className="text-2xl font-semibold text-gray-800">
            Your Cart
          </span>
          <span className="text-sm text-gray-600">{totalQuantity} items</span>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 overflow-y-auto flex-1 pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div
                key={product._id}
                className="flex items-center p-4 border border-gray-200 rounded-md hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={
                      product.image &&
                      Array.isArray(product.image) &&
                      product.image[0]
                        ? urlFor(product.image[0]).url()
                        : "/placeholder.jpg"
                    }
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 ml-4">
                  <h5 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h5>
                  <p className="text-gray-600 text-sm mt-1">${product.price}</p>

                  {/* Quantity Control */}
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => toggleCartItemQty(product._id, "minus")}
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all duration-300"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="text-sm font-semibold text-gray-800">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => toggleCartItemQty(product._id, "plus")}
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 transition-all duration-300"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>

                {/* Remove Item */}
                <button
                  onClick={() => onRemove(product)}
                  className="text-red-600 hover:text-red-800 ml-4 transition-all duration-300"
                >
                  <TiDeleteOutline size={24} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Bottom - Subtotal and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Pay with Stripe
            </button>
          </div>
        )}
        <Link href="/Shippo">
          <button className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300">
            Shipment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
