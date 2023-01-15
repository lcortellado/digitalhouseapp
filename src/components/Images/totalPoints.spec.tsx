import React from "react";

import { render } from "@testing-library/react-native";
import { TotalPoints } from "../TotalPoints/index";

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

const total = 1.0;

test("check button component rendering", () => {
  render(<TotalPoints total={total} />);
});
