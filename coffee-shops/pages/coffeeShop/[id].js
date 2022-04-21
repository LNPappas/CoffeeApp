import { useRouter } from "next/router"

const CoffeeShop = () => {
    const router = useRouter()

    return <div>Coffee Shop {router.query.id}</div>
}

export default CoffeeShop;