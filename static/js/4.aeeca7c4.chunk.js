(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{330:function(e,r,t){e.exports={container:"Users_container__a50dK",page_wrap:"Users_page_wrap__2C-KE",content:"Users_content__2toJf",contentArea:"Users_contentArea__rZi7g",contentArea_wrap:"Users_contentArea_wrap__wsSnq",content_head:"Users_content_head__3K85y",btn_b:"Users_btn_b__1s1Es",selected:"Users_selected__2CxVH",form_group:"Users_form_group__nSjyn",errorSubmit:"Users_errorSubmit__Njrlz",sectionHeader:"Users_sectionHeader__3g8dg",secondary:"Users_secondary__8eWcm",sticker:"Users_sticker__AbI-j",usersWrap:"Users_usersWrap__1plbe",user:"Users_user__1d1r4",avatar:"Users_avatar__18St8",userInfo:"Users_userInfo__1yNR7",userName:"Users_userName__1LWus",location:"Users_location__1oCXG",status:"Users_status__3YYxM",followWrap:"Users_followWrap__1T0La",showMoreWrap:"Users_showMoreWrap__37sh6"}},334:function(e,r,t){"use strict";t.r(r);var n=t(23),a=t(24),s=t(27),o=t(25),l=t(26),u=t(0),c=t.n(u),i=t(10),p=t(330),f=t.n(p),_=t(56),g=t(106),m=t.n(g),h=t(12),d=t(35),w=function(e){var r=e.u,t=e.follow,n=e.unfollow;Object(_.a)(e,["u","follow","unfollow"]);return c.a.createElement("div",{className:f.a.user,key:r.id},c.a.createElement(h.b,{to:"/profile/"+r.id,className:f.a.avatar},c.a.createElement("img",{src:null!=r.photos.small?r.photos.small:m.a,alt:"avatar"})),c.a.createElement("div",{className:f.a.userInfo},c.a.createElement(h.b,{to:"/profile/"+r.id,className:f.a.userName},r.name),c.a.createElement("p",{className:f.a.location},"Kyiv, Ukraine"),c.a.createElement("p",{className:f.a.status},r.status)),c.a.createElement("div",{className:f.a.followWrap},r.followed?c.a.createElement("a",{href:"#",className:"".concat(f.a.btn_b," ").concat(f.a.selected),onClick:function(e){e.preventDefault(),n(r.id)}},"Unfollow"):c.a.createElement("a",{href:"#",className:f.a.btn_b,onClick:function(e){e.preventDefault(),t(r.id)}},"Follow")))},v=c.a.memo(function(e){return c.a.createElement("div",{className:f.a.content},c.a.createElement("div",{className:f.a.contentArea},c.a.createElement("div",{className:f.a.sectionHeader},c.a.createElement("h2",null,"Users"),c.a.createElement("p",{className:f.a.secondary},e.usersCount)),c.a.createElement("div",{className:f.a.usersWrap},e.users.map(function(r){return c.a.createElement(w,{u:r,follow:e.follow,unfollow:e.unfollow,props:e,key:r.id})}))),e.currentPage!==e.usersPages&&c.a.createElement("div",{className:f.a.showMoreWrap},e.isFetching?c.a.createElement(d.a,{inner:!0,center:!0,noBg:!0}):c.a.createElement("a",{href:"#",className:"".concat(f.a.btn_b," ").concat(f.a.selected),onClick:function(r){r.preventDefault(),e.onPageChange(e.currentPage+1)}},"Load more")))}),b=t(145),U=t(107),P=t(8);function E(e,r){return e===r}var y=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return function(){for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];var s=0,o=n.pop(),l=function(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every(function(e){return"function"===typeof e})){var t=r.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return r}(n),u=e.apply(void 0,[function(){return s++,o.apply(null,arguments)}].concat(t)),c=e(function(){for(var e=[],r=l.length,t=0;t<r;t++)e.push(l[t].apply(null,arguments));return u.apply(null,e)});return c.resultFunc=o,c.dependencies=l,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,t=null,n=null;return function(){return function(e,r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var n=r.length,a=0;a<n;a++)if(!e(r[a],t[a]))return!1;return!0}(r,t,arguments)||(n=e.apply(null,arguments)),t=arguments,n}});var N=y(function(e){return e.usersPage.users},function(e){return e}),C=function(e){return e.usersPage.totalCount},F=function(e){return e.usersPage.perPage},j=function(e){return Math.ceil(e.usersPage.totalCount/e.usersPage.perPage)},k=function(e){return e.usersPage.currentPage},W=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.isFollowing},O=function(e){function r(e){var t;return Object(n.a)(this,r),(t=Object(s.a)(this,Object(o.a)(r).call(this,e))).onPageChange=function(e){t.props.getUsers(t.props.perPage,e)},t}return Object(l.a)(r,e),Object(a.a)(r,[{key:"componentDidMount",value:function(){0===this.props.users.length&&this.props.getUsers(this.props.perPage,1)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFollowing&&c.a.createElement(d.a,null),c.a.createElement(v,{users:this.props.users,usersCount:this.props.usersCount,currentPage:this.props.currentPage,usersPages:this.props.usersPages,follow:this.props.follow,unfollow:this.props.unfollow,onPageChange:this.onPageChange,toggleIsFetching:this.props.toggleIsFetching,isFetching:this.props.isFetching,isFollowing:this.props.isFollowing}))}}]),r}(c.a.Component);r.default=Object(P.d)(Object(i.b)(function(e){return{users:N(e),usersCount:C(e),perPage:F(e),usersPages:j(e),currentPage:k(e),isFetching:W(e),isFollowing:A(e)}},{follow:b.b,unfollow:b.g,setUsers:b.f,setCurrentPage:b.d,setTotalCount:b.e,getUsers:b.c}),U.a)(O)}}]);
//# sourceMappingURL=4.aeeca7c4.chunk.js.map