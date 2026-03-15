import { useState } from "react"

import { Dialog, Box, TextField, Typography, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    & > p, & > h5 {
        color: #ffffff;
        font-weight: 600;
    }
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height: 100%;
    width: 40%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #ffffff;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    box-shadow: none;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const Createaccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
`;



const LoginDialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
            <Component>
                <Box style={{ display: "flex", height: "100%", width: "100%" }}>
                    <Image>
                        <Typography variant="h5" >Login</Typography>
                        <Typography style={{ marginTop: "20px" }}>Get access to your orders, wishlist and recommendations</Typography>

                    </Image>
                    <Wrapper>
                        <TextField variant="standard" label="Enter Email/Mobile Number" />
                        <TextField variant="standard" label="Enter Password" />
                        <Text>by continuing, you agree to flipkart's Terms of Use & Privacy Policy</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{ textAlign: "center" }}>or</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <Createaccount>New to flipkart? Create an account</Createaccount>


                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;