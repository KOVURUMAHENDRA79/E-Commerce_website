
import { Fragment } from "react";
//components 
import Navbar from "./Navbar";
import Banner from "./Banner";
import { styled, Box } from "@mui/material";

const Component = styled(Box)`
    padding: 10px 10px;
    background-color: #f1f3f6;
`

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Component>
                <Banner />
            </Component>
        </Fragment>
    )
}

export default Home;