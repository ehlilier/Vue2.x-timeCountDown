webpackJsonp([1],{0:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("7+uW"),a=n("Xxa5"),i=n.n(a),s=n("exGp"),u=n.n(s),c=n("//Fk"),p=n.n(c),m=n("pFYg"),d=n.n(m),h=n("mvHQ"),f=n.n(h),l=n("fZjL"),v=n.n(l),b=this,w=(r=u()(i.a.mark(function e(){var t,n,r,o,a,s,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},m=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=u.toUpperCase(),c=""+c,"GET"==u&&(t="",v()(p).forEach(function(e){t+=e+"="+p[e]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),c=c+"?"+t)),!window.fetch||"fetch"!=m){e.next=21;break}return n={credentials:"include",method:u,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"},"POST"==u&&Object.defineProperty(n,"body",{value:f()(p)}),e.prev=6,e.next=9,fetch(c,n);case 9:return r=e.sent,e.next=12,r.json();case 12:o=e.sent,e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(6),new Error(e.t0);case 18:return e.abrupt("return",o);case 21:a=void 0,a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,s="","POST"==u&&(s=f()(p)),a.open(u,c,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(s),a.onreadystatechange=function(){if(4==a.readyState){if(200==a.status){var e=a.response;return"object"!==(void 0===e?"undefined":d()(e))&&(e=JSON.parse(e)),e}throw new Error(a)}};case 29:case"end":return e.stop()}},e,b,[[6,15]])})),{validate_token:"cd8f6585f98d503935bd175295b37ae621c0bf06949a46c226125f28d8efd0a9"}),g={message:"请检查手机号码格式是否有误",name:"VALIDATION_FAILED"},x=function(e){return new p.a(function(t,n){t(e)})},N={name:"timeCountDowner",data:function(){return{computedTime:0,wrongPhoneFormat:!1}},props:{textValue:{type:String,default:""},second:{type:Number,default:60},phoneNumber:{type:String}},computed:{rightPhoneNumber:function(){var e=/^1\d{10}$/gi.test(this.phoneNumber);return this.phoneNumber&&!e?this.wrongPhoneFormat=!0:this.wrongPhoneFormat=!1,e},computedMessage:function(){return this.textValue.replace(/\$\{second\}/g,this.computedTime)}},methods:{getVerifiedCode:function(){var e=this;return u()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.rightPhoneNumber){t.next=17;break}return e.setTimer(),t.next=4,e.phoneNumber,x(g);case 4:if(!(n=t.sent).message){t.next=14;break}return t.next=8,e.phoneNumber,x(w);case 8:if(!t.sent.message){t.next=11;break}return t.abrupt("return");case 11:return t.abrupt("return");case 14:if(n.is_exists){t.next=17;break}return e.computedTime=0,t.abrupt("return");case 17:case"end":return t.stop()}},t,e)}))()},setTimer:function(){var e=this;this.computedTime=this.second,this.timer=function(){e.computedTime>0&&(e.computedTime--,setTimeout(e.timer,1e3))},this.timer()}},destroyed:function(){}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timerBtn"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:!e.computedTime,expression:"!computedTime"}],class:{right_phone_number:e.rightPhoneNumber,wrong_phone_format:e.wrongPhoneFormat},on:{click:function(t){t.preventDefault(),e.getVerifiedCode(t)}}},[e._v("获取验证码")]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.computedTime,expression:"computedTime"}],staticClass:"compute_time"},[e._v(e._s(e.computedMessage))])])},staticRenderFns:[]};var _={data:function(){return{phoneNumber:null}},components:{timeCountDowner:n("VU/8")(N,T,!1,function(e){n("lUm0")},"data-v-34793928",null).exports},methods:{unMount:function(){this.$refs.timeCountDowner.$destroy()}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"input_phoneNum",attrs:{type:"text",placeholder:"手机号",required:"",maxlength:"11"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),e._v(" "),n("time-count-downer",{ref:"timeCountDowner",attrs:{"phone-number":e.phoneNumber,second:60,"text-value":"${second}s后可再次发送"}})],1)},staticRenderFns:[]};var k=n("VU/8")(_,y,!1,function(e){n("izQ2")},null,null).exports,P=n("8+8L");o.a.use(P.a),o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:k},template:"<App/>"})},izQ2:function(e,t){},lUm0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.826cd68961228b5f539e.js.map