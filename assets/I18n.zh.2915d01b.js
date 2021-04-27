import{n,o as s,b as a,u as t,v as o}from"./vendor.244d3a4e.js";var l={setup:()=>({goLink:n=>{window&&(window.location.hash=n)}})};const c={class:"markdown"},e=o("国际化"),u=t("span",{class:"subtitle"},null,-1),p={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/docs/I18n.zh.md",target:"_blank",rel:"noopener noreferrer"},i={class:"toc-affix"},k=t("a",{href:"#初始化",title:"初始化"},null,-1),r=t("a",{href:"#运行时切换",title:"运行时切换"},null,-1),d=t("a",{href:"#支持语言",title:"支持语言"},null,-1),h=t("section",{class:"markdown"},[t("p",null,[o("目前的默认文案是中文("),t("code",null,"zh-CN"),o(")，如果需要使用其他语言，可以在初始化时进行配置，也可以在运行时切换，可以参考下面的方案。")]),t("h2",{id:"初始化"},[t("span",null,"初始化"),t("a",{onclick:"window.location.hash = '初始化'",class:"anchor"},"#")]),t("pre",{class:"language-typescript"},[t("code",null,[t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" useLocale"),t("span",{class:"token punctuation"},","),o(" en_US "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'@idux/components/i18n'"),o("\n\n"),t("span",{class:"token function"},"useLocale"),t("span",{class:"token punctuation"},"("),o("en_US"),t("span",{class:"token punctuation"},")")])]),t("h2",{id:"运行时切换"},[t("span",null,"运行时切换"),t("a",{onclick:"window.location.hash = '运行时切换'",class:"anchor"},"#")]),t("pre",{class:"language-typescript"},[t("code",null,[t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" addLocale"),t("span",{class:"token punctuation"},","),o(" useLocale"),t("span",{class:"token punctuation"},","),o(" zh_CN"),t("span",{class:"token punctuation"},","),o(" en_US "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'@idux/components/i18n'"),o("\n\n"),t("span",{class:"token comment"},"// 首先需要先添加多语言包"),o("\n"),t("span",{class:"token function"},"addLocale"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),o("zh_CN"),t("span",{class:"token punctuation"},","),o(" en_US"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),o("\n"),t("span",{class:"token function"},"useLocale"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'en-US'"),t("span",{class:"token punctuation"},")"),o("\n"),t("span",{class:"token comment"},"// 运行时切换"),o("\n"),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token function"},"useLocale"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'zh-CN'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"3000"),t("span",{class:"token punctuation"},")")])]),t("p",null,[o("注意："),t("code",null,"zh-CN"),o(", "),t("code",null,"en-US"),o(" 是语言包名称，以下表格也遵循同样的规则。")]),t("h2",{id:"支持语言"},[t("span",null,"支持语言"),t("a",{onclick:"window.location.hash = '支持语言'",class:"anchor"},"#")]),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"语言"),t("th",null,"语言包名")])]),t("tbody",null,[t("tr",null,[t("td",null,"中文简体"),t("td",null,[t("code",null,"zh-CN")])]),t("tr",null,[t("td",null,"英语（美式）"),t("td",null,[t("code",null,"en-US")])])])])],-1);l.render=function(o,l,m,f,w,g){const b=n("ix-icon");return s(),a("article",c,[t("h1",null,[e,u,t("a",p,[t(b,{name:"edit"})])]),t("a",i,[t("a",{onClick:l[1]||(l[1]=n=>f.goLink(n))},[k,r,d])]),h])};export default l;
