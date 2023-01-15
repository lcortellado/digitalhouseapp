import React from "react";

import { render } from "@testing-library/react-native";
import { CardProduct } from "../../components/CardProduct/index";

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
interface Props {
  description: string;
  urlImage: string;
  date: string;
  points: string | undefined;
  is_redemption: boolean;
  handleNavigate: () => void;
}

test("check carProduct component rendering", () => {
  render(
    <CardProduct
      description="test"
      urlImage="https://loremflickr.com/640/480/transport"
      date="date"
      points="3444"
      is_redemption={true}
      handleNavigate={() => {}}
    />
  );
});
