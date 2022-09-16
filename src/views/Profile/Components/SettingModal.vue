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
          <li>
            <router-link to="/accounts/edit" class="qr_link" data-dismiss="modal"
              >Change password</router-link
            >
          </li>
          <li>
            <router-link to="/qr" class="qr_link" data-dismiss="modal"
              >QR Code</router-link
            >
          </li>
          <li>
            <router-link to="/saved" class="qr_link" data-dismiss="modal"
              >Saved</router-link
            >
          </li>
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
