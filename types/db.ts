enum ProgramLanguage {
  Cpp,
  Java,
  Python,
  Python3,
  C,
  CSharp,
  JavaScript,
  Ruby,
  Swift,
  Go,
  Scala,
  Kotlin,
  Rust,
  PHP,
  TypeScript,
  Racket,
  Erlang,
  Elixir,
  Dart,
  // Database
  MySQL,
  SQLServer,
  Oracle,
  // Shell
  Bash,
  // Other
  Other = -1,
}

interface BaseModel {
  id: number
  version: number
  is_deleted: boolean
  created_at: string
  updated_at: string
}

interface CommonModel extends BaseModel {
  title?: string
  type?: number
  description?: string
  star: number
  status: number
  icon?: string
}

/**
 * 元信息
 */
export interface Meta extends BaseModel {
  key: string
  value: string
  remarks: string
  value_type: number
}

/**
 * 用户
 */
export interface User extends CommonModel {
  username: string
  password: string
  role: number
  email?: string
  phone?: string
  avatar?: string
  gender?: number
  birthday?: string
  address?: string
}

/**
 * 目录
 */
export interface Catalog extends CommonModel {
}

/**
 * 标签
 */
export interface Tag extends CommonModel {
}

/**
 * 题目
 */
export interface Question extends CommonModel {
}

/**
 * 题目标签关联
 */
export interface QuestionTag extends BaseModel {
  question_id: number
  tag_id: number
}

/**
 * 笔记
 */
export interface Note extends CommonModel {
}

/**
 * 关注用户
 */
export interface Follow extends BaseModel {
  user_id: number
  follow_id: number
}

/**
 * 评论
 */
export interface Comment extends CommonModel {
}

/**
 * 收藏夹
 */
export interface Favorite extends CommonModel {
}

/**
 * 收藏项目
 */
export interface FavoriteItem extends BaseModel {
}

/**
 * 提交
 */
export interface Submission extends BaseModel {
  user_id: number
  question_id: number
  language: ProgramLanguage
  code: string
  beat_time?: number
  beat_memory?: number
  usage_time?: number
  usage_memory?: number
}

export const s: Submission = {
  id: 1,
  version: 1,
  is_deleted: false,
  created_at: '',
  updated_at: '',
  user_id: 1,
  question_id: 1,
  language: ProgramLanguage.Cpp,
  code: '',
}
