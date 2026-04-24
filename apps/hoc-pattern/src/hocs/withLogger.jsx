import { useEffect } from "react";

const withLogger = (name) => (Component) => {
  return function WithLogger(props) {
    useEffect(() => {
      console.groupCollapsed(`[HOC] ${name} rendered`);
      console.log("props:", props);
      console.groupEnd();
      return () => {
        console.log(`[HOC] ${name} unmounted`);
      };
    }, [props]);

    return <Component {...props} />;
  };
};

export default withLogger;
