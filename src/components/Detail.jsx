import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CardActions } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useFetchDetail } from '../hooks/useFetchDetail';


export const Detail = () => {
    const { id } = useParams();
    const { cardDetail, loading, error } = useFetchDetail(id);
    return (
        <>
            <h1>Detail</h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <Card sx={{width: '100%', height: '100%', position:'relative' }} >
            <CardMedia
                component="img"
                alt={cardDetail.title}
                height="300"
                image={cardDetail.image}
                title={cardDetail.title}
                style={{objectFit: 'contain'}}
            />
            <CardContent style={{marginBottom:'15px'}}>
                <Typography gutterBottom variant="h5" component="div" height='100%'>
                    {cardDetail.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {cardDetail.description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    ${cardDetail.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/productos/`} underline="none">
                    <Button size="small">Go Back</Button>
                </Link>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
            )}
        </>
    );
};

