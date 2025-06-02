import Link from "next/link"

const Menu = [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        id: 2,
        name: "Travel Book",
        path: "/"
    }
]

const DataCard = () => {
    return (
        <div className="grid grid-cols-4 gap-2 my-20">
            {
                Menu.map((item) => {
                    return (
                        <Link href={item.path} key={item.id}>
                            <div className="h-40 p-8 border rounded-md flex items-center justify-center">
                                <h1 className="font-bold text-2xl">{item.name}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default DataCard