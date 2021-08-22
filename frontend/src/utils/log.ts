const log = {
  info: (message: string) => {
    console.info(message);
  },
  error: (message: string, error?: Error | string) => {
    console.error(message, error);
  },
};

export default log;
