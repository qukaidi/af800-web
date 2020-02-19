<template>
  <f7-page name="f7note" :page-content="false">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner navber-plr">
        <div
          :class="{sheetyes:!(selected==null||selected==''),sheeton:(selected==null||selected=='')}"
          @click="sheetOpened = true"
        >
          {{selected|opt}}
          <img src="../assets/Filter.png" class="icon-af-down" />
        </div>
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
                  radio
                  v-for="(item,index) in factory"
                  :key="index"
                  :title="item"
                  :checked="tempSelected===item"
                  @click="tempSelected=item"
                ></f7-list-item>
              </f7-list>
            </f7-block>
          </f7-page-content>
        </f7-sheet>
        <div
          :class="{sheeton:!(selected==null||selected==''),sheetoff:(selected==null||selected==''),sheetyes:!(selected2==null||selected2=='')}"
          @click="sheetOpened2 = !(selected==null||selected=='')"
        >
          {{selected2|opt2}}
          <img src="../assets/Filter.png" class="icon-af-down" />
        </div>
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
                  v-for="(item,index) in deviceList"
                  :key="index"
                  :title="item"
                  :checked="tempSelected2===item"
                  @click="tempSelected2=item"
                ></f7-list-item>
              </f7-list>
            </f7-block>
          </f7-page-content>
        </f7-sheet>
        <div
          :class="{sheeton:!(selected2==null||selected2==''),sheetoff:(selected2==null||selected2==''),sheetyes:!(selected3==null||selected3=='')}"
          @click="sheetOpened3 = !(selected2==null||selected2=='')"
        >
          {{selected3|opt3}}
          <img src="../assets/Filter.png" class="icon-af-down" />
        </div>
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
                  v-for="(item,index) in typeList"
                  :key="index"
                  :title="item"
                  :checked="tempSelected3===item"
                  @click="tempSelected3=item"
                ></f7-list-item>
              </f7-list>
            </f7-block>
          </f7-page-content>
        </f7-sheet>
        <div
          :class="{sheeton:!(selected3==null||selected3==''),sheetoff:(selected3==null||selected3==''),sheetyes:!(selected4==null||selected4=='')}"
          @click="sheetOpened4 = !(selected3==null||selected3=='')"
        >
          {{selected4|opt4}}
          <img src="../assets/Filter.png" class="icon-af-down" />
        </div>
        <f7-sheet
          class="demo-sheet"
          :opened="sheetOpened4"
          @sheet:closed="sheetOpened4 = false"
          @sheet:open="onSheetOpen4"
        >
          <f7-toolbar>
            <div class="left">
              <f7-link sheet-close>关闭</f7-link>
            </div>
            <div class="right">
              <f7-link @click="onSheetSubmit4">确定</f7-link>
            </div>
          </f7-toolbar>
          <f7-page-content>
            <f7-block>
              <f7-list>
                <f7-list-item
                  radio
                  v-for="(item,index) in cathodeList"
                  :key="index"
                  :title="item|parseintDate"
                  :checked="tempSelected4===item"
                  @click="tempSelected4=item"
                ></f7-list-item>
              </f7-list>
            </f7-block>
          </f7-page-content>
        </f7-sheet>

        <div class="date-select sheeton" @click="onOpenCalendarDialog">
          <div v-if="!startDateVal" class="all">
            更换时间
            <img src="../assets/Filter.png" class="icon-af-down" />
          </div>
          <div v-else :class="{labeloff:!startDateVal,labelon:startDateVal}">
            <div>{{startDateVal|dateToMonthAndWeek}}</div>
            <div>{{endDateVal|dateToMonthAndWeek}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content infinite-scroll-content" ref="scrollList">
      <div class="card" v-for="(list,index) in lists" :key="index" @click="opencard(list)">
        <div class="text-box">
          <div>
            <strong>单&nbsp;&nbsp;&nbsp;&nbsp;号：{{list.checkNo}}</strong>
          </div>
        </div>
        <div class="text-box">
          <div>人&nbsp;&nbsp;&nbsp;&nbsp;员：{{list.checker}}</div>
        </div>
        <div class="text-box">
          <div>厂&nbsp;&nbsp;&nbsp;&nbsp;期： {{list.factory}}</div>
        </div>
        <div class="text-box">
          <div>资产号：{{list.deviceId}}</div>
        </div>
        <div class="text-box">
          <div>型&nbsp;&nbsp;&nbsp;&nbsp;号：{{list.type}}</div>
        </div>
        <div class="text-box">
          <div>阴极块：{{list.cathode}}</div>
        </div>
        <div class="text-box">
          <div>机床加工数：{{list.jcNumber}}</div>
        </div>
        <div class="text-box">
          <div v-if="list.life!=null">寿&nbsp;&nbsp;&nbsp;&nbsp;命：{{list.life}}</div>
          <div v-else>寿&nbsp;&nbsp;&nbsp;&nbsp;命：-</div>
        </div>
        <div class="text-box">
          <div v-if="list.estimateLife!=null">剩余寿命：{{list.estimateLife}}</div>
          <div v-else>寿命期限：-</div>
        </div>
        <div class="text-box">
          <div>更换时间：{{list.replaceTime|formatDate}}</div>
        </div>
        <div class="text-box">
          <div>提交时间：{{list.submitTime}}</div>
        </div>
      </div>
      <div class="preloader infinite-scroll-preloader" v-show="!allowInfinite"></div>
      <!-- <div class="block" v-show="isNotFound">
        <div class="block-inner">Nothing found</div>
      </div>-->
    </div>
  </f7-page>
</template>

<script>
import { f7Page, f7Sheet, f7List, f7ListItem } from "framework7-vue";
import BackNavbar from "@/components/navbar/BackNavbar";
// import {
//   fetchFactory,
//   fetchDevice,
//   fetchType,
//   fetchCathode,
//   fetchTime,
//   addPagelist
// } from "@/api/kbcheck.js";
import { log } from "util";
export default {
  filters: {
    opt(value) {
      return value ? value : "厂期";
    },
    opt2(value) {
      return value ? value : "资产号";
    },
    opt3(value) {
      return value ? value : "型号";
    },
    opt4(value) {
      return parseInt(value) ? parseInt(value) : "阴极块";
    },
    dateToMonthAndWeek(value) {
      let date = new Date(value);
      return `${date.getMonth() + 1}-${date.getDate()}`;
    }
  },
  data() {
    return {
      openFlag: false,
      selected: "",
      sheetOpened: false,
      tempSelected: 1,
      selected2: "",
      sheetOpened2: false,
      tempSelected2: 1,
      selected3: "",
      sheetOpened3: false,
      tempSelected3: 1,
      selected4: "",
      sheetOpened4: false,
      tempSelected4: 1,
      picker: null,
      startDateVal: null,
      endDateVal: null,
      isInited: false,
      lastDate: null,
      isCurrentLeft: true,
      isActived: true,
      leftDateDoms: null,
      rightDateDoms: null,
      factory: ["全部", "一期", "二期", "三期"],
      num: {},
      obj: {},
      data: {},
      pagelist: 10,
      page: 1,
      lists: [
        {
          checkNo: "2019121610083813",
          checker: "Admin",
          factory: "一期",
          deviceId: "800.9",
          type: "342E",
          cathode: "1",
          jcNumber: "010203",
          life: "0",
          estimateLife: "17000",
          replaceTime: "2019-12-16",
          submitTime: "2019-12-16 10:38:09"
        },
        {
          checkNo: "2019121610083813",
          checker: "Admin",
          factory: "一期",
          deviceId: "800.9",
          type: "342E",
          cathode: "2",
          jcNumber: "010203",
          life: "0",
          estimateLife: "17000",
          replaceTime: "2019-12-16",
          submitTime: "2019-12-16 10:38:09"
        },
        {
          checkNo: "2019121610083813",
          checker: "Admin",
          factory: "一期",
          deviceId: "800.9",
          type: "342F",
          cathode: "1",
          jcNumber: "010203",
          life: "0",
          estimateLife: "17000",
          replaceTime: "2019-12-16",
          submitTime: "2019-12-16 10:38:09"
        },
        {
          checkNo: "2019121610083813",
          checker: "Admin",
          factory: "一期",
          deviceId: "800.9",
          type: "342F",
          cathode: "2",
          jcNumber: "010203",
          life: "0",
          estimateLife: "17000",
          replaceTime: "2019-12-16",
          submitTime: "2019-12-16 10:38:09"
        }
      ],
      deviceList: ["全部", "243E", "243F"],
      typeList: [
        "全部",
        "800.1",
        "800.2",
        "800.3",
        "800.4",
        "800.5",
        "800.6",
        "800.7",
        "800.8",
        "800.9"
      ],
      cathodeList: ["1", "2", "3", "4", "5", "6", "7", "8"],
      startTime: null,
      endTime: null,
      isFinish: false,
      allowInfinite: true,
      isNotFound: false
    };
  },
  components: {
    [f7Page.name]: f7Page,
    [f7Sheet.name]: f7Sheet,
    [f7List.name]: f7List,
    [f7ListItem.name]: f7ListItem
  },
  methods: {
    opencard(data) {
      this.$f7router.navigate("/fixresult", {
        props: {
          inData: {
            id: data.id,
            device: data.deviceId,
            factory: data.factory,
            type: data.type,
            cathode: data.cathode
          }
        }
      });
    },
    fetchData() {
      let obj = {};
      obj.cathode = this.selected4;
      obj.currentPage = this.page;
      obj.device = this.selected2;
      obj.endTime = this.endTime;
      obj.factory = this.selected;
      obj.limit = this.pagelist;
      obj.startTime = this.startTime;
      obj.type = this.selected3;
      return obj;
    },
    getFactory() {
      // fetchFactory().then(result => {
      // this.factory = result;
      // });
    },
    getPagelist() {
      // this.$f7.preloader.show();
      // let obj = this.fetchData();
      // addPagelist(obj)
      // .then(data => {
      //   if (this.page === 1) {
      //     this.lists = [];
      //   }
      //   if (data.code === 302) {
      //     this.isNotFound = true;
      //     return;
      //   }
      //   this.page++;
      //   this.lists = [...this.lists, ...data.pageData];
      //   if (this.lists.length >= data.totalCount) {
      //     this.isFinish = true;
      //   }
      // })
      // .catch(error => {})
      // .finally(() => {
      // this.allowInfinite = true;
      // this.$f7.preloader.hide();
      // });
    },
    fetchNoteDataByOBJ() {
      this.page = 1;
      // (this.isFinish = false),
      //   (this.allowInfinite = true),
      //   (this.isNotFound = false),
      this.getPagelist();
    },
    onSheetSubmit() {
      this.selected = this.tempSelected;
      this.sheetOpened = false;
      let obj = this.fetchData();
      if (this.selected) {
        // fetchDevice({ factory: this.selected }).then(result => {
        //   this.deviceList = result;
        //   this.selected2 = "";
        //   this.selected3 = "";
        //   this.selected4 = "";
        // });
        // this.deviceList = [1, 3, 4];
      } else {
        this.deviceList = "";
      }
      this.fetchNoteDataByOBJ();
    },
    onSheetOpen() {
      this.tempSelected = this.factory[0];
    },
    onSheetSubmit2() {
      this.selected2 = this.tempSelected2;
      this.sheetOpened2 = false;
      let obj = this.fetchData();
      if (this.selected && this.selected2) {
        // fetchType({ factory: this.selected, deviceId: this.selected2 })
        //   .then(result => {
        //     this.typeList = result;
        //     this.selected3 = "";
        //     this.selected4 = "";
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      } else {
        this.typeList = "";
      }
      this.fetchNoteDataByOBJ();
    },
    onSheetOpen2() {
      this.tempSelected2 = this.deviceList[0];
    },
    onSheetSubmit3() {
      this.selected3 = this.tempSelected3;
      this.sheetOpened3 = false;
      let obj = this.fetchData(obj);
      if (this.selected && this.selected2 && this.selected3) {
        // fetchCathode({
        //   factory: this.selected,
        //   deviceId: this.selected2,
        //   type: this.selected3
        // }).then(result => {
        //   this.cathodeList = result;
        //   this.selected4 = "";
        // });
      } else {
        this.cathodeList = "";
      }
      this.fetchNoteDataByOBJ();
    },
    onSheetOpen3() {
      this.tempSelected3 = this.typeList[0];
    },
    onSheetSubmit4() {
      this.selected4 = this.tempSelected4;
      this.sheetOpened4 = false;
      let obj = this.fetchData(obj);
      this.fetchNoteDataByOBJ();
    },
    onSheetOpen4() {
      this.tempSelected4 = this.cathodeList[0];
    },
    onOpenCalendarDialog() {
      this.picker.open();
    },
    getDateWithDays(year, month) {
      let date = new Date();
      year = year ? year : date.getFullYear();
      month = month ? month : date.getMonth() + 1;
      return new Date(year, month, 0);
    },
    getDateValueFromDom(dom) {
      return {
        year: parseInt(dom.year.text()),
        month: parseInt(dom.month.text()),
        day: parseInt(dom.day.text())
      };
    }
  },
  mounted() {
    this.fetchNoteDataByOBJ();
    this.getFactory();
    this.$nextTick(() => {
      this.$refs.scrollList.addEventListener("infinite", () => {
        if (this.isFinish || !this.allowInfinite) {
          return;
        }
        this.allowInfinite = false;
        this.getPagelist();
      });
    });

    let self = this;
    let date = new Date();
    this.picker = this.$f7.picker.create({
      value: [date.getFullYear(), date.getMonth() + 1, date.getDate()],
      cols: [
        {
          values: (function() {
            const date = new Date();
            let countYear = date.getFullYear() - 2010;
            return [...Array(countYear).keys()].map(value => 2011 + value);
          })(),
          displayValues: (function() {
            const date = new Date();
            let countYear = date.getFullYear() - 2010;
            return [...Array(countYear).keys()].map(
              value => 2011 + value + "年"
            );
          })()
        },
        {
          values: (function() {
            const date = new Date();
            return [...Array(date.getMonth() + 1).keys()].map(
              value => value + 1
            );
          })(),
          displayValues: (function() {
            const date = new Date();
            return [...Array(date.getMonth() + 1).keys()].map(
              value => value + 1 + "月"
            );
          })()
        },
        {
          values: (function() {
            const date = new Date();
            return [...Array(new Date().getDate()).keys()].map(
              value => value + 1
            );
          })(),
          displayValues: (function() {
            return [...Array(new Date().getDate()).keys()].map(
              value => value + 1 + "日"
            );
          })()
        }
      ],
      routableModals: false,
      renderToolbar() {
        let date = {};
        if (self.startDateVal) {
          date.start = {
            year: self.startDateVal[0],
            month: self.startDateVal[1],
            day: self.startDateVal[2]
          };
          date.end = {
            year: self.endDateVal[0],
            month: self.endDateVal[1],
            day: self.endDateVal[2]
          };
        } else {
          let dateObj = new Date();
          date.start = {
            year: dateObj.getFullYear(),
            month: dateObj.getMonth() + 1,
            day: dateObj.getDate()
          };
          date.end = {
            year: date.start.year,
            month: date.start.month,
            day: date.start.day
          };
        }
        return `<div class="toolbar calendar-custom-toolbar no-shadow">
          <div class="header"> <div class="left actived">
          <span class="year">${date.start.year}</span>-<span class="month">${date.start.month}</span>-<span class="day">${date.start.day}</span></div>
          <div class="right">
          <span class="year">${date.end.year}</span>-<span class="month">${date.end.month}</span>-<span class="day">${date.end.day}</span>
          </div></div><div class="footer"><button class="button-m cancel">取消</button>
          <button class="button-m all-year">全部</button><button class="button-m commit">确定</button></div></div>`;
      },
      on: {
        change(picker, value, displayValue) {
          if (self.isActived && self.isInited && self.lastDate) {
            self.isActived = false;
            value = [
              parseInt(value[0]),
              parseInt(value[1]),
              parseInt(value[2])
            ];
            let leftDateValue = self.getDateValueFromDom(self.leftDateDoms);
            let rightDateValue = self.getDateValueFromDom(self.rightDateDoms);
            const date = new Date();
            if (self.isCurrentLeft) {
              if (self.lastDate[0] !== value[0]) {
                let monthList = [];
                let endMonthIndex =
                  rightDateValue.year === value[0] ? rightDateValue.month : 12;
                for (let index = 1; index <= endMonthIndex; index++) {
                  monthList.push(index);
                }
                picker.cols[1].replaceValues(
                  monthList,
                  monthList.map(value => value + "月")
                );

                let dayList = [];
                let dayCount = self
                  .getDateWithDays(value[0], value[1])
                  .getDate();
                let endDayIndex =
                  rightDateValue.year === value[0] &&
                  rightDateValue.month === value[1]
                    ? rightDateValue.day
                    : dayCount;
                for (let index = 1; index <= endDayIndex; index++) {
                  dayList.push(index);
                }
                picker.cols[2].replaceValues(
                  dayList,
                  dayList.map(value => value + "日")
                );
                const updateMonth =
                  (rightDateValue.year === value[0]
                    ? rightDateValue.month
                    : 12) >= value[1]
                    ? value[1]
                    : rightDateValue.month;
                const updateDay =
                  (leftDateValue.year === rightDateValue.year &&
                  rightDateValue.month === value[1]
                    ? rightDateValue.day
                    : dayCount) >= value[2]
                    ? value[2]
                    : rightDateValue.day;
                picker.setValue([value[0], updateMonth, updateDay], 0);
                self.leftDateDoms.year.text(value[0]);
                self.leftDateDoms.month.text(updateMonth);
                self.leftDateDoms.day.text(updateDay);
              } else if (self.lastDate[1] !== value[1]) {
                let dayList = [];
                let dayCount = self
                  .getDateWithDays(value[0], value[1])
                  .getDate();
                let endDayIndex =
                  rightDateValue.year === value[0] &&
                  rightDateValue.month === value[1]
                    ? rightDateValue.day
                    : dayCount;
                for (let index = 1; index <= endDayIndex; index++) {
                  dayList.push(index);
                }
                picker.cols[2].replaceValues(
                  dayList,
                  dayList.map(value => value + "日")
                );
                const updateDay =
                  endDayIndex >= value[2] ? value[2] : rightDateValue.day;
                self.leftDateDoms.month.text(value[1]);
                self.leftDateDoms.day.text(updateDay);
                picker.setValue([value[0], value[1], updateDay], 0);
              } else if (self.lastDate[2] !== value[2]) {
                self.leftDateDoms.day.text(value[2]);
              }
              self.lastDate = value;
            } else {
              if (self.lastDate[0] !== value[0]) {
                let monthList = [];
                let startMonthIndex =
                  leftDateValue.year === value[0] ? leftDateValue.month : 1;
                for (let index = startMonthIndex; index <= 12; index++) {
                  monthList.push(index);
                }
                picker.cols[1].replaceValues(
                  monthList,
                  monthList.map(value => value + "月")
                );
                const updateMonth =
                  (rightDateValue.year === value[0]
                    ? rightDateValue.month
                    : 12) >= value[1]
                    ? value[1]
                    : rightDateValue.month;
                self.rightDateDoms.year.text(value[0]);
                self.rightDateDoms.month.text(updateMonth);
                picker.setValue([value[0], updateMonth, value[2]], 0);
              } else if (self.lastDate[1] !== value[1]) {
                let startDayIndex =
                  leftDateValue.year === value[0] &&
                  leftDateValue.month === value[1]
                    ? leftDateValue.day
                    : 1;
                let dayList = [];
                let dayCount = self
                  .getDateWithDays(value[0], value[1])
                  .getDate();
                for (let index = startDayIndex; index <= dayCount; index++) {
                  dayList.push(index);
                }
                picker.cols[2].replaceValues(
                  dayList,
                  dayList.map(value => value + "日")
                );
                self.rightDateDoms.month.text(value[1]);
                const updateDay =
                  value[0] === date.getFullYear() &&
                  value[1] === date.getMonth() + 1
                    ? value[2] <= date.getDate()
                      ? value[2]
                      : date.getDate()
                    : value[2] <= dayCount
                    ? value[2]
                    : 1;
                self.rightDateDoms.day.text(updateDay);
                picker.setValue([value[0], value[1], updateDay], 0);
              } else if (self.lastDate[2] !== value[2]) {
                self.rightDateDoms.day.text(value[2]);
              }
              self.lastDate = value;
            }
            self.isActived = true;
          }
        },
        open: function(picker) {
          if (!self.isInited) {
            let $$ = self.Dom7;
            self.leftDateDoms = {
              box: $$(".calendar-custom-toolbar .header .left"),
              year: $$(".calendar-custom-toolbar .header .left .year"),
              month: $$(".calendar-custom-toolbar .header .left .month"),
              day: $$(".calendar-custom-toolbar .header .left .day")
            };
            self.rightDateDoms = {
              box: $$(".calendar-custom-toolbar .header .right"),
              year: $$(".calendar-custom-toolbar .header .right .year"),
              month: $$(".calendar-custom-toolbar .header .right .month"),
              day: $$(".calendar-custom-toolbar .header .right .day")
            };

            self.rightDateDoms.box.on("click", function() {
              if (self.isCurrentLeft) {
                self.isActived = false;
                self.leftDateDoms.box.removeClass("actived");
                self.rightDateDoms.box.addClass("actived");
                let leftDateValue = self.getDateValueFromDom(self.leftDateDoms);
                let rightDateValue = self.getDateValueFromDom(
                  self.rightDateDoms
                );
                let date = new Date();
                let yearList = [];
                for (
                  let index = leftDateValue.year;
                  index <= date.getFullYear() + 20;
                  index++
                ) {
                  yearList.push(index);
                }
                picker.cols[0].replaceValues(
                  yearList,
                  yearList.map(value => value + "年")
                );
                let monthList = [];
                let startMonthIndex =
                  leftDateValue.year === rightDateValue.year
                    ? leftDateValue.month
                    : 1;
                for (let index = startMonthIndex; index <= 12; index++) {
                  monthList.push(index);
                }
                picker.cols[1].replaceValues(
                  monthList,
                  monthList.map(value => value + "月")
                );
                let startDayIndex =
                  leftDateValue.month === rightDateValue.month
                    ? leftDateValue.day
                    : 1;
                let dayList = [];
                let dayCount = self
                  .getDateWithDays(rightDateValue.year, rightDateValue.month)
                  .getDate();

                for (let index = startDayIndex; index <= dayCount; index++) {
                  dayList.push(index);
                }
                picker.cols[2].replaceValues(
                  dayList,
                  dayList.map(value => value + "日")
                );
                picker.setValue(
                  [
                    rightDateValue.year,
                    rightDateValue.month,
                    rightDateValue.day
                  ],
                  0
                );
                self.lastDate = [
                  rightDateValue.year,
                  rightDateValue.month,
                  rightDateValue.day
                ];
                self.isActived = true;
                self.isCurrentLeft = false;
              }
            });
            self.leftDateDoms.box.on("click", function() {
              if (!self.isCurrentLeft) {
                self.isActived = false;
                self.rightDateDoms.box.removeClass("actived");
                self.leftDateDoms.box.addClass("actived");

                let leftDateValue = self.getDateValueFromDom(self.leftDateDoms);
                let rightDateValue = self.getDateValueFromDom(
                  self.rightDateDoms
                );
                let yearList = [];
                for (let index = 2011; index <= rightDateValue.year; index++) {
                  yearList.push(index);
                }
                picker.cols[0].replaceValues(
                  yearList,
                  yearList.map(value => value + "年")
                );
                let monthList = [];
                let endMonthIndex =
                  leftDateValue.year === rightDateValue.year
                    ? rightDateValue.month
                    : 12;
                for (let index = 1; index <= endMonthIndex; index++) {
                  monthList.push(index);
                }
                picker.cols[1].replaceValues(
                  monthList,
                  monthList.map(value => value + "月")
                );
                let dayList = [];
                let dayCount = self
                  .getDateWithDays(leftDateValue.year, leftDateValue.month)
                  .getDate();
                let endDayIndex =
                  leftDateValue.year === rightDateValue.year &&
                  leftDateValue.month === rightDateValue.month
                    ? rightDateValue.day
                    : dayCount;
                for (let index = 1; index <= endDayIndex; index++) {
                  dayList.push(index);
                }
                picker.cols[2].replaceValues(
                  dayList,
                  dayList.map(value => value + "日")
                );
                picker.setValue(
                  [leftDateValue.year, leftDateValue.month, leftDateValue.day],
                  0
                );
                self.lastDate = [
                  leftDateValue.year,
                  leftDateValue.month,
                  leftDateValue.day
                ];
                self.isActived = true;
                self.isCurrentLeft = true;
              }
            });
            $$(".calendar-custom-toolbar .footer .cancel").on(
              "click",
              function() {
                picker.close();
              }
            );
            $$(".calendar-custom-toolbar .footer .all-year").on(
              "click",
              function() {
                self.startDateVal = null;
                self.endDateVal = null;
                picker.close();
                self.$emit("date", null);
                self.endTime = null;
                self.startTime = null;
                self.fetchNoteDataByOBJ();
              }
            );
            $$(".calendar-custom-toolbar .footer .commit").on(
              "click",
              function() {
                let leftDateValue = self.getDateValueFromDom(self.leftDateDoms);
                let rightDateValue = self.getDateValueFromDom(
                  self.rightDateDoms
                );
                self.startDateVal = [
                  leftDateValue.year,
                  leftDateValue.month,
                  leftDateValue.day
                ];
                self.startTime =
                  self.startDateVal[0] +
                  "-" +
                  self.startDateVal[1] +
                  "-" +
                  self.startDateVal[2];
                self.endDateVal = [
                  rightDateValue.year,
                  rightDateValue.month,
                  rightDateValue.day
                ];
                self.endTime =
                  self.endDateVal[0] +
                  "-" +
                  self.endDateVal[1] +
                  "-" +
                  self.endDateVal[2];
                self.fetchNoteDataByOBJ();
                picker.close();
                self.$emit("date", {
                  startDate: new Date(
                    self.startDateVal[0],
                    self.startDateVal[1] - 1,
                    self.startDateVal[2]
                  ),
                  endDate: new Date(
                    self.endDateVal[0],
                    self.endDateVal[1] - 1,
                    self.endDateVal[2]
                  )
                });
              }
            );
          }
        },
        opened(picker) {
          if (!self.isInited) {
            let date = {};
            if (self.startDateVal) {
              date.start = {
                year: self.startDateVal[0],
                month: self.startDateVal[1],
                day: self.startDateVal[2]
              };
              date.end = {
                year: self.endDateVal[0],
                month: self.endDateVal[1],
                day: self.endDateVal[2]
              };
              let yearList = [];
              for (let index = 2011; index <= date.end.year; index++) {
                yearList.push(index);
              }
              picker.cols[0].replaceValues(
                yearList,
                yearList.map(value => value + "年")
              );
              let monthList = [];
              let endMonthIndex =
                date.start.year === date.end.year ? date.end.month : 12;
              for (let index = 1; index <= endMonthIndex; index++) {
                monthList.push(index);
              }
              picker.cols[1].replaceValues(
                monthList,
                monthList.map(value => value + "月")
              );
              let dayList = [];
              let dayCount = self
                .getDateWithDays(date.start.year, date.start.month)
                .getDate();
              let endDayIndex =
                date.start.year === date.end.year &&
                date.start.month === date.end.month
                  ? date.end.day
                  : dayCount;
              for (let index = 1; index <= endDayIndex; index++) {
                dayList.push(index);
              }
              picker.cols[2].replaceValues(
                dayList,
                dayList.map(value => value + "日")
              );
            } else {
              let dateObj = new Date();
              date.start = {
                year: dateObj.getFullYear(),
                month: dateObj.getMonth() + 1,
                day: dateObj.getDate()
              };
              const days = self.getDateWithDays(
                date.start.year,
                date.start.month,
                date.start.day
              );
              date.end = {
                year: date.start.year,
                month: date.start.month,
                day: date.start.day
              };
              let yearList = [
                ...Array(dateObj.getFullYear() - 2010).keys()
              ].map(value => 2011 + value);
              picker.cols[0].replaceValues(
                yearList,
                yearList.map(value => value + "年")
              );
              let monthList = [...Array(dateObj.getMonth() + 1).keys()].map(
                value => value + 1
              );
              picker.cols[1].replaceValues(
                monthList,
                monthList.map(value => value + "月")
              );
              let dayList = [...Array(dateObj.getDate()).keys()].map(
                value => value + 1
              );
              picker.cols[2].replaceValues(
                dayList,
                dayList.map(value => value + "日")
              );
            }
            picker.setValue(
              [date.start.year, date.start.month, date.start.day],
              0
            );
            self.lastDate = [date.start.year, date.start.month, date.start.day];
            self.isInited = true;
          }
        },
        closed() {
          self.isInited = false;
          self.isCurrentLeft = true;
        }
      }
    });
  }
};
</script>
<style lang="scss">
.page-content {
  height: 100vh !important;
}
.navber-plr {
  padding-left: 15px !important;
  padding-right: 15px !important;
}
.calendar-custom-toolbar {
  display: flex;
  flex-direction: column;
  height: 65px !important;
  .header {
    order: 1;
    display: flex;
    height: 50%;
    text-align: center;
    font-size: 19px;
    .left {
      background: #ffffff;
      flex-grow: 1;
      opacity: 0.4;
    }
    .right {
      flex-grow: 1;
      background: #ffffff;
      opacity: 0.4;
    }
    .actived {
      border-bottom: gray 4px solid;
      opacity: 1;
    }
  }
  .footer {
    order: 0;
    display: flex;
    height: 50%;
    text-align: center;
    .button-m {
      align-items: center;
      flex-grow: 1;
      border: none;
      border-right: 1px white solid;
      background-color: #4682b4;
      color: aliceblue;
      font-size: 15px;
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
.sheetoff {
  color: grey;
  font-size: 12px;
}
.sheeton {
  color: black;
  font-size: 12px;
}
.sheetyes {
  font-weight: 700;
  font-size: 12px;
  color: #004666;
}
.icon-af-down {
  height: 8px;
  width: 8px;
  position: relative;
  top: 1px;
}
.labeloff {
  color: #000;
}
.labelon {
  color: #004666;
  font-weight: 700;
}
</style>