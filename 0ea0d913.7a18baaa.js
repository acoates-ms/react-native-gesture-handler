(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(188)),o={id:"handler-longpress",title:"LongPressGestureHandler",sidebar_label:"LongPressGestureHandler"},s={id:"version-1.6.1/handler-longpress",title:"LongPressGestureHandler",description:"A discrete gesture handler that activates when the corresponding view is pressed sufficiently long.",source:"@site/versioned_docs/version-1.6.1/handler-longpress.md",permalink:"/react-native-gesture-handler/docs/handler-longpress",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/versioned_docs/version-1.6.1/handler-longpress.md",version:"1.6.1",sidebar_label:"LongPressGestureHandler",sidebar:"version-1.6.1/docs",previous:{title:"TapGestureHandler",permalink:"/react-native-gesture-handler/docs/handler-tap"},next:{title:"RotationGestureHandler",permalink:"/react-native-gesture-handler/docs/handler-rotation"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>minDurationMs</code>",id:"mindurationms",children:[]},{value:"<code>maxDist</code>",id:"maxdist",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A discrete gesture handler that activates when the corresponding view is pressed sufficiently long.\nWhen handler gets activated it will turn into ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#end"}),"END")," state when finger is released.\nThe handler will fail to recognize if the finger is lifted before the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#mindurationms"}),"minimum required time")," or if the finger is moved further than the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#maxdist"}),"allowable distance"),"."),Object(i.b)("p",null,"The handler is implemented using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer"}),"UILongPressGestureRecognizer")," on iOS and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/android/lib/src/main/java/com/swmansion/gesturehandler/LongPressGestureHandler.java"}),"LongPressGestureHandler")," on Android."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(i.b)("inlineCode",{parentName:"p"},"LongPressGestureHandler")," component:"),Object(i.b)("h3",{id:"mindurationms"},Object(i.b)("inlineCode",{parentName:"h3"},"minDurationMs")),Object(i.b)("p",null,"How long the view has to be pressed in order for gesture to activate. In milliseconds. The default duration is 0.5sec."),Object(i.b)("h3",{id:"maxdist"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDist")),Object(i.b)("p",null,"Allow finger movement while pressing. This property expresses the maximum distance it is allowed for the finger to travel before it cancels. The default distance is 10 points."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(i.b)("inlineCode",{parentName:"p"},"LongPressGestureHandler"),":"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/Example/multitap/index.js"}),"multitap example")," from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const LongPressButton = () => (\n  <LongPressGestureHandler\n    onHandlerStateChange={({ nativeEvent }) => {\n      if (nativeEvent.state === State.ACTIVE) {\n        Alert.alert("I\'m being pressed for so long");\n      }\n    }}\n    minDurationMs={800}>\n    <View style={styles.box} />\n  </LongPressGestureHandler>\n);\n')))}d.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);