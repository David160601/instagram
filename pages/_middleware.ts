import { NextResponse } from "next/server";
export default function middleware(req: any) {

    if (req.url.includes("/home")) {
        return NextResponse.redirect("/")
    }
    return NextResponse.next()
}