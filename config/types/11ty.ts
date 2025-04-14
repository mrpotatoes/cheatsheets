import MarkdownIt from 'markdown-it'
import { Breadcrumb, Meta } from '@mytypes/categories'

export type Filtered = (tag: string) => any[]

type GenericCallback = (tag: string) => void
type Transform = (content: string) => string
type Shortcode = (cats: Meta) => string

// TODO: Make generic
export type Collection = (conf: Config) => any

export interface Config {
  getFilteredByTag: (tag: string) => any[]
  addCollection: (tag: string, fn: Collection) => void
  addDataExtension: (exts: string, fn: GenericCallback) => void
  addGlobalData: (exts: string, data: any) => void
  addPassthroughCopy: (t: any) => void
  addFilter: (tag: string, fn: any) => void
  addPlugin: (fn: GenericCallback) => void

  // TODO: Make generic. Every use of this has different properties.
  addTemplate: (tpl: string, content: string, config: TemplateConfig) => void

  // TODO: Make generic
  setLibrary: (tag: string, fn: GenericCallback | MarkdownIt) => void

  // TODO: Make generic
  addShortcode: (tag: string, fn: Shortcode) => void

  // TODO: Make generic
  addTransform: (tag: string, fn: Transform) => void

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
