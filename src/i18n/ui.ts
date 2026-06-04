export const languages = {
  en: "EN",
  zh: "中文",
} as const

export const defaultLang = "zh" as const
export type Lang = keyof typeof languages

export const ui = {
  en: {
    "site.title": "Wilson",
    "site.description": "Personal portal — a curated index of projects, tools, and experiments.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.search": "Search projects",
    "home.greeting": "Hello, I'm",
    "home.cta.explore": "Explore Projects",
    "home.cta.github": "GitHub",
    "home.about": "About",
    "home.about.p1": "I build tools that make engineers faster. My work spans frontend architecture, developer experience, infrastructure, documentation systems, and agent infra.",
    "home.about.p2": "I care about clean abstractions, deliberate UX, and tools that compound in value over time. Most of my projects are open source and shaped by real-world engineering needs.",
    "home.projects": "Projects",
    "home.projects.all": "All projects →",
    "home.built": "Built with",
    "home.built.tagline": "Static at the core, interactive islands where it counts.",
    "home.connect": "Connect",
    "projects.title": "Projects",
    "projects.description": "Things I've built and shipped.",
    "projects.search": "Search projects",
    "projects.tags": "TAGS",
    "projects.sort.asc": "ASCENDING",
    "projects.sort.desc": "DESCENDING",
    "search.title": "Search",
    "search.description": "Search all projects by keyword.",
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
    "site.description": "个人门户 — 项目、工具与实验的精选索引。",
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.search": "搜索项目",
    "home.greeting": "你好，我是",
    "home.cta.explore": "浏览项目",
    "home.cta.github": "GitHub",
    "home.about": "关于",
    "home.about.p1": "我专注于前端架构、开发者体验、基础设施、文档系统和 Agent Infra，致力于打造让工程师更高效的工具。",
    "home.about.p2": "我相信好的工具会持续产生复利——清晰的抽象、克制的交互、经得起时间考验的设计。大部分项目开源，源于真实的工程需求。",
    "home.projects": "项目",
    "home.projects.all": "全部项目 →",
    "home.built": "技术栈",
    "home.built.tagline": "静态为核心，交互岛屿按需而动。",
    "home.connect": "联系",
    "projects.title": "项目",
    "projects.description": "我构建和交付的作品。",
    "projects.search": "搜索项目",
    "projects.tags": "标签",
    "projects.sort.asc": "升序",
    "projects.sort.desc": "降序",
    "search.title": "搜索",
    "search.description": "按关键词搜索所有项目。",
    "search.placeholder": "输入关键词搜索...",
    "footer.back": "回到顶部",
    "footer.deployed": "部署于",
    "footer.built": "基于",
    "drawer.toggle": "切换菜单",
    "theme.toggle": "切换亮色/暗色主题",
    "article.readingTime": "分钟阅读",
  },
} as const satisfies Record<Lang, Record<string, string>>

export function useTranslations(locale: string) {
  const lang = (locale in ui ? locale : defaultLang) as Lang
  return function t(key: string): string {
    return ui[lang][key as keyof typeof ui[typeof lang]] || key
  }
}
