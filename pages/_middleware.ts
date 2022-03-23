import { NextResponse } from "next/server";
export default function middleware(req: any) {
    const { cookies } = req;
    if (req.url.includes("/home")) {
        if (cookies.token) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect("/");
        }
    }
    if (req.url.includes("/")) {
        if (cookies.token) {
            return NextResponse.redirect("/home")

        } else {
            return NextResponse.next();
        }
    }
}