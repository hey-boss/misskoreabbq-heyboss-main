import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Blogs from './misskorea_blog_posts.json';
import LayoutWithTawk from '../components/LayoutWithTawk';
import { cormorant_Garamond } from '../components/fonts/CormorantGaramondFont';
import Blog4 from '../components/Blog4';
import Spinner from '../components/Spinner';
import Intro2 from '../components/Intro2';
import Header2N1 from '../components/Header2N1';

const BlogContentPage = () => {
  const searchParams = useSearchParams();
  const linkURL = searchParams.get('id');
  const [filteredBlog, setFilteredBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (linkURL) {
      const foundBlog = Blogs.articles.filter((article) => article.linkURL.toString() === linkURL);
      setFilteredBlog(foundBlog);
    }
    setIsLoading(false);
  }, [linkURL]);

  // When the loading
  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  // When the blog articles don't exist
  if (!filteredBlog || filteredBlog.length === 0) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <LayoutWithTawk
        headerInfo={{
          title: 'test',
          metaTag: {
            description: 'test website',
            keywords: 'test',
            author: 'HEYBOSS https://www.heyboss.us/'
          },
          favicon:
            'https://heyboss-component-library-images.s3.amazonaws.com/ko_associate_favicon.png'
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
        <Blog4
          AMEFF={null}
          BGCR="bg-zinc-900"
          html={filteredBlog[0].contentDetail}
          GPCCR="text-gray-200"
          HMD="py-40"
          HSM="py-32"
          GREEE={undefined}
          MVTTT={undefined}
        />
      </LayoutWithTawk>
    </>
  );
};
export default BlogContentPage;
