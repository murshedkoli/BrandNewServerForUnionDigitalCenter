import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../theme';
import ManIcon from '@mui/icons-material/Man';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
const ProfileText = ({ citizen }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const textBoxStyles = {
        display: 'flex',
        p: "0 0 0 3px",
        borderRadius: "4px",
        alignItems: 'center',
        color: `${colors.grey[100]}`,
        // backgroundColor: `${colors.greenAccent[500]}`
        border: `1px solid ${colors.greenAccent[500]}`

    }



    return (
        <div>


            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <ManIcon color={colors.greenAccent[400]} /> পিতা
                    </Typography>
                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.father}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}

            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <Woman2OutlinedIcon /> মাতা
                    </Typography>


                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >

                    <Typography variant='h3' p='5px'>
                        {citizen.mother}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}

            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >

                    <Typography variant='h3' p='5px'>
                        <PhonelinkRingIcon /> মোবাইল
                    </Typography>

                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.phone}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}


            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <BadgeOutlinedIcon /> এনআইডি
                    </Typography>

                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.nid}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}

            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <CalendarMonthOutlinedIcon /> জন্ম তারিখ
                    </Typography>

                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.dob}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}

            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <HouseOutlinedIcon /> হোল্ডিং
                    </Typography>

                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.holdingNo}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}

            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <HolidayVillageOutlinedIcon /> গ্রাম
                    </Typography>

                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.village}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}

            <Box

                display="flex"
                alignItems="center"
                p="2px 0 0 0"
            >
                <Box
                    sx={textBoxStyles}
                    width='35%'
                    mr='1%'
                >
                    <Typography variant='h3' p='5px'>
                        <PaymentIcon /> টেক্স
                    </Typography>

                </Box>

                <Box
                    sx={textBoxStyles}
                    width='64%'
                >
                    <Typography variant='h3' p='5px'>
                        {citizen.paidTax}
                    </Typography>

                </Box>
            </Box>

            {/* Another Part */}



        </div>
    )
}
export default ProfileText