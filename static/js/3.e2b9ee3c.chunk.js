"use strict";(self.webpackChunkproject_tracker=self.webpackChunkproject_tracker||[]).push([[3],{220:function(n,e,r){r.d(e,{F:function(){return c}});var t,o=r(168),i=r(6444),a=r(1087),c=(0,i.ZP)(a.rU)(t||(t=(0,o.Z)(["\n  margin-right: 10px;\n  border-radius: 5px;\n  padding: 8px 12px;\n  background-color: #E0E0E0;\n  background-image: linear-gradient(to bottom right, #FBF0F0, #DFD3D3, #B8B0B0, #7C7575);\n  text-decoration: none;\n  &:visited {\n    color: #212121;\n  }\n"])))},5504:function(n,e,r){r.d(e,{f:function(){return i}});var t,o=r(168),i=r(6444).ZP.span(t||(t=(0,o.Z)(["\n  display: inline-block;\n  color: #ECEFF1;\n  background-color: #757575;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 10px 5px;\n  flex-basis: 10%;\n  max-height: 40px;\n"])))},8003:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,o,i,a,c,l=r(3433),d=r(9439),s=r(7689),p=r(2791),u=r(220),x=r(168),g=r(6444),f=g.ZP.input(t||(t=(0,x.Z)(["\n    background-color: rgba(66, 66, 66, 0.5);\n    border-radius: 3px;\n    border: none;\n    outline: none;\n    padding: 10px 15px;\n    color: #ECEFF1;\n    font-size: 15px;\n    transition: border .1s;\n    width: 100%;\n    margin-bottom: 15px;\n  \n    &:focus {\n      border: 1px solid #ECEFF1;\n    }\n"]))),h=g.ZP.div(o||(o=(0,x.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 30px;\n"]))),b=g.ZP.textarea(i||(i=(0,x.Z)(["\n    background-color: rgba(66, 66, 66, 0.5);\n    border-radius: 3px;\n    border: none;\n    outline: none;\n    padding: 10px 15px;\n    color: #ECEFF1;\n    font-size: 15px;\n    transition: border .1s;\n    width: 100%;\n    margin-bottom: 15px;\n    \n    &:focus {\n      border: 1px solid #ECEFF1;\n    }\n"]))),j=g.ZP.button(a||(a=(0,x.Z)(["\n    padding: 10px 0;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n    background-image: linear-gradient(to bottom right, #ffedd8, #f3d5b5, #e7bc91, #d4a276, #583101);\n    font-size: 15px;\n    font-weight: 600;\n    margin-top: 35px;\n"]))),m=r(5504),v=g.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 400px;\n  height: 130px;\n  overflow: scroll;\n"]))),Z=r(1830),F=r.n(Z),k=r(184),w=function(){document.title="New Project";var n=(0,s.s0)(),e=(0,p.useState)(""),r=(0,d.Z)(e,2),t=r[0],o=r[1],i=(0,p.useState)(""),a=(0,d.Z)(i,2),c=a[0],x=a[1],g=(0,p.useState)(""),Z=(0,d.Z)(g,2),w=Z[0],E=Z[1],C=(0,p.useState)([]),y=(0,d.Z)(C,2),P=y[0],S=y[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.F,{to:"/",onClick:function(e){e.preventDefault(),n("/")},children:"Home Page"}),(0,k.jsxs)(h,{children:[(0,k.jsx)("label",{children:"Enter project name"}),(0,k.jsx)(f,{onChange:function(n){o(n.target.value)},value:t}),(0,k.jsx)("label",{children:"Enter project description"}),(0,k.jsx)(b,{style:{resize:"none"},onChange:function(n){x(n.target.value)},value:c}),(0,k.jsx)("label",{children:"Enter technologies that you will use"}),(0,k.jsxs)("span",{children:[(0,k.jsx)(f,{onChange:function(n){E(n.target.value)},style:{width:"80%"},value:w}),(0,k.jsx)(j,{style:{marginTop:"0",width:"12%"},onClick:function(n){n.preventDefault(),""!==w&&S([].concat((0,l.Z)(P),[w])),E("")},children:"+"}),(0,k.jsx)(v,{children:P.map((function(n,e){return(0,k.jsxs)(m.f,{children:["#",n]},e)}))})]}),(0,k.jsx)(j,{onClick:function(n){var e=localStorage.getItem("project");if(""===t||""===c||0===P.length)F().fire({icon:"error",title:"Oops...",text:"You should fill in all inputs!"});else{var r=JSON.parse(localStorage.getItem("project")||"{}")?JSON.parse(null!==e&&void 0!==e?e:""):[],i=Array.from(r),a=[].concat(i,[{title:t,description:c,techArray:P}]);localStorage.setItem("project",JSON.stringify(a)),F().fire({icon:"success",title:"Your project has been added!",text:"Now you can find it in the lists section"}),o(""),x(""),S([])}},children:"Add Your Project"})]})]})}}}]);
//# sourceMappingURL=3.e2b9ee3c.chunk.js.map