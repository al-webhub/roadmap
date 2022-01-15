import { useEffect, useState } from "react";

const Delay = () => {
  const [dataPromise, setDataPromise] = useState();
  useEffect(() => {
    setDataPromise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      }).then(() => setDataPromise())
    );
  }, []);

  if (dataPromise) {
    throw dataPromise;
  }

  return <></>;
};

export default Delay;
