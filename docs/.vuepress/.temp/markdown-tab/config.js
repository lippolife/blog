import { CodeTabs } from "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/hkyo89/Codes/github.com/lippolife/blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
