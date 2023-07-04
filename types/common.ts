import type { StyleValue } from 'vue'

export interface ResumeTheme {
  /**
   * theme of resume
   * @default 'var(--van-gray-8)'
   */
  color?: string
}

export interface ResumePage {
  /**
   * Your name
   */
  fullname: string
  /**
   * Your resume title
   */
  title: string
  /**
   * Your resume content
   */
  columns: ResumeColumn[]
  /**
   * theme of resume
   */
  theme?: ResumeTheme
  /**
   * column size
   * @default 12
   */
  columnSize?: number
  /**
   * main icon
   */
  icon?: string
  /**
   * description of resume
   */
  description?: string
  /**
   * page url
   */
  url?: string
  /**
   * style of resume container
   */
  pageStyle?: StyleValue
}

export interface ResumeColumn<T extends ResumeItem<P> = any, P = unknown> {
  /**
   * column items
   */
  items: T[]
  /**
   * column name
   */
  name?: string
  /**
   * size of column
   * @default 6
   */
  columnSize?: number
  /**
   * style of column container
   */
  columnStyle?: StyleValue
}

export interface ResumeItem<T = unknown> {
  content: T
  type: string
}

export interface EducationItem {
  school: string
  fromTime: string | Date
  toTime: string | Date
  major: string
  degree: string
  description?: string
  icon?: string
}

export interface AwardItem {
  name: string
  time: string | Date
  description?: string
  icon?: string
}

export interface WorkItem {
  company: string
  fromTime: string | Date
  toTime: string | Date
  position: string
  description?: string
  icon?: string
}

export interface ProjectItem {
  title: string
  content: string
  fromTime: string | Date
  toTime: string | Date
  postion?: string
  department?: string
  isMarkdown?: boolean
  description?: string
  icon?: string
  url?: string
  tags?: string[]
}
