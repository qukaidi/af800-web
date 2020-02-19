<template>
  <f7-page name="afinsspection">
    <div class="ri-page">
      <div class="card">
        <div class="card-box">
          <div class="card-box1">
            <div class="con-text1">单&nbsp;&nbsp;&nbsp;&nbsp;号：</div>
            <div class="con-text2">{{modifyData.checkNo}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">人&nbsp;&nbsp;&nbsp;&nbsp;员：</div>
            <div class="con-text2">{{modifyData.checker}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">厂&nbsp;&nbsp;&nbsp;&nbsp;期：</div>
            <div class="con-text2">{{modifyData.factory}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">资产号：</div>
            <div class="con-text2">{{modifyData.deviceId}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">型&nbsp;&nbsp;&nbsp;&nbsp;号：</div>
            <div class="con-text2">{{modifyData.kbType}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">阴极块：</div>
            <div class="con-text2">{{modifyData.cathode}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">提交时间：</div>
            <div class="con-text2">{{modifyData.submitTime}}</div>
          </div>
        </div>
      </div>

      <div class="list card">
        <div class="list inset">
          <ul>
            <li>
              <a href="#" class="item-link item-content" @click="sheetOpened = true">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">拆卸原因</div>
                  <div class="item-after">{{selected|isSelectd}}</div>
                  <f7-sheet
                    class="demo-sheet"
                    :opened="sheetOpened"
                    @sheet:closed="sheetOpened = false"
                    @sheet:open="onSheetOpen"
                  >
                    <f7-toolbar>
                      <div class="left">
                        <f7-link sheet-close>关闭</f7-link>
                      </div>
                      <div class="right">
                        <f7-link @click="onSheetSubmit">确定</f7-link>
                      </div>
                    </f7-toolbar>
                    <f7-page-content>
                      <f7-block>
                        <f7-list>
                          <f7-list-item
                            v-for="item in disassembleList"
                            :key="item"
                            radio
                            :title="item"
                            :checked="tempSelected===item"
                            @click="tempSelected=item"
                          ></f7-list-item>
                        </f7-list>
                      </f7-block>
                    </f7-page-content>
                  </f7-sheet>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-content black-font">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">机床加工数</div>
                  <div class="item-after">
                    <f7-stepper fill :min="0" :max="999999" ref="stepper"></f7-stepper>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content" id="demo-picker-describe">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">更换日期</div>
                  <div class="item-after">{{selected4?dateFormat(selected4):'请选择'}}</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content" @click="sheetOpened2 = true">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">班组</div>
                  <div class="item-after">{{selected2|isSelectd}}</div>
                  <f7-sheet
                    class="demo-sheet"
                    :opened="sheetOpened2"
                    @sheet:closed="sheetOpened2 = false"
                    @sheet:open="onSheetOpen2"
                  >
                    <f7-toolbar>
                      <div class="left">
                        <f7-link sheet-close>关闭</f7-link>
                      </div>
                      <div class="right">
                        <f7-link @click="onSheetSubmit2">确定</f7-link>
                      </div>
                    </f7-toolbar>
                    <f7-page-content>
                      <f7-block>
                        <f7-list>
                          <f7-list-item
                            radio
                            v-for="item in groupList"
                            :key="item"
                            :title="item"
                            :checked="tempSelected2===item"
                            @click="tempSelected2=item"
                          ></f7-list-item>
                        </f7-list>
                      </f7-block>
                    </f7-page-content>
                  </f7-sheet>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content" @click="sheetOpened3 = true">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">班次</div>
                  <div class="item-after">{{selected3|isSelectd}}</div>
                  <f7-sheet
                    class="demo-sheet"
                    :opened="sheetOpened3"
                    @sheet:closed="sheetOpened3 = false"
                    @sheet:open="onSheetOpen3"
                  >
                    <f7-toolbar>
                      <div class="left">
                        <f7-link sheet-close>关闭</f7-link>
                      </div>
                      <div class="right">
                        <f7-link @click="onSheetSubmit3">确定</f7-link>
                      </div>
                    </f7-toolbar>
                    <f7-page-content>
                      <f7-block>
                        <f7-list>
                          <f7-list-item
                            radio
                            v-for="item in ShiftList"
                            :key="item"
                            :title="item"
                            :checked="tempSelected3===item"
                            @click="tempSelected3=item"
                          ></f7-list-item>
                        </f7-list>
                      </f7-block>
                    </f7-page-content>
                  </f7-sheet>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-content black-font">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title item-pr">备注</div>
                  <div class="item-input-wrap">
                    <textarea class="resizable" placeholder="请输入备注内容" v-model="remarks"></textarea>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ri_buttom">
        <f7-button raised large fill @click="onCommit">提交</f7-button>
      </div>
    </div>
  </f7-page>
</template>
<script>
import { f7Page, f7Stepper, f7Sheet, f7List, f7ListItem } from "framework7-vue";
import { updateKbCheck, fetMinMaxTime } from "@/api/kbcheck.js";
export default {
  props: {
    modifyData: null
  },
  filters: {
    isSelectd(value) {
      return value ? value : "请选择";
    }
  },
  data() {
    return {
      disassembleList: [
        "安装",
        "巡检",
        "换型",
        "到寿",
        "上限",
        "下限",
        "超上限",
        "超下限"
      ],
      groupList: ["A", "B", "C"],
      ShiftList: ["早班", "中班", "晚班"],
      id: this.modifyData.id,
      wordName: {},
      userInfo: {},
      toast: null,
      selected: null,
      selected2: null,
      selected3: null,
      selected4: null,
      sheetOpened: false,
      sheetOpened2: false,
      sheetOpened3: false,
      tempSelected: 1,
      tempSelected2: 1,
      tempSelected3: 1,
      remarks: "",
      cathodedata: null,
      data: {}
    };
  },
  components: {
    [f7Page.name]: f7Page,
    [f7Stepper.name]: f7Stepper,
    [f7Sheet.name]: f7Sheet,
    [f7List.name]: f7List,
    [f7ListItem.name]: f7ListItem
  },
  mounted() {
    this.selected = this.modifyData.disassemble;
    this.selected2 = this.modifyData.checkGroup;
    this.selected3 = this.modifyData.shift;
    const data = new Date(this.modifyData.replaceTime);
    this.selected4 = {
      year: data.getFullYear(),
      month: data.getMonth() + 1,
      day: data.getDate()
    };
    this.remarks = this.modifyData.remarks;
    this.$refs.stepper.setValue(this.modifyData.machineNumber);
    let that = this;
    this.$f7ready(f7 => {
      var today = new Date();
      var pickerDescribe = f7.picker.create({
        routableModals: false,
        inputEl: "#demo-picker-describe",
        value: [today.getFullYear(), today.getMonth() + 1, today.getDate()],
        renderToolbar: function() {
          return (
            '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            "</div>" +
            '<div class="right">' +
            '<a href="#" class="link sheet-close popover-close">确定</a>' +
            "</div>" +
            "</div>" +
            "</div>"
          );
        },
        cols: [
          {
            values: (function() {
              var arr = [];
              for (var i = 2016; i <= 2030; i++) {
                arr.push(i);
              }
              return arr;
            })(),
            displayValues: (function() {
              var arr = [];
              for (var i = 2016; i <= 2030; i++) {
                arr.push(i + "年");
              }
              return arr;
            })()
          },
          {
            values: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ],
            displayValues: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          },
          {
            values: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31
            ],
            displayValues: [
              "1日",
              "2日",
              "3日",
              "4日",
              "5日",
              "6日",
              "7日",
              "8日",
              "9日",
              "10日",
              "11日",
              "12日",
              "13日",
              "14日",
              "15日",
              "16日",
              "17日",
              "18日",
              "19日",
              "20日",
              "21日",
              "22日",
              "23日",
              "24日",
              "25日",
              "26日",
              "27日",
              "28日",
              "29日",
              "30日",
              "31日"
            ]
          }
        ],
        on: {
          open: function(picker) {
            picker.$el.find(".popover-close").on("click", function() {
              let data = new Object();
              data.year = picker.cols[0].value;
              data.month = picker.cols[1].value;
              data.day = picker.cols[2].value;
              that.selected4 = data;
            });
          },
          change: function(picker, values, displayValues) {
            var daysInMonth = new Date(
              picker.value[0],
              picker.value[1],
              0
            ).getDate();
            if (values[2] > daysInMonth) {
              picker.cols[2].setValue(daysInMonth);
            }
          }
        }
      });
    });
    this.toast = this.$f7.toast.create({
      text: "请输入备注信息",
      position: "top",
      closeTimeout: 1000
    });
    this.toast2 = this.$f7.toast.create({
      text: "您尚未修改，请更改拆卸原因，机床加工数，更换日期，班组或班次",
      position: "top",
      closeTimeout: 1000
    });
    this.getMinMaxTime();
  },
  methods: {
    dateFormat(val) {
      return `${val.year}-${val.month}-${val.day}`;
    },
    onSheetSubmit() {
      this.selected = this.tempSelected;
      this.sheetOpened = false;
    },
    onSheetSubmit2() {
      this.selected2 = this.tempSelected2;
      this.sheetOpened2 = false;
    },
    onSheetSubmit3() {
      this.selected3 = this.tempSelected3;
      this.sheetOpened3 = false;
    },
    onSheetOpen() {
      this.tempSelected = this.selected ? this.selected : 1;
    },
    onSheetOpen2() {
      this.tempSelected2 = this.selected2 ? this.selected2 : 1;
    },
    onSheetOpen3() {
      this.tempSelected3 = this.selected3 ? this.selected3 : 1;
    },
    search: function(data) {
      this.$emit("submit", data);
    },
    getMinMaxTime() {
      // fetMinMaxTime({
      //   replaceTime: this.modifyData.replaceTime,
      //   device: this.modifyData.deviceId,
      //   factory: this.modifyData.factory,
      //   type: this.modifyData.kbType,
      //   cathode: this.modifyData.cathode
      // }).then(result => {
      //   this.data = result;
      // });
    },
    datasCommit() {
      this.$f7.dialog.confirm("确定要提交吗？", "提示", () => {
        this.$f7.preloader.show();
        let obj = {
          id: this.id,
          disassemble: this.selected,
          group: this.selected2,
          shift: this.selected3,
          remarks: this.remarks
        };
        obj.replaceTime =
          this.selected4.year +
          "-" +
          this.selected4.month +
          "-" +
          this.selected4.day;
        obj.machineNumber = this.$refs.stepper.getValue();
        let subDate = new Date();
        obj.submitTime = `${subDate.getFullYear()}-${
          subDate.getMonth() < 10
            ? "0" + subDate.getMonth() + 1
            : subDate.getMonth() + 1
        }-${subDate.getDay() < 10 ? "0" + subDate.getDay() : subDate.getDay()}`;
        const cathodedata = {
          id: this.modifyData.id,
          device: this.modifyData.deviceId,
          factory: this.modifyData.factory,
          type: this.modifyData.kbType,
          cathode: this.modifyData.cathode
        };
        this.$f7.preloader.show();
        this.$f7router.navigate("/afpush", {
          props: {
            indata: cathodedata
          },
          reloadCurrent: true,
          reloadPrevious: true
        });
        // updateKbCheck(obj)
        // .then(result => {
        //   this.$f7router.navigate("/afdetails", {
        //     props: {
        //       indata: cathodedata
        //     },
        //     reloadCurrent: true,
        //     reloadPrevious: true
        //   });
        // })
        // .catch(error => console.log(JSON.stringify(error)))
        // .finally(() => {
        //   this.$f7.preloader.hide();
        // });
      });
    },
    onCommit() {
      const testdata = this.selected;
      this.$f7router.navigate("/afpush", {
        props: {
          indata: testdata
        },
        reloadCurrent: true,
        reloadPrevious: true
      });
      this.getreplaceTime = `${this.selected4.year}-${
        this.selected4.month < 10
          ? "0" + this.selected4.month
          : this.selected4.month
      }-${
        this.selected4.day < 10 ? "0" + this.selected4.day : this.selected4.day
      }`;
      // if (
      //   this.data.maxUpdateReplaceTime &&
      //   this.data.minUpdateReplaceTime == ""
      // ) {
      //   this.toastrepTime = this.$f7.toast.create({
      //     text: "更换时间应大于" + this.data.maxUpdateReplaceTime,
      //     position: "top",
      //     closeTimeout: 1000
      //   });
      // } else if (
      //   this.data.maxUpdateReplaceTime == "" &&
      //   this.data.minUpdateReplaceTime
      // ) {
      //   this.toastrepTime = this.$f7.toast.create({
      //     text: "更换时间应小于" + this.data.minUpdateReplaceTime,
      //     position: "top",
      //     closeTimeout: 1000
      //   });
      // } else if (
      //   this.data.maxUpdateReplaceTime &&
      //   this.data.minUpdateReplaceTime
      // ) {
      //   this.toastrepTime = this.$f7.toast.create({
      //     text:
      //       "更换时间应大于" +
      //       this.data.maxUpdateReplaceTime +
      //       "小于" +
      //       this.data.minUpdateReplaceTime,
      //     position: "top",
      //     closeTimeout: 1000
      //   });
      // }
      // if (
      //   this.selected != this.modifyData.disassemble ||
      //   this.selected2 != this.modifyData.checkGroup ||
      //   this.selected3 != this.modifyData.shift ||
      //   this.$refs.stepper.getValue() != this.modifyData.machineNumber ||
      //   this.getreplaceTime != this.modifyData.replaceTime
      // ) {
      //   if (this.remarks) {
      //     if (
      //       this.data.maxUpdateReplaceTime == "" &&
      //       this.data.minUpdateReplaceTime == ""
      //     ) {
      //       this.datasCommit();
      //     } else if (
      //       this.getreplaceTime > this.data.maxUpdateReplaceTime &&
      //       this.data.minUpdateReplaceTime == ""
      //     ) {
      //       this.datasCommit();
      //     } else if (
      //       this.data.maxUpdateReplaceTime == "" &&
      //       this.getreplaceTime < this.data.minUpdateReplaceTime
      //     ) {
      //       this.datasCommit();
      //     } else if (
      //       this.getreplaceTime > this.data.maxUpdateReplaceTime &&
      //       this.getreplaceTime < this.data.minUpdateReplaceTime
      //     ) {
      //       this.datasCommit();
      //     } else {
      //       this.toastrepTime.open();
      //     }
      //   } else {
      //     this.toast.open();
      //   }
      // } else {
      //   this.toast2.open();
      // }
    }
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
</style>
<style lang="scss" scoped>
.sheet-modal-inner {
  .page-content {
    background-color: #fff;
    .block {
      margin: 0 !important;
      height: 212px;
      overflow: scroll;
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
#demo-picker-describe {
  font-size: 17px !important;
}
.list .item-after {
  margin-right: -20px;
}
.list .item-link .item-inner::before {
  right: 5px !important;
}
.item-inner {
  margin-left: 2px !important;
  .item-title {
    min-width: 35px;
    font-size: 16px;
  }
}
</style>