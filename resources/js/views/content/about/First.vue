<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-3">
      <h2>Sobre Nosotros</h2>
      <p>Actualiza la sección Sobre Nosotros, de la página <b>Nosotros</b>.</p>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right mb-3">
        <div
          class="d-inline-block mr-3 mb-3 mb-lg-0"
          style="opacity: 0.75"
          v-if="startBlock"
        >
          <a style="cursor: pointer" @click.prevent="info = !info"
            ><jam-info
              height="14px"
              class="current-color"
              width="14px"
            ></jam-info>
            Ver Página Nosotros - 1ra Sección
          </a>
        </div>
        <Button
          :text="'Actualizar'"
          :classes="['btn-inverse-primary']"
          :request-server="requestSubmit"
          @click="updateText"
          v-if="!startBlock"
        ></Button>
        <button
          type="button"
          class="btn btn-secondary"
          @click.prevent="restoreText"
          v-if="!startBlock"
        >
          Cancelar
        </button>
        <a
          href="#"
          class="btn btn-icon btn-inverse-primary"
          @click.prevent="editElText"
          v-if="startBlock"
        >
          <span class="btn-inner--icon">
            <jam-info class="current-color"></jam-info>
          </span>
          <span class="btn-inner--text">Editar Sección</span>
        </a>

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
      <div v-if="startBlock">
        <div v-if="!loadingGetText">
          <div class="row mb-4">
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Título ES</label>
                        <p v-if="elText.first_block_1.title_es">
                          {{ elText.first_block_1.title_es }}
                        </p>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Título EN</label>
                        <p v-if="elText.first_block_1.title_en">
                          {{ elText.first_block_1.title_en }}
                        </p>
                        <p v-else>No registrado</p>
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción ES</label>
                        <div
                          v-if="elText.first_block_1.description_es"
                          v-html="elText.first_block_1.description_es"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción EN</label>
                        <div
                          v-if="elText.first_block_1.description_en"
                          v-html="elText.first_block_1.description_en"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="form-group">
                    <label class="font-weight-bold d-block">Imagen</label>
                    <img
                      v-if="elText.first_block_2.image"
                      :src="imagesUrl + '/about/' + elText.first_block_2.image"
                      class="img-fluid"
                    />
                    <p v-else>No registrado</p>
                  </div>
                  <div class="form-group">
                    <label class="d-block font-weight-bold">Video</label>
                    <iframe
                      id="player"
                      type="text/html"
                      width="100%"
                      height="360"
                      v-if="elText.first_block_2.url_video"
                      :src="
                        'https://www.youtube.com/embed/' +
                        elText.first_block_2.id_video
                      "
                      frameborder="0"
                    ></iframe>
                    <p v-else>No se ha registrado un video.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Misión</h2>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción ES</label>
                        <div
                          v-if="elText.first_block_3.description_es"
                          v-html="elText.first_block_3.description_es"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción EN</label>
                        <div
                          v-if="elText.first_block_3.description_en"
                          v-html="elText.first_block_3.description_en"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="form-group">
                    <label class="font-weight-bold d-block">Imagen</label>
                    <img
                      v-if="elText.first_block_4.image"
                      :src="imagesUrl + '/about/' + elText.first_block_4.image"
                      class="img-fluid"
                    />
                    <p v-else>No registrado</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Visión</h2>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción ES</label>
                        <div
                          v-if="elText.first_block_5.description_es"
                          v-html="elText.first_block_5.description_es"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción EN</label>
                        <div
                          v-if="elText.first_block_5.description_en"
                          v-html="elText.first_block_5.description_en"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="form-group">
                    <label class="font-weight-bold d-block">Imagen</label>
                    <img
                      v-if="elText.first_block_6.image"
                      :src="imagesUrl + '/about/' + elText.first_block_6.image"
                      class="img-fluid"
                    />
                    <p v-else>No registrado</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Estadística 1</h2>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold">Cantidad</label>
                        <div
                          v-if="elText.first_block_7.quantity"
                          v-html="elText.first_block_7.quantity"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción ES</label>
                        <div
                          v-if="elText.first_block_7.description_es"
                          v-html="elText.first_block_7.description_es"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción EN</label>
                        <div
                          v-if="elText.first_block_7.description_en"
                          v-html="elText.first_block_7.description_en"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Estadística 2</h2>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold d-block">Icono</label>
                        <img
                          v-if="elText.first_block_8.icon"
                          :src="
                            imagesUrl + '/about/' + elText.first_block_8.icon
                          "
                          class="img-fluid"
                        />
                        <p v-else>No registrado</p>
                      </div>
                      <div class="form-group">
                        <label class="font-weight-bold">Cantidad</label>
                        <div
                          v-if="elText.first_block_8.quantity"
                          v-html="elText.first_block_8.quantity"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción ES</label>
                        <div
                          v-if="elText.first_block_8.description_es"
                          v-html="elText.first_block_8.description_es"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold">Descripción EN</label>
                        <div
                          v-if="elText.first_block_8.description_en"
                          v-html="elText.first_block_8.description_en"
                        ></div>
                        <p v-else>No registrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-12 col-lg-4 mb-4" v-for="i in 9" :key="i">
            <div class="card">
              <div class="card-body">
                <div class="w-25">
                  <Skeleton height="15px" />
                </div>
                <div class="w-75">
                  <Skeleton height="50px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="editBlock">
        <form @submit.prevent="updateText">
          <div class="row mb-4">
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <Input
                          label="Título"
                          variable="title"
                          :errors="errorsText"
                          :valueEn.sync="elText.first_block_1.title_en"
                          :valueEs.sync="elText.first_block_1.title_es"
                          :valueEnParent="elText.first_block_1.title_en"
                          :valueEsParent="elText.first_block_1.title_es"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <Editor
                          size="md"
                          label="Descripción"
                          variable="description"
                          :errors="errorsText"
                          :valueEn.sync="elText.first_block_1.description_en"
                          :valueEs.sync="elText.first_block_1.description_es"
                          :valueEnParent="elText.first_block_1.description_en"
                          :valueEsParent="elText.first_block_1.description_es"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="form-group">
                    <label class="font-weight-bold d-block" for="logo"
                      >Imagen</label
                    >
                    <div class="row">
                      <div
                        v-bind:class="[
                          elText.first_block_2.image
                            ? 'col-lg-4 mb-3 mb-lg-0'
                            : '',
                        ]"
                      >
                        <img
                          v-if="elText.first_block_2.image"
                          :src="
                            imagesUrl + '/about/' + elText.first_block_2.image
                          "
                          alt
                          class="img-fluid"
                        />
                      </div>
                      <div
                        v-bind:class="[
                          elText.first_block_2.image ? 'col-lg-8' : 'col-lg-12',
                        ]"
                        v-if="editBlock"
                      > 
                         <small class="d-block mb-0 lh-1">Resolución recomendada: 500×300px</small> 
                    <small class="d-block mb-0 lh-1">Formato: JPG</small> 
                    <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 150KB</small>
                        <vue-dropzone
                          ref="ref_first_block_2_image"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_first_block_2_image.dropzone,
                              1,
                              160000,
                              '150kb'
                            )
                          "
                          id="first_block_2_image"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte el archivo aquí o haga click para cargarlo.
                            </h5>
                          </div>
                        </vue-dropzone>

                        <label
                          v-if="errorsText && errorsText.first_block_2_image"
                          class="text-danger text-sm d-block mt-2"
                          for="first_block_2_image"
                          >{{ errorsText.first_block_2_image[0] }}</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="font-weight-bold" for="url"
                      >URL Video Youtube</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="elText.first_block_2.url_video"
                      id="url_video"
                    />
                    <small id="url_video" class="form-text" style="opacity: 0.7"
                      >El formato de la URL debe ser
                      "https://www.youtube.com/watch?v=N1bWwEfIDP0".</small
                    >
                    <label
                      v-if="errorsText && errorsText.first_block_2_url_video"
                      class="mt-2 text-danger text-sm"
                      for="first_block_2_url_video"
                      >{{ errorsText.first_block_2_url_video[0] }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Misión</h2>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <Editor
                          size="md"
                          label="Descripción"
                          variable="description"
                          :errors="errorsText"
                          :valueEn.sync="elText.first_block_3.description_en"
                          :valueEs.sync="elText.first_block_3.description_es"
                          :valueEnParent="elText.first_block_3.description_en"
                          :valueEsParent="elText.first_block_3.description_es"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="form-group">
                    <label class="font-weight-bold d-block" for="logo"
                      >Imagen</label
                    >
                    <div class="row">
                      <div
                        v-bind:class="[
                          elText.first_block_4.image
                            ? 'col-lg-4 mb-3 mb-lg-0'
                            : '',
                        ]"
                      >
                        <img
                          v-if="elText.first_block_4.image"
                          :src="
                            imagesUrl + '/about/' + elText.first_block_4.image
                          "
                          alt
                          class="img-fluid"
                        />
                      </div>
                      <div
                        v-bind:class="[
                          elText.first_block_4.image ? 'col-lg-8' : 'col-lg-12',
                        ]"
                        v-if="editBlock"
                      >
                         <small class="d-block mb-0 lh-1">Resolución recomendada: 500×300px</small> 
                    <small class="d-block mb-0 lh-1">Formato: JPG</small> 
                    <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 150KB</small>
                        <vue-dropzone
                          ref="ref_first_block_4_image"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_first_block_4_image.dropzone,
                              1,
                              160000,
                              '150kb'
                            )
                          "
                          id="first_block_4_image"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte el archivo aquí o haga click para cargarlo.
                            </h5>
                          </div>
                        </vue-dropzone>

                        <label
                          v-if="errorsText && errorsText.first_block_4_image"
                          class="text-danger text-sm d-block mt-4"
                          for="first_block_4_image"
                          >{{ errorsText.first_block_4_image[0] }}</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Visión</h2>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <Editor
                          size="md"
                          label="Descripción"
                          variable="description"
                          :errors="errorsText"
                          :valueEn.sync="elText.first_block_5.description_en"
                          :valueEs.sync="elText.first_block_5.description_es"
                          :valueEnParent="elText.first_block_5.description_en"
                          :valueEsParent="elText.first_block_5.description_es"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">

                  <div class="form-group">
                    <label class="font-weight-bold d-block" for="logo"
                      >Imagen</label
                    >
                    <div class="row">
                      <div
                        v-bind:class="[
                          elText.first_block_6.image
                            ? 'col-lg-4 mb-3 mb-lg-0'
                            : '',
                        ]"
                      >
                        <img
                          v-if="elText.first_block_6.image"
                          :src="
                            imagesUrl + '/about/' + elText.first_block_6.image
                          "
                          alt
                          class="img-fluid"
                        />
                      </div>
                      <div
                        v-bind:class="[
                          elText.first_block_6.image ? 'col-lg-8' : 'col-lg-12',
                        ]"
                        v-if="editBlock"
                      >
                        <vue-dropzone
                          ref="ref_first_block_6_image"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_first_block_6_image.dropzone,
                              1,
                              100000,
                              '100kb'
                            )
                          "
                          id="first_block_6_image"
                          :options="dropzoneOptions"
                          :duplicateCheck="true"
                          :useCustomSlot="true"
                        >
                          <div class="dropzone-custom-content">
                            <h5 class="dropzone-custom-title text-primary">
                              Suelte el archivo aquí o haga click para cargarlo.
                            </h5>
                          </div>
                        </vue-dropzone>

                        <label
                          v-if="errorsText && errorsText.first_block_6_image"
                          class="text-danger text-sm d-block mt-2"
                          for="first_block_6_image"
                          >{{ errorsText.first_block_6_image[0] }}</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Estadística 1</h2>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="quantity_7"
                          >Cantidad</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="elText.first_block_7.quantity"
                          id="quantity_7"
                        />
                        <label
                          v-if="errorsText && errorsText.first_block_7_quantity"
                          class="mt-2 text-danger text-sm"
                          for="elText.first_block_7_quantity"
                          >{{ errorsText.first_block_7_quantity[0] }}</label
                        >
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <Editor
                          size="md"
                          label="Descripción"
                          variable="description"
                          :errors="errorsText"
                          :valueEn.sync="elText.first_block_7.description_en"
                          :valueEs.sync="elText.first_block_7.description_es"
                          :valueEnParent="elText.first_block_7.description_en"
                          :valueEsParent="elText.first_block_7.description_es"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="mb-3">Estadística 2</h2>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold d-block" for="logo"
                          >Imagen</label
                        >
                        <div class="row">
                          <div
                            v-bind:class="[
                              elText.first_block_8.icon
                                ? 'col-lg-4 mb-3 mb-lg-0'
                                : '',
                            ]"
                          >
                            <img
                              v-if="elText.first_block_8.icon"
                              :src="
                                imagesUrl +
                                '/about/' +
                                elText.first_block_8.icon
                              "
                              alt
                              class="img-fluid"
                            />
                          </div>
                          <div
                            v-bind:class="[
                              elText.first_block_8.icon
                                ? 'col-lg-8'
                                : 'col-lg-12',
                            ]"
                            v-if="editBlock"
                          >
                            <vue-dropzone
                              ref="ref_first_block_8_icon"
                              @vdropzone-file-added="
                                $validateImageDropzone(
                                  $event,
                                  $refs.ref_first_block_8_icon.dropzone,
                                  1,
                                  100000,
                                  '100kb'
                                )
                              "
                              id="first_block_8_icon"
                              :options="dropzoneOptions"
                              :duplicateCheck="true"
                              :useCustomSlot="true"
                            >
                              <div class="dropzone-custom-content">
                                <h5 class="dropzone-custom-title text-primary">
                                  Suelte el archivo aquí o haga click para
                                  cargarlo.
                                </h5>
                              </div>
                            </vue-dropzone>

                            <label
                              v-if="errorsText && errorsText.first_block_8_icon"
                              class="text-danger text-sm d-block mt-2"
                              for="first_block_8_icon"
                              >{{ errorsText.first_block_8_icon[0] }}</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="font-weight-bold" for="quantity_8"
                          >Cantidad</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="elText.first_block_8.quantity"
                          id="quantity_8"
                        />
                        <label
                          v-if="errorsText && errorsText.first_block_8_quantity"
                          class="mt-2 text-danger text-sm"
                          for="elText.first_block_8_quantity"
                          >{{ errorsText.first_block_8_quantity[0] }}</label
                        >
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <Editor
                          size="md"
                          label="Descripción"
                          variable="description"
                          :errors="errorsText"
                          :valueEn.sync="elText.first_block_8.description_en"
                          :valueEs.sync="elText.first_block_8.description_es"
                          :valueEnParent="elText.first_block_8.description_en"
                          :valueEsParent="elText.first_block_8.description_es"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Editor from "../../../components/form/Editor";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
