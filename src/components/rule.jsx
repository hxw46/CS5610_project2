import React, {useState} from "react";
import {useSelector, shallowEqual} from "react-redux";
import "./rule.css";
//import WordElement from "./WordElement";
import Button from '@mui/material/Button';
import {AppBar, Container, Link, Toolbar, Typography,Box} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
export default function Rule() {
    const navigate = useNavigate();
    const homePage = () => {
        navigate('/');}
    return (
        <div>
           <Navbar/>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="white"
                    gutterBottom
                >
                    Game Rule
                </Typography>
                <Typography variant="h5" align="center" color="white" component="p">
                    The player has to guess the Wordle in six attempts or less.<br />

                    Every word, which is entered should be in the word list.<br />

                    If the letter is correct, the color would turn green.<br />

                    If the letter is correct but placed wrong then it would turn yellow.<br />

                    If the letter is not in in the word, the color would turn gray.<br />
                </Typography>
            </Container>

            <Button onClick = {homePage} variant="contained">Back</Button>

        </div>
    );
}
