import { Text } from "./index";
import { custonRender } from "@seixas/test-commons/react-testing-library";

const render = custonRender();

describe("<Text />", () => {
  it("render h1 tag", () => {
    const { container } = render(<Text tag="h1">Sample text</Text>);
    expect(container).toMatchSnapshot();
  });
});
