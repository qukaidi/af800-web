<template>
  <f7-page name="afdetails">
    <div class="card-page">
      <div class="card">
        <div class="text-box">
          <div>
            <strong>单&nbsp;&nbsp;&nbsp;&nbsp;号：</strong>
            {{data.checkNo}}20191216102901
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>人&nbsp;&nbsp;&nbsp;&nbsp;员：</strong>
            {{data.checker}}Admin
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>厂&nbsp;&nbsp;&nbsp;&nbsp;期：</strong>
            {{data.factory}}三期
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>资产号：</strong>
            {{data.deviceId}}800.9
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>拆卸原因：</strong>
            {{data.deviceId}}换型
          </div>
        </div>

        <!-- <div class="text-box">
          <div>
            <strong>型&nbsp;&nbsp;&nbsp;&nbsp;号：</strong>
            {{data.kbType}}
          </div>
        </div>
        <div class="text-box">
          <div>

            <strong>阴极块：</strong>
            {{data.cathode|parseintDate}}
          </div>
        </div>-->
        <div class="text-box">
          <div>
            <strong>提交时间：</strong>
            {{data.submitTime}}2019-12-16 10:29:55
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>修改时间：</strong>
            {{data.submitTime}}2019-12-20 10:29:55
          </div>
        </div>
      </div>
      <!-- <div v-if="onCardShow">
      <div v-if="data.detailsNo==''">-->
      <!-- <div class="card">
        <table width="100%" class="table">
          <tr>
            <td class="td-4">更换时间</td>
            <td class="td-3">2019-12-16</td>
          </tr>
          <tr>
            <td class="td-4">班组</td>
            <td class="td-3">A</td>
          </tr>
          <tr>
            <td class="td-4">班次</td>
            <td class="td-3">早班</td>
          </tr>
        </table>
      </div>-->
      <div class="card" v-if="indata=='安装'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2">型号</td>
            <td class="td-2">阴极块</td>
            <td class="td-2">拆卸原因</td>
            <td class="td-2">机床加工数</td>
            <td class="td-2">寿命</td>
            <td class="td-2">剩余寿命</td>
          </tr>
          <tr>
            <td class="td-3">342F</td>
            <td class="td-3">1</td>
            <td class="td-3">342F</td>
            <td class="td-3">安装</td>
            <td class="td-3">99999999</td>
            <td class="td-3">0</td>
            <td class="td-3">17000</td>
          </tr>
          <tr>
            <td class="td-3">2</td>
            <td class="td-3">342F</td>
            <td class="td-3">安装</td>
            <td class="td-3">99999999</td>
            <td class="td-3">0</td>
            <td class="td-3">17000</td>
          </tr>
          <tr>
            <td class="td-3">3</td>
            <td class="td-3">342F</td>
            <td class="td-3">安装</td>
            <td class="td-3">99999999</td>
            <td class="td-3">0</td>
            <td class="td-3">17000</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='巡检'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2">阴极块</td>
            <td class="td-2">型号</td>
            <td class="td-2">拆卸原因</td>
            <td class="td-2">机床加工数</td>
            <td class="td-2">寿命</td>
            <td class="td-2">剩余寿命</td>
          </tr>
          <tr>
            <td class="td-3">1</td>
            <td class="td-3">342F</td>
            <td class="td-3">巡检</td>
            <td class="td-3">99999999</td>
            <td class="td-3">1000</td>
            <td class="td-3">16000</td>
          </tr>
          <tr>
            <td class="td-3">2</td>
            <td class="td-3">342F</td>
            <td class="td-3">巡检</td>
            <td class="td-3">99999999</td>
            <td class="td-3">1000</td>
            <td class="td-3">16000</td>
          </tr>
          <tr>
            <td class="td-3">3</td>
            <td class="td-3">342F</td>
            <td class="td-3">巡检</td>
            <td class="td-3">99999999</td>
            <td class="td-3">1000</td>
            <td class="td-3">16000</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='换型'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2" colspan="9">修改前

            </td>
          </tr>
          <tr>
            <td class="td-2">阴极块</td>
            <td class="td-2">加工数</td>
            <td class="td-2">更换</td>
            <td class="td-2">班组</td>
            <td class="td-2">寿命</td>
          </tr>
          <tr>
            <td class="td-3">342E/1</td>
            <td class="td-5">23000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-5">5000/12000</td>
          </tr>
          <tr>
            <td class="td-3">342E/2</td>
            <td class="td-5">23000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-5">5000/12000</td>
          </tr>
          <tr>
            <td class="td-3">342F/1</td>
            <td class="td-5">23000000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-5">7000/10000</td>
          </tr>
          <tr>
            <td class="td-3">342F/2</td>
            <td class="td-5">23000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-5">7000/10000</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='换型'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2" colspan="9">修改后</td>
          </tr>
          <tr>
            <td class="td-2">阴极块</td>
            <td class="td-2">加工数</td>
            <td class="td-2">更换</td>
            <td class="td-2">班组</td>
            <td class="td-2">寿命</td>
          </tr>
          <tr>
            <td class="td-3">342E/1</td>
            <td class="td-5">23000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-5">5000/12000</td>
          </tr>
          <tr>
            <td class="td-3">342E/2</td>
            <td class="td-5">23000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-3">5000/12000</td>
          </tr>
          <tr>
            <td class="td-3">342F/1</td>
            <td class="td-5">23000000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-5">7000/10000</td>
          </tr>
          <tr>
            <td class="td-3">342F/2</td>
            <td class="td-5">23000</td>
            <td class="td-3">2019-10-10</td>
            <td class="td-3">早/A</td>
            <td class="td-3">7000/10000</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='到寿'||indata=='下限'||indata=='超上限'||indata=='超下限'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2" colspan="6">替换前</td>
          </tr>
          <tr>
            <td class="td-2">阴极块</td>
            <td class="td-2">型号</td>
            <td class="td-2">拆卸原因</td>
            <td class="td-2">机床加工数</td>
            <td class="td-2">寿命</td>
            <td class="td-2">剩余寿命</td>
          </tr>
          <tr>
            <td class="td-3">5</td>
            <td class="td-3">342E</td>
            <td class="td-3">到寿</td>
            <td class="td-3">99999999</td>
            <td class="td-3">17000</td>
            <td class="td-3">0</td>
          </tr>
          <tr>
            <td class="td-3">6</td>
            <td class="td-3">342E</td>
            <td class="td-3">到寿</td>
            <td class="td-3">99999999</td>
            <td class="td-3">17000</td>
            <td class="td-3">0</td>
          </tr>
          <tr>
            <td class="td-3">7</td>
            <td class="td-3">342E</td>
            <td class="td-3">到寿</td>
            <td class="td-3">99999999</td>
            <td class="td-3">17000</td>
            <td class="td-3">0</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='到寿'||indata=='下限'||indata=='超上限'||indata=='超下限'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2" colspan="6">替换后</td>
          </tr>
          <tr>
            <td class="td-2">阴极块</td>
            <td class="td-2">型号</td>
            <td class="td-2">拆卸原因</td>
            <td class="td-2">机床加工数</td>
            <td class="td-2">寿命</td>
            <td class="td-2">剩余寿命</td>
          </tr>
          <tr>
            <td class="td-3">1</td>
            <td class="td-3">342E</td>
            <td class="td-3">到寿</td>
            <td class="td-3">99999999</td>
            <td class="td-3">0</td>
            <td class="td-3">17000</td>
          </tr>
          <tr>
            <td class="td-3">2</td>
            <td class="td-3">342E</td>
            <td class="td-3">到寿</td>
            <td class="td-3">99999999</td>
            <td class="td-3">0</td>
            <td class="td-3">17000</td>
          </tr>
          <tr>
            <td class="td-3">3</td>
            <td class="td-3">342E</td>
            <td class="td-3">到寿</td>
            <td class="td-3">99999999</td>
            <td class="td-3">0</td>
            <td class="td-3">17000</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- <div v-else> 
          <div class="card">
            <table width="100%" class="table">
              <tr>
                <td class="td-1" rowspan="7">修改前</td>
                <td class="td-2">拆卸原因</td>
                <td class="td-3">{{olddata.disassemble}}</td>
              </tr>
              <tr>
                <td class="td-2">机床加工书</td>
                <td class="td-3">{{olddata.machineNumber}}</td>
              </tr>
              <tr>
                <td class="td-2">更换时间</td>
                <td class="td-3">{{olddata.replaceTime|formatDate}}</td>
              </tr>
              <tr>
                <td class="td-2">班组</td>
                <td class="td-3">{{olddata.checkGroup}}</td>
              </tr>
              <tr>
                <td class="td-2">班次</td>
                <td class="td-3">{{olddata.shift}}</td>
              </tr>
              <tr>
                <td class="td-2">寿命</td>
                <td class="td-3" v-if="olddata.life!=null">{{olddata.life}}</td>
                <td class="td-3" v-else>-</td>
              </tr>
              <tr>
                <td class="td-2">预计到寿日期</td>
                <td class="td-3" v-if="olddata.estimateLife!=null">{{olddata.estimateLife}}</td>
                <td class="td-3" v-else>-</td>
              </tr>
              <tr>
                <td class="td-1" rowspan="7">修改后</td>
                <td class="td-2">拆卸原因</td>
                <td class="td-3">{{newdata.disassemble}}</td>
              </tr>
              <tr>
                <td class="td-2">机床加工数</td>
                <td class="td-3">{{newdata.machineNumber}}</td>
              </tr>
              <tr>
                <td class="td-2">更换时间</td>
                <td class="td-3">{{newdata.replaceTime}}</td>
              </tr>
              <tr>
                <td class="td-2">班组</td>
                <td class="td-3">{{newdata.checkGroup}}</td>
              </tr>
              <tr>
                <td class="td-2">班次</td>
                <td class="td-3">{{newdata.shift}}</td>
              </tr>
              <tr>
                <td class="td-2">寿命</td>
                <td class="td-3" v-if="newdata.life!=null">{{newdata.life}}</td>
                <td class="td-3" v-else>-</td>
              </tr>
              <tr>
                <td class="td-2">预计到寿日期</td>
                <td class="td-3" v-if="newdata.estimateLife!=null">{{newdata.estimateLife}}</td>
                <td class="td-3" v-else>-</td>
              </tr>
            </table>
          </div>
          <div class="card">
            <div class="text-box">
              <div>
                <strong>备注：</strong>
              </div>
              <div>{{data.remarks}}</div>
            </div>
          </div>
    </div>-->
    <!-- </div>
    </div>-->
  </f7-page>
