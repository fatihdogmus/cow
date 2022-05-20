/* eslint-disable */
export default {
  displayName: "front-end-users",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/front-end/users"
};
