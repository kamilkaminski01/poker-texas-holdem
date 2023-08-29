const url = window.location
const socketProtocol = url.protocol === 'https:' ? 'wss:' : 'ws:'

export const API_URL =
  url.port !== '' ? `${url.protocol}//${url.hostname}:8000/api/` : `${url.origin}/api/`

export const SOCKET_URL =
  url.port !== ''
    ? `${socketProtocol}//${url.hostname}:8000/ws`
    : `${socketProtocol}//${url.hostname}/ws`

export const ENDPOINTS = {
  games: 'games/',
  players: 'players/'
}

export const WEBSOCKETS = {
  onlineGames: `${SOCKET_URL}/online-games/`
}

export const PATHS = {
  home: '/',
  about: 'about'
}
