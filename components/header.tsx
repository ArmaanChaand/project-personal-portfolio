import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-5 border-b">
            <Link href="/" className="text-xl font-medium">Armaan Chaand</Link>
            <nav>
                <ul>
                    <li>
                        <Link href={"#projects"}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}