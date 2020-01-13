import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const TextArea = () => {
  const [userInput, setUserInput] = useState(`
  # Hello
  ## Welcome to my markdown project!
  *Check my projects on GitHub!* [GitHub](https://github.com/fez994)
  ## I used react-markdown for this project!
  \`\`\`
  // this is multi-line code:

  var Markdown = require('react-markdown');

  React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
);
  \`\`\`

> Block Quotes!

Inline \`code\` has \`back-ticks around\` it.

1. Item 1
2. Item 2
3. Item 3

**Bold**

![IMG](https://png2.cleanpng.com/sh/a832209641f821e467f3d61bf01534b5/L0KzQYm3U8IxN5d4iZH0aYP2gLBuTfxwb5Cyi99qbHywhLE0jfVlcaZyReVyenXnPbTolQMubpDzjJ9waYTrhbO0VfFjOJMAStRqZnXnRYe1UMg5QWY5UKI6NUK0RYS4Ucc6P2M1TpD5bne=/kisspng-logo-small-to-medium-sized-cats-font-github-5ab0b92bafed56.0889548015215311797206.png)

      `);

  const inputChange = event => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <div className="left">
        <textarea
          name="test"
          id="editor"
          cols="30"
          rows="10"
          value={userInput}
          onChange={inputChange}
        >
          ## This is some random text
        </textarea>
      </div>
      <div className="right" id="preview">
        <ReactMarkdown source={userInput} />
      </div>
    </div>
  );
};

export default TextArea;
