import markdownit from 'markdown-it'

export default (val) => markdownit({ html: true }).render(val)