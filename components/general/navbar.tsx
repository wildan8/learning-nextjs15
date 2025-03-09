import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    
    return (
        <nav
            className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-white/70 py-2 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <Link href= "/"> 
                            <h1 className="text-3xl font-semibold">
                                Blog <span className="text-blue-500"> Jerry </span>
                            </h1>
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <a aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="/">Home</a>
                        <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="/dashboard">The Goods</a>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <p>Hi! {user.given_name}</p>
                                <LogoutLink className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Logout</LogoutLink>
                            </div>
                        ) : (
                            <div>
                            <LoginLink className="hidden items-center justify-center rounded-xl bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex">
                                Login
                            </LoginLink>
                            <RegisterLink className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                Got Relate!
                            </RegisterLink >
                            </div>

                        )}
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}