// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { Button } from "@/components/ui/button";

// export default function SignupPage() {
//   const router = useRouter();
//   const [user, setUser] = useState({ email: "", password: "", username: "" });
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const onSignup = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/signup", user);
//       console.log("Signup success", response.data);
//       toast.success("Signup successful! Redirecting...");
//       router.push("/login");
//     } catch (error: any) {
//       console.error("Signup failed", error.message);
//       toast.error(error.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setButtonDisabled(!(user.email && user.password && user.username));
//   }, [user]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
//           {loading ? "Processing..." : "Create Your Account"}
//         </h1>
//         <hr className="mb-4" />

//         {/* Username Field */}
//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//             placeholder="Enter username"
//             className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#272343] focus:outline-none text-gray-800"
//           />
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             placeholder="Enter email"
//             className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#272343] focus:outline-none text-gray-800"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             placeholder="Enter password"
//             className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#272343] focus:outline-none text-gray-800"
//           />
//         </div>

//         {/* Signup Button */}
//         <Button
//           onClick={onSignup}
//           disabled={buttonDisabled || loading}
//           className={`w-full p-3 rounded-lg text-white font-semibold transition-all ${
//             buttonDisabled
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-[#272343]"
//           } ${loading && "opacity-70 cursor-not-allowed"}`}
//         >
//           {loading ? "Signing up..." : "Signup"}
//         </Button>

//         {/* Login Link */}
//         <p className="text-center mt-4 text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-500 hover:underline">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      console.log("🔄 Sending Signup Request:", user);
      const response = await axios.post("/api/users/signup", user);
      console.log("✅ Signup success:", response.data);
      toast.success("Signup successful! Redirecting...");
      router.push("/login");
    } catch (error: any) {
      console.error("❌ Signup failed:", error.response?.data || error);
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          {loading ? "Processing..." : "Create Your Account"}
        </h1>
        <hr className="mb-4" />

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter username"
            className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#272343] focus:outline-none text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email"
            className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#272343] focus:outline-none text-gray-800"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
            className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#272343] focus:outline-none text-gray-800"
          />
        </div>

        <Button
          onClick={onSignup}
          disabled={buttonDisabled || loading}
          className={`w-full p-3 rounded-lg text-white font-semibold transition-all ${
            buttonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-[#272343]"
          } ${loading && "opacity-70 cursor-not-allowed"}`}
        >
          {loading ? "Signing up..." : "Signup"}
        </Button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