</template>

<script>
import { f7Page, f7PageContent } from "framework7-vue";
// import { fetchKbIdList, fetchKbDetails } from "@/api/kbcheck.js";
import qs from "query-string";
export default {
  props: {
    indata: null
  },
  components: {
    [f7Page.name]: f7Page,
    [f7PageContent.name]: f7PageContent
  },
  data() {
    return {
      data: {},
      olddata: {},
      newdata: {},
      onCardShow: null
    };
  },
  methods: {
    getKbIdList() {
      // this.$f7.preloader.show();
      // const path = `${this.indata.id}?${qs.stringify(this.indata)}`;
      // fetchKbIdList(path)
      //   .then(result => {
      //     this.data = result;
      //     this.onCardShow=result;
      //     fetchKbDetails({
      //       detailsNo: result.detailsNo
      //     })
      //       .then(result => {
      //         if (result.updateAfter && result.updateBefore) {
      //           this.olddata = JSON.parse(result.updateBefore);
      //           this.newdata = JSON.parse(result.updateAfter);
      //         }
      //       })
      //       .finally(() => {
      //         this.$f7.preloader.hide();
      //       });
      //   })
      //   .finally(() => {
      //     this.$f7.preloader.hide();
      //   });
    }
  },
  mounted() {
    // this.getKbIdList();
  }
};
</script>
<style lang="scss">
.page {
  background-color: #efeff4 !important;
}
.card-page {
  margin-bottom: 54px;
}
.list .item-inner {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.item-subtitle-box {
  padding-left: 10px;
}
.mb {
  margin-bottom: 10px;
}
.card {
  background: #fff !important;
  position: relative !important;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2) !important;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .top-box {
    display: flex;
    align-items: center;
  }
  .box {
    display: flex;
    font-size: 14px;
    color: gray;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .table {
    border-collapse: collapse;
    td {
      border: 1px solid #a9a9a9;
    }
    .td-1 {
      background-color: #dcdcdc;
      width: 20%;
      text-align: center;
    }
    .td-2 {
      background-color: #f5f5f5;
      padding-left: 5px;
    }
    .td-3 {
      background-color: #fff;
      text-align: center;
    }
    .td-5 {
      background-color: #fff;
      text-align: right;
    }
    .td-4 {
      background-color: #f5f5f5;
      padding-left: 5px;
      width: 20%;
    }
  }
}
</style>