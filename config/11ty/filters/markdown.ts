import markdownit from 'markdown-it'

export default (val: string): string => markdownit({ html: true }).render(val)
