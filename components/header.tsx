import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex justify-center space-x-4 mb-16 text-sm">
            <Link href="/" className="nav-link">home</Link>
            <Link href="/blog" className="nav-link">blog</Link>
        </nav>
    )
}     