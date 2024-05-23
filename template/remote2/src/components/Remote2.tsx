import React from "react";
import { notifications } from '../../../modules/notifications/notifications'

const notify = (msg: string) => {
  notifications.push({ message: msg })
}

/** Self-container component that performs (simulated) data-fetching */
const Remote2 = () => {
  const [data, setData] = React.useState<null | {
    weather: string;
    temperature: number;
  }>();
  React.useEffect(() => {
    new Promise((r) => setTimeout(r, 3000)).then(() =>
      setData({ weather: "sunny ☀️", temperature: 28 })
    );
  }, []);

  React.useEffect(() => {
    const off = notifications.on('add', (data: unknown) => {
      console.log('Remote2 received a notification', data)
    })

    return off
  }, [])

  

  return (
    <>
    <h1>Remote 2</h1>
    <button
      className='p-1 my-2 text-white bg-blue-700'
      onClick={() => notify('Remote2 made this call to the host')}
    >
      Call a method to the parent
    </button>
    <br />
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pt-10 pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {data?.weather || "loading weather data"}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {data?.temperature && `${data.temperature} degrees`}
        </span>
      </div>
    </div>
    </>
  );
};

export default Remote2;
