import React from "react";
import DataFetcher from "./DataFetcher";

const AppComponent = () => {
  return (
    <div>
      <DataFetcher url={"https://swapi.dev/api/people/10000/"}>
        {({ data, loading, error }) => {
          return (
            <div>
              {loading ? (
                <h1>Loading</h1>
              ) : <p>{JSON.stringify(error)}</p> ? (
                <p>{JSON.stringify(data)}</p>
              ) : null}
            </div>
          );
        }}
      </DataFetcher>
    </div>
  );
};

export default AppComponent;
