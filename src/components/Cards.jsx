import Card from './Card.jsx'
import Grid from '@mui/material/Grid';
import { useFetchItems } from '../hooks/useFetchItems.js';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    spinner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }));

const Cards = () => {

    const classes = useStyles();
    const { items, loading, error } = useFetchItems();

    

    return (
        <>
            <h1 style={{ margin: '0 0 30px 0' }}>Products</h1>
            <Grid container spacing={12}>
                {loading ?
                    <div className={classes.spinner}>
                        <CircularProgress />
                    </div>
                    : error ? <h1>{error}</h1>
                        : items.map((item) => (
                            <Grid item xs={12} dm={8} lg={4} key={item.id}>
                                <Card
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    description={item.description}
                                    id={item.id}
                                    item={item}
                                />
                            </Grid>
                        ))}
            </Grid>
        </>
    )
}

export default Cards
