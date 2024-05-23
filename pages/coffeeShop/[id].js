import { useRouter } from "next/router"
import Link from "next/link"

const CoffeeShop = () => {
    const router = useRouter()

    return <div>
        <h1>Coffee Shop</h1>
        <Link href='/'><a>Coffee Shop</a></Link>
        <Link href='/'><a>Home</a></Link>
        </div>
}

export default CoffeeShop;