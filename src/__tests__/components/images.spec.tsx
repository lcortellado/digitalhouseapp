import React from "react";

import { render } from "@testing-library/react-native";
import { Images } from "../../components/Images/index";

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

const urlImage = "https://loremflickr.com/640/480/transport";

test("check image component rendering", () => {
  render(<Images image={urlImage} />);
});
