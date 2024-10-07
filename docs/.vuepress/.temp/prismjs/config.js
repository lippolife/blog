import "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
