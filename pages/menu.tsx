import Banner1 from '../components/Banner1';
import CTA1 from '../components/CTA1';
import Footer1 from '../components/Footer1';
import Header2N1 from '../components/Header2N1';
import HeroBackground2 from '../components/HeroBackground2';
import IFrameHelper from '../components/IFrameHelper';
import Intro2 from '../components/Intro2';
import LayoutWithTawk from '../components/LayoutWithTawk';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';

const IndexPage = () => {
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'Menu | miss KOREA BBQ | Korean BBQ & Royal Royal Cuisine',
        metaTag: {
          description:
            'Explore our diverse menu at miss KOREA BBQ, featuring authentic Korean BBQ and exquisite royal cuisine. Experience the rich flavors of Korea in a cozy and luxurious setting.',
          keywords:
            'Korean BBQ menu, royal Korean cuisine, traditional Korean dishes, Korean grill, 한상차림, authentic Korean food, luxury dining, Korean royal cuisine, Korean restaurant menu, dining in Korea',
          author: 'HEYBOSS https://www.heyboss.us/'
        },
        favicon:
          'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_c60da07485.svg?updated_at=2024-10-16T00:32:50.751Z'
      }}
      font={cormorant_Garamond}>
      <Intro2 duration={5} BGCR="bg-gold" CNFBGC="fill-gold" />
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
        MNBTSM={undefined}
      />
      <Banner1
        AMEFF={null}
        BGCR="bg-zinc-900"
        CTNAALA="justify-center"
        CTALLA="text-center"
        CTFSMDD="text-xl"
        CTFSSM3="text-base"
        CTFWE="font-normal"
        CTEMWD3="max-w-xl"
        CTECRX="text-gray-500"
        data={[
          {
            content: '',
            label: '',
            title: ''
          }
        ]}
        HMD="py-14"
        HSM="py-14"
        LAC="text-center"
        LFSMDD="text-base"
        LbFSSM="text-sm"
        LBFWEA="font-semibold"
        LATECR="text-indigo-600"
        TALEE="text-center"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semiabold"
        TECCT3="text-gold"
        MVTTT={undefined}
      />
      <IFrameHelper
        height="600px"
        src="https://heyzine.com/flip-book/ae613942a8.html"
        title={undefined}
      />

      <Banner1
        AMEFF={null}
        BGCR="bg-zinc-900"
        CTNAALA="justify-center"
        CTALLA="text-center"
        CTFSMDD="text-xl"
        CTFSSM3="text-base"
        CTFWE="font-normal"
        CTEMWD3="max-w-xl"
        CTECRX="text-gray-500"
        data={[
          {
            content: '',
            label: '',
            title: ''
          }
        ]}
        HMD="py-10"
        HSM="py-10"
        LAC="text-center"
        LFSMDD="text-base"
        LbFSSM="text-sm"
        LBFWEA="font-semibold"
        LATECR="text-indigo-600"
        TALEE="text-center"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semiabold"
        TECCT3="text-gold"
        MVTTT={undefined}
      />
      <IFrameHelper
        height="600px"
        src="https://heyzine.com/flip-book/535312ae51.html"
        title={undefined}
      />

      <Banner1
        AMEFF={null}
        BGCR="bg-zinc-900"
        CTNAALA="justify-center"
        CTALLA="text-center"
        CTFSMDD="text-xl"
        CTFSSM3="text-base"
        CTFWE="font-normal"
        CTEMWD3="max-w-xl"
        CTECRX="text-gray-500"
        data={[
          {
            content: '',
            label: '',
            title: ''
          }
        ]}
        HMD="py-10"
        HSM="py-10"
        LAC="text-center"
        LFSMDD="text-base"
        LbFSSM="text-sm"
        LBFWEA="font-semibold"
        LATECR="text-indigo-600"
        TALEE="text-center"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semiabold"
        TECCT3="text-gold"
        MVTTT={undefined}
      />
      <CTA1
        AMEFF={null}
        CTRW="bg-transparent"
        CTRE
        CTRR="text-base"
        BTAWWFXS="tracking-normal"
        BFWE="font-medium"
        BFWET="py-2"
        BGHMSME="bg-transparent"
        BXTTC="outline-gold"
        BXTTCC="text-gold"
        BXTTCCR="outline-gold"
        BXTTCCRS="rounded-full"
        BTCEDD="text-gold"
        EGEW="px-10"
        data={{
          alt: 'image alt text',
          buttonLink: '/reservation',
          buttonText: 'Make Your Reservation ',
          SBTT: 'Whether you’re planning a family gathering, a special celebration, or just a night out with friends, Don’t miss out on an unforgettable Korean BBQ experience! ',
          title1: 'Reserve your table',
          title2: 'at miss KOREA BBQ'
        }}
        HMD="py-5"
        HSM="py-5"
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/Korean_marinatied_beef_slice_d24a95aceb.jpg?updated_at=2024-09-04T02:55:47.007Z"
        MBGCR3="bg-zinc-800"
        SBGCCR="bg-zinc-900"
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFS2="tracking-normal"
        SBTFWQ="font-light"
        SBTC2="text-white"
        TFSMDD="text-4xl"
        TFSSMS="text-3xl"
        TFFSP="tracking-normal"
        TFWWET="font-semibold"
        TSBTBAMD2="text-left"
        TSBTBASM="text-left"
        TECCT3="text-gold"
        MVTTT={undefined}
      />
      <HeroBackground2
        BGMHE={355}
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/Untitled_design_77cc1cbe89.png?updated_at=2024-09-19T22:05:29.665Z"
        MVTTT={undefined}
      />
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

export default IndexPage;
