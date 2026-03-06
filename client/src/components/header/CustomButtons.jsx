
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';


const Wrrapper = styled(Box)({
    display: "flex",
    margin: "0 3% 0 auto",
    '& > button, & > p, & > div': {
        marginRight: "40px",
        fontsize: "16px",
        alignItems: "center",
    }
})


const Container = styled(Box)({
    display: "flex",
})

const Loginbutton = styled(Button)({
    background: "#fff",
    color: "#2874f0",
    textTransform: "none",
    padding: "5px 40px",
    fontWeight: 600,
    borderRadius: "2px",
    height: "32px",
    boxShadow: "none",
})


const CustomButtons = () => {
    return (
        <Wrrapper>
            <Loginbutton variant="contained">Login</Loginbutton>
            <Typography style={{ marginTop: "3px", width: "135px" }}>Become a Seller</Typography>
            <Typography style={{ marginTop: "3px" }}>More</Typography>
            <Container >
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
        </Wrrapper>
    )
}

export default CustomButtons;