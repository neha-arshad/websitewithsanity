import Image from "next/image";
import React from "react";

const HotCategories = () => {
  const leftImage = {
    image: "/Image3.png",
    title: "Main Category",
  };

  const rightImages = [
    { id: 1, image: "/Image4.png", title: "Category 1" },
    { id: 2, image: "/Image1.png", title: "Category 2" },
    { id: 3, image: "/Image5.png", title: "Category 3" },
    { id: 4, image: "/Image6.png", title: "Category 4" },
  ];

  return (
    <section className="lg:ml-44 lg:mt-40 lg:mr-44 my-10">
      <div className="flex gap-8">
        {/* Left Image Section */}
        <div className="flex items-center gap-4">
          <svg
            width="26"
            height="500"
            viewBox="0 0 26 585"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3936 569.051L25 569.051L25 581.851L22.3936 581.851L22.3936 569.051ZM0.828123 581.203L25 581.203L25 584.407L0.828124 584.407L0.828123 581.203ZM11.2207 570.744L13.8271 570.744L13.8271 581.851L11.2207 581.851L11.2207 570.744ZM0.828123 569.217L3.45117 569.217L3.45117 581.851L0.828123 581.851L0.828123 569.217ZM0.828123 563.008L10.0918 557.197L0.828122 551.387L0.828122 547.651L12.7978 555.288L25 547.469L25 551.237L15.5537 557.197L25 563.157L25 566.926L12.7978 559.106L0.828123 566.743L0.828123 563.008ZM15.5205 534.852L15.5205 541.31L12.9141 541.31L12.9141 534.852C12.9141 533.601 12.7148 532.588 12.3164 531.813C11.918 531.039 11.3646 530.474 10.6562 530.12C9.94791 529.755 9.13997 529.572 8.23242 529.572C7.40234 529.572 6.62207 529.755 5.8916 530.12C5.16113 530.474 4.57454 531.039 4.13183 531.813C3.67806 532.588 3.45117 533.601 3.45117 534.852L3.45117 540.562L25 540.562L25 543.767L0.828122 543.767L0.828121 534.852C0.828121 533.025 1.14355 531.481 1.77441 530.22C2.40527 528.958 3.27962 528.001 4.39746 527.348C5.50423 526.695 6.77148 526.368 8.19921 526.368C9.74869 526.368 11.0713 526.695 12.167 527.348C13.2627 528.001 14.0983 528.958 14.6738 530.22C15.2383 531.481 15.5205 533.025 15.5205 534.852ZM22.3935 507.658L25 507.658L25 519.744L22.3936 519.744L22.3935 507.658ZM0.828121 519.113L25 519.113L25 522.317L0.828121 522.317L0.828121 519.113ZM12.1504 486.475L13.6777 486.475C15.4928 486.475 17.1198 486.701 18.5586 487.155C19.9974 487.609 21.2204 488.262 22.2275 489.114C23.2347 489.966 24.0039 490.99 24.5352 492.186C25.0664 493.37 25.332 494.698 25.332 496.17C25.332 497.598 25.0664 498.909 24.5352 500.104C24.0039 501.289 23.2347 502.318 22.2275 503.192C21.2204 504.056 19.9974 504.725 18.5586 505.201C17.1198 505.677 15.4928 505.915 13.6777 505.915L12.1504 505.915C10.3353 505.915 8.71386 505.683 7.28613 505.218C5.84733 504.742 4.62434 504.072 3.61718 503.209C2.59895 502.346 1.82421 501.322 1.29296 500.138C0.761714 498.942 0.496089 497.631 0.496088 496.203C0.496088 494.731 0.761713 493.403 1.29296 492.219C1.82421 491.023 2.59895 490 3.61718 489.147C4.62434 488.284 5.84733 487.626 7.28613 487.172C8.71386 486.707 10.3353 486.475 12.1504 486.475ZM13.6777 489.646L12.1172 489.646C10.6784 489.646 9.40559 489.795 8.29882 490.094C7.19205 490.382 6.26236 490.808 5.50976 491.372C4.75716 491.937 4.18717 492.628 3.7998 493.447C3.41243 494.255 3.21874 495.174 3.21874 496.203C3.21874 497.199 3.41243 498.101 3.7998 498.909C4.18717 499.706 4.75716 500.392 5.50976 500.968C6.26236 501.532 7.19205 501.969 8.29882 502.279C9.40559 502.589 10.6784 502.744 12.1172 502.744L13.6777 502.744C15.1276 502.744 16.4115 502.589 17.5293 502.279C18.6361 501.969 19.5713 501.527 20.335 500.951C21.0876 500.365 21.6575 499.673 22.0449 498.876C22.4323 498.068 22.626 497.166 22.626 496.17C22.626 495.13 22.4323 494.205 22.0449 493.397C21.6575 492.59 21.0876 491.909 20.335 491.355C19.5713 490.791 18.6361 490.365 17.5293 490.077C16.4115 489.789 15.1276 489.646 13.6777 489.646ZM0.828119 481.677L0.828119 473.675C0.828119 471.86 1.10481 470.327 1.6582 469.076C2.21158 467.814 3.03059 466.857 4.11523 466.204C5.1888 465.54 6.51139 465.208 8.083 465.208C9.18977 465.208 10.2025 465.435 11.1211 465.889C12.0286 466.331 12.8034 466.973 13.4453 467.814C14.0762 468.645 14.5465 469.641 14.8564 470.803L15.2051 471.699L15.2051 479.22L12.5986 479.253L12.5986 473.575C12.5986 472.424 12.3994 471.467 12.001 470.703C11.5915 469.939 11.0436 469.364 10.3574 468.977C9.67122 468.589 8.91308 468.396 8.083 468.396C7.15331 468.396 6.33984 468.578 5.64257 468.943C4.94531 469.309 4.40852 469.884 4.03222 470.67C3.64485 471.445 3.45117 472.446 3.45117 473.675L3.45117 478.473L25 478.473L25 481.677L0.828119 481.677ZM25 467.549L14.043 473.426L14.0264 470.089L24.8008 464.129L25 464.129L25 467.549ZM22.3935 445.369L25 445.369L25 458.169L22.3935 458.169L22.3935 445.369ZM0.828118 457.521L25 457.521L25 460.726L0.828118 460.726L0.828118 457.521ZM11.2207 447.062L13.8271 447.062L13.8271 458.169L11.2207 458.169L11.2207 447.062ZM0.828118 445.535L3.45116 445.535L3.45116 458.169L0.828118 458.169L0.828118 445.535ZM0.828116 414.374L25 414.374L25 417.595L6.35644 429.764L25 429.764L25 432.968L0.828117 432.968L0.828117 429.764L19.5215 417.545L0.828116 417.545L0.828116 414.374ZM22.3935 393.34L25 393.34L25 406.14L22.3935 406.14L22.3935 393.34ZM0.828116 405.492L25 405.492L25 408.696L0.828116 408.696L0.828116 405.492ZM11.2207 395.033L13.8271 395.033L13.8271 406.14L11.2207 406.14L11.2207 395.033ZM0.828115 393.506L3.45116 393.506L3.45116 406.14L0.828116 406.14L0.828115 393.506ZM17.6953 383.014L0.828115 378.216L0.828114 375.892L7.38573 377.236L25 382.399L25 384.707L17.6953 383.014ZM0.828115 387.978L17.3633 384.159L25 383.014L25 385.305L0.828115 391.165L0.828115 387.978ZM17.3467 369.683L0.828114 365.947L0.828114 362.743L25 368.587L25 370.878L17.3467 369.683ZM0.828114 375.543L17.6953 370.878L25 369.185L25 371.492L7.38573 376.473L0.828115 377.834L0.828114 375.543ZM2.96971 341.809L25 349.811L25 353.081L0.828113 343.867L0.828113 341.759L2.96971 341.809ZM25 335.102L2.96971 343.12L0.828113 343.17L0.828113 341.062L25 331.814L25 335.102ZM16.0517 335.517L18.6748 335.517L18.6748 349.097L16.0517 349.097L16.0517 335.517ZM0.828112 309.983L25 309.983L25 313.204L6.35643 325.373L25 325.373L25 328.577L0.828112 328.577L0.828112 325.373L19.5215 313.154L0.828112 313.154L0.828112 309.983ZM25 297.765L25 302.812L22.3935 302.778L22.3935 297.765C22.3935 296.038 22.0338 294.599 21.3144 293.448C20.584 292.297 19.5657 291.434 18.2598 290.858C16.9427 290.272 15.4043 289.979 13.6445 289.979L12.167 289.979C10.7835 289.979 9.555 290.145 8.48143 290.477C7.3968 290.809 6.48371 291.296 5.74217 291.937C4.98957 292.579 4.41958 293.365 4.03221 294.295C3.64484 295.214 3.45116 296.271 3.45116 297.466L3.45116 302.911L0.828111 302.911L0.828111 297.466C0.828111 295.883 1.09374 294.439 1.62499 293.133C2.14517 291.827 2.90331 290.703 3.8994 289.763C4.88443 288.811 6.07974 288.08 7.48534 287.571C8.87987 287.062 10.4515 286.808 12.2002 286.808L13.6445 286.808C15.3932 286.808 16.9704 287.062 18.376 287.571C19.7705 288.08 20.9603 288.816 21.9453 289.779C22.9303 290.731 23.6885 291.882 24.2197 293.232C24.7399 294.572 25 296.082 25 297.765ZM0.828111 301.102L25 301.102L25 304.306L0.828111 304.306L0.828111 301.102ZM15.5205 264.645L15.5205 271.103L12.914 271.103L12.914 264.645C12.914 263.394 12.7148 262.381 12.3164 261.606C11.918 260.832 11.3646 260.267 10.6562 259.913C9.9479 259.548 9.13996 259.365 8.23241 259.365C7.40233 259.365 6.62205 259.548 5.89159 259.913C5.16112 260.267 4.57453 260.832 4.13182 261.606C3.67804 262.381 3.45116 263.394 3.45116 264.645L3.45116 270.355L25 270.355L25 273.56L0.82811 273.56L0.82811 264.645C0.82811 262.818 1.14354 261.274 1.7744 260.013C2.40526 258.751 3.27961 257.794 4.39745 257.141C5.50422 256.488 6.77147 256.161 8.1992 256.161C9.74868 256.161 11.0713 256.488 12.167 257.141C13.2627 257.794 14.0983 258.751 14.6738 260.013C15.2383 261.274 15.5205 262.818 15.5205 264.645ZM12.1504 233.5L13.6777 233.5C15.4928 233.5 17.1198 233.727 18.5586 234.181C19.9974 234.634 21.2204 235.287 22.2275 236.14C23.2347 236.992 24.0039 238.016 24.5351 239.211C25.0664 240.395 25.332 241.723 25.332 243.195C25.332 244.623 25.0664 245.935 24.5351 247.13C24.0039 248.314 23.2347 249.343 22.2275 250.218C21.2204 251.081 19.9974 251.751 18.5586 252.227C17.1198 252.702 15.4928 252.94 13.6777 252.94L12.1504 252.94C10.3353 252.94 8.71385 252.708 7.28612 252.243C5.84731 251.767 4.62433 251.098 3.61717 250.234C2.59894 249.371 1.8242 248.347 1.29295 247.163C0.761703 245.968 0.496077 244.656 0.496077 243.229C0.496077 241.757 0.761702 240.428 1.29295 239.244C1.8242 238.049 2.59894 237.025 3.61717 236.173C4.62433 235.31 5.84731 234.651 7.28612 234.197C8.71385 233.732 10.3353 233.5 12.1504 233.5ZM13.6777 236.671L12.1172 236.671C10.6784 236.671 9.40558 236.82 8.29881 237.119C7.19204 237.407 6.26235 237.833 5.50975 238.397C4.75714 238.962 4.18716 239.654 3.79979 240.473C3.41242 241.281 3.21873 242.199 3.21873 243.229C3.21873 244.225 3.41242 245.127 3.79979 245.935C4.18716 246.731 4.75715 247.418 5.50975 247.993C6.26235 248.558 7.19204 248.995 8.29881 249.305C9.40558 249.615 10.6784 249.77 12.1172 249.77L13.6777 249.77C15.1276 249.77 16.4114 249.615 17.5293 249.305C18.6361 248.995 19.5713 248.552 20.3349 247.977C21.0875 247.39 21.6575 246.698 22.0449 245.901C22.4323 245.093 22.626 244.191 22.626 243.195C22.626 242.155 22.4323 241.231 22.0449 240.423C21.6575 239.615 21.0875 238.934 20.3349 238.381C19.5713 237.816 18.6361 237.39 17.5293 237.103C16.4114 236.815 15.1276 236.671 13.6777 236.671ZM15.5205 219.787L15.5205 226.245L12.914 226.245L12.914 219.787C12.914 218.536 12.7148 217.524 12.3164 216.749C11.918 215.974 11.3646 215.41 10.6562 215.056C9.9479 214.69 9.13996 214.508 8.2324 214.508C7.40233 214.508 6.62205 214.69 5.89158 215.056C5.16112 215.41 4.57453 215.974 4.13182 216.749C3.67804 217.524 3.45115 218.536 3.45115 219.787L3.45115 225.498L25 225.498L25 228.702L0.828108 228.702L0.828108 219.787C0.828108 217.961 1.14354 216.417 1.7744 215.155C2.40526 213.894 3.2796 212.936 4.39744 212.283C5.50421 211.63 6.77147 211.304 8.1992 211.304C9.74868 211.304 11.0713 211.63 12.167 212.283C13.2627 212.936 14.0983 213.894 14.6738 215.155C15.2383 216.417 15.5205 217.961 15.5205 219.787ZM0.828106 193.424L0.828106 190.236L17.1806 190.236C18.9957 190.236 20.5065 190.64 21.7129 191.448C22.9193 192.256 23.8268 193.33 24.4355 194.669C25.0332 195.997 25.332 197.441 25.332 199.002C25.332 200.64 25.0332 202.123 24.4355 203.451C23.8268 204.768 22.9193 205.814 21.7129 206.589C20.5065 207.353 18.9958 207.734 17.1806 207.734L0.828107 207.734L0.828107 204.563L17.1806 204.563C18.4424 204.563 19.4827 204.331 20.3017 203.866C21.1208 203.401 21.7295 202.754 22.1279 201.924C22.5263 201.083 22.7256 200.109 22.7256 199.002C22.7256 197.884 22.5263 196.91 22.1279 196.08C21.7295 195.239 21.1207 194.586 20.3017 194.121C19.4827 193.656 18.4424 193.424 17.1806 193.424L0.828106 193.424ZM22.3935 170.547L25 170.547L25 182.633L22.3935 182.633L22.3935 170.547ZM0.828106 182.002L25 182.002L25 185.206L0.828106 185.206L0.828106 182.002ZM2.96971 157.598L25 165.6L25 168.87L0.828105 159.656L0.828105 157.548L2.96971 157.598ZM25 150.891L2.96971 158.909L0.828105 158.959L0.828105 156.851L25 147.604L25 150.891ZM16.0517 151.306L18.6748 151.306L18.6748 164.886L16.0517 164.886L16.0517 151.306ZM0.828104 144.366L0.828104 136.364C0.828104 134.549 1.1048 133.016 1.65818 131.766C2.21157 130.504 3.03058 129.547 4.11521 128.894C5.18878 128.229 6.51137 127.897 8.08299 127.897C9.18976 127.897 10.2025 128.124 11.1211 128.578C12.0286 129.021 12.8034 129.663 13.4453 130.504C14.0762 131.334 14.5465 132.33 14.8564 133.492L15.2051 134.389L15.2051 141.909L12.5986 141.942L12.5986 136.265C12.5986 135.114 12.3994 134.156 12.001 133.393C11.5915 132.629 11.0436 132.053 10.3574 131.666C9.6712 131.279 8.91306 131.085 8.08299 131.085C7.1533 131.085 6.33982 131.268 5.64256 131.633C4.94529 131.998 4.40851 132.574 4.03221 133.359C3.64484 134.134 3.45115 135.136 3.45115 136.364L3.45115 141.162L25 141.162L25 144.366L0.828104 144.366ZM25 130.238L14.0429 136.115L14.0263 132.778L24.8008 126.818L25 126.818L25 130.238ZM18.8906 102.099C18.3261 102.099 17.8281 102.187 17.3965 102.364C16.9538 102.53 16.5553 102.829 16.2011 103.261C15.847 103.681 15.5094 104.268 15.1885 105.021C14.8675 105.762 14.541 106.703 14.209 107.843C13.8548 109.038 13.4619 110.117 13.0303 111.08C12.5875 112.043 12.084 112.868 11.5195 113.554C10.9551 114.24 10.3076 114.766 9.57713 115.131C8.84666 115.496 8.01105 115.679 7.07029 115.679C6.12954 115.679 5.26072 115.485 4.46385 115.098C3.66697 114.71 2.97524 114.157 2.38865 113.437C1.79099 112.707 1.32615 111.838 0.994118 110.831C0.662087 109.824 0.496072 108.701 0.496071 107.461C0.496071 105.646 0.844704 104.107 1.54197 102.846C2.22817 101.573 3.13019 100.604 4.24802 99.9404C5.3548 99.2764 6.53904 98.9443 7.80076 98.9443L7.80076 102.132C6.89321 102.132 6.0908 102.326 5.39353 102.713C4.6852 103.1 4.13181 103.687 3.73338 104.473C3.32387 105.258 3.11912 106.255 3.11912 107.461C3.11912 108.601 3.29067 109.542 3.63377 110.283C3.97687 111.025 4.44171 111.578 5.0283 111.943C5.61489 112.298 6.28448 112.475 7.03709 112.475C7.5462 112.475 8.01105 112.369 8.43162 112.159C8.84112 111.938 9.22296 111.6 9.57713 111.146C9.93129 110.682 10.2578 110.095 10.5566 109.387C10.8554 108.667 11.1432 107.81 11.4199 106.813C11.8073 105.441 12.2389 104.257 12.7148 103.261C13.1907 102.265 13.7275 101.446 14.3252 100.804C14.9118 100.151 15.5814 99.6693 16.334 99.3594C17.0755 99.0384 17.9166 98.8779 18.8574 98.8779C19.8424 98.8779 20.7334 99.0771 21.5303 99.4756C22.3271 99.874 23.0078 100.444 23.5722 101.186C24.1367 101.927 24.5739 102.818 24.8838 103.858C25.1826 104.888 25.332 106.039 25.332 107.312C25.332 108.429 25.1771 109.531 24.8672 110.615C24.5573 111.689 24.0924 112.668 23.4726 113.554C22.8528 114.428 22.0892 115.131 21.1816 115.662C20.263 116.182 19.2005 116.442 17.9941 116.442L17.9941 113.255C18.8242 113.255 19.5381 113.094 20.1357 112.773C20.7223 112.452 21.2093 112.015 21.5967 111.462C21.984 110.897 22.2718 110.261 22.4599 109.553C22.637 108.833 22.7256 108.086 22.7256 107.312C22.7256 106.194 22.5706 105.247 22.2607 104.473C21.9508 103.698 21.5081 103.111 20.9326 102.713C20.3571 102.303 19.6764 102.099 18.8906 102.099ZM0.828102 85.8623L25 85.8623L25 89.0166L0.828102 89.0166L0.828102 85.8623ZM0.828101 78.0928L3.45115 78.0928L3.45115 96.7695L0.828102 96.7695L0.828101 78.0928ZM0.828101 73.1289L12.9638 66.8535L0.828101 60.5615L0.828101 56.9258L15.9687 65.2598L25 65.2598L25 68.4639L15.9687 68.4639L0.828101 76.7979L0.828101 73.1289ZM22.3935 39.1621L25 39.1621L25 51.248L22.3935 51.248L22.3935 39.1621ZM0.8281 50.6172L25 50.6172L25 53.8213L0.8281 53.8213L0.8281 50.6172ZM22.3935 20.1367L25 20.1367L25 32.9365L22.3935 32.9365L22.3935 20.1367ZM0.828099 32.2891L25 32.2891L25 35.4932L0.8281 35.4932L0.828099 32.2891ZM11.2207 21.8301L13.8271 21.8301L13.8271 32.9365L11.2207 32.9365L11.2207 21.8301ZM0.828099 20.3027L3.45115 20.3027L3.45115 32.9365L0.828099 32.9365L0.828099 20.3027ZM18.8906 3.28613C18.3261 3.28613 17.8281 3.37467 17.3965 3.55176C16.9537 3.71777 16.5553 4.0166 16.2011 4.44824C15.847 4.86881 15.5094 5.4554 15.1884 6.20801C14.8675 6.94954 14.541 7.8903 14.209 9.03027C13.8548 10.2256 13.4619 11.3047 13.0302 12.2676C12.5875 13.2305 12.084 14.055 11.5195 14.7412C10.9551 15.4274 10.3076 15.9531 9.57712 16.3184C8.84665 16.6836 8.01104 16.8662 7.07029 16.8662C6.12953 16.8662 5.26072 16.6725 4.46384 16.2852C3.66697 15.8978 2.97523 15.3444 2.38865 14.625C1.79099 13.8945 1.32615 13.0257 0.994114 12.0186C0.662083 11.0114 0.496067 9.88802 0.496067 8.64844C0.496067 6.83333 0.8447 5.29492 1.54197 4.0332C2.22816 2.76042 3.13018 1.79199 4.24802 1.12793C5.35479 0.463867 6.53904 0.131835 7.80075 0.131835L7.80075 3.31934C6.8932 3.31934 6.09079 3.51302 5.39353 3.90039C4.68519 4.28776 4.13181 4.87435 3.73337 5.66016C3.32387 6.44596 3.11911 7.44206 3.11911 8.64844C3.11911 9.78841 3.29066 10.7292 3.63376 11.4707C3.97686 12.2122 4.44171 12.7656 5.02829 13.1309C5.61488 13.485 6.28448 13.6621 7.03708 13.6621C7.5462 13.6621 8.01104 13.557 8.43161 13.3467C8.84112 13.1253 9.22296 12.7878 9.57712 12.334C9.93129 11.8691 10.2578 11.2826 10.5566 10.5742C10.8554 9.85482 11.1432 8.99707 11.4199 8.00098C11.8073 6.62858 12.2389 5.44434 12.7148 4.44824C13.1907 3.45215 13.7275 2.63314 14.3252 1.99121C14.9118 1.33822 15.5814 0.85677 16.334 0.546874C17.0755 0.22591 17.9166 0.0654286 18.8574 0.0654286C19.8424 0.0654285 20.7334 0.264647 21.5302 0.663085C22.3271 1.06152 23.0078 1.63151 23.5722 2.37305C24.1367 3.11458 24.5739 4.00553 24.8838 5.0459C25.1826 6.07519 25.332 7.22624 25.332 8.49902C25.332 9.61686 25.1771 10.7181 24.8672 11.8027C24.5573 12.8763 24.0924 13.8558 23.4726 14.7412C22.8528 15.6156 22.0892 16.3184 21.1816 16.8496C20.263 17.3698 19.2005 17.6299 17.9941 17.6299L17.9941 14.4424C18.8242 14.4424 19.5381 14.2819 20.1357 13.9609C20.7223 13.64 21.2093 13.2028 21.5967 12.6494C21.984 12.085 22.2718 11.4486 22.4599 10.7402C22.637 10.0208 22.7256 9.27376 22.7256 8.49902C22.7256 7.38118 22.5706 6.43489 22.2607 5.66015C21.9508 4.88542 21.5081 4.29883 20.9326 3.90039C20.3571 3.49088 19.6764 3.28613 18.8906 3.28613Z"
              fill="black"
            />
          </svg>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={leftImage.image}
              alt="Left Category"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-2 gap-6 w-1/2">
          {rightImages.map((image) => (
            <div
              key={image.id}
              className="relative h-26 rounded-lg overflow-hidden"
            >
              <Image
                src={image.image}
                alt={`Image ${image.id}`}
                className="object-cover"
								width={300}
								height={300}
                
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCategories;
