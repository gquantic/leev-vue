<template>
  <div class="checkout-progress">
    <div class="checkout-progress-component__horizontal-element">
      <div class="checkout-progress-component__line">
        <div class="checkout-progress_desc-element">
          <div class="checkout-progress-component__circle finished">
            <div class="checkout-progress-component__inner-circle finished"></div>
          </div>
          <div class="checkout-progress_desc">Room selection</div>
        </div>
        <div class="checkout-progress_desc-element">
          <div class="checkout-progress-component__circle active">
            <div class="checkout-progress-component__inner-circle active"></div>
          </div>
          <div class="checkout-progress_desc">Filling information</div>
        </div>
        <div class="checkout-progress_desc-element">
          <div class="checkout-progress-component__circle">
            <div class="checkout-progress-component__inner-circle"></div>
          </div>
          <div class="checkout-progress_desc">Payment</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.checkout-progress {
  width: 661px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .checkout-progress_desc-element {
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;

    .checkout-progress_desc {
      position: absolute;
      flex-wrap: nowrap;
      width: fit-content;
      text-align: center; /* Центрируем текст */
      white-space: nowrap; /* Предотвращаем перенос текста */
      margin-top: 35px;
      font-weight: 100;
      font-family: "GT Walsheim Pro", sans-serif;
    }
  }

  .bottom-line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
}

.checkout-progress-component__horizontal-element {
  width: 100%; /* Ширина контейнера */
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Высота элемента */
}

.checkout-progress-component__line {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1px; /* Толщина полоски */
  background-color: #F69660; /* Оранжевая полоска */
  padding: 0; /* Отступы справа и слева */
  position: relative;
}

.checkout-progress-component__circle {
  width: 24px; /* Диаметр внешних кружков */
  height: 24px;
  border-radius: 50%;
  background-color: white; /* Цвет внешних кружков */
  border: 1px solid rgba(#000,10%); /* Оранжевая граница */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  &.finished {
    border: #fff;
    box-shadow: 0px 0px 32px rgba(#000, 16%);
  }

  &.active {
    background-color: white; /* Цвет внешних кружков */
    border: 1px solid #F69660;
  }
}

.checkout-progress-component__inner-circle {
  width: 8px; /* Диаметр внутренних кружков */
  height: 8px;
  border-radius: 50%;
  background-color: rgba(#000, 10%);

  &.active, &.finished {
    border-radius: 50%;
    background-color: #F69660;
  }
}

.checkout-progress-component__line::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%; /* Ширина правой белой полоски */
  height: 1px;
  background-color: #D9D9D9; /* Цвет правой белой полоски */
}

</style>
<script setup lang="ts">
</script>