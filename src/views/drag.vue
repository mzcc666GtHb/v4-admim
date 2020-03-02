<template>
  <div class="drag-list">
    <draggable v-model="list" @change="change" :options="options">
      <transition-group>
        <div v-for="item in list" :key="item.id" class="drag-item">
           {{item.name}}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      list: [
        {
          id: "0",
          name: "Aquamarine"
        },
        {
          id: "1",
          name: "Hotpink"
        },
        {
          id: "2",
          name: "Gold"
        },
        {
          id: "3",
          name: "Crimson"
        },
        {
          id: "4",
          name: "Blueviolet"
        }
      ],
      options: {
        delayOnTouchOnly: true, //开启触摸延时
        direction: "vertical", //拖动方向
        delay: 500, //延时时长
        touchStartThreshold: 3, //防止某些手机过于敏感(3~5 效果最好)
        chosenClass: "chosen" //选中之后拖拽项添加的class名(用于选中时候添加样式)
      }
    };
  },
  components: {
    draggable
  },
  methods: {
      change () {
          
      }
  }
};
</script>

<style>
.drag-list {
  /*防止长按弹窗*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

.drag-item {
  margin-bottom: 10px;
  background-color: #eee;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.drag-item.chosen {
  background-color: salmon;
}
</style>
