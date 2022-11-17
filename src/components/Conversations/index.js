import { Box, Stack } from '@mui/material'
import Footer from './Footer'
import Header from './Header'
import Messages from './Messages'

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      {/* Chat Header */}
      <Header />
      {/* Msg  */}
      <Box width="100%" sx={{ flexGrow: 1, height: '100%', overflowY: 'auto' }}>
        <Messages />
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  )
}

export default Conversation
