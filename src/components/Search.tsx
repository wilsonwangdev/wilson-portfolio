import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"

type Props = {
  data: CollectionEntry<"projects">[]
  locale?: string
}

export default function Search({ data, locale = "zh" }: Props) {
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<CollectionEntry<"projects">[]>([])

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.summary_en", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    if (query().length < 2) {
      setResults([])
    } else {
      setResults(fuse.search(query()).map((result) => result.item))
    }
  })

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  const isZh = locale === "zh"
  const placeholder = isZh ? "输入关键词搜索..." : "What are you looking for?"
  const foundText = isZh
    ? `找到 ${results().length} 条结果：「${query()}」`
    : `Found ${results().length} results for '${query()}'`

  return (
    <div class="flex flex-col">
      <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText={placeholder} />

      {(query().length >= 2 && results().length >= 1) && (
        <div class="mt-12">
          <div class="text-sm uppercase mb-2">
            {foundText}
          </div>
          <ul class="flex flex-col gap-3">
            {results().map(result => (
              <li>
                <ArrowCard entry={result} pill={true} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
