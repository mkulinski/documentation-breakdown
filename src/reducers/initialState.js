export default {
  components: {
    link: {
      heading: 'Link Component',
      subheading: 'the link component is an elusive beast. You should only use it if you would like to go somewhere',
      example: [
        { name: 'url', type: 'string', desc: 'the url link to' },
        { name: 'children', type: 'string', desc: 'the url link to' },
      ],
    },
    list: {
      heading: 'List Component',
      subheading: 'this component does lots of really cool things with lists. You should use it.',
      example: [
        { name: 'heading', type: 'string', desc: 'the heading for the list' },
        { name: 'children', type: 'string or React Node', desc: 'the content to display inside list' },
      ],
    },
  },
};
