"use strict";(self.webpackChunkgoit_test_task=self.webpackChunkgoit_test_task||[]).push([[651],{204:(e,a,s)=>{s.d(a,{A:()=>m});const i="Button_button__wiIYs",t="Button_main-button__+rNuK",l="Button_outline-button__2-B6e";var r=s(387),c=s(579);const m=e=>{let{children:a,id:s,className:m,outline:o=!1,type:d="button",onClick:n}=e;return(0,c.jsx)("button",{onClick:n,className:(0,r.A)({[i]:!0,[t]:!o,[l]:o,[m]:m}),type:d,id:s,children:a})}},743:(e,a,s)=>{s.d(a,{A:()=>v});var i=s(387);const t={"modal-holder":"CamperDetailsModal_modal-holder__CY5eI",modal:"CamperDetailsModal_modal__1TocY","modal-close":"CamperDetailsModal_modal-close__suzwy","modal-camper-header":"CamperDetailsModal_modal-camper-header__p-a4J","modal-camper-header-top":"CamperDetailsModal_modal-camper-header-top__w9u1A","modal-camper-title":"CamperDetailsModal_modal-camper-title__CabcV","modal-camper-head-actions":"CamperDetailsModal_modal-camper-head-actions__Keahi","camper-add-favorites":"CamperDetailsModal_camper-add-favorites__EE871","modal-camper-sub-header":"CamperDetailsModal_modal-camper-sub-header__06PuM","modal-camper-sub-header-badge":"CamperDetailsModal_modal-camper-sub-header-badge__KpH5e","text-underline":"CamperDetailsModal_text-underline__JzLB3","camper-price":"CamperDetailsModal_camper-price__UNyIm","modal-camper-gallery":"CamperDetailsModal_modal-camper-gallery__ADEoi","modal-camper-gallery-img":"CamperDetailsModal_modal-camper-gallery-img__kADdh","modal-camper-gallery-list":"CamperDetailsModal_modal-camper-gallery-list__LIPHv","modal-camper-gallery-item":"CamperDetailsModal_modal-camper-gallery-item__9DhGm","modal-camper-description":"CamperDetailsModal_modal-camper-description__Ma7vo","modal-tabs-list":"CamperDetailsModal_modal-tabs-list__sZ5nc","modal-tab-nav":"CamperDetailsModal_modal-tab-nav__WvKtX",active:"CamperDetailsModal_active__htBuL","modal-details":"CamperDetailsModal_modal-details__9Zwfw","modal-tabs":"CamperDetailsModal_modal-tabs__tRoub","modal-tab-content":"CamperDetailsModal_modal-tab-content__vziPN","modal-camper-feature-list":"CamperDetailsModal_modal-camper-feature-list__YJcS3","camper-vehicle-details":"CamperDetailsModal_camper-vehicle-details__-zX8v","camper-vehicle-details-title":"CamperDetailsModal_camper-vehicle-details-title__VAObU","camper-vehicle-details-list":"CamperDetailsModal_camper-vehicle-details-list__oTc+j","camper-vehicle-details-item":"CamperDetailsModal_camper-vehicle-details-item__VS7PU","modal-book-form-container":"CamperDetailsModal_modal-book-form-container__eskoc","modal-title":"CamperDetailsModal_modal-title__Lk3q0","modal-sub-title":"CamperDetailsModal_modal-sub-title__lrMFQ","modal-book-form":"CamperDetailsModal_modal-book-form__osdzq","form-input":"CamperDetailsModal_form-input__6ikfY"};var l=s(742),r=s(204);const c={"modal-book-form":"BookCamperForm_modal-book-form__j5R-h","form-input":"BookCamperForm_form-input__c6dKY","order-form-submit":"BookCamperForm_order-form-submit__9006S"};var m=s(43),o=s(579);const d=()=>{const[e,a]=(0,m.useState)(""),[s,i]=(0,m.useState)(""),[t,l]=(0,m.useState)(""),[d,n]=(0,m.useState)(""),[p,h]=(0,m.useState)(!1),_=e=>{let{target:s}=e;const{name:t,value:r}=s;switch(t){case"name":a(r);break;case"email":i(r);break;case"booking_date":l(r);break;case"comment":n(r);break;default:return}};return p?(0,o.jsx)("div",{className:c["modal-book-form"],children:(0,o.jsx)("p",{className:c["order-form-success"],children:"Your request has been sent. We will contact you shortly."})}):(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h(!0),setTimeout((()=>{h(!1),a(""),i(""),l(""),n("")}),3e3)},className:c["modal-book-form"],children:[(0,o.jsxs)("fieldset",{children:[(0,o.jsx)("input",{className:c["form-input"],type:"text",id:"name",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,required:!0,onChange:_}),(0,o.jsx)("input",{className:c["form-input"],type:"email",id:"email",name:"email",placeholder:"Email",value:s,onChange:_,required:!0}),(0,o.jsx)("input",{className:c["form-input"],type:"date",id:"booking_date",name:"booking_date",placeholder:"Booking date",value:t,onChange:_,required:!0}),(0,o.jsx)("textarea",{className:c["form-input"],id:"comment",name:"comment",placeholder:"Comment",value:d,onChange:_,rows:"4"})]}),(0,o.jsx)(r.A,{type:"submit",className:c["order-form-submit"],children:"Send"})]})};var n=s(3),p=s(775),h=s(330),_=s(799);const v=()=>{const e=(0,n.d4)(p.Q8),a=(0,n.d4)(p.Pe),s=(0,n.d4)((0,p.hl)(a)),r=(0,n.wA)(),[c,v]=(0,m.useState)("features");(0,m.useEffect)((()=>{const e=e=>{"Escape"===e.key&&r((0,h.IF)())};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[r]),(0,m.useEffect)((()=>{v("features")}),[a]);const u=()=>{r((0,h.IF)())};return e?(0,o.jsx)("div",{className:t["modal-holder"],onClick:e=>{e.target.classList.contains(t["modal-holder"])&&u()},children:(0,o.jsxs)("div",{className:t.modal,children:[(0,o.jsxs)("div",{className:t["modal-camper-header"],children:[(0,o.jsxs)("div",{className:t["modal-camper-header-top"],children:[(0,o.jsx)("h2",{className:t["modal-camper-title"],children:s.name}),(0,o.jsx)("div",{className:t["modal-camper-head-actions"],children:(0,o.jsx)("svg",{onClick:u,width:"32",height:"32",className:t["modal-close"],children:(0,o.jsx)("use",{href:"/goit-test-task/icons.svg#close"})})})]}),(0,o.jsxs)("div",{className:t["modal-camper-sub-header"],children:[(0,o.jsxs)("span",{className:t["modal-camper-sub-header-badge"],children:[(0,o.jsx)("svg",{width:"16",height:"16",children:(0,o.jsx)("use",{href:"/goit-test-task/icons.svg#rateing"})}),(0,o.jsxs)("span",{className:"text-underline",children:[s.rating,"(",s.reviews.length," Reviews)"]})]}),(0,o.jsxs)("span",{className:t["modal-camper-sub-header-badge"],children:[(0,o.jsx)("svg",{width:"16",height:"16",children:(0,o.jsx)("use",{href:"/goit-test-task/icons.svg#map-pin"})}),s.location]})]}),(0,o.jsxs)("span",{className:t["camper-price"],children:["\u20ac",s.price.toFixed(2)]})]}),(0,o.jsx)("div",{className:t["modal-camper-gallery"],children:(0,o.jsx)("ul",{className:t["modal-camper-gallery-list"],children:s.gallery.slice(0,3).map(((e,a)=>(0,o.jsx)("li",{className:t["modal-camper-gallery-item"],children:(0,o.jsx)("img",{className:t["modal-camper-gallery-img"],src:e,alt:s.name})},a)))})}),(0,o.jsx)("div",{className:t["modal-camper-description"],children:(0,o.jsx)("p",{children:s.description})}),(0,o.jsxs)("ul",{className:t["modal-tabs-list"],children:[(0,o.jsx)("li",{className:(0,i.A)(t["modal-tab-nav"],"features"===c&&t.active),onClick:()=>v("features"),children:"Features"}),(0,o.jsx)("li",{className:(0,i.A)(t["modal-tab-nav"],"reviews"===c&&t.active),onClick:()=>v("reviews"),children:"Reviews"})]}),(0,o.jsxs)("div",{className:t["modal-details"],children:[(0,o.jsxs)("div",{className:t["modal-tabs"],children:[(0,o.jsxs)("div",{id:"features",className:(0,i.A)(t["modal-tab-content"],"features"===c&&t.active),children:[(0,o.jsx)("ul",{className:t["modal-camper-feature-list"],children:Object.keys(s.details).filter((e=>s.details[e])).map((e=>(0,o.jsx)(_.A,{slug:e,value:s.details[e]},e)))}),(0,o.jsxs)("div",{className:t["camper-vehicle-details"],children:[(0,o.jsx)("h3",{className:t["camper-vehicle-details-title"],children:"Vehicle details"}),(0,o.jsxs)("ul",{className:t["camper-vehicle-details-list"],children:[(0,o.jsxs)("li",{className:t["camper-vehicle-details-item"],children:[(0,o.jsx)("span",{className:t["camper-vehicle-details-item-title"],children:"Form"}),(0,o.jsx)("span",{className:t["camper-vehicle-details-item-value"],children:s.form})]}),(0,o.jsxs)("li",{className:t["camper-vehicle-details-item"],children:[(0,o.jsx)("span",{className:t["camper-vehicle-details-item-title"],children:"Length"}),(0,o.jsx)("span",{className:t["camper-vehicle-details-item-value"],children:s.length})]}),(0,o.jsxs)("li",{className:t["camper-vehicle-details-item"],children:[(0,o.jsx)("span",{className:t["camper-vehicle-details-item-title"],children:"Width"}),(0,o.jsx)("span",{className:t["camper-vehicle-details-item-value"],children:s.width})]}),(0,o.jsxs)("li",{className:t["camper-vehicle-details-item"],children:[(0,o.jsx)("span",{className:t["camper-vehicle-details-item-title"],children:"Height"}),(0,o.jsx)("span",{className:t["camper-vehicle-details-item-value"],children:s.height})]}),(0,o.jsxs)("li",{className:t["camper-vehicle-details-item"],children:[(0,o.jsx)("span",{className:t["camper-vehicle-details-item-title"],children:"Tank"}),(0,o.jsx)("span",{className:t["camper-vehicle-details-item-value"],children:s.tank})]}),(0,o.jsxs)("li",{className:t["camper-vehicle-details-item"],children:[(0,o.jsx)("span",{className:t["camper-vehicle-details-item-title"],children:"Consumption"}),(0,o.jsx)("span",{className:t["camper-vehicle-details-item-value"],children:s.consumption})]})]})]})]}),(0,o.jsx)("div",{id:"reviews",className:(0,i.A)(t["modal-tab-content"],"reviews"===c&&t.active),children:(0,o.jsx)(l.A,{reviews:s.reviews})})]}),(0,o.jsxs)("div",{className:t["modal-book-form-container"],children:[(0,o.jsx)("h2",{className:t["modal-title"],children:"Book your campervan now"}),(0,o.jsx)("p",{className:t["modal-sub-title"],children:"Stay connected! We are always ready to help you."}),(0,o.jsx)(d,{})]})]})]})}):null}},799:(e,a,s)=>{s.d(a,{A:()=>l});const i="CamperFeature_camper-feture-item__VpH4H";var t=s(579);const l=e=>{let{slug:a,value:s}=e;const l={airConditioner:{title:"Air conditioner",icon:"/goit-test-task/icons.svg#airconditioner"},bathroom:{title:"Bathroom",icon:"/goit-test-task/icons.svg#shower"},kitchen:{title:"Kitchen",icon:"/goit-test-task/icons.svg#fork-knife"},beds:{title:"Beds",icon:"/goit-test-task/icons.svg#beds"},TV:{title:"TV",icon:"/goit-test-task/icons.svg#tv"},CD:{title:"CD",icon:"/goit-test-task/icons.svg#cd"},radio:{title:"Radio",icon:"/goit-test-task/icons.svg#radio"},shower:{title:"Shower",icon:"/goit-test-task/icons.svg#shower"},toilet:{title:"Toilet",icon:"/goit-test-task/icons.svg#toilet-paper"},freezer:{title:"Freezer",icon:"/goit-test-task/icons.svg#freezer"},hob:{title:"Hob",icon:"/goit-test-task/icons.svg#hob"},microwave:{title:"Microwave",icon:"/goit-test-task/icons.svg#microwave"},gas:{title:"Gas",icon:"/goit-test-task/icons.svg#gas"},water:{title:"Water",icon:"/goit-test-task/icons.svg#water"}}[a];return(0,t.jsxs)("li",{className:i,children:[(0,t.jsx)("svg",{width:"20",height:"20",children:(0,t.jsx)("use",{href:l.icon})}),s," ",l.title]})}},850:(e,a,s)=>{s.d(a,{A:()=>_});var i=s(204);const t={camper:"CamperListItem_camper__e2LAk","camper-image":"CamperListItem_camper-image__gCR2g","camper-details":"CamperListItem_camper-details__hgtwg","camper-header-top":"CamperListItem_camper-header-top__-mTDS","camper-title":"CamperListItem_camper-title__Qi+vQ","camper-head-actions":"CamperListItem_camper-head-actions__+N6vr","camper-price":"CamperListItem_camper-price__+Qnp8","camper-add-favorites":"CamperListItem_camper-add-favorites__239C6","camper-sub-header":"CamperListItem_camper-sub-header__Hke7x","camper-sub-header-badge":"CamperListItem_camper-sub-header-badge__Dw5Zg","camper-description":"CamperListItem_camper-description__C5mhR","camper-feature-list":"CamperListItem_camper-feature-list__90Npv","camper-feture-item":"CamperListItem_camper-feture-item__sJw6V"};var l=s(775),r=s(3),c=s(144),m=s(330),o=s(799),d=s(579);const n=e=>{var a;let{_id:s,name:n,price:p,rating:h,reviews:_,location:v,description:u,gallery:g,details:x}=e;const j=(0,r.wA)(),N=null!==(a=g[0])&&void 0!==a?a:"https://ftp.goit.study/img/campers-test-task/1-1.webp",f=(0,r.d4)((0,l.jX)(s));return(0,d.jsxs)("li",{className:t.camper,children:[(0,d.jsx)("img",{className:t["camper-image"],src:N,alt:"Mavericks camper"}),(0,d.jsxs)("div",{className:t["camper-details"],children:[(0,d.jsxs)("div",{className:t["camper-header"],children:[(0,d.jsxs)("div",{className:t["camper-header-top"],children:[(0,d.jsx)("h2",{className:t["camper-title"],children:n}),(0,d.jsxs)("div",{className:t["camper-head-actions"],children:[(0,d.jsxs)("span",{className:t["camper-price"],children:["\u20ac",p.toFixed(2)]}),(0,d.jsx)("svg",{onClick:()=>{j(f?(0,c.Fy)(s):(0,c.Gm)(s))},width:"24",height:"24",className:t["camper-add-favorites"],children:(0,d.jsx)("use",{href:"/goit-test-task/icons.svg#"+(f?"heart-filled":"heart")})})]})]}),(0,d.jsxs)("div",{className:t["camper-sub-header"],children:[(0,d.jsxs)("span",{className:t["camper-sub-header-badge"],children:[(0,d.jsx)("svg",{width:"16",height:"16",children:(0,d.jsx)("use",{href:"/goit-test-task/icons.svg#rateing"})}),(0,d.jsxs)("span",{className:t["text-underline"],children:[h,"(",_.length," Reviews)"]})]}),(0,d.jsxs)("span",{className:t["camper-sub-header-badge"],children:[(0,d.jsx)("svg",{width:"16",height:"16",children:(0,d.jsx)("use",{href:"/goit-test-task/icons.svg#map-pin"})}),v]})]})]}),(0,d.jsx)("div",{className:t["camper-description"],children:(0,d.jsx)("p",{children:u})}),(0,d.jsx)("ul",{className:t["camper-feature-list"],children:Object.keys(x).filter((e=>x[e])).map((e=>(0,d.jsx)(o.A,{slug:e,value:x[e]},e)))}),(0,d.jsx)(i.A,{className:"camper-show-more",onClick:()=>{j((0,m.jO)(s))},children:"Show more"})]})]})},p="CampersList_campers-list__5erab";var h=s(495);const _=e=>{let{favorites:a=!1}=e;const s=(0,r.d4)(l.lY),i=(0,r.d4)(l.r7),t=(0,r.d4)(l.mu),c=(0,r.d4)(l.cq),m=a?i:s;return(0,d.jsxs)("ul",{className:p,children:[t&&(0,d.jsx)(h.A,{}),c&&(0,d.jsxs)("p",{children:["Error: ",c]}),m.map((e=>(0,d.jsx)(n,{...e},e._id))),0===m.length&&(0,d.jsx)("p",{children:"No campers found"})]})}},742:(e,a,s)=>{s.d(a,{A:()=>m});const i={"reviews-user-info":"ReviewsListItem_reviews-user-info__8Zds+","reviews-user-fl":"ReviewsListItem_reviews-user-fl__4oblI","reviews-user-rate-holder":"ReviewsListItem_reviews-user-rate-holder__0XAKf","reviews-user-name":"ReviewsListItem_reviews-user-name__SKmdb","reviews-rate-list":"ReviewsListItem_reviews-rate-list__EJF1-","reviews-list-item-text":"ReviewsListItem_reviews-list-item-text__vJ9vJ","reviews-list-item-horisontal":"ReviewsListItem_reviews-list-item-horisontal__rH4oC","reviews-list-item":"ReviewsListItem_reviews-list-item__jPoVD"};var t=s(579);const l=e=>{let{review:{reviewer_name:a,reviewer_rating:s,comment:l},horizontal:r=!1}=e;return(0,t.jsxs)("li",{className:r?i["reviews-list-item-horisontal"]:i["reviews-list-item"],children:[(0,t.jsxs)("div",{className:i["reviews-user-info"],children:[(0,t.jsx)("span",{className:i["reviews-user-fl"],children:a.slice(0,1).toUpperCase()}),(0,t.jsxs)("div",{className:i["reviews-user-rate-holder"],children:[(0,t.jsx)("span",{className:i["reviews-user-name"],children:a}),(0,t.jsx)("ul",{className:i["reviews-rate-list"],children:new Array(s).fill("").map(((e,a)=>(0,t.jsx)("li",{className:i["reviews-rate-list-item"],children:(0,t.jsx)("svg",{width:"16",height:"16",children:(0,t.jsx)("use",{href:"/goit-test-task/icons.svg#rateing"})})},a)))})]})]}),(0,t.jsx)("p",{className:i["reviews-list-item-text"],children:l})]})},r="ReviewsList_reviews-list__O+gxY",c="ReviewsList_reviews-list-horisontal__vvxis",m=e=>{let{horizontal:a=!1,reviews:s}=e;return(0,t.jsx)("ul",{className:a?c:r,children:s.map(((e,s)=>(0,t.jsx)(l,{horizontal:a,review:e},s)))})}},898:(e,a,s)=>{s.d(a,{A:()=>r});var i=s(516);const t="Section_section-title__Z3Kq1";var l=s(579);const r=e=>{let{title:a,children:s,id:r,className:c,outOfContainer:m=!1,containerClassName:o=""}=e;return(0,l.jsxs)("section",{id:r,className:c,children:[m&&(0,l.jsxs)(l.Fragment,{children:[a&&(0,l.jsx)("h2",{className:t,children:a}),s]}),!m&&(0,l.jsxs)(i.A,{className:o,children:[a&&(0,l.jsx)("h2",{className:t,children:a}),s]})]})}},775:(e,a,s)=>{s.d(a,{Nf:()=>v,Pe:()=>d,Q8:()=>o,cq:()=>r,hl:()=>c,jX:()=>m,lY:()=>_,mu:()=>l,r7:()=>p,wJ:()=>n});var i=s(99);const t=e=>e.ads.ads,l=e=>e.ads.isLoading,r=e=>e.ads.error,c=e=>a=>a.ads.ads.find((a=>a._id===e)),m=e=>a=>a.favorites.ids.includes(e),o=e=>e.detailsModal.isOpen,d=e=>e.detailsModal.id,n=e=>e.filter.showFirst,p=(0,i.Mz)([t,e=>e.favorites.ids],((e,a)=>e.filter((e=>a.includes(e._id))))),h=(0,i.Mz)([t,e=>e.filter],((e,a)=>{const{filter:{location:s,details:i,transmission:t,vanType:l}}=a;let r=e;return s.length>0&&(r=r.filter((e=>e.location.indexOf(s)>=0))),l.length>0&&(r=r.filter((e=>e.form===l))),i.length>0&&(r=r.filter((e=>i.every((a=>Object.keys(e.details).filter((a=>e.details[a])).includes(a)))))),t.length>0&&(r=r.filter((e=>e.transmission===t))),r})),_=(0,i.Mz)([h,n],((e,a)=>e.slice(0,a))),v=(0,i.Mz)([h],(e=>e.length))}}]);
//# sourceMappingURL=651.f97075c6.chunk.js.map