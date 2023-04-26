import { useDispatch } from 'react-redux'
import { filterCards, orderByPrice } from '../redux/actions'

const Filters = () => {
  const dispatch = useDispatch()

  const handleFilterProducts = (e) => {
    dispatch(filterCards(e.target.value))
  }

  const handleOrderProducts = (e) => {
    dispatch(orderByPrice(e.target.value))
  }

  return (
    <div className="flex items-center justify-center">
      <select
        className="w-full max-w-xs p-2 text-gray-700 bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
        onChange={handleFilterProducts}
      >
        <option disabled selected value={''}>
          Filter by category...
        </option>
        <option value={'all'}>All</option>
        <option value={'electronics'}>Electronics</option>
        <option value={'jewelery'}>Jewelery</option>
        <option value={`men's clothing`}>Men Clothing</option>
        <option value={`women's clothing`}>Women Clothing</option>
      </select>

      <select
        className="w-full max-w-xs p-2 text-gray-700 bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline ml-4"
        onChange={handleOrderProducts}
      >
        <option disabled selected value={''}>
          Filter by price...
        </option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  )
}

export default Filters
