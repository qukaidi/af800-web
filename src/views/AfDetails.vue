<template>
  <f7-page name="afdetails">
    <div class="card-page">
      <div class="card">
        <div class="text-box">
          <div>
            <strong>单&nbsp;&nbsp;&nbsp;&nbsp;号：</strong>
            {{data.checkNo}}
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>人&nbsp;&nbsp;&nbsp;&nbsp;员：</strong>
            {{data.checker}}
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>厂&nbsp;&nbsp;&nbsp;&nbsp;期：</strong>
            {{data.factory}}
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>资产号：</strong>
            {{data.device}}
          </div>
        </div>
        <div class="text-box">
          <div>
            <strong>提交时间：</strong>
            {{data.submitTime}}
          </div>
        </div>
      </div>
      <!-- <div v-if="onCardShow">
      <div v-if="data.detailsNo==''">-->
      <div class="card">
        <table width="100%"  class="table">
          <tr>
            <td class="td-2">型号</td>
            <td class="td-2">阴极块</td>
            <td class="td-2">拆卸原因</td>
            <td class="td-2">机床加工数</td>
            <td class="td-2">寿命</td>
            <td class="td-2">剩余寿命</td>
          </tr>
          <tr v-for="(list,index) in dataLists" :key="index">
            <td class="td-3">{{list.kbType}}</td>
            <td class="td-3">{{list.cathode}}</td>
            <td class="td-3">{{list.disassemble}}</td>
            <td class="td-3">{{list.machineNumber}}</td>
            <td class="td-3">{{list.life}}</td>
            <td class="td-3">{{list.estimateLife}}</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='安装'">
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
            <td class="td-2" colspan="6">换型前</td>
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
            <td class="td-3">342F</td>
            <td class="td-3">换型</td>
            <td class="td-3">99999999</td>
            <td class="td-3">2000</td>
            <td class="td-3">15000</td>
          </tr>
          <tr>
            <td class="td-3">2</td>
            <td class="td-3">342F</td>
            <td class="td-3">换型</td>
            <td class="td-3">99999999</td>
            <td class="td-3">2000</td>
            <td class="td-3">15000</td>
          </tr>
          <tr>
            <td class="td-3">3</td>
            <td class="td-3">342F</td>
            <td class="td-3">换型</td>
            <td class="td-3">99999999</td>
            <td class="td-3">2000</td>
            <td class="td-3">15000</td>
          </tr>
        </table>
      </div>
      <div class="card" v-if="indata=='换型'">
        <table width="100%" class="table">
          <tr>
            <td class="td-2" colspan="6">换型后</td>
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
            <td class="td-3">换型</td>
            <td class="td-3">99999999</td>
            <td class="td-3">7000</td>
            <td class="td-3">10000</td>
          </tr>
          <tr>
            <td class="td-3">6</td>
            <td class="td-3">342E</td>
            <td class="td-3">换型</td>
            <td class="td-3">99999999</td>
            <td class="td-3">7000</td>
            <td class="td-3">10000</td>
          </tr>
          <tr>
            <td class="td-3">7</td>
            <td class="td-3">342E</td>
            <td class="td-3">换型</td>
            <td class="td-3">99999999</td>
            <td class="td-3">7000</td>
            <td class="td-3">10000</td>
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
import { fetchKbIdList } from "@/api/kbcheck.js";
// import qs from "query-string";
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
      dataLists: {}
    };
  },
  methods: {
    getKbIdList() {
      this.$f7.preloader.show();
      const path = `?t=${this.indata.t.join(",")}`;
      fetchKbIdList(path)
        .then(result => {
          this.data = result;
          this.dataLists = result.normal;
          console.log(this.dataLists);
        })
        .finally(() => {
          this.$f7.preloader.hide();
        });
    }
  },
  mounted() {
    this.getKbIdList();
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
    }
    .td-4 {
      background-color: #f5f5f5;
      padding-left: 5px;
      width: 20%;
    }
  }
}
</style>