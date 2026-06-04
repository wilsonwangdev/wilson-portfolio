export const languages = {
  en: "EN",
  zh: "中文",
} as const

export const defaultLang = "en" as const
export type Lang = keyof typeof languages

export const ui = {
  en: {
    "site.title": "Wilson",
    "site.description": "Projects, tools, and experiments.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.search": "Search",
    "home.greeting": "Hello, I'm",
    "home.cta.explore": "Explore Projects",
    "home.cta.github": "GitHub",
    "home.about": "About",
    "home.about.p1": "I focus on frontend architecture, developer experience, infrastructure, documentation systems, and agent infra — building tools that make engineers more effective.",
    "home.about.p2": "Good tools, grown from real engineering problems, compound in value — clean architecture, disciplined engineering, elegant design, lasting documentation.",
    "home.projects": "Projects",
    "home.projects.all": "All projects →",
    "home.built": "Built with",
    "projects.title": "Projects",
    "projects.description": "Things built and shipped.",
    "projects.search": "Search",
    "projects.tags": "Tags",
    "projects.sort.asc": "Ascending",
    "projects.sort.desc": "Descending",
    "projects.showing": "Showing {0} of {1} {2}",
    "search.title": "Search",
    "search.description": "Search all projects.",
    "search.placeholder": "Type to search...",
    "search.found": "Found {0} results for '{1}'",
    "article.back": "Back to projects",
    "article.demo": "See Demo",
    "article.repo": "See Repository",
    "article.prev": "Prev",
    "article.next": "Next",
    "footer.back": "Back to top",
    "footer.deployed": "Deployed",
    "footer.built": "Built with",
    "drawer.toggle": "Toggle drawer open and closed",
    "theme.toggle": "Toggle light and dark theme",
    "article.readingTime": "min read",
  },
  zh: {
    "site.title": "Wilson",
    "site.description": "项目、工具与实验",
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.search": "搜索",
    "home.greeting": "你好，我是",
    "home.cta.explore": "浏览项目",
    "home.cta.github": "GitHub",
    "home.about": "关于",
    "home.about.p1": "我专注于前端架构、开发者体验、基础设施、文档系统和 Agent Infra，致力于打造让工程师更高效的工具。",
    "home.about.p2": "我相信从真实工程问题中生长出来的工具会持续产生复利——简洁的架构、工程化的交付、优雅的设计、持续的文档沉淀。",
    "home.projects": "项目",
    "home.projects.all": "全部项目 →",
    "home.built": "技术栈",
    "projects.title": "项目",
    "projects.description": "做过的项目。",
    "projects.search": "搜索",
    "projects.tags": "标签",
    "projects.sort.asc": "升序",
    "projects.sort.desc": "降序",
    "projects.showing": "显示 {0} / {1} 个项目",
    "search.title": "搜索",
    "search.description": "搜索所有项目。",
    "search.placeholder": "输入关键词...",
    "search.found": "找到 {0} 条结果：「{1}」",
    "article.back": "返回项目列表",
    "article.demo": "在线演示",
    "article.repo": "查看仓库",
    "article.prev": "上一篇",
    "article.next": "下一篇",
    "footer.back": "回到顶部",
    "footer.deployed": "部署于",
    "footer.built": "基于",
    "drawer.toggle": "菜单",
    "theme.toggle": "切换主题",
    "article.readingTime": "分钟",
  },
} as const satisfies Record<Lang, Record<string, string>>

/**
 * Server-side: use in Astro components with `Astro.currentLocale`.
 * Client-side: import `t` directly and pass locale + key.
 */
export function t(locale: string, key: string, ...args: string[]): string {
  const lang = (locale in ui ? locale : defaultLang) as Lang
  let text: string = (ui[lang]?.[key as keyof typeof ui[typeof lang]] || key) as string
  args.forEach((arg, i) => {
    text = text.replace(`{${i}}`, arg)
  })
  return text
}

/** Convenience wrapper for Astro components. */
export function useTranslations(locale: string) {
  return function translate(key: string, ...args: string[]): string {
    return t(locale, key, ...args)
  }
}
