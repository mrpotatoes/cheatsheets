import MarkdownIt from 'markdown-it'
import { Breadcrumb } from '@mytypes/categories'

export type Filtered = (tag: string) => any[]

type thing = (tag: string) => void
type thing2 = (a: Collection, tag: string) => string

// TODO: Make generic
export type Collection = (conf: Config) => any

export interface Config {
  getFilteredByTag: (tag: string) => any[]
  addCollection: (tag: string, fn: Collection) => void
  addDataExtension: (exts: string, fn: thing) => void
  addGlobalData: (exts: string, data: any) => void
  addPassthroughCopy: (t: any) => void
  addFilter: (tag: string, fn: any) => void
  addPlugin: (fn: thing) => void

  // TODO: Make generic. Every use of this has different properties.
  addTemplate: (tpl: string, content: string, config: TemplateConfig) => void

  // TODO: Make generic
  setLibrary: (tag: string, fn: thing | MarkdownIt) => void

  // TODO: Make generic
  addShortcode: (tag: string, fn: thing2) => void

  // TODO: Make generic
  addTransform: (tag: string, fn: thing2) => void

  on: (tag: string, fn: () => void) => void
}

export interface TemplateConfig {
  layout: string
  title: string
  desc?: string
  permalink: string
  crumbs: Breadcrumb[]

  catTree?: any
  catTreeCount?: boolean | number
  category?: string
  group?: string
  groupName?: string
}

export interface CollectionApi {

}

export interface EleventyPage {
  url: string
  filePathStem: string
  fileSlug: string

  page: {
    fileSlug: string
    url: string
    filePathStem: string
  }
  data: {
    title: string
    group: string
  }
}
