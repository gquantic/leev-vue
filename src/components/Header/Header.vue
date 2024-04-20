<template>
  <main>
    <header :class="classes + ' header d-none d-lg-block '">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="top-menu d-flex justify-content-start align-items-center w-100">
              <div class="HeaderLogo_logo__A2cu8"><a class="logo__link" href="/"></a></div>
              <div class="d-flex align-items-center justify-content-between h-100 w-100">
                <div class="HeaderLinks_links__Lzn_3 d-flex h-100">
                  <RouterLink class="HeaderLinks_links__item__8SoCr" to="/apartments"
                    >Apartments</RouterLink
                  >
                  <RouterLink class="HeaderLinks_links__item__8SoCr" to="/about">
                    About Us
                  </RouterLink>
                  <RouterLink class="HeaderLinks_links__item__8SoCr" to="/services">
                    Services
                  </RouterLink>
                </div>
                <div class="actions d-flex flex-row-reverse align-items-center">
                  <div class="actions d-flex flex-row-reverse align-items-center">
                    <div>
                      <div class="translate">
                        <div class="d-flex align-items-center gap-5">
                          <a
                            href="#"
                            class="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-register"
                          >
                            Sign up
                          </a>
                          <a
                            href="#"
                            class="actions__link"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-login"
                            style="color: rgb(22, 22, 22)"
                          >
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Vue Multiselect with en and rus options -->
<!--                  <SelectLanguage />-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="header-mobile d-lg-none">
      <div class="top-line d-flex align-items-center justify-content-between">
        <div class="HeaderLogo_logo__A2cu8"><a class="logo__link" href="/"></a></div>
        <div class="d-flex align-items-center gap-2">
          <div class="authorized-user">
            <div class="actions d-flex flex-row-reverse align-items-center">
              <div>
                <div class="translate">
                  <div class="d-flex align-items-center gap-5">
                    <a
                      href="#"
                      class="btn btn-outline-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-register"
                    >
                      Sign up
                    </a>
                    <a
                      href="#"
                      class="actions__link"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-login"
                      style="color: rgb(22, 22, 22)"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="burger-container">
            <div id="burger">
              <div class="bar topBar"></div>
              <div class="bar btmBar"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <ul class="menu">
          <li class="menu-item"><a href="/apartments">Apartments</a></li>
          <li class="menu-item"><a href="/about">About Us</a></li>
          <li class="menu-item"><a href="/services">Services</a></li>
          <li class="menu-item">
            <a class="lh-140" href="#">
              <img
                alt="logo WhatsApp"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                class="menu-img"
                srcset=""
                :src="whatsappLogo"
                style="color: transparent"
              />
              WhatsApp
            </a>
          </li>
          <li class="menu-item mt-2">
            <!-- Multi select -->
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import whatsappLogo from '/public/img/logo/whatsapp.webp'

defineProps({
  classes: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
