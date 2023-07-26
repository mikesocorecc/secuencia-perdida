<template>
  <div class="overflow-hidden bg-[#2B4457] h-screen flex flex-col justify-between">
    <div class="px-10 py-10 grid grid-cols-1 gap-y-5 sm:grid-cols-4 content-center font-mali">
      <div class="my-auto bg-[#000000] rounded-full w-full sm:w-32 lg:w-52 h-4 lg:h-7 relative">
        <img
          src="../assets/start.svg"
          alt="start.svg"
          class="absolute h-10 lg:h-16 z-20 top-1/2 -left-5 transform -translate-y-1/2"
        />
        <span class="bg-[#52E1C9] w-3/4 h-full absolute rounded-full"></span>
      </div>
      <div class="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
        <div
          class="my-auto bg-[#000000] rounded-full w-full lg:w-52 h-6 lg:h-7 relative text-center"
        >
          <img
            src="../assets/coin.svg"
            alt="coin.svg"
            class="absolute h-10 lg:h-16 z-20 top-1/2 -left-5 transform -translate-y-1/2"
          />
          <span class="absolute h-full text-white font-black text-center text-base lg:text-xl"
            >100</span
          >
          <img
            src="../assets/plus.svg"
            alt="plus.svg"
            class="cursor-pointer hover:scale-105 ease-in-out duration-700 absolute h-5 lg:h-10 z-20 top-1/2 -right-0 transform -translate-y-1/2"
          />
        </div>
        <div class="my-auto bg-[#000000] rounded-full lg:w-52 h-6 lg:h-7 relative text-center">
          <img
            src="../assets/diamond.svg"
            alt="coin.svg"
            class="absolute h-10 lg:h-16 z-20 top-1/2 -left-5 transform -translate-y-1/2"
          />
          <span class="absolute h-full text-white font-black text-center text-base lg:text-xl"
            >100</span
          >
          <img
            src="../assets/plus.svg"
            alt="plus.svg"
            class="cursor-pointer hover:scale-105 ease-in-out duration-700 absolute h-5 lg:h-10 z-20 top-1/2 -right-0 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div class="mx-auto sm:ml-auto">
        <button
          class="hover:scale-105 ease-in-out duration-700 bg-[#52E1C9] px-5 lg:px-8 py-2 lg:py-3 text-white font-bold text-5xl rounded-2xl border-4 border-[#42baa6] flex items-center justify-center space-x-4"
        >
          <img src="../assets/setting.svg" alt="setting.svg" class="h-5 w-5 lg:h-7 lg:w-7" />
        </button>
      </div>
    </div>
    <div class="">
      <!-- <h1 class="uppercase text-white text-4xl lg:text-7xl font-black text-center font-mali">
        Secuencia Perdida
      </h1> -->
      <TitleComponent />
    </div>
    <div
      class="px-2 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 font-mali"
    >
      <button
        class="hover:scale-105 ease-in-out duration-700 bg-[#52E1C9] px-5 lg:px-8 py-2 lg:py-3 text-white font-bold text-xl lg:text-5xl rounded-2xl border-4 border-[#42baa6] flex items-center justify-center space-x-4"
      >
        <img src="../assets/store.svg" alt="store.svg" class="h-5 lg:h-10 w-5 lg:w-10" />
        <span class="">Tienda</span>
      </button>
      <button
        class="hover:scale-105 ease-in-out duration-700 bg-[#52E1C9] px-5 lg:px-8 py-2 lg:py-3 text-white font-bold text-xl lg:text-5xl rounded-2xl border-4 border-[#42baa6] flex items-center justify-center space-x-4"
      >
        <img src="../assets/carts.svg" alt="store.svg" class="h-5 lg:h-10 w-5 lg:w-10" />
        <span class="">Héroes</span>
      </button>
      <RouterLink
        class="hover:scale-105 ease-in-out duration-700 order-first lg:order-none text-center bg-[#FF8001] px-5 lg:px-8 py-2.5 lg:py-3 text-white font-bold text-xl lg:text-5xl rounded-2xl border-4 border-[#c16408]"
        to="/game"
        >Iniciar</RouterLink
      >

      <button
        class="hover:scale-105 ease-in-out duration-700 bg-[#52E1C9] px-5 lg:px-8 py-2 lg:py-3 text-white font-bold text-xl lg:text-5xl rounded-2xl border-4 border-[#42baa6] flex items-center justify-center space-x-4"
      >
        <img src="../assets/game.svg" alt="store.svg" class="h-5 lg:h-10 w-5 lg:w-10" />
        <span class="">Amigos</span>
      </button>
      <button
        class="hover:scale-105 ease-in-out duration-700 bg-[#52E1C9] px-5 lg:px-8 py-2 lg:py-3 text-white font-bold text-xl lg:text-5xl rounded-2xl border-4 border-[#42baa6] flex items-center justify-center space-x-4"
      >
        <img src="../assets/clubs.svg" alt="store.svg" class="h-5 lg:h-10 w-5 lg:w-10" />
        <span class="">Clubs</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import TitleComponent from '../components/TitleComponent.vue'
import { RouterLink } from 'vue-router'
</script>
