<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-3">
      <h2>Sobre Nosotros</h2>
      <p>
        Actualiza la sección Sobre Nosotros,
        de la página <b>Nosotros</b>.
      </p>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right mb-3">
        <div class="d-inline-block mr-3 mb-3 mb-lg-0" style="opacity: 0.75">
          <a style="cursor: pointer" @click.prevent="info = !info"
            ><jam-info
              height="14px"
              class="current-color"
              width="14px"
            ></jam-info>
            Ver Página Nosotros - 1ra Sección
          </a>
        </div>

        <b-modal
          v-model="info"
          @close="info = false"
          no-close-on-esc
          no-close-on-backdrop
          centered
          size="xl"
          footer-class="border-0 pt-0"
          body-class="pt-0"
        >
          <template slot="modal-title">
            <div class="text-primary h2">Página Nosotros - 1ra Sección</div>
          </template>
          <template slot="modal-header-close">
            <button
              type="button"
              class="btn p-0 bg-transparent"
              @click="info = false"
            >
              <jam-close></jam-close>
            </button>
          </template>
          <div class="my-2">
            <img src="/files/img/info/about-1.jpg" class="img-fluid" alt="" />
          </div>
          <template v-slot:modal-footer="{ ok }">
            <button type="button" class="btn btn-primary" @click="info = false">
              Aceptar
            </button>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      info: false
    }
  }
}
</script>