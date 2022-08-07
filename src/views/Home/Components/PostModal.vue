<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PostModal",
});
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <ul>
          <li class="text-danger">Report</li>
          <li class="text-danger">Unfollow</li>
          <li>Go to post</li>
          <li>Tagged accounts</li>
          <li>Share to...</li>
          <li>Copy link</li>
          <li>Embed</li>
          <li data-dismiss="modal" aria-label="Close">Cancel</li>
        </ul>
      </div>
    </div>
  </div>
</template>
