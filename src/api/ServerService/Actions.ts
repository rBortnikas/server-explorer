import { Server } from "./types";

export enum ActionTypes {
  FetchServers = "Fetch servers",
  FetchServersSuccess = "Fetch servers success",
  FetchServersFail = "Fetch servers fail",
  ClearServers = "Clear servers"
}

const fetchServers = () => ({
  type: ActionTypes.FetchServers
});

const fetchServersSuccess = (servers: Server[]) => ({
  type: ActionTypes.FetchServersSuccess,
  servers
});

const fetchServersFail = () => ({
  type: ActionTypes.FetchServersFail
});

const clearServers = () => ({ type: ActionTypes.ClearServers });

export const Actions = {
  fetchServers,
  fetchServersSuccess,
  fetchServersFail,
  clearServers
};
