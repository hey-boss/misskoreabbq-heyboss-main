import LayoutWithTawk from '../components/LayoutWithTawk';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';
import Header2N1 from '../components/Header2N1';
import HeroVideo from '../components/HeroVideo';
import Hero6 from '../components/Hero6';
import Menu1 from '../components/Menu1';
import HeroBackground2 from '../components/HeroBackground2';
import Intro2 from '../components/Intro2';
import Intro3 from '../components/Intro3';
import Hero15 from '../components/Hero15';
import Hero16 from '../components/Hero16';
import Footer1 from '../components/Footer1';
import MobileButton from '../components/Mobilebutton';

const IndexPage = () => {
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'Authentic Korean BBQ | miss KOREA BBQ | Cozy & Luxury Dining Experience',
        metaTag: {
          description:
            'Experience authentic Korean BBQ at miss KOREA BBQ, a heritage dining spot for over 15 years. Enjoy cozy, luxurious settings, perfect for large gatherings and intimate meals.',
          keywords:
            'Korean BBQ, authentic Korean cuisine, BBQ restaurant, cozy dining, luxury dining, 한상차림, Korean grill, Korean BBQ for groups, Korean restaurant, BBQ walk-in, Korean heritage restaurant',
          author: 'HEYBOSS https://www.heyboss.us/'
        },
        favicon:
          'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_c60da07485.svg?updated_at=2024-10-16T00:32:50.751Z'
      }}
      font={cormorant_Garamond}>
      <Intro2 duration={5} BGCR="bg-gold" CNFBGC="fill-gold" />
      <Intro3
        IMOL="https://heyboss-component-library-images.s3.amazonaws.com/Copy_of_Website_feature_image_copy_2_efaa8be9c9.png?updated_at=2024-09-19T21:59:10.355Z"
        IMOR="https://heyboss-component-library-images.s3.amazonaws.com/Copy_of_Website_feature_image_copy_c782bbaf81.png?updated_at=2024-09-19T21:59:10.632Z"
      />
      <Header2N1
        overA={true}
        BCMD="bg-transparent"
        BCSM="bg-zinc-900"
        BBGC="bg-white"
        B1FS="text-base"
        B1FW="font-medium"
        B1HT="py-2"
        B1HBGC="bg-white"
        B1HOLC="outline-transparent"
        B1HTC="text-gray-900"
        B1OLC="outline-transparent"
        B1RDC="rounded-full"
        B1TCR="text-gray-500"
        B1WT="px-8"
        B2BGC="bg-transparent"
        B2FS="text-base"
        B2FWT="font-light"
        B2HT="py-1"
        B2HBGC="bg-transparent"
        B2HOLC="outline-gold"
        B2HVTC="text-gold"
        B2OLC="outline-gold"
        B2RDCS="rounded-full"
        B2TC="text-gold"
        B2WD="px-10"
        data={{
          B1L: '#',
          B1TT: 'Sign in',
          B2LK: '/reservation',
          B2TT: 'Make Your Reservation',
          LGLK: '/',
          menu: [
            {
              link: '/menu',
              title: 'Menus'
            },
            {
              link: '/3d-virtual',
              title: '3D Interactive'
            },
            {
              submenu: [
                {
                  description: '',
                  href: 'https://www.ubereats.com/new-york/food-delivery/miss-korea-bbq-flatiron/oug6tIDbSRy4D0V0pUdEKw',
                  icon: 'ChartBarIcon',
                  iconType: 'HeroIcon',
                  name: 'Uber Eats'
                },
                {
                  description: '',
                  href: 'https://www.grubhub.com/restaurant/miss-korea-bbq-10-w-32nd-st-new-york/334470',
                  icon: 'CursorClickIcon',
                  iconType: 'HeroIcon',
                  name: 'Grubhub'
                },
                {
                  description: '',
                  href: 'https://www.seamless.com/menu/miss-korea-bbq-10-w-32nd-st-new-york/334470',
                  icon: 'ShieldCheckIcon',
                  iconType: 'HeroIcon',
                  name: 'Seamless'
                },
                {
                  description: '',
                  href: 'https://www.doordash.com/store/miss-korea-bbq-new-york-49407',
                  icon: 'ViewGridIcon',
                  iconType: 'HeroIcon',
                  name: 'Doordash'
                }
              ],
              title: 'Online Order'
            },
            {
              title: 'About',
              submenu: [
                {
                  description: '',
                  href: '/history',
                  icon: 'ChartBarIcon',
                  iconType: 'HeroIcon',
                  name: 'History'
                },
                {
                  description: '',
                  href: '/people',
                  icon: 'ChartBarIcon',
                  iconType: 'HeroIcon',
                  name: 'People'
                },
                {
                  description: '',
                  href: '/press',
                  icon: 'ChartBarIcon',
                  iconType: 'HeroIcon',
                  name: 'Press'
                }
              ]
            },
            {
              link: '/contact',
              title: 'Contact Us'
            }
          ]
        }}
        HBGIBGC="bg-transparent"
        BGIC="text-gold"
        BGIHBGC="bg-transparent"
        HBIHC="text-gold"
        HMD="py-10"
        HSM="py-4"
        IBBGC="bg-indigo-500"
        ICC="text-white"
        IAEE
        IB2EE
        LGIUMD="https://heyboss-component-library-images.s3.amazonaws.com/miss_korea_en_logo_pwt_5a5703f465.svg?updated_at=2024-09-19T21:51:15.982Z"
        LGIUSM="https://heyboss-component-library-images.s3.amazonaws.com/miss_korea_en_logo_pwt_5a5703f465.svg?updated_at=2024-09-19T21:51:15.982Z"
        LGSMD="h-10"
        LGSSM="h-10"
        MNFSMD="text-lg"
        MNFSSM="text-lg"
        MNFWMD="font-light"
        MFWSM="font-semibold"
        MNG="gap-10"
        MNHCR="text-gold"
        MNTCMD="text-white"
        MNTCSM="text-gold"
        ISMNSEE={true}
        SMBHCSM="bg-transparent"
        SMNBGC="bg-zinc-900"
        SMNBHVCMD="bg-transparent"
        SMNDFS="text-sm"
        SMNDFW="font-normal"
        SMNDTC="text-gray-500"
        SMNFSMD="text-lg"
        SMNFSSM="text-base"
        SMNFWMD="font-medium"
        SMNFWSM="font-medium"
        SMNTCMD="text-white"
        SMNTCSM="text-white"
        XBIBGC="bg-transparent"
        XBICR="text-gold"
        XBIHBGC="bg-transparent"
        XBIHC="text-gold"
        ISHEE={undefined}
        ICEE={undefined}
        IB1EE={undefined}
        MNBTSM={undefined} />
      <HeroVideo
        AMEFF="FadeInEffect"
        BBGC="bg-indigo-600"
        B1BGCH="bg-indigo-700"
        B1FSMD="text-lg"
        B1FSSM="text-base"
        B1FSS="tracking-normal"
        B1HT="py-3"
        B1HOLC="outline-transparent"
        B1OLC="outline-transparent"
        B1RDC="rounded-md"
        B1TCR="text-white"
        B1TCHH="text-white"
        B1WE="font-medium"
        B1WT="px-8"
        B2BGC="bg-white"
        B2BGCH="bg-indigo-100"
        B2FSMD2="text-lg"
        B2FSSM2="text-base"
        B2FSS2="tracking-normal"
        B2HT="py-3"
        B2HOLC="outline-transparent"
        B2OLC="outline-transparent"
        B2RDCS="rounded-md"
        B2TC="text-indigo-600"
        B2TCHH2="text-indigo-700"
        B2WE2="font-medium"
        B2WD="px-8"
        CBHTAMD="items-center"
        CBHTASM="items-center"
        CBVTAMDD="justify-center"
        CBVTASMM2="justify-center"
        data={{
          B1L: '#',
          B1TT: 'Get started',
          B2LK: '#',
          B2TT: 'Live demo',
          HBLL: '#',
          HBNE: 'Log in',
          SBTT: '',
          title1: '',
          title2: '',
          title3: '',
          VDDTA: [
            {
              poster: '',
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/miss_korea_main_video_74983ecdf0_0142904edf.mp4?updated_at=2025-01-11T19:12:12.401Z'
            }
          ],
          VDDD: 1000
        }}
        HMD="h-screen"
        HSM="h-64"
        ISSNG
        PDTBMD="py-32"
        PDTBSM="py-20"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBMW2="max-w-3xl"
        SBTC2="text-gray-500"
        SBTWE2="font-normal"
        SWNC2="blue"
        T1FSMD3="text-6xl"
        T1FSSM3="text-5xl"
        T1FSS3="tracking-normal"
        T1TCC3="text-gray-900"
        T1WT3="font-extrabold"
        T2FSMD3="text-6xl"
        T2FSSM3="text-5xl"
        T2FS3="tracking-normal"
        T2TC3="text-indigo-600"
        T2WT3="font-extrabold"
        T3FSMD3="text-6xl"
        T3FSSM3="text-5xl"
        T3FSS3="tracking-normal"
        T3TCRR3="text-gray-600"
        T3WT3="font-extrabold"
        TMW3="max-w-3xl"
        TSVTL3="space-y-4"
        TSBTBAMD2="text-center"
        TSBTBASM="text-center"
        B1EE3={undefined}
        B2EE3={undefined}
        MVTTT={undefined} />
      <MobileButton
        BGCR="bg-zinc-900"
        IB2EE={true}
        BBGC="bg-white"
        B1FS="text-base"
        B1FW="font-medium"
        B1HT="py-2"
        B1HBGC="bg-white"
        B1HOLC="outline-transparent"
        B1HTC="text-gray-900"
        B1OLC="outline-transparent"
        B1RDC="rounded-full"
        B1TCR="text-gray-500"
        B1WT="px-8"
        B2BGC="bg-transparent"
        B2FS="text-base"
        B2FWT="font-light"
        B2HT="py-1"
        B2HBGC="bg-transparent"
        B2HOLC="outline-gold"
        B2HVTC="text-gold"
        B2OLC="outline-gold"
        B2RDCS="rounded-full"
        B2TC="text-gold"
        B2WD="px-10"
        data={{
          B2LK: '/reservation',
          B2TT: 'Make Your Reservation'
        }}
        IB1EE={undefined} />
      <Hero6
        ImageHeightMD="h-full"
        BBGC="bg-transparent"
        B1EE3
        B1FSMD="text-lg"
        B1FSSM="text-base"
        B1HT="py-1"
        B1HVEFBG="bg-transparent"
        B1HOLC="outline-gold"
        B1OLC="outline-gold"
        B1RDC="rounded-full"
        B1TCR="text-gold"
        B1WE="font-light"
        B1WT="px-10"
        B2BGC="bg-white"
        B2FSMD2="text-lg"
        B2FSSM2="text-base"
        B2HT="py-3"
        B2HEBB2="bg-gray-50"
        B2HOLC="outline-transparent"
        B2OLC="outline-transparent"
        B2RDCS="rounded-md"
        B2TC="text-indigo-600"
        B2WE2="font-medium"
        B2WD="px-8"
        data={{
          B1L: '/menu',
          B1TT: 'Explore Our Menu',
          B2LK: '#',
          B2TT: 'Live demo',
          SBTT: "For over 15 years, we've welcomed guests to experience the authentic flavors of Korea, right here in K-town of New York City. Whether you're joining us for a special occasion or a casual meal, our doors are open to everyone who wants to feel a true taste of Korea.",
          title1: 'Welcome to miss KOREA BBQ, ',
          title2: 'Where Tradition Meets Taste',
          title3: ''
        }}
        HMD="py-32"
        HSM="py-24"
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/course_menu_f990562031.jpg?updated_at=2024-09-04T02:23:06.950Z"
        MBGCR3="bg-zinc-900"
        SBFSMD="text-base"
        SBTFSSM2="text-sm"
        SBTC2="text-zinc-300"
        SBTWE2="font-light"
        subtitleWidth="max-w-xl"
        T1FSMD3="text-4xl"
        T1FSSM3="text-3xl"
        T1TCC3="text-zinc-50"
        T1WT3="font-normal"
        T2FSMD3="text-7xl"
        T2FSSM3="text-6xl"
        T2TC3="text-gold"
        T2WT3="font-medium"
        T3FSMD3="text-6xl"
        T3FSSM3="text-5xl"
        T3TCRR3="text-indigo-600"
        T3WT3="font-extrabold"
        TSHTA3="space-x-3"
        TSVTL3="space-y-2"
        TSBTBAMD2="text-left"
        TSBTBASM="text-left"
        titleWidth="max-w-xl"
        B2EE3={undefined}
        MVTTT={undefined} />
      <Menu1
        BGCR="bg-zinc-900"
        BPDF={1}
        BPLGG={2}
        BPMDD={2}
        BPSMM={1}
        data={{
          menus: [
            {
              subMenus: [
                {
                  description: ' Beef Brisket, Shrimp, Octopus, Chicken, Ramen Noodles with Vegetables in Hot & Sweet Sauce (미코 스페셜볶음) 廚師推薦',
                  highlightTitle: 'CHEF SPECIALTY',
                  isHighlightExist: true,
                  name: 'Chef Miko Special',
                  price: '$51.95'
                },
                {
                  description: 'Hang-Ari Yangnyeom-Sogalbi (항아리 양념갈비) 陶瓷锅腌制烤牛肉',
                  name: 'Claypot Marinated Beef Short Rib',
                  price: '$52.95'
                },
                {
                  description: 'Seng-Samgyeopsal (흑돼지 생삼겹살) 黑豬五花肉',
                  name: 'Thick Sliced Berkshire Pork Belly',
                  price: '$41.95'
                },
                {
                  description: 'Rice topped with vegetables, raw egg and your choice in a sizzling stone pot. (돌솥비빔밥) 石鍋拌飯',
                  name: 'Dolsot-bibimbap',
                  price: '$25.95'
                },
                {
                  description: 'Spicy beef noodle soup (육개장칼국수) 石鍋拌飯 ',
                  name: 'Yukgyejang-kalguksu',
                  price: '$25.95'
                },
                {
                  description: 'Beef Short Ribs Soup with glass noodles (갈비탕) 牛排湯',
                  name: 'Galbitang',
                  price: '$25.95'
                }
              ],
              title: 'BBQ À la Carte Menu'
            },
            {
              subMenus: [
                {
                  description: 'Sinseollo 신선로, Gujeolpan 구절판, Boneless Rib 꽃살,Fresh Pork Belly 생 삼겹살, Marinated Beef Short Ribs 양념갈비, LobsterTail, Shrimp, Tuna & Scallop 랍스터 테일, 새우, 참치, 관자',
                  name: 'Jin',
                  price: '$118.95'
                },
                {
                  description: 'Sinseollo 신선로, Gujeolpan 구절판, Boneless Beef Rib 꽃살, Chicken 닭구이, Pork Spicy Bulgogi 돼지 고추장 불고기',
                  name: 'Sun',
                  price: '$98.95'
                },
                {
                  description: 'Sinseollo 신선로, Fresh Pork Belly 생 삼겹살, Marinated Beef Short Ribs 양념갈비',
                  name: 'Mee',
                  price: '$88.95'
                },
                {
                  description: 'Platter of nine delicacies consists of colorful vegetables, meat, and wheat crepes. The vegetables and meat are wrapped in the thin wheat crepes, stacked in the central compartment, and dipped in a mustard-soy sauce.',
                  highlightTitle: 'GUJEOLPAN',
                  isHighlightExist: true,
                  name: '',
                  price: ''
                },
                {
                  description: 'A hot pot of seafood, meat, and vegetables is cooked at the table in a brass sinseollo pot over hot charcoal burning in the central cylinder. It is a dish representative of Royal cuisine.',
                  highlightTitle: 'SINSEOLLO',
                  isHighlightExist: true,
                  name: '',
                  price: ''
                }
              ],
              title: 'BBQ Course Menu'
            }
          ]
        }}
        HMD="py-16"
        HSM="py-14"
        HLBGCLR="bg-gold"
        HLBC1="border-gold"
        HLFSMD="text-xl"
        HLFSSMM="text-lg"
        HLLFW3="font-semibold"
        HLTCC3="text-zinc-900"
        ITBREE
        MNAMDD="text-left"
        MNASMM="text-left"
        MNDESAMD="text-left"
        MNDEASM="text-left"
        MNDFSMD="text-base"
        MNDFSSMS="text-sm"
        MNDFWE="font-light"
        MNDETEC="text-zinc-300"
        MNFSMD="text-xl"
        MNFSSM="text-base"
        MEFW3="font-medium"
        MNTC3="text-gold"
        PFSMD="text-base"
        PFSSMS="text-sm"
        PFWE="font-semibold"
        PRCTC="text-gold"
        TAMDD="text-center"
        TASMM="text-center"
        TBCRR="border-gold"
        TFSMDD="text-2xl"
        TFSSMS="text-lg"
        TFWWET="font-semibold"
        TECCT3="text-gold"
        MVTTT={undefined}
        BPXXLL={undefined}
        BPXXXLE={undefined} />
      <HeroBackground2
        BGMHE={355}
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/Untitled_design_77cc1cbe89.png?updated_at=2024-09-19T22:05:29.665Z"
        MVTTT={undefined} />
      <Hero15
        BGCR="bg-zinc-900"
        BGHMDD="h-156"
        BBGC="bg-indigo-600"
        B1FS="text-base"
        B1FW="font-medium"
        B1HT="py-1"
        B1HVEFBG="bg-indigo-700"
        B1HOLC="outline-transparent"
        B1HTC="text-white"
        B1OLC="outline-transparent"
        B1RDC="rounded-lg"
        B1TCR="text-gold"
        B1WT="px-10"
        B2BGC="bg-transparent"
        B2FS="text-base"
        B2FWT="font-medium"
        B2HT="py-1"
        B2HEBB2="bg-transparent"
        B2HOLC="outline-gold"
        B2HVTC="text-gold"
        B2OLC="outline-gold"
        B2RDCS="rounded-full"
        B2TC="text-gold"
        B2WD="px-10"
        circularFontSize="text-sm"
        circularTextFill="fill-white"
        data={{
          B1L: '#',
          B1TT: 'Get a Demo',
          B2LK: '/3d-virtual',
          B2TT: 'Enter 3D Virtual Tour',
          circularText: '3D - VIRTUAL TOUR - 3D - VIRTUAL TOUR',
          graphicAlt: 'Rocket',
          graphicURL: 'https://cdn-icons-png.flaticon.com/512/6106/6106288.png',
          SBTT: "Step into our warm, inviting space—where traditional Korean elements blend seamlessly with a modern, luxurious ambiance. Whether it's the sizzle of premium cuts on the grill or the rich aroma of our handcrafted dishes, you'll feel KOREA in every moment.",
          title1: 'A Timeless,',
          title2: 'Luxurious Experience',
          title3: ''
        }}
        graphicHeightMD="h-0"
        graphicHeightSM="h-0"
        isAutoplay
        IB2EE
        isCircularExist
        isMuted
        isPlayLoop
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFWQ="font-light"
        SBMW2="max-w-lg"
        SBTC2="text-zinc-300"
        T1FSMD3="text-7xl"
        T1FSSM3="text-6xl"
        T1TCC3="text-white"
        T1WT3="font-medium"
        T2FSMD3="text-7xl"
        T2FSSM3="text-6xl"
        T2TC3="text-gold"
        T2WT3="font-medium"
        T3FSMD3="text-6xl"
        T3FSSM3="text-5xl"
        T3TCRR3="text-gray-600"
        T3WT3="font-extrabold"
        TMW3="max-w-xl"
        VOOP="https://heyboss-component-library-images.s3.amazonaws.com/Screenshot_2024_09_19_at_6_20_22_PM_7537e379dd.png?updated_at=2024-09-19T22:20:45.700Z"
        VOOPURL="https://heyboss-component-library-images.s3.amazonaws.com/Screen_Recording_2024_09_19_at_6_16_26_PM_cff9cb2af8.mov?updated_at=2024-09-19T22:19:03.945Z"
        IB1EE={undefined} />
      <Hero16
        AMEFF={null}
        BGCR="bg-zinc-900"
        BGHMDD="h-screen"
        BGHMSM="h-screen"
        BBGC="bg-rose-600"
        B1FSMD="text-lg"
        B1FSSM="text-sm"
        B1FW="font-semibold"
        B1HT="py-3"
        B1HVEFBG="bg-rose-700"
        B1HOLC="outline-transparent"
        B1HTC="text-gray-300"
        B1OLC="outline-transparent"
        B1RDC="rounded-md"
        B1TCR="text-zinc-50"
        B1WT="px-10"
        B2BGC="bg-transparent"
        B2FSMD2="text-lg"
        B2FSSM2="text-md"
        B2FWT="font-semibold"
        B2HT="py-1"
        B2HEBB2="bg-transparent"
        B2HOLC="outline-gold"
        B2HVTC="text-gold"
        B2OLC="outline-gold"
        B2RDCS="rounded-full"
        B2TC="text-gold"
        B2WD="px-10"
        data={{
          B1L: '/',
          B1TT: '3D Virtual Tour',
          B2LK: '/reservation',
          B2TT: 'Make Your Reservation',
          images: [
            {
              horizontalx: 0,
              horizontaly: 100,
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/10_W_32nd_St_New_York_NY_10001_USA_Dining_room_1_S7_A4854_9737776e69.jpg?updated_at=2024-09-05T02:56:52.172Z',
              width: 450,
              x: 50,
              y: 200
            },
            {
              horizontalx: 400,
              horizontaly: 40,
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/10_W_32nd_St_New_York_NY_10001_USA_Dining_room_1_S7_A4974_129a25c315.jpg?updated_at=2024-09-05T02:56:51.582Z',
              width: 550,
              x: 100,
              y: 600
            },
            {
              horizontalx: 800,
              horizontaly: 250,
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/Epoch_Times_510_A3120_899a8a995e.jpg?updated_at=2024-09-05T03:02:39.519Z',
              width: '400',
              x: 600,
              y: 300
            },
            {
              horizontalx: 1200,
              horizontaly: 0,
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/10_W_32nd_St_New_York_NY_10001_USA_Dining_room_1_S7_A4965_766e5e3fd9.jpg?updated_at=2024-09-04T03:18:29.094Z',
              width: 500,
              x: 550,
              y: 800
            },
            {
              horizontalx: 1600,
              horizontaly: 200,
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/Royal_Course_2c06b7b5b2.png?updated_at=2024-09-05T03:02:38.918Z',
              width: 400,
              x: 0,
              y: 1000
            },
            {
              horizontalx: 2000,
              horizontaly: 10,
              url: 'https://heyboss-component-library-images.s3.amazonaws.com/miss_Korea_first_birthday_party_dol_doljanchi_dolsang_best_korean_bbq_restaurant_nyc_sb_groupe_1115_0a956af3_d8b1_482a_a180_e802c9a9d46b_4f6ca1d3b8.jpg?updated_at=2024-09-05T03:02:32.743Z',
              width: 400,
              x: 650,
              y: 1250
            }
          ],
          SBTT: 'At missKOREA BBQ, we believe food is culture—a journey connecting people and tradition with every bite.',
          title: 'Food from the Heart, for the Soul'
        }}
        IMOP3="opacity-60"
        IB2EE
        ISCVTR
        SCRPED={2}
        SBFSMD="text-lg"
        SBTFSSM2="text-lg"
        SBTFWQ="font-light"
        SBTC2="text-white"
        TFSMDD="text-6xl"
        TFSSMS="text-5xl"
        TFWWET="font-medium"
        TSTBAQ="text-center"
        TECCT3="text-gold"
        IB1EE={undefined} />

      <Footer1
        SNCIOC="text-zinc-50"
        SNSIhC2="text-gold"
        SNSISSMD="w-6"
        SNSMSMSM="w-6"
        SNSICALG="justify-start"
        BPDF={2}
        BPLGG={4}
        BPMDD={4}
        BPSMM={2}
        CPRFSMD="text-base"
        CPFSSMS="text-xs"
        CPRFWEQ="font-normal"
        CPRTALMDD="justify-center"
        CPRTEASMQ="text-center"
        CPRTEC="text-zinc-500"
        data={{
          copyright: 'miss KOREA BBQ. All rights reserved.',
          LGLK: '/',
          navigation: [
            {
              navMenu: [
                {
                  menuLink: '/menu',
                  menuText: 'Korean BBQ'
                },
                {
                  menuLink: '/menu',
                  menuText: 'Royal Cuisine '
                }
              ],
              navTitle: 'MENUS'
            },

            {
              navMenu: [
                {
                  menuLink: '/3d-virtual',
                  menuText: '3D Interactive'
                },
                {
                  menuLink: '/reservation',
                  menuText: 'Make Reservation'
                }
              ],
              navTitle: 'PRIVATR DINING'
            },
            {
              navMenu: [
                {
                  menuLink: 'https://www.ubereats.com/new-york/food-delivery/miss-korea-bbq-flatiron/oug6tIDbSRy4D0V0pUdEKw',
                  menuText: 'Uber Eats'
                },
                {
                  menuLink: 'https://www.grubhub.com/restaurant/miss-korea-bbq-10-w-32nd-st-new-york/334470',
                  menuText: 'Grubhub'
                },
                {
                  menuLink: 'https://www.doordash.com/store/miss-korea-bbq-new-york-49407',
                  menuText: 'Doordash'
                },
                {
                  menuLink: 'https://www.seamless.com/menu/miss-korea-bbq-10-w-32nd-st-new-york/334470',
                  menuText: 'Seamless'
                }
              ],
              navTitle: 'ORDER ONLINE'
            },
            {
              navMenu: [
                {
                  menuLink: 'tel:2125944963',
                  menuText: 'TEL. 212-594-4963'
                },
                {
                  menuLink: 'https://g.co/kgs/Z98Z4no',
                  menuText: '10 WEST 32ND STREET NEW YORK, NY 10001'
                }
              ],
              navTitle: 'Contact US'
            }
          ],
          slogan: '',
          socialNetworkServiceList: [
            {
              href: 'https://www.facebook.com/missKOREABBQ/',
              name: 'Facebook'
            },
            {
              href: 'https://www.instagram.com/misskoreabbq/',
              name: 'Instagram'
            },
            {
              href: 'https://www.youtube.com/user/missKoreaBBQ',
              name: 'Youtube'
            }
          ]
        }}
        DSBLHTCQ="text-gold"
        DIVDLC="border-gold"
        HMD="py-24"
        HSM="py-16"
        LGGAN="justify-center"
        LGMLUR="https://heyboss-component-library-images.s3.amazonaws.com/miss_korea_en_logo_sq_wt_7e5c699fcc.svg?updated_at=2024-09-04T03:36:07.712Z"
        LGSMD="h-72"
        LGSSM="h-36"
        MBGCR3="bg-zinc-900"
        NAMEFSMDD="text-base"
        NAMEFSMSM="text-sm"
        NVMFWEE="font-normal"
        NMELINGRE="text-gold"
        NAMVMTEA="text-left"
        NVMTEC="text-zinc-200"
        NVTFSMDD="text-base"
        NTFFSMS="text-sm"
        NTFWEQ="font-semibold"
        NTTALQ="text-left"
        NTTCOR="text-gold"
        SLGFSMSD="text-base"
        SLGFSMS="text-base"
        SGFWEW="font-medium"
        SLGTTEA="text-left"
        SLGTECC="text-gray-500"
        SLGWDED="w-full"
        SLGWDSM="w-full"
        BPXXLL={undefined}
        BPXXXLE={undefined}
        MVTTT={undefined}
      />
    </LayoutWithTawk>
  );
};

// export async function getStaticProps(context) {
//   return {
//     props: {}
//   }
// }

export default IndexPage;
