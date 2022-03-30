<template>
  <header class="bg-white hpy hlb">
    <div class="container">
      <div class="row my-1 d-flex align-items-center justify-content-center">
        <div class="col-md-4">
          <img src="@/assets/Images/Header/735145cfe0a4.png" alt="EchGram Logo" />
        </div>
        <div class="col-md-4">
          <div>
          <input type="text" name="search" id="search" class="hin" placeholder="Search"/>
          <label for="search" class="hinp">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </label>
          </div>
        </div>
        <div class="col-md-4">icons</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
};
</script>

<style scoped>
@import url("./Header.css");
</style>
