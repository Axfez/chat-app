import { Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import Conversation from '../../components/Conversations'
import Chats from './Chats'

const GeneralApp = () => {
  const theme = useTheme()
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Chats />
      <Box
        sx={{
          heigh: '100%',
          width: 'calc(100vw - 420px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  )
}

export default GeneralApp
