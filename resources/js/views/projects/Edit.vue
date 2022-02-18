<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  title="Actualizar Proyecto"
                  parent
                  active="Proyectos"
                ></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <span
                  v-if="
                    Object.keys(errors).length === 0 &&
                    errors.constructor === Object
                  "
                ></span>
                <span v-else class="d-block text-danger mb-2"
                  >Algunos campos estan incorrectos</span
                >
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary', 'mr-2']"
                  :request-server="requestServer"
                ></Button>
                <a type="button" class="btn btn-secondary" :href="routeReturn"
                  >Cancelar</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-3">
          <div class="col-12 text-right">
            <b-form-checkbox
              size="lg"
              v-model="element.active"
              name="check-button"
              switch
            >
              Mostrar Proyecto en la Web
            </b-form-checkbox>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Brief</h2>
            <p>Indica los datos principales del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <InputSlug
                      :urlEs="appUrl + '/'"
                      :urlEn="appUrl + '/en/'"
                      label="Nombre"
                      variable="name"
                      type="Ruta"
                      :errors="errors"
                      :valueEn.sync="element.name_en"
                      :valueEs.sync="element.name_es"
                      :slugEn.sync="element.slug_en"
                      :slugEs.sync="element.slug_es"
                      :valueEnParent="element.name_en"
                      :valueEsParent="element.name_es"
                      :slugEnParent="element.slug_en"
                      :slugEsParent="element.slug_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image"
                        >Logo Blanco:</label
                      >
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 200×100px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: PNG</small>
                      <small class="d-block mb-2 lh-1"
                        >Tamaño recomendado: No mayor a 100KB</small
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            class="img-fluid p-2 bg-dark"
                            :src="imagesUrl + '/projects/' + element.logo"
                            alt
                          />
                        </div>
                        <div class="col-lg-8 vue-dropzone-dark">
                          <vue-dropzone
                            ref="ref_logo"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_logo.dropzone,
                                1,
                                110000,
                                '100kb'
                              )
                            "
                            id="image"
                            class="text-center dropzone-dark"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.logo"
                            class="text-danger text-sm d-block mt-2"
                            for="logo"
                            >{{ errors.logo[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image_colour"
                        >Logo Color:</label
                      >
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 200×100px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: PNG</small>
                      <small class="d-block mb-2 lh-1"
                        >Tamaño recomendado: No mayor a 100KB</small
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            class="img-fluid"
                            :src="
                              imagesUrl + '/projects/' + element.logo_colour
                            "
                            alt
                          />
                        </div>
                        <div class="col-lg-8 vue-dropzone-dark">
                          <vue-dropzone
                            ref="ref_logo_colour"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_logo_colour.dropzone,
                                1,
                                110000,
                                '100kb'
                              )
                            "
                            id="image_colour"
                            class="text-center"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.logo_colour"
                            class="text-danger text-sm d-block mt-2"
                            for="logo_colour"
                            >{{ errors.logo_colour[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image"
                        >Card Proyecto:</label
                      >
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 400×410px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-2 lh-1"
                        >Tamaño recomendado: No mayor a 100KB</small
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            v-if="element.card"
                            class="img-fluid p-2 bg-dark"
                            :src="imagesUrl + '/projects/' + element.card"
                            alt
                          />
                        </div>
                        <div class="col-lg-8 vue-dropzone-dark">
                          <vue-dropzone
                            ref="ref_card"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_card.dropzone,
                                1,
                                110000,
                                '100kb'
                              )
                            "
                            id="image_card"
                            class="text-center dropzone-dark"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.card"
                            class="text-danger text-sm d-block mt-2"
                            for="card"
                            >{{ errors.card[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image"
                        >Card Hover Proyecto:</label
                      >
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 700×410px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-2 lh-1"
                        >Tamaño recomendado: No mayor a 250KB</small
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            v-if="element.card_hover"
                            class="img-fluid p-2 bg-dark"
                            :src="imagesUrl + '/projects/' + element.card_hover"
                            alt
                          />
                        </div>
                        <div class="col-lg-8 vue-dropzone-dark">
                          <vue-dropzone
                            ref="ref_card_hover"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_card_hover.dropzone,
                                1,
                                260000,
                                '250kb'
                              )
                            "
                            id="image_card_hover"
                            class="text-center"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.card_hover"
                            class="text-danger text-sm d-block mt-2"
                            for="card_hover"
                            >{{ errors.card_hover[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <Statuses
                      :selected.sync="element.project_status_id"
                      :errors="errors"
                      :selectedParent="element.project_status_id"
                      :route-create="routeStatusesCreate"
                      :route-get-all="routeStatusesGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <Editor
                      size="md"
                      label="Descripción"
                      variable="description"
                      :errors="errors"
                      :valueEn.sync="element.description_en"
                      :valueEs.sync="element.description_es"
                      :valueEnParent="element.description_en"
                      :valueEsParent="element.description_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Input
                      label="Dormitorios"
                      variable="rooms"
                      :errors="errors"
                      :valueEn.sync="element.rooms_en"
                      :valueEs.sync="element.rooms_es"
                      :valueEnParent="element.rooms_en"
                      :valueEsParent="element.rooms_es"
                    >
                      <small class="form-text" style="opacity: 0.7"
                        >Ingrese un resumen de los Dormitorios con lo que cuenta
                        el Proyecto, por ejemplo "1 a 3 Dormitorios".</small
                      >
                    </Input>
                  </div>
                  <div class="col-12 col-lg-6">
                    <Input
                      label="Metraje"
                      variable="footage"
                      :errors="errors"
                      :valueEn.sync="element.footage_en"
                      :valueEs.sync="element.footage_es"
                      :valueEnParent="element.footage_en"
                      :valueEsParent="element.footage_es"
                    >
                      <small class="form-text" style="opacity: 0.7"
                        >Ingrese un resumen del metraje con el que cuenta el
                        Proyecto, por ejemplo "Desde 52 a 137m2".</small
                      >
                    </Input>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="brochure"
                        >Brochure:</label
                      >
                      <div class="row">
                        <div
                          class="col-lg-2 mb-3 mb-lg-0 d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <div class="text-center mb-3 text-info">
                              <!--<jam-file-f height="32px" class="current-color" width="32px"></jam-file-f>-->
                              <PdfIcon />
                            </div>
                            <a
                              :href="filesUrl + '/projects/' + element.brochure"
                              class="btn btn-inverse-info btn-sm d-inline"
                              target="_blank"
                              >Ver Brochure</a
                            >
                          </div>
                        </div>
                        <div class="col-lg-10">
                          <vue-dropzone
                            ref="ref_brochure"
                            @vdropzone-file-added="
                              $validatePDFDropzone(
                                $event,
                                $refs.ref_brochure.dropzone,
                                1,
                                35840000,
                                '35mb'
                              )
                            "
                            id="brochure"
                            class="text-center"
                            :options="dropzoneOptionsBrochure"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.brochure"
                            class="text-danger text-sm d-block mt-2"
                            for="brochure"
                            >{{ errors.brochure[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <Advisors
                      :selectedParent="element.advisors"
                      :errors="errors"
                      :selected.sync="element.advisors"
                      :images-url="imagesUrl"
                      :route-create="routeAdvisorsCreate"
                      :route-get-all="routeAdvisorsGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold"
                        >Formulario Cita Online:</label
                      >
                      <p>
                        Seleccione si el Proyecto cuanto con formulario de Cita
                        Online
                      </p>
                      <b-form-radio-group
                        v-model="element.form_videocall"
                        :options="elementsQuotation"
                        text-field="text"
                        value-field="value"
                        size="lg"
                        name="radiosQuotation"
                        plain
                        stacked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>SEO</h2>
            <p>Indica los datos del SEO</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 mb-4">
                    <label for="id_imagen" class="font-weight-bold mb-0"
                      >Imagen</label
                    >
                    <small class="text-muted d-block mb-0 lh-1"
                      >Resolución recomendada: 1200x900px</small
                    >
                    <small class="text-muted d-block mb-2 lh-1"
                      >Tamaño recomendado: Menor a 100kb</small
                    >
                    <div class="row">
                      <div
                        class="col-lg-4 mb-3 mb-lg-0"
                        v-if="element.seo_image"
                      >
                        <img
                          class="img-fluid"
                          :src="imagesUrl + '/projects/' + element.seo_image"
                          alt
                        />
                      </div>
                      <div
                        class=""
                        :class="element.seo_image ? 'col-lg-8' : 'col-12'"
                      >
                        <vue-dropzone
                          ref="ref_image_seo"
                          @vdropzone-file-added="
                            $validateImageDropzone(
                              $event,
                              $refs.ref_image_seo.dropzone,
                              1,
                              100000,
                              '100kb'
                            )
                          "
                          id="id_imagen"
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
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <Input
                      label="Título SEO"
                      variable="seo_title"
                      :errors="errors"
                      :valueEn.sync="element.seo_title_en"
                      :valueEs.sync="element.seo_title_es"
                      :valueEnParent="element.seo_title_en"
                      :valueEsParent="element.seo_title_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Textarea
                      label="Descripción SEO"
                      variable="seo_description"
                      :errors="errors"
                      :valueEn.sync="element.seo_description_en"
                      :valueEs.sync="element.seo_description_es"
                      :valueEnParent="element.seo_description_en"
                      :valueEsParent="element.seo_description_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Textarea
                      label="Keywords SEO"
                      variable="seo_keywords"
                      :errors="errors"
                      :valueEn.sync="element.seo_keywords_en"
                      :valueEs.sync="element.seo_keywords_es"
                      :valueEnParent="element.seo_keywords_en"
                      :valueEsParent="element.seo_keywords_es"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Pasarela</h2>
            <p>
              Indica los datos que se utilizan para
              <b>Separar un Inmueble</b>.
            </p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 mb-4 mb-lg-0">
                    <div class="form-group">
                      <p class="mb-0">
                        El código SAP será utilizado para realizar la conexión
                        con SAP y obtener los inmuebles y su disponibilidad del
                        Proyecto.
                      </p>
                      <label class="font-weight-bold" for="sap_code"
                        >Código SAP</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.sap_code"
                        id="sap_code"
                      />
                      <label
                        v-if="errors && errors.sap_code"
                        class="mt-2 text-danger text-sm"
                        for="sap_code"
                        >{{ errors.sap_code[0] }}</label
                      >
                    </div>

                    <div class="form-group">
                      <p class="mb-0">
                        Este será el monto que cuesta separar un inmueble en el Proyecto. Aseguresé que las credenciales de la Tienda sean iguales al tipo de moneda ingresado aquí.
                      </p>
                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <div class="form-group">
                            <label class="font-weight-bold" for="master_currency_id">Tipo Moneda</label>
                            <select class="form-control form-control-lg" v-model="element.master_currency_id" id="master_currency_id">
                              <!--<option value="">Seleccionar un Tipo de Moneda</option>-->
                              <option :value="el.id" v-for="el in currencies" :key="el.name">
                                {{ el.name }} 
                              </option>
                            </select>
                            <label
                              v-if="errors && errors.master_currency_id"
                              class="mt-2 text-danger text-sm"
                              for="master_currency_id"
                              >{{ errors.master_currency_id[0] }}</label
                            >
                          </div>
                        </div>

                          <div class="col-12 col-lg-6">
                            <label class="font-weight-bold" for="price_separation"
                            >Precio de Separación de Inmueble</label
                          >
                          <money
                            class="form-control form-control-lg"
                            v-model="element.price_separation"
                            v-bind="element.master_currency_id == 1 ? moneyLocal : moneyForeign"
                          ></money>
                          <label
                            v-if="errors && errors.price_separation"
                            class="mt-2 text-danger text-sm"
                            for="price_separation"
                            >{{ errors.price_separation[0] }}</label
                          >
                          </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 mb-2">
                    <div class="form-group">
                      <label class="font-weight-bold" 
                        >El proyecto se vende en combo?</label
                      >
                      <div class="ml-2">
                        <b-form-checkbox
                        size="lg"
                        v-model="element.reservation_in_package"
                        name="check-button"
                        switch
                      >
                      {{ element.reservation_in_package ? 'Sí' : 'No'  }}
                      </b-form-checkbox>
                      </div>
                      
                    </div>
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="package_description"
                        >Descripción del combo</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="element.package_description"
                        :options="editorOptions"
                        class="ql-height-5"
                        ref="ref_package_description"
                      ></quill-Editor>
                      <label
                        v-if="errors && errors.package_description"
                        class="mt-2 text-danger text-sm"
                        for="package_description"
                        >{{ errors.package_description[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12">
                    <p class="mb-0">Estos campos se actualizaran automaticamente cuando se obtenga la Disponibilidad de los Inmuebles del Proyecto</p>
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold"
                        >El proyecto cuenta con estacionamientos?</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.has_parking !== null ? element.has_parking ? 'Sí' : 'No' : ''"
                        id="has_parking"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold"
                        >El proyecto cuenta con depósito?</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.has_warehouse !== null ? element.has_warehouse ? 'Sí' : 'No' : ''"
                        id="has_warehouse"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="col-12 col-lg-4 ">
                    <div class="form-group">
                      <label class="font-weight-bold" for="stock_parking"
                        >Stock Estacionamiento</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.stock_parking !== null && element.stock_parking !== '' ? element.stock_parking : ''"
                        id="stock_parking"
                        disabled
                      />
                      <label
                        v-if="errors && errors.stock_parking"
                        class="mt-2 text-danger text-sm"
                        for="stock_parking"
                        >{{ errors.stock_parking[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12 col-lg-4 ">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_parking_sap"
                        >Precio Estacionamiento Soles</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.price_parking_sap ? element.price_parking_format : ''"
                        id="price_parking_sap"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="col-12 col-lg-4 ">
                    <div class="form-group">
                      <label
                        class="font-weight-bold"
                        for="price_parking_foreign_sap"
                        >Precio Estacionamiento Dólares </label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.price_parking_foreign_sap ? element.price_parking_foreign_format : ''"
                        id="price_parking_foreign_sap"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="col-12 col-lg-4 ">
                    <div class="form-group">
                      <label class="font-weight-bold" for="stock_parking"
                        >Stock Depósito</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.stock_warehouse !== null && element.stock_warehouse !== '' ? element.stock_warehouse : ''"
                        id="stock_warehouse"
                        disabled
                      />
                      <label
                        v-if="errors && errors.stock_warehouse"
                        class="mt-2 text-danger text-sm"
                        for="stock_warehouse"
                        >{{ errors.stock_warehouse[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12 col-lg-4 ">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_warehouse_sap"
                        >Precio Depósito Soles</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.price_warehouse_sap ? element.price_warehouse_sap_format : ''"
                        id="price_warehouse_sap"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="col-12 col-lg-4 ">
                    <div class="form-group">
                      <label
                        class="font-weight-bold"
                        for="price_parking_foreign_sap"
                        >Precio Depósito Dólares </label
                      >
                      <input
                        type="text"
                        class="form-control"
                        :value="element.price_parking_foreign_sap ? element.price_parking_foreign_format : ''"
                        id="price_parking_foreign_sap"
                        disabled
                      />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Importes</h2>
            <p>Indica los montos generales que tendrá el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_total"
                        >Precio Soles Desde:</label
                      >
                      <money
                        class="form-control"
                        v-model="element.price_total"
                        v-bind="moneyLocal"
                      ></money>
                      <label
                        v-if="errors && errors.price_total"
                        class="text-danger text-sm d-block mt-2"
                        for="price_total"
                        >{{ errors.price_total[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_total_foreign"
                        >Precio Dólares Desde:</label
                      >
                      <money
                        class="form-control"
                        v-model="element.price_total_foreign"
                        v-bind="moneyForeign"
                      ></money>
                      <label
                        v-if="errors && errors.price_total_foreign"
                        class="text-danger text-sm d-block mt-2"
                        for="price_total_foreign"
                        >{{ errors.price_total_foreign[0] }}</label
                      >
                    </div>
                  </div>
                  <!--<div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price">Precio Reserva:</label>
                      <money
                        class="form-control form-control-lg"
                        v-model="element.price"
                        v-bind="moneyLocal"
                      ></money>
                      <label
                        v-if="errors && errors.price"
                        class="text-danger text-sm d-block mt-2"
                        for="price"
                      >{{ errors.price[0] }}</label>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Atributos</h2>
            <p>Indica los atributos con los que cuenta el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="banner"
                        >Banner:</label
                      >
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 650x700px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-2 lh-1"
                        >Tamaño recomendado: No mayor a 300KB</small
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            class="img-fluid"
                            :src="imagesUrl + '/projects/' + element.banner"
                            alt
                          />
                        </div>
                        <div class="col-lg-8">
                          <vue-dropzone
                            ref="ref_banner"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_banner.dropzone,
                                1,
                                310000,
                                '300kb'
                              )
                            "
                            id="image"
                            class="text-center"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.banner"
                            class="text-danger text-sm d-block mt-2"
                            for="banner"
                            >{{ errors.banner[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_video"
                        >URL Video Youtube (Opcional)</label
                      >
                      <div class="row">
                        <div
                          class="col-lg-4 mb-3 mb-lg-0"
                          v-if="element.url_video"
                        >
                          <iframe
                            id="player"
                            type="text/html"
                            width="100%"
                            height="360"
                            :src="
                              'https://www.youtube.com/embed/' +
                              element.id_video
                            "
                            frameborder="0"
                          ></iframe>
                        </div>
                        <div class="col-lg">
                          <input
                            type="text"
                            class="form-control"
                            v-model="element.url_video"
                            id="url_video"
                          />
                          <label
                            v-if="errors && errors.url_video"
                            class="mt-2 text-danger text-sm"
                            for="url_video"
                            >{{ errors.url_video[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <Features
                      :errors="errors"
                      :selectedParent="element.features"
                      :selected.sync="element.features"
                      :images-url="imagesUrl"
                      :route-create="routeFeaturesCreate"
                      :route-get-all="routeFeaturesGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <FinancialEntities
                      :errors="errors"
                      :selectedParent="element.financial_entities"
                      :selected.sync="element.financial_entities"
                      :images-url="imagesUrl"
                      :route-create="routeFinancialCreate"
                      :route-get-all="routeFinancialGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <Bonds
                      :errors="errors"
                      :selectedParent="element.bonds"
                      :selected.sync="element.bonds"
                      :images-url="imagesUrl"
                      :route-create="routeBondsCreate"
                      :route-get-all="routeBondsGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <Input
                      label="Speech Galeria"
                      variable="text_place"
                      :errors="errors"
                      :valueEn.sync="element.text_place_en"
                      :valueEs.sync="element.text_place_es"
                      :valueEnParent="element.text_place_en"
                      :valueEsParent="element.text_place_es"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Ubicación</h2>
            <p>Indica los datos de ubicación del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="location"
                        >Dirección Corta</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.location"
                        id="location"
                      />
                      <label
                        v-if="errors && errors.location"
                        class="mt-2 text-danger text-sm"
                        for="location"
                        >{{ errors.location[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <Editor
                      size="md"
                      label="Dirección Completa (Opcional)"
                      variable="map_indications"
                      :errors="errors"
                      :valueEn.sync="element.map_indications_en"
                      :valueEs.sync="element.map_indications_es"
                      :valueEnParent="element.map_indications_en"
                      :valueEsParent="element.map_indications_es"
                    />
                  </div>
                  <div class="col-12">
                    <Ubigeo
                      :errors="errors"
                      :route-department="routeDepartmentsGet"
                      :route-district="routeDistrictsGet"
                      :route-province="routeProvincesGet"
                      :codeUbigeoParent="element.code_ubigeo"
                      :codeDepartment.sync="element.department"
                      :codeProvince.sync="element.province"
                      :codeDistrict.sync="element.district"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Editor
                      size="md"
                      label="Sala de Ventas"
                      variable="sales_room"
                      :errors="errors"
                      :valueEn.sync="element.sales_room_en"
                      :valueEs.sync="element.sales_room_es"
                      :valueEnParent="element.sales_room_en"
                      :valueEsParent="element.sales_room_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Editor
                      size="md"
                      label="Horario de Atención"
                      variable="schedule_attention"
                      :errors="errors"
                      :valueEn.sync="element.schedule_attention_en"
                      :valueEs.sync="element.schedule_attention_es"
                      :valueEnParent="element.schedule_attention_en"
                      :valueEsParent="element.schedule_attention_es"
                    />
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_waze"
                        >URL Waze (Opcional)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.url_waze"
                        id="url_waze"
                      />
                      <label
                        v-if="errors && errors.url_waze"
                        class="mt-2 text-danger text-sm"
                        for="url_waze"
                        >{{ errors.url_waze[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_google_maps"
                        >URL Google Maps (Opcional)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.url_google_maps"
                        id="url_google_maps"
                      />
                      <label
                        v-if="errors && errors.url_google_maps"
                        class="mt-2 text-danger text-sm"
                        for="url_google_maps"
                        >{{ errors.url_google_maps[0] }}</label
                      >
                    </div>
                  </div>
                  <!--<div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="iframe_map">Iframe Mapa</label>
                      <textarea class="form-control" v-model="element.iframe_map" id="iframe_map" cols="30" rows="5"></textarea>
                      <div class="mt-2" style="opacity:.75;">
                        <a style="cursor:pointer;" @click.prevent="info = !info"><jam-info height="14px" class="current-color" width="14px"></jam-info> Más Información
                        </a>
                      </div>
                      <div class="mt-2" v-show="info">
                        <div class="mb-2">Ir a Google Maps, buscar el proyecto que desee, seleccionar "Compartir -> Insertar Mapa" y darle click a "Copiar HTML"</div>
                        <img src="/files/img/info/iframe.jpg" alt="">
                      </div>
                      <label
                        v-if="errors && errors.iframe_map"
                        class="mt-2 text-danger text-sm"
                        for="iframe_map"
                      >{{ errors.iframe_map[0] }}</label>
                    </div>
                  </div>-->
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="iframe_map"
                        >Imagen Mapa:</label
                      >
                      <small class="d-block mb-0 lh-1"
                        >Resolución recomendada: 1100x680px</small
                      >
                      <small class="d-block mb-0 lh-1">Formato: JPG</small>
                      <small class="d-block mb-2 lh-1"
                        >Tamaño recomendado: No mayor a 300KB</small
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            class="img-fluid"
                            :src="imagesUrl + '/projects/' + element.iframe_map"
                            alt
                          />
                        </div>
                        <div class="col-lg-8">
                          <vue-dropzone
                            ref="ref_map"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_map.dropzone,
                                1,
                                310000,
                                '300kb'
                              )
                            "
                            id="image"
                            class="text-center"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.iframe_map"
                            class="text-danger text-sm d-block mt-2"
                            for="iframe_map"
                            >{{ errors.iframe_map[0] }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Email Cotización</h2>
            <p>Indica la información en el email de cotización del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="mt-2 text-right" style="opacity: 0.75">
                      <a style="cursor: pointer" @click.prevent="info = !info"
                        ><jam-info
                          height="14px"
                          class="current-color"
                          width="14px"
                        ></jam-info>
                        Vista Previa Email de Cotización
                      </a>
                    </div>
                    <div class="mt-2" v-show="info">
                      <img src="/files/img/info/mail.jpg" alt="" />
                    </div>
                  </div>
                  <!--<div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="excerpt_quotation"
                        >Resumen del Proyecto</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="element.excerpt_quotation"
                        :options="editorOptions"
                        class="ql-height-5"
                        ref="ref_excerpt_quotation"
                      ></quill-Editor>
                      <label
                        v-if="errors && errors.excerpt_quotation"
                        class="mt-2 text-danger text-sm"
                        for="excerpt_quotation"
                        >{{ errors.excerpt_quotation[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_parking"
                        >Precio Estacionamiento</label
                      >
                      <textarea
                        class="form-control"
                        v-model="element.price_parking"
                        id="price_parking"
                        cols="30"
                        rows="3"
                      ></textarea>
                      <label
                        v-if="errors && errors.price_parking"
                        class="mt-2 text-danger text-sm"
                        for="price_parking"
                        >{{ errors.price_parking[0] }}</label
                      >
                    </div>
                  </div>-->
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="commentary_quotation"
                        >Condiciones de la cotización</label
                      >
                      <textarea
                        class="form-control"
                        v-model="element.commentary_quotation"
                        id="commentary_quotation"
                        cols="30"
                        rows="1"
                      ></textarea>
                      <label
                        v-if="errors && errors.commentary_quotation"
                        class="mt-2 text-danger text-sm"
                        for="commentary_quotation"
                        >{{ errors.commentary_quotation[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="condition_quotation"
                        >Comentarios de la cotización</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="element.condition_quotation"
                        :options="editorOptions"
                        class="ql-height-5"
                        ref="ref_condition_quotation"
                      ></quill-Editor>
                      <label
                        v-if="errors && errors.condition_quotation"
                        class="mt-2 text-danger text-sm"
                        for="condition_quotation"
                        >{{ errors.condition_quotation[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12">
                    <FinancingOptions
                      :errors="errors"
                      :selectedParent="element.financing_options"
                      :selected.sync="element.financing_options"
                      :images-url="imagesUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Proyectos Relacionados</h2>
            <p>
              Indica los proyectos relacionados que se mostrarán en el
              <b>Detalle del Proyecto</b>
            </p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <ProjectsRelated
                  :actualId="element.id"
                  :errors="errors"
                  :selectedParent="element.projects_related"
                  :selected.sync="element.projects_related"
                  :images-url="imagesUrl"
                  :route-get-all="routeProjectsGetAll"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Configuración Proyecto</h2>
            <p>
              Indica la configuración de notificaciones del <b>Proyecto</b> e
              integración webhook.
            </p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 mb-3">
                    <div class="form-group">
                      <label class="font-weight-bold"
                        >Notificación Email:</label
                      >
                      <p class="mb-0">
                        Deseas enviar un correo de notificación a los asesores
                        asignados al Proyecto, cada vez que se registre una
                        cotización nueva en el <b>Proyecto</b>?
                      </p>
                      <b-form-checkbox
                        class="ml-2"
                        size="lg"
                        v-model="element.send_to_email"
                        name="check-button"
                        switch
                      >
                      </b-form-checkbox>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold">Webhook:</label>
                      <div class="mb-0">
                        <p>
                          Al habilitar esta opción la información de las
                          cotizaciones registradas en el <b>Proyecto</b> serán
                          enviadas a la URL que defina. Además de los datos de
                          la cotización se enviarán los siguentes datos.
                        </p>
                        <b>Parámetros UTM</b>
                        <ul>
                          <li>UTM Source</li>
                          <li>UTM Medium</li>
                          <li>UTM Campaign</li>
                          <li>UTM Term</li>
                          <li>UTM Content</li>
                        </ul>
                      </div>
                      <b-form-checkbox
                        class="ml-2"
                        size="lg"
                        v-model="element.webhook_url_active"
                        name="check-button"
                        switch
                      >
                      </b-form-checkbox>
                    </div>
                    <div class="form-group" v-if="element.webhook_url_active">
                      <label class="font-weight-bold" for="webhook_url"
                        >URL Destino</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.webhook_url"
                        id="webhook_url"
                      />
                      <label
                        v-if="errors && errors.webhook_url"
                        class="mt-2 text-danger text-sm"
                        for="webhook_url"
                        >{{ errors.webhook_url[0] }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.vue-dropzone-dark .dz-image {
  padding: 0.5rem;
  background: black;
}
</style>
<script>
import Quill from "quill";
import PlainClipboard from "../../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../components/BreadCrumb";
import ImageForm from "../../components/form/Image";
import FinancialEntities from "../../components/form/FinancialEntities";
import FinancingOptions from "../../components/form/FinancingOptions";
import Advisors from "../../components/form/Advisors";
import Statuses from "../../components/form/Statuses";
import Features from "../../components/form/Features";
import Ubigeo from "../../components/form/Ubigeo";
import Input from "../../components/form/Input";
import Button from "../../components/Button";
import Editor from "../../components/form/Editor";
import MultipleFiles from "../../components/form/MultipleFiles";
import PdfIcon from "../../components/icons/Pdf";
import InputSlug from "../../components/form/InputSlug";
import Bonds from "../../components/form/Bonds";
import { Money } from "v-money";
import ProjectsRelated from "../../components/form/ProjectsRelated";
import Textarea from "../../components/form/Textarea";
export default {
  components: {
    BreadCrumb,
    PdfIcon,
    MultipleFiles,
    Money,
    FinancingOptions,
    Editor,
    Statuses,
    Ubigeo,
    vueDropzone: vue2Dropzone,
    ImageForm,
    Input,
    Button,
    FinancialEntities,
    Advisors,
    Features,
    InputSlug,
    Bonds,
    ProjectsRelated,
    quillEditor,
    Textarea,
  },
  props: {
    currencies: Array,
    appUrl: String,
    elementParent: Object,
    imagesUrl: String,
    filesUrl: String,
    messageOrder: String,
    routeUpdate: String,
    routeReturn: String,
    routeAdvisorsGetAll: String,
    routeFeaturesGetAll: String,
    routeFinancialGetAll: String,
    routeStatusesGetAll: String,
    routeProjectsGetAll: String,
    routeBondsGetAll: String,
    routeFinancialCreate: String,
    routeBondsCreate: String,
    routeStatusesCreate: String,
    routeFeaturesCreate: String,
    routeAdvisorsCreate: String,
    routeDepartmentsGet: String,
    routeDistrictsGet: String,
    routeProvincesGet: String,
  },
  data() {
    return {
      info: false,
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            /*handlers: {
              image: function (value) {
                document.getElementById("id_content_images").click();
              },
            },*/
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              //[{ size: [false] }],
              [{ header: [1, 2, 3, 4, 5, false] }],
              //[{ font: [false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              //['clean'],
              ["link"],
            ],
          },
        },
      },
      element: {
        card: "",
        card_hover: "",
      },
      moneyLocal: {
        thousands: ",",
        decimal: ".",
        prefix: "S/ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      elementsQuotation: [
        { text: "Sí", value: true },
        { text: "No", value: false },
      ],
      moneyForeign: {
        thousands: ",",
        decimal: ".",
        prefix: "$ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      dropzoneOptionsBrochure: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "application/pdf",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      errors: {},
    };
  },
  methods: {
    submit() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.element.id);
      /*
      if (this.element.files && this.element.files.length) {
        this.element.files.forEach((el, i) => {
          fd.append("images" + i, el);
        });
        fd.append("images_count", this.element.files.length);
      }
      */
      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }
      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }
      if (this.element.slug_en) {
        fd.append("slug_en", this.element.slug_en);
      }
      if (this.element.slug_es) {
        fd.append("slug_es", this.element.slug_es);
      }
      if (this.element.banner_en) {
        fd.append("banner_en", this.element.banner_en);
      }
      if (this.element.banner_es) {
        fd.append("banner_es", this.element.banner_es);
      }
      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      }
      if (this.$refs.ref_logo_colour.dropzone.files[0]) {
        fd.append("logo_colour", this.$refs.ref_logo_colour.dropzone.files[0]);
      }
      if (this.$refs.ref_card.dropzone.files[0]) {
        fd.append("card", this.$refs.ref_card.dropzone.files[0]);
      }
      if (this.$refs.ref_card_hover.dropzone.files[0]) {
        fd.append("card_hover", this.$refs.ref_card_hover.dropzone.files[0]);
      }
      if (this.element.project_status_id) {
        fd.append("project_status_id", this.element.project_status_id);
      }
      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }
      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
      if (this.element.location) {
        fd.append("location", this.element.location);
      }
      if (this.element.rooms_en) {
        fd.append("rooms_en", this.element.rooms_en);
      }
      if (this.element.rooms_es) {
        fd.append("rooms_es", this.element.rooms_es);
      }
      if (this.element.footage_en) {
        fd.append("footage_en", this.element.footage_en);
      }
      if (this.element.footage_es) {
        fd.append("footage_es", this.element.footage_es);
      }
      if (this.$refs.ref_brochure.dropzone.files[0]) {
        fd.append("brochure", this.$refs.ref_brochure.dropzone.files[0]);
      }
      if (this.element.text_place_en) {
        fd.append("text_place_en", this.element.text_place_en);
      }
      if (this.element.text_place_es) {
        fd.append("text_place_es", this.element.text_place_es);
      }
      if (this.element.url_google_maps) {
        fd.append("url_google_maps", this.element.url_google_maps);
      } else {
        fd.append("url_google_maps", "");
      }
      if (this.element.url_waze) {
        fd.append("url_waze", this.element.url_waze);
      } else {
        fd.append("url_waze", "");
      }
      if (this.element.map_indications_en) {
        fd.append("map_indications_en", this.element.map_indications_en);
      } else {
        fd.append("map_indications_en", "");
      }
      if (this.element.map_indications_es) {
        fd.append("map_indications_es", this.element.map_indications_es);
      } else {
        fd.append("map_indications_es", "");
      }
      if (this.element.sales_room_en) {
        fd.append("sales_room_en", this.element.sales_room_en);
      }
      if (this.element.sales_room_es) {
        fd.append("sales_room_es", this.element.sales_room_es);
      }
      if (this.element.schedule_attention_en) {
        fd.append("schedule_attention_en", this.element.schedule_attention_en);
      }
      if (this.element.schedule_attention_es) {
        fd.append("schedule_attention_es", this.element.schedule_attention_es);
      }
      if (this.element.map_indications_en) {
        fd.append("map_indications_en", this.element.map_indications_en);
      }
      if (this.element.map_indications_es) {
        fd.append("map_indications_es", this.element.map_indications_es);
      }
      if (this.element.price_total) {
        fd.append("price_total", this.element.price_total);
      } else {
        fd.append("price_total", "");
      }
      if (this.element.price_total_foreign) {
        fd.append("price_total_foreign", this.element.price_total_foreign);
      } else {
        fd.append("price_total_foreign", "");
      }
      if (this.element.price) {
        fd.append("price", this.element.price);
      }
      if (this.element.url_video) {
        fd.append("url_video", this.element.url_video);
      }
      if (this.element.district) {
        fd.append("district", this.element.district);
      }
      if (this.element.department) {
        fd.append("department", this.element.department);
      }
      if (this.element.province) {
        fd.append("province", this.element.province);
      }
      if (this.element.advisors) {
        fd.append("advisors", JSON.stringify(this.element.advisors));
      }
      if (this.element.features) {
        fd.append("features", JSON.stringify(this.element.features));
      }
      if (this.$refs.ref_banner.dropzone.files[0]) {
        fd.append("banner", this.$refs.ref_banner.dropzone.files[0]);
      }
      if (this.$refs.ref_map.dropzone.files[0]) {
        fd.append("iframe_map", this.$refs.ref_map.dropzone.files[0]);
      }
      /*if (this.element.iframe_map) {
        fd.append("iframe_map", this.element.iframe_map);
      }*/
      if (this.element.sap_code) {
        fd.append("sap_code", this.element.sap_code);
      }
      if (this.element.price_separation) {
        fd.append("price_separation", this.element.price_separation);
      }
      if (this.element.master_currency_id) {
        fd.append("master_currency_id", this.element.master_currency_id);
      }
      if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
      }
      if (this.element.financial_entities) {
        fd.append(
          "financial_entities",
          JSON.stringify(this.element.financial_entities)
        );
      }
      if (this.element.bonds) {
        fd.append("bonds", JSON.stringify(this.element.bonds));
      }
      if (this.element.financing_options) {
        fd.append(
          "financing_options",
          JSON.stringify(this.element.financing_options)
        );
      }
      if (this.element.projects_related.length) {
        fd.append(
          "projects_related",
          JSON.stringify(this.element.projects_related)
        );
      }
      if (this.element.price_parking) {
        fd.append("price_parking", this.element.price_parking);
      }
      if (this.element.form_videocall == true) {
        fd.append("form_videocall", 1);
      } else {
        fd.append("form_videocall", 0);
      }
      if (this.element.excerpt_quotation) {
        fd.append("excerpt_quotation", this.element.excerpt_quotation);
      } else {
        fd.append("excerpt_quotation", "");
      }
      if (this.element.commentary_quotation) {
        fd.append("commentary_quotation", this.element.commentary_quotation);
      } else {
        fd.append("commentary_quotation", "");
      }
      if (this.element.condition_quotation) {
        fd.append("condition_quotation", this.element.condition_quotation);
      } else {
        fd.append("condition_quotation", "");
      }
      if (this.element.seo_keywords_es) {
        fd.append("seo_keywords_es", this.element.seo_keywords_es);
      }
      if (this.element.seo_keywords_en) {
        fd.append("seo_keywords_en", this.element.seo_keywords_en);
      }
      if (this.element.seo_description_es) {
        fd.append("seo_description_es", this.element.seo_description_es);
      }
      if (this.element.seo_description_en) {
        fd.append("seo_description_en", this.element.seo_description_en);
      }
      if (this.element.seo_title_en) {
        fd.append("seo_title_en", this.element.seo_title_en);
      }
      if (this.element.seo_title_es) {
        fd.append("seo_title_es", this.element.seo_title_es);
      }
      if (this.$refs.ref_image_seo.dropzone.files[0]) {
        fd.append("seo_image", this.$refs.ref_image_seo.dropzone.files[0]);
      }
      if (this.element.send_to_email == true) {
        fd.append("send_to_email", 1);
      } else {
        fd.append("send_to_email", 0);
      }
      if (this.element.webhook_url_active == true) {
        fd.append("webhook_url_active", 1);
      } else {
        fd.append("webhook_url_active", 0);
      }
      if (this.element.webhook_url) {
        fd.append("webhook_url", this.element.webhook_url);
      }
       if (this.element.reservation_in_package == true) {
        fd.append("reservation_in_package", 1);
      } else {
        fd.append("reservation_in_package", 0);
      }
      if (this.element.package_description) {
        fd.append("package_description", this.element.package_description);
      }
      fd.append("_method", "put");
      axios
        .post(this.routeUpdate + "/" + this.element.id, fd)
        .then((response) => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        //this.element = Object.assign({}, newValue);
        this.element = newValue;
      },
    },
  },
  created() {
    this.element.card = this.element.images_format[0];
    this.element.card_hover = this.element.images_format[1];
  },
};
</script>