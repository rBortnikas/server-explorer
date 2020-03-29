import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ServerTable } from "./ServerTable";

describe("ServerTable", () => {
  const servers = [
    { name: "AAAAA", distance: 500 },
    { name: "CCCCC", distance: 1000 },
    { name: "BBBBB", distance: 100 }
  ];
  test("displays servers when not loading and no errors are present", () => {
    const { getByText } = render(
      <ServerTable servers={servers} isLoading={false} error={false} />
    );

    const server1 = getByText("AAAAA");
    const server2 = getByText("BBBBB");
    const server3 = getByText("CCCCC");

    expect(server1).toBeTruthy();
    expect(server2).toBeTruthy();
    expect(server3).toBeTruthy();
  });

  test("displays error when error is present", () => {
    const { getByText } = render(
      <ServerTable servers={[]} isLoading={false} error={true} />
    );

    const errorText = getByText("Cannot access the server list right now.");

    expect(errorText).toBeTruthy();
  });

  test("sorts servers by distance", () => {
    const { getAllByTestId, getByText } = render(
      <ServerTable servers={servers} isLoading={false} error={false} />
    );

    const distanceButton = getByText("Distance");

    fireEvent.click(distanceButton);

    let serverLines = getAllByTestId("server-distance");

    // first click ascending order
    expect(serverLines[0].textContent).toBe("100 km");
    expect(serverLines[1].textContent).toBe("500 km");
    expect(serverLines[2].textContent).toBe("1000 km");

    fireEvent.click(distanceButton);

    serverLines = getAllByTestId("server-distance");

    // second click descending order
    expect(serverLines[0].textContent).toBe("1000 km");
    expect(serverLines[1].textContent).toBe("500 km");
    expect(serverLines[2].textContent).toBe("100 km");
  });

  test("sorts servers by name", () => {
    const { getAllByTestId, getByText } = render(
      <ServerTable servers={servers} isLoading={false} error={false} />
    );

    const nameButton = getByText("Name");

    let serverLines = getAllByTestId("server-name");

    // initially servers are sorted by ascending name
    expect(serverLines[0].textContent).toBe("AAAAA");
    expect(serverLines[1].textContent).toBe("BBBBB");
    expect(serverLines[2].textContent).toBe("CCCCC");

    fireEvent.click(nameButton);

    serverLines = getAllByTestId("server-name");

    // first click descending order
    expect(serverLines[0].textContent).toBe("CCCCC");
    expect(serverLines[1].textContent).toBe("BBBBB");
    expect(serverLines[2].textContent).toBe("AAAAA");
  });
});
