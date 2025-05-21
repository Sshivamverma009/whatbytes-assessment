export default function Footer() {
    return (
        <div className="flex flex-col items-center space-y-2 sm:justify-between sm:align-baseline sm:flex-row sm:space-y-0 p-9 text-white" style={{ backgroundColor: 'var(--color1)' }}>
            <div>
                <h1 className="font-semibold  mb-3">Filter</h1>
                <div className="text-sm space-y-3">
                    <p>All fyyijiok</p>
                    <p>C 2024 America</p>
                </div>
            </div>
            <div >
                <h1 className="font-semibold mb-3">About Us</h1>
                <div className="text-sm space-y-3">
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h1 className="font-semibold">Follow Us</h1>
                <div>
                    {/* <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#74C0FC",}} /> */}
                </div>
            </div>
        </div>
    )
}