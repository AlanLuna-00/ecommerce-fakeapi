import { useDispatch } from 'react-redux'
import { filterCards } from '../redux/actions'
import Grid from '@mui/material/Grid';

const Filters = () => {
    const dispatch = useDispatch()

    const handleFilterProducts = (e) => {
      dispatch(filterCards(e.target.value))
    }
    return (
        <Grid container spacing={12}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <select onChange={handleFilterProducts}>
                        <option disabled selected value={'a'} >Filter</option>
                        <option value={'all'}>All</option>
                        <option value={'electronics'}>Electronics</option>
                        <option value={'jewelery'}>Jewelery</option>
                        <option value={`men's clothing`}>Men Clothing</option>
                        <option value={`women's clothing`}>Women Clothing</option>
                    </select>
                    </Grid>
                </Grid>
    )
}

export default Filters
