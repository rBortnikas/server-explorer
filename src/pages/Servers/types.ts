export interface Server {
  name: string;
  distance: number;
}

export interface ServersState {
  servers: Server[];
  isFetching: boolean;
  fetchError: boolean;
}
