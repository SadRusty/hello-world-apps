(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=a(17),s=a.n(i),o=a(23),m=a(24),d=a(34),h=a(33),u=a(5),p=(a(111),function(e){var t=e.id,a=e.go,n=e.Prof,r=e.Sklad,c=e.fetchedUser;return l.a.createElement(u.h,{id:t},l.a.createElement(u.i,null,"Space Colonizator"),c&&l.a.createElement(u.d,{title:"User Data Fetched with VK Connect"},l.a.createElement(u.g,{before:c.photo_200?l.a.createElement(u.a,{src:c.photo_200}):null,description:c.city&&c.city.title?c.city.title:""},"".concat(c.first_name," ").concat(c.last_name))),l.a.createElement(u.d,{title:"Navigation Example"},l.a.createElement(u.c,{style:{display:"flex"}},l.a.createElement(u.b,{size:"l",mode:"Primary",stretched:!0,style:{marginRight:8},onClick:n},"\ud83d\udc64\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(u.b,{size:"l",mode:"Primary",stretched:!0,style:{marginLeft:8},onClick:r},"\ud83d\udef0\u0421\u0442\u0430\u043d\u0446\u0438\u044f")),l.a.createElement(u.c,{style:{display:"flex"}},l.a.createElement(u.b,{size:"l",mode:"Primary",stretched:!0,style:{marginRight:8}},"\ud83c\udf0d\u041a\u043e\u043b\u043e\u043d\u0438\u044f")),l.a.createElement(u.c,{style:{display:"flex"}},l.a.createElement(u.b,{size:"l",mode:"Primary",stretched:!0,style:{marginRight:8}},"\ud83c\udfea\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),l.a.createElement(u.b,{size:"l",mode:"Primary",stretched:!0,style:{marginRight:8}},"\ud83d\udce6\u0421\u043a\u043b\u0430\u0434\u044b")),l.a.createElement(u.c,null,l.a.createElement(u.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))))}),f=a(30),E=a.n(f),y=(a(112),a(31)),g=a.n(y),b=a(32),k=a.n(b),v=Object(u.k)(),P=function(e){return l.a.createElement(u.h,{id:e.id},l.a.createElement(u.i,{left:l.a.createElement(u.e,{onClick:e.go,"data-to":"home"},v===u.f?l.a.createElement(g.a,null):l.a.createElement(k.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}))},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}})),s.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(u.j,{activePanel:this.state.activePanel},l.a.createElement(p,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),l.a.createElement(P,{id:"persik",go:this.go}))}}]),a}(l.a.Component);s.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(C,null),document.getElementById("root"))},30:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},96:function(e,t,a){e.exports=a(113)}},[[96,1,2]]]);
//# sourceMappingURL=main.87d3aeb6.chunk.js.map