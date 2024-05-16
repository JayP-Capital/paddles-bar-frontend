import React from 'react';
import Head from 'next/head';
import { _classes } from '../utilities/helpers';
import styles from '../styles/modules/Header.module.scss';
import Link from 'next/link';
import Nav from './Nav';
import Marquee from './Marquee';
const cl = _classes(styles);

export default function Header(props) {
  return (
    <>
      <Head>
        <title>Paddles - World Class Ping Pong</title>
        <meta
          name="description"
          content="Testing project for Once Upon a Time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cl('marquee')}>
        <Link
          href={'https://www.countryliving.com/life/a27452412/best-dad-jokes/'}
        >
          <Marquee />
        </Link>
      </div>
      <div className={cl('_')}>
        <Link href="/" className={cl('logo')}>
          <svg
            width="81"
            height="61"
            viewBox="0 0 81 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.52 41.736L9.072 41.256L7.368 49.272C8.136 49.208 8.84 48.872 9.48 48.264C10.136 47.656 10.648 46.904 11.016 46.008C11.384 45.112 11.568 44.232 11.568 43.368C11.568 42.408 11.32 41.624 10.824 41.016C10.328 40.408 9.584 40.104 8.592 40.104C6.64 40.104 5.112 40.616 4.008 41.64C2.92 42.664 2.376 44.096 2.376 45.936C2.376 46.528 2.432 46.944 2.544 47.184C2.656 47.408 2.712 47.536 2.712 47.568C1.848 47.568 1.2 47.392 0.768 47.04C0.352 46.672 0.144 46.072 0.144 45.24C0.144 44.216 0.56 43.224 1.392 42.264C2.24 41.288 3.32 40.504 4.632 39.912C5.944 39.304 7.256 39 8.568 39C9.832 39 10.888 39.216 11.736 39.648C12.584 40.08 13.208 40.656 13.608 41.376C14.024 42.08 14.232 42.864 14.232 43.728C14.232 44.768 13.944 45.784 13.368 46.776C12.808 47.768 12 48.584 10.944 49.224C9.888 49.848 8.672 50.16 7.296 50.16H7.176L5.712 57H2.256L5.52 41.736ZM16.6378 57.144C15.7258 57.144 14.9658 56.832 14.3578 56.208C13.7498 55.584 13.4458 54.608 13.4458 53.28C13.4458 52.096 13.6778 50.856 14.1418 49.56C14.6218 48.248 15.3258 47.144 16.2538 46.248C17.1978 45.336 18.3178 44.88 19.6138 44.88C20.2698 44.88 20.7578 44.992 21.0778 45.216C21.3978 45.44 21.5578 45.736 21.5578 46.104V46.272L21.8218 45H25.2778L23.5498 53.16C23.4858 53.4 23.4538 53.656 23.4538 53.928C23.4538 54.616 23.7818 54.96 24.4378 54.96C24.8858 54.96 25.2698 54.752 25.5898 54.336C25.9258 53.92 26.1898 53.376 26.3818 52.704H27.3898C26.7978 54.432 26.0618 55.608 25.1818 56.232C24.3178 56.84 23.4458 57.144 22.5658 57.144C21.8938 57.144 21.3498 56.96 20.9338 56.592C20.5338 56.208 20.2938 55.656 20.2138 54.936C19.7498 55.592 19.2298 56.128 18.6538 56.544C18.0938 56.944 17.4218 57.144 16.6378 57.144ZM18.1978 54.816C18.5978 54.816 18.9898 54.632 19.3738 54.264C19.7738 53.88 20.0458 53.36 20.1898 52.704L21.3418 47.28C21.3418 47.072 21.2618 46.872 21.1018 46.68C20.9418 46.472 20.6938 46.368 20.3578 46.368C19.7178 46.368 19.1418 46.744 18.6298 47.496C18.1178 48.232 17.7178 49.128 17.4298 50.184C17.1418 51.224 16.9978 52.144 16.9978 52.944C16.9978 53.744 17.1098 54.256 17.3338 54.48C17.5738 54.704 17.8618 54.816 18.1978 54.816ZM29.2706 57.144C28.3586 57.144 27.5986 56.832 26.9906 56.208C26.3826 55.584 26.0786 54.608 26.0786 53.28C26.0786 52.096 26.3106 50.856 26.7746 49.56C27.2546 48.248 27.9586 47.144 28.8866 46.248C29.8306 45.336 30.9506 44.88 32.2466 44.88C32.9026 44.88 33.3906 44.992 33.7106 45.216C34.0306 45.44 34.1906 45.736 34.1906 46.104V46.2L35.3666 40.68L38.9186 40.2L36.1586 53.16C36.0946 53.4 36.0626 53.656 36.0626 53.928C36.0626 54.248 36.1346 54.48 36.2786 54.624C36.4386 54.752 36.6946 54.816 37.0466 54.816C37.4946 54.816 37.8786 54.624 38.1986 54.24C38.5346 53.856 38.7986 53.344 38.9906 52.704H39.9986C39.0226 55.568 37.4146 57 35.1746 57C34.5186 57 33.9826 56.824 33.5666 56.472C33.1666 56.12 32.9186 55.608 32.8226 54.936C32.4066 55.576 31.9026 56.104 31.3106 56.52C30.7346 56.936 30.0546 57.144 29.2706 57.144ZM30.8306 54.816C31.2146 54.816 31.5986 54.64 31.9826 54.288C32.3826 53.936 32.6546 53.448 32.7986 52.824V52.704L33.9746 47.208C33.8306 46.648 33.5026 46.368 32.9906 46.368C32.3506 46.368 31.7746 46.744 31.2626 47.496C30.7506 48.232 30.3506 49.128 30.0626 50.184C29.7746 51.224 29.6306 52.144 29.6306 52.944C29.6306 53.744 29.7426 54.256 29.9666 54.48C30.2066 54.704 30.4946 54.816 30.8306 54.816ZM41.88 57.144C40.968 57.144 40.208 56.832 39.6 56.208C38.992 55.584 38.688 54.608 38.688 53.28C38.688 52.096 38.92 50.856 39.384 49.56C39.864 48.248 40.568 47.144 41.496 46.248C42.44 45.336 43.56 44.88 44.856 44.88C45.512 44.88 46 44.992 46.32 45.216C46.64 45.44 46.8 45.736 46.8 46.104V46.2L47.976 40.68L51.528 40.2L48.768 53.16C48.704 53.4 48.672 53.656 48.672 53.928C48.672 54.248 48.744 54.48 48.888 54.624C49.048 54.752 49.304 54.816 49.656 54.816C50.104 54.816 50.488 54.624 50.808 54.24C51.144 53.856 51.408 53.344 51.6 52.704H52.608C51.632 55.568 50.024 57 47.784 57C47.128 57 46.592 56.824 46.176 56.472C45.776 56.12 45.528 55.608 45.432 54.936C45.016 55.576 44.512 56.104 43.92 56.52C43.344 56.936 42.664 57.144 41.88 57.144ZM43.44 54.816C43.824 54.816 44.208 54.64 44.592 54.288C44.992 53.936 45.264 53.448 45.408 52.824V52.704L46.584 47.208C46.44 46.648 46.112 46.368 45.6 46.368C44.96 46.368 44.384 46.744 43.872 47.496C43.36 48.232 42.96 49.128 42.672 50.184C42.384 51.224 42.24 52.144 42.24 52.944C42.24 53.744 42.352 54.256 42.576 54.48C42.816 54.704 43.104 54.816 43.44 54.816ZM53.9854 57.144C53.2174 57.144 52.5934 56.904 52.1134 56.424C51.6494 55.944 51.4174 55.224 51.4174 54.264C51.4174 53.864 51.4814 53.344 51.6094 52.704L54.1774 40.68L57.7294 40.2L54.9694 53.16C54.9054 53.4 54.8734 53.656 54.8734 53.928C54.8734 54.248 54.9454 54.48 55.0894 54.624C55.2494 54.752 55.5054 54.816 55.8574 54.816C56.3214 54.816 56.7534 54.624 57.1534 54.24C57.5534 53.84 57.8414 53.328 58.0174 52.704H59.0254C58.4334 54.432 57.6734 55.608 56.7454 56.232C55.8174 56.84 54.8974 57.144 53.9854 57.144ZM61.4398 57.144C60.2558 57.144 59.3358 56.84 58.6798 56.232C58.0238 55.608 57.6958 54.64 57.6958 53.328C57.6958 52.224 57.9118 51.008 58.3438 49.68C58.7758 48.352 59.4798 47.208 60.4558 46.248C61.4318 45.272 62.6718 44.784 64.1758 44.784C65.9358 44.784 66.8158 45.552 66.8158 47.088C66.8158 47.984 66.5598 48.808 66.0478 49.56C65.5358 50.312 64.8558 50.92 64.0078 51.384C63.1598 51.832 62.2558 52.088 61.2958 52.152C61.2638 52.632 61.2478 52.952 61.2478 53.112C61.2478 53.896 61.3838 54.432 61.6558 54.72C61.9278 54.992 62.3678 55.128 62.9758 55.128C63.8398 55.128 64.5758 54.928 65.1838 54.528C65.8078 54.128 66.4878 53.52 67.2238 52.704H68.0398C66.2638 55.664 64.0638 57.144 61.4398 57.144ZM61.4878 51C62.0798 50.968 62.6398 50.76 63.1678 50.376C63.7118 49.992 64.1438 49.504 64.4638 48.912C64.7998 48.32 64.9678 47.696 64.9678 47.04C64.9678 46.384 64.7678 46.056 64.3678 46.056C63.7918 46.056 63.2238 46.56 62.6638 47.568C62.1198 48.576 61.7278 49.72 61.4878 51ZM69.9548 57.144C69.1868 57.144 68.5387 57 68.0107 56.712C67.4827 56.408 67.0907 56.024 66.8347 55.56C66.5787 55.08 66.4507 54.584 66.4507 54.072C66.4507 53.544 66.5787 53.088 66.8347 52.704C67.0747 52.304 67.3708 52.016 67.7228 51.84C68.3468 50.72 68.8908 49.592 69.3548 48.456C69.8188 47.304 70.2588 46.064 70.6748 44.736L74.2268 44.256C74.3068 46.304 74.4428 48.52 74.6348 50.904C74.7148 51.864 74.7548 52.56 74.7548 52.992C74.7548 53.968 74.5068 54.768 74.0108 55.392C73.5148 56.016 72.8988 56.464 72.1628 56.736C71.4428 57.008 70.7068 57.144 69.9548 57.144ZM69.1868 55.248C69.7788 55.248 70.2748 55.072 70.6748 54.72C71.0748 54.368 71.2748 53.8 71.2748 53.016C71.2748 52.536 71.2268 51.864 71.1308 51C70.9708 49.176 70.8668 47.952 70.8188 47.328C70.4348 48.592 69.7868 50.104 68.8748 51.864C69.2428 52.056 69.4268 52.336 69.4268 52.704C69.4268 53.008 69.3228 53.28 69.1148 53.52C68.9228 53.76 68.6748 53.88 68.3708 53.88C68.0348 53.88 67.8188 53.776 67.7228 53.568C67.7228 54.144 67.8348 54.568 68.0588 54.84C68.2988 55.112 68.6748 55.248 69.1868 55.248Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.1484 28.3412C34.115 29.5274 39.4357 28.0698 43.7089 24.236C49.4641 19.0726 51.1398 11.5543 47.4516 7.4434C43.7635 3.33254 36.1081 4.18578 30.3529 9.34921C26.0797 13.183 24.0555 18.315 24.806 22.3865L28.4049 19.1577C29.2271 18.42 30.4916 18.4886 31.2292 19.3107L33.9004 22.2881C34.638 23.1103 34.5695 24.3747 33.7473 25.1124L30.1484 28.3412Z"
              fill="#F5A623"
            />
            <rect
              x="29.8171"
              y="19.2342"
              width="6"
              height="19"
              rx="2"
              transform="rotate(48.1025 29.8171 19.2342)"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.1484 28.3412C60.115 29.5274 65.4357 28.0698 69.7089 24.236C75.4641 19.0726 77.1398 11.5543 73.4516 7.4434C69.7635 3.33252 62.1081 4.18578 56.3529 9.34921C52.0797 13.183 50.0555 18.315 50.806 22.3865L54.4049 19.1577C55.2271 18.42 56.4916 18.4886 57.2292 19.3107L59.9004 22.2881C60.6381 23.1103 60.5695 24.3747 59.7473 25.1124L56.1484 28.3412Z"
              fill="#F5A623"
            />
            <rect
              x="55.8171"
              y="19.2342"
              width="6"
              height="19"
              rx="2"
              transform="rotate(48.1025 55.8171 19.2342)"
              fill="white"
            />
          </svg>
        </Link>
        <div className={cl('nav_container')}>
          <Nav />
        </div>
      </div>
    </>
  );
}