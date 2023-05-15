export interface CreateUserDto {
  username: string | null;
  password: string | null;
  notes: string | null;
  startDate: string | null;
  endDate: string | null;
}

export interface UserDto {
  id: number | null;
  username: string | null;
}
