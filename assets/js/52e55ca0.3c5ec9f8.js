"use strict";(self.webpackChunkdevops_wiki=self.webpackChunkdevops_wiki||[]).push([[66],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=l,k=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],o={id:"k8s-log-mgmt",title:"K8s Log Management"},c=void 0,p={unversionedId:"practice/aks/k8s-log-mgmt",id:"practice/aks/k8s-log-mgmt",title:"K8s Log Management",description:"\u5e94\u7528\u548c\u7cfb\u7edf\u65e5\u5fd7\u53ef\u4ee5\u8ba9\u4f60\u4e86\u89e3\u96c6\u7fa4\u5185\u90e8\u7684\u8fd0\u884c\u72b6\u51b5\u3002\u65e5\u5fd7\u5bf9\u8c03\u8bd5\u95ee\u9898\u548c\u76d1\u63a7\u96c6\u7fa4\u6d3b\u52a8\u975e\u5e38\u6709\u7528\u3002\u9488\u5bf9\u5bb9\u5668\u5316\u5e94\u7528\uff0c\u6700\u7b80\u5355\u4e14\u53d7\u6b22\u8fce\u7684\u65e5\u5fd7\u8bb0\u5f55\u65b9\u5f0f\u5c31\u662f\u5199\u5165\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u6d41\u3002",source:"@site/docs/practice/aks/k8s-log-mgmt.md",sourceDirName:"practice/aks",slug:"/practice/aks/k8s-log-mgmt",permalink:"/devops-wiki/docs/practice/aks/k8s-log-mgmt",editUrl:"https://github.com/zhoulf1006/devops-wiki/edit/master/docs/practice/aks/k8s-log-mgmt.md",tags:[],version:"current",frontMatter:{id:"k8s-log-mgmt",title:"K8s Log Management"},sidebar:"practiceSidebar",previous:{title:"Deploy AKS",permalink:"/devops-wiki/docs/practice/aks/aks-create"},next:{title:"installation",permalink:"/devops-wiki/docs/practice/docker/installation"}},s=[{value:"log\u7c7b\u578b",id:"log\u7c7b\u578b",children:[],level:2},{value:"\u9700\u8981\u89e3\u51b3\u7684log\u95ee\u9898",id:"\u9700\u8981\u89e3\u51b3\u7684log\u95ee\u9898",children:[],level:2},{value:"\u96c6\u7fa4\u7ea7\u65e5\u5fd7\u67b6\u6784",id:"\u96c6\u7fa4\u7ea7\u65e5\u5fd7\u67b6\u6784",children:[{value:"\u4f7f\u7528\u8282\u70b9\u7ea7\u65e5\u5fd7\u4ee3\u7406",id:"\u4f7f\u7528\u8282\u70b9\u7ea7\u65e5\u5fd7\u4ee3\u7406",children:[],level:4},{value:"\u4f7f\u7528 sidecar \u5bb9\u5668\u548c\u65e5\u5fd7\u4ee3\u7406",id:"\u4f7f\u7528-sidecar-\u5bb9\u5668\u548c\u65e5\u5fd7\u4ee3\u7406",children:[{value:"\u4f20\u8f93\u6570\u636e\u6d41\u7684 sidecar \u5bb9\u5668",id:"\u4f20\u8f93\u6570\u636e\u6d41\u7684-sidecar-\u5bb9\u5668",children:[],level:5},{value:"\u5177\u6709\u65e5\u5fd7\u4ee3\u7406\u529f\u80fd\u7684 sidecar \u5bb9\u5668",id:"\u5177\u6709\u65e5\u5fd7\u4ee3\u7406\u529f\u80fd\u7684-sidecar-\u5bb9\u5668",children:[],level:5}],level:4},{value:"\u4ece\u5e94\u7528\u4e2d\u76f4\u63a5\u66b4\u9732\u65e5\u5fd7\u76ee\u5f55",id:"\u4ece\u5e94\u7528\u4e2d\u76f4\u63a5\u66b4\u9732\u65e5\u5fd7\u76ee\u5f55",children:[],level:4}],level:2}],u={toc:s};function d(e){var t=e.components,o=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e94\u7528\u548c\u7cfb\u7edf\u65e5\u5fd7\u53ef\u4ee5\u8ba9\u4f60\u4e86\u89e3\u96c6\u7fa4\u5185\u90e8\u7684\u8fd0\u884c\u72b6\u51b5\u3002\u65e5\u5fd7\u5bf9\u8c03\u8bd5\u95ee\u9898\u548c\u76d1\u63a7\u96c6\u7fa4\u6d3b\u52a8\u975e\u5e38\u6709\u7528\u3002\u9488\u5bf9\u5bb9\u5668\u5316\u5e94\u7528\uff0c\u6700\u7b80\u5355\u4e14\u53d7\u6b22\u8fce\u7684\u65e5\u5fd7\u8bb0\u5f55\u65b9\u5f0f\u5c31\u662f\u5199\u5165\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u6d41\u3002"),(0,i.kt)("p",null,"\u7531\u4e8e\u5bb9\u5668\u3001Pod\u4f1a\u51fa\u73b0\u5d29\u6e83\u6216\u8005\u8282\u70b9\u5b95\u673a\u7b49\u60c5\u51b5\uff0c\u5982\u679c\u80fd\u591f\u4ecd\u7136\u8bbf\u95ee\u5230\u65e5\u5fd7(\u5e94\u7528\u548c\u7cfb\u7edf\u65e5\u5fd7)\uff0c\u5c31\u5fc5\u987b\u4f7f\u65e5\u5fd7\u5177\u5907\u72ec\u7acb\u7684\u5b58\u50a8\u548c\u751f\u547d\u5468\u671f\uff0c\u4e0e\u8282\u70b9\u3001Pod\u6216\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\u72ec\u7acb\uff0c\u5373\u96c6\u7fa4\u7ea7\u65e5\u5fd7\uff0c\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684\u540e\u53f0\u5b58\u50a8\u3001\u5206\u6790\u548c\u67e5\u8be2\u65e5\u5fd7\u3002"),(0,i.kt)("h2",{id:"log\u7c7b\u578b"},"log\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u7ec4\u4ef6log")),(0,i.kt)("p",null,"\u5305\u542b\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u7cfb\u7edf\u7ec4\u4ef6\u548c\u4e0d\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u7cfb\u7edf\u7ec4\u4ef6(\u5305\u62ec\u5bb9\u5668\u8fd0\u884c\u65f6)\u3002"),(0,i.kt)("p",null,"(1) \u5728\u4f7f\u7528 systemd \u673a\u5236\u7684\u670d\u52a1\u5668\u4e0a\uff0ckubelet \u548c\u5bb9\u5668 runtime \u5199\u5165\u65e5\u5fd7\u5230 journald\u3002 \u5982\u679c\u6ca1\u6709 systemd\uff0c\u4ed6\u4eec\u5199\u5165\u65e5\u5fd7\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log")," \u76ee\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".log")," \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"(2) \u5bb9\u5668\u4e2d\u7684\u7cfb\u7edf\u7ec4\u4ef6\u901a\u5e38\u5c06\u65e5\u5fd7\u5199\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log")," \u76ee\u5f55\uff0c\u7ed5\u8fc7\u4e86\u9ed8\u8ba4\u7684\u65e5\u5fd7\u673a\u5236\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e94\u7528log")),(0,i.kt)("p",null,"(1) \u5982\u679c\u5bb9\u5668\u5e94\u7528log\u8f93\u51fa\u5230\u4e86\u6807\u51c6\u8f93\u51fa\uff0c\u5219\u5bb9\u5668log\u5b58\u653e\u5728\u8282\u70b9\u76ee\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/containers/CONTAINER-ID/*.log"),"\u3002\u53e6\u5916\u5728\u8282\u70b9\u4e2d\u6709\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/containers/NAMESPACE_POD-NAME-*/POD-NAME/*.log"),", \u8fd9\u4e9blog\u6587\u4ef6\u662f\u6307\u5411\u5bb9\u5668log\u7684\u8fde\u63a5\u6587\u4ef6\u3002\u9664\u4e86\u76f4\u63a5\u53bb\u8282\u70b9\u91cc\u67e5\u770blog\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl logs"),"\u547d\u4ee4\u53bb\u67e5\u770b\u5bf9\u5e94\u5bb9\u5668\u7684log\u3002"),(0,i.kt)("p",null,"(2) \u5982\u679c\u5bb9\u5668\u5e94\u7528log\u88ab\u6253\u5370\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49mount\u8def\u5f84\u7684volume\u4e2d\uff0c\u5219\u5bb9\u5668log\u88ab\u5b58\u50a8\u5728\u8282\u70b9\u4e0a\u5bf9\u5e94\u7684\u8def\u5f84\u4e0a\uff0c\u6b64\u65f6\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl logs"),"\u547d\u4ee4\u53bb\u67e5\u770b\u5219\u4e0d\u4f1a\u770b\u5230\u4efb\u4f55log\u3002"),(0,i.kt)("h2",{id:"\u9700\u8981\u89e3\u51b3\u7684log\u95ee\u9898"},"\u9700\u8981\u89e3\u51b3\u7684log\u95ee\u9898"),(0,i.kt)("p",null,"(1) \u5b9e\u73b0log\u7684\u8f6e\u8f6c\uff0c\u5305\u62eck8s\u7cfb\u7edflog\u4ee5\u53ca\u5e94\u7528log\uff0c\u4fdd\u8bc1log\u4e0d\u4f1a\u6d88\u8017\u8282\u70b9\u4e0a\u6240\u6709\u7684\u5b58\u50a8\u7a7a\u95f4"),(0,i.kt)("p",null,"(2) \u63d0\u4f9blog\u6301\u4e45\u5316\u5b58\u50a8\u3001\u5206\u6790\u548c\u67e5\u770b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5373\u96c6\u7fa4\u7ea7\u65e5\u5fd7\u67b6\u6784\u3002\u9700\u8981\u7684\u8003\u8651\u7684\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"log\u7684\u5927\u5c0f\u3001\u683c\u5f0f\u3001\u6587\u4ef6\u683c\u5f0f\u7b49"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540cmicroservice\u5982\u4f55\u533a\u5206"),(0,i.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4f55\u79cdlog\u67b6\u6784")),(0,i.kt)("h2",{id:"\u96c6\u7fa4\u7ea7\u65e5\u5fd7\u67b6\u6784"},"\u96c6\u7fa4\u7ea7\u65e5\u5fd7\u67b6\u6784"),(0,i.kt)("p",null,"\u53ef\u9009\u7684\u65b9\u6848\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u7684\u8282\u70b9\u7ea7\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5e94\u7528\u7a0b\u5e8f\u7684 pod \u4e2d\uff0c\u5305\u542b\u4e13\u95e8\u8bb0\u5f55\u65e5\u5fd7\u7684 sidecar \u5bb9\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u65e5\u5fd7\u76f4\u63a5\u4ece\u5e94\u7528\u7a0b\u5e8f\u4e2d\u63a8\u9001\u5230\u65e5\u5fd7\u8bb0\u5f55\u540e\u7aef")),(0,i.kt)("h4",{id:"\u4f7f\u7528\u8282\u70b9\u7ea7\u65e5\u5fd7\u4ee3\u7406"},"\u4f7f\u7528\u8282\u70b9\u7ea7\u65e5\u5fd7\u4ee3\u7406"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4f7f\u7528\u8282\u70b9\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7406",src:n(585).Z})),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u4f7f\u7528 ",(0,i.kt)("em",{parentName:"p"},"\u8282\u70b9\u7ea7\u7684\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7406")," \u6765\u5b9e\u73b0\u7fa4\u96c6\u7ea7\u65e5\u5fd7\u8bb0\u5f55\uff0c\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7406\u662f\u4e00\u79cd\u7528\u4e8e\u66b4\u9732\u65e5\u5fd7\u6216\u5c06\u65e5\u5fd7\u63a8\u9001\u5230\u540e\u7aef\u7684\u4e13\u7528\u5de5\u5177\u3002 \u901a\u5e38\uff0c\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7406\u7a0b\u5e8f\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u5b83\u53ef\u4ee5\u8bbf\u95ee\u5305\u542b\u8be5\u8282\u70b9\u4e0a\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u5bb9\u5668\u7684\u65e5\u5fd7\u6587\u4ef6\u7684\u76ee\u5f55\u3002"),(0,i.kt)("h4",{id:"\u4f7f\u7528-sidecar-\u5bb9\u5668\u548c\u65e5\u5fd7\u4ee3\u7406"},"\u4f7f\u7528 sidecar \u5bb9\u5668\u548c\u65e5\u5fd7\u4ee3\u7406"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u4f7f\u7528 sidecar \u5bb9\u5668\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sidecar \u5bb9\u5668\u5c06\u5e94\u7528\u7a0b\u5e8f\u65e5\u5fd7\u4f20\u9001\u5230\u81ea\u5df1\u7684\u6807\u51c6\u8f93\u51fa"),(0,i.kt)("li",{parentName:"ul"},"sidecar \u5bb9\u5668\u8fd0\u884c\u4e00\u4e2a\u65e5\u5fd7\u4ee3\u7406\uff0c\u914d\u7f6e\u8be5\u65e5\u5fd7\u4ee3\u7406\u4ee5\u4fbf\u4ece\u5e94\u7528\u5bb9\u5668\u6536\u96c6\u65e5\u5fd7")),(0,i.kt)("h5",{id:"\u4f20\u8f93\u6570\u636e\u6d41\u7684-sidecar-\u5bb9\u5668"},"\u4f20\u8f93\u6570\u636e\u6d41\u7684 sidecar \u5bb9\u5668"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u6570\u636e\u6d41\u5bb9\u5668\u7684 Sidecar \u5bb9\u5668",src:n(812).Z})),(0,i.kt)("h5",{id:"\u5177\u6709\u65e5\u5fd7\u4ee3\u7406\u529f\u80fd\u7684-sidecar-\u5bb9\u5668"},"\u5177\u6709\u65e5\u5fd7\u4ee3\u7406\u529f\u80fd\u7684 sidecar \u5bb9\u5668"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7406\u529f\u80fd\u7684 sidecar \u5bb9\u5668",src:n(3544).Z})),(0,i.kt)("h4",{id:"\u4ece\u5e94\u7528\u4e2d\u76f4\u63a5\u66b4\u9732\u65e5\u5fd7\u76ee\u5f55"},"\u4ece\u5e94\u7528\u4e2d\u76f4\u63a5\u66b4\u9732\u65e5\u5fd7\u76ee\u5f55"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u76f4\u63a5\u4ece\u5e94\u7528\u7a0b\u5e8f\u66b4\u9732\u65e5\u5fd7",src:n(3680).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"References:")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/cluster-administration/logging/"},"https://kubernetes.io/zh/docs/concepts/cluster-administration/logging/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zdyxry.github.io/2019/05/17/Kubernetes-%E5%AE%9E%E6%88%98-%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86/"},"https://zdyxry.github.io/2019/05/17/Kubernetes-%E5%AE%9E%E6%88%98-%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86/")))}d.isMDXComponent=!0},3680:function(e,t,n){t.Z=n.p+"assets/images/logging-from-application-6b56a4d8ef291070872b20c16a9155a7.png"},585:function(e,t,n){t.Z=n.p+"assets/images/logging-with-node-agent-7cd8acf3dc3beb2c5d8fb619407f9b34.png"},3544:function(e,t,n){t.Z=n.p+"assets/images/logging-with-sidecar-agent-747828b52c416744bf6ac26c58c9ffd7.png"},812:function(e,t,n){t.Z=n.p+"assets/images/logging-with-streaming-sidecar-2d87cdb30d4197c8a8ab691e15e91529.png"}}]);