"use client"
import { useSelector, useDispatch } from "react-redux"
import { setCategory, setPrice } from "@/lib/features/storeSlice"
import { RootState } from "@/lib/store";

export default function Sidebar() {
    const dispatch = useDispatch();
    const price = useSelector((state : RootState) => state.store.price);
    const category = useSelector((state : RootState) => state.store.category)
    return (
        <div className="space-y-7 p-7">
            <aside className="text-white p-4 space-y-3 rounded-lg" style={{ background: 'var(--color1)' }}>
                <div>
                    <h1 className="mb-1">Category</h1>
                    <div className="">
                        {["All", "Electronics", "Clothing", "Home"].map((item) => (
                            <div key={item} className="space-x-2">
                                <input type="radio" id={item} name="category" checked={item == category} onChange={() => dispatch(setCategory(item))} />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1>Price : {price}</h1>
                    <input type="range" min={0} max={1000} value={price} onChange={(e) => dispatch(setPrice(Number(e.target.value)))} className="bg-gray-100" />
                </div>

            </aside>
            {/* <aside className="p-4 space-y-3 rounded-lg bg-white">
                <div>
                    <h1 className="mb-1">Category</h1>
                    <div className="">
                        {["All", "Electronics", "Clothing", "Home"].map((item) => (
                            <div key={item} className="space-x-2">
                                <input type="radio" id={item} name="category" />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1>Price</h1>
                    <input type="number" min='0' className="border w-full px-1.5 border-gray-200 rounded-sm" />
                </div>

            </aside> */}
        </div>
    )
}