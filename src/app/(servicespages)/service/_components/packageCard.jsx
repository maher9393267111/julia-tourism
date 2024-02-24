"use client";
import React from "react";
import Link from "next/link";

export default function TransportCard({ index, trans }) {
  return (
    <div className="col-md-6">
      <div className="transport-card">
        <Link
          href={`/service/packages/${trans?._id}`}
          className="transport-img"
        >
          <img
            src={trans?.images[0] ?? "/assets/img/innerpage/sajhek.jpg"}
            //   586  343
            //   src="/assets/img/innerpage/sajhek.jpg"

            alt=""
          />
          <span>{trans?.price}$</span>
        </Link>
        <div className="transport-content">
          <h4>
            <Link href={`/service/packages/${trans?._id}`} className=" ar">
              {/* Travel to Sajek from Dhaka. */}
              {trans?.title}
            </Link>
          </h4>
          <div className="transport-type  ar">
            <h6 className=" ar">الوسائل المتاحة:</h6>
            <div className="row g-2">
              <div className="col-3">
                <div className="single-transport">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={30}
                    viewBox="0 0 50 30"
                  >
                    <path d="M44.125 12.4167L41.4351 11.9392C41.092 11.8787 40.7659 11.7373 40.4806 11.5252C40.1953 11.3131 39.9579 11.0358 39.7859 10.7134L36.0711 3.78001C35.4551 2.63294 34.5663 1.67947 33.4945 1.0158C32.4227 0.352133 31.2057 0.00174827 29.9664 0H16.9086C15.6693 0.00166413 14.4524 0.351923 13.3806 1.01544C12.3088 1.67896 11.42 2.63226 10.8039 3.77918L7.01484 10.8517C6.85724 11.1442 6.64605 11.3999 6.39384 11.6035C6.14164 11.807 5.8536 11.9544 5.54687 12.0367L2.95781 12.7267C2.31318 12.8988 1.72057 13.244 1.23634 13.7295C0.752121 14.2149 0.3924 14.8244 0.191406 15.5001C0.182812 15.5217 0.182031 15.5476 0.175 15.5701C0.0618921 15.9585 0.0029285 16.3625 0 16.7692L0 22.5001C0.00124051 23.6047 0.413189 24.6638 1.14548 25.4449C1.87778 26.226 2.87063 26.6654 3.90625 26.6668H6.78515C7.22701 27.6638 7.92531 28.5065 8.79876 29.0966C9.6722 29.6867 10.6848 30 11.7187 30C12.7527 30 13.7653 29.6867 14.6387 29.0966C15.5122 28.5065 16.2105 27.6638 16.6523 26.6668H33.3476C33.7895 27.6638 34.4878 28.5065 35.3612 29.0966C36.2347 29.6867 37.2473 30 38.2812 30C39.3151 30 40.3278 29.6867 41.2012 29.0966C42.0747 28.5065 42.773 27.6638 43.2148 26.6668H46.0937C47.1293 26.6654 48.1222 26.226 48.8545 25.4449C49.5868 24.6638 49.9987 23.6047 50 22.5001V19.8142C50.0041 18.0378 49.4152 16.3177 48.3387 14.9623C47.2622 13.6068 45.7684 12.7044 44.125 12.4167ZM47.5734 16.6667C47.8824 17.1805 48.1136 17.7429 48.2586 18.3334H47.6562C47.0364 18.3332 46.4418 18.0721 46.0015 17.6067C45.7541 17.3407 45.5647 17.0198 45.4469 16.6667H47.5734ZM1.57031 16.6667H2.90547L2.51484 18.3334H1.5625V16.7692C1.5625 16.7342 1.56953 16.7009 1.57031 16.6667ZM11.7187 28.3334C10.9462 28.3334 10.1909 28.0891 9.54855 27.6312C8.90617 27.1734 8.4055 26.5226 8.10984 25.7613C7.81419 24.9999 7.73683 24.1621 7.88755 23.3539C8.03828 22.5456 8.41031 21.8032 8.95661 21.2205C9.50291 20.6377 10.1989 20.2409 10.9567 20.0801C11.7144 19.9194 12.4998 20.0019 13.2136 20.3172C13.9274 20.6326 14.5374 21.1667 14.9667 21.8519C15.3959 22.5371 15.625 23.3427 15.625 24.1668C15.6238 25.2714 15.2118 26.3305 14.4795 27.1116C13.7472 27.8927 12.7544 28.3321 11.7187 28.3334ZM38.2812 28.3334C37.5086 28.3334 36.7534 28.0891 36.111 27.6312C35.4687 27.1734 34.968 26.5226 34.6723 25.7613C34.3767 24.9999 34.2993 24.1621 34.45 23.3539C34.6008 22.5456 34.9728 21.8032 35.5191 21.2205C36.0654 20.6377 36.7614 20.2409 37.5192 20.0801C38.2769 19.9194 39.0623 20.0019 39.7761 20.3172C40.4899 20.6326 41.0999 21.1667 41.5292 21.8519C41.9584 22.5371 42.1875 23.3427 42.1875 24.1668C42.1862 25.2714 41.7743 26.3305 41.042 27.1116C40.3097 27.8927 39.3169 28.3321 38.2812 28.3334ZM46.0937 25.0001H43.6875C43.8063 24.1693 43.7553 23.3209 43.5382 22.5131C43.3211 21.7052 42.9429 20.957 42.4295 20.3195C41.9161 19.682 41.2796 19.1704 40.5636 18.8197C39.8477 18.4689 39.0691 18.2873 38.2812 18.2873C37.4934 18.2873 36.7148 18.4689 35.9988 18.8197C35.2829 19.1704 34.6464 19.682 34.133 20.3195C33.6196 20.957 33.2414 21.7052 33.0243 22.5131C32.8071 23.3209 32.7562 24.1693 32.875 25.0001H17.125C17.2438 24.1693 17.1928 23.3209 16.9757 22.5131C16.7586 21.7052 16.3804 20.957 15.867 20.3195C15.3536 19.682 14.7171 19.1704 14.0011 18.8197C13.2852 18.4689 12.5066 18.2873 11.7187 18.2873C10.9309 18.2873 10.1523 18.4689 9.43634 18.8197C8.72037 19.1704 8.0839 19.682 7.5705 20.3195C7.0571 20.957 6.6789 21.7052 6.46177 22.5131C6.24464 23.3209 6.19372 24.1693 6.3125 25.0001H3.90625C3.28465 25.0001 2.68851 24.7367 2.24897 24.2679C1.80943 23.799 1.5625 23.1631 1.5625 22.5001V20.0001H3.125C3.29916 20.0001 3.46833 19.938 3.60563 19.8237C3.74293 19.7094 3.84049 19.5494 3.88281 19.3692L4.66406 16.0359C4.69292 15.913 4.69513 15.7847 4.67054 15.6608C4.64595 15.5369 4.59519 15.4206 4.52213 15.3207C4.44907 15.2208 4.35563 15.1401 4.24891 15.0845C4.14219 15.0289 4.025 15.0001 3.90625 15.0001H2.25703C2.55487 14.6811 2.92831 14.4544 3.3375 14.3442L5.92734 13.6534C6.43804 13.5158 6.91757 13.2701 7.3374 12.9308C7.75723 12.5915 8.10877 12.1656 8.37109 11.6784L12.1602 4.60585C12.6395 3.71385 13.3308 2.97245 14.1645 2.45642C14.9982 1.9404 15.9447 1.66799 16.9086 1.66667H29.9664C30.9303 1.66799 31.8768 1.9404 32.7105 2.45642C33.5441 2.97245 34.2355 3.71385 34.7148 4.60585L38.4289 11.5392C38.7154 12.0769 39.1109 12.5395 39.5866 12.8932C40.0622 13.2469 40.606 13.4827 41.1781 13.5834L43.8679 14.0617C44.6545 14.2005 45.4032 14.5208 46.0617 15.0001H44.5312C44.324 15.0001 44.1253 15.0879 43.9788 15.2441C43.8323 15.4004 43.75 15.6124 43.75 15.8334C43.7495 16.3807 43.8502 16.9228 44.0463 17.4286C44.2424 17.9343 44.5301 18.3939 44.8929 18.7809C45.2558 19.1679 45.6866 19.4748 46.1608 19.684C46.6349 19.8932 47.1431 20.0006 47.6562 20.0001H48.4375V22.5001C48.4375 23.1631 48.1905 23.799 47.751 24.2679C47.3115 24.7367 46.7153 25.0001 46.0937 25.0001Z" />
                    <path d="M35.5141 7.90419C35.4073 7.71467 35.2344 7.57812 35.0333 7.5246C34.8322 7.47107 34.6195 7.50495 34.4418 7.61877C34.2641 7.73259 34.1361 7.91704 34.0859 8.13153C34.0357 8.34603 34.0675 8.573 34.1742 8.76252L35.3391 10.8334H25.7812V4.16667H30.2617C30.6663 4.16785 31.0638 4.28019 31.4159 4.49286C31.768 4.70552 32.0628 5.01134 32.2719 5.38084L32.7672 6.26251C32.8739 6.45203 33.0468 6.58858 33.2479 6.6421C33.449 6.69563 33.6618 6.66175 33.8394 6.54793C34.0171 6.43411 34.1451 6.24966 34.1953 6.03517C34.2455 5.82067 34.2137 5.5937 34.107 5.40418L33.6109 4.52251C33.2625 3.90693 32.7714 3.39746 32.1847 3.04321C31.5981 2.68897 30.9358 2.50188 30.2617 2.5H25C24.7928 2.5 24.5941 2.5878 24.4476 2.74408C24.3011 2.90036 24.2187 3.11232 24.2187 3.33334V11.6667C24.2187 11.8877 24.3011 12.0997 24.4476 12.256C24.5941 12.4122 24.7928 12.5 25 12.5H36.7187C36.857 12.5 36.9928 12.4608 37.1123 12.3865C37.2317 12.3122 37.3305 12.2054 37.3986 12.077C37.4667 11.9486 37.5016 11.8033 37.4998 11.6558C37.498 11.5083 37.4595 11.364 37.3883 11.2375L35.5141 7.90419ZM21.875 2.5H16.6133C15.9392 2.50188 15.2769 2.68897 14.6903 3.04321C14.1036 3.39746 13.6125 3.90693 13.2641 4.52251L9.48672 11.2375C9.41551 11.364 9.37703 11.5083 9.37522 11.6558C9.3734 11.8033 9.40832 11.9486 9.47641 12.077C9.54449 12.2054 9.6433 12.3122 9.76274 12.3865C9.88218 12.4608 10.018 12.5 10.1563 12.5H21.875C22.0822 12.5 22.2809 12.4122 22.4274 12.256C22.5739 12.0997 22.6562 11.8877 22.6562 11.6667V3.33334C22.6562 3.11232 22.5739 2.90036 22.4274 2.74408C22.2809 2.5878 22.0822 2.5 21.875 2.5ZM21.0937 10.8334H11.5359L14.6031 5.38084C14.8122 5.01134 15.107 4.70552 15.4591 4.49286C15.8112 4.28019 16.2087 4.16785 16.6133 4.16667H21.0937V10.8334ZM26.5625 13.3334H25C24.7928 13.3334 24.5941 13.4212 24.4476 13.5775C24.3011 13.7337 24.2187 13.9457 24.2187 14.1667C24.2187 14.3877 24.3011 14.5997 24.4476 14.756C24.5941 14.9122 24.7928 15 25 15H26.5625C26.7697 15 26.9684 14.9122 27.1149 14.756C27.2614 14.5997 27.3437 14.3877 27.3437 14.1667C27.3437 13.9457 27.2614 13.7337 27.1149 13.5775C26.9684 13.4212 26.7697 13.3334 26.5625 13.3334ZM11.7188 13.3334H10.1563C9.94905 13.3334 9.75034 13.4212 9.60382 13.5775C9.45731 13.7337 9.375 13.9457 9.375 14.1667C9.375 14.3877 9.45731 14.5997 9.60382 14.756C9.75034 14.9122 9.94905 15 10.1563 15H11.7188C11.926 15 12.1247 14.9122 12.2712 14.756C12.4177 14.5997 12.5 14.3877 12.5 14.1667C12.5 13.9457 12.4177 13.7337 12.2712 13.5775C12.1247 13.4212 11.926 13.3334 11.7188 13.3334ZM38.2812 21.6667C37.8177 21.6667 37.3645 21.8134 36.9791 22.0881C36.5937 22.3628 36.2933 22.7532 36.1159 23.21C35.9385 23.6669 35.8921 24.1695 35.9825 24.6545C36.073 25.1394 36.2962 25.5849 36.624 25.9345C36.9517 26.2841 37.3694 26.5223 37.824 26.6187C38.2786 26.7152 38.7499 26.6657 39.1781 26.4765C39.6064 26.2872 39.9725 25.9668 40.23 25.5557C40.4875 25.1446 40.625 24.6612 40.625 24.1667C40.625 23.5037 40.3781 22.8678 39.9385 22.399C39.499 21.9301 38.9028 21.6667 38.2812 21.6667ZM38.2812 25.0001C38.1267 25.0001 37.9757 24.9512 37.8472 24.8596C37.7187 24.7681 37.6186 24.6379 37.5595 24.4856C37.5003 24.3334 37.4849 24.1658 37.515 24.0042C37.5451 23.8425 37.6195 23.694 37.7288 23.5775C37.8381 23.4609 37.9773 23.3816 38.1288 23.3494C38.2804 23.3173 38.4375 23.3338 38.5802 23.3968C38.723 23.4599 38.845 23.5667 38.9308 23.7038C39.0167 23.8408 39.0625 24.0019 39.0625 24.1667C39.0625 24.3878 38.9802 24.5997 38.8337 24.756C38.6872 24.9123 38.4884 25.0001 38.2812 25.0001ZM11.7188 21.6667C11.2552 21.6667 10.8021 21.8134 10.4166 22.0881C10.0312 22.3628 9.7308 22.7532 9.55341 23.21C9.37602 23.6669 9.3296 24.1695 9.42004 24.6545C9.51047 25.1394 9.73369 25.5849 10.0615 25.9345C10.3892 26.2841 10.8069 26.5223 11.2615 26.6187C11.7162 26.7152 12.1874 26.6657 12.6157 26.4765C13.0439 26.2872 13.41 25.9668 13.6675 25.5557C13.925 25.1446 14.0625 24.6612 14.0625 24.1667C14.0625 23.5037 13.8156 22.8678 13.376 22.399C12.9365 21.9301 12.3404 21.6667 11.7188 21.6667ZM11.7188 25.0001C11.5642 25.0001 11.4132 24.9512 11.2847 24.8596C11.1562 24.7681 11.0561 24.6379 10.997 24.4856C10.9378 24.3334 10.9224 24.1658 10.9525 24.0042C10.9827 23.8425 11.0571 23.694 11.1663 23.5775C11.2756 23.4609 11.4148 23.3816 11.5663 23.3494C11.7179 23.3173 11.875 23.3338 12.0177 23.3968C12.1605 23.4599 12.2825 23.5667 12.3683 23.7038C12.4542 23.8408 12.5 24.0019 12.5 24.1667C12.5 24.3878 12.4177 24.5997 12.2712 24.756C12.1247 24.9123 11.926 25.0001 11.7188 25.0001Z" />
                  </svg>{" "}
                  <span>السيارة</span>
                </div>
              </div>
              <div className="col-3">
                <div className="single-transport">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={30}
                    viewBox="0 0 50 30"
                  >
                    <path d="M2.5 30H47.5C48.163 30 48.7989 29.7742 49.2678 29.3724C49.7366 28.9705 50 28.4255 50 27.8571V27.1429C50 26.5745 49.7366 26.0295 49.2678 25.6276C48.7989 25.2258 48.163 25 47.5 25H41.4492C42.037 24.3912 42.3961 23.6442 42.4792 22.8571H43.3233C44.53 22.8572 45.714 22.5765 46.7491 22.0451C47.7843 21.5136 48.6317 20.7513 49.2011 19.8395C49.7706 18.9276 50.0406 17.9004 49.9824 16.8674C49.9242 15.8343 49.5401 14.8342 48.8708 13.9736L39.9817 2.545C39.3738 1.76137 38.5491 1.11886 37.5811 0.674797C36.6132 0.230731 35.532 -0.00109223 34.4342 3.8689e-06H2.5C1.83696 3.8689e-06 1.20107 0.225769 0.732233 0.627632C0.263392 1.0295 0 1.57454 0 2.14286L0 22.1429C0 22.3323 0.0877974 22.514 0.244078 22.6479C0.400358 22.7819 0.61232 22.8571 0.833333 22.8571H22.5208C22.6042 23.6443 22.9625 24.3914 23.5508 25H2.5C1.83696 25 1.20107 25.2258 0.732233 25.6276C0.263392 26.0295 0 26.5745 0 27.1429L0 27.8571C0 28.4255 0.263392 28.9705 0.732233 29.3724C1.20107 29.7742 1.83696 30 2.5 30ZM37.9167 25C37.2172 24.9983 36.5418 24.7808 36.014 24.3873C35.4863 23.9939 35.1414 23.4507 35.0425 22.8571H40.7925C40.6936 23.4509 40.3485 23.9943 39.8203 24.3878C39.2922 24.7813 38.6164 24.9986 37.9167 25ZM33.3542 22.8571C33.4375 23.6443 33.7958 24.3914 34.3842 25H30.6158C31.2037 24.3912 31.5628 23.6442 31.6458 22.8571H33.3542ZM44.8883 11.4286H33.3333C33.1123 11.4286 32.9004 11.3533 32.7441 11.2194C32.5878 11.0854 32.5 10.9037 32.5 10.7143V5.71429C32.5 5.52485 32.5878 5.34317 32.7441 5.20921C32.9004 5.07526 33.1123 5 33.3333 5H39.8883L44.8883 11.4286ZM1.66667 16.4286H4.16667V17.1429C4.16667 17.7112 4.43006 18.2562 4.8989 18.6581C5.36774 19.06 6.00363 19.2857 6.66667 19.2857H12.5C13.163 19.2857 13.7989 19.06 14.2678 18.6581C14.7366 18.2562 15 17.7112 15 17.1429V16.4286H34.1667C34.3877 16.4286 34.5996 16.3533 34.7559 16.2194C34.9122 16.0854 35 15.9037 35 15.7143C35 15.5248 34.9122 15.3432 34.7559 15.2092C34.5996 15.0753 34.3877 15 34.1667 15H15V5.71429C15 5.14597 14.7366 4.60092 14.2678 4.19906C13.7989 3.7972 13.163 3.57143 12.5 3.57143H6.66667C6.00363 3.57143 5.36774 3.7972 4.8989 4.19906C4.43006 4.60092 4.16667 5.14597 4.16667 5.71429V15H1.66667V2.14286C1.66667 1.95342 1.75446 1.77174 1.91074 1.63778C2.06702 1.50383 2.27899 1.42858 2.5 1.42858H34.4342C35.2575 1.42781 36.0682 1.60168 36.794 1.9347C37.5199 2.26771 38.1383 2.74952 38.5942 3.33715L38.7767 3.57143H33.3333C32.6703 3.57143 32.0344 3.7972 31.5656 4.19906C31.0967 4.60092 30.8333 5.14597 30.8333 5.71429V10.7143C30.8333 11.2826 31.0967 11.8277 31.5656 12.2295C32.0344 12.6314 32.6703 12.8571 33.3333 12.8571H46L47.4842 14.7657C47.5442 14.8414 47.5883 14.9221 47.6417 15H38.3333C38.1123 15 37.9004 15.0753 37.7441 15.2092C37.5878 15.3432 37.5 15.5248 37.5 15.7143C37.5 15.9037 37.5878 16.0854 37.7441 16.2194C37.9004 16.3533 38.1123 16.4286 38.3333 16.4286H48.26C48.3792 17.0433 48.3409 17.673 48.1478 18.2738C47.9547 18.8746 47.6114 19.4322 47.1417 19.9079C46.6721 20.3836 46.0872 20.766 45.4279 21.0286C44.7685 21.2912 44.0504 21.4277 43.3233 21.4286H1.66667V16.4286ZM13.3333 17.1429C13.3333 17.3323 13.2455 17.514 13.0893 17.6479C12.933 17.7819 12.721 17.8571 12.5 17.8571H6.66667C6.44565 17.8571 6.23369 17.7819 6.07741 17.6479C5.92113 17.514 5.83333 17.3323 5.83333 17.1429V5.71429C5.83333 5.52485 5.92113 5.34317 6.07741 5.20921C6.23369 5.07526 6.44565 5 6.66667 5H12.5C12.721 5 12.933 5.07526 13.0893 5.20921C13.2455 5.34317 13.3333 5.52485 13.3333 5.71429V17.1429ZM24.2092 22.8571H29.9592C29.8629 23.4521 29.5188 23.9971 28.9904 24.3916C28.462 24.786 27.7849 25.0033 27.0842 25.0033C26.3834 25.0033 25.7063 24.786 25.1779 24.3916C24.6495 23.9971 24.3054 23.4521 24.2092 22.8571ZM1.66667 27.1429C1.66667 26.9534 1.75446 26.7717 1.91074 26.6378C2.06702 26.5038 2.27899 26.4286 2.5 26.4286H47.5C47.721 26.4286 47.933 26.5038 48.0893 26.6378C48.2455 26.7717 48.3333 26.9534 48.3333 27.1429V27.8571C48.3333 28.0466 48.2455 28.2283 48.0893 28.3622C47.933 28.4962 47.721 28.5714 47.5 28.5714H2.5C2.27899 28.5714 2.06702 28.4962 1.91074 28.3622C1.75446 28.2283 1.66667 28.0466 1.66667 27.8571V27.1429Z" />
                    <path d="M25.8333 3.57141H20C19.337 3.57141 18.7011 3.79718 18.2322 4.19904C17.7634 4.6009 17.5 5.14595 17.5 5.71427V10.7143C17.5 11.2826 17.7634 11.8276 18.2322 12.2295C18.7011 12.6314 19.337 12.8571 20 12.8571H25.8333C26.4964 12.8571 27.1323 12.6314 27.6011 12.2295C28.0699 11.8276 28.3333 11.2826 28.3333 10.7143V5.71427C28.3333 5.14595 28.0699 4.6009 27.6011 4.19904C27.1323 3.79718 26.4964 3.57141 25.8333 3.57141ZM26.6667 10.7143C26.6667 10.9037 26.5789 11.0854 26.4226 11.2193C26.2663 11.3533 26.0543 11.4286 25.8333 11.4286H20C19.779 11.4286 19.567 11.3533 19.4107 11.2193C19.2545 11.0854 19.1667 10.9037 19.1667 10.7143V5.71427C19.1667 5.52483 19.2545 5.34315 19.4107 5.20919C19.567 5.07524 19.779 4.99998 20 4.99998H25.8333C26.0543 4.99998 26.2663 5.07524 26.4226 5.20919C26.5789 5.34315 26.6667 5.52483 26.6667 5.71427V10.7143ZM10.8333 6.42855H8.33333C8.11232 6.42855 7.90036 6.50381 7.74408 6.63776C7.5878 6.77172 7.5 6.9534 7.5 7.14284C7.5 7.33228 7.5878 7.51396 7.74408 7.64792C7.90036 7.78187 8.11232 7.85713 8.33333 7.85713H10.8333C11.0543 7.85713 11.2663 7.78187 11.4226 7.64792C11.5789 7.51396 11.6667 7.33228 11.6667 7.14284C11.6667 6.9534 11.5789 6.77172 11.4226 6.63776C11.2663 6.50381 11.0543 6.42855 10.8333 6.42855ZM10.8333 9.2857H8.33333C8.11232 9.2857 7.90036 9.36095 7.74408 9.49491C7.5878 9.62886 7.5 9.81054 7.5 9.99998C7.5 10.1894 7.5878 10.3711 7.74408 10.5051C7.90036 10.639 8.11232 10.7143 8.33333 10.7143H10.8333C11.0543 10.7143 11.2663 10.639 11.4226 10.5051C11.5789 10.3711 11.6667 10.1894 11.6667 9.99998C11.6667 9.81054 11.5789 9.62886 11.4226 9.49491C11.2663 9.36095 11.0543 9.2857 10.8333 9.2857Z" />
                  </svg>{" "}
                  <span>القطار</span>
                </div>
              </div>
              <div className="col-3">
                <div className="single-transport">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={30}
                    viewBox="0 0 50 30"
                  >
                    <path d="M49.2587 28.5694C47.1164 28.5694 46.1141 28.1755 44.9534 27.7193C43.9689 27.3324 42.9508 26.9323 41.3434 26.7543C40.9423 26.7107 40.5783 26.9918 40.5326 27.3842C40.5107 27.5727 40.5664 27.7619 40.6875 27.9103C40.8085 28.0587 40.9851 28.1541 41.1782 28.1755C42.5879 28.3316 43.471 28.6786 44.406 29.0462C45.5988 29.5151 46.8323 29.9998 49.2587 29.9998C49.3556 30.0009 49.4518 29.9832 49.5417 29.9478C49.6316 29.9123 49.7134 29.8598 49.7823 29.7933C49.8513 29.7268 49.906 29.6476 49.9434 29.5602C49.9808 29.4729 50 29.3792 50 29.2846C50 29.19 49.9808 29.0963 49.9434 29.009C49.906 28.9217 49.8513 28.8425 49.7823 28.776C49.7134 28.7094 49.6316 28.6569 49.5417 28.6215C49.4518 28.586 49.3556 28.5683 49.2587 28.5694ZM38.5737 27.3844C38.5281 26.9919 38.1652 26.7103 37.7628 26.7543C36.1555 26.9323 35.1374 27.3324 34.1527 27.7193C32.9922 28.1755 31.9899 28.5694 29.8476 28.5694C27.7054 28.5694 26.7032 28.1755 25.5427 27.7193C24.282 27.2238 22.8531 26.6622 20.1426 26.6622C17.4321 26.6622 16.0032 27.2238 14.7425 27.7193C13.5821 28.1755 12.5798 28.5694 10.4378 28.5694C8.29567 28.5694 7.2934 28.1755 6.13285 27.7193C4.87222 27.2238 3.44327 26.6622 0.732884 26.6622C0.538511 26.6622 0.352099 26.7376 0.214657 26.8717C0.0772143 27.0058 0 27.1878 0 27.3774C0 27.5671 0.0772143 27.7491 0.214657 27.8832C0.352099 28.0173 0.538511 28.0927 0.732884 28.0927C3.15923 28.0927 4.33764 28.5559 5.58538 29.0464C6.77815 29.5152 8.01154 30 10.4378 30C12.8638 30 14.0972 29.5153 15.2902 29.0464C16.5377 28.556 17.7161 28.0927 20.1426 28.0927C22.569 28.0927 23.7474 28.5559 24.9951 29.0464C26.188 29.5152 27.4213 30 29.8476 30C32.2738 30 33.5073 29.5153 34.7004 29.0464C35.6354 28.6789 36.5185 28.3318 37.9281 28.1757C38.0237 28.1651 38.1162 28.1363 38.2005 28.0908C38.2847 28.0453 38.3589 27.984 38.4188 27.9106C38.4788 27.8371 38.5233 27.7528 38.5499 27.6625C38.5764 27.5722 38.5845 27.4777 38.5737 27.3844Z" />
                    <path d="M49.2587 25.5429C46.9743 25.5429 45.8597 25.1049 44.6796 24.6411C43.9381 24.3496 43.1814 24.0524 42.159 23.8575L49.5227 14.6371C49.64 14.4915 49.7127 14.3165 49.7323 14.1323C49.752 13.9481 49.7179 13.7622 49.6339 13.5961C49.5513 13.4294 49.4221 13.2888 49.2611 13.1907C49.1002 13.0926 48.9141 13.041 48.7243 13.0417H38.1889L34.2998 5.21255C34.0367 4.66692 33.4676 4.31434 32.8497 4.31434H16.9192L15.4371 0.850369C15.3297 0.59824 15.1481 0.382865 14.9153 0.231494C14.6825 0.080124 14.4088 -0.000438062 14.1291 1.79156e-06H9.96394C9.18224 1.79156e-06 8.54641 0.620624 8.54641 1.38351V4.31434H7.17017C6.28663 4.31434 5.56771 5.01587 5.56771 5.87824V14.8942H1.65363C1.33718 14.8942 1.03469 15.0416 0.844486 15.2885C0.654284 15.5354 0.593161 15.8599 0.681135 16.1567L2.94345 23.7897C2.31914 23.6938 1.59817 23.6357 0.732884 23.6357C0.538511 23.6357 0.352099 23.711 0.214657 23.8452C0.0772143 23.9793 0 24.1612 0 24.3509C0 24.5406 0.0772143 24.7226 0.214657 24.8567C0.352099 24.9908 0.538511 25.0662 0.732884 25.0662C3.01707 25.0662 4.13163 25.5042 5.3116 25.968C6.5692 26.4624 7.86957 26.9734 10.4379 26.9734C13.0061 26.9734 14.3065 26.4624 15.5641 25.968C16.744 25.5042 17.8585 25.0662 20.1427 25.0662C22.427 25.0662 23.5414 25.5042 24.7214 25.968C25.979 26.4624 27.2795 26.9734 29.8477 26.9734C32.4161 26.9734 33.7166 26.4624 34.9742 25.968C36.1542 25.5042 37.2688 25.0662 39.5532 25.0662C41.8375 25.0662 42.9521 25.5042 44.1322 25.968C45.3899 26.4624 46.6902 26.9734 49.2587 26.9734C49.453 26.9734 49.6394 26.8981 49.7769 26.7639C49.9143 26.6298 49.9915 26.4479 49.9915 26.2582C49.9915 26.0685 49.9143 25.8865 49.7769 25.7524C49.6394 25.6183 49.453 25.5429 49.2587 25.5429ZM10.0121 1.43059H14.097L15.3309 4.31444H10.0121V1.43059ZM39.5532 23.6358C36.9848 23.6358 35.6843 24.1468 34.4266 24.6412C33.2465 25.105 32.132 25.543 29.8476 25.543C27.5633 25.543 26.4487 25.105 25.2689 24.6412C24.0113 24.1468 22.7109 23.6358 20.1426 23.6358C17.5744 23.6358 16.2739 24.1468 15.0164 24.6412C13.8364 25.105 12.722 25.543 10.4378 25.543C8.1536 25.543 7.03904 25.105 5.85907 24.6412C5.4521 24.4813 5.04046 24.3197 4.58311 24.1741L2.25675 16.3247H8.35366C8.54804 16.3247 8.73445 16.2493 8.87189 16.1152C9.00933 15.981 9.08655 15.7991 9.08655 15.6094C9.08655 15.4197 9.00933 15.2378 8.87189 15.1037C8.73445 14.9695 8.54804 14.8942 8.35366 14.8942H7.03358V5.87824C7.03358 5.80468 7.09489 5.74484 7.17027 5.74484H32.8498C32.9025 5.74484 32.9512 5.77495 32.9773 5.82898L36.5603 13.0417H32.441C31.946 13.0416 31.468 13.2182 31.0971 13.5382L29.6847 14.7563C29.5817 14.8452 29.4489 14.8942 29.3114 14.8942H11.7636C11.5693 14.8942 11.3829 14.9695 11.2454 15.1037C11.108 15.2378 11.0308 15.4197 11.0308 15.6094C11.0308 15.7991 11.108 15.981 11.2454 16.1152C11.3829 16.2493 11.5693 16.3247 11.7636 16.3247H29.3114C29.807 16.3247 30.2842 16.1484 30.6554 15.8282L32.0677 14.6101C32.1707 14.5212 32.3035 14.4722 32.441 14.4722H47.7962L40.4596 23.6588C40.1577 23.6431 39.8555 23.6354 39.5532 23.6358Z" />
                    <path d="M12.4227 7.25165H9.94664C9.32545 7.25165 8.82007 7.74487 8.82007 8.3511V10.5679C8.82007 11.1741 9.32545 11.6673 9.94664 11.6673H12.4227C13.0439 11.6673 13.5492 11.1741 13.5492 10.5679V8.3511C13.5492 7.74487 13.0439 7.25165 12.4227 7.25165ZM12.0835 10.2368H10.2858V8.68204H12.0835V10.2368ZM18.4565 7.25165H15.9805C15.3593 7.25165 14.8539 7.74487 14.8539 8.3511V10.5679C14.854 11.1741 15.3593 11.6673 15.9805 11.6673H18.4565C19.0777 11.6673 19.583 11.1741 19.583 10.5679V8.3511C19.583 7.74487 19.0777 7.25165 18.4565 7.25165ZM18.1173 10.2368H16.3197V8.68204H18.1173V10.2368ZM24.4904 7.25165H22.0143C21.3931 7.25165 20.8878 7.74487 20.8878 8.3511V10.5679C20.8878 11.1741 21.3931 11.6673 22.0143 11.6673H24.4904C25.1116 11.6673 25.6168 11.1741 25.6168 10.5679V8.3511C25.6168 7.74487 25.1116 7.25165 24.4904 7.25165ZM24.1512 10.2368H22.3535V8.68204H24.1512V10.2368ZM32.6201 10.3663L31.666 7.8778C31.595 7.69428 31.4686 7.53614 31.3035 7.42433C31.1383 7.31253 30.9423 7.25234 30.7413 7.25174H28.0481C27.4269 7.25174 26.9215 7.74496 26.9215 8.3512V10.568C26.9216 11.1741 27.427 11.6673 28.0481 11.6673H31.6955C31.855 11.6673 32.0121 11.6297 32.1534 11.5576C32.2947 11.4854 32.416 11.3809 32.5068 11.2531C32.5977 11.1252 32.6555 10.9777 32.6752 10.8233C32.695 10.6688 32.6761 10.512 32.6201 10.3663ZM28.3873 10.2368V8.68204H30.4095L31.0056 10.2368H28.3873Z" />
                  </svg>{" "}
                  <span>اليخت</span>
                </div>
              </div>
              <div className="col-3">
                <div className="single-transport">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={30}
                    viewBox="0 0 50 30"
                  >
                    <path d="M39.1667 22.1034C38.6722 22.1034 38.1889 22.2423 37.7777 22.5025C37.3666 22.7627 37.0462 23.1326 36.857 23.5653C36.6677 23.9981 36.6182 24.4742 36.7147 24.9336C36.8112 25.393 37.0493 25.815 37.3989 26.1462C37.7485 26.4774 38.194 26.7029 38.6789 26.7943C39.1639 26.8857 39.6666 26.8388 40.1234 26.6595C40.5802 26.4803 40.9706 26.1768 41.2453 25.7873C41.52 25.3979 41.6667 24.94 41.6667 24.4716C41.666 23.8437 41.4024 23.2417 40.9337 22.7977C40.465 22.3537 39.8295 22.104 39.1667 22.1034ZM39.1667 25.261C39.0018 25.261 38.8407 25.2147 38.7037 25.128C38.5667 25.0412 38.4598 24.9179 38.3968 24.7737C38.3337 24.6294 38.3172 24.4707 38.3493 24.3176C38.3815 24.1645 38.4609 24.0238 38.5774 23.9134C38.694 23.803 38.8424 23.7278 39.0041 23.6974C39.1657 23.6669 39.3333 23.6825 39.4856 23.7423C39.6378 23.802 39.768 23.9032 39.8596 24.033C39.9511 24.1628 40 24.3155 40 24.4716C39.9998 24.6809 39.9119 24.8816 39.7557 25.0296C39.5994 25.1776 39.3876 25.2608 39.1667 25.261ZM46.7558 12.5097L43.155 11.2309L39.9083 2.61925C39.6181 1.85331 39.0855 1.19081 38.3833 0.722079C37.681 0.253345 36.8432 0.00119249 35.9842 0H4.16667C3.062 0.00125346 2.00296 0.417503 1.22185 1.15744C0.440735 1.89738 0.00132321 2.9006 0 3.94703V22.8928C0.000661846 23.5207 0.264267 24.1227 0.732964 24.5667C1.20166 25.0107 1.83716 25.2604 2.5 25.261H4.23333C4.43131 26.5762 5.12354 27.7796 6.18289 28.6501C7.24223 29.5207 8.59758 30 10 30C11.4024 30 12.7578 29.5207 13.8171 28.6501C14.8765 27.7796 15.5687 26.5762 15.7667 25.261H33.4C33.598 26.5762 34.2902 27.7796 35.3496 28.6501C36.4089 29.5207 37.7642 30 39.1667 30C40.5691 30 41.9244 29.5207 42.9838 28.6501C44.0431 27.7796 44.7354 26.5762 44.9333 25.261H47.5C48.1628 25.2604 48.7983 25.0107 49.267 24.5667C49.7357 24.1227 49.9993 23.5207 50 22.8928V16.9446C49.9966 15.9812 49.6847 15.0415 49.1054 14.2496C48.5262 13.4577 47.7069 12.851 46.7558 12.5097ZM41.3167 11.0517H31.6667V4.73644H38.9367L41.3167 11.0517ZM10 28.4186C9.17591 28.4186 8.37033 28.1871 7.68512 27.7534C6.99992 27.3197 6.46587 26.7033 6.1505 25.9821C5.83514 25.2608 5.75262 24.4672 5.91339 23.7016C6.07417 22.9359 6.471 22.2326 7.05372 21.6806C7.63644 21.1286 8.37887 20.7527 9.18712 20.6004C9.99538 20.4481 10.8332 20.5263 11.5945 20.825C12.3559 21.1238 13.0066 21.6297 13.4645 22.2787C13.9223 22.9278 14.1667 23.6909 14.1667 24.4716C14.1653 25.518 13.7259 26.5212 12.9448 27.2612C12.1637 28.0011 11.1047 28.4174 10 28.4186ZM39.1667 28.4186C38.3426 28.4186 37.537 28.1871 36.8518 27.7534C36.1666 27.3197 35.6325 26.7033 35.3172 25.9821C35.0018 25.2608 34.9193 24.4672 35.0801 23.7016C35.2408 22.9359 35.6377 22.2326 36.2204 21.6806C36.8031 21.1286 37.5455 20.7527 38.3538 20.6004C39.162 20.4481 39.9998 20.5263 40.7612 20.825C41.5225 21.1238 42.1733 21.6297 42.6311 22.2787C43.089 22.9278 43.3333 23.6909 43.3333 24.4716C43.332 25.518 42.8926 26.5212 42.1115 27.2612C41.3304 28.0011 40.2713 28.4174 39.1667 28.4186ZM48.3333 22.8928C48.3331 23.1021 48.2452 23.3028 48.089 23.4507C47.9328 23.5987 47.7209 23.682 47.5 23.6822H44.9333C44.7354 22.367 44.0431 21.1636 42.9838 20.2931C41.9244 19.4225 40.5691 18.9432 39.1667 18.9432C37.7642 18.9432 36.4089 19.4225 35.3496 20.2931C34.2902 21.1636 33.598 22.367 33.4 23.6822H15.7667C15.5687 22.367 14.8765 21.1636 13.8171 20.2931C12.7578 19.4225 11.4024 18.9432 10 18.9432C8.59758 18.9432 7.24223 19.4225 6.18289 20.2931C5.12354 21.1636 4.43131 22.367 4.23333 23.6822H2.5C2.27905 23.682 2.06722 23.5987 1.91099 23.4507C1.75476 23.3028 1.66689 23.1021 1.66667 22.8928V3.94703C1.66733 3.31913 1.93093 2.71713 2.39963 2.27314C2.86833 1.82915 3.50383 1.57944 4.16667 1.57881H35.9842C36.4996 1.57954 37.0022 1.73086 37.4235 2.01213C37.8448 2.2934 38.1643 2.69094 38.3383 3.15052L38.3417 3.15763H31.6667C31.2248 3.15804 30.8011 3.32452 30.4886 3.62051C30.1762 3.9165 30.0004 4.31784 30 4.73644V11.0517C30.0004 11.4703 30.1762 11.8716 30.4886 12.1676C30.8011 12.4636 31.2248 12.6301 31.6667 12.6305H42.3483L46.1708 13.9883C46.8048 14.2158 47.3509 14.6203 47.737 15.1481C48.1232 15.676 48.3311 16.3024 48.3333 16.9446V22.8928ZM10 22.1034C9.50555 22.1034 9.0222 22.2423 8.61107 22.5025C8.19995 22.7627 7.87952 23.1326 7.6903 23.5653C7.50108 23.9981 7.45157 24.4742 7.54804 24.9336C7.6445 25.393 7.8826 25.815 8.23223 26.1462C8.58186 26.4774 9.02732 26.7029 9.51227 26.7943C9.99723 26.8857 10.4999 26.8388 10.9567 26.6595C11.4135 26.4803 11.804 26.1768 12.0787 25.7873C12.3534 25.3979 12.5 24.94 12.5 24.4716C12.4993 23.8437 12.2357 23.2417 11.767 22.7977C11.2983 22.3537 10.6628 22.104 10 22.1034ZM10 25.261C9.83518 25.261 9.67407 25.2147 9.53702 25.128C9.39998 25.0412 9.29317 24.9179 9.2301 24.7737C9.16703 24.6294 9.15052 24.4707 9.18268 24.3176C9.21483 24.1645 9.2942 24.0238 9.41074 23.9134C9.52729 23.803 9.67577 23.7278 9.83742 23.6974C9.99908 23.6669 10.1666 23.6825 10.3189 23.7423C10.4712 23.802 10.6013 23.9032 10.6929 24.033C10.7845 24.1628 10.8333 24.3155 10.8333 24.4716C10.8331 24.6809 10.7452 24.8816 10.589 25.0296C10.4328 25.1776 10.2209 25.2608 10 25.261ZM35 15.7881C35 15.9975 34.9122 16.1983 34.7559 16.3463C34.5996 16.4944 34.3877 16.5775 34.1667 16.5775H30.8333C30.6123 16.5775 30.4004 16.4944 30.2441 16.3463C30.0878 16.1983 30 15.9975 30 15.7881C30 15.5788 30.0878 15.378 30.2441 15.2299C30.4004 15.0819 30.6123 14.9987 30.8333 14.9987H34.1667C34.3877 14.9987 34.5996 15.0819 34.7559 15.2299C34.9122 15.378 35 15.5788 35 15.7881ZM26.6667 3.15763H5C4.55811 3.15804 4.13444 3.32452 3.82198 3.62051C3.50951 3.9165 3.33377 4.31784 3.33333 4.73644V11.0517C3.33377 11.4703 3.50951 11.8716 3.82198 12.1676C4.13444 12.4636 4.55811 12.6301 5 12.6305H26.6667C27.1086 12.6301 27.5322 12.4636 27.8447 12.1676C28.1572 11.8716 28.3329 11.4703 28.3333 11.0517V4.73644C28.3329 4.31784 28.1572 3.9165 27.8447 3.62051C27.5322 3.32452 27.1086 3.15804 26.6667 3.15763ZM5 4.73644H15V11.0517H5V4.73644ZM16.6667 11.0517V4.73644H26.6667L26.6683 11.0517H16.6667Z" />
                  </svg>{" "}
                  <span>الباص</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="details-btn">
              <Link
                href={`/service/packages/${trans?._id}`}
                className="primary-btn1"
              >
                تفاصيل
              </Link>
            </div>
            <div className="review-area">
              <ul className="rating">
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
              </ul>
              <span>(214 reviewes)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
