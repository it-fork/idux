import{u as n,a}from"./index.af04afb6.js";import{d as t,g as s,n as o,o as e,b as l,u as c,m as p,F as u,v as i,f as k,q as r,a6 as d,a7 as f,a8 as g}from"./vendor.244d3a4e.js";const m=t({setup:()=>({numberOffset:s(0),onChange:n=>{console.log(`Basic Offset status change : ${n}`)},objectOffset:s({top:100,left:100})})}),h=i("Number Offset"),x=c("br",null,null,-1),b=i("Object Offset");m.render=function(n,a,t,s,i,k){const r=o("ix-button"),d=o("ix-affix");return e(),l(u,null,[c(d,{offset:n.numberOffset,onChange:n.onChange},{default:p((()=>[c(r,{onClick:a[1]||(a[1]=a=>n.numberOffset+=20)},{default:p((()=>[h])),_:1})])),_:1},8,["offset","onChange"]),x,c(d,{offset:n.objectOffset},{default:p((()=>[c(r,null,{default:p((()=>[b])),_:1})])),_:1},8,["offset"])],64)};var w=t({name:"components-affix-Basic",components:{"raw-demo":m},setup(){const{copy:t}=n(),o=s(!1),{lang:e}=k(a);return{copied:o,onCopy:()=>{o.value||t("copied").then((n=>{o.value=!0,console.log("copied ",n),setTimeout((()=>o.value=!1),1e3)}))},lang:e}}});const y={key:0},v=c("p",null,"最简单的用法。",-1),C={key:1},O=c("p",null,"The simplest usage.",-1),_=c("div",null,[c("pre",{class:"language-html"},[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("template")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("ix-affix")]),i(),c("span",{class:"token attr-name"},":offset"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("numberOffset"),c("span",{class:"token punctuation"},'"')]),i(),c("span",{class:"token attr-name"},"@change"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("onChange"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("ix-button")]),i(),c("span",{class:"token attr-name"},"@click"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("numberOffset += 20"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("Number Offset"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("ix-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("ix-affix")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("br")]),i(),c("span",{class:"token punctuation"},"/>")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("ix-affix")]),i(),c("span",{class:"token attr-name"},":offset"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("objectOffset"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("ix-button")]),c("span",{class:"token punctuation"},">")]),i("Object Offset"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("ix-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("ix-affix")]),c("span",{class:"token punctuation"},">")]),i("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("template")]),c("span",{class:"token punctuation"},">")]),i("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("script")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token script"},[c("span",{class:"token language-javascript"},[i("\n"),c("span",{class:"token keyword"},"import"),i(),c("span",{class:"token punctuation"},"{"),i(" defineComponent"),c("span",{class:"token punctuation"},","),i(" ref "),c("span",{class:"token punctuation"},"}"),i(),c("span",{class:"token keyword"},"from"),i(),c("span",{class:"token string"},"'vue'"),i("\n"),c("span",{class:"token keyword"},"export"),i(),c("span",{class:"token keyword"},"default"),i(),c("span",{class:"token function"},"defineComponent"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},"{"),i("\n  "),c("span",{class:"token function"},"setup"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),i(),c("span",{class:"token punctuation"},"{"),i("\n    "),c("span",{class:"token keyword"},"const"),i(" numberOffset "),c("span",{class:"token operator"},"="),i(),c("span",{class:"token function"},"ref"),c("span",{class:"token punctuation"},"("),c("span",{class:"token number"},"0"),c("span",{class:"token punctuation"},")"),i("\n    "),c("span",{class:"token keyword"},"const"),i(),c("span",{class:"token function-variable function"},"onChange"),i(),c("span",{class:"token operator"},"="),i(),c("span",{class:"token parameter"},"isAffix"),i(),c("span",{class:"token operator"},"=>"),i(),c("span",{class:"token punctuation"},"{"),i("\n      console"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token template-string"},[c("span",{class:"token template-punctuation string"},"`"),c("span",{class:"token string"},"Basic Offset status change : "),c("span",{class:"token interpolation"},[c("span",{class:"token interpolation-punctuation punctuation"},"${"),i("isAffix"),c("span",{class:"token interpolation-punctuation punctuation"},"}")]),c("span",{class:"token template-punctuation string"},"`")]),c("span",{class:"token punctuation"},")"),i("\n    "),c("span",{class:"token punctuation"},"}"),i("\n\n    "),c("span",{class:"token keyword"},"const"),i(" objectOffset "),c("span",{class:"token operator"},"="),i(),c("span",{class:"token function"},"ref"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},"{"),i(" top"),c("span",{class:"token operator"},":"),i(),c("span",{class:"token number"},"100"),c("span",{class:"token punctuation"},","),i(" left"),c("span",{class:"token operator"},":"),i(),c("span",{class:"token number"},"100"),i(),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),i("\n\n    "),c("span",{class:"token keyword"},"return"),i(),c("span",{class:"token punctuation"},"{"),i(" numberOffset"),c("span",{class:"token punctuation"},","),i(" onChange"),c("span",{class:"token punctuation"},","),i(" objectOffset "),c("span",{class:"token punctuation"},"}"),i("\n  "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),i("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),i("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("script")]),c("span",{class:"token punctuation"},">")]),i("\n")])])],-1);w.render=function(n,a,t,s,u,i){const k=o("raw-demo"),d=o("global-code-box");return e(),l(d,{packageName:"components",componentName:"affix",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:p((()=>["zh"===n.lang?(e(),l("span",y,[v])):r("",!0),"en"===n.lang?(e(),l("span",C,[O])):r("",!0)])),rawCode:p((()=>[c(k)])),highlightCode:p((()=>[_])),_:1},8,["title","copied","onCopy"])};const q={},j=g();d("data-v-9dc26768");const T={class:"container"},B={class:"background"},N=i("Custom target container");f();const A=j(((n,a)=>{const t=o("ix-button"),s=o("ix-affix");return e(),l("div",T,[c("div",B,[c(s,{target:".container",offset:{top:0,left:0}},{default:j((()=>[c(t,{mode:"primary"},{default:j((()=>[N])),_:1})])),_:1})])])}));q.render=A,q.__scopeId="data-v-9dc26768";var z=t({name:"components-affix-Target",components:{"raw-demo":q},setup(){const{copy:t}=n(),o=s(!1),{lang:e}=k(a);return{copied:o,onCopy:()=>{o.value||t("copied").then((n=>{o.value=!0,console.log("copied ",n),setTimeout((()=>o.value=!1),1e3)}))},lang:e}}});const I={key:0},E=c("p",null,[i("通过 "),c("code",null,"target"),i(" 设置 "),c("code",null,"ix-affix"),i(" 需要监听其滚动事件的元素，默认为 "),c("code",null,"window"),i("。")],-1),L={key:1},P=c("p",null,[i("Set a target for 'ix-affix', which is listen to scroll event of target element (default is "),c("code",null,"window"),i(").")],-1),F=c("div",null,[c("pre",{class:"language-html"},[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("template")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("div")]),i(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("container"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("div")]),i(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("background"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("ix-affix")]),i(),c("span",{class:"token attr-name"},"target"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i(".container"),c("span",{class:"token punctuation"},'"')]),i(),c("span",{class:"token attr-name"},":offset"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("{ top: 0, left: 0 }"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("\n        "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("ix-button")]),i(),c("span",{class:"token attr-name"},"mode"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("primary"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("Custom target container"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("ix-button")]),c("span",{class:"token punctuation"},">")]),i("\n      "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("ix-affix")]),c("span",{class:"token punctuation"},">")]),i("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("div")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("div")]),c("span",{class:"token punctuation"},">")]),i("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("template")]),c("span",{class:"token punctuation"},">")]),i("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("style")]),i(),c("span",{class:"token attr-name"},"lang"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("less"),c("span",{class:"token punctuation"},'"')]),i(),c("span",{class:"token attr-name"},"scoped"),c("span",{class:"token punctuation"},">")]),c("span",{class:"token style"},[c("span",{class:"token language-css"},[i("\n"),c("span",{class:"token selector"},".container"),i(),c("span",{class:"token punctuation"},"{"),i("\n  "),c("span",{class:"token property"},"height"),c("span",{class:"token punctuation"},":"),i(" 100px"),c("span",{class:"token punctuation"},";"),i("\n  "),c("span",{class:"token property"},"overflow"),c("span",{class:"token punctuation"},":"),i(" scroll"),c("span",{class:"token selector"},";\n\n  .background"),i(),c("span",{class:"token punctuation"},"{"),i("\n    "),c("span",{class:"token property"},"padding-top"),c("span",{class:"token punctuation"},":"),i(" 20px"),c("span",{class:"token punctuation"},";"),i("\n    "),c("span",{class:"token property"},"padding-left"),c("span",{class:"token punctuation"},":"),i(" 20px"),c("span",{class:"token punctuation"},";"),i("\n    "),c("span",{class:"token property"},"height"),c("span",{class:"token punctuation"},":"),i(" 300px"),c("span",{class:"token punctuation"},";"),i("\n    "),c("span",{class:"token property"},"width"),c("span",{class:"token punctuation"},":"),i(" 120%"),c("span",{class:"token punctuation"},";"),i("\n    "),c("span",{class:"token property"},"background"),c("span",{class:"token punctuation"},":"),i(),c("span",{class:"token function"},"rgb"),c("span",{class:"token punctuation"},"("),i("200"),c("span",{class:"token punctuation"},","),i(" 200"),c("span",{class:"token punctuation"},","),i(" 200"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),i("\n  "),c("span",{class:"token punctuation"},"}"),i("\n"),c("span",{class:"token punctuation"},"}"),i("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("style")]),c("span",{class:"token punctuation"},">")]),i("\n")])])],-1);z.render=function(n,a,t,s,u,i){const k=o("raw-demo"),d=o("global-code-box");return e(),l(d,{packageName:"components",componentName:"affix",demoName:"Target",title:"zh"===n.lang?"自定义目标容器":"custom target container",copied:n.copied,onCopy:n.onCopy},{description:p((()=>["zh"===n.lang?(e(),l("span",I,[E])):r("",!0),"en"===n.lang?(e(),l("span",L,[P])):r("",!0)])),rawCode:p((()=>[c(k)])),highlightCode:p((()=>[F])),_:1},8,["title","copied","onCopy"])};var S={name:"Demoaffix",components:{Basic:w,Target:z},setup(){const n=s(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const $={class:"toc-wrapper"},D=c("a",{href:"#components-affix-demo-Basic",title:"基本使用"},"基本使用",-1),G=i(),H=c("a",{href:"#components-affix-demo-Target",title:"自定义目标容器"},"自定义目标容器",-1),M=i(),J=c("a",{href:"#api",title:"API"},null,-1),K={class:"markdown header-wrapper"},Q=i("Affix"),R=c("span",{class:"subtitle"},"固钉",-1),U={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/components/affix/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},V=c("section",{class:"markdown"},[c("p",null,"将内容固钉在某个位置的容器组件"),c("h2",{id:"何时使用"},[c("span",null,"何时使用"),c("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),c("ul",null,[c("li",null," 容器滚动到某个位置时，需要固定住某些内容的位置，类似于sticky的效果")])],-1),W=c("span",null,"代码演示",-1),X={class:"example-wrapper"},Y=c("section",{class:"markdown api-wrapper"},[c("h2",{id:"api"},[c("span",null,"API"),c("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),c("h3",{id:"ix-affix"},[c("span",null,"ix-affix"),c("label",{class:"api-type-label component"},"component"),c("a",{onclick:"window.location.hash = 'ix-affix'",class:"anchor"},"#")]),c("h4",{id:"props"},[c("span",null,"Props"),c("a",{onclick:"window.location.hash = 'props'",class:"anchor"},"#")]),c("table",null,[c("thead",null,[c("tr",null,[c("th",null,"名称"),c("th",null,"说明"),c("th",null,"类型"),c("th",null,"默认值"),c("th",null,"全局配置"),c("th",null,"备注")])]),c("tbody",null,[c("tr",null,[c("td",null,[c("code",null,"offset")]),c("td",null,"距离容器顶部的偏移量，到达时会触发affix"),c("td",null,[c("code",null,"number | { top:number. bottom:number, left:number, right:number}")]),c("td",null,[c("code",null,"0")]),c("td",null,"-"),c("td",null,"-")]),c("tr",null,[c("td",null,[c("code",null,"target")]),c("td",null,"用于定位的容器，会监听容器的滚动事件，用函数返回"),c("td",null,[c("code",null,"string | HTMLElement | window")]),c("td",null,[c("code",null,"window")]),c("td",null,"-"),c("td",null,"-")])])]),c("h4",{id:"slots"},[c("span",null,"Slots"),c("a",{onclick:"window.location.hash = 'slots'",class:"anchor"},"#")]),c("table",null,[c("thead",null,[c("tr",null,[c("th",null,"名称"),c("th",null,"说明"),c("th",null,"参数类型"),c("th",null,"备注")])]),c("tbody",null,[c("tr",null,[c("td",null,[c("code",null,"default")]),c("td",null,"自定义显示内容"),c("td",null,"-"),c("td",null,"-")])])]),c("h4",{id:"emits"},[c("span",null,"Emits"),c("a",{onclick:"window.location.hash = 'emits'",class:"anchor"},"#")]),c("table",null,[c("thead",null,[c("tr",null,[c("th",null,"名称"),c("th",null,"说明"),c("th",null,"参数类型"),c("th",null,"备注")])]),c("tbody",null,[c("tr",null,[c("td",null,[c("code",null,"change")]),c("td",null,"固定状态改变时触发"),c("td",null,[c("code",null,"boolean")]),c("td",null,"-")])])])],-1);S.render=function(n,a,t,s,u,i){const k=o("ix-icon"),r=o("Basic"),d=o("ix-col"),f=o("Target"),g=o("ix-row");return e(),l("article",null,[c("a",$,[c("a",{onClick:a[1]||(a[1]=n=>s.goLink(n))},[D,G,H,M,J])]),c("section",K,[c("h1",null,[Q,R,c("a",U,[c(k,{name:"edit"})])]),V,c("h2",null,[W,c(k,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:a[2]||(a[2]=n=>s.expandAll())})])]),c("section",X,[c(g,{gutter:"16"},{default:p((()=>[c(d,{xl:"12",span:"24"},{default:p((()=>[c(r)])),_:1}),c(d,{xl:"12",span:"24"},{default:p((()=>[c(f)])),_:1})])),_:1})]),Y])};export default S;
