<template>
  <div class="row">
    <div class="col-12" v-if="loading">
      <Loader
        texto="Cargando..."
        :iconClasses="['ml-1']"
        :iconWidth="20"
        :iconHeight="20"
        :styles="{ height: '400px' }"
      />
    </div>
    <div class="col-12" v-if="!loading">
      <div class="row mb-4" v-if="object && object.length > 0">
        <div class="col-6">
          <p class="mb-0">Arrastré los elementos en el orden que desee mostrarlos.</p>
        </div>
        <div class="col-6 text-right">
          {{ object.length }} entrada(s)
        </div>
      </div>
      <draggable
        class="row"
        v-model="orderElements"
        v-if="object && object.length > 0"
        @change="handleDrag"
      >
        <div
          :class="classes"
          v-for="element in object"
          :key="element.id"
          @click="clickElement(element.id)"
        >
          <div class="card player" v-if="type == 'players'">
            <div class="player__img ">
              <img
                :src="'https://storage.googleapis.com/playgroup-web/img/players/'+element.image_1"
                class="img-fluid card-img-top shadow player__img-main"
                alt
              />
              <img
                :src="'https://storage.googleapis.com/playgroup-web/img/players/'+element.image_2"
                class="img-fluid card-img-top shadow player__img-hover"
                alt
              />
            </div>
            <div class="card-body">
              <h3 class="text-primary mb-1">{{ element.full_name }}</h3>
              <pre class="d-block text-muted mb-1">{{ element.job }}</pre>
              <span class="d-block text-muted">{{ element.department }}</span>

              <div class="text-right mt-2">
                <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                  <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click.prevent="clickDelete(element.id)"
                >
                <i class="fas fa-trash-alt text-danger mr-1"></i>
                Eliminar</button>
              </div>
            </div>
          </div>

          <div class="card" v-if="type == 'success-stories'">
            <div class="card-body position-relative">
                <img
                  :src="'https://storage.googleapis.com/playgroup-web/img/stories/'+element.image"
                  class="img-fluid card-img-top"
                  alt
                />
               <img
                :src="'https://storage.googleapis.com/playgroup-web/img/stories/'+element.logo"
                class="position-absolute story__img-logo p-2" height="60" width="auto"
                alt
              />

              <h3 class="mt-3 mb-0">{{ element.title }}</h3>
              <p>{{ element.description }}</p>

              
            </div>
            <div class="card-footer pt-0 text-right border-0">
              <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                  <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click.prevent="clickDelete(element.id)"
                >
                <i class="fas fa-trash-alt text-danger mr-1"></i>
                Eliminar</button>
            </div>
          </div>
          <div class="card" v-if="type == 'customers'">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-12 text-center mb-3">
                  <div class="img__customer">
                    <img :alt="element.name" :src=" 'https://storage.googleapis.com/playgroup-web/img/customers/'+ element.image " class="img-fluid" >
                    </div>
                </div>
                <div class="col-12 mb-3 d-flex justify-content-between">
                  <h4 class="mb-0">
                    {{ element.name }}
                  </h4>
                  <div v-html="element.status_format"></div>
                </div>
                <div class="col-12 text-right">
                  <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                    <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                  <button
                    class="btn btn-sm btn-secondary"
                    @click.prevent="clickDelete(element.id)"
                  >
                  <i class="fas fa-trash-alt text-danger mr-1"></i>
                  Eliminar</button>
                  
                </div>
              </div>
            </div>

          </div>


          <div class="card" v-if="type == 'cooltura'">
            <div class="card-body position-relative">
                <img
                  :src="'https://storage.googleapis.com/playgroup-web/img/cooltura/'+element.image"
                  class="img-fluid card-img-top"
                  alt
                />

              <h3 class="mt-3 mb-0">{{ element.title }}</h3>

              <p>{{ element.description }}</p>
            </div>
            <div class="card-footer pt-0 text-right border-0">
              <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                  <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click.prevent="clickDelete(element.id)"
                >
                <i class="fas fa-trash-alt text-danger mr-1"></i>
                Eliminar</button>
            </div>
          </div>



          <div class="card" v-if="type == 'testimonials'">

            <div class="card-body">
              <div class="row align-items-start">
                <div class="col-auto">
                  <!-- Avatar -->
                  <span href="#" class="avatar avatar-xl rounded-circle">
                    <img
                      :src="'https://storage.googleapis.com/playgroup-web/img/testimonials/'+element.image"
                      class="img-fluid card-img-top"
                      alt
                    />
                  </span>
                </div>
                <div class="col ml--2">
                  <h4 class="mb-0">
                    {{ element.full_name}}
                  </h4>
                  <p class="text-sm text-muted">{{ element.job}}</p>

                  <p class="mb-0">{{ element.message }}</p>
                </div>
              </div>
            </div>

            <div class="card-footer pt-0 text-right border-0">
              <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                  <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click.prevent="clickDelete(element.id)"
                >
                <i class="fas fa-trash-alt text-danger mr-1"></i>
                Eliminar</button>
            </div>
          </div>


          <div class="card" v-if="type == 'awards'">

            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <img
                      :src="'https://storage.googleapis.com/playgroup-web/img/awards/'+element.image"
                      class="img-fluid"
                      alt
                    />
                </div>
                <div class="col-12 text-center">
                  <h4 class="mb-0 d-inline-block text-dark">
                    {{ element.name}}
                  </h4> - 
                  <p class="text-muted d-inline-block mb-0">{{ element.position}}</p>
                  <p class="mb-0">{{ element.category }}</p>
                </div>
              </div>
            </div>

            <div class="card-footer pt-0 text-right border-0">
              <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                  <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click.prevent="clickDelete(element.id)"
                >
                <i class="fas fa-trash-alt text-danger mr-1"></i>
                Eliminar</button>
            </div>
          </div>


          <div class="card" v-if="type == 'adn'">

            <div class="card-body">
              <div class="row">
                <div class="col-auto">
                  <h1 class="text-primary hashtag">#</h1> 
                </div>
                <div class="col ml--2">
                                      <span class="d-block font-weight-bold">{{ element.name}}</span>
                                      <p class="mb-0">{{ element.description }}</p>

                </div>
              </div>
            </div>

            <div class="card-footer pt-0 text-right border-0">
              <button class="btn btn-sm btn-secondary" @click.prevent="clickEdit(element.id)">
                  <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</button>
                <button
                  class="btn btn-sm btn-secondary"
                  @click.prevent="clickDelete(element.id)"
                >
                <i class="fas fa-trash-alt text-danger mr-1"></i>
                Eliminar</button>
            </div>
          </div>


        </div>
      </draggable>
      <p v-else class="mb-0 font-weight-bold">No se encontraron resultados.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
