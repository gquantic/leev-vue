<template>
  <section class="home-section">
    <div class="translate">
      <header class="header-transparent d-none d-lg-block" style="background: transparent">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="top-menu d-flex justify-content-start align-items-center w-100">
                <div class="HeaderLogo_logo__A2cu8"><a class="logo__link" href="/"></a></div>
                <div class="d-flex align-items-center justify-content-between h-100 w-100">
                  <div class="links h-100 d-flex">
                    <RouterLink class="links__item text-white" to="/apartments"
                      >Apartments</RouterLink
                    >
                    <RouterLink class="links__item text-white" to="/about"> About Us </RouterLink>
                    <RouterLink class="links__item text-white" to="/services">
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
                              class="btn btn-outline-white"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-register"
                              style="border-color: rgb(255, 255, 255); color: rgb(255, 255, 255)"
                              >Sign up</a
                            >
                            <a
                              href="#"
                              class="actions__link"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-login"
                              style="color: rgb(255, 255, 255)"
                              >Log in</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="Language_select__Oa54h selectLanguage color-orange css-b62m3t-container"
                    >
                      <span
                        id="react-select-3-live-region"
                        class="css-1f43avz-a11yText-A11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        role="log"
                        class="css-1f43avz-a11yText-A11yText"
                      ></span>
                      <div class="css-13cymwt-control">
                        <div class="css-1fdsijx-ValueContainer">
                          <div class="css-1dimb5e-singleValue">En</div>
                          <div class="css-qbdosj-Input" data-value="">
                            <input
                              class=""
                              autocapitalize="none"
                              autocomplete="off"
                              autocorrect="off"
                              id="react-select-3-input"
                              spellcheck="false"
                              tabindex="0"
                              aria-autocomplete="list"
                              aria-expanded="false"
                              aria-haspopup="true"
                              role="combobox"
                              type="text"
                              value=""
                              style="
                                color: inherit;
                                background: 0px center;
                                opacity: 1;
                                width: 100%;
                                grid-area: 1 / 2;
                                font: inherit;
                                min-width: 2px;
                                border: 0px;
                                margin: 0px;
                                outline: 0px;
                                padding: 0px;
                              "
                            />
                          </div>
                        </div>
                        <div class="css-1hb7zxy-IndicatorsContainer">
                          <span class="css-1u9des2-indicatorSeparator"></span>
                          <div class="css-1xc3v61-indicatorContainer" aria-hidden="true">
                            <svg
                              height="20"
                              width="20"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              class="css-tj5bde-Svg"
                            >
                              <path
                                d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="home-section__introduction">
            <h2 class="title animate__animated animate__backInUp">
              Find spaces at Leev.
              <span class="title title-light">Come stay with us and feel at home.</span>
            </h2>
          </div>
          <div
            class="home-section__bottom d-lg-flex align-items-center justify-content-between animate__animated animate__fadeInTopRight"
          >
            <form class="form-filter" action="#">
              <div class="filter-line">
                <div class="filter-item">
                  <p class="name m-0">Arrival and departure</p>
                  <div class="react-datepicker-wrapper">
                    <div class="react-datepicker__input-container">
                      <input placeholder="Dates" class="w-100" type="text" value="" />
                    </div>
                  </div>
                </div>
                <div class="border-vertical"></div>
                <div>
                  <div class="search-item-persons position-relative">
                    <div class="filter-item search-item-persons">
                      <p class="name m-0">Guests</p>
                      <div id="all-persons">Adt: 1, Chd: 0, Bb: 0</div>
                    </div>
                  </div>
                </div>
                <button class="search-button" type="submit">
                  <span class="text d-none d-lg-block">Search</span
                  ><i class="icon icon-search d-block d-lg-none"></i>
                </button>
              </div>
            </form>
            <p class="m-0 text">or search flat by <a class="text-link" href="#">mood</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import HeaderMobile from '@/components/Header/HeaderMobile.vue'
</script>
