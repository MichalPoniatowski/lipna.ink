import{G as B,j as u,r as S}from"./index-wDaf91uT.js";import{S as ee,P as te,a as ne}from"./pagination-_p5IdvvV.js";import{a as ae,t as re,R as ie}from"./Toasts-npyUh_9k.js";const oe="_reviewsBgr_1dy4m_1",se={reviewsBgr:oe};function w(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function P(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const Q=6048e5,ce=864e5;let ue={};function T(){return ue}function M(e,n){var s,d,l,h;const t=T(),a=(n==null?void 0:n.weekStartsOn)??((d=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:d.weekStartsOn)??t.weekStartsOn??((h=(l=t.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??0,r=w(e),i=r.getDay(),o=(i<a?7:0)+i-a;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function j(e){return M(e,{weekStartsOn:1})}function J(e){const n=w(e),t=n.getFullYear(),a=P(e,0);a.setFullYear(t+1,0,4),a.setHours(0,0,0,0);const r=j(a),i=P(e,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const o=j(i);return n.getTime()>=r.getTime()?t+1:n.getTime()>=o.getTime()?t:t-1}function _(e){const n=w(e);return n.setHours(0,0,0,0),n}function $(e){const n=w(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function de(e,n){const t=_(e),a=_(n),r=+t-$(t),i=+a-$(a);return Math.round((r-i)/ce)}function le(e){const n=J(e),t=P(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),j(t)}function me(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function he(e){if(!me(e)&&typeof e!="number")return!1;const n=w(e);return!isNaN(Number(n))}function fe(e){const n=w(e),t=P(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const we={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ge=(e,n,t)=>{let a;const r=we[e];return typeof r=="string"?a=r:n===1?a=r.one:a=r.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+a:a+" ago":a};function W(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const ye={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},pe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},be={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ke={date:W({formats:ye,defaultWidth:"full"}),time:W({formats:pe,defaultWidth:"full"}),dateTime:W({formats:be,defaultWidth:"full"})},ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Pe=(e,n,t,a)=>ve[e];function g(e){return(n,t)=>{const a=t!=null&&t.context?String(t.context):"standalone";let r;if(a==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):o;r=e.formattingValues[s]||e.formattingValues[o]}else{const o=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[s]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(n):n;return r[i]}}const Me={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},xe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},We={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ze={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Oe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},De={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Se=(e,n)=>{const t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},je={ordinalNumber:Se,era:g({values:Me,defaultWidth:"wide"}),quarter:g({values:xe,defaultWidth:"wide",argumentCallback:e=>e-1}),month:g({values:We,defaultWidth:"wide"}),day:g({values:ze,defaultWidth:"wide"}),dayPeriod:g({values:Oe,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"})};function y(e){return(n,t={})=>{const a=t.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=n.match(r);if(!i)return null;const o=i[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Fe(s,p=>p.test(o)):Te(s,p=>p.test(o));let l;l=e.valueCallback?e.valueCallback(d):d,l=t.valueCallback?t.valueCallback(l):l;const h=n.slice(o.length);return{value:l,rest:h}}}function Te(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Fe(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function U(e){return(n,t={})=>{const a=n.match(e.matchPattern);if(!a)return null;const r=a[0],i=n.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;const s=n.slice(r.length);return{value:o,rest:s}}}const Ee=/^(\d+)(th|st|nd|rd)?/i,Ye=/\d+/i,Ce={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ne={any:[/^b/i,/^(a|c)/i]},Ie={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_e={any:[/1/i,/2/i,/3/i,/4/i]},$e={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Le={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Re={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},He={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qe={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ve={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xe={ordinalNumber:U({matchPattern:Ee,parsePattern:Ye,valueCallback:e=>parseInt(e,10)}),era:y({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any"}),quarter:y({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any",valueCallback:e=>e+1}),month:y({matchPatterns:$e,defaultMatchWidth:"wide",parsePatterns:Le,defaultParseWidth:"any"}),day:y({matchPatterns:Re,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:qe,defaultMatchWidth:"any",parsePatterns:Ve,defaultParseWidth:"any"})},Ae={code:"en-US",formatDistance:ge,formatLong:ke,formatRelative:Pe,localize:je,match:Xe,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ge(e){const n=w(e);return de(n,fe(n))+1}function Be(e){const n=w(e),t=+j(n)-+le(n);return Math.round(t/Q)+1}function K(e,n){var h,p,z,O;const t=w(e),a=t.getFullYear(),r=T(),i=(n==null?void 0:n.firstWeekContainsDate)??((p=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((O=(z=r.locale)==null?void 0:z.options)==null?void 0:O.firstWeekContainsDate)??1,o=P(e,0);o.setFullYear(a+1,0,i),o.setHours(0,0,0,0);const s=M(o,n),d=P(e,0);d.setFullYear(a,0,i),d.setHours(0,0,0,0);const l=M(d,n);return t.getTime()>=s.getTime()?a+1:t.getTime()>=l.getTime()?a:a-1}function Qe(e,n){var s,d,l,h;const t=T(),a=(n==null?void 0:n.firstWeekContainsDate)??((d=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:d.firstWeekContainsDate)??t.firstWeekContainsDate??((h=(l=t.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??1,r=K(e,n),i=P(e,0);return i.setFullYear(r,0,a),i.setHours(0,0,0,0),M(i,n)}function Je(e,n){const t=w(e),a=+M(t,n)-+Qe(t,n);return Math.round(a/Q)+1}function c(e,n){const t=e<0?"-":"",a=Math.abs(e).toString().padStart(n,"0");return t+a}const k={y(e,n){const t=e.getFullYear(),a=t>0?t:1-t;return c(n==="yy"?a%100:a,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):c(t+1,2)},d(e,n){return c(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return c(e.getHours()%12||12,n.length)},H(e,n){return c(e.getHours(),n.length)},m(e,n){return c(e.getMinutes(),n.length)},s(e,n){return c(e.getSeconds(),n.length)},S(e,n){const t=n.length,a=e.getMilliseconds(),r=Math.trunc(a*Math.pow(10,t-3));return c(r,n.length)}},x={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},L={G:function(e,n,t){const a=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(a,{width:"abbreviated"});case"GGGGG":return t.era(a,{width:"narrow"});case"GGGG":default:return t.era(a,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const a=e.getFullYear(),r=a>0?a:1-a;return t.ordinalNumber(r,{unit:"year"})}return k.y(e,n)},Y:function(e,n,t,a){const r=K(e,a),i=r>0?r:1-r;if(n==="YY"){const o=i%100;return c(o,2)}return n==="Yo"?t.ordinalNumber(i,{unit:"year"}):c(i,n.length)},R:function(e,n){const t=J(e);return c(t,n.length)},u:function(e,n){const t=e.getFullYear();return c(t,n.length)},Q:function(e,n,t){const a=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(a);case"QQ":return c(a,2);case"Qo":return t.ordinalNumber(a,{unit:"quarter"});case"QQQ":return t.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,n,t){const a=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(a);case"qq":return c(a,2);case"qo":return t.ordinalNumber(a,{unit:"quarter"});case"qqq":return t.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,n,t){const a=e.getMonth();switch(n){case"M":case"MM":return k.M(e,n);case"Mo":return t.ordinalNumber(a+1,{unit:"month"});case"MMM":return t.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(a,{width:"wide",context:"formatting"})}},L:function(e,n,t){const a=e.getMonth();switch(n){case"L":return String(a+1);case"LL":return c(a+1,2);case"Lo":return t.ordinalNumber(a+1,{unit:"month"});case"LLL":return t.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(a,{width:"wide",context:"standalone"})}},w:function(e,n,t,a){const r=Je(e,a);return n==="wo"?t.ordinalNumber(r,{unit:"week"}):c(r,n.length)},I:function(e,n,t){const a=Be(e);return n==="Io"?t.ordinalNumber(a,{unit:"week"}):c(a,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):k.d(e,n)},D:function(e,n,t){const a=Ge(e);return n==="Do"?t.ordinalNumber(a,{unit:"dayOfYear"}):c(a,n.length)},E:function(e,n,t){const a=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(a,{width:"short",context:"formatting"});case"EEEE":default:return t.day(a,{width:"wide",context:"formatting"})}},e:function(e,n,t,a){const r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return c(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(e,n,t,a){const r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return c(i,n.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(e,n,t){const a=e.getDay(),r=a===0?7:a;switch(n){case"i":return String(r);case"ii":return c(r,n.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(a,{width:"short",context:"formatting"});case"iiii":default:return t.day(a,{width:"wide",context:"formatting"})}},a:function(e,n,t){const r=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,n,t){const a=e.getHours();let r;switch(a===12?r=x.noon:a===0?r=x.midnight:r=a/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,n,t){const a=e.getHours();let r;switch(a>=17?r=x.evening:a>=12?r=x.afternoon:a>=4?r=x.morning:r=x.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let a=e.getHours()%12;return a===0&&(a=12),t.ordinalNumber(a,{unit:"hour"})}return k.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):k.H(e,n)},K:function(e,n,t){const a=e.getHours()%12;return n==="Ko"?t.ordinalNumber(a,{unit:"hour"}):c(a,n.length)},k:function(e,n,t){let a=e.getHours();return a===0&&(a=24),n==="ko"?t.ordinalNumber(a,{unit:"hour"}):c(a,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):k.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):k.s(e,n)},S:function(e,n){return k.S(e,n)},X:function(e,n,t){const a=e.getTimezoneOffset();if(a===0)return"Z";switch(n){case"X":return H(a);case"XXXX":case"XX":return v(a);case"XXXXX":case"XXX":default:return v(a,":")}},x:function(e,n,t){const a=e.getTimezoneOffset();switch(n){case"x":return H(a);case"xxxx":case"xx":return v(a);case"xxxxx":case"xxx":default:return v(a,":")}},O:function(e,n,t){const a=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+R(a,":");case"OOOO":default:return"GMT"+v(a,":")}},z:function(e,n,t){const a=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+R(a,":");case"zzzz":default:return"GMT"+v(a,":")}},t:function(e,n,t){const a=Math.trunc(e.getTime()/1e3);return c(a,n.length)},T:function(e,n,t){const a=e.getTime();return c(a,n.length)}};function R(e,n=""){const t=e>0?"-":"+",a=Math.abs(e),r=Math.trunc(a/60),i=a%60;return i===0?t+String(r):t+String(r)+n+c(i,2)}function H(e,n){return e%60===0?(e>0?"-":"+")+c(Math.abs(e)/60,2):v(e,n)}function v(e,n=""){const t=e>0?"-":"+",a=Math.abs(e),r=c(Math.trunc(a/60),2),i=c(a%60,2);return t+r+n+i}const q=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Z=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Ue=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],a=t[1],r=t[2];if(!r)return q(e,n);let i;switch(a){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",q(a,n)).replace("{{time}}",Z(r,n))},Ke={p:Z,P:Ue},Ze=/^D+$/,et=/^Y+$/,tt=["D","DD","YY","YYYY"];function nt(e){return Ze.test(e)}function at(e){return et.test(e)}function rt(e,n,t){const a=it(e,n,t);if(console.warn(a),tt.includes(e))throw new RangeError(a)}function it(e,n,t){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,ut=/''/g,dt=/[a-zA-Z]/;function lt(e,n,t){var h,p,z,O,Y,C,N,I;const a=T(),r=(t==null?void 0:t.locale)??a.locale??Ae,i=(t==null?void 0:t.firstWeekContainsDate)??((p=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(z=a.locale)==null?void 0:z.options)==null?void 0:O.firstWeekContainsDate)??1,o=(t==null?void 0:t.weekStartsOn)??((C=(Y=t==null?void 0:t.locale)==null?void 0:Y.options)==null?void 0:C.weekStartsOn)??a.weekStartsOn??((I=(N=a.locale)==null?void 0:N.options)==null?void 0:I.weekStartsOn)??0,s=w(e);if(!he(s))throw new RangeError("Invalid time value");let d=n.match(st).map(f=>{const m=f[0];if(m==="p"||m==="P"){const F=Ke[m];return F(f,r.formatLong)}return f}).join("").match(ot).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const m=f[0];if(m==="'")return{isToken:!1,value:mt(f)};if(L[m])return{isToken:!0,value:f};if(m.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:f}});r.localize.preprocessor&&(d=r.localize.preprocessor(s,d));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return d.map(f=>{if(!f.isToken)return f.value;const m=f.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&at(m)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&nt(m))&&rt(m,n,String(e));const F=L[m[0]];return F(s,m,r.localize,l)}).join("")}function mt(e){const n=e.match(ct);return n?n[1].replace(ut,"'"):e}function ht(e,n,t){const a=M(e,t),r=M(n,t);return+a==+r}const ft={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godziny",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"około tygodnia",twoFour:"około {{count}} tygodni",other:"około {{count}} tygodni"},xWeeks:{one:"tydzień",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};function wt(e,n){if(n===1)return e.one;const t=n%100;if(t<=20&&t>10)return e.other;const a=t%10;return a>=2&&a<=4?e.twoFour:e.other}function E(e,n,t){const a=wt(e,n);return(typeof a=="string"?a:a[t]).replace("{{count}}",String(n))}const gt=(e,n,t)=>{const a=ft[e];return t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"za "+E(a,n,"future"):E(a,n,"past")+" temu":E(a,n,"regular")},yt={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},pt={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},bt={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kt={date:W({formats:yt,defaultWidth:"full"}),time:W({formats:pt,defaultWidth:"full"}),dateTime:W({formats:bt,defaultWidth:"full"})},vt={masculine:"ostatni",feminine:"ostatnia"},Pt={masculine:"ten",feminine:"ta"},Mt={masculine:"następny",feminine:"następna"},xt={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function V(e,n,t,a){let r;if(ht(n,t,a))r=Pt;else if(e==="lastWeek")r=vt;else if(e==="nextWeek")r=Mt;else throw new Error(`Cannot determine adjectives for token ${e}`);const i=n.getDay(),o=xt[i];return`'${r[o]}' eeee 'o' p`}const Wt={lastWeek:V,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:V,other:"P"},zt=(e,n,t,a)=>{const r=Wt[e];return typeof r=="function"?r(e,n,t,a):r},Ot={narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed naszą erą","naszej ery"]},Dt={narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwartał","II kwartał","III kwartał","IV kwartał"]},St={narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},jt={narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},Tt={narrow:["N","P","W","Ś","C","P","S"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},Ft={narrow:["n","p","w","ś","c","p","s"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},Et={narrow:{am:"a",pm:"p",midnight:"półn.",noon:"poł",morning:"rano",afternoon:"popoł.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"}},Yt={narrow:{am:"a",pm:"p",midnight:"o półn.",noon:"w poł.",morning:"rano",afternoon:"po poł.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"}},Ct=(e,n)=>String(e),Nt={ordinalNumber:Ct,era:g({values:Ot,defaultWidth:"wide"}),quarter:g({values:Dt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:g({values:St,defaultWidth:"wide",formattingValues:jt,defaultFormattingWidth:"wide"}),day:g({values:Tt,defaultWidth:"wide",formattingValues:Ft,defaultFormattingWidth:"wide"}),dayPeriod:g({values:Et,defaultWidth:"wide",formattingValues:Yt,defaultFormattingWidth:"wide"})},It=/^(\d+)?/i,_t=/\d+/i,$t={narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i},Lt={any:[/^p/i,/^n/i]},Rt={narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(ł|l)/i},Ht={narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},qt={narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,wide:/^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i},Vt={narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},Xt={narrow:/^[npwścs]/i,short:/^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i},At={narrow:[/^n/i,/^p/i,/^w/i,/^ś/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pi/i,/^so/i]},Gt={narrow:/^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i},Bt={narrow:{am:/^a$/i,pm:/^p$/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i}},Qt={ordinalNumber:U({matchPattern:It,parsePattern:_t,valueCallback:e=>parseInt(e,10)}),era:y({matchPatterns:$t,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any"}),quarter:y({matchPatterns:Rt,defaultMatchWidth:"wide",parsePatterns:Ht,defaultParseWidth:"any",valueCallback:e=>e+1}),month:y({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:Vt,defaultParseWidth:"any"}),day:y({matchPatterns:Xt,defaultMatchWidth:"wide",parsePatterns:At,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:Gt,defaultMatchWidth:"any",parsePatterns:Bt,defaultParseWidth:"any"})},Jt={code:"pl",formatDistance:gt,formatLong:kt,formatRelative:zt,localize:Nt,match:Qt,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Ut(e){return B({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}function D(e){return B({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}}]})(e)}const Kt="_cardWrapper_bcswe_1",Zt="_cardTitle_bcswe_6",en="_date_bcswe_18",tn="_avatar_bcswe_23",nn="_user_bcswe_29",an="_rating_bcswe_35",rn="_textWrapper_bcswe_42",on="_text_bcswe_42",sn="_googleLogo_bcswe_53",b={cardWrapper:Kt,cardTitle:Zt,date:en,avatar:tn,user:nn,rating:an,textWrapper:rn,text:on,googleLogo:sn},cn=({user:e,rating:n,image:t,text:a,date:r})=>{const i=lt(new Date(r),"d MMMM yyyy",{locale:Jt});return u.jsxs("div",{className:b.cardWrapper,children:[u.jsxs("div",{className:b.cardTitle,children:[t&&u.jsx("img",{src:t,alt:"",className:b.avatar}),u.jsxs("div",{children:[u.jsx("h3",{className:b.user,children:e}),u.jsx("div",{className:b.date,children:i})]})]}),u.jsx("div",{className:b.rating,children:u.jsxs("p",{children:[n," /5 ",u.jsx(D,{size:30,color:"gold"}),u.jsx(D,{size:30,color:"gold"}),u.jsx(D,{size:30,color:"gold"}),u.jsx(D,{size:30,color:"gold"}),u.jsx(D,{size:30,color:"gold"})]})}),u.jsx("div",{className:b.textWrapper,children:u.jsx("p",{className:b.text,children:a})}),u.jsx("div",{className:b.googleLogo,children:u.jsx(Ut,{size:30})})]})},un=ie;let X=1,dn=10,A=!1,G=null;const fn=()=>{const[e,n]=S.useState([]),t=S.useRef(null),a=async()=>{try{const o=await ae.get(un,{params:{page:X,per_page:dn,rating:4}}),s=o.data.reviews.docs;return A=o.data.reviews.hasNextPage,G=o.data.reviews.averageRating,s}catch(o){return console.log("Error with fetching images from API: ",o.message),re("Bład podczas pobierania opini. Przełąduj stronę lub spróbuj za chwilę."),[]}};S.useEffect(()=>{a().then(o=>{n(o)})},[]),S.useEffect(()=>{const o=t.current.swiper,s=()=>{o.slides.length-o.activeIndex<3&&r()};if(o)return o.on("slideChange",s),()=>{o.off("slideChange",s)}},[]);const r=async()=>{if(A){X++;const o=await a();n(s=>[...s,...o]),console.log("REVIEWS LOADED NEXT PAGE")}else return console.log("No more results"),null},i=()=>e.map(o=>u.jsx(ne,{className:"swiper-slide",children:u.jsx(cn,{user:o.source,rating:o.rating,image:o.source_image,text:o.body,date:o.date})},o._id));return u.jsxs("div",{children:[u.jsxs("h2",{children:["OPINIE Z GOOGLA: ",G]}),u.jsx("div",{className:se.reviewsBgr,children:u.jsx(ee,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0,clickable:!0},modules:[te],className:"reviews-swiper",ref:t,children:i()})})]})};export{fn as default};
