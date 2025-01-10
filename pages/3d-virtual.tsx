import LayoutWithTawk from '../components/LayoutWithTawk';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';
import Header2N1 from '../components/Header2N1';
import HeroImage from '../components/HeroImage';
import Feature19 from '../components/Feature19';
import IFrameHelper from '../components/IFrameHelper';
import Banner1 from '../components/Banner1';
import Feature1_1 from '../components/Feature1_1';
import Feature1Video from '../components/Feature1Video';
import Team2 from '../components/Team2';
import HeroBackground2 from '../components/HeroBackground2';
import Footer1 from '../components/Footer1';
import Intro2 from '../components/Intro2';

const IndexPage = () => {
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'Private Dining | miss KOREA BBQ | Exclusive Korean BBQ & Royal Cuisine Experience',
        metaTag: {
          description:
            'Experience the exclusivity of private dining at miss KOREA BBQ, offering intimate spaces for special occasions. Enjoy authentic Korean BBQ and royal cuisine in a luxurious, personalized setting.',
          keywords:
            'private dining Korean BBQ, exclusive dining experience, royal cuisine private dining, Korean restaurant private rooms, special event dining, private dining reservations, intimate dining, luxury dining experience, Korean food private dining',
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
          title2: '3D Interactive',
          title3: ''
        }}
        HMD="h-96"
        HSM="h-96"
        IMGRR="https://heyboss-component-library-images.s3.amazonaws.com/2nd_floor_0ad8c73890.png?updated_at=2024-10-09T20:41:42.748Z"
        PDTBMD="py-10"
        PDTBSM="py-6"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBMW2="max-w-3xl"
        SBTC2="text-white"
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
        MVTTT={undefined} />
      <Feature19
        BGCR="bg-zinc-900"
        BPDF={1}
        BPLGG={3}
        BPMDD={3}
        BPSMM={1}
        data={{
          features: [
            {
              featureDescription: 'The virtual tour captures the true essence of dining at MissKorea BBQ, from the traditional décor to the sizzling grills. ',
              featureTitle: 'Interactive Dining Experience',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_copy_2_e7f9196374.svg?updated_at=2024-09-19T21:21:55.125Z'
            },
            {
              featureDescription: 'Easily reserve your favorite table directly from the tour. You can even explore our different event spaces to visualize your next gathering at MissKorea BBQ.',
              featureTitle: 'Convenient Table Reservations',
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/Transparent_Artboard_1_copy_2_e7f9196374.svg?updated_at=2024-09-19T21:21:55.125Z'
            },
            {
              featureDescription: 'Whether you’re looking for a traditional seating arrangement or a private dining room for a special occasion.',
              featureTitle: 'Event Planning',
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
        MVTTT={undefined} />
      <IFrameHelper
        height="500px"
        src="https://HomeJab.vr-360-tour.com/e/iWABkUvgL0A/e"
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
      <Feature1_1
        AMEFF={null}
        ANLEFEF="SmoothlyAppear"
        BGCR="bg-zinc-900"
        data={{
          feature: [
            {
              alt: 'image alt text',
              featureDescription: "Step into the heart of miss KOREA BBQ, where the lively atmosphere and sizzling aromas welcome you. Our first floor is a spacious BBQ dining area, designed for everyone to enjoy an authentic Korean BBQ experience. With plenty of tables and seating, it's the perfect place for walk-ins, spontaneous gatherings, and shared moments over the grill. ",
              featureImageUrl: 'https://heyboss-component-library-images.s3.amazonaws.com/10_W_32nd_St_New_York_NY_10001_USA_Others_1_S7_A5046_ef9ea19e45.jpg?updated_at=2024-10-09T20:20:34.506Z',
              featureTitle: '1st Floor - The BBQ Haven',
              imagePos: 'right'
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
        G2CRRE="text-gray-200"
        HMD="py-20"
        HSM="py-14"
        IBCCGC="bg-indigo-500"
        ICC="text-white"
        ICEEEA
        SFDFSMDD="text-base"
        SFDFSMDDSM="text-base"
        SFDFSMDDSMC="text-gray-500"
        SFDFSMDDSMCW="font-normal"
        SFDFSMDDSMDD="text-lg"
        SFDFSMDDSMDS="text-lg"
        SFDFSMDDSMDSC="text-gray-900"
        SFDFSMDDSMW="font-semibold"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTC2="text-gray-500"
        SBTWE2="font-normal"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gray-900"
        TWW32="font-extrabold"
        G2EEQ={undefined}
        MVTTT={undefined} />
      <Feature1Video
        AMEFF={null}
        ANLEFEF="SmoothlyAppear"
        BGCR="bg-zinc-900"
        data={{
          feature: [
            {
              alt: 'video alt text',
              featureDescription: "we offer versatile private dining options to accommodate various group sizes and preferences. Whether you're planning an intimate gathering, a business meeting, or a celebratory event, our spaces can be tailored to suit your needs. Enjoy a personalized dining experience in a cozy yet luxurious setting, where every detail is designed to make your occasion special and memorable. ",
              featureTitle: '2nd Floor - Royal Cuisine',
              featureVideoURL: 'https://heyboss-component-library-images.s3.amazonaws.com/second_floor_video_20b37ca10f.mp4?updated_at=2024-10-28T03:45:20.779Z',
              hasControl: false,
              isPlayLoop: true,
              isVideoAutoplay: true,
              videoCaption: '',
              videoPos: 'right',
              VOOP: ''
            }
          ],
          SBTT: '',
          title: ''
        }}
        FBWED="w-180"
        FDDRFESMD="text-lg"
        FDDRFESSMD="text-lg"
        FDDFS="tracking-normal"
        FDDRFESSMDZ="text-zinc-300"
        FDDRFESSMDX="font-light"
        FDDRFESSMMDD="text-4xl"
        FDDRFESSMMDDMS="text-3xl"
        FTFSS="tracking-normal"
        FTTTCR="text-gold"
        FTFSSFS="text-sm"
        FTFSSFSP="tracking-normal"
        FTFSSFSW="font-normal"
        FTFSSFSC="text-gray-500"
        FTTTCRWE="font-semibold"
        GCR1R="text-zinc-800"
        GR1EE
        G2CRRE="text-gray-200"
        HMD="py-20"
        HSM="py-14"
        IBCCGC="bg-indigo-500"
        ICC="text-white"
        ICEEEA
        SBFMD="text-base"
        SBFMDS="text-base"
        SBFMDSS="tracking-normal"
        SBFMDSC="text-gray-500"
        SBFMDSW="font-normal"
        SBFMDSWMD="text-lg"
        SBFMDSWSM="text-lg"
        SBFMDSWSMFS="tracking-normal"
        SBFMDSWSMTC="text-gray-900"
        SFEEWE="font-semibold"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBTC2="text-gray-500"
        SBTWE2="font-normal"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFFSP="tracking-tight"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gold"
        TWW32="font-extrabold"
        G2EEQ={undefined}
        VRHQ={undefined}
        VRHQD={undefined}
        MVTTT={undefined}
      />
      <Team2
        SNCIOC="text-gray-400"
        SNSIhC2="text-gray-500"
        SNSIW="w-6"
        AMEFF="null"
        ANLEFEF="FlyingEffect"
        BGCR="bg-zinc-900"
        BPDF={1}
        BPLGG={2}
        BPMDD={2}
        BPSMM={1}
        data={{
          people: [
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/2_F_room_1_c38cb2ad89.jpg?updated_at=2024-10-28T03:51:23.942Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 4 people',
              role: '2nd Floor'
            },
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/2_F_room_3_4c57ef3356.jpg?updated_at=2024-10-28T03:51:24.153Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 16 people',
              role: '2nd Floor'
            },
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/2_F_room_2_d0ef8e62a4.jpg?updated_at=2024-10-28T03:51:23.726Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 34 people',
              role: '2nd Floor'
            },
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/2_F_room_4_995d1a0312.jpg?updated_at=2024-10-28T03:51:24.426Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 40 people',
              role: '2nd Floor'
            }
          ],
          SBTT: '',
          title: ''
        }}
        HMD="py-8"
        HSM="py-8"
        ICSEEQ
        ILKEE
        ISEEWS
        LFSSMD="text-base"
        LFSSSM="text-base"
        LFSSSS="tracking-normal"
        LFSSSSE="font-normal"
        LFSSSSETCX="text-indigo-800"
        TLFSSSSETCX="text-indigo-500"
        PSNFSMD="text-xl"
        PSNFSSM="text-lg"
        PSNFSSP="tracking-normal"
        OSNEFW="font-semibold"
        OSNEFWMD="text-left"
        OSNEFWSM="text-left"
        OSNEFWSMT="text-gold"
        OSNEFWSMTMD="text-lg"
        OSNEFWSMTSM="text-base"
        OSNEFWSMTFSD="tracking-normal"
        OSNEFWSMTFSDW="font-medium"
        OSNEFWSMTFSDWC="text-zinc-300"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBTFWQ="font-normal"
        SBMW2="max-w-3xl"
        SBTC2="text-gray-300"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFFSP="tracking-normal"
        TFWWET="font-extrabold"
        TMW3="max-w-3xl"
        TSBAAMDE="text-left"
        TSBAAMDSM="text-left"
        TECCT3="text-gold"
        BPXXLL={undefined}
        BPXXXLE={undefined}
        MVTTT={undefined}
      />
      <Feature1Video
        AMEFF={null}
        ANLEFEF="SmoothlyAppear"
        BGCR="bg-zinc-900"
        data={{
          feature: [
            {
              alt: 'video alt text',
              featureDescription: "Our spacious venue is perfect for larger groups, offering a warm and welcoming setting for everyone to enjoy a royal Korean dining experience and a traditional meal filled the table together. Whether it's a company dinner, family reunion, or a big celebration, we ensure that every occasion is memorable with the authentic flavors of Korea.",
              featureTitle: '3rd Floor - Private Event',
              featureVideoURL: 'https://heyboss-component-library-images.s3.amazonaws.com/history_video_2_c082c508de.mp4?updated_at=2024-10-11T03:55:17.668Z',
              hasControl: false,
              isPlayLoop: true,
              isVideoAutoplay: true,
              videoCaption: '',
              videoPos: 'right',
              VOOP: ''
            }
          ],
          SBTT: '',
          title: ''
        }}
        FBWED="w-180"
        FDDRFESMD="text-lg"
        FDDRFESSMD="text-lg"
        FDDFS="tracking-normal"
        FDDRFESSMDZ="text-zinc-300"
        FDDRFESSMDX="font-light"
        FDDRFESSMMDD="text-4xl"
        FDDRFESSMMDDMS="text-3xl"
        FTFSS="tracking-normal"
        FTTTCR="text-gold"
        FTFSSFS="text-sm"
        FTFSSFSP="tracking-normal"
        FTFSSFSW="font-normal"
        FTFSSFSC="text-gray-500"
        FTTTCRWE="font-semibold"
        GCR1R="text-zinc-800"
        GR1EE
        G2CRRE="text-gray-200"
        HMD="py-20"
        HSM="py-14"
        IBCCGC="bg-indigo-500"
        ICC="text-white"
        ICEEEA
        SBFMD="text-base"
        SBFMDS="text-base"
        SBFMDSS="tracking-normal"
        SBFMDSC="text-gray-500"
        SBFMDSW="font-normal"
        SBFMDSWMD="text-lg"
        SBFMDSWSM="text-lg"
        SBFMDSWSMFS="tracking-normal"
        SBFMDSWSMTC="text-gray-900"
        SFEEWE="font-semibold"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBTC2="text-gray-500"
        SBTWE2="font-normal"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFFSP="tracking-tight"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gold"
        TWW32="font-extrabold"
        G2EEQ={undefined}
        VRHQ={undefined}
        VRHQD={undefined}
        MVTTT={undefined}
      />
      <Team2
        SNCIOC="text-gray-400"
        SNSIhC2="text-gray-500"
        SNSIW="w-6"
        AMEFF="null"
        ANLEFEF="FlyingEffect"
        BGCR="bg-zinc-900"
        BPDF={1}
        BPLGG={2}
        BPMDD={2}
        BPSMM={1}
        data={{
          people: [
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/3_F_room_1_e1795f407d.jpg?updated_at=2024-10-28T03:51:23.350Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 10 people',
              role: '3rd Floor'
            },
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/3_F_room_2_1a2175a9b2.jpg?updated_at=2024-10-28T03:51:23.485Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 10 people',
              role: '3rd Floor'
            },
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/3_F_room_3_60efcfba01.jpg?updated_at=2024-10-28T03:51:24.591Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 36 people',
              role: '3rd Floor'
            },
            {
              SNS: [],
              IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/3_F_room_4_0819e6c05b.jpg?updated_at=2024-10-28T03:51:24.684Z',
              linkText: '',
              linkURL: '#',
              name: 'Capacity: Up to 78 people',
              role: '3rd Floor'
            }
          ],
          SBTT: '',
          title: ''
        }}
        HMD="py-20"
        HSM="py-20"
        ICSEEQ
        ILKEE
        ISEEWS
        LFSSMD="text-base"
        LFSSSM="text-base"
        LFSSSS="tracking-normal"
        LFSSSSE="font-normal"
        LFSSSSETCX="text-indigo-800"
        TLFSSSSETCX="text-indigo-500"
        PSNFSMD="text-xl"
        PSNFSSM="text-lg"
        PSNFSSP="tracking-normal"
        OSNEFW="font-semibold"
        OSNEFWMD="text-left"
        OSNEFWSM="text-left"
        OSNEFWSMT="text-gold"
        OSNEFWSMTMD="text-lg"
        OSNEFWSMTSM="text-base"
        OSNEFWSMTFSD="tracking-normal"
        OSNEFWSMTFSDW="font-medium"
        OSNEFWSMTFSDWC="text-zinc-300"
        SBFSMD="text-xl"
        SBTFSSM2="text-lg"
        SBTFS2="tracking-normal"
        SBTFWQ="font-normal"
        SBMW2="max-w-3xl"
        SBTC2="text-gray-500"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFFSP="tracking-normal"
        TFWWET="font-extrabold"
        TMW3="max-w-3xl"
        TSBAAMDE="text-left"
        TSBAAMDSM="text-left"
        TECCT3="text-gray-900"
        BPXXLL={undefined}
        BPXXXLE={undefined}
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
