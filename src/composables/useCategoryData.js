import { defineAsyncComponent } from 'vue'

export function useCategoryData() {
  function categoryData() {
    return [
      {
        name: 'Phones',
        id: '1',
        smallIcon: defineAsyncComponent(
          () => import('@/components/icons/categoryMenu/iconPhones.vue')
        ),
        icon: defineAsyncComponent(() => import('@/components/icons/categoryOffer/iconPhones.vue')),
        subCategories: [
          {
            id: '11',
            name: 'Smartphones'
          },
          {
            id: '12',
            name: 'Feature Phones'
          },
          {
            id: '13',
            name: 'Gaming Phones'
          },
          {
            id: '14',
            name: 'Foldable Phones'
          },
          {
            id: '15',
            name: '5G Phones'
          },
          {
            id: '16',
            name: 'Refurbished Phones'
          }
        ]
      },
      {
        name: 'Computers',
        id: '2',
        smallIcon: defineAsyncComponent(
          () => import('@/components/icons/categoryMenu/iconComputers.vue')
        ),
        icon: defineAsyncComponent(
          () => import('@/components/icons/categoryOffer/iconComputers.vue')
        )
      },
      {
        name: 'Smart Watches',
        id: '3',
        smallIcon: defineAsyncComponent(
          () => import('@/components/icons/categoryMenu/iconWatches.vue')
        ),
        icon: defineAsyncComponent(
          () => import('@/components/icons/categoryOffer/iconWatches.vue')
        ),
        uniqueDropdown: true,
        featuredProducts: [
          {
            id: 5,
            title: 'Samsung Galaxy Watch6 Classic 47mm Black',
            price: 369,
            discountedPrice: 200,
            image: 'samsung_galaxy_watch_6_classic_640x640.webp',
            imageThumb: 'samsung_galaxy_watch_6_classic_160x160.webp'
          },
          {
            id: 3,
            title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
            price: 399,
            discountedPrice: 250,
            image: 'apple_watch_series_9_640x640.webp',
            imageThumb: 'apple_watch_series_9_160x160.webp'
          }
        ],
        byBrands: [
          {
            id: '41',
            name: 'Samsung'
          },
          {
            id: '42',
            name: 'Huawei'
          },
          {
            id: '43',
            name: 'Amazonfit'
          },
          {
            id: '44',
            name: 'Garmin'
          }
        ],
        subCategories: [
          {
            id: '31',
            name: 'Fitness Trackers'
          },
          {
            id: '32',
            name: "Kids' Smart Watches"
          },
          {
            id: '33',
            name: 'Luxury Smart Watches'
          },
          {
            id: '34',
            name: 'Sports Smart Watches'
          },
          {
            id: '35',
            name: 'Hybrid Watches'
          },
          {
            id: '36',
            name: 'Standalone Watches (with SIM support)'
          }
        ]
      },
      {
        name: 'Cameras',
        id: '4',
        smallIcon: defineAsyncComponent(
          () => import('@/components/icons/categoryMenu/iconCameras.vue')
        ),
        icon: defineAsyncComponent(() => import('@/components/icons/categoryOffer/iconCameras.vue'))
      },
      {
        name: 'Headphones',
        id: '5',
        smallIcon: defineAsyncComponent(
          () => import('@/components/icons/categoryMenu/iconHeadphones.vue')
        ),
        icon: defineAsyncComponent(
          () => import('@/components/icons/categoryOffer/iconHeadphones.vue')
        )
      },
      {
        name: 'Gaming',
        id: '6',
        smallIcon: defineAsyncComponent(
          () => import('@/components/icons/categoryMenu/iconGaming.vue')
        ),
        icon: defineAsyncComponent(() => import('@/components/icons/categoryOffer/iconGaming.vue'))
      }
    ]
  }

  return {
    categoryData
  }
}
