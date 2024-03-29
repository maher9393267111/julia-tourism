import { connectDB } from "@/config/DbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/UserModel";
connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    // check if user is exists
    const user = await User.findOne({ email: reqBody.email });
    if (!user) {
      throw new Error("User not found");
    }

    // check if user is active
    if (!user.isActive) {
      throw new Error("User is inactive , please contact admin");
    }

    // check if password is correct
    const validPassword = await bcrypt.compare(reqBody.password, user.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const response = NextResponse.json({
      message: "Login successful",
    });

    // create token
    const token = jwt.sign({ _id: user._id ,isAdmin:user.isAdmin }, process.env.jwt_secret || "", {
      expiresIn: "60d",
    });

    // set cookie
    response.cookies.set("token", token, {
      path: "/",
      httpOnly: true,
    });

    return response;
  } catch (error : any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
