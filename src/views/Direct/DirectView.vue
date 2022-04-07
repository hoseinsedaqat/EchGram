<script lang="ts">
import Vue from 'vue'
import DirectLeftHeader from './Components/DirectLeftHeader.vue'

export default Vue.extend({
  name: "DirectView",
  data(){
    return {
      noneDirect: true,
      directOne: false
    }
  },
  components:{
    DirectLeftHeader
  },
  methods: {
    directUserOne(){
      this.noneDirect = false;
      this.directOne = true
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="row my-3 bg-white no-gutters">
        <!-- Define my Id -->
        <div class="col-md-4 d_hvh w-100 h-100">
          <direct-left-header></direct-left-header>
          <div class="d_bp d_of">
            <div class="d-flex py-3 d_ph" @click="directUserOne">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span class="font-weight-bold">Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="d_bp w-100 h-100 text-center">
            <!-- When We are have no Direct Select -->
            <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100" v-if="noneDirect">
            <h3 class="d_echl">Echgram</h3>
            <p class="h5">Your Messages</p>
            <span class="text-muted">
              Send private photos and messages to a friend or group.
            </span>
            <button class="btn btn-primary w-50 my-3">Send Message</button>
            </div>
            <!-- When We are have Direct -->
            <div v-if="directOne">
              <div class="w-100 h-100 d_bp">
              <!-- Direct Msg Header -->
                <div class="d-flex align-items-center justify-content-between d_mfhm mx-5">
                <span>
                  <img class="mr-3" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinMessage"  width="30px" style="border-radius:50%;">
                  <small class="font-weight-bold">Hosein</small>
                </span>
                <span>
                  <svg aria-label="View Thread Details" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                </span>
              </div>
              </div>
              <div style="height:481.2px;" class="d_of">
              <!-- Direct Msg Header -->
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iusto sapiente, debitis nostrum, ex perspiciatis officia officiis quaerat expedita omnis dolores ipsum quibusdam explicabo nulla dolor dicta! Rerum minima aliquid eos debitis blanditiis, repellendus eaque eveniet obcaecati quia voluptate suscipit assumenda ab quos soluta sequi vero quisquam? Fuga, sequi natus eveniet veritatis consectetur, consequuntur accusamus aliquid nesciunt ab in, sed iste. Nostrum eos laborum nam quos dolorem excepturi odit repudiandae ratione optio distinctio esse assumenda rerum architecto, delectus temporibus aperiam praesentium laboriosam beatae quod a dolore enim quis facere. Similique explicabo, veritatis quas esse numquam consequatur voluptatum. Autem natus laborum culpa voluptate deleniti officiis id quam, ut magni officia exercitationem temporibus voluptatibus provident, nihil corrupti, consequatur adipisci similique cupiditate architecto! Error aperiam rerum quia repudiandae sed ab autem quisquam numquam culpa voluptate ex illum delectus magni aliquam, omnis dolores cupiditate officia. Nisi iste ducimus, quo libero quas, quisquam earum repellendus incidunt adipisci modi sed reiciendis. Hic quibusdam dolorum minima ducimus, sequi a expedita harum placeat obcaecati ratione maxime similique officiis animi saepe, ab eligendi commodi facere eos qui quam at deserunt numquam possimus voluptatibus. Debitis reprehenderit consequatur, enim explicabo, quibusdam exercitationem nemo perspiciatis reiciendis eum corporis sequi tempora doloremque! Voluptatem provident, ea quo maxime architecto laudantium, et dolorum neque, vero adipisci quis aut velit numquam nihil exercitationem. Natus deserunt architecto iure maxime ipsa officiis quia totam aspernatur minima? Qui voluptatibus ut culpa nam distinctio veniam maxime et modi ipsa ad, voluptatem sequi voluptate repellat ratione consequatur quidem? Mollitia blanditiis sint fugit soluta deserunt, aliquid recusandae consequuntur repellat velit eaque corporis necessitatibus adipisci. Quo enim nulla odit distinctio officiis sit? Laboriosam nisi nihil in cumque optio impedit veniam labore cupiditate? Odit, numquam quasi corporis culpa magni odio omnis delectus, saepe corrupti sapiente iure fugiat autem esse debitis inventore ab expedita nulla dolorem eos veniam facere sint quisquam? Qui tempore labore doloremque. Molestias necessitatibus nostrum, consectetur magnam quidem molestiae numquam suscipit laborum, cum eum quibusdam quia alias. Dolorem earum illum deserunt excepturi, quia possimus perferendis itaque fugit fuga iure omnis sequi numquam saepe incidunt commodi in amet mollitia consequatur necessitatibus ipsum? Distinctio quibusdam perferendis excepturi est nostrum provident libero, deleniti debitis earum. Voluptatibus voluptatem rem neque nostrum, delectus nemo fuga repellendus odio repudiandae adipisci voluptates velit iusto ducimus, accusamus consequatur asperiores culpa? Sunt doloribus ullam, culpa amet ab facilis eligendi iure necessitatibus nihil fugiat magni. Similique ut a aliquam dolorem doloribus numquam repellendus. Illo cupiditate iure cum similique accusamus quaerat laborum natus nemo laboriosam assumenda. Temporibus consectetur voluptates mollitia assumenda exercitationem, a est maxime dolorum impedit eaque quisquam eius aperiam placeat atque explicabo nemo quasi numquam aut quia amet consequatur? Animi soluta velit ipsum, quod consequuntur quidem quae? Voluptas a aperiam minus, quod in at, explicabo fuga placeat voluptatem nemo distinctio assumenda praesentium quasi vitae dolorem? Et quaerat accusantium totam ex distinctio error, ab aut dolor enim? Aperiam enim eum laborum consequuntur error perspiciatis. Dignissimos similique dolorum, consequuntur alias recusandae quo error, vel a beatae ullam ex iure eaque laboriosam dolore? Praesentium libero molestias dolorum consequuntur animi officia quo est fugit voluptatum ducimus quos natus vitae fugiat, dolorem repudiandae, beatae expedita in nisi deleniti laborum excepturi aperiam sit quibusdam. Placeat quae non possimus at ullam atque. Reiciendis deleniti voluptas suscipit cumque, quisquam quibusdam alias voluptate, minus sint quasi iusto quam tempore temporibus et asperiores delectus consequuntur beatae placeat. Illo harum dolorum provident, dolorem totam eaque dignissimos ex animi assumenda ab tenetur laudantium pariatur vitae dolores minima, maxime possimus maiores. Harum eligendi reiciendis qui. Repudiandae ut qui, tempora aspernatur excepturi cumque porro corporis eum, aperiam aut reiciendis deserunt incidunt rem ipsa nemo dicta. Vitae expedita praesentium iure aperiam voluptatum veniam asperiores assumenda esse animi dignissimos atque quaerat voluptatem tempora totam est fugit accusamus sed illo, laudantium maiores neque velit. Saepe voluptate quas dicta consequuntur repudiandae accusamus quod porro dolor omnis earum, et consectetur aut. Nemo doloremque non perspiciatis pariatur asperiores debitis deleniti nesciunt fugit corrupti! Deserunt, doloribus quasi praesentium ipsam assumenda est quos magni sed aut, eos quibusdam rerum fuga necessitatibus fugiat ipsum. Assumenda id voluptatum, necessitatibus distinctio, temporibus harum, itaque ea repellendus veritatis dolores quae facilis natus sit inventore ipsa non expedita qui placeat sapiente nemo. Alias fugiat, repellendus numquam nihil hic architecto assumenda perspiciatis autem officia nulla. Repellat maxime odit adipisci possimus hic qui quidem culpa quisquam ut, laudantium nam aperiam quis asperiores pariatur laborum, praesentium est facilis nulla quam quibusdam nobis nisi necessitatibus? Quaerat voluptatem harum itaque voluptates! Maxime odit quisquam odio dolore autem consequatur illo quia porro nihil ipsa, rem deserunt earum nulla sapiente a ad aut perspiciatis esse ratione neque ullam architecto possimus repellat. Cupiditate, sapiente provident explicabo perspiciatis praesentium quisquam quibusdam labore? Possimus nulla, quam a vero porro laborum quo esse rem adipisci consectetur hic ut pariatur. Suscipit aspernatur nihil vitae expedita voluptatem sapiente vel deserunt iste, reiciendis placeat at laudantium porro quisquam inventore consequuntur id ratione dolorem nulla, natus harum ex tempore! Reiciendis rerum nam vitae non maiores qui, commodi distinctio ab ipsam vero ratione et enim voluptatibus. Et quidem fugit, sapiente tempore necessitatibus quis, repellat accusamus provident autem id animi nesciunt placeat vitae suscipit dolorem eaque quod! At cumque mollitia consequuntur optio, impedit a ad alias eveniet quia fugiat voluptatem fuga, tempore laborum quo placeat perspiciatis culpa. Consequuntur autem nobis sunt enim, omnis dicta temporibus maxime pariatur, deleniti reiciendis ad illum placeat esse animi quaerat, maiores in modi ipsum est. Sint perferendis itaque magni dicta a accusamus corrupti, rerum qui mollitia quae ea repellendus odio non cumque ab dolor natus nemo inventore. Incidunt voluptatum aut molestiae porro vel non necessitatibus a in! Quidem, architecto laudantium harum deleniti id tempore. Odio, vel beatae a tempora commodi esse unde tempore aliquid minima reiciendis sunt officia possimus similique! Eius eligendi recusandae quisquam odit, placeat, dolore id veritatis cupiditate ut accusantium voluptatem, saepe magnam repellendus! Possimus voluptates illum nemo quas similique voluptatem impedit consequatur, suscipit vitae in necessitatibus, dolore mollitia sed ipsa reiciendis fuga dignissimos repellat deserunt expedita commodi natus temporibus pariatur. Odio illo obcaecati aspernatur nesciunt natus hic. Reiciendis repudiandae recusandae eligendi. Molestiae ullam mollitia consequatur eius ducimus dolorem dolor incidunt officia inventore sunt dolores dolorum quasi dolore sequi necessitatibus magni impedit ratione odit nobis recusandae, quis quae! Nostrum, totam velit ipsum officiis modi, repudiandae, unde minus recusandae voluptates suscipit exercitationem illum. Blanditiis reprehenderit repudiandae corrupti illo eum quo odio eos neque minima necessitatibus ipsa est a exercitationem earum fugiat, quod odit id pariatur molestiae ea tempora quis. Voluptates veniam quam alias? Quidem, unde magnam. Cumque error sunt illum? Quibusdam, nam delectus distinctio maxime a provident iste ipsa ea reiciendis modi at sint architecto ullam nesciunt porro laboriosam? Explicabo ea dolor fuga sequi accusamus a aperiam? Qui, nostrum corrupti eligendi, maiores voluptates numquam aspernatur temporibus doloremque nulla aliquid assumenda. Doloribus, soluta reiciendis inventore tempora sunt aperiam explicabo dicta cum deleniti expedita ab vitae facilis voluptatem sint adipisci iusto corporis, assumenda similique earum tempore maxime sed! Doloremque explicabo corrupti facilis necessitatibus fuga nesciunt expedita adipisci ab possimus eius vitae, dolor beatae quos excepturi mollitia! Et quam sequi aspernatur. Omnis explicabo, ea pariatur minima ipsam qui deserunt cum at eos in voluptates reiciendis praesentium, dolores perspiciatis facilis reprehenderit quaerat sunt accusamus hic temporibus quis non. Vitae est quas ipsam molestiae cupiditate officia, deserunt, voluptates harum eos consequatur quod? Nulla praesentium mollitia vel? Optio nesciunt mollitia iusto corrupti sed ut consectetur architecto nobis, possimus vitae adipisci perferendis doloremque. Dolorum error, soluta quasi expedita aut dignissimos numquam eos impedit possimus, pariatur voluptatum accusamus? Excepturi error dolorum, provident officiis deserunt quis non, et dolores sed dolorem fugit dignissimos rem! Laborum quas necessitatibus in sequi quibusdam fuga, molestias eius sit veniam libero vero harum cum! Facilis recusandae error libero repellat non aspernatur, nihil magnam omnis, voluptate minus eaque repellendus quo dolore totam, ducimus tenetur dolores! Nam sunt maxime, provident nihil architecto, ab pariatur deleniti blanditiis quaerat praesentium sit exercitationem saepe eius ut unde qui corrupti cumque aperiam facere, molestiae minus ad est quasi laboriosam! Repellat similique laudantium nemo in perferendis illum mollitia voluptatum voluptatibus amet autem, esse deserunt laborum dicta rerum. Eligendi nam, delectus, libero atque officia, rem alias quibusdam quos natus magni error provident praesentium. Tempora placeat dolore quidem dolorem, et sequi repudiandae numquam! Necessitatibus quo voluptas itaque excepturi! Quos vel nulla dolor? Est quisquam iusto doloribus iste neque sapiente, architecto cupiditate. Dolore ratione sequi omnis error officiis quas qui, est ipsam, tenetur veniam beatae molestias fugit eum culpa dolorum corrupti maiores mollitia ullam eligendi, doloribus deserunt maxime incidunt? Praesentium similique doloremque eum pariatur esse officia dolores placeat laboriosam sunt. Eaque deleniti, ullam aperiam, accusantium nobis eius maiores iure tempora est consequuntur vitae aliquid alias repudiandae eligendi voluptates adipisci, atque impedit quisquam quidem repellat sit neque perferendis? Dignissimos laborum minima quos ipsa maiores sit ex consectetur blanditiis laboriosam! Porro rerum eaque expedita! Velit, inventore accusantium, sequi rerum quasi quo esse nobis iusto repellendus quibusdam provident, dignissimos nulla ipsa ad veniam! Amet nam corporis, ipsam nihil dolorem provident molestias natus, alias odio sapiente quisquam molestiae ex! Quo tempore vel voluptatibus quis voluptatem iusto vitae.</p>
                <!-- <div class="d-flex align-items-center justify-content-between d_mfhm mx-5">
                <span>
                  <img class="mr-3" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinMessage"  width="30px" style="border-radius:50%;">
                  <small class="font-weight-bold">Hosein</small>
                </span>
                <span>
                  <svg aria-label="View Thread Details" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                </span>
              </div> -->
              </div>
              <div class="w-100 h-100 d_bt">
              <!-- Direct Msg Header -->
                <div class="d-flex align-items-center justify-content-between d_mfhm mx-5">
                <span>
                  <img class="mr-3" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinMessage"  width="30px" style="border-radius:50%;">
                  <small class="font-weight-bold">Hosein</small>
                </span>
                <span>
                  <svg aria-label="View Thread Details" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