import vue2Dropzone from "vue2-dropzone";
export default {
  props: {
    messageOrder: String,
    imagesUrl: String,
    routeGetText: String,
    routeUpdateText: String,
  },
  components: {
    vueDropzone: vue2Dropzone,
    Skeleton,
    Editor,
    Input,
    Button,
  },
  data() {
    return {
      startBlock: true,
      info: false,
      loadingGetText: false,
      requestSubmit: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      elText: {
        first_block_1: {},
        first_block_2: {},
        first_block_3: {},
        first_block_4: {},
        first_block_5: {},
        first_block_6: {},
        first_block_7: {},
        first_block_8: {},
      },
      errorsText: {},
      editBlock: false,
    };
  },
  methods: {
    restoreText() {
      this.elText = {
        first_block_1: {},
        first_block_2: {},
        first_block_3: {},
        first_block_4: {},
        first_block_5: {},
        first_block_6: {},
        first_block_7: {},
        first_block_8: {},
      };
      this.errorsText = {};
      (this.startBlock = true), (this.editBlock = false);
      this.getElText();
    },
    editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    updateText() {
      this.requestSubmit = true;
      const fd = new FormData();
      /*if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }*/

      if (this.elText.first_block_1.title_es) {
        fd.append("first_block_1_title_es", this.elText.first_block_1.title_es);
      }
      if (this.elText.first_block_1.title_en) {
        fd.append("first_block_1_title_en", this.elText.first_block_1.title_en);
      }
      if (this.elText.first_block_1.description_es) {
        fd.append(
          "first_block_1_description_es",
          this.elText.first_block_1.description_es
        );
      }
      if (this.elText.first_block_1.description_en) {
        fd.append(
          "first_block_1_description_en",
          this.elText.first_block_1.description_en
        );
      }

      if (this.$refs.ref_first_block_2_image.dropzone.files[0]) {
        fd.append(
          "first_block_2_image",
          this.$refs.ref_first_block_2_image.dropzone.files[0]
        );
      }
      if (this.elText.first_block_2.url_video) {
        fd.append(
          "first_block_2_url_video",
          this.elText.first_block_2.url_video
        );
      }

      if (this.elText.first_block_3.description_es) {
        fd.append(
          "first_block_3_description_es",
          this.elText.first_block_3.description_es
        );
      }
      if (this.elText.first_block_3.description_en) {
        fd.append(
          "first_block_3_description_en",
          this.elText.first_block_3.description_en
        );
      }

      if (this.$refs.ref_first_block_4_image.dropzone.files[0]) {
        fd.append(
          "first_block_4_image",
          this.$refs.ref_first_block_4_image.dropzone.files[0]
        );
      }

      if (this.elText.first_block_5.description_es) {
        fd.append(
          "first_block_5_description_es",
          this.elText.first_block_5.description_es
        );
      }
      if (this.elText.first_block_5.description_en) {
        fd.append(
          "first_block_5_description_en",
          this.elText.first_block_5.description_en
        );
      }

      if (this.$refs.ref_first_block_6_image.dropzone.files[0]) {
        fd.append(
          "first_block_6_image",
          this.$refs.ref_first_block_6_image.dropzone.files[0]
        );
      }

      if (this.elText.first_block_7.quantity) {
        fd.append("first_block_7_quantity", this.elText.first_block_7.quantity);
      }
      if (this.elText.first_block_7.description_es) {
        fd.append(
          "first_block_7_description_es",
          this.elText.first_block_7.description_es
        );
      }
      if (this.elText.first_block_7.description_en) {
        fd.append(
          "first_block_7_description_en",
          this.elText.first_block_7.description_en
        );
      }

      if (this.$refs.ref_first_block_8_icon.dropzone.files[0]) {
        fd.append(
          "first_block_8_icon",
          this.$refs.ref_first_block_8_icon.dropzone.files[0]
        );
      }
      if (this.elText.first_block_8.quantity) {
        fd.append("first_block_8_quantity", this.elText.first_block_8.quantity);
      }
      if (this.elText.first_block_8.description_es) {
        fd.append(
          "first_block_8_description_es",
          this.elText.first_block_8.description_es
        );
      }
      if (this.elText.first_block_8.description_en) {
        fd.append(
          "first_block_8_description_en",
          this.elText.first_block_8.description_en
        );
      }

      axios
        .post(this.routeUpdateText, fd)
        .then((response) => {
          this.requestSubmit = false;
          this.restoreText();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errorsText = error.response.data.errors || {};
            return;
          }
          this.restoreText();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        });
    },
    getElText() {
      this.loadingGetText = true;
      axios
        .get(this.routeGetText)
        .then((response) => {
          if (response.data.first_block_1) {
            this.elText.first_block_1 = response.data.first_block_1;
          }
          if (response.data.first_block_2) {
            this.elText.first_block_2 = response.data.first_block_2;
          }
          if (response.data.first_block_3) {
            this.elText.first_block_3 = response.data.first_block_3;
          }
          if (response.data.first_block_4) {
            this.elText.first_block_4 = response.data.first_block_4;
          }
          if (response.data.first_block_5) {
            this.elText.first_block_5 = response.data.first_block_5;
          }
          if (response.data.first_block_6) {
            this.elText.first_block_6 = response.data.first_block_6;
          }
          if (response.data.first_block_7) {
            this.elText.first_block_7 = response.data.first_block_7;
          }
          if (response.data.first_block_8) {
            this.elText.first_block_8 = response.data.first_block_8;
          }

          this.loadingGetText = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getElText();
  },
};
</script>