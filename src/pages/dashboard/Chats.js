import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import { ChatList } from '../../data'
import { SimpleBarStyle } from '../../components/Scrollbar'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme()
  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#FFF'
            : theme.palette.background.default,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  )
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifycontent: 'center',
}))

const StyledInpputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    //   vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}))

const Chats = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8FAFF'
            : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0, 0.2)',
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInpputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          sx={{
            direction: 'column',
            height: '100%',
            overflow: 'auto',
            spacing: '2cm',
          }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                  Pinned
                </Typography>
                {ChatList.filter(el => el.pinned).map(el => {
                  return <ChatElement {...el} key={el.id} />
                })}
              </Stack>

              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                  All Chats
                </Typography>
                {ChatList.filter(el => !el.pinned).map(el => {
                  return <ChatElement {...el} key={el.id} />
                })}
              </Stack>
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Chats
