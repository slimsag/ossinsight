"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[5861],{96214:function(t,e,n){var i=n(95318);e.Z=void 0;var a=i(n(64938)),o=n(85893),r=(0,a.default)((0,o.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");e.Z=r},72428:function(t,e,n){var i=n(88169),a=n(85893);e.Z=(0,i.Z)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},31812:function(t,e,n){n.d(e,{Z:function(){return b}});var i=n(63366),a=n(87462),o=n(67294),r=n(98216),l=n(27909),d=n(94780),s=n(90948),c=n(71657),u=n(83321),g=n(98456),m=n(34867);function v(t){return(0,m.Z)("MuiLoadingButton",t)}var f=(0,n(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),h=n(85893);const p=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Z=(0,s.ZP)(u.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${f.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${f.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})((({ownerState:t,theme:e})=>(0,a.Z)({[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${f.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}))),I=(0,s.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.loadingIndicator,e[`loadingIndicator${(0,r.Z)(n.loadingPosition)}`]]}})((({theme:t,ownerState:e})=>(0,a.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},"start"===e.loadingPosition&&"text"===e.variant&&{left:6},"center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},"end"===e.loadingPosition&&"text"===e.variant&&{right:6},"start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},"end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10})));var b=o.forwardRef((function(t,e){const n=(0,c.Z)({props:t,name:"MuiLoadingButton"}),{children:s,disabled:u=!1,id:m,loading:f=!1,loadingIndicator:b,loadingPosition:L="center",variant:_="text"}=n,E=(0,i.Z)(n,p),k=(0,l.Z)(m),P=null!=b?b:(0,h.jsx)(g.Z,{"aria-labelledby":k,color:"inherit",size:16}),C=(0,a.Z)({},n,{disabled:u,loading:f,loadingIndicator:P,loadingPosition:L,variant:_}),S=(t=>{const{loading:e,loadingPosition:n,classes:i}=t,o={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${(0,r.Z)(n)}`],endIcon:[e&&`endIconLoading${(0,r.Z)(n)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${(0,r.Z)(n)}`]},l=(0,d.Z)(o,v,i);return(0,a.Z)({},i,l)})(C);return(0,h.jsx)(Z,(0,a.Z)({disabled:u||f,id:k,ref:e},E,{variant:_,classes:S,ownerState:C,children:"end"===C.loadingPosition?(0,h.jsxs)(o.Fragment,{children:[s,f&&(0,h.jsx)(I,{className:S.loadingIndicator,ownerState:C,children:P})]}):(0,h.jsxs)(o.Fragment,{children:[f&&(0,h.jsx)(I,{className:S.loadingIndicator,ownerState:C,children:P}),s]})}))}))},52701:function(t,e,n){n.d(e,{O:function(){return I}});var i=n(87462),a=n(63366),o=n(67294),r=n(86010),l=n(53810),d=n(33692),s=n(13919),c=n(95999),u=n(90541),g="menuLinkText_OKON",m="hasHref_TwRn",v=n(72389),f=["items"],h=["item"],p=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],I=(0,o.memo)((function(t){var e=t.items,n=(0,a.Z)(t,f);return o.createElement(o.Fragment,null,e.map((function(t,e){return o.createElement(b,(0,i.Z)({key:e,item:t},n))})))}));function b(t){var e=t.item,n=(0,a.Z)(t,h);return"category"===e.type?0===e.items.length?null:o.createElement(L,(0,i.Z)({item:e},n)):o.createElement(_,(0,i.Z)({item:e},n))}function L(t){var e,n=t.item,s=t.onItemClick,u=t.activePath,f=t.level,h=(0,a.Z)(t,p),Z=n.items,b=n.label,L=n.collapsible,_=n.className,E=n.href,k=function(t){var e=(0,v.Z)();return(0,o.useMemo)((function(){return t.href?t.href:!e&&t.collapsible?(0,l.Wl)(t):void 0}),[t,e])}(n),P=(0,l._F)(n,u),C=(0,l.uR)({initialState:function(){return!!L&&(!P&&n.collapsed)}}),S=C.collapsed,y=C.setCollapsed,x=C.toggleCollapsed;return function(t){var e=t.isActive,n=t.collapsed,i=t.setCollapsed,a=(0,l.D9)(e);(0,o.useEffect)((function(){e&&!a&&n&&i(!1)}),[e,a,n,i])}({isActive:P,collapsed:S,setCollapsed:y}),o.createElement("li",{className:(0,r.Z)(l.kM.docs.docSidebarItemCategory,l.kM.docs.docSidebarItemCategoryLevel(f),"menu__list-item",{"menu__list-item--collapsed":S},_)},o.createElement("div",{className:"menu__list-item-collapsible"},o.createElement(d.Z,(0,i.Z)({className:(0,r.Z)("menu__link",(e={"menu__link--sublist":L&&!E,"menu__link--active":P},e[g]=!L,e[m]=!!k,e)),onClick:L?function(t){null==s||s(n),E?y(!1):(t.preventDefault(),x())}:function(){null==s||s(n)},href:L?null!=k?k:"#":k},h),b),E&&L&&o.createElement("button",{"aria-label":(0,c.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(t){t.preventDefault(),x()}})),o.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},o.createElement(I,{items:Z,tabIndex:S?-1:0,onItemClick:s,activePath:u,level:f+1})))}function _(t){var e=t.item,n=t.onItemClick,c=t.activePath,g=t.level,m=(0,a.Z)(t,Z),v=e.href,f=e.label,h=e.className,p=(0,l._F)(e,c);return o.createElement("li",{className:(0,r.Z)(l.kM.docs.docSidebarItemLink,l.kM.docs.docSidebarItemLinkLevel(g),"menu__list-item",h),key:f},o.createElement(d.Z,(0,i.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:v},(0,s.Z)(v)&&{onClick:n?function(){return n(e)}:void 0},m),(0,s.Z)(v)?f:o.createElement("span",null,f,o.createElement(u.Z,null))))}},34096:function(t,e,n){var i=n(87462),a=n(67294);e.Z=function(t){return a.createElement("svg",(0,i.Z)({width:"20",height:"20","aria-hidden":"true"},t),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},9566:function(t,e,n){n.d(e,{o:function(){return s}});var i=n(70655);function a(t){return t.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function l(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function d(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,i=void 0===n?o:n,d=e.stripRegexp,s=void 0===d?r:d,c=e.transform,u=void 0===c?a:c,g=e.delimiter,m=void 0===g?" ":g,v=l(l(t,i,"$1\0$2"),s,"\0"),f=0,h=v.length;"\0"===v.charAt(f);)f++;for(;"\0"===v.charAt(h-1);)h--;return v.slice(f,h).split("\0").map(u).join(m)}(t,(0,i.__assign)({delimiter:"."},e))}function s(t,e){return void 0===e&&(e={}),d(t,(0,i.__assign)({delimiter:"-"},e))}}}]);