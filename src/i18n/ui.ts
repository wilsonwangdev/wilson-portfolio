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
    "home.about.p1": "Frontend architecture, developer tooling, infrastructure, documentation systems, and agent infra.",
    "home.about.p2": "Open source. Built from real engineering needs.",
    "home.projects": "Projects",
    "home.projects.all": "All projects →",
    "home.built": "Built with",
    "home.connect": "Connect",
    "projects.title": "Projects",
    "projects.description": "Things built and shipped.",
    "projects.search": "Search",
    "projects.tags": "TAGS",
    "projects.sort.asc": "ASCENDING",
    "projects.sort.desc": "DESCENDING",
    "search.title": "Search",
    "search.description": "Search all projects.",
    "search.placeholder": "Type to search...",
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
    "home.about.p1": "前端架构、开发者工具、基础设施、文档系统、Agent Infra。",
    "home.about.p2": "开源项目，从真实需求出发。",
    "home.projects": "项目",
    "home.projects.all": "全部项目 →",
    "home.built": "技术栈",
    "home.connect": "联系方式",
    "projects.title": "项目",
    "projects.description": "做过的项目。",
    "projects.search": "搜索",
    "projects.tags": "标签",
    "projects.sort.asc": "升序",
    "projects.sort.desc": "降序",
    "search.title": "搜索",
    "search.description": "搜索所有项目。",
    "search.placeholder": "输入关键词...",
    "footer.back": "回到顶部",
    "footer.deployed": "部署于",
    "footer.built": "基于",
    "drawer.toggle": "菜单",
    "theme.toggle": "切换主题",
    "article.readingTime": "分钟",
  },
} as const satisfies Record<Lang, Record<string, string>>

export function useTranslations(locale: string) {
  const lang = (locale in ui ? locale : defaultLang) as Lang
  return function t(key: string): string {
    return ui[lang][key as keyof typeof ui[typeof lang]] || key
  }
}
