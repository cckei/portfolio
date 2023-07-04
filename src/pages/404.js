import Link from 'next/link'

export default function Custom404() {
    return <div className="h-[100vh] flex items-center justify-center text-center">
        <div>
            <div className="mb-md">
                <h1>404 - Page Not Found</h1>
            </div>
            <Link href="/" className="inline-block py-xs px-sm bg-black text-white ">
                Back to Homepage
            </Link>
        </div>
    </div>;
    
}