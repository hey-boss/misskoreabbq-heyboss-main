import Feature1Video from '../components/Feature1Video';
import Feature20 from '../components/Feature20';
import Footer1 from '../components/Footer1';
import Header2N1 from '../components/Header2N1';
import HeroBackground2 from '../components/HeroBackground2';
import Intro2 from '../components/Intro2';
import LayoutWithTawk from '../components/LayoutWithTawk';
import Step3 from '../components/Step3';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';

const IndexPage = () => {
  return (
    <LayoutWithTawk
      headerInfo={{
        title: 'History | miss KOREA BBQ | 15+ Years of Korean BBQ & Royal Cuisine',
        metaTag: {
          description:
            'Discover the rich history of miss KOREA BBQ, a Korean BBQ and royal cuisine restaurant with over 15 years of tradition. Learn how we bring authentic Korean flavors to your table.',
          keywords:
            'history of Korean BBQ, Korean royal cuisine, restaurant history, 15 years of tradition, Korean BBQ heritage, authentic Korean dining, Korean restaurant story, Korean food culture, traditional Korean dining experience',
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
      <Feature1Video
        AMEFF={null}
        ANLEFEF="SmoothlyAppear"
        BGCR="bg-zinc-900"
        data={{
          feature: [
            {
              alt: 'video alt text',
              featureDescription: "Since 2009, missKOREA BBQ has set the standard for Korean cuisine in New York City. From a humble start to a revered Manhattan mainstay, we've earned acclaim from media and critics for our authentic and innovative dishes.",
              featureTitle: 'Leading Korean Restaurant - Since 2009',
              featureVideoURL: 'https://heyboss-component-library-images.s3.amazonaws.com/Untitled_design_158bb66512.mp4?updated_at=2024-10-11T03:32:15.599Z',
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
        FBWED="w-108"
        FDDRFESMD="text-lg"
        FDDRFESSMD="text-lg"
        FDDFS="tracking-normal"
        FDDRFESSMDZ="text-zinc-300"
        FDDRFESSMDX="font-light"
        FDDRFESSMMDD="text-5xl"
        FDDRFESSMMDDMS="text-4xl"
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
        HMD="py-40"
        HSM="py-24"
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
      <Step3
        AMEFF="null"
        ANLEFEF="FlyingEffect"
        BGCR="bg-zinc-900"
        CLMNWMD="w-156"
        data={{
          IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/beef_jar_bcd8c57c9e.jpg?updated_at=2024-09-04T02:56:37.186Z',
          steps: [
            {
              iconURL: 'ShieldExclamationIcon',
              stepDescription: "Founder and CEO Sophia Lee, who transitioned from being a schoolteacher to the restaurant industry, opened her first restaurant in 2002 with a passion to share the beauty of her home country's cuisine. She aimed to introduce the world to the elegance of Korean food and to provide her customers with high-quality dishes and friendly service.",
              stepTitle: '2002 - Opening of the First Restaurant'
            },
            {
              iconURL: 'LightningBoltIcon',
              stepDescription: "missKOREA BBQ opened its doors in Manhattan's Koreatown, New York. The menu, which reinterpreted traditional Korean cuisine with a modern touch, quickly gained popularity among both locals and tourists, leading to rapid growth.",
              stepTitle: '2009 - Opening of missKOREA BBQ in New York'
            },
            {
              iconURL: 'MoonIcon',
              stepDescription: 'missKOREA BBQ launched its Facebook account, becoming a pioneer in SNS marketing by engaging with customers in real-time and hosting various events through social media. This approach helped the brand stay connected with its audience and build a strong online presence.',
              stepTitle: "2010 - Creation of missKOREA BBQ's Social Media Account on Facebook"
            },
            {
              iconURL: 'UserCircleIcon',
              stepDescription: 'missKOREA BBQ expanded its SNS marketing by launching an Instagram account. Through visual content, the brand engaged with customers in real-time and hosted various events, further strengthening its image and visibility.',
              stepTitle: "2011 - Creation of missKOREA BBQ's Social Media Account on Instagram"
            }
          ],
          SBTT: 'Milestones in our history that has made this journey special.',
          title: 'Our History'
        }}
        HMD="py-0"
        HSM="py-0"
        STPMD="text-sm"
        STPSM="text-sm"
        STPWT="font-normal"
        STPWTC="text-gray-300"
        STPWCL="bg-zinc-700"
        STPWCC="bg-gold"
        STPWCCS="w-3"
        STPWCFS="text-base"
        STPWCFCT="text-transparent"
        STPWCFAMD="text-left"
        STPWCFASM="text-left"
        STPWCFSMD="text-xl"
        STPWCFSSSM="text-xl"
        STEMOWW="font-medium"
        STEMOWWTC="text-gold"
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFWQ="font-normal"
        SBTC2="text-gray-300"
        TFSMDD="text-4xl"
        TFSSMS="text-3xl"
        TFWWET="font-extrabold"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-gold"
        MVTTT={undefined}
      />
      <Step3
        AMEFF="null"
        ANLEFEF="FlyingEffect"
        BGCR="bg-zinc-900"
        CLMNWMD="w-156"
        data={{
          IMGRR: 'https://heyboss-component-library-images.s3.amazonaws.com/bangjja_5594863_1280_408a4efef4.jpg?updated_at=2024-09-27T03:11:26.874Z',
          steps: [
            {
              iconURL: 'ShieldExclamationIcon',
              stepDescription: 'The second floor (Sun) became a refined venue for gatherings, featuring traditional Korean royal cuisine and private rooms, ideal for events like engagement ceremonies, first-birthday parties, and more.',
              stepTitle: '2013 - Expanded to the Second Floor of the Current Building'
            },
            {
              iconURL: 'LightningBoltIcon',
              stepDescription: "missKOREA BBQ was highlighted in The New York Post for its healthy side dishes and Korean BBQ. The article emphasized CEO Sophia Lee's commitment to using fresh, high-quality ingredients. It recommended the signature Claypot Galbi and traditional cold glass noodles, noting the importance of pickles and fermentation in Korean cuisine.",
              stepTitle: '2013 - Featured in The New York Post'
            },
            {
              iconURL: 'MoonIcon',
              stepDescription: 'Recognized for its authentic flavors and exceptional service, missKOREA BBQ was featured in the New York Michelin Guide.',
              stepTitle: '2015 - Featured in the New York Michelin Guide'
            },
            {
              iconURL: 'UserCircleIcon',
              stepDescription: 'Recognized for its authentic flavors and exceptional service, missKOREA BBQ was featured in the New York Michelin Guide.',
              stepTitle: '2016 - Featured in the New York Michelin Guide'
            },
            {
              iconURL: 'UserCircleIcon',
              stepDescription: 'Recognized for its authentic flavors and exceptional service, missKOREA BBQ was featured in the New York Michelin Guide.                ',
              stepTitle: '2018 - Featured in the New York Michelin Guide'
            },
            {
              iconURL: 'UserCircleIcon',
              stepDescription: 'missKOREA joined the 2018 Asia Bites event to showcase authentic Korean food to New Yorkers and tourists.',
              stepTitle: '2018 - Participation in Asia Bites Event'
            },
            {
              iconURL: 'UserCircleIcon',
              stepDescription: 'missKOREA BBQ has established itself as a leading Korean restaurant in New York, maintaining the authenticity of Korean cuisine while continuously developing new menu items and innovating its services.                ',
              stepTitle: 'Present - Preserving Tradition and Innovation in Korean Cuisine'
            }
          ],
          SBTT: '',
          title: ''
        }}
        HMD="py-0"
        HSM="py-0"
        STPMD="text-sm"
        STPSM="text-sm"
        STPWT="font-normal"
        STPWTC="text-gray-300"
        STPWCL="bg-zinc-700"
        STPWCC="bg-gold"
        STPWCCS="w-3"
        STPWCFS="text-base"
        STPWCFCT="text-transparent"
        STPWCFAMD="text-left"
        STPWCFASM="text-left"
        STPWCFSMD="text-xl"
        STPWCFSSSM="text-xl"
        STEMOWW="font-medium"
        STEMOWWTC="text-gold"
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFWQ="font-normal"
        SBTC2="text-zinc-900"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFWWET="font-semibold"
        TSBAAMDE="text-center"
        TSBAAMDSM="text-center"
        TECCT3="text-zinc-900"
        MVTTT={undefined}
      />
      <Feature20
        AMEFF={null}
        ANLEFEF={null}
        BGCR="bg-zinc-900"
        bTARRAC="text-zinc-900"
        BTAWW="font-semibold"
        CTRW="bg-gold"
        BTAWWFXS="tracking-normal"
        BFWET="py-2"
        BXT="bg-gold"
        BXTTCCRS="rounded-full"
        BTCEDD="text-zinc-900"
        EGEW="px-10"
        data={{
          features: [
            {
              buttonLink: '/reservation',
              buttonText: 'Make Your Reservation',
              featureImageAlt: 'Quote author 1',
              imageURLFeatures: 'https://heyboss-component-library-images.s3.amazonaws.com/Copy_of_Website_feature_image_b5f39b5be1.svg?updated_at=2024-10-11T02:56:12.941Z',
              imageURLQuoteAuthor: '',
              quote: '“ We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can. ”',
              quoteAuthorAlt: 'Quote author 1',
              SBTT: "Every dish at missKOREA BBQ tells a story, blending Korea's rich culinary traditions with exceptional ingredients. Our curated menu honors the true essence of Korean cuisine.",
              title: 'Flavor, History, & Experience'
            },
            {
              buttonLink: '/menu',
              buttonText: 'View Menu',
              imageURLFeatures: 'https://heyboss-component-library-images.s3.amazonaws.com/Copy_of_Website_feature_image_6ad18c9dee.svg?updated_at=2024-09-27T04:45:50.832Z',
              imageURLQuoteAuthor: '',
              SBTT: "At miss KOREA BBQ, we believe that food is more than just a meal—it's a journey. Each dish is made with the finest ingredients, carefully prepared to honor the traditions of Korea, while adding a touch of our own creativity. It's a dining experience made for sharing, laughing, and creating lasting memories.",
              title: 'Authenticity of the Cuisine'
            }
          ]
        }}
        F1BGCR1="bg-zinc-900"
        F2BGCR1="from-zinc-900"
        F2BGCR1H="bg-transparent"
        HMD="py-40"
        HSM="py-24"
        Q1TCR="text-slate-400"
        Q2TCR="text-slate-500"
        Q2TCRMD="text-base"
        Q2TCRMSM="text-base"
        Q2TCRMFS="tracking-normal"
        Q2TCRMFW="font-normal"
        Q2TCRMTC="text-zinc-300"
        Q22CRMTC="text-zinc-300"
        SBFSMD="text-lg"
        SBTFSSM2="text-base"
        SBTFS2="tracking-normal"
        SBTFWQ="font-normal"
        T1TCC3="text-gold"
        T2TC3="text-gold"
        TFSMDD="text-5xl"
        TFSSMS="text-4xl"
        TFFSP="tracking-normal"
        TFWWET="font-semibold"
        TSBTBQAS="text-left"
        TSBTBQS={undefined}
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
