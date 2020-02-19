<template>
  <f7-page name="afinsspection">
    <div class="ri-page">
      <div class="card">
        <div class="card-box">
          <div class="card-box1">
            <div class="con-text1">人&nbsp;&nbsp;&nbsp;&nbsp;员：</div>
            <div class="con-text2">{{userInfo}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">厂&nbsp;&nbsp;&nbsp;&nbsp;期：</div>
            <div class="con-text2">{{data.factory}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">资产号：</div>
            <div class="con-text2">{{data.device}}</div>
          </div>
          <div class="card-box1">
            <div class="con-text1">型&nbsp;&nbsp;&nbsp;&nbsp;号：</div>
            <div class="con-text2">{{data.type}}</div>
          </div>
        </div>
      </div>
      <div class="card">
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
              <div class="item-inner item-cell" v-if="selected=='安装'||selected=='巡检'">
                <div class="item-title-row">
                  <div class="item-title">阴极块</div>
                </div>
                <div class="item-subtitle">
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="1" />
                        <i class="icon-checkbox"></i>
                      </label> 第1块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="2" />
                        <i class="icon-checkbox"></i>
                      </label> 第2块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="3" />
                        <i class="icon-checkbox"></i>
                      </label> 第3块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="4" />
                        <i class="icon-checkbox"></i>
                      </label> 第4块
                    </div>
                  </div>
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="5" />
                        <i class="icon-checkbox"></i>
                      </label> 第5块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="6" />
                        <i class="icon-checkbox"></i>
                      </label> 第6块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="7" />
                        <i class="icon-checkbox"></i>
                      </label> 第7块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="8" />
                        <i class="icon-checkbox"></i>
                      </label> 第8块
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-inner item-cell" v-if="selected=='换型'">
                <div class="item-title-row">
                  <div class="item-title" v-if="data.type=='342E'">阴极块 342E</div>
                  <div class="item-title" v-else>阴极块 342F</div>
                </div>
                <div class="item-subtitle">
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="1" />
                        <i class="icon-checkbox"></i>
                      </label> 第1块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="2" />
                        <i class="icon-checkbox"></i>
                      </label> 第2块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="3" />
                        <i class="icon-checkbox"></i>
                      </label> 第3块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="4" />
                        <i class="icon-checkbox"></i>
                      </label> 第4块
                    </div>
                  </div>
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="5" />
                        <i class="icon-checkbox"></i>
                      </label> 第5块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="6" />
                        <i class="icon-checkbox"></i>
                      </label> 第6块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="7" />
                        <i class="icon-checkbox"></i>
                      </label> 第7块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="8" />
                        <i class="icon-checkbox"></i>
                      </label> 第8块
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-inner item-cell" v-if="selected=='换型'">
                <div class="item-title-row">
                  <div class="item-title" v-if="data.type=='342E'">阴极块 342F</div>
                  <div class="item-title" v-else>阴极块 342E</div>
                </div>
                <div class="item-subtitle">
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="1" />
                        <i class="icon-checkbox"></i>
                      </label> 第1块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="2" />
                        <i class="icon-checkbox"></i>
                      </label> 第2块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="3" />
                        <i class="icon-checkbox"></i>
                      </label> 第3块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="4" />
                        <i class="icon-checkbox"></i>
                      </label> 第4块
                    </div>
                  </div>
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="5" />
                        <i class="icon-checkbox"></i>
                      </label> 第5块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="6" />
                        <i class="icon-checkbox"></i>
                      </label> 第6块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="7" />
                        <i class="icon-checkbox"></i>
                      </label> 第7块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="8" />
                        <i class="icon-checkbox"></i>
                      </label> 第8块
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="item-inner item-cell"
                v-if="selected=='到寿'||selected=='上限'||selected=='下限'||selected=='超上限'||selected=='超下限'"
              >
                <div class="item-title-row">
                  <div class="item-title">旧阴极块</div>
                </div>
                <div class="item-subtitle">
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="1" />
                        <i class="icon-checkbox"></i>
                      </label> 第1块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="2" />
                        <i class="icon-checkbox"></i>
                      </label> 第2块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="3" />
                        <i class="icon-checkbox"></i>
                      </label> 第3块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="4" />
                        <i class="icon-checkbox"></i>
                      </label> 第4块
                    </div>
                  </div>
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="5" />
                        <i class="icon-checkbox"></i>
                      </label> 第5块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="6" />
                        <i class="icon-checkbox"></i>
                      </label> 第6块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="7" />
                        <i class="icon-checkbox"></i>
                      </label> 第7块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="oldCathodes" value="8" />
                        <i class="icon-checkbox"></i>
                      </label> 第8块
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="item-inner item-cell"
                v-if="selected=='到寿'||selected=='上限'||selected=='下限'||selected=='超上限'||selected=='超下限'"
              >
                <div class="item-title-row">
                  <div class="item-title">新阴极块</div>
                </div>
                <div class="item-subtitle">
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="1" />
                        <i class="icon-checkbox"></i>
                      </label> 第1块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="2" />
                        <i class="icon-checkbox"></i>
                      </label> 第2块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="3" />
                        <i class="icon-checkbox"></i>
                      </label> 第3块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="4" />
                        <i class="icon-checkbox"></i>
                      </label> 第4块
                    </div>
                  </div>
                  <div class="item-row row-mt-mb">
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="5" />
                        <i class="icon-checkbox"></i>
                      </label> 第5块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="6" />
                        <i class="icon-checkbox"></i>
                      </label> 第6块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="7" />
                        <i class="icon-checkbox"></i>
                      </label> 第7块
                    </div>
                    <div class="item-cell">
                      <label class="checkbox">
                        <input type="checkbox" v-model="newCathodes" value="8" />
                        <i class="icon-checkbox"></i>
                      </label> 第8块
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="item-content black-font">
                <div class="item-media">
                  <i class="icon icon-f7"></i>
                </div>
                <div class="item-inner">
                  <div class="item-title">机床加工数</div>
                  <div class="item-after">
                    <f7-stepper fill :min="0" :max="99999999" ref="step"></f7-stepper>
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
                            v-for="item in shift"
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
          </ul>
        </div>
      </div>
      <div class="ri_buttom">
        <f7-button raised large fill @click="onSubmit">提交</f7-button>
      </div>
    </div>
  </f7-page>
</template>
<script>
import { f7Page, f7Stepper, f7Sheet, f7List, f7ListItem } from "framework7-vue";
import { fetchKbCathode, addKbList } from "@/api/kbcheck.js";
import { fetchUserInfo } from "@/api/user.js";

import qs from "query-string";
export default {
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
      shift: ["早班", "中班", "晚班"],
      id: null,
      data: {},
      repTime: null,
      userInfo: null,
      toast: null,
      selected: null,
      selected2: null,
      selected3: null,
      selected4: null,
      sheetOpened: false,
      sheetOpened2: false,
      sheetOpened3: false,
      tempSelected: null,
      tempSelected2: null,
      tempSelected3: null,
      newCathodes: [],
      oldCathodes: []
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
    let that = this;
    this.$f7ready(f7 => {
      var today = new Date();
      var pickerDescribe = f7.picker.create({
        routableModals: false,
        inputEl: "#demo-picker-describe",
        value: [today.getFullYear(), today.getMonth() + 1, today.getDate()],
        renderToolbar: function() {
          let { activeElement } = document;
          console.log(activeElement.tagName);
          if (activeElement && activeElement.tagName === "INPUT") {
            activeElement.blur();
          }
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
              let arr = [];
              for (let i = 2016; i <= 2030; i++) {
                arr.push(i);
              }
              return arr;
            })(),
            displayValues: (function() {
              let arr = [];
              for (let i = 2016; i <= 2030; i++) {
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
    this.cathodeId = this.$f7route.query.cathodeId;
    this.getKbCathode();
    this.getUserInfo();
    this.toastCenter = this.$f7.toast.create({
      text: "提交成功",
      position: "center",
      closeTimeout: 2000
    });
    this.toastErr = this.$f7.toast.create({
      text: "提交失败",
      position: "center",
      closeTimeout: 2000
    });
    this.toast = this.$f7.toast.create({
      text: "所有值都不能为空",
      position: "top",
      closeTimeout: 1000
    });
    this.toastStepper = this.$f7.toast.create({
      text: "加工数不能低于上个数",
      position: "top",
      closeTimeout: 1000
    });
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
      this.tempSelected = this.selected ? this.selected : "安装";
    },
    onSheetOpen2() {
      this.tempSelected2 = this.selected2 ? this.selected2 : "A";
      this.$$(".stepper-input-wrap>input")[0].blur();
    },
    onSheetOpen3() {
      this.tempSelected3 = this.selected3 ? this.selected3 : "早班";
      this.$$(".stepper-input-wrap>input")[0].blur();
    },
    getKbCathode() {
      // this.$f7.preloader.show();
      fetchKbCathode(this.cathodeId).then(result => {
        this.data = result;
        // fetchrepTime({
        //   ...this.data
        // })
        // .then(result => {
        //   this.repTime = result;
        //   this.toastrepTime = this.$f7.toast.create({
        //     text: "更换时间应大于" + this.repTime,
        //     position: "top",
        //     closeTimeout: 1000
        //   });
        // })
        // .finally(() => {
        //   this.$f7.preloader.hide();
        // });
      });
    },
    onSubmit() {
      let obj = {};
      let isSubmit = true;
      obj.cathodeId = this.cathodeId;
      obj.checker = this.userInfo;
      obj.device = this.data.device;
      obj.disassemble = this.selected;
      obj.factory = this.data.factory;
      obj.group = this.selected2;
      obj.shift = this.selected3;
      if (this.selected == "换型" && this.data.type == "342E") {
        obj.oldType = "342E";
        obj.newType = "342F";
      } else if (this.selected == "换型" && this.data.type == "342F") {
        obj.oldType = "342F";
        obj.newType = "342E";
      } else if (this.selected != "换型") {
        obj.oldType = "";
        obj.newType = this.data.type;
      }
      obj.oldCathodeList = this.oldCathodes.map(Number);
      obj.newCathodeList = this.newCathodes.map(Number);
      if (this.selected4 == null) {
        isSubmit = false;
      } else {
        obj.replaceTime = `${this.selected4.year}-${
          this.selected4.month < 10
            ? "0" + this.selected4.month
            : this.selected4.month
        }-${
          this.selected4.day < 10
            ? "0" + this.selected4.day
            : this.selected4.day
        }`;
        obj.machineNumber = this.$refs.step.getValue();
        let subDate = new Date();
        obj.submitTime = `${subDate.getFullYear()}-${
          subDate.getMonth() < 10
            ? "0" + (subDate.getMonth() + 1)
            : subDate.getMonth() + 1
        }-${
          subDate.getDate() < 10 ? "0" + subDate.getDate() : subDate.getDate()
        } ${
          subDate.getHours() < 10
            ? "0" + subDate.getHours()
            : subDate.getHours()
        }:${
          subDate.getMinutes() < 10
            ? "0" + subDate.getMinutes()
            : subDate.getMinutes()
        }:${
          subDate.getSeconds() < 10
            ? "0" + subDate.getSeconds()
            : subDate.getSeconds()
        }`;
      }
      if (this.selected == "安装" || this.selected == "巡检") {
        if (
          obj.disassemble == null ||
          obj.machineNumber == 0 ||
          obj.replaceTime == null ||
          obj.group == null ||
          obj.shift == null ||
          obj.newCathodeList.length == 0
        ) {
          isSubmit = false;
        }
      } else {
        if (
          obj.disassemble == null ||
          obj.machineNumber == 0 ||
          obj.replaceTime == null ||
          obj.group == null ||
          obj.shift == null ||
          obj.newCathodeList.length == 0 ||
          obj.oldCathodeList.length == 0
        ) {
          isSubmit = false;
        }
      }
      if (isSubmit) {
        // if (obj.replaceTime > this.repTime) {
        this.$f7.dialog.confirm("确定要提交吗？", "提示", () => {
          // const cathodedata = {
          //   device: this.data.device,
          //   type: this.data.type,
          //   cathode: this.data.cathode,
          //   factory: this.data.factory
          // };
          // const testdata = this.selected;
          // this.$f7router.navigate("/afdetails", {
          //   props: {
          //     indata: testdata
          //   },
          //   reloadCurrent: true,
          //   reloadPrevious: true
          // });
          // this.$f7.preloader.show();

          addKbList(obj)
            .then(response => {
              const cathodedata = {
                // id: response,
                // device: this.data.device,
                // type: this.data.type,
                // cathode: this.data.cathode,
                // factory: this.data.factory,
                  t:response,
              };
              console.log(cathodedata);
              this.$f7router.navigate("/afdetails", {
                props: {
                  indata: cathodedata
                },
                reloadCurrent: true,
                reloadPrevious: true
              });
            })
            .catch(error => {
              console.log(error);
            })
            .finally(() => {
              this.$f7.preloader.hide();
              this.toastCenter.open();
              this.toastErr.open();
            });
        });
        // } else {
        //   this.toastrepTime.open();
        // }
      } else {
        this.toast.open();
      }
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
  .card-box {
    .card-box1 {
      display: flex;
      flex-direction: row;
    }
  }
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
  width: 65px;
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
.stepper-button,
.stepper-button-minus,
.stepper-button-plus {
  background-color: #4682b4 !important;
  border: var(--f7-stepper-border-width) solid #4682b4 !important;
}
.stepper-input-wrap,
.stepper-value {
  border-top: var(--f7-stepper-border-width) solid #4682b4 !important;
  border-bottom: var(--f7-stepper-border-width) solid #4682b4 !important;
}
</style>
<style lang="scss" scoped>
.row-mt-mb {
  margin: 5px 0 5px 0;
}
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
  font-size: 16px !important;
}
.ios {
  --f7-toast-bg-color: rgba(0, 0, 0, 0.75);
  --f7-toast-bg-color-rgb: 0, 0, 0;
  --f7-toast-padding-horizontal: 16px;
  --f7-toast-padding-vertical: 12px;
  --f7-toast-border-radius: 8px;
  --f7-toast-button-min-width: 64px;
}
.list .item-title {
  font-size: 16px;
}
.list .item-after {
  margin-right: -20px;
}
.list .item-link .item-inner::before {
  right: 5px !important;
}
.item-inner {
  margin-left: 2px !important;
}
.md .checkbox i,
.md .icon-checkbox {
  --f7-checkbox-size: 22px !important;
  --f7-checkbox-border-radius: 50% !important;
  --f7-checkbox-border-width: 1px !important;
  --f7-checkbox-extra-margin: 0px !important;
  --f7-checkbox-inactive-color: #c7c7cc !important;
}
</style>