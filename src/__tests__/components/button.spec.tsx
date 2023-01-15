import React from "react";

import { render } from "@testing-library/react-native";
import { Button } from "../../components/Button/index";

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

const title = "test title";

test("check button component rendering", () => {
  render(<Button title={title} />);
});
