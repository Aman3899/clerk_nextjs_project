import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET() {
    const { userId } = auth();
    const user = await currentUser();

    if ( !user ) {
        return NextResponse.json({ message: "User is Not Authenticated!", }, { status: 401 }
        )
    }
    return NextResponse.json({
        message: "Authenticated",
        data: { user: {userId: userId, username: user?.username} } }, { status: 200 })
}