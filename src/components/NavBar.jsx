import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Filters from './Filters';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant="h6">Mi Tienda</Typography>
                <div>
                    <Button color="inherit" href="/">
                        Inicio
                    </Button>
                    <Button color="inherit" href="/productos">
                        Productos
                    </Button>
                    <Button color="inherit" href="/carrito">
                        🛒
                    </Button>
                    <Button color="inherit">
                        <div style={{overflow: 'hidden'}}>
                            <Filters />
                        </div>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
