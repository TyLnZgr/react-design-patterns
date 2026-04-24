import MouseTrackerWithChildren from "./Render-Prop-Pattern-Solution/withChildren";

function App() {
  return (
    <div className="flex flex-col items-center m-2">
      {/*<CarTracker />
      <BikeTracker />

            <MouseTracker
                render={(pos) => (
                    <p>
                        🚗 Car is at ({pos.x}, {pos.y})
                    </p>
                )}
            />

             <MouseTracker
                render={({x, y}) => (
                    <p>
                         🏍️ Bike is at ({x}, {y})
                    </p>
                )}
            />*/}

      <MouseTrackerWithChildren>
        {({ x, y }) => (
          <p>
            🚗 Car is at ({x}, {y})
          </p>
        )}
      </MouseTrackerWithChildren>

      <MouseTrackerWithChildren>
        {({ x, y }) => (
          <p>
            🏍️ Bike is at ({x}, {y})
          </p>
        )}
      </MouseTrackerWithChildren>
    </div>
  );
}

export default App;
