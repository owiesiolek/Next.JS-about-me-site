// we can use config - environment variables to switch database between development and production ones

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "temposktemp",
        mongodb_password: "095NWOUkxbGsmInV",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "temposktemp",
      mongodb_password: "095NWOUkxbGsmInV",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site-prod",
    },
  };
};
