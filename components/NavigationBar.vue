<template>
  <div class="fix">
    <div class="header-box">
      <div class="home">
        YSJ_PF
      </div>
      <div class="nav-bar">
        <ol class="nav">
          <div
            v-for="(lis,index) in list"
            :key="index"
            class="nav-div"
            @mouseover="stateF(index)"
            @mouseleave="stateT(index)"
          >
            <li v-if="lis.state">
              {{ lis.name }}
            </li>
            <li v-else>
              {{ lis.kname }}
            </li>
          </div>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import li from '../assets/list.json'

const list = reactive(li)

const stateF = (num:number) => {
  list[num].state = false
}

const stateT = (num:number) => {
  list[num].state = true
}

</script>

<style scoped>
</style>
