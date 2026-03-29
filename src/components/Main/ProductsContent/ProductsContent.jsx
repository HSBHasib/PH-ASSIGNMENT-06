import ProductsCards from '../../ProductsCards/ProductsCards'

const ProductsContent = ({data, selectProduct, setSelectProduct}) => {
    
    return (
    <div className='grid md:grid-cols-3 gap-6 px-20'>
      {
        data.map(productData => <ProductsCards key={productData.id} productData={productData} selectProduct={selectProduct} setSelectProduct={setSelectProduct}/>)
      }
    </div>
  )
}

export default ProductsContent
