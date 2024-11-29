export interface UserRequestDto {
  firstname: string
  lastname: string
  email: string
  password: string
  phone: string
}

export interface UserResponseDto {
  id: string
  firstname: string
  lastname: string
  email: string
  phone: string
}

export interface UserInitialState {
  userObj: UserResponseDto | undefined
  isLoading: boolean
  error: string | undefined
}