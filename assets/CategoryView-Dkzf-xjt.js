import{_ as B,d as G,o as d,c as g,a as m,b as u,F as y,r as v,e as k,f as s,g as f,h as w,n as M,t as P,i as S,j as T,w as I,k as A,l as C,m as $,p as q,P as D}from"./index-vQb8whZe.js";const L=G({components:{IconArrow:k},props:{totalItems:{type:Number,required:!0},itemsPerPage:{type:Number,default:10},initialPage:{type:Number,default:1}},emits:["page-change"],setup(e,{emit:o}){const l=s(e.initialPage),t=f(()=>Math.ceil(e.totalItems/e.itemsPerPage)),r=f(()=>Array.from({length:t.value},(i,n)=>n+1));return{currentPage:l,totalPages:t,pages:r,goToPage:i=>{i>=1&&i<=t.value&&(l.value=i,o("page-change",i))}}}}),Q={class:"flex items-center justify-center space-x-2"},F=["disabled"],O=["onClick"],E=["disabled"];function N(e,o,l,t,r,_){const i=w("IconArrow");return d(),g("nav",Q,[m("button",{class:"p-1 rounded-md bg-white text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",disabled:e.currentPage===1,onClick:o[0]||(o[0]=n=>e.goToPage(e.currentPage-1))},[u(i,{orientation:"left"})],8,F),(d(!0),g(y,null,v(e.pages,n=>(d(),g("button",{key:n,class:M(["px-3 py-1 rounded-md border",{"bg-black text-white":n===e.currentPage,"bg-gray-200 text-black hover:bg-gray-300":n!==e.currentPage}]),onClick:h=>e.goToPage(n)},P(n),11,O))),128)),m("button",{class:"p-1 rounded-md bg-white text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",disabled:e.currentPage===e.totalPages,onClick:o[1]||(o[1]=n=>e.goToPage(e.currentPage+1))},[u(i,{orientation:"right"})],8,E)])}const W=B(L,[["render",N],["__scopeId","data-v-ea38fbca"]]),R={class:"breadcrumb py-3 sm:py-6 flex"},V={class:"items-center space-x-4 rtl:space-x-reverse hidden md:inline-flex"},z={class:"flex items-center"},j={__name:"Breadcrumb",props:{navItems:Array},setup(e){return(o,l)=>{const t=w("RouterLink");return d(),g("nav",R,[m("ol",V,[(d(!0),g(y,null,v(e.navItems,(r,_)=>(d(),g("li",{key:r.id},[m("div",z,[_>0&&_<e.navItems.length?(d(),S(k,{key:0,class:"mr-4",size:24,color:"#A4A4A4",orientation:"right"})):T("",!0),u(t,{to:r.path,class:"inline-flex items-center text-md font-normal breadcrumb-item"},{default:I(()=>[A(P(r.title),1)]),_:2},1032,["to"])])]))),128))])])}}},K={class:"product-list-count flex items-center"},Z={class:"number text-xl ml-2"},U={__name:"ProductListCount",props:{count:Number},setup(e){return(o,l)=>(d(),g("div",K,[l[0]||(l[0]=m("span",{class:"label text-md font-normal"},"Selected Products:",-1)),m("span",Z,P(e.count),1)]))}},X=["id"],H=["id"],J={class:"py-2 text-sm text-gray-700 dark:text-gray-200"},Y=["onClick"],ee={__name:"Dropdown",props:{id:String,options:Array,defaultOption:String},emits:["change-dropdown"],setup(e,{emit:o}){const l=o,t=e,r=s(!1),_=s(t.defaultOption),i=s(null),n=()=>{r.value=!r.value},h=a=>{l("change-dropdown",a),_.value=a.title,r.value=!1},b=a=>{i.value&&!i.value.contains(a.target)&&(r.value=!1)};return C(()=>{document.addEventListener("click",b)}),$(()=>{document.removeEventListener("click",b)}),(a,x)=>(d(),g("div",{ref_key:"dropdownRef",ref:i,class:"dropdown-wrapper relative"},[m("button",{id:`${e.id}-dropdown`,class:"dropdown text-black font-normal rounded-md text-sm px-5 py-2.5 text-center justify-between inline-flex items-center border-gray-200 border-solid border-1",type:"button",onClick:n},[A(P(_.value)+" ",1),u(k,{color:"#9F9F9F",orientation:r.value?"top":"bottom"},null,8,["orientation"])],8,X),r.value?(d(),g("div",{key:0,id:`dropdown-${e.id}`,class:"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dropdown-list absolute"},[m("ul",J,[(d(!0),g(y,null,v(e.options,c=>(d(),g("li",{key:c.id},[m("a",{href:"#",class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",onClick:q(p=>h(c),["prevent"])},P(c.title),9,Y)]))),128))])],8,H)):T("",!0)],512))}},te=[{id:1,title:"Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",price:900,image:"iphone_14_pro_purple_640x640.webp",imageThumb:"iphone_14_pro_purple_160x160.webp",rating:3.5},{id:2,title:"Blackmagic Pocket Cinema Camera 6k",price:2535,image:"black_magic_pocket_cinema_640x640.webp",imageThumb:"black_magic_pocket_cinema_160x160.webp",rating:4.1},{id:3,title:"Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",price:399,discountedPrice:250,image:"apple_watch_series_9_640x640.webp",imageThumb:"apple_watch_series_9_160x160.webp",rating:4.2},{id:4,title:"AirPods Max Silver",price:549,discountedPrice:425,image:"airpods_max_silver_640x640.webp",imageThumb:"airpods_max_silver_160x160.webp",rating:3.8},{id:5,title:"Samsung Galaxy Watch6 Classic 47mm Black",price:369,discountedPrice:200,image:"samsung_galaxy_watch_6_classic_640x640.webp",imageThumb:"samsung_galaxy_watch_6_classic_160x160.webp",rating:4},{id:6,title:"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",price:1799,discountedPrice:1500,image:"galaxy_z_fold5_640x640.webp",imageThumb:"galaxy_z_fold5_160x160.webp",rating:3.2},{id:7,title:"Galaxy Buds FE Graphite",price:99.99,image:"galaxy_buds_fe_graphite_640x640.webp",imageThumb:"galaxy_buds_fe_graphite_640x640.webp",rating:3.7},{id:8,title:'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',price:398,image:"apple_ipad_9_10_2_640x640.webp",imageThumb:"apple_ipad_9_10_2_160x160.webp",rating:4.8},{id:9,title:"Apple iPhone 14 Pro 512GB Gold (MQ233)",price:1437,image:"iphone_14_pro_gold_640x640.webp",imageThumb:"iphone_14_pro_gold_160x160.webp",rating:4.3},{id:10,title:"Apple iPhone 14 Pro 1TB Gold (MQ2V3)",price:1499,image:"iphone_14_pro_gold_mq2v3_640_640.webp",imageThumb:"iphone_14_pro_gold_mq2v3_160x160.webp",rating:3.9},{id:11,title:"Apple iPhone 11 128GB White (MQ233)",price:510,image:"apple_iphone_11_mq233_640x640.webp",imageThumb:"apple_iphone_11_mq233_160x160.webp",rating:3.15},{id:12,title:"Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",price:1600,image:"apple_iphone_14_pro_mq063_640x640.webp",imageThumb:"apple_iphone_14_pro_mq063_160x160.webp",rating:3.9},{id:13,title:"Apple iPhone 13 mini 128GB Pink (MLK23)",price:850,image:"apple_iphone_13_mini__mlk23_640x640.webp",imageThumb:"apple_iphone_13_mini__mlk23_160x160.webp",rating:3.35},{id:14,title:"Apple iPhone 14 Pro 256GB Space Black (MQ0T3)",price:1399,image:"apple_iphone_14_pro_mq0t3_640x640.webp",imageThumb:"apple_iphone_14_pro_mq0t3_160x160.webp",rating:3.4},{id:15,title:"Apple iPhone 14 Pro 256GB Silver (MQ103)",price:1399,image:"iphone_14_pro_silver_mq103_640x640.webp",imageThumb:"iphone_14_pro_silver_mq103_160x160.webp",rating:3.15},{id:16,title:"APPLE iPhone 12 64 GB SingleSIM Black",price:458,image:"iphone_12_black_640x640.webp",imageThumb:"iphone_12_black_160x160.webp",rating:3.5},{id:17,title:"Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A) copy",price:589,image:"iphone_14_pro_purple_640x640.webp",imageThumb:"iphone_14_pro_purple_160x160.webp",rating:3.3},{id:18,title:"Blackmagic Pocket Cinema Camera 6k copy",price:1897,image:"black_magic_pocket_cinema_640x640.webp",imageThumb:"black_magic_pocket_cinema_160x160.webp",rating:4.2},{id:19,title:"Apple Watch Series 9 GPS 41mm Starlight Aluminium Case copy",price:450,discountedPrice:290,image:"apple_watch_series_9_640x640.webp",imageThumb:"apple_watch_series_9_160x160.webp",rating:4.1},{id:20,title:"AirPods Max Silver copy",price:359,discountedPrice:250,image:"airpods_max_silver_640x640.webp",imageThumb:"airpods_max_silver_160x160.webp",rating:""},{id:21,title:"Samsung Galaxy Watch6 Classic 47mm Black copy",price:780,discountedPrice:650,image:"samsung_galaxy_watch_6_classic_640x640.webp",imageThumb:"samsung_galaxy_watch_6_classic_160x160.webp",rating:3.35},{id:22,title:"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black copy",price:1460,discountedPrice:1250,image:"galaxy_z_fold5_640x640.webp",imageThumb:"galaxy_z_fold5_160x160.webp",rating:3.6},{id:23,title:"Galaxy Buds FE Graphite copy",price:85,image:"galaxy_buds_fe_graphite_640x640.webp",imageThumb:"galaxy_buds_fe_graphite_640x640.webp",rating:3.65},{id:24,title:'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021 copy',price:299,image:"apple_ipad_9_10_2_640x640.webp",imageThumb:"apple_ipad_9_10_2_160x160.webp",rating:4.75},{id:25,title:"Apple iPhone 14 Pro 512GB Gold (MQ233) copy",price:1222,image:"iphone_14_pro_gold_640x640.webp",imageThumb:"iphone_14_pro_gold_160x160.webp",rating:4.19},{id:26,title:"Apple iPhone 14 Pro 1TB Gold (MQ2V3) copy",price:1399,image:"iphone_14_pro_gold_mq2v3_640_640.webp",imageThumb:"iphone_14_pro_gold_mq2v3_160x160.webp",rating:3.9},{id:27,title:"Apple iPhone 11 128GB White (MQ233) copy",price:450,image:"apple_iphone_11_mq233_640x640.webp",imageThumb:"apple_iphone_11_mq233_160x160.webp",rating:3.95},{id:28,title:"Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3) copy",price:1450,image:"apple_iphone_14_pro_mq063_640x640.webp",imageThumb:"apple_iphone_14_pro_mq063_160x160.webp",rating:3.87},{id:29,title:"Apple iPhone 13 mini 128GB Pink (MLK23) copy",price:830,image:"apple_iphone_13_mini__mlk23_640x640.webp",imageThumb:"apple_iphone_13_mini__mlk23_160x160.webp",rating:3.85},{id:30,title:"Apple iPhone 14 Pro 256GB Space Black (MQ0T3) copy",price:1890,image:"apple_iphone_14_pro_mq0t3_640x640.webp",imageThumb:"apple_iphone_14_pro_mq0t3_160x160.webp",rating:2.9},{id:31,title:"Apple iPhone 14 Pro 256GB Silver (MQ103) copy",price:1250,image:"iphone_14_pro_silver_mq103_640x640.webp",imageThumb:"iphone_14_pro_silver_mq103_160x160.webp",rating:3.85},{id:32,title:"APPLE iPhone 12 64 GB SingleSIM Black copy",price:389,image:"iphone_12_black_640x640.webp",imageThumb:"iphone_12_black_160x160.webp",rating:3.25}],ie={getProducts:async(e={},o=null,l=1,t=5)=>{const r=Math.floor(Math.random()*2001)+500;return new Promise(_=>{setTimeout(()=>{let i=[...te];if(e!=null&&e.minPrice&&(i=i.filter(a=>a.price>=e.minPrice)),e!=null&&e.maxPrice&&(i=i.filter(a=>a.price<=e.maxPrice)),e!=null&&e.rating&&(i=i.filter(a=>a.rating>=e.rating)),o){const[a,x]=o.split("_");a==="title"?i.sort((c,p)=>x==="asc"?c[a].localeCompare(p[a]):x==="desc"?p[a].localeCompare(c[a]):0):i.sort((c,p)=>x==="asc"?c[a]-p[a]:x==="desc"?p[a]-c[a]:0)}const n=(l-1)*t,h=n+t,b=i.slice(n,h);_({ok:1,total:i.length,data:b})},r)})}},ae={components:{ProductModule:D,Pagination:W,Breadcrumb:j,ProductListCount:U,Dropdown:ee},setup(){const o=s(Array(8).fill().map(()=>{})),l=s(1),t=s(!0),r=s(null),_=s(0),i=s("By rating"),n=s("rating_asc"),h=s([{id:1,title:"By rating",sortBy:"rating_asc"},{id:2,title:"By name, A-Z",sortBy:"title_asc"},{id:3,title:"By name, Z-A",sortBy:"title_desc"},{id:4,title:"By price, low to high",sortBy:"price_asc"},{id:5,title:"By price, high to low",sortBy:"price_desc"}]),b=s([{id:1,path:"/",title:"Home"},{id:2,path:"/catalog",title:"Catalog"},{id:3,path:"/catalog",title:"Smartphones",active:!0}]),a=p=>{l.value=parseInt(p,10),c()},x=p=>{n.value=p.sortBy,c()},c=async()=>{t.value=!0;try{const p=await ie.getProducts({},n.value,l.value,8);if(!p.ok)throw new Error("Failed to load products");o.value=p.data,_.value=p.total}catch(p){console.log(p),p.value=p.message}finally{t.value=!1}};return C(()=>{c()}),{limit:8,totalItemCount:_,error:r,loading:t,fetchProducts:c,onPageChange:a,products:o,navigationItems:b,sortOptions:h,defaultSortOption:i,onChangeDropdown:x}}},oe={class:"container pb-6"},ne={class:"category-content-wrapper"},re={class:"product-list"},pe={class:"product-list-top flex justify-between py-3"};function le(e,o,l,t,r,_){const i=w("Breadcrumb"),n=w("ProductListCount"),h=w("Dropdown"),b=w("ProductModule"),a=w("Pagination");return d(),g("div",oe,[u(i,{navItems:t.navigationItems},null,8,["navItems"]),m("div",ne,[o[0]||(o[0]=m("div",{class:"product-filter"},null,-1)),m("div",re,[m("div",pe,[u(n,{count:t.totalItemCount},null,8,["count"]),u(h,{id:"sort-list",options:t.sortOptions,defaultOption:t.defaultSortOption,onChangeDropdown:t.onChangeDropdown},null,8,["options","defaultOption","onChangeDropdown"])]),u(b,{error:t.error,loading:t.loading,products:t.products,class:"py-3"},null,8,["error","loading","products"]),u(a,{totalItems:t.totalItemCount,itemsPerPage:t.limit,onPageChange:t.onPageChange,class:"mb-3"},null,8,["totalItems","itemsPerPage","onPageChange"])])])])}const _e=B(ae,[["render",le]]);export{_e as default};