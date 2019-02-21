<template>
  <div>
    <h1>Vue virtual scroller issue #135</h1>
    <section class="column left">
      <h2>Normal list</h2>
      Data: {{ normalList }}
      <RecycleScroller class="scroller" :items="normalList" :item-size="32" key-field="id">
        <template v-slot="{item}">
          <div class="user">{{ item }}</div>
        </template>
      </RecycleScroller>
    </section>
    <section class="column right">
      <h2>Zero list (the bug)</h2>
      Data: {{ bugList }} (scroll to se just 1 or 2 items rendered)
      <RecycleScroller class="scroller" :items="bugList" :item-size="32" key-field="id">
        <template v-slot="{item}">
          <div class="user">{{ item }}</div>
        </template>
      </RecycleScroller>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app",
  data() {
    return {
      list: [
        { id: 0, name: "eduardo", age: 32 },
        { id: 1, name: "alexia", age: 37 },
        { id: 2, name: "eduardo", age: 32 },
        { id: 3, name: "alexia", age: 37 },
        { id: 4, name: "eduardo", age: 32 },
        { id: 5, name: "alexia", age: 37 },
        { id: 6, name: "eduardo", age: 32 },
        { id: 7, name: "alexia", age: 37 },
        { id: 8, name: "eduardo", age: 32 },
        { id: 9, name: "alexia", age: 37 },
        { id: 10, name: "eduardo", age: 32 }
      ],
      normalList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      bugList: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }
});
</script>

<style scoped>
.column {
  box-sizing: border-box;
  float: left;
  width: 50%;
  padding: 10px;
}

.scroller {
  overflow: auto;
  background-color: lightblue;
  height: 200px;
}

.user {
  background-color: pink;
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>