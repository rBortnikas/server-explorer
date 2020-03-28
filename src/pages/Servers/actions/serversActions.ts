import { Server } from "../types";

export enum ActionTypes {
  SetServers = "Set Servers",
  ClearServers = "Clear Servers"
}

const setServers = (servers: Server[]) => ({
  type: ActionTypes.SetServers,
  servers
});

const clearServers = () => ({ type: ActionTypes.ClearServers });

export const Actions = {
  setServers,
  clearServers
};
