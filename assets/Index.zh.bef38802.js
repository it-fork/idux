import{u as n,a as t}from"./index.af04afb6.js";import{n as a,o as s,b as e,u as o,F as i,d as l,g as c,f as p,m as u,q as r,v as d,a5 as k}from"./vendor.244d3a4e.js";const m={},g=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),h=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),v=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1);m.render=function(n,t){const l=a("ix-divider");return s(),e(i,null,[g,o(l),h,o(l,{dashed:""}),v],64)};var f=l({name:"components-divider-Horizontal",components:{"raw-demo":m},setup(){const{copy:a}=n(),s=c(!1),{lang:e}=p(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const x={key:0},q=o("p",null,"默认为水平分割线，可在中间加入文字。",-1),b={key:1},y=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token punctuation"},"/>")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"dashed"),d(),o("span",{class:"token punctuation"},"/>")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n")])])],-1);f.render=function(n,t,i,l,c,p){const d=a("raw-demo"),k=a("global-code-box");return s(),e(k,{packageName:"components",componentName:"divider",demoName:"Horizontal",title:"zh"===n.lang?"水平分割线":"Horizontal divider",copied:n.copied,onCopy:n.onCopy},{description:u((()=>["zh"===n.lang?(s(),e("span",x,[q])):r("",!0),"en"===n.lang?(s(),e("span",b)):r("",!0)])),rawCode:u((()=>[o(d)])),highlightCode:u((()=>[y])),_:1},8,["title","copied","onCopy"])};const w={},L=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),C=d("Text"),R=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),T=d("Left Text"),S=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),z=d("Right Text"),_=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1);w.render=function(n,t){const l=a("ix-divider");return s(),e(i,null,[L,o(l,{plain:""},{default:u((()=>[C])),_:1}),R,o(l,{position:"left",plain:""},{default:u((()=>[T])),_:1}),S,o(l,{position:"right",plain:""},{default:u((()=>[z])),_:1}),_],64)};var N=l({name:"components-divider-Plain",components:{"raw-demo":w},setup(){const{copy:a}=n(),s=c(!1),{lang:e}=p(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const P={key:0},H=o("p",null,[d("使用 "),o("code",null,"plain"),d(" 可以设置为更轻量的分割线文字样式。")],-1),V={key:1},W=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"plain"),o("span",{class:"token punctuation"},">")]),d("Text"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"position"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("left"),o("span",{class:"token punctuation"},'"')]),d(),o("span",{class:"token attr-name"},"plain"),o("span",{class:"token punctuation"},">")]),d("Left Text"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"position"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("right"),o("span",{class:"token punctuation"},'"')]),d(),o("span",{class:"token attr-name"},"plain"),o("span",{class:"token punctuation"},">")]),d("Right Text"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n")])])],-1);N.render=function(n,t,i,l,c,p){const d=a("raw-demo"),k=a("global-code-box");return s(),e(k,{packageName:"components",componentName:"divider",demoName:"Plain",title:"zh"===n.lang?"分割线使用正文样式":"divider text use plain style",copied:n.copied,onCopy:n.onCopy},{description:u((()=>["zh"===n.lang?(s(),e("span",P,[H])):r("",!0),"en"===n.lang?(s(),e("span",V)):r("",!0)])),rawCode:u((()=>[o(d)])),highlightCode:u((()=>[W])),_:1},8,["title","copied","onCopy"])};const A={},I=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),j=d("Text"),D=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),E=d("Left Text"),F=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),G=d("Right Text"),B=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1);A.render=function(n,t){const l=a("ix-divider");return s(),e(i,null,[I,o(l,null,{default:u((()=>[j])),_:1}),D,o(l,{position:"left"},{default:u((()=>[E])),_:1}),F,o(l,{position:"right"},{default:u((()=>[G])),_:1}),B],64)};var J=l({name:"components-divider-WithText",components:{"raw-demo":A},setup(){const{copy:a}=n(),s=c(!1),{lang:e}=p(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const K={key:0},M=o("p",null,[d("分割线中带有文字，可以用 "),o("code",null,"position"),d(" 制定文字的位置。")],-1),O=o("p",null,[d("文字默认位置为 "),o("code",null,"center"),d("，除此之外你还可以设置为 "),o("code",null,"left"),d(" 和 "),o("code",null,"center"),d("，同时你还可以通过全局配置修改默认位置。")],-1),Q={key:1},U=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("Text"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"position"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("left"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),d("Left Text"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"position"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("right"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),d("Right Text"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("ix-divider")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a\n    te dicta? Refert tamen, quo modo.\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("p")]),o("span",{class:"token punctuation"},">")]),d("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n")])])],-1);J.render=function(n,t,i,l,c,p){const d=a("raw-demo"),k=a("global-code-box");return s(),e(k,{packageName:"components",componentName:"divider",demoName:"WithText",title:"zh"===n.lang?"带文字的分割线":"divider with text",copied:n.copied,onCopy:n.onCopy},{description:u((()=>["zh"===n.lang?(s(),e("span",K,[M,O])):r("",!0),"en"===n.lang?(s(),e("span",Q)):r("",!0)])),rawCode:u((()=>[o(d)])),highlightCode:u((()=>[U])),_:1},8,["title","copied","onCopy"])};const X={},Y=d(" Text "),Z=o("a",{href:"#"},"Link",-1),$=o("a",{href:"#"},"Link",-1);X.render=function(n,t){const l=a("ix-divider");return s(),e(i,null,[Y,o(l,{type:"vertical"}),Z,o(l,{type:"vertical"}),$],64)};var nn=l({name:"components-divider-Vertical",components:{"raw-demo":X},setup(){const{copy:a}=n(),s=c(!1),{lang:e}=p(t);return{copied:s,onCopy:()=>{s.value||a("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const tn={key:0},an=o("p",null,[d("使用 "),o("code",null,'type="vertical"'),d("设置为行内的垂直分割线")],-1),sn={key:1},en=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n  Text\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"type"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("vertical"),o("span",{class:"token punctuation"},'"')]),d(),o("span",{class:"token punctuation"},"/>")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("a")]),d(),o("span",{class:"token attr-name"},"href"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("#"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),d("Link"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("a")]),o("span",{class:"token punctuation"},">")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("ix-divider")]),d(),o("span",{class:"token attr-name"},"type"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("vertical"),o("span",{class:"token punctuation"},'"')]),d(),o("span",{class:"token punctuation"},"/>")]),d("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),d("a")]),d(),o("span",{class:"token attr-name"},"href"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),d("#"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),d("Link"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("a")]),o("span",{class:"token punctuation"},">")]),d("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),d("template")]),o("span",{class:"token punctuation"},">")]),d("\n")])])],-1);nn.render=function(n,t,i,l,c,p){const d=a("raw-demo"),k=a("global-code-box");return s(),e(k,{packageName:"components",componentName:"divider",demoName:"Vertical",title:"zh"===n.lang?"垂直分割线":"vertical divider",copied:n.copied,onCopy:n.onCopy},{description:u((()=>["zh"===n.lang?(s(),e("span",tn,[an])):r("",!0),"en"===n.lang?(s(),e("span",sn)):r("",!0)])),rawCode:u((()=>[o(d)])),highlightCode:u((()=>[en])),_:1},8,["title","copied","onCopy"])};var on={name:"Demodivider",components:{Horizontal:f,Plain:N,WithText:J,Vertical:nn},setup(){const n=c(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const ln={class:"toc-wrapper"},cn=k('<a href="#components-divider-demo-Horizontal" title="水平分割线">水平分割线</a> <a href="#components-divider-demo-Plain" title="分割线使用正文样式">分割线使用正文样式</a> <a href="#components-divider-demo-WithText" title="带文字的分割线">带文字的分割线</a> <a href="#components-divider-demo-Vertical" title="垂直分割线">垂直分割线</a> <a href="#api" title="API"></a>',9),pn={class:"markdown header-wrapper"},un=d("Divider"),rn=o("span",{class:"subtitle"},"分割线",-1),dn={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/components/divider/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},kn=o("section",{class:"markdown"},[o("p",null,"区隔内容的分割线"),o("h2",{id:"何时使用"},[o("span",null,"何时使用"),o("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),o("ul",null,[o("li",null," 对不同章节的文本段落进行分割"),o("li",null," 对行内文字/链接进行分割，例如表格的操作列")])],-1),mn=o("span",null,"代码演示",-1),gn={class:"example-wrapper"},hn=o("section",{class:"markdown api-wrapper"},[o("h2",{id:"api"},[o("span",null,"API"),o("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),o("h3",{id:"<code>ix-divider</code>"},[o("span",null,[o("code",null,"ix-divider")]),o("a",{onclick:"window.location.hash = '<code>ix-divider</code>'",class:"anchor"},"#")]),o("h4",{id:"props"},[o("span",null,"Props"),o("a",{onclick:"window.location.hash = 'props'",class:"anchor"},"#")]),o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"名称"),o("th",null,"说明"),o("th",null,"类型"),o("th",null,"默认值"),o("th",null,"全局配置"),o("th",null,"备注")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"dashed")]),o("td",null,"是否虚线"),o("td",null,[o("code",null,"boolean")]),o("td",null,[o("code",null,"false")]),o("td",null,"✅"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"plain")]),o("td",null,"文字是否显示为普通正文样式"),o("td",null,[o("code",null,"boolean")]),o("td",null,[o("code",null,"false")]),o("td",null,"✅"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"position")]),o("td",null,"文字显示位置"),o("td",null,[o("code",null,"left|center|right")]),o("td",null,[o("code",null,"center")]),o("td",null,"✅"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"type")]),o("td",null,"水平分割线还是垂直分割线"),o("td",null,[o("code",null,"horizontal|vertical")]),o("td",null,[o("code",null,"horizontal")]),o("td",null,"✅"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"text")]),o("td",null,"分割线显示文字"),o("td",null,[o("code",null,"slot")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")])])])],-1);on.render=function(n,t,i,l,c,p){const r=a("ix-icon"),d=a("Horizontal"),k=a("WithText"),m=a("ix-col"),g=a("Plain"),h=a("Vertical"),v=a("ix-row");return s(),e("article",null,[o("a",ln,[o("a",{onClick:t[1]||(t[1]=n=>l.goLink(n))},[cn])]),o("section",pn,[o("h1",null,[un,rn,o("a",dn,[o(r,{name:"edit"})])]),kn,o("h2",null,[mn,o(r,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:t[2]||(t[2]=n=>l.expandAll())})])]),o("section",gn,[o(v,{gutter:"16"},{default:u((()=>[o(m,{xl:"12",span:"24"},{default:u((()=>[o(d),o(k)])),_:1}),o(m,{xl:"12",span:"24"},{default:u((()=>[o(g),o(h)])),_:1})])),_:1})]),hn])};export default on;
