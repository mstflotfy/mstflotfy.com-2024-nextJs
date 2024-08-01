import { gloria } from "@/app/layout"
import { cn } from "@/lib/utils"
import { FaExternalLinkAlt } from "react-icons/fa"

interface DeviceFrameProps {
  src?: string;
  title?: string;
  name?: string;
  ariaLabel?: string;
  small?: boolean;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  src='/', 
  title='', 
  name='', 
  ariaLabel='an iframe that showcases an app i created',
  small = false
}) => {
  return (
    <div
      aria-label={`${name} app`}
      className="z-10"
    >
      <div className={
        cn(
          "relative w-[320px] mx-auto",
          !small && "md:w-[368px]"
          )
      }
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 428 908"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_50770_11451)">
            <rect x="8" y="8" width="412" height="892" rx="18" fill="var(--m-3-sys-light-primary-fixed)"></rect>
            <path
              d="M34.0781 43.7012H34.2148C34.8438 43.7012 35.3678 43.6191 35.7871 43.4551C36.2109 43.2865 36.5482 43.054 36.7988 42.7578C37.0495 42.4616 37.2295 42.113 37.3389 41.7119C37.4482 41.3109 37.5029 40.8757 37.5029 40.4062V38.6904C37.5029 38.2848 37.4596 37.9294 37.373 37.624C37.291 37.3141 37.1725 37.0566 37.0176 36.8516C36.8672 36.6419 36.6917 36.4847 36.4912 36.3799C36.2952 36.2751 36.0833 36.2227 35.8555 36.2227C35.6048 36.2227 35.3792 36.2796 35.1787 36.3936C34.9827 36.5029 34.8164 36.6556 34.6797 36.8516C34.5475 37.043 34.445 37.2686 34.3721 37.5283C34.3037 37.7835 34.2695 38.057 34.2695 38.3486C34.2695 38.6221 34.3014 38.8864 34.3652 39.1416C34.4336 39.3923 34.5339 39.6156 34.666 39.8115C34.7982 40.0075 34.9645 40.1624 35.165 40.2764C35.3656 40.3903 35.6003 40.4473 35.8691 40.4473C36.1243 40.4473 36.359 40.3994 36.5732 40.3037C36.7874 40.2035 36.9743 40.069 37.1338 39.9004C37.2933 39.7318 37.4186 39.5426 37.5098 39.333C37.6009 39.1234 37.651 38.9092 37.6602 38.6904L38.2891 38.8818C38.2891 39.2282 38.2161 39.57 38.0703 39.9072C37.929 40.2399 37.7308 40.5452 37.4756 40.8232C37.2249 41.0967 36.931 41.3154 36.5938 41.4795C36.2611 41.6436 35.8988 41.7256 35.5068 41.7256C35.0329 41.7256 34.6136 41.6367 34.249 41.459C33.889 41.2767 33.5882 41.0306 33.3467 40.7207C33.1097 40.4108 32.932 40.0553 32.8135 39.6543C32.695 39.2533 32.6357 38.8317 32.6357 38.3896C32.6357 37.9111 32.7087 37.4622 32.8545 37.043C33.0003 36.6237 33.2122 36.2546 33.4902 35.9355C33.7682 35.612 34.1055 35.3613 34.502 35.1836C34.903 35.0013 35.3564 34.9102 35.8623 34.9102C36.4001 34.9102 36.8717 35.015 37.2773 35.2246C37.6829 35.4342 38.0247 35.7236 38.3027 36.0928C38.5807 36.4619 38.7904 36.8903 38.9316 37.3779C39.0729 37.8656 39.1436 38.3896 39.1436 38.9502V39.5312C39.1436 40.1191 39.0911 40.6865 38.9863 41.2334C38.8815 41.7757 38.7106 42.2793 38.4736 42.7441C38.2412 43.2044 37.9336 43.61 37.5508 43.9609C37.1725 44.3073 36.7077 44.5785 36.1562 44.7744C35.6094 44.9658 34.9668 45.0615 34.2285 45.0615H34.0781V43.7012ZM41.1019 44.1797C41.1019 43.9245 41.1885 43.7103 41.3617 43.5371C41.5349 43.3594 41.7696 43.2705 42.0658 43.2705C42.3666 43.2705 42.6013 43.3594 42.7699 43.5371C42.9431 43.7103 43.0296 43.9245 43.0296 44.1797C43.0296 44.4349 42.9431 44.6491 42.7699 44.8223C42.6013 44.9954 42.3666 45.082 42.0658 45.082C41.7696 45.082 41.5349 44.9954 41.3617 44.8223C41.1885 44.6491 41.1019 44.4349 41.1019 44.1797ZM41.1088 38.3555C41.1088 38.1003 41.1953 37.8861 41.3685 37.7129C41.5417 37.5352 41.7764 37.4463 42.0726 37.4463C42.3734 37.4463 42.6081 37.5352 42.7767 37.7129C42.9499 37.8861 43.0365 38.1003 43.0365 38.3555C43.0365 38.6107 42.9499 38.8249 42.7767 38.998C42.6081 39.1712 42.3734 39.2578 42.0726 39.2578C41.7764 39.2578 41.5417 39.1712 41.3685 38.998C41.1953 38.8249 41.1088 38.6107 41.1088 38.3555ZM46.7517 39.2783H47.7361C48.1189 39.2783 48.4356 39.2122 48.6862 39.0801C48.9415 38.9479 49.1306 38.7656 49.2536 38.5332C49.3767 38.3008 49.4382 38.0342 49.4382 37.7334C49.4382 37.4189 49.3812 37.1501 49.2673 36.9268C49.1579 36.6989 48.9893 36.5234 48.7614 36.4004C48.5381 36.2773 48.2533 36.2158 47.907 36.2158C47.6153 36.2158 47.351 36.2751 47.114 36.3936C46.8816 36.5075 46.697 36.6715 46.5603 36.8857C46.4236 37.0954 46.3552 37.346 46.3552 37.6377H44.7009C44.7009 37.109 44.8399 36.6396 45.1179 36.2295C45.3959 35.8193 45.7741 35.498 46.2527 35.2656C46.7357 35.0286 47.278 34.9102 47.8796 34.9102C48.5222 34.9102 49.0827 35.0173 49.5612 35.2314C50.0443 35.4411 50.4203 35.7555 50.6892 36.1748C50.9581 36.5941 51.0925 37.1136 51.0925 37.7334C51.0925 38.016 51.0264 38.3031 50.8943 38.5947C50.7621 38.8864 50.5661 39.153 50.3064 39.3945C50.0466 39.6315 49.723 39.8252 49.3357 39.9756C48.9483 40.1214 48.4994 40.1943 47.989 40.1943H46.7517V39.2783ZM46.7517 40.5635V39.6611H47.989C48.5723 39.6611 49.0691 39.7295 49.4792 39.8662C49.8939 40.0029 50.2312 40.1921 50.4909 40.4336C50.7507 40.6706 50.9398 40.9417 51.0583 41.2471C51.1814 41.5524 51.2429 41.876 51.2429 42.2178C51.2429 42.6826 51.1586 43.0973 50.99 43.4619C50.8259 43.8219 50.5912 44.1273 50.2859 44.3779C49.9805 44.6286 49.6228 44.8177 49.2126 44.9453C48.807 45.0729 48.365 45.1367 47.8864 45.1367C47.4581 45.1367 47.0479 45.0775 46.656 44.959C46.264 44.8405 45.9131 44.665 45.6032 44.4326C45.2933 44.1956 45.0473 43.9017 44.865 43.5508C44.6872 43.1953 44.5984 42.7852 44.5984 42.3203H46.2458C46.2458 42.6165 46.3142 42.8786 46.4509 43.1064C46.5922 43.3298 46.7881 43.5052 47.0388 43.6328C47.294 43.7604 47.5857 43.8242 47.9138 43.8242C48.2601 43.8242 48.5586 43.7627 48.8093 43.6396C49.0599 43.5166 49.2514 43.3343 49.3835 43.0928C49.5202 42.8512 49.5886 42.5596 49.5886 42.2178C49.5886 41.8304 49.5134 41.516 49.363 41.2744C49.2126 41.0329 48.9984 40.8551 48.7204 40.7412C48.4424 40.6227 48.1143 40.5635 47.7361 40.5635H46.7517ZM59.5382 39.1895V40.8164C59.5382 41.5957 59.4607 42.2611 59.3057 42.8125C59.1554 43.3594 58.9366 43.8037 58.6495 44.1455C58.3624 44.4873 58.0183 44.738 57.6173 44.8975C57.2208 45.057 56.7764 45.1367 56.2843 45.1367C55.8923 45.1367 55.5277 45.0866 55.1905 44.9863C54.8578 44.8861 54.557 44.7288 54.2882 44.5146C54.0193 44.3005 53.7891 44.0247 53.5977 43.6875C53.4109 43.3457 53.2651 42.9378 53.1602 42.4639C53.06 41.9899 53.0098 41.4408 53.0098 40.8164V39.1895C53.0098 38.4056 53.0873 37.7448 53.2423 37.207C53.3972 36.6647 53.6182 36.2249 53.9054 35.8877C54.1925 35.5459 54.5343 35.2975 54.9307 35.1426C55.3318 34.9876 55.7784 34.9102 56.2706 34.9102C56.6671 34.9102 57.0317 34.9603 57.3643 35.0605C57.7016 35.1562 58.0024 35.3089 58.2667 35.5186C58.5356 35.7282 58.7634 36.0016 58.9503 36.3389C59.1417 36.6715 59.2875 37.0749 59.3878 37.5488C59.488 38.0182 59.5382 38.5651 59.5382 39.1895ZM57.8907 41.0488V38.9434C57.8907 38.5469 57.8679 38.1982 57.8223 37.8975C57.7768 37.5921 57.7084 37.3346 57.6173 37.125C57.5307 36.9108 57.4213 36.7376 57.2891 36.6055C57.157 36.4688 57.0066 36.3708 56.838 36.3115C56.6693 36.2477 56.4802 36.2158 56.2706 36.2158C56.0154 36.2158 55.7875 36.266 55.587 36.3662C55.3865 36.4619 55.2179 36.6169 55.0811 36.8311C54.9444 37.0452 54.8396 37.3278 54.7667 37.6787C54.6983 38.0251 54.6641 38.4466 54.6641 38.9434V41.0488C54.6641 41.4499 54.6869 41.8031 54.7325 42.1084C54.7781 42.4137 54.8464 42.6758 54.9376 42.8945C55.0287 43.1087 55.1381 43.2865 55.2657 43.4277C55.3979 43.5645 55.5483 43.6647 55.7169 43.7285C55.8901 43.7923 56.0792 43.8242 56.2843 43.8242C56.544 43.8242 56.7742 43.7741 56.9747 43.6738C57.1752 43.5736 57.3438 43.4141 57.4805 43.1953C57.6173 42.972 57.7198 42.6826 57.7882 42.3271C57.8565 41.9717 57.8907 41.5456 57.8907 41.0488Z"
              fill="#1B1C1C"></path>
            <path
              opacity="0.1"
              d="M358.5 34.4167C355.1 34.4167 352.125 35.9042 350 38.2417L358.5 48.5833L367 38.2417C364.875 35.9042 361.9 34.4167 358.5 34.4167Z"
              fill="#1B1C1C"></path>
            <path d="M381.583 34.4167L367.417 48.5833H381.583V34.4167Z" fill="#1B1C1C"
            ></path>
            <path
              opacity="0.3"
              d="M393.5 34H390.5V35.5H389C388.448 35.5 388 36.0037 388 36.625V47.875C388 48.4963 388.448 49 389 49H395C395.552 49 396 48.4963 396 47.875V36.625C396 36.0037 395.552 35.5 395 35.5H393.5V34Z"
              fill="#1B1C1C"></path>
            <path
              d="M388 42C388 42.5833 388 47.3667 388 47.95C388 48.5299 388.448 49 389 49H395C395.552 49 396 48.5299 396 47.95C396 47.3667 396 42.5833 396 42H388Z"
              fill="#1B1C1C"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M214 26C207.373 26 202 31.3731 202 38C202 44.6269 207.373 50 214 50C220.627 50 226 44.6269 226 38C226 31.3731 220.627 26 214 26Z"
              fill="#161D1D"></path>
            <rect x="160" y="886" width="108" height="4" rx="2" fill="#202124"></rect>
          </g>
          <rect
            className="stroke-m3-black dark:stroke-m3-sys-light-outline-variant"
            x="4"
            y="4"
            width="420"
            height="900"
            rx="22"
            stroke="#747775"
            stroke-opacity="1"
            stroke-width="8"
          >
            <object
              data=""
              type="text/html"
              width="100"
              height="100"></object>
          </rect>
          <defs>
            <clipPath id="clip0_50770_11451">
              <rect x="8" y="8" width="412" height="892" rx="18" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="absolute top-24 bottom-16 left-0 right-0">
          <iframe 
            className="w-full h-full pl-3 pr-[0.7rem]"
            src={src}
            title={title}
            name={name}
            aria-label={ariaLabel}
          >
          </iframe>
        </div>
      </div> 
    <div
      className="flex flex-row items-center justify-center !mt-[2.2rem]"
    >
     <a
       href={src}
       target="_blank"
       rel="no-opener"
       className={
         cn(
           gloria.className,
           "text-m3-sys-light-primary flex flex-row gap-6 items-center justify-center hover:text-m3-sys-light-secondary focus:text-m3-sys-light-secondary p-2 transition"
           )
       }
     >
        Open {name} App
        <FaExternalLinkAlt />
     </a> 
    </div>
  </div>
  )
}
export default DeviceFrame