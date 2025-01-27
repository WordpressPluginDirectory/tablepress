(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,r=window.wp.shortcode;var s=e.n(r);const a=JSON.parse('{"UU":"tablepress/table"}'),o=e=>{let t=Object.entries(e.named).map((([e,t])=>{let r="";return t=t.replace(/“([^”]*)”/g,"$1"),(/\s/.test(t)||""===t)&&(r='"'),t.includes('"')&&(r="'"),`${e}=${r}${t}${r}`})).join(" ");return e.numeric.forEach((e=>{/\s/.test(e)?t+=' "'+e+'"':t+=" "+e})),t},n=function(e){let r=s().next(tp.table.shortcode,e).shortcode.attrs;r={named:{...r.named},numeric:[...r.numeric]};const n=r.named.id;delete r.named.id;let l=o(r);return l=l.replace(/=“([^”]*)”/g,'="$1"'),(0,t.createBlock)(a.UU,{id:n,parameters:l})},l={from:[{type:"shortcode",tag:tp.table.shortcode,attributes:{id:{type:"string",shortcode:({named:{id:e=""}})=>e},parameters:{type:"string",shortcode:e=>(delete(e={named:{...e.named},numeric:[...e.numeric]}).named.id,o(e))}}},{type:"enter",regExp:s().regexp(tp.table.shortcode),transform:({content:e})=>n(e)},{type:"block",blocks:["core/shortcode"],transform:({text:e})=>n(e),isMatch:({text:e})=>void 0!==s().next(tp.table.shortcode,e),isMultiBlock:!1}],to:[{type:"block",blocks:["core/shortcode"],transform:({id:e,parameters:r})=>{""!==(r=r.trim())&&(r+=" ");const s=`[${tp.table.shortcode} id=${e} ${r}/]`;return(0,t.createBlock)("core/shortcode",{text:s})}}]},i=window.wp.i18n,d=window.wp.serverSideRender;var c=e.n(d);const p=window.wp.blockEditor,h=window.wp.components,b=window.wp.primitives,m=window.ReactJSXRuntime,u=(0,m.jsxs)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-32 -32 64 64",fill:"#50575e",children:[(0,m.jsx)(b.Path,{d:"M0-25.854h-25.854v51.708h51.708V0H21v21h-42v-42H0Z"}),(0,m.jsx)(b.Path,{d:"M-18-18h10v10h-10zM-18-5h10V5h-10zM-5-5H5V5H-5zM-18 8h10v10h-10zM-5 8H5v10H-5zM8 8h10v10H8zM5-31h6.18v6.18H5zM19-25h6.18v6.18H19zM0-15h3.82v3.82H0zM10-20h3.82v3.82H10zM25-12h3.82v3.82H25zM8-13h10v10H8z"})]}),w=Object.entries(tp.tables).map((([e,t])=>({value:e,label:(0,i.sprintf)((0,i.__)("ID %1$s: “%2$s”","tablepress"),e,t)}))),x=function(){return""!==tp.url&&(0,m.jsx)(h.ExternalLink,{href:tp.url,children:(0,i.__)("Manage your tables.","tablepress")})},_=window.wp.element;let v=null;const g=Object.keys(tp.tables);g.length&&(v={attributes:{id:g[Math.floor(Math.random()*g.length)],parameters:""}});const j=v;(0,t.registerBlockType)(a.UU,{transforms:l,edit:({attributes:e,setAttributes:t})=>{const r=(0,p.useBlockProps)();let n;if(e.id&&tp.tables.hasOwnProperty(e.id))n=(0,m.jsxs)("div",{...r,children:[tp.load_block_preview&&(0,m.jsx)(c(),{block:a.UU,attributes:{id:e.id,parameters:`block_preview=true ${e.parameters}`.trim()},className:"render-wrapper"}),(0,m.jsx)("div",{className:"table-overlay",children:(0,i.sprintf)((0,i.__)("TablePress table %1$s: “%2$s”","tablepress"),e.id,tp.tables[e.id])})]});else{let t=0<w.length?(0,i.__)("Select the TablePress table that you want to embed in the Settings sidebar.","tablepress"):(0,i.__)("There are no TablePress tables on this site yet.","tablepress");e.id&&(t=(0,i.sprintf)((0,i.__)("There is a problem: The TablePress table with the ID “%1$s” could not be found.","tablepress"),e.id)+" "+t),n=(0,m.jsx)("div",{...r,children:(0,m.jsx)(h.Placeholder,{icon:(0,m.jsx)(h.Icon,{icon:u}),label:(0,i.__)("TablePress table","tablepress"),instructions:t,children:(0,m.jsx)(x,{})})})}const l=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.InspectorControls,{children:(0,m.jsx)(h.PanelBody,{opened:!0,children:0<w.length?(0,m.jsx)(h.ComboboxControl,{__nextHasNoMarginBottom:!0,label:(0,i.__)("Table:","tablepress"),help:(0,m.jsxs)(m.Fragment,{children:[(0,i.__)("Select the TablePress table that you want to embed.","tablepress"),""!==tp.url&&" ",(0,m.jsx)(x,{})]}),value:e.id,options:w,onChange:e=>{null!=e||(e=""),t({id:e.replace(/[^0-9a-zA-Z-_]/g,"")})}}):(0,m.jsxs)(m.Fragment,{children:[(0,i.__)("There are no TablePress tables on this site yet.","tablepress"),""!==tp.url&&" ",(0,m.jsx)(x,{})]})})}),e.id&&tp.tables.hasOwnProperty(e.id)&&(0,m.jsx)(p.InspectorAdvancedControls,{children:(0,m.jsx)(h.TextControl,{__nextHasNoMarginBottom:!0,label:(0,i.__)("Configuration parameters:","tablepress"),help:(0,i.__)("These additional parameters can be used to modify specific table features.","tablepress")+" "+(0,i.__)("See the TablePress Documentation for more information.","tablepress"),value:e.parameters,onChange:e=>{e=(e=s().replace(tp.table.shortcode,e,(({attrs:e})=>(delete(e={named:{...e.named},numeric:[...e.numeric]}).named.id," "+o(e)+" ")))).replace(/=“([^”]*)”/g,'="$1"'),t({parameters:e})},onBlur:e=>{const r=e.target.value.trim();t({parameters:r})}})})]});return(0,m.jsxs)(m.Fragment,{children:[n,l]})},save:({attributes:{id:e="",parameters:t=""}})=>""===e?"":(""!==(t=t.trim())&&(t+=" "),(0,m.jsx)(_.RawHTML,{children:`[${tp.table.shortcode} id=${e} ${t}/]`})),example:j,icon:u})})();