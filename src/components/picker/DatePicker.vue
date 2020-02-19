<template>
  <div class="input_box">
    <div class="input_box_picker">
      <div class="input_icon">
        <f7-icon icon="searchbar-icon"></f7-icon>
      </div>
      <div class="input_picker">
        <input type="text" readonly="readonly" id="demo-picker-describe" />
      </div>
    </div>
  </div>
</template>
<script>
import { f7Icon } from "framework7-vue";

export default {
  data() {
    return {};
  },
  components: { [f7Icon.name]: f7Icon },
  methods: {
    search: function(data) {
      this.$emit("submit", data);
    }
  },
  mounted() {
    let that = this;
    this.$f7ready(f7 => {
      var today = new Date();
      var pickerDescribe = f7.picker.create({
        inputEl: "#demo-picker-describe",
        value: [today.getFullYear(), today.getMonth()+1],
        formatValue: function(values) {
          return values[0] + "年";
        },
        renderToolbar: function() {
          return (
            '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
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
          }
        ],
        on: {
          open: function(picker) {
            picker.$el.find(".popover-close").on("click", function() {
              let data = new Object();
              data.year = picker.cols[0].value;
              that.search(data);
            });
          }
        }
      });
    });
  }
};
</script>


<style lang="scss">
.picker-item {
  color: #707274 !important;
}
.picker-item.picker-item-selected {
  color: #000000 !important;
}
.input_box {
  background-color: #f7f7f8;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .input_box_picker {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    height: 30px;
    border-radius: 8px;
    width: 100%;
    margin-left: 8px;
    margin-right: 8px;
    .input_icon {
      display: flex;
      align-items: center;
    }
    .input_picker {
      display: flex;
      align-items: center;
      margin-left: 12px;
      width: 100%;
    }
  }
}
.toolbar-inner {
  justify-content: flex-end;
}
#demo-picker-describe {
  width: 100%;
  font-size: 16px !important;
  height: 18px;
}
</style>
<style scoped>
.ios .searchbar-icon {
  position: static !important;
  top: 0 !important;
  margin-top: 0 !important;
  margin-left: 12px;
}
.md .searchbar-icon {
  position: static !important;
  top: 0 !important;
  margin-top: 0 !important;
}
</style>

