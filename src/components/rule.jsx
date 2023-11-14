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
                    color="black"
                    gutterBottom
                >
                    Game Rule
                </Typography>
                <Typography variant="h5" align="left" color="text.primary" component="p">
                    <p>The player has to guess the Wordle in six attempts or less.</p>
                    <p>Every word, which is entered should be in the word list.</p>
                    <p>If the letter is correct, the color would turn green.</p>
                    <p>If the letter is correct but placed wrong then it would turn yellow.</p>
                    <p>If the letter is not in the word, the color would turn gray.</p>
                </Typography>
            </Container>

            <Button onClick = {homePage} variant="contained">Back</Button>

        </div>
    );
}
