import React from "react";

import { render } from "@testing-library/react-native";
import { Details } from "../../screens/Details/index";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useIsFocused: jest.fn(),
    useRoute: () => ({
      params: {
        product: {},
      },
    }),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      navigation: jest.fn(),
    }),
  };
});

test("check details screen rendering", () => {
  render(<Details />);
});
