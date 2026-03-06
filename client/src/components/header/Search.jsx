
import { InputBase, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)({
    backgroundColor: "#fff",
    width: "38%",
    borderRadius: "2px",
    marginLeft: "10px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    display: "flex",
})

const InputSearchBase = styled(InputBase)({
    width: "100%",
    paddingLeft: "10px",
    fontSize: "14px",
})

const SearchIconWrapper = styled(Box)({
    padding: "5px",
    display: "flex",
    fontsize: "unset",

})
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more" />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search;