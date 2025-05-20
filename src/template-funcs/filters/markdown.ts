import markdownit from 'markdown-it'

/**
 * Allow for Markdown rendering within templates
 */
export default (val: string): string => markdownit({ html: true }).render(val)
