import React, { PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/styles';


const CodeExample = ({ codeString }) =>
  <SyntaxHighlighter language="javascript" style={hopscotch}>{codeString}</SyntaxHighlighter>;

CodeExample.propTypes = {
  codeString: PropTypes.string,
};

export default CodeExample;
