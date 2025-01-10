import { ToastContainer } from 'react-toastify';
import LayoutWithTawk from '../components/LayoutWithTawk';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';
import { sendEmail } from '../utility/email';
import Intro2 from '../components/Intro2';
import Header2N1 from '../components/Header2N1';
import CTA7 from '../components/CTA7';
import HeroBackground2 from '../components/HeroBackground2';
import Contact4 from '../components/Contact4';
import Footer1 from '../components/Footer1';

const IndexPage = () => {
  const submitMisskoreaBBQContactForm = (e) => {
    sendEmail(
      e,
      process.env.NEXT_PUBLIC_MISSKOREABBQ_SERVICE_ID,
      process.env.NEXT_PUBLIC_MISSKOREABBQ_TEMPLATE_ID,
      process.env.NEXT_PUBLIC_MISSKOREABBQ_KEY
    );
  };
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'Contact Us | miss KOREA BBQ | Reach Out for Reservations & Inquiries',
        metaTag: {
          description:
            'Get in touch with miss KOREA BBQ for reservations, event bookings, or any inquiries. We are here to provide you with the best Korean BBQ and royal cuisine experience.',
          keywords:
            'contact Korean BBQ restaurant, make a reservation, event booking, Korean restaurant inquiries, contact [Restaurant Name], restaurant phone number, restaurant email, Korean cuisine reservations, Korean BBQ reservations',
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
      <CTA7
        AMEFF={null}
        BBGC="bg-transparent"
        B1FS="text-base"
        B1FW="font-medium"
        B1HT="py-2"
        B1HVEFBG="bg-transparent"
        B1HVICO="text-gold"
        B1HOLC="outline-gold"
        B1HTC="text-gold"
        B1HVICOC="text-gold"
        B1OLC="outline-gold"
        B1RDC="rounded-full"
        B1TCR="text-gold"
        B1WT="px-8"
        B2BGC="bg-zinc-900"
        B2FS="text-base"
        B2FWT="font-medium"
        B2HT="py-2"
        B2HEBB2="bg-zinc-900"
        B2HOLC="outline-white"
        B2HVTC="text-white"
        B2OLC="outline-white"
        B2RDCS="rounded-full"
        B2TC="text-white"
        B2WD="px-8"
        B1HVICOCFEE="bg-zinc-900"
        CTFSMDD="text-lg"
        CTFSSM3="text-base"
        CTFWE="font-light"
        CTECRX="text-zinc-300"
        data={{
          alt: 'CTAImage',
          B1L: 'https://maps.app.goo.gl/JykCfjb1wWGd6NbQA',
          B1TT: 'Find us on Google Maps',
          B2LK: 'tel:+12125944963',
          B2TT: 'Call | 212-594-4963',
          content: '10 WEST 32ND STREET NEW YORK, NY 10001',
          label: 'VISIT US',
          title: 'In the Heart of Manhattan'
        }}
        HMD="py-20"
        HSM="py-14"
        imhHDMD="h-full"
        imhHDSM="h-full"
        IMGOVLAC="bg-transparent"
        IMGOVLACOP="mix-blend-multiply"
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/miss_korea_map_370485db_a179_4b67_be7d_a0ee3f1a03ea_eea6d76a41.png?updated_at=2024-09-27T03:45:49.631Z"
        IB1EE
        IB1UCIE
        IB2EE
        LFSMDD="text-base"
        LbFSSM="text-sm"
        LBFWEA="font-semibold"
        LATECR="text-gold"
        LATCBTALMD="text-left"
        LATCBTALMMS="text-left"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semibold"
        TECCT3="text-white"
        MVTTT={undefined}
      />
      <HeroBackground2
        BGMHE={500}
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/DSC_09172_458f2aae17.jpeg?updated_at=2024-10-16T01:06:47.849Z"
        MVTTT={undefined}
      />
      <ToastContainer />
      <Contact4
        AMEFF={null}
        onSubmit={submitMisskoreaBBQContactForm}
        BGMHEBGCED="bg-zinc-800"
        CTRQ="bg-zinc-800"
        CTRW="bg-zinc-800"
        CTRE
        CTRR="text-base"
        BFWE="font-medium"
        BFWET="py-2"
        BXT="bg-zinc-800"
        BXTTC="outline-trensparent"
        BXTTCC="text-white"
        BXTTCCR="outline-trensparent"
        BXTTCCRS="rounded-full"
        BTCEDD="text-gold"
        EGEW="px-10"
        data={{
          buttonText: 'Submit',
          contacts: [
            {
              icon: 'MapIcon',
              iconType: 'HeroIcon',
              info: '10 West 32nd Street, New York, NY 10001',
              link: 'https://www.google.com/maps/place/miss+KOREA+BBQ/@40.7474639,-73.9887548,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a8f0e6dff7:0xf690d3dfef37dcf!8m2!3d40.7474639!4d-73.9865661?hl=zh-TW'
            },
            {
              icon: 'PhoneIcon',
              iconType: 'HeroIcon',
              info: '212-594-4963',
              link: 'tel:212-594-4963'
            },
            {
              icon: 'MailIcon',
              iconType: 'HeroIcon',
              info: 'info@missKOREABBQ.com',
              link: 'mailto:info@missKOREABBQ.com'
            }
          ],
          promotionNavLink: '#',
          promotionNavText: 'Submit your message!',
          promotionText: 'Interested in joining our team?',
          SBTT: '',
          title: 'GET IN TOUCH'
        }}
        HMD="py-24"
        HSM="py-16"
        IFRNDMD="text-xl"
        IFRNDSM="text-xl"
        IFRNDW="font-normal"
        IFRNDC="text-gold"
        IFRNDCR="text-zinc-50"
        IFRNDCRR="text-zinc-50"
        PMRTFSM="text-xl"
        PMRTFSD="text-lg"
        PMRTFSW="font-normal"
        PMRTFSWMD="text-xl"
        PMRTFSWSM="text-lg"
        PMRTFSWFW="font-medium"
        PMRTFSWTC="text-gold"
        PMRTFSWTCC="text-zinc-300"
        PMRTFSWTCCRE="placeholder-zinc-700"
        QTPLINABR="ring-zinc-800"
        QTPLINABRR="border-gray-300"
        SBFSMD="text-lg"
        SBTFSSM2="text-lg"
        SBTFWQ="font-normal"
        SBTC2="text-gray-500"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-bold"
        TSBIPALMD="text-left"
        TSBIPALSM="text-left"
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
