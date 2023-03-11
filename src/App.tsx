import HoverWrapper from "./HoverWrapper";
import "./App.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `const example = (list) => {
  const a = squareList(list);
  const b = multiplyByTen(a);
  const c = subtractThreeFromEach(b);
  const d = divideByTwo(c);
  addFiveToEach(d)
}`;

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <HoverWrapper workspace="highlight">
          <SyntaxHighlighter language="typescript" style={atomDark}>
            {code}
          </SyntaxHighlighter>
        </HoverWrapper>
      </div>
    </div>
  );
};

export default App;
