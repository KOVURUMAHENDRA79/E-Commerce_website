import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import Search from "./Search"

import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)({
    backgroundColor: "#2874f0",
    height: "55px",

});

const Component = styled(Box)({
    marginLeft: "12%",
    lineHeight: 0,
    display: "flex",
    flexDirection: "column",
});
const SubHeading = styled(Typography)({
    fontSize: 10,
    fontStyle: 'italic',
    color: '#fff',
})
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,

})

const CustomButtonWrapper = styled(Box)({
    margin: "0 5% 0 auto",
})
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const suburl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (

        <StyledHeader>
            <Toolbar style={{ display: 'flex', alignItems: 'center', minHeight: '55px' }}>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={suburl} alt="sublogo" />


                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>

            </Toolbar>
        </StyledHeader >
    )
}

export default Header;