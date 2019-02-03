<template>
  <div id='planets'>
    Hey
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>
