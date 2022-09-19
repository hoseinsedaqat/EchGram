<template>
  <section id="error">
    <div class="container">
      <div class="row">
        <div class="col-md-9 mx-auto">
          <h4 class="font-weight-bold text-center mt-5">
            Sorry, this page isn't available.
          </h4>
          <p class="text-center">
            The link you followed may be broken, or the page may have been removed.
            <router-link to="/"> back to Echgram.</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>
