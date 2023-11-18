import { Stack, Typography } from '@mui/material'
import React from 'react'

const Error = () => {
    return (
        <Stack alignItems={'center'} p={5}  >
            <Typography variant='h2' >Invalid URL</Typography>
        </Stack>
    )
}

export default Error