pre{
  font-family: inherit;
}
.img__customer{
  background: black;
  padding: 5%;
  border-radius: .375rem;
}
.player {
  .player__img-hover {
    display: none;
  }
  .player__img {
    cursor: pointer;
    &:hover {
      .player__img-main {
        display: none;
      }
      .player__img-hover {
        display: block;
      }
    }
  }
}
.hashtag{
  font-size: 48px;
      line-height: 1;
}
.story__img-logo{
  right: 15px;
  top: 15px;
}
</style>
<script>
import draggable from "vuedraggable";
import Loader from "./Loader";
export default {
  props: {
    object: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    classes: {
      type: Array,
      required: true
    }
  },
  components: {
    Loader,
    draggable
  },
  methods: {
    handleDrag() {
      this.$emit("drag", this.orderElements);
      this.loading = true;
    },
    clickElement(id) {
      this.$emit("click", id);
      this.index = id;
    },
    clickDelete(id) {
      this.$emit("delete", id);
    },
    clickEdit(id) {
      this.$emit("edit", id);
    }
  },
  data() {
    return {
      index: "",
      loading: false,
      orderElements: []
    };
  },
  watch: {
    object: function(newValue, oldValue) {
      if (newValue) {
        this.orderElements = newValue;
        this.loading = false;
        this.index = "";
      }
      if (
        newValue &&
        newValue.length == 0 &&
        this.oldValue &&
        this.oldValue.length == 1
      ) {
        this.loading = false;
      }
    }
  }
};
</script>