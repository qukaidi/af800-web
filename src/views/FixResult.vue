<template>
  <f7-page name="afinsspection">
    <div class="ri-page">
      <back-navbar></back-navbar>
      <div class="card">
        <div class="card-box">
          <div class="card-box1">
            <div class="con-text1">单&nbsp;&nbsp;&nbsp;&nbsp;号：</div>
            <div class="con-text2">{{showData.checkNo}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">人&nbsp;&nbsp;&nbsp;&nbsp;员：</div>
            <div class="con-text2">{{showData.checker}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">厂&nbsp;&nbsp;&nbsp;&nbsp;期：</div>
            <div class="con-text2">{{showData.factory}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">资产号：</div>
            <div class="con-text2">{{showData.deviceId}}</div>
          </div>
              <div class="card-box1">
            <div class="con-text1">型号：</div>
            <div class="con-text2">342E</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">阴极块：</div>
            <div class="con-text2">1</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">提交时间：</div>
            <div class="con-text2">{{showData.submitTime}}</div>
          </div>
        </div>
      </div>
      <div class="list card">
        <div class="list inset">
          <ul>
                    <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">拆卸原因</div>
                  <div class="item-after">{{showData.disassemble}}</div>
                </div>
              </div>
            </li>
                    <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">加床加工数</div>
                  <div class="item-after">{{showData.machineNumber}}</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">更换日期</div>
                  <div class="item-after">{{showData.replaceTime|formatDate}}</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">班组</div>
                  <div class="item-after">{{showData.checkGroup}}</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">班次</div>
                  <div class="item-after">{{showData.shift}}</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">备注</div>
                  <div class="item-after">{{showData.remarks}}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="ri_buttom">
        <f7-button raised large fill @click="inModify">修改</f7-button>
      </div>
    </div>
  </f7-page>
</template>
<script>
import { f7Page, f7Stepper, f7Sheet, f7List, f7ListItem } from "framework7-vue";
import { fetchKbIdList } from "@/api/kbcheck.js";
import { fetchUserInfo } from "@/api/user.js";
import qs from "query-string";
import BackNavbar from "@/components/navbar/BackNavbar";
export default {
  props: {
    inData: null
  },
  data() {
    return {
      queyr: null,
      showData: {
        checkNo: "2019121610083813",
        checker: "Admin",
        factory: "一期",
        deviceId: "800.9",
        kbType: "342E",
        cathode: "1",
        life: "0",
        estimateLife: "17000",
        replaceTime: "2019-12-16",
        submitTime: "2019-12-16 10:38:09",
        checkGroup: "A",
        shift: "早",
        machineNumber: "99999999",
        disassemble: "换型"
      },
      itemId: this.inData.id,
      userInfo: null
    };
  },
  components: {
    [f7Page.name]: f7Page,
    [f7Stepper.name]: f7Stepper,
    [f7Sheet.name]: f7Sheet,
    [f7List.name]: f7List,
    [f7ListItem.name]: f7ListItem,
    BackNavbar
  },
  methods: {
    getKbIdList() {
      this.$f7.preloader.show();
      let path;
      if (this.queyr.id) {
        path = `${this.queyr.id}?${qs.stringify(this.queyr)}`;
      } else {
        path = `${this.itemId}?${qs.stringify(this.inData)}`;
      }
      fetchKbIdList(path)
        .then(result => {
          this.showData = result;
        })
        .catch(error => {})
        .finally(() => {
          this.$f7.preloader.hide();
        });
    },
    inModify() {
      this.$f7router.navigate("/fixafinspection", {
        props: {
          modifyData: {
            ...this.showData,
            id: this.itemId
          }
        }
      });
    },
    getUserInfo() {
      fetchUserInfo()
        .then(result => {
          this.userInfo = result.data.displayName;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.$f7.preloader.hide();
    this.queyr = this.$f7route.query;
    this.getKbIdList();
    this.getUserInfo();
  }
};
</script>
<style lang="scss">
.ri-page {
  margin-bottom: 10px;
  .ri_buttom {
    margin: 10px;
  }
}
.page {
  background-color: #efeff4 !important;
}
.box_num {
  padding-top: 5px;
}
.card-content-padding {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}

.card {
  background: #fff !important;
  position: relative !important;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2) !important;
}

input:not(.item-input-outline) .item-input-wrap::after {
  height: 0px !important;
}
.md .input:not(.input-outline)::after,
.md .item-input:not(.item-input-outline) .item-input-wrap::after {
  height: 0px !important;
}
.md {
  --f7-radio-size: 18px !important;
  --f7-radio-border-width: 1px !important;
}
.row {
  align-items: center !important;
}
.list .item-content {
  padding-left: 0px !important;
}
.button {
  background-color: #4682b4 !important;
}
.no-border-bottom {
  border-bottom-width: 0px;
}
.con-text1 {
  display: inline-block;
  color: gray;
  font-size: 16px;
  width: 80px;
}
.con-text2 {
  font-size: 16px;
  display: block;
  word-break: normal;
  width: auto;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
}
.stepper-input-wrap input {
  width: 64px !important;
}
.black-font {
  color: #000;
}
.sheet-modal-inner {
  .page-content {
    .block {
      .list ul::before {
        height: 0 !important;
      }
      .list ul::after {
        height: 0 !important;
      }
    }
  }
}
.item-pr {
  padding-right: 20px;
}
</style>
<style lang="scss" scoped>
.sheet-modal-inner {
  .page-content {
    background-color: #fff;
    .block {
      margin: 0 !important;
      .list {
        margin: 0 !important;
      }
      .list ul::before {
        height: 0 !important;
      }
      .list ul::after {
        height: 0 !important;
      }
    }
  }
}
.md .list .item-media {
  min-width: 0;
}
.item-inner {
  margin-left: 2px !important;
}
.list .item-title {
  font-size: 16px;
}
.buttomoff {
  display: none;
}
</style>