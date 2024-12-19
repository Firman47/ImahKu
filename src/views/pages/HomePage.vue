<template>
  <section id="home" class="py-12 space-y-12 w-full">
    <div class="flex flex-col sm:flex-row items-center gap-10 sm:gap-[100px] px-responsive">
      <h1 class="text-7xl font-bold w-full sm:w-1/2">Find Your Dream Home</h1>
      <div class="w-full sm:w-1/2 space-y-5">
        <p class="text-lg text-gray-500 font-normal">
          Discover the charm of an exclusive family home nestled in the serene hills of Sumedang,
          where the air is fresh, the atmosphere is tranquil, and the cool breeze invites
          relaxation.
        </p>
        <UiButton>Discover More</UiButton>
      </div>
    </div>

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :breakpoints="{
        640: {
          slidesPerView: 1.2,
        },
      }"
      :space-between="-20"
      :pagination="paginationOptions"
      class="my-swiper"
      :centeredSlides="true"
      :loop="true"
    >
      <swiper-slide>
        <img
          src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 4"
          class="w-full h-full object-cover rounded-2xl"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 2"
          class="w-full h-full object-cover rounded-2xl"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D3"
          alt="Slide 3"
          class="w-full h-full object-cover rounded-2xl"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide 1"
          class="w-full h-full object-cover"
        />
      </swiper-slide>
    </swiper>

    <div class="bg-gray-50 overflow-hidden">
      <div class="brand-swiper w-full flex justify-center items-center py-12 gap-12 relative">
        <a v-for="(customer, index) in customers" :key="index" :href="customer.url" class="block">
          <img :src="customer.image" :alt="customer.alt" class="min-w-32 object-cover" />
        </a>
        <a v-for="(customer, index) in customers" :key="index" :href="customer.url" class="block">
          <img :src="customer.image" :alt="customer.alt" class="min-w-32 object-cover" />
        </a>
      </div>
    </div>

    <div class="px-responsive flex flex-col items-center w-full gap-10 py-36">
      <div
        class="flex items-start sm:items-center gap-4 justify-between w-full flex-col sm:flex-row"
      >
        <div class="space-y-2">
          <h1 class="text-6xl font-extrabold">Latest Property Listings</h1>
          <p>Uncover the home of your dreams, where every detail is crafted just for you.</p>
        </div>
        <UiButton class="text-nowrap w-full sm:w-fit">View All</UiButton>
      </div>

      <div class="border-b w-full flex gap-8">
        <label
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer p-1 transition duration-300 text-lg font-bold text-gray-600"
          :class="{
            'text-primary-dark border-b-2 border-primary-main': selectedTab === index,
          }"
        >
          <input
            type="radio"
            name="tabs"
            class="hidden"
            :id="`tab-${index}`"
            :checked="selectedTab === index"
            @click="selectedTab = index"
          />
          <span>{{ tab.label }}</span>
        </label>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-8">
        <PropertyCard
          class="w-full sm:max-w-[310px]"
          v-for="(item, index) in property"
          :key="index"
          :img="item.img"
          :price="item.price"
          :title="item.title"
          :description="item.description"
          :bad="item.bad"
          :tub="item.tub"
          :ruler="item.ruler"
        />
      </div>
    </div>

    <div
      class="w-full bg-gray-50 flex flex-col justify-center items-center py-20 gap-8 text-center"
    >
      <div class="space-y-2">
        <h1 class="text-4xl font-extrabold">Find your new living</h1>
        <p class="text-gray-500 text-base font-normal">
          ImahKu will give you help hand with search for a new living
        </p>
      </div>

      <UiButton>Get a New Comfortable Home</UiButton>
    </div>

    <div class="px-responsive space-y-10 w-full py-36">
      <div class="max-w-[708px] space-y-4">
        <h1 class="text-6xl font-extrabold">Why Choose Us?</h1>
        <p class="text-gray-500 text-lg font-normal">
          We are committed to providing exceptional service and unparalleled expertise in the real
          estate market.
        </p>
      </div>

      <img
        src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="rounded-2xl w-full h-[300px] object-cover"
      />

      <div class="flex justify-center flex-wrap w-full gap-12">
        <FeatureCard
          class="w-full sm:max-w-[300px]"
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.titile"
          :description="feature.description"
        />
      </div>
    </div>

    <div class="w-full bg-gray-50 py-20 flex gap-10 flex-col">
      <div class="space-y-4 w-full px-responsive mx-auto">
        <h1 class="text-6xl font-extrabold">Why Choose Us?</h1>
        <p class="text-gray-500 text-lg font-normal">
          We are committed to providing exceptional service and unparalleled expertise in the real
          estate market.
        </p>
      </div>

      <div
        class="flex flex-col sm:flex-row gap-10 overflow-auto scrollbar-hide px-responsive sm:px-0"
      >
        <ReviewCard
          class="w-full sm:min-w-[430px]"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :img="testimonial.img"
          :alt="testimonial.alt"
          :name="testimonial.name"
          :role="testimonial.role"
          :testimonial="testimonial.testimonial"
          :date="testimonial.date"
          :star="testimonial.star"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiButton from '@/components/Ui-Button .vue'
