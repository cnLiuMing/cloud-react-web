(this["webpackJsonprect-demo"]=this["webpackJsonprect-demo"]||[]).push([[0],{137:function(e,t,a){e.exports=a(234)},155:function(e){e.exports=JSON.parse('{"version":"2.0","envId":"vue-3g1ei8m934e45f58","$schema":"https://framework-1258016615.tcloudbaseapp.com/schema/latest.json","functionRoot":"functions","functions":[],"framework":{"name":"react-demo","plugins":{"react":{"use":"@cloudbase/framework-plugin-website","inputs":{"buildCommand":"npm run build","outputPath":"build"}},"function":{"use":"@cloudbase/framework-plugin-function","inputs":{"functionRootPath":"functions"}},"db":{"use":"@cloudbase/framework-plugin-database","inputs":{"collections":[{"collectionName":"demo_web"}]}}}}}')},228:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),i=(a(142),a(132)),l=a(48),s=a.n(l),u=a(54),m=a(58),p=a(70),d=a(26),f=(a(106),a(53)),v=(a(107),a(42)),h=(a(108),a(69)),E=(a(235),a(90)),g=(a(97),a(65)),b=(a(153),a(136)),y={envId:a(155).envId,storageBaseUrl:""},k=function(){var e=window.tcb.init({env:y.envId});return e.auth({persistence:"local"}),e},w=a(242),x=a(243),O=a(244),j=(a(201),a(134)),I=(a(236),a(133)),S=[{path:"/",component:function(){var e=k(),t=e.database(),a=Object(d.f)(),c=Object(n.useState)(!1),o=Object(m.a)(c,2),i=o[0],l=o[1],p=Object(n.useState)([]),y=Object(m.a)(p,2),j=y[0],I=y[1],S=function(){var e=Object(u.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.collection("article").get();case 2:a=e.sent,n=a.data,I(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){return r.a.createElement(b.b,null,r.a.createElement(e.icon),e.text)};function B(){return(B=Object(u.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),a=e.auth(),t.next=4,a.anonymousAuthProvider().signIn();case 4:return t.next=6,a.getLoginState();case 6:n=t.sent,console.log(n.isAnonymous),S(),l(!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(E.b,{itemLayout:"vertical",size:"large",loading:i,pagination:{onChange:function(e){console.log(e)},pageSize:5},dataSource:j,renderItem:function(e){return r.a.createElement(E.b.Item,{key:e.title,actions:[r.a.createElement(N,{icon:w.a,text:"156",key:"list-vertical-star-o"}),r.a.createElement(N,{icon:x.a,text:"156",key:"list-vertical-like-o"}),r.a.createElement(N,{icon:O.a,text:"2",key:"list-vertical-message"})],extra:r.a.createElement("img",{width:200,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},r.a.createElement(E.b.Item.Meta,{avatar:r.a.createElement(g.a,{src:e.avatar}),title:r.a.createElement("a",{onClick:function(){return t=e._id,void a.push("/article/".concat(t));var t},color:"orange"},e.title),description:e.description}))}}),r.a.createElement(f.a,null,r.a.createElement(v.a,{span:8,offset:8},r.a.createElement(h.a,{onClick:function(){a.push("/about")}},"about"))))}},{path:"/article/:id",component:function(){var e=Object(d.g)().id,t=Object(d.f)(),a=k().database(),c=Object(n.useState)({_id:"",title:"",description:"",content:"",avatar:""}),o=Object(m.a)(c,2),i=o[0],l=o[1],p=function(){var t=Object(u.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.collection("article").doc(e).get();case 2:n=t.sent,r=n.data,console.log(r),l(r[0]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),r.a.createElement("div",null,r.a.createElement(I.a,{className:"site-page-header",onBack:function(){return t.goBack()},title:i.title,subTitle:i.description}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.content}}))}},{path:"**",component:function(){return r.a.createElement(j.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement("span",null,"Back Home")})}}];function N(){return e=S,r.a.createElement(d.c,null,e.map((function(e,t){return r.a.createElement(d.a,{key:t,path:e.path,component:e.component,exact:e.exact||!0,strict:e.strict||!1})})));var e}a(237);var B=a(131),C=(a(224),a(135)),T=(a(117),a(38)),_=(a(226),a(77)),q=(a(228),_.a.Header),z=_.a.Content,A=T.a.SubMenu;function L(e){return r.a.createElement("div",{className:"App"},r.a.createElement(_.a,{style:{height:"100%"}},r.a.createElement(C.a,{offsetTop:0},r.a.createElement(q,{className:"header flex"},r.a.createElement("div",{className:"logo"},r.a.createElement(g.a,{style:{height:"40px",width:"40px"},src:"".concat(y.storageBaseUrl,"/icon.png")})),r.a.createElement(T.a,{mode:"horizontal",theme:"dark"},r.a.createElement(T.a.Item,{key:"mail"},"Navigation One"),r.a.createElement(T.a.Item,{key:"app"},"Navigation Two"),r.a.createElement(A,{key:"SubMenu",title:"Navigation Three - Submenu"},r.a.createElement(T.a.ItemGroup,{title:"Item 1"},r.a.createElement(T.a.Item,{key:"setting:1"},"Option 1"),r.a.createElement(T.a.Item,{key:"setting:2"},"Option 2")),r.a.createElement(T.a.ItemGroup,{title:"Item 2"},r.a.createElement(T.a.Item,{key:"setting:3"},"Option 3"),r.a.createElement(T.a.Item,{key:"setting:4"},"Option 4")))))),r.a.createElement(z,{style:{padding:"0 50px",display:"flex",flexDirection:"column"}},r.a.createElement(_.a,{style:{padding:"24px 0",flex:"1 1 auto",background:"#fff"}},r.a.createElement(z,{style:{padding:"0 24px"}},r.a.createElement(B.a,{className:"card",bordered:!1},r.a.createElement("div",{className:"card-content",style:{overflow:"auto"}},e.children)))))))}a(231),a(232);var M=S.filter((function(e){return e.menu}));function P(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1];return function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.createElement("script")).type="text/javascript",t.src="https://imgcache.qq.com/qcloud/tcbjs/1.5.0/tcb.js",document.head.appendChild(t),e.abrupt("return",new Promise((function(e){t.onload=function(){e()}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){c(!1)})),r.a.createElement("div",{className:"App"},r.a.createElement(L,{menus:M},a?r.a.createElement(i.a,{active:!0}):N()))}var D=function(){return r.a.createElement(p.a,null,r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(233);o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[137,1,2]]]);
//# sourceMappingURL=main.459399ce.chunk.js.map