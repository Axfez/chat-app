import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import {
  Timeline,
  TextMsg,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from './MsgTypes'

const Messages = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map(el => {
          switch (el.type) {
            case 'divider':
              // Timeline
              return <Timeline el={el} />

            case 'msg':
              switch (el.subtype) {
                case 'img':
                  // Image message
                  return <MediaMsg el={el} />

                case 'link':
                  // Link message
                  return <LinkMsg el={el} />

                case 'doc':
                  // Document message
                  return <DocMsg el={el} />

                case 'reply':
                  // Reply message
                  return <ReplyMsg el={el} />

                default:
                  // text message
                  return <TextMsg el={el} />
              }
            default:
              return <></>
          }
        })}
      </Stack>
    </Box>
  )
}

export default Messages
