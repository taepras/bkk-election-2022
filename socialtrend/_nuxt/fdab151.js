(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{485:function(t,e,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("4bf29662",content,!0,{sourceMap:!1})},503:function(t,e,n){"use strict";n(485)},504:function(t,e,n){var r=n(42)((function(i){return i[1]}));r.push([t.i,'.line-chart-race[data-v-0f4c7de9]{width:100%;height:100%;position:relative}.tooltip-wrapper[data-v-0f4c7de9]{position:absolute;top:50%;transform:translateY(-50%);z-index:10;transition:all .2s;pointer-events:none}.tooltip-wrapper .tooltip[data-v-0f4c7de9]{background:rgba(0,0,0,.8);border:1px solid hsla(0,0%,100%,.2);border-radius:5px;color:#fff;padding:18px;min-width:170px}.tooltip-wrapper .tooltip .title[data-v-0f4c7de9]{font-weight:700}.tooltip-wrapper .tooltip .data-list[data-v-0f4c7de9]{width:100%;display:flex;align-items:center;justify-content:space-between;margin-top:10px}svg[data-v-0f4c7de9]{width:100%;height:100%}svg[data-v-0f4c7de9]  .x-axis .tick text,svg[data-v-0f4c7de9]  .y-axis .tick text{font-family:"Anuphan";font-style:normal;font-weight:400;font-size:12px;fill:#fff}svg[data-v-0f4c7de9]  .x-axis .domain{stroke:#fff}svg[data-v-0f4c7de9]  .x-axis .tick line{display:none}svg[data-v-0f4c7de9]  .x-axis .tick:first-of-type text{text-anchor:start}svg[data-v-0f4c7de9]  .x-axis .tick:last-of-type text{text-anchor:end}svg[data-v-0f4c7de9]  .y-axis .domain{display:none}svg[data-v-0f4c7de9]  .y-axis .tick text{text-anchor:start}svg[data-v-0f4c7de9]  .y-axis .tick line{stroke:#373746}svg[data-v-0f4c7de9]  .y-axis .tick .line-tick{stroke:#fff}text[data-v-0f4c7de9]{font-family:Prompt}.line-group[data-v-0f4c7de9]{transition:all .3s}.line-group.not-active[data-v-0f4c7de9]{opacity:.1}.checks[data-v-0f4c7de9]{cursor:pointer}.legend-wrapper[data-v-0f4c7de9]{margin-top:14px}.legend-wrapper .legend[data-v-0f4c7de9]{max-height:260px;display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap;margin:0 -8px}.legend-wrapper .legend-group.not-active[data-v-0f4c7de9]{opacity:.3}.legend-wrapper .legend-group[data-v-0f4c7de9]{min-width:270px;cursor:default;padding:5px 8px;transition:all .3s}.legend-wrapper .legend-group>span[data-v-0f4c7de9]{max-width:100%;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:flex}.legend-wrapper .legend-group .circle[data-v-0f4c7de9]{flex:0 0 auto;width:25px;height:25px;border-radius:20px}.legend-wrapper .legend-group .label[data-v-0f4c7de9]{flex:1;padding:0 0 0 8px}.fade-enter-active[data-v-0f4c7de9],.fade-leave-active[data-v-0f4c7de9]{transition:opacity .2s}.fade-enter[data-v-0f4c7de9],.fade-leave-to[data-v-0f4c7de9]{opacity:0}',""]),r.locals={},t.exports=r},506:function(t,e,n){"use strict";n.r(e);n(26),n(57),n(58);var r=n(4),c=n(20),o=(n(56),n(519),n(31),n(501),n(520),n(44),n(30),n(502)),l=n.n(o),d=n(505),f=n(0),h=n.n(f),v=n(521),m=n.n(v);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={props:{dataSet:{type:Array,default:function(){return[]}},color:{type:Function,default:function(){}},photo:{type:Function,default:function(){}},animate:{type:Boolean,default:!1},activeChart:{type:null,default:""},stackedBarChart:{type:Array,default:function(){return[]}},type:{type:String,default:"engagement"},duration:{type:Number,default:2e4}},data:function(){return{width:1e3,height:520,step:8,left_tooltip:0,hover:"",active:"",candidates:[],animate_finish:!1,animate_start:!1,margin:{top:30,left:30,right:30,bottom:30}}},computed:{innerWidth:function(){return this.width-this.margin.left-this.margin.right},innerHeight:function(){return this.height-this.margin.top-this.margin.bottom},formatThousands:function(){return d.f(",")},candidate_group:function(){var t=l.a.groupBy(this.dataSet,"candidate");return Object.keys(t)},yAxis_group:function(){var t=l.a.groupBy(this.dataSet,"date");return Object.keys(t)},check_width:function(){var t=this.yAxis_group.length;return(this.width-this.margin.left-this.margin.right)/(t-1)},line:function(){var t=this;return d.g().x((function(e){return t.xScale(e.date)})).y((function(e){return t.yScale(e.value)}))},xScale:function(){return d.l().domain(this.yAxis_group).range([this.margin.left,this.width-this.margin.right])},xAxis:function(){var t=this.yAxis_group.length,e=d.a(this.xScale).tickFormat((function(t){return h()(t).add(543,"years").format("DD MMM YY")})).ticks(t).tickSize(1).tickPadding(12);return"engagement"===this.type&&(e=e.tickValues(d.e(this.dataSet,(function(t){return t.date})))),e},yScale:function(){var t=d.h(this.dataSet,(function(t){return t.value}));return d.j().domain([0,t]).range([this.height-this.margin.bottom,this.margin.top]).nice()},yAxis:function(){var t=this,e=9,n=function(e){return t.formatkilo(e)};if("rank"===this.type){var r=l.a.groupBy(this.dataSet,"candidate"),c=Object.keys(r);e=c.length,n=function(t){return 0===t?t:c.length+1-t}}return d.b(this.yScale).tickFormat(n).ticks(e).tickSize(-this.innerWidth).tickPadding(6)},stackedScale:function(){var t=l.a.get(window,"clientWidth",0),e=d.h(this.dataSet,(function(t){return t.value}));return d.j().domain([0,e]).range([0,t])},transitionPath:function(){return d.o().ease(d.d).duration(this.duration)},ready:function(){return this.animate&&0!==this.candidates},active_data:function(){var t=this,e=this.hover||this.active,n=[],r="engagement"===this.type?"desc":"asc";return this.candidates.forEach((function(r){var c=l.a.get(r,"data",[]).find((function(t){return t.date===e}));if(c){var o=l.a.pick(c,["candidate","value"]);n.push(x(x({},o),{},{color:r.color,value_str:t.formatkilo(o.value)}))}})),{date_display:this.dateDisplay(e),date:e,candidates:l.a.orderBy(n,"value",r)}}},watch:{hover:{handler:function(){this.leftTooltip()},immediate:!0},ready:{handler:function(t){var e=this;t&&this.$nextTick((function(){e.animateStart()}))},immediate:!0},animate_finish:function(t){t&&!this.animate_start&&(this.animate_start=!0)},activeChart:function(t){this.onClickChecks(t)}},beforeMount:function(){window.addEventListener("resize",this.resizeHandler)},destroyed:function(){window.removeEventListener("resize",this.resizeHandler)},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var svg,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.resizeHandler(),e.next=3,t.setDataGroupCandidate();case 3:(svg=d.m("svg")).select(".axis-group").append("g").attr("class","y-axis").attr("transform","translate(".concat(t.margin.left,", 0)")).call(t.yAxis).call((function(t){t.selectAll(".tick").append("line").attr("class","line-tick").attr("x2",7)})).call((function(t){t.selectAll(".tick text").style("text-anchor","start").attr("x",-26)})),svg.select(".axis-group").append("g").attr("class","x-axis").attr("transform","translate(0, ".concat(t.height-t.margin.top,")")).call(t.xAxis),n=d.n(".line-path").data(t.candidates),d.n(".labels-group").data(t.candidates),n.selectAll(".line").each((function(){var select=d.m(this),t=select.node().getTotalLength();select.attr("stroke-dashoffset",t).attr("stroke-dasharray",t)}));case 10:case"end":return e.stop()}}),e)})))()},methods:{resizeHandler:function(){this.width=this.$refs.container.clientWidth,this.height=this.$refs.container.clientHeight},animateStart:function(){this.setAnimatePathLabel(),this.setAnimatePathLine()},formatkilo:function(t){return m()(t).format("0 a")},dateDisplay:function(t){return h()(t).add(543,"years").format("DD MMM YY")},dateFormat:function(t){return h()(t).format("yyyy-MM-DD")},handleActiveLegend:function(t){l.a.isEqual(this.active,t)?this.active="":this.active=t},leftTooltip:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=30+t.margin.left,r=t.hover||t.active,c=t.xScale(r)-n,e.next=5,t.$nextTick();case 5:if(o=t.$refs.tooltip){e.next=8;break}return e.abrupt("return");case 8:l=o.clientWidth,c=c-l<-20?n:c-l+t.margin.left,t.left_tooltip=c;case 11:case"end":return e.stop()}}),e)})))()},setAnimatePathLine:function(){var t=this;d.n(".line-path").selectAll(".line").each((function(){d.m(this).transition(t.transitionPath).delay(1e3).attr("stroke-dashoffset",0)}))},setAnimatePathLabel:function(){var t=this,e=d.n(".labels-group");this.animate_finish=!1,setTimeout((function(){e.call((function(){e.each((function(g,i){var e=this;d.m(this).call((function(){var n=0,data=l.a.get(g,"data",[]),r=data.length;!function animate(){var c=l.a.get(data,"[".concat(n,"]"),{}),time=c.time;d.m(e).select(".labels").transition().delay(time).duration(400).ease(d.c).attr("transform","scale(".concat(c.highest_per_date?1.7:1,")")),d.m(e).transition().duration(time).ease(d.d).attr("transform","translate(".concat(t.xScale(c.date),",").concat(t.yScale(c.value),")")).on("end",(function(){n<r?animate():t.animate_finish=!0})),n++}()}))}))}))}),1e3)},handleHover:function(t){d.m(t).moveToFront()},min:function(data){return d.i(data,(function(t){return t.value}))},calDistance:function(data,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"forward",n="forward"===e?-1:1,r=l.a.get(data,"[".concat(t+n,"]"),{}),c=l.a.get(data,"[".concat(t,"]"),{});if(l.a.isEmpty(r))return 0;var o=this.xScale(r.date)-this.xScale(c.date),d=this.yScale(r.value)-this.yScale(c.value);return Math.hypot(o,d)||0},setDataGroupCandidate:function(){var t=this,e=function(data){var e=data.map((function(e,n){var r=t.calDistance(data,n,"forward"),c=t.calDistance(data,n,"black");return x(x({},e),{},{distance:r,distanceBk:c})})),n=e.reduce((function(t,e){return t+e.distance}),0);return e.map((function(e){var time=t.duration*e.distance/n,r=t.duration*e.distanceBk/n;return x(x({},e),{},{time:time,timeBk:r,pathLength:n})}))},n=[],r=l.a.groupBy(this.dataSet,"candidate");for(var c in r){var o=l.a.get(r,c,[]),data=e(o);n.push({candidate:c,min:d.i(o,(function(t){return t.value})),max:d.h(o,(function(t){return t.value})),highest_per_date:l.a.get(data,"[0].highest_per_date"),color:this.color(c),data:data})}this.candidates=n,console.log(n)},checksEvent:l.a.throttle((function(t){this.hover=t}),150),sumRangeTimeData:function(){var t=this,data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return data.filter((function(e){return t.handleCondition(e)})).reduce((function(t,e){return t+e.time}),0)},onClickChecks:function(t){var e=this;this.active=t,this.$emit("change",this.active_data),this.$emit("update:activeChart",t);var n=d.n(".labels-group").data(this.candidates);n.transition().duration(600).attr("transform",(function(n){var r=n.data.find((function(e){return e.date===t}))||{};return"translate(".concat(e.xScale(r.date),",").concat(e.yScale(r.value),")")})),n.select(".labels").transition().duration(400).ease(d.c).attr("transform",(function(e){var n=e.data.find((function(e){return e.date===t}))||{};return"scale(".concat(n.highest_per_date?1.7:1,")")}))}}},_=k,w=(n(503),n(50)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line-chart-race"},[n("transition",{attrs:{name:"fade"}},[t.hover||t.active?n("div",{ref:"tooltip",staticClass:"tooltip-wrapper",style:"left: "+t.left_tooltip+"px"},[n("div",{staticClass:"tooltip typo-b5"},[n("div",{staticClass:"title"},[t._v(t._s(t.active_data.date_display))]),t._v(" "),t._l(t.active_data.candidates,(function(e,r){return n("div",{key:r,staticClass:"data-list"},[n("div",{staticClass:"name pr-4"},[t._v(t._s(e.candidate))]),t._v(" "),n("div",{staticClass:"value",style:"color: "+e.color},[t._v("\n            "+t._s(e.value_str)+"\n          ")])])}))],2)]):t._e()]),t._v(" "),n("svg",{ref:"container"},[n("g",{staticClass:"axis-group"}),t._v(" "),t._l(t.yAxis_group,(function(e,r){return n("g",{key:r,staticClass:"checks",attrs:{transform:"translate("+(t.xScale(e)-t.check_width/2)+", 0)"}},[n("g",{style:{opacity:t.hover===e||t.active===e&&!t.hover?1:0}},[n("line",{staticStyle:{transition:"'all 0.2s'"},attrs:{x1:t.check_width/2,x2:t.check_width/2,y1:t.margin.top,y2:t.height-t.margin.bottom,stroke:"#e0e1e1"}})])])})),t._v(" "),n("g",{staticClass:"y-axis-line"}),t._v(" "),n("g",{staticClass:"g-lines"},t._l(t.candidates,(function(e){return n("g",{key:"line-"+e.candidate,staticClass:"line-group"},[n("circle",{attrs:{fill:e.color,cx:t.margin.left,cy:t.yScale(e.data[0].value),r:"4"}}),t._v(" "),t._l(e.data,(function(r,c){return n("circle",{key:c,style:"opacity: "+(t.hover===r.date||c===e.data.length-1&&t.animate_start?"1":"0"),attrs:{fill:e.color,cx:t.xScale(r.date),cy:t.yScale(r.value),r:"4"}})})),t._v(" "),n("g",{staticClass:"line-path"},[n("path",{staticClass:"line",attrs:{d:t.line(e.data),fill:"none",stroke:e.color,"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"4"}})])],2)})),0),t._v(" "),n("g",{staticClass:"g-labels"},t._l(t.candidates,(function(e){return n("g",{key:"labels-"+e.candidate,staticClass:"labels-group",attrs:{transform:"translate("+t.xScale((e.data||{})[0].date)+","+t.yScale((e.data||{})[0].value)+")"}},[n("g",{staticClass:"labels",attrs:{transform:"scale("+(e.highest_per_date?1.7:1)+")"}},[n("clipPath",{attrs:{id:"clip-"+e.candidate}},[n("use",{attrs:{"xlink:href":"#circle-"+e.candidate}})]),t._v(" "),n("circle",{staticClass:"circle",attrs:{id:"circle-"+e.candidate,r:"mobile"===t.$mq?6.5:12,fill:e.color,stroke:e.color,"stroke-width":4}}),t._v(" "),n("image",{staticClass:"image",attrs:{href:t.photo(e.candidate),height:"mobile"===t.$mq?13:24,width:"mobile"===t.$mq?13:24,x:"mobile"===t.$mq?-6.5:-12,y:"mobile"===t.$mq?-6.5:-12,"clip-path":"url(#clip-"+e.candidate+")"}})])])})),0),t._v(" "),n("g",{staticClass:"checks-group",on:{mouseleave:function(e){t.hover=""}}},t._l(t.yAxis_group,(function(e,r){return n("g",{key:r,staticClass:"checks",attrs:{transform:"translate("+(t.xScale(e)-t.check_width/2)+", 0)"},on:{click:function(n){t.animate_finish&&t.onClickChecks(e)},mouseover:function(n){return t.checksEvent(e)}}},[n("rect",{staticClass:"check-rect",staticStyle:{"pointer-events":"all"},attrs:{x:0,y:t.margin.top,height:t.height-t.margin.bottom,fill:"none",width:t.check_width}})])})),0)],2)],1)}),[],!1,null,"0f4c7de9",null);e.default=component.exports}}]);