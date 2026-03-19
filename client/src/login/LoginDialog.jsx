import { useState } from "react"

import { Dialog, Box, TextField, Typography, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

import { authenticateSignup } from "../service/api";

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
    height: 83%;
    width: 25%;
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

const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your orders, wishlist and recommendations"
    },
    signup: {
        view: 'signup',
        heading: "look like you are new here",
        subHeading: "Sign up with your email/mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleaccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const handleClose = () => {
        setOpen(false);
        toggleaccount(accountInitialValues.login);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
            <Component>
                <Box style={{ display: "flex", height: "100%", width: "100%" }}>
                    <Image>
                        <Typography variant="h5" >{account.heading}</Typography>
                        <Typography style={{ marginTop: "20px" }}>{account.subHeading}</Typography>

                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" label="Enter Email/Mobile Number" />
                                <TextField variant="standard" label="Enter Password" />
                                <Text>by continuing, you agree to flipkart's Terms of Use & Privacy Policy</Text>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: "center" }}>or</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <Createaccount onClick={() => toggleaccount(accountInitialValues.signup)}>New to flipkart? Create an account</Createaccount>


                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter lastname" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter username" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Mobile Number" />
                                <RequestOTP>Request OTP</RequestOTP>
                                <LoginButton onClick={() => signupUser()}>Create Account</LoginButton>


                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog >
    )
}

export default LoginDialog;