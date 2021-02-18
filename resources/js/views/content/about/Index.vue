<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Sobre Lider" parent="Contenido" active="Sobre Lider"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <First :message-order="messageOrder"
      :images-url="imagesUrl"
      :route-get-text="firstBlockTextRouteGet"
      :route-update-text="firstBlockTextRouteUpdate"/>
      <Second :route-get="compromiseRouteGet" :route-update="compromiseRouteUpdate"/>
      <Third :route-order="projectFinishedRouteOrder"
      :route="projectFinishedRoute" 
      :message-order="messageOrder"
      :images-url="imagesUrl"
      :route-get-all="projectFinishedRouteGetAll"
      :route-get-text="projectFinishedTextRouteGet"
      :route-update-text="projectFinishedTextRouteUpdate"/>
      <Fourth :route-order="warrantyElementsRouteOrder"
      :route="warrantyElementsRoute" 
      :message-order="messageOrder"
      :images-url="imagesUrl"
      :route-get-all="warrantyElementsRouteGetAll"
      :route-get-text="warrantyTextRouteGet"
      :route-update-text="warrantyTextRouteUpdate"/>
      <Fifth :route-order="customerSupportRouteOrder"
      :route="customerSupportRoute" 
      :message-order="messageOrder"
      :images-url="imagesUrl"
      :route-get-all="customerSupportRouteGetAll"
      :route-get-text="customerSupportTextRouteGet"
      :route-update-text="customerSupportTextRouteUpdate"/>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
export default {
  props: {
    projectFinishedRoute: String,
    projectFinishedRouteGetAll: String,
    projectFinishedRouteOrder: String,
    customerSupportRoute: String,
    customerSupportRouteGetAll: String,
    customerSupportRouteOrder: String,
    warrantyElementsRoute: String,
    warrantyElementsRouteGetAll: String,
    warrantyElementsRouteOrder: String,
    warrantyTextRouteGet: String,
    warrantyTextRouteUpdate: String,
    compromiseRouteGet: String,
    compromiseRouteUpdate: String,
    customerSupportTextRouteGet: String,
    customerSupportTextRouteUpdate: String,
    projectFinishedTextRouteGet: String,
    projectFinishedTextRouteUpdate: String,
    firstBlockTextRouteGet: String,
    firstBlockTextRouteUpdate: String,
    messageOrder: String,
    imagesUrl: String,
  },
  components:{
    BreadCrumb,
    First,
    Second,
    Third,
    Fourth,
    Fifth,
  }
}
</script>