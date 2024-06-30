import { Typography, Box } from "@mui/material";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const FormattedBlogContent = (props) => {
  //     const sampleText = `
  // This is the first paragraph of the blog post.asdfasdfasdf asdfasdf\n i love you \nbhavana

  // This is the second paragraph of the blog post.

  // \`\`\`
  // const exampleFunction = () => {
  //   console.log('This is a code block.');
  // };
  // \`\`\`

  // Another paragraph after the code block.
  // `;

  const paragraphs = props.content.split(/\n\n|\r\n\r\n/).map((para, index) => {
    if (para.startsWith("```") && para.endsWith("```")) {
      return (
        <Box key={index}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {para.replace(/```/g, "")}
          </SyntaxHighlighter>
        </Box>
      );
    }
    return (
      <Typography key={index} variant="body1" paragraph>
        {para}
      </Typography>
    );
  });
  return <div>{paragraphs}</div>;
};

export default FormattedBlogContent;
