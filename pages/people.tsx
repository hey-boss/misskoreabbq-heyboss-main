import LayoutWithTawk from '../components/LayoutWithTawk';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';
import Feature1 from '../components/Feature1';
import Intro2 from '../components/Intro2';
import Header2N1 from '../components/Header2N1';
import HeroImage from '../components/HeroImage';
import Feature19 from '../components/Feature19';
import Feature9 from '../components/Feature9';
import CTA2 from '../components/CTA2';
import HeroBackground2 from '../components/HeroBackground2';
import Footer1 from '../components/Footer1';

const IndexPage = () => {
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'Meet Our Team | miss KOREA BBQ | Experts in Korean BBQ & Royal Cuisine',
        metaTag: {
          description:
            'Meet the passionate team behind miss KOREA BBQ, dedicated to bringing you the finest Korean BBQ and royal cuisine. Learn more about our chefs and staff who create an authentic dining experience.',
          keywords:
            'Korean BBQ experts, Korean restaurant team, meet our chefs, restaurant staff, culinary team, Korean cuisine experts, royal cuisine chefs, miss KOREA BBQ team, authentic Korean dining, restaurant people',
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
      <HeroImage
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
        B2TC="text-gold"
        B2TCHH2="text-gold"
        B2WE2="font-medium"
        B2WD="px-8"
        CBVTAMDD="justify-center"
        CBVTASMM2="justify-center"
        data={{
          B1L: '#',
          B1TT: '',
          B2LK: '#',
          B2TT: 'Live demo',
          HBLL: '#',
          HBNE: 'Log in',
          SBTT: '',
          title1: '',
          title2: '',
          title3: ''
        }}
        HMD="h-screen"
        HSM="h-56"
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/team_image_edit_a6b16d2cc9.jpeg?updated_at=2024-10-28T03:42:50.281Z"
        PDTBMD="py-10"
        PDTBSM="py-6"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBMW2="max-w-3xl"
        SBTC2="text-gray-500"
        SBTWE2="font-normal"
        T1FSMD3="text-6xl"
        T1FSSM3="text-5xl"
        T1FSS3="tracking-normal"
        T1TCC3="text-gold"
        T1WT3="font-semibold"
        T2FSMD3="text-6xl"
        T2FSSM3="text-5xl"
        T2FS3="tracking-normal"
        T2TC3="text-gold"
        T2WT3="font-semibold"
        T3FSMD3="text-6xl"
        T3FSSM3="text-5xl"
        T3FSS3="tracking-normal"
        T3TCRR3="text-gray-600"
        T3WT3="font-semibold"
        TMW3="max-w-3xl"
        TSVTL3="space-y-4"
        TSBTBAMD2="text-center"
        TSBTBASM="text-center"
        B1EE3={undefined}
        B2EE3={undefined}
        MVTTT={undefined}
      />
      <Feature19
        BGCR="bg-zinc-900"
        BPDF={1}
        BPLGG={3}
        BPMDD={3}
        BPSMM={1}
        data={{
          features: [
            {
              featureDescription: 'We honor the time-honored methods of Korean BBQ while embracing innovation to keep things exciting. ',
              featureTitle: 'Embrace Tradition and Innovation',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_copy_2_e7f9196374.svg?updated_at=2024-09-19T21:21:55.125Z'
            },
            {
              featureDescription: "Our restaurant is more than a place to eat—it's a gathering spot where friends and family connect over great food. ",
              featureTitle: 'Community-Centered Hospitality',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_copy_2_e7f9196374.svg?updated_at=2024-09-19T21:21:55.125Z'
            },
            {
              featureDescription: 'We support each other in a collaborative environment where ideas are valued, and every team member has the opportunity to grow. ',
              featureTitle: 'Teamwork and Growth',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_copy_2_e7f9196374.svg?updated_at=2024-09-19T21:21:55.125Z'
            }
          ]
        }}
        DBDD3="bg-zinc-500"
        DBDD3HH="h-16"
        DBDD3WW="w-px"
        FDDRFESMD="text-base"
        FDDRFESSMD="text-base"
        FDDRFESSMDZ="text-zinc-300"
        FDDRFESSMDX="font-light"
        DBDD3MD="text-xl"
        DBDD3MSM="text-xl"
        FGSSMS="gap-4"
        FGSSMSC="text-gold"
        FTTTCRWE="font-semibold"
        FGSSMMD="w-80"
        HMD="py-14"
        HSM="py-12"
        IMSSE="w-14"
        IMGTDEDM="text-center"
        IMGTDESM="text-center"
        ISMGEEE
        MVTTT={undefined}
      />
      <Feature1
        AMEFF="FadeInEffect"
        ANLEFEF="SmoothlyAppear"
        BGCR="bg-zinc-900"
        data={{
          feature: [
            {
              alt: 'image alt text',
              featureDescription: 'At MissKorea BBQ, our vision is to bring the authentic taste of Korean BBQ to the heart of your community, offering a unique dining experience where tradition meets modern flair. We strive to be the go-to destination for lovers of premium, flavorful meats, vibrant side dishes, and a warm, welcoming atmosphere that captures the spirit of Korean culinary culture.',
              featureImageUrl: 'https://heyboss-component-library-images.s3.amazonaws.com/miss_korea_bbq_best_korea_bbq_restaurant_nyc_food_072_1000x667_8b74859b5a.jpg?updated_at=2024-10-04T01:43:35.378Z',
              featureTitle: 'Our Vision',
              imagePos: 'left',
              subFeature: []
            }
          ],
          SBTT: '',
          title: ''
        }}
        FDDRFESMD="text-lg"
        FDDRFESSMD="text-lg"
        FDDRFESSMDZ="text-zinc-300"
        FDDRFESSMDX="font-light"
        FDDRFESSMMDD="text-4xl"
        FDDRFESSMMDDMS="text-3xl"
        FTTTCR="text-gold"
        FTTTCRWE="font-semibold"
        GCR1R="text-zinc-800"
        GR1EE
        G2CRRE="text-zinc-800"
        G2EEQ
        HMD="py-20"
        HSM="py-14"
        IBCCGC="bg-transparent"
        ICC="text-gold"
        ICEEEA
        SFDFSMDD="text-base"
        SFDFSMDDSM="text-base"
        SFDFSMDDSMC="text-gray-500"
        SFDFSMDDSMCW="font-normal"
        SFDFSMDDSMDD="text-lg"
        SFDFSMDDSMDS="text-lg"
        SFDFSMDDSMDSC="text-gold"
        SFDFSMDDSMW="font-semibold"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTC2="text-gray-500"
        SBTWE2="font-normal"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gold"
        TWW32="font-extrabold"
        MVTTT={undefined} />
      <Feature9
        BGCR="bg-zinc-900"
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
        BTALMD="text-center"
        data={{
          B1L: '#',
          B1TT: 'Get started',
          B2LK: '#',
          B2TT: 'Live demo',
          label: '',
          SBTT: 'Our team of seven master chefs brings a remarkable 173 years of combined culinary expertise to miss KOREA BBQ. Each chef contributes decades of dedication to the art of Korean BBQ and royal cuisine, ensuring that every dish reflects the depth of tradition and skill. Together, they craft an unparalleled dining experience, honoring the authentic flavors of Korea with every meal served.',
          title: '7 Master Chefs, 173 Years of Culinary Excellence'
        }}
        HMD="py-14"
        HSM="py-10"
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/Untitled_design_0d416e6aa5.png?updated_at=2024-10-28T04:11:33.317Z"
        ICSEEQ
        LFSS="text-base"
        LBFWEA="font-semibold"
        LATECR="text-indigo-600"
        LTSAMD="text-center"
        LTSASM="text-center"
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFWQ="font-light"
        SBMW2="max-w-6xl"
        SBTC2="text-zinc-300"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semibold"
        TECCT3="text-gold"
        AMEFF={undefined}
        B1EE3={undefined}
        B2EE3={undefined}
        MVTTT={undefined}
      />
      <CTA2
        AMEFF={null}
        BGCR="bg-zinc-900"
        CTRW="bg-transparent"
        CTRE
        BFWET="py-2"
        BGHMSME="bg-transparent"
        BXTTC="outline-gold"
        BXTTCC="text-gold"
        BXTTCCR="outline-gold"
        BXTTCCRS="rounded-full"
        BTCEDD="text-gold"
        BTSSE="text-lg"
        BTWWE="font-medium"
        EGEW="px-10"
        data={{
          buttonLInk: '/contact',
          buttonText: 'Join Our Team',
          SBTT: 'We’re always looking for enthusiastic, hardworking individuals to join our dynamic team.',
          title1: 'Interested in joining our team?',
          title2: 'Join the MissKorea BBQ family today.'
        }}
        HMD="py-28"
        HSM="py-20"
        MWW="max-w-3xl"
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTC2="text-zinc-300"
        SBTWE2="font-normal"
        TFSMDD="text-4xl"
        TFSSMS="text-3xl"
        TSBTBAMD2="text-center"
        TSBTBASM="text-left"
        TECCT3="text-white"
        TWW32="font-extrabold"
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

// export async function getStaticProps(context) {
//   return {
//     props: {}
//   }
// }

export default IndexPage;
