import LayoutWithTawk from '../components/LayoutWithTawk';
import Blogs from './misskorea_blog_posts.json';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';
import Intro2 from '../components/Intro2';
import Header2N1 from '../components/Header2N1';
import Banner1 from '../components/Banner1';
import Logo4 from '../components/Logo4';
import Feature35 from '../components/Feature35';
import Footer1 from '../components/Footer1';

const IndexPage = () => {
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'Press & Media | miss KOREA BBQ | Featured in Korean BBQ & Royal Cuisine',
        metaTag: {
          description:
            'See what the press is saying about miss KOREA BBQ. Featured in top publications for our authentic Korean BBQ and royal cuisine, offering a cozy yet luxurious dining experience.',
          keywords:
            'press about Korean BBQ, restaurant media coverage, miss KOREA BBQ in the news, Korean royal cuisine reviews, featured in media, best Korean BBQ restaurant, dining press releases, Korean food press, restaurant reviews',
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
        HMD="py-5"
        HSM="py-5"
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
      <Logo4
        AMEFF={null}
        ANLEFEF="FlyingEffect"
        ATPD={3000}
        BGCR="bg-zinc-900"
        data={{
          logoList: [
            {
              imageAlt: 'NEW YORK POST',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/3_5945c933f7.png?updated_at=2024-10-28T04:46:56.842Z'
            },
            {
              imageAlt: 'NBC',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/1_116457e5a1.png?updated_at=2024-10-28T04:46:56.881Z'
            },
            {
              imageAlt: 'The Korea Daily',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/2_ce0b172566.png?updated_at=2024-10-28T04:46:56.847Z'
            },
            {
              imageAlt: 'CBS',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/4_ca0f925bd9.png?updated_at=2024-10-28T04:46:57.102Z'
            },
            {
              imageAlt: 'THE EPOCH TIME',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/5_8ae0c48f97.png?updated_at=2024-10-28T04:46:56.831Z'
            },
            {
              imageAlt: 'EATER',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/6_74d383b30a.png?updated_at=2024-10-28T04:46:56.874Z'
            },
            {
              imageAlt: 'NTD',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/7_2e6c75456d.png?updated_at=2024-10-28T04:46:56.900Z'
            }
          ],
          SBTT: '',
          title: 'In The Press'
        }}
        HMD="py-10"
        HSM="py-10"
        isLoop
        SPVMD={5}
        SPVSM={3}
        SPVMDD={10}
        SPVMSMM={10}
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFWQ="font-normal"
        SBTC2="text-gray-500"
        SBVMWMD="w-168"
        SBVMWSM="w-72"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semibold"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gold"
        TTWMD="w-168"
        TTWSM="w-72"
        MVTTT={undefined}
        DISLOOT={undefined}
      />
      <Feature35
        RDLNK="/blog"
        AMEFF={null}
        ANLEFEF="FlyingEffect"
        ARBBGC="bg-zinc-800"
        ARBBGCC="bg-zinc-700"
        ARBBGMD="text-base"
        ARBBGSM="text-base"
        ARBBGFW="font-normal"
        ARBBGTC="text-gray-500"
        ATCG="gap-8"
        INTRTS={2}
        ARTCA="text-left"
        ARTMD="text-xl"
        ARTSM="text-lg"
        ARTSMFW="font-semibold"
        ARTSMTC="text-white"
        BGCR="bg-zinc-900"
        BPDF={1}
        BPLGG={4}
        BPMDD={4}
        BPSMM={1}
        CTRW="bg-zinc-900"
        CTRR="text-lg"
        BFWE="font-medium"
        BFWET="py-3"
        BXT="bg-zinc-900"
        BXTTC="outline-gold"
        BXTTCC="text-gold"
        BXTTCCR="outline-gold"
        BXTTCCRS="rounded-full"
        BTCEDD="text-gold"
        EGEW="w-72"
        data={Blogs}
        HMD="py-1"
        HSM="py-1"
        LALMD="justify-start"
        LALSM="justify-start"
        LFSSMD="text-base"
        LFSSSM="text-sm"
        LFSSSSE="font-normal"
        TLFSSSSETCX="text-indigo-700"
        SBFSMD="text-lg"
        SBTFSSM2="text-lg"
        SBTFWQ="font-normal"
        SBTC2="text-gray-500"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semibold"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gold"
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
