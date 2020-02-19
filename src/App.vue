<template>
  <f7-app :params="f7params">
    <f7-view main :push-state="true"></f7-view>
  </f7-app>
</template>
<script>
import { f7App, f7View } from "framework7-vue";
import Error from "./views/Error.vue";
import Test from "./views/Del.vue";
import AfDetails from "./views/AfDetails.vue";
import AfInspection from "./views/AfInspection";
import FixResult from "./views/FixResult";
import FixAfInspection from "./views/FixAfInspection";
import AfWeekPreport from "./views/AfWeekPreport";
import AfNote from "./views/AfNote";
import AfInquire from "./views/AfInquire";
import AfPush from "./views/AfPush";
import { KBSAuth } from "@/utils/auth";
export default {
  components: {
    [f7App.name]: f7App,
    [f7View.name]: f7View
  },
  data() {
    return {
      f7params: {
        name: "My App",
        id: "com.myapp.test",
        touch: {
          mdTouchRipple: false
        },
        dialog: {
          buttonOk: "确定",
          buttonCancel: "取消"
        },
        smartSelect: {
          sheetCloseLinkText: "确定",
          setValueText: false
        },
        routes: [
          {
            path: "/error",
            name: "Error",
            component: Error
          },
          {
            path: "/test",
            name: "Test",
            component: Test
          },
          {
            path: "/afdetails",
            name: "afdetails",
            component: AfDetails,
            // beforeEnter: KBSAuth,
          },
          {
            path: "/afinspection",
            name: "afinspection",
            component: AfInspection,
            // beforeEnter: KBSAuth,
            options:{
              history:false
            }
          },
          {
            path: "/fixresult",
            name: "fixresult",
            component: FixResult,
            beforeEnter: KBSAuth
          },
          {
            path: "/fixafinspection",
            name: "fixafinspection",
            component: FixAfInspection,
            beforeEnter: KBSAuth
          },
          {
            path: "/afweekpreport",
            name: "afweekpreport",
            component: AfWeekPreport,
            beforeEnter: KBSAuth
          },
          {
            path: "/afnote",
            name: "afnote",
            component: AfNote,
            beforeEnter: KBSAuth
          },
          {
            path: "/afinquire",
            name: "afinquire",
            component: AfInquire,
            beforeEnter: KBSAuth
          },
          {
            path: "/afpush",
            name: "afpush",
            component: AfPush,
            beforeEnter: KBSAuth
          }
        ]
      }
    };
  }
};
</script>

