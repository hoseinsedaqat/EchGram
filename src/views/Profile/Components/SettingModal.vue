<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SettingModal",
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
          <li>Change password</li>
          <li>QR Code</li>
          <li>Apps and Websites</li>
          <li>Notifications</li>
          <li>Privacy and security</li>
          <li>Login activity</li>
          <li>Emails from Echgram</li>
          <li>Report a Problem</li>
          <li>Log Out</li>
          <li data-dismiss="modal" aria-label="Close">Cancel</li>
        </ul>
      </div>
    </div>
  </div>
</template>
