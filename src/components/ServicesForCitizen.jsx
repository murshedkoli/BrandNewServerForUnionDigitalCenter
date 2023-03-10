import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../theme';
import Header from './Header';
import SendIcon from '@mui/icons-material/Send';


const ServicesForCitizen = ({icon, title}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    const buttonForServer = { display: 'flex', justifyContent: 'center', mb: '10px' }

    return (
        <Box
        gridColumn="span 2"
        gridRow="span 1"
        backgroundColor={colors.primary[400]}
        p="30px"
    >
        <Box sx={buttonForServer}>
            <img width='50px' src={icon} alt="" srcset="" />
        </Box>
        <Box sx={buttonForServer}><Button
            sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
            }}
            variant="outline" endIcon={<SendIcon />}>
            {title}
        </Button></Box>

    </Box>
    )
}


export default ServicesForCitizen;