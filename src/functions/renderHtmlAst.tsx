import { createElement, useMemo } from "react"
import { unified } from "unified"
import rehypeReact from "rehype-react"

export const renderHtmlAst = htmlAst =>
  useMemo(() => {
    // Use rehype-react to convert rehype (hast) to React components
    const processor = unified().use(rehypeReact, {
      createElement,
    })

    return processor.stringify(htmlAst)
  }, [htmlAst])
 