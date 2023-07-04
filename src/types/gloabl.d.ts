interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
}

export interface AdminInfo {
  id: number
  username: string
  nickname: string
  avatar: string
  token: string
  refreshToken: string
}