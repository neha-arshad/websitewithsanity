

// import { NextRequest, NextResponse } from "next/server";
// import { connect } from "@/dbConnection/dbConnection";
// import User from "@/models/userModels";
// import { getDataFromToken } from "@/helpers/getDataFromToken";

// connect();

// export async function GET(request: NextRequest) {
//   try {
//     const userId = await getDataFromToken(request);
//     const user = await User.findOne({ _id: userId }).select("-password");
//     return NextResponse.json({
//       mesaaage: "User found",
//       data: user,
//     });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }
