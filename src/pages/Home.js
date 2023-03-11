import Header from "../components/common/Header";
import { categoryMovies } from "../services/api";
import { useEffect,useState } from "react";
import { Box,styled } from "@mui/system";
import Banner from "../components/common/Banner";
import { NOWPLAYING_API_URL } from "../constants/constant";
import UpNext from "../components/common/UpNext";
import  Slide  from "../components/common/Slide";

const Wrapper = styled(Box)`
    display:flex;
    padding:20px 0;
`;
const Component = styled(Box)`
    padding:0 155px;
`

const Home = () =>{
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const getData = async() =>{
                let response = await categoryMovies(NOWPLAYING_API_URL);
                setMovies(response.results)
        }
        getData();
    },[])

    return(
      <>
        <Header/>
        <Component>
        <Wrapper>
            <Banner movies={movies}/>
            <UpNext movies={movies}/>
        </Wrapper>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        </Component>
      </>
    )
}

export default Home;