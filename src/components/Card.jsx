import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { useCartContext } from '../context/CartContext.jsx';





// eslint-disable-next-line react/prop-types
export default function ImgMediaCard({ title, price, image, description, id, item }) {

    const { addToCart } = useCartContext();

    const handleAddToCart = item => {
        addToCart(item); 
    }
    
    return (
        <Card sx={{ width: '100%', height: '100%', position: 'relative' }} >
            <CardMedia
                component="img"
                alt={title}
                height="300"
                image={image}
                title={title}
                style={{ objectFit: 'contain' }}
            />
            <CardContent style={{ marginBottom: '15px' }}>
                <Typography gutterBottom variant="h5" component="div" height='100%'>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    ${price}
                </Typography>
            </CardContent>
            <CardActions style={{ position: 'absolute', bottom: '5px' }}>
                <Link href={`/productos/${id}`} underline="none">
                    <Button size="small">Details</Button>
                </Link>
                <Button size="small" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}
