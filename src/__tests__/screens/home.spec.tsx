import React from "react";

import { render } from "@testing-library/react-native";
import { Home } from "../../screens/Home";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useIsFocused: jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      navigation: jest.fn(),
    }),
  };
});

test("check home screen rendering", () => {
  render(<Home />);
});
