"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2274],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61871:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={},i="\u5feb\u901f\u5f00\u59cb",s={unversionedId:"quickStart/01quickstart",id:"version-5.0/quickStart/01quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9\u5355\u526f\u672c RocketMQ \u670d\u52a1\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002",source:"@site/versioned_docs/version-5.0/02-quickStart/01quickstart.md",sourceDirName:"02-quickStart",slug:"/quickStart/01quickstart",permalink:"/zh/docs/quickStart/01quickstart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-quickStart/01quickstart.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u53c2\u6570\u7ea6\u675f\u548c\u5efa\u8bae",permalink:"/zh/docs/introduction/03limits"},next:{title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",permalink:"/zh/docs/domainModel/01main"}},c={},l=[{value:"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ",id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq",level:2},{value:"2. \u542f\u52a8NameServer",id:"2-\u542f\u52a8nameserver",level:2},{value:"3. \u542f\u52a8Broker+Proxy",id:"3-\u542f\u52a8brokerproxy",level:2},{value:"4. \u5de5\u5177\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1",id:"4-\u5de5\u5177\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1",level:2},{value:"5. SDK\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1",id:"5-sdk\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1",level:2},{value:"6. \u5173\u95ed\u670d\u52a1\u5668",id:"6-\u5173\u95ed\u670d\u52a1\u5668",level:2}],p={toc:l},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9\u5355\u526f\u672c RocketMQ \u670d\u52a1\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"),(0,o.kt)("admonition",{title:"\u7cfb\u7edf\u8981\u6c42",type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63a8\u8350 Linux/Unix/macOS"),(0,o.kt)("li",{parentName:"ol"},"64\u4f4d JDK 1.8+"))),(0,o.kt)("h2",{id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq"},"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ"),(0,o.kt)("admonition",{title:"RocketMQ\u4e0b\u8f7d",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"RocketMQ \u7684\u5b89\u88c5\u5305\u5206\u4e3a\u4e24\u79cd\uff0c\u4e8c\u8fdb\u5236\u5305\u548c\u6e90\u7801\u5305\u3002 \u70b9\u51fb",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-source-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d Apache RocketMQ 5.0.0\u7684\u6e90\u7801\u5305\u3002\u4f60\u4e5f\u53ef\u4ee5\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/5.0.0/rocketmq-all-5.0.0-bin-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d\u5230\u4e8c\u8fdb\u5236\u5305\u3002\u4e8c\u8fdb\u5236\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7684\uff0c\u6e90\u7801\u5305\u662f\u9700\u8981\u7f16\u8bd1\u540e\u8fd0\u884c\u7684\u3002")),(0,o.kt)("p",null,"\u8fd9\u91cc\u4ee5\u5728Linux\u73af\u5883\u4e0b\u5229\u7528\u793e\u533a5.0.0\u7684\u6e90\u7801\u5305\u4e3a\u4f8b\uff0c\u4ecb\u7ecdRocketMQ\u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u89e3\u538b5.0.0\u7684\u6e90\u7801\u5305\u5e76\u7f16\u8bd1\u6784\u5efa\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ unzip rocketmq-all-5.0.0-source-release.zip\n$ cd rocketmq-all-5.0.0-source-release/\n$ mvn -Prelease-all -DskipTests -Dspotbugs.skip=true clean install -U\n$ cd distribution/target/rocketmq-5.0.0/rocketmq-5.0.0\n")),(0,o.kt)("h2",{id:"2-\u542f\u52a8nameserver"},"2. \u542f\u52a8NameServer"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8cRocketMQ\u5305\u540e\uff0c\u6211\u4eec\u542f\u52a8NameServer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### \u542f\u52a8namesrv\n$ nohup sh bin/mqnamesrv &\n \n### \u9a8c\u8bc1namesrv\u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u5728namesrv.log \u4e2d\u770b\u5230 ",(0,o.kt)("strong",{parentName:"p"},"'The Name Server boot success..'\uff0c")," \u8868\u793aNameServer \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.kt)("h2",{id:"3-\u542f\u52a8brokerproxy"},"3. \u542f\u52a8Broker+Proxy"),(0,o.kt)("p",null,"NameServer\u6210\u529f\u542f\u52a8\u540e\uff0c\u6211\u4eec\u542f\u52a8Broker\u548cProxy\uff0c5.x \u7248\u672c\u4e0b\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Local \u6a21\u5f0f\u90e8\u7f72\uff0c\u5373 Broker \u548c Proxy \u540c\u8fdb\u7a0b\u90e8\u7f72\u30025.x \u7248\u672c\u4e5f\u652f\u6301 Broker \u548c Proxy \u5206\u79bb\u90e8\u7f72\u4ee5\u5b9e\u73b0\u66f4\u7075\u6d3b\u7684\u96c6\u7fa4\u80fd\u529b\u3002\u8be6\u60c5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/deploymentOperations/01deploy"},"\u90e8\u7f72\u6559\u7a0b"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### \u5148\u542f\u52a8broker\n$ nohup sh bin/mqbroker -n localhost:9876 --enable-proxy &\n\n### \u9a8c\u8bc1broker\u662f\u5426\u542f\u52a8\u6210\u529f, \u6bd4\u5982, broker\u7684ip\u662f192.168.1.2 \u7136\u540e\u540d\u5b57\u662fbroker-a\n$ tail -f ~/logs/rocketmqlogs/broker_default.log \nThe broker[broker-a,192.169.1.2:10911] boot success...\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u5728 broker_default.log \u4e2d\u770b\u5230\u201cThe broker","[brokerName,ip:port]"," boot success..\u201d\uff0c\u8fd9\u8868\u660e broker \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u5355\u8282\u70b9\u526f\u672c\u7684 RocketMQ \u96c6\u7fa4\u5df2\u7ecf\u90e8\u7f72\u8d77\u6765\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u811a\u672c\u8fdb\u884c\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002")),(0,o.kt)("h2",{id:"4-\u5de5\u5177\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1"},"4. \u5de5\u5177\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1"),(0,o.kt)("p",null,"\u5728\u8fdb\u884c\u5de5\u5177\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9\u5ba2\u6237\u7aefNameServer\u7684\u5730\u5740\uff0cRocketMQ\u6709\u591a\u79cd\u65b9\u5f0f\u5728\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6eNameServer\u5730\u5740\uff0c\u8fd9\u91cc\u6211\u4eec\u5229\u7528\u73af\u5883\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"NAMESRV_ADDR")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,o.kt)("h2",{id:"5-sdk\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1"},"5. SDK\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1"),(0,o.kt)("p",null,"\u5de5\u5177\u6d4b\u8bd5\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 SDK \u6536\u53d1\u6d88\u606f\u3002\u8fd9\u91cc\u4ee5 Java SDK \u4e3a\u4f8b\u4ecb\u7ecd\u4e00\u4e0b\u6d88\u606f\u6536\u53d1\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-clients"},"rocketmq-clients")," \u4e2d\u53c2\u9605\u66f4\u591a\u7ec6\u8282\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728IDEA\u4e2d\u521b\u5efa\u4e00\u4e2aJava\u5de5\u7a0b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("em",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u5f15\u5165Java\u4f9d\u8d56\u5e93\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"rocketmq-client-java-version")," \u66ff\u6362\u6210 ",(0,o.kt)("a",{href:"https://search.maven.org/search?q=g:org.apache.rocketmq%20AND%20a:rocketmq-client-java"},"\u6700\u65b0\u7684\u7248\u672c"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client-java</artifactId>\n    <version>${rocketmq-client-java-version}</version>\n</dependency> \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7mqadmin\u521b\u5efa Topic\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqadmin updatetopic -n localhost:9876 -t TestTopic -c DefaultCluster\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5df2\u521b\u5efa\u7684Java\u5de5\u7a0b\u4e2d\uff0c\u521b\u5efa\u53d1\u9001\u666e\u901a\u6d88\u606f\u7a0b\u5e8f\u5e76\u8fd0\u884c\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientConfigurationBuilder;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.message.Message;\nimport org.apache.rocketmq.client.apis.producer.Producer;\nimport org.apache.rocketmq.client.apis.producer.SendReceipt;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class ProducerExample {\n    private static final Logger logger = LoggerFactory.getLogger(ProducerExample.class);\n\n    public static void main(String[] args) throws ClientException {\n        // \u63a5\u5165\u70b9\u5730\u5740\uff0c\u9700\u8981\u8bbe\u7f6e\u6210Proxy\u7684\u5730\u5740\u548c\u7aef\u53e3\u5217\u8868\uff0c\u4e00\u822c\u662fxxx:8081;xxx:8081\u3002\n        String endpoint = "localhost:8081";\n        // \u6d88\u606f\u53d1\u9001\u7684\u76ee\u6807Topic\u540d\u79f0\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String topic = "TestTopic";\n        ClientServiceProvider provider = ClientServiceProvider.loadService();\n        ClientConfigurationBuilder builder = ClientConfiguration.newBuilder().setEndpoints(endpoint);\n        ClientConfiguration configuration = builder.build();\n        // \u521d\u59cb\u5316Producer\u65f6\u9700\u8981\u8bbe\u7f6e\u901a\u4fe1\u914d\u7f6e\u4ee5\u53ca\u9884\u7ed1\u5b9a\u7684Topic\u3002\n        Producer producer = provider.newProducerBuilder()\n            .setTopics(topic)\n            .setClientConfiguration(configuration)\n            .build();\n        // \u666e\u901a\u6d88\u606f\u53d1\u9001\u3002\n        Message message = provider.newMessageBuilder()\n            .setTopic(topic)\n            // \u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n            .setKeys("messageKey")\n            // \u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n            .setTag("messageTag")\n            // \u6d88\u606f\u4f53\u3002\n            .setBody("messageBody".getBytes())\n            .build();\n        try {\n            // \u53d1\u9001\u6d88\u606f\uff0c\u9700\u8981\u5173\u6ce8\u53d1\u9001\u7ed3\u679c\uff0c\u5e76\u6355\u83b7\u5931\u8d25\u7b49\u5f02\u5e38\u3002\n            SendReceipt sendReceipt = producer.send(message);\n            logger.info("Send message successfully, messageId={}", sendReceipt.getMessageId());\n        } catch (ClientException e) {\n            logger.error("Failed to send message", e);\n        }\n        // producer.close();\n    }\n}\n')))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5df2\u521b\u5efa\u7684Java\u5de5\u7a0b\u4e2d\uff0c\u521b\u5efa\u8ba2\u9605\u666e\u901a\u6d88\u606f\u7a0b\u5e8f\u5e76\u8fd0\u884c\u3002Apache RocketMQ \u652f\u6301",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/06consumertype"},"SimpleConsumer"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/06consumertype"},"PushConsumer"),"\u4e24\u79cd\u6d88\u8d39\u8005\u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u8ba2\u9605\u6d88\u606f\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.IOException;\nimport java.util.Collections;\nimport org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.consumer.ConsumeResult;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpression;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpressionType;\nimport org.apache.rocketmq.client.apis.consumer.PushConsumer;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class PushConsumerExample {\n    private static final Logger logger = LoggerFactory.getLogger(PushConsumerExample.class);\n\n    private PushConsumerExample() {\n    }\n\n    public static void main(String[] args) throws ClientException, IOException, InterruptedException {\n        final ClientServiceProvider provider = ClientServiceProvider.loadService();\n        // \u63a5\u5165\u70b9\u5730\u5740\uff0c\u9700\u8981\u8bbe\u7f6e\u6210Proxy\u7684\u5730\u5740\u548c\u7aef\u53e3\u5217\u8868\uff0c\u4e00\u822c\u662fxxx:8081;xxx:8081\u3002\n        String endpoints = "localhost:8081";\n        ClientConfiguration clientConfiguration = ClientConfiguration.newBuilder()\n            .setEndpoints(endpoints)\n            .build();\n        // \u8ba2\u9605\u6d88\u606f\u7684\u8fc7\u6ee4\u89c4\u5219\uff0c\u8868\u793a\u8ba2\u9605\u6240\u6709Tag\u7684\u6d88\u606f\u3002\n        String tag = "*";\n        FilterExpression filterExpression = new FilterExpression(tag, FilterExpressionType.TAG);\n        // \u4e3a\u6d88\u8d39\u8005\u6307\u5b9a\u6240\u5c5e\u7684\u6d88\u8d39\u8005\u5206\u7ec4\uff0cGroup\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String consumerGroup = "YourConsumerGroup";\n        // \u6307\u5b9a\u9700\u8981\u8ba2\u9605\u54ea\u4e2a\u76ee\u6807Topic\uff0cTopic\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String topic = "TestTopic";\n        // \u521d\u59cb\u5316PushConsumer\uff0c\u9700\u8981\u7ed1\u5b9a\u6d88\u8d39\u8005\u5206\u7ec4ConsumerGroup\u3001\u901a\u4fe1\u53c2\u6570\u4ee5\u53ca\u8ba2\u9605\u5173\u7cfb\u3002\n        PushConsumer pushConsumer = provider.newPushConsumerBuilder()\n            .setClientConfiguration(clientConfiguration)\n            // \u8bbe\u7f6e\u6d88\u8d39\u8005\u5206\u7ec4\u3002\n            .setConsumerGroup(consumerGroup)\n            // \u8bbe\u7f6e\u9884\u7ed1\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u3002\n            .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n            // \u8bbe\u7f6e\u6d88\u8d39\u76d1\u542c\u5668\u3002\n            .setMessageListener(messageView -> {\n                // \u5904\u7406\u6d88\u606f\u5e76\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u3002\n                logger.info("Consume message successfully, messageId={}", messageView.getMessageId());\n                return ConsumeResult.SUCCESS;\n            })\n            .build();\n        Thread.sleep(Long.MAX_VALUE);\n        // \u5982\u679c\u4e0d\u9700\u8981\u518d\u4f7f\u7528 PushConsumer\uff0c\u53ef\u5173\u95ed\u8be5\u5b9e\u4f8b\u3002\n        // pushConsumer.close();\n    }\n}\n')))),(0,o.kt)("h2",{id:"6-\u5173\u95ed\u670d\u52a1\u5668"},"6. \u5173\u95ed\u670d\u52a1\u5668"),(0,o.kt)("p",null,"\u5b8c\u6210\u5b9e\u9a8c\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5173\u95ed\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqshutdown broker\nThe mqbroker(36695) is running...\nSend shutdown request to mqbroker with proxy enable OK(36695)\n\n\n$ sh bin/mqshutdown namesrv\nThe mqnamesrv(36664) is running...\nSend shutdown request to mqnamesrv(36664) OK\n")))}u.isMDXComponent=!0}}]);