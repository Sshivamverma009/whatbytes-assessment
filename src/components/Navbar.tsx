import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-3.5 text-white" style={{ backgroundColor: 'var(--color1)' }}>
            <div className="text-2xl font-bold">Logo</div>
            <div className="flex space-x-3">
                <div className="border border-white flex items-center rounded-lg contain-content">
                    <div className="w-12 self-center pl-3.5">
                        <Search size={16} />
                    </div>
                    <input type="text" placeholder="Search for products..." className="w-80 text-white py-1.5 bg-transparent outline-none" />
                </div>
                <div>
                    <Link href={'/cart'} className="flex bg-sky-950 px-3 py-1.5 rounded-md gap-2" >
                        <div className="self-center">
                            <ShoppingCart size={16} />
                        </div>
                        Cart
                    </Link>
                </div>
            </div>
        </nav>
    )
}
