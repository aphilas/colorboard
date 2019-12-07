<template>
  <div class="delete">
    <span>✚</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.delete {
  color: white;
  position: absolute;
  top: .25em;
  right: .5em;
  font-weight: normal;
  cursor: pointer;
  user-select: none;
}

span {
  display: inline-block;
  transform: rotate(45deg);
}

</style>