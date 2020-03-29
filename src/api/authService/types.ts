export interface Credentials {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggingIn: boolean;
  loginError: any;
}
