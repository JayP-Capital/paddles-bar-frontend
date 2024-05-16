import { _classes } from '../utilities/helpers';
import styles from '../styles/modules/Home.module.scss';
import HoursSection from '../components/HoursSection';
import Image from 'next/image';

const cl = _classes(styles);

function Home(props) {
  const page = {};
  const renderFaqs = () => (
    <div preset={'fadeup'} className={cl('faqs')}>
      <h1>FAQ</h1>
      <ol>
        {props?.page?.fieldgroup2?.map((item, index) => {
          return (
            <li key={index}>
              <h2 className={cl('question')}>{item?.h1}</h2>
              <div
                className={cl('answer')}
                dangerouslySetInnerHTML={{ __html: item.h2 }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
  return (
    <div className={cl('_')}>
      <div className={cl('hero')}>
        <Image
          src={props.page.fieldgroup1?.[0].image1}
          alt=""
          width={1300}
          height={850}
        />
      </div>
      <div className={cl('faqs__section')}>
        <div className={cl('container')}>{renderFaqs()}</div>
      </div>
      <div className={cl('hours__section')}>
        <HoursSection />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3001/api/items/1');
    if (!res.ok) {
      // Handle HTTP errors
      console.error(`Error fetching data: ${res.status} ${res.statusText}`);
      return { notFound: true };
    }
    const page = await res.json();
    return {
      props: {
        page,
      },
    };
  } catch (error) {
    // Handle fetch errors
    console.error('Fetch error:', error);
    return { notFound: true };
  }
}


export default Home;
