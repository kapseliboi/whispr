(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{383:function(t,e,s){"use strict";s.r(e);var n=s(42),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unit tests")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e2e tests")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:e2e\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test coverage")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:cov\n")])])]),s("h2",{attrs:{id:"unit-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[t._v("#")]),t._v(" Unit Tests")]),t._v(" "),s("p",[t._v("The unit test is a way of testing a unit , the smallest possible unit of code that can be logically isolated in a system. These units are tested to determine if there are any issues\nwhen the developer make the change in the code base.\nIt should count for the majority of the tests we can have. Normally, only test one method each.\nExample : Whisp, Subscription\nTo run the unit test locally :npm run test:unit:cov")]),t._v(" "),s("h2",{attrs:{id:"integration-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-tests"}},[t._v("#")]),t._v(" Integration Tests")]),t._v(" "),s("p",[t._v("Integration tests which are tests designed to verify the integration of different parts of separate components of a software system together.\nTo test some integration functionality with the database, we will use "),s("code",[t._v("mongo")]),t._v(" in-memory database.")]),t._v(" "),s("p",[t._v("Example :Whisp service & MongoDb\nTo run the integration test locally : npm run test:integration")]),t._v(" "),s("h2",{attrs:{id:"end-to-end-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end-to-end-tests"}},[t._v("#")]),t._v(" End to End Tests")]),t._v(" "),s("p",[t._v("End-to-end tests which are tests that verify an application’s workflow of code base from beginning to end.This method basically aims to replicate real user scenarios so that the system can be validated for integration and data integrity.\nExample : Webhook, TagGroup, WhispSubscription\nTo run the end to end test locally :  npm run test:e2e")]),t._v(" "),s("p",[t._v("In order to run end to end tests you need "),s("code",[t._v("mongo")]),t._v(", "),s("code",[t._v("redis")]),t._v(" and "),s("code",[t._v("localstack")]),t._v(" to be up and running. In order to do that you up the dockers in "),s("code",[t._v("docker-compose.dev.yml")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker-compose -f docker-compose.dev.yml up -d\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Note")]),t._v(" : Be aware that it will create entities in the DB and in the S3 bucket. This could interfere with your local data.")])]),t._v(" "),s("h2",{attrs:{id:"debugging-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-tests"}},[t._v("#")]),t._v(" Debugging tests")]),t._v(" "),s("p",[t._v("You can debug the tests in your IDE by running "),s("code",[t._v("npm run test:debug")]),t._v(" or "),s("code",[t._v("npm run test:e2e:debug")]),t._v(" and the launching "),s("code",[t._v("Attach to Node process")]),t._v(" in the debugging tab in VSCode")]),t._v(" "),s("h2",{attrs:{id:"load-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-testing"}},[t._v("#")]),t._v(" Load testing")]),t._v(" "),s("p",[t._v("Load testing is implemented using https://k6.io/, and can be executed locally, on a remote server or directly within the CI pipeline. The current load tests are simple and can be considered experimental. PRs for more comprehensive load tests are welcome!")]),t._v(" "),s("p",[t._v("To run the tests, install K6: https://k6.io/docs/getting-started/installation/.")]),t._v(" "),s("p",[t._v("Then run the script:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("k6 run tests/load/whisp-create.load.js\n")])])]),s("h3",{attrs:{id:"execution-in-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-in-ci"}},[t._v("#")]),t._v(" Execution in CI")]),t._v(" "),s("ul",[s("li",[t._v("Load tests are executed within the CI pipeline in the K6 load tests workflow")]),t._v(" "),s("li",[t._v("This is only a beta implementation and is not currently defined as a required passing action for a PR to be merged, but if it fails this is a good indication that the PR introduces performance issues which should be investigated before the PR is approved")]),t._v(" "),s("li",[t._v("Due to an issue in GitHub Actions, only a simple test with a set number of VUs and duration is defined")])])])}),[],!1,null,null,null);e.default=a.exports}}]);