import PropertyCard from '@/components/card/PropertyCard.vue'
import FeatureCard from '@/components/card/FeatureCard.vue'
import ReviewCard from '@/components/card/ReviewCard..vue'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const selectedTab = ref(0)

const customers = [
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+1', alt: 'brand1' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+2', alt: 'brand2' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+3', alt: 'brand3' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+4', alt: 'brand4' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+5', alt: 'brand5' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+6', alt: 'brand6' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+7', alt: 'brand7' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+7', alt: 'brand7' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+7', alt: 'brand7' },
  { url: '#', image: 'https://via.placeholder.com/150x50.png?text=Brand+7', alt: 'brand7' },
]

const tabs = [{ label: 'Houses' }, { label: 'Condos' }, { label: 'Villas' }]

const property = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL gambar placeholder
    price: '$200', // Harga properti
    title: 'Cozy Family Home', // Judul properti
    description:
      'A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.', // Deskripsi properti
    bad: '3', // Jumlah kamar tidur
    tub: '2', // Jumlah kamar mandi
    ruler: '1,500', // Luas properti
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$350',
    title: 'Modern Apartment',
    description:
      'A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.',
    bad: '2',
    tub: '2',
    ruler: '1,200',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '$120',
    title: 'Affordable Starter Home',
    description:
      'A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.',
    bad: '2',
    tub: '1',
    ruler: '900',
  },
]

const features = [
  {
    titile: 'Professional',
    description:
      'Team of professionals in the Reality and Financing sector. With our experiences you will find your future house easilly.',
  },
  {
    titile: 'Educated',
    description:
      'Behind agreements is a lot of documentation and paper work. Our team takes care to be educated in every legislative policies,',
  },
  {
    titile: 'Trusted',
    description:
      'We are trusted by over thousands users around the Europe and Asian countries. Feel free to read our customer reviews.',
  },
  {
    titile: 'Educated',
    description:
      'Behind agreements is a lot of documentation and paper work. Our team takes care to be educated in every legislative policies,',
  },
  {
    titile: 'Trusted',
    description:
      'We are trusted by over thousands users around the Europe and Asian countries. Feel free to read our customer reviews.',
  },
  {
    titile: 'Professional',
    description:
      'Team of professionals in the Reality and Financing sector. With our experiences you will find your future house easilly.',
  },
]

const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: '',
    name: 'Thomas Darnian',
    role: 'Father',
    testimonial:
      '“It was honor to cooperate with talented people from Realitioo. If we will search for a new living. I will come back!”',
    date: 'Jan 6, 2024',
    star: 5,
  },
  {
    img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: '',
    name: 'Thomas Darnian',
    role: 'Father',
    testimonial:
      '“It was honor to cooperate with talented people from Realitioo. If we will search for a new living. I will come back!”',
    date: 'Jan 6, 2024',
    star: 3,
  },
  {
    img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: '',
    name: 'Thomas Darnian',
    role: 'Father',
    testimonial:
      '“It was honor to cooperate with talented people from Realitioo. If we will search for a new living. I will come back!”',
    date: 'Jan 6, 2024',
    star: 5,
  },
  {
    img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    alt: '',
    name: 'Thomas Darnian',
    role: 'Father',
    testimonial:
      '“It was honor to cooperate with talented people from Realitioo. If we will search for a new living. I will come back!”',
    date: 'Jan 6, 2024',
    star: 5,
  },
]

import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'

const modules = [Pagination]
const paginationOptions = {
  clickable: true, // Pagination titik dapat diklik
}
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Menyembunyikan scrollbar pada WebKit */
}

.brand-swiper {
  animation: scrollBrands 12s linear infinite;
  animation-play-state: running; /* Animasi berjalan secara default */
}

/* Stop animation on hover */
.brand-swiper:hover {
  animation-play-state: paused; /* Animasi akan berhenti saat hover */
}

@keyframes scrollBrands {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.my-swiper {
  width: 100%;
  height: 510px;
  padding-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center !important;
}

.swiper-slide.swiper-slide-active {
  @apply rounded-2xl overflow-hidden;
  height: 100%;
}

.swiper-slide:not(.swiper-slide-active) {
  @apply rounded-2xl overflow-hidden;
  transform: scale(0.9);
}

.swiper-pagination-bullet {
  @apply !bg-gray-100;
  width: 14px !important;
  height: 14px !important;
  border-radius: 50% !important;
  opacity: 1 !important;
  transition: 0.5s ease !important;
}

.swiper-pagination-bullet-active {
  @apply !bg-primary-main;
  width: 42px !important;
  height: 14px !important;
  opacity: 1 !important;
  border-radius: 10px !important;
  transition: 0.5s ease !important;
}
</style>
