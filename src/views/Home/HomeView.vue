<script lang="ts">
import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 2,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  }
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-md-8 mt-3">
            <div class="card mt-4">
              <div>
                <swiper class="swiper" :options="swiperOption">
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp bbc" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem perferendis, nemo minus voluptate hic ipsa quasi necessitatibus ut eveniet sequi commodi nostrum deserunt voluptas beatae sapiente, atque, facere dicta. Omnis impedit cumque voluptas quaerat voluptatibus animi sint id, magnam placeat distinctio dolores consequatur. Earum vitae in rem, reiciendis fugiat maxime assumenda, cum vero doloribus quis veniam ullam beatae ratione quasi rerum sequi nobis ex soluta deserunt! Provident eos illo eligendi dolorem qui id maiores! Facilis accusantium dolore temporibus, accusamus quam reiciendis iusto at perferendis totam illum quae officia dignissimos optio voluptate qui aliquid corporis ad, cupiditate, ducimus consequatur illo consectetur incidunt a? Neque magni error nisi atque corrupti beatae expedita dicta explicabo, recusandae blanditiis ipsum, aliquid reprehenderit magnam molestias nam suscipit illum, dolores modi consequuntur ducimus. Eveniet, rerum molestias, provident dignissimos repellat maxime, illum perferendis unde minus ullam non qui! Eligendi, eum cum! Expedita, blanditiis quas ex id saepe voluptates et aut quisquam nisi, perspiciatis at sequi accusantium veniam. Ut, possimus? Totam veritatis et, voluptates dicta omnis quos doloribus quasi sint soluta adipisci, vero facilis enim fugiat temporibus. Assumenda vero aspernatur recusandae? Optio, ratione culpa deleniti id assumenda consequatur nostrum incidunt quo accusamus libero! Corporis eaque impedit magnam illum suscipit, nesciunt repudiandae autem recusandae culpa. Aliquam deserunt nostrum vero! Perferendis illum impedit laboriosam, cupiditate deserunt praesentium eius sequi, odio nisi suscipit enim voluptatum ducimus molestiae quia similique quidem dicta veniam. Dolorem fuga impedit amet accusantium optio distinctio rem sequi est alias tenetur deleniti veritatis deserunt, laborum modi quia commodi voluptas, pariatur excepturi voluptate. Commodi esse ex magni perspiciatis suscipit dolor, ea ullam iusto ipsum, sunt maxime animi ipsam. Et earum a reiciendis, saepe ipsa, tenetur dicta, quia iure optio molestias odit pariatur sequi culpa quas maxime mollitia id error facilis dolores consequatur autem? Minus beatae voluptas amet soluta porro eum autem iure totam repellendus dicta deserunt vitae, dignissimos suscipit ex recusandae, iste sit nisi quas dolorem. Iste quam ullam omnis blanditiis error maxime placeat quae tenetur accusantium harum sit exercitationem, quod natus necessitatibus, est assumenda? Voluptatibus obcaecati repellat expedita aspernatur quasi eaque tempora dolore, officiis neque, dolores officia fugiat voluptates voluptas numquam autem reiciendis illum. Asperiores suscipit aliquid perferendis corrupti odio deleniti modi cupiditate quibusdam quis, quod veritatis voluptatum corporis odit. Earum rem doloribus eligendi adipisci sunt, voluptate voluptatum voluptates et quam reprehenderit officiis maiores maxime fugiat ex ipsa dolorem corporis architecto totam possimus! Necessitatibus quidem assumenda possimus excepturi, et inventore ut accusamus quae natus ipsa facilis quam sed aut expedita reprehenderit velit. Provident dolorum molestias modi saepe accusamus temporibus maxime eius vero commodi quod dolore esse corporis, magnam totam minima molestiae reprehenderit adipisci ad quos eum perferendis qui eos. Repudiandae eveniet, temporibus labore provident dolorum deserunt ullam adipisci a reprehenderit dolorem nostrum. Voluptas molestias similique, delectus pariatur vitae voluptatum nisi perspiciatis vel ipsam minima quasi quidem quis nihil architecto, atque vero saepe facilis. Perferendis voluptates magni ducimus, eos rerum deleniti laborum debitis architecto quaerat commodi, autem ab excepturi? In excepturi odio deleniti fugiat nihil corrupti saepe harum! Dignissimos suscipit ad minus labore ipsum aliquid beatae, quia quam quaerat culpa ab corrupti laudantium possimus eveniet nulla. Perspiciatis quia asperiores, excepturi vel nesciunt numquam recusandae iusto provident laborum totam id voluptate quo natus, possimus necessitatibus veritatis? Suscipit porro, cum culpa dolorum vitae quae voluptate aspernatur natus debitis esse? Quae quos rem fugiat provident dicta, eveniet natus reiciendis ea beatae dolores illo nulla error aliquam inventore nesciunt laboriosam veniam at quam a, totam, tempore in veritatis amet. Quos deleniti recusandae numquam quaerat esse temporibus, hic reiciendis ratione, pariatur ullam incidunt sed fugit quo quae expedita error ad porro saepe fuga rerum, consectetur modi eum. Asperiores, quae mollitia. Ad, dolorem pariatur harum maiores dignissimos molestiae quos molestias voluptatibus at ratione dolorum, totam saepe suscipit est sequi impedit corrupti fugit accusamus id modi sint beatae? Perferendis, maiores ducimus asperiores itaque, autem necessitatibus voluptatum quia omnis explicabo vitae excepturi quas quos harum! Soluta aut maiores, impedit tempora itaque sit, totam iusto nisi facilis fuga voluptatum ratione suscipit nulla delectus in, facere commodi accusamus illum molestias mollitia! Corrupti odio dolorum necessitatibus nemo ipsum debitis quis! Provident vero repellendus vel sunt quasi ducimus debitis voluptatem itaque rerum. Dolorem, alias? Maxime eligendi et rerum distinctio eveniet nulla?</p>
              </div>
            </div>
          </div>
          <!-- After Change Class Just Content Shuold Use Sticky Nav -->
          <div class="col-md-4 ho_ps">
            <div class="ho_ps">
              <!-- Suggestion and Profile some data -->
              <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="60px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <router-link to="/">HoseinSedaqat</router-link>
                  <span class="text-muted">Hosein Sedaqat</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Switch</a>
              </div>
              <!-- Suggestion Header -->
              <div class="mt-3 d-flex flex-row justify-content-between">
                <p class="ho_pdfz text-muted">
                  Suggestions For You
                </p>
                <a href="#" class="ho_pdfz font-weight-bold">See All</a>
              </div>
              <!-- You Should Follows -->
              <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <!-- Footer -->
              <div class="mt-4 ">
                <span class="ho_ffs text-muted mx-1 ho_cp">About </span> 
                <span class="ho_ffs text-muted mx-1 ho_cp">Help </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Press </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">API </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Jobs </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Privacy </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Terms </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Locations </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Top Accounts </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Hashtags </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Languages</span>
                <p class="ho_ffsc mx-1 mt-2">&copy;  2022 INSTAGRAM Design By Hosein Sedaqat</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bbc{
  border: 2px solid rgb(193, 53, 132);
}
.swiper {
  height: 100px;
  width: 100%;
}
.swiper-wrapper {
  width: 100% !important;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
}
.swiper-button-next {
  left: 1;
  top: 35px;
  padding: 2.5rem 0.2rem;
  color: #333;
  transition: all 0.4s ease;
}
.swiper-button-next:hover {
  transform: translate(-2px);
}
.swiper-button-next::after {
  font-size: 10px;
  background-color: #e9e9e9;
  padding: 0.4rem;
  border-radius: 100%;
}
.swiper-button-prev {
  right: 1;
  top: 35px;
  padding: 2.5rem 0.2rem;
  color: #333;
  transition: all 0.4s ease;
}
.swiper-button-prev:hover {
  transform: translate(2px);
}
.swiper-button-prev::after {
  font-size: 10px;
  background-color: #e9e9e9;
  padding: 0.4rem;
  border-radius: 100%;
}
</style>
