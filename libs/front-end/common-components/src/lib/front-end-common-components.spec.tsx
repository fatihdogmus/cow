import { render } from "@testing-library/react";

import FrontEndCommonComponents from "./front-end-common-components";

describe("FrontEndCommonComponents", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FrontEndCommonComponents />);
    expect(baseElement).toBeTruthy();
  });
});
