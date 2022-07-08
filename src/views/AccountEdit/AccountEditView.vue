<template>
  <section id="account-edit">
    <div class="container">
      <div class="row mt-5 no-guuters">
        <div class="col-md-3 bg-white py-3 abl">
          <ul class="accounts-route-info">
            <li>Edit Profile</li>
            <li>Change Password</li>
            <li>Apps and website</li>
            <li>Email notifications</li>
            <li>Push notifications</li>
            <li>Manage contacts</li>
            <li>Privacy and security</li>
            <li>Login activity</li>
            <li>Email from Instagram</li>
            <li>Help</li>
          </ul>
        </div>
        <div class="col-md-9 bg-white py-3 abl">
          <div class="ars d-flex">
            <span>
              <img
                src="@/assets/Images/Header/HoseinSedaqat.jpg"
                alt=""
                width="50px"
                style="border-radius: 50%"
              />
            </span>
            <span class="d-flex flex-column mx-4">
              <span>HoseinSedaqat</span>
              <span class="text-primary">Change profile photo</span>
            </span>
          </div>
          <div class="ars">
            <label for="name" class="font-weight-bold">Name</label>
            <input type="text" name="" id="name" class="form-control" />
          </div>
          <div class="ars">
            <label for="username" class="font-weight-bold">Username</label>
            <input type="text" name="" id="username" class="form-control" />
          </div>
          <div class="ars">
            <label for="website" class="font-weight-bold">Website</label>
            <input type="text" name="" id="website" class="form-control" />
          </div>
          <div class="ars">
            <label for="bio" class="font-weight-bold">Bio</label>
            <textarea name="" id="" class="form-control"></textarea>
          </div>
          <div class="ars">
            <button class="btn btn-primary text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AccountEditView",
};
</script>
