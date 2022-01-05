import React from "react";
import BoxesContainer from "../../components/Boxes/BoxesContainer";
import { Container } from "@mui/material";

const Main = () => {
    return (
        <Container maxWidth="lg" sx={{ width: '100%' }}>
            <BoxesContainer />
        </Container>
    )
}

export default Main