import ProductTable from "@/components/ProductTable"

const ProductPage = () => {
    return (
      <div className="bg-slate-50 min-h-screen">
          <div className="max-w-screen-md mx-auto py-10">
              <h1 className="text-2xl font-bold">User List</h1>
              <ProductTable/>
          </div>
      </div>
    )
  }
  
  export default ProductPage