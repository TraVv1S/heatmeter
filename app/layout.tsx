import Link from "next/link";
import Image from "next/image"
import "../styles/globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const header = (
        <header>
            <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
                <Image alt="logo" src="/logo.png" width={40} height={40} className="mx-auto" />
                <Link href="/"><h1 className="text-3xl text-white font-bold">Blog</h1></Link>
                <p className="text-slate-300">Welcome to blog!</p>
            </div>
        </header>
    )

    const footer = (
        <footer>
            <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
                <br />
                <h3>Developed by Dan</h3>
            </div>
        </footer>
    )

    return (
        <html>
            <head />
            <body>
                <div className="mx-auto max-w-2xl px-6">
                    {header}
                    {children}
                    {footer}
                </div>
            </body>
        </html>
    )
}