import {connect} from "@/dbConnection/dbConnection";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mail";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// import { connect } from "@/dbConnection/dbConnection";
// import { NextRequest, NextResponse } from "next/server";
// import User from "@/models/userModels";
// import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mail";

// export async function POST(request: NextRequest) {
//   try {
//     console.log("🔹 Connecting to Database...");
//     await connect(); // Ensure DB is connected
//     console.log("✅ Connected to Database");

//     const reqBody = await request.json();
//     console.log("📩 Request Body:", reqBody);

//     const { username, email, password } = reqBody;

//     if (!username || !email || !password) {
//       console.log("❌ Missing required fields");
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (user) {
//       console.log("❌ User already exists");
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash password
//     console.log("🔹 Hashing password...");
//     const salt = await bcryptjs.genSalt(10);
//     const hashedPassword = await bcryptjs.hash(password, salt);

//     // Create new user
//     console.log("🔹 Creating new user...");
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     console.log("✅ User created:", savedUser);

//     // Send verification email
//     console.log("📨 Sending verification email...");
//     await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
//     console.log("✅ Email sent");

//     return NextResponse.json({
//       message: "User created successfully",
//       success: true,
//     });
//   } catch (error: any) {
//     console.error("❌ Error:", error.message);
//     return NextResponse.json(
//       { error: error.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }


