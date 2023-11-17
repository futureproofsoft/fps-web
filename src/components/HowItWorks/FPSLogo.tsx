import React from 'react';

//stop-color to stopColor
//stop-opacity to stopOpacity
export const FPSLogo: React.FC<{outsideFillColor?: string}> = ({outsideFillColor}) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 947.49 981.56">
        <defs>
            <style>
                {`.cls-1 {
                fill: none;
            }`}

                {`.cls-2 {
                fill: url(#linear-gradient);
            }`}

                {` .cls-3 {
                fill: url(#linear-gradient-2);
            }`}

                {`.cls-4 {
                fill: url(#linear-gradient-3);
            }`}

                {`.cls-5 {
                fill: url(#linear-gradient-4);
            }`}

                {`.cls-6 {
                clip - path: url(#clip-path);
            }`}

                {` .cls-7 {
                fill: url(#radial-gradient);
            }`}

                {`.cls-8 {
                fill: ${outsideFillColor ? outsideFillColor : 'url(#linear-gradient-5)'};
            }`}
            </style>
            <linearGradient id="linear-gradient" x1="231.63" y1="705.41" x2="483.32" y2="705.41"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#22a8c9"/>
                <stop offset="0.1" stopColor="#198db6"/>
                <stop offset="0.22" stop-color="#1073a3"/>
                <stop offset="0.35" stop-color="#095f95"/>
                <stop offset="0.51" stop-color="#04518b"/>
                <stop offset="0.69" stop-color="#014985"/>
                <stop offset="1" stop-color="#004683"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="371.26" y1="153.71" x2="738.04" y2="365.47"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#22a8c9"/>
                <stop offset="1" stop-color="#003f83"/>
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="50.71" y1="668.87" x2="255.42" y2="704.97"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#004683"/>
                <stop offset="0.29" stop-color="#0d6d9f"/>
                <stop offset="0.58" stop-color="#198db6"/>
                <stop offset="0.83" stop-color="#20a1c4"/>
                <stop offset="1" stop-color="#22a8c9"/>
            </linearGradient>
            <linearGradient id="linear-gradient-4" x1="449.02" y1="722.68" x2="550.29" y2="444.45"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#64c9b9"/>
                <stop offset="0.44" stop-color="#9bd9c9"/>
                <stop offset="0.81" stop-color="#c4e5d5"/>
                <stop offset="1" stop-color="#d3eada"/>
            </linearGradient>
            <clipPath id="clip-path">
                <circle className="cls-1" id='ball' cx="500.58" cy="581.04" r="148"/>
            </clipPath>
            <radialGradient id="radial-gradient ball" cx="514.08" cy="480.54" r="132.5" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fdfacc"/>
                <stop offset="0.17" stop-color="#fdfacc" stop-opacity="0.78"/>
                <stop offset="0.39" stop-color="#fdfacc" stop-opacity="0.51"/>
                <stop offset="0.6" stop-color="#fdfacc" stop-opacity="0.29"/>
                <stop offset="0.78" stop-color="#fdfacc" stop-opacity="0.13"/>
                <stop offset="0.91" stop-color="#fdfacc" stop-opacity="0.04"/>
                <stop offset="1" stop-color="#fdfacc" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="linear-gradient-5" x1="33.36" y1="469.71" x2="914.12" y2="978.21"
                            gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#004683"/>
                <stop offset="0.08" stop-color="#06578f"/>
                <stop offset="0.37" stop-color="#1a91b9"/>
                <stop offset="0.52" stop-color="#22a8c9"/>
                <stop offset="0.6" stop-color="#20a2c4"/>
                <stop offset="0.71" stop-color="#198fb7"/>
                <stop offset="0.84" stop-color="#0f72a2"/>
                <stop offset="0.99" stop-color="#014985"/>
                <stop offset="1" stop-color="#004683"/>
            </linearGradient>
        </defs>
        <title>symbol</title>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-2" id='inside'
                      d="M231.63,784.79q6.5,4,13.16,7.94c71-37.91,153.8-96.89,238.53-171.53l-6.62-3.12C387.4,696.9,299.79,755.59,231.63,784.79Z"/>
                <path className="cls-3" id='inside'
                      d="M347.72,391.06c178.2-170.67,362.07-267.9,410.67-217.15C806,223.6,706.26,396.7,534.82,564.1c2.4,1,4.81,2.07,7.21,3.12q15-14.4,30-29.4c222.77-222.77,350.73-456,285.8-520.93S559.72,79.92,337,302.69c-55.55,55.54-105.2,111.74-147.44,165.82,23.07,2,47.7,5.42,73.59,10.22C288.9,449.71,317.24,420.26,347.72,391.06Z"/>
                <path className="cls-4" id='inside'
                      d="M225.8,787.23c-53,21.73-93.49,24.87-112.75,4.76-15.88-16.58-15.35-46.93-1.22-86.22q1.32-3.63,2.78-7.37c18-46,53.49-103.33,102.27-164.76-25.9-4.14-49.78-6.25-71-6.28-31,44.22-56.27,86.17-74.87,124.17q-2.79,5.72-5.39,11.31C30.84,737.75,23.49,796,51.15,823.61c31,31,100.18,18.07,188.29-28.05Q232.54,791.41,225.8,787.23Z"/>
                <path className="cls-1"
                      d="M466.52,613.38c-90.28-41.19-177.77-68.26-249.64-79.74C168.1,595.07,132.63,652.35,114.61,698.4c31,28.47,70.71,58,117,86.39,68.16-29.2,155.77-87.89,245.07-166.71Q471.63,615.71,466.52,613.38Z"/>
                <path className="cls-1"
                      d="M113.05,792c19.26,20.11,59.78,17,112.75-4.76-43.28-26.78-81.67-54.29-114-81.46C97.7,745.06,97.17,775.41,113.05,792Z"/>
                <path className="cls-1"
                      d="M758.39,173.91c-48.6-50.75-232.47,46.48-410.67,217.15-30.48,29.2-58.82,58.65-84.62,87.67,81.35,15.09,175.13,43.83,271.72,85.37C706.26,396.7,806,223.6,758.39,173.91Z"/>
                <path className="cls-1"
                      d="M357.81,851.65C560,943.88,748.16,965.31,778.18,899.51c29.18-64-101.85-186.78-294.86-278.31-84.73,74.64-167.53,133.62-238.53,171.53A1184.65,1184.65,0,0,0,357.81,851.65Z"/>
                <path className="cls-1"
                      d="M46.14,565.52c-10.33,22.63-.59,52.63,24.85,86,18.6-38,43.87-79.95,74.87-124.17C94.07,527.31,57.92,539.69,46.14,565.52Z"/>
                <circle className="cls-5" cx="500.58" cy="581.04" r="148"/>
                <g className="cls-6">
                    <circle className="cls-7" cx="514.08" cy="480.54" r="132.5"/>
                </g>
                <path className="cls-8" id='outside'
                      d="M542.09,567.25l-.06,0c-2.4-1.05-4.81-2.09-7.21-3.12-96.59-41.54-190.37-70.28-271.72-85.37-25.89-4.8-50.52-8.22-73.59-10.22-96.6-8.41-165.69,7.92-184.49,51-16.21,37.18,7.61,88.22,60.58,143.3q2.59-5.6,5.39-11.31c-25.44-33.38-35.18-63.38-24.85-86,11.78-25.83,47.93-38.21,99.72-38.16,21.24,0,45.12,2.14,71,6.28,71.87,11.48,159.36,38.55,249.64,79.74q5.12,2.34,10.18,4.7l6.62,3.12c193,91.53,324,214.35,294.86,278.31-30,65.8-218.23,44.37-420.37-47.86a1184.65,1184.65,0,0,1-113-58.92q-6.66-4-13.16-7.94c-46.31-28.44-86-57.92-117-86.39q-1.45,3.74-2.78,7.37c32.3,27.17,70.69,54.68,114,81.46q6.73,4.18,13.64,8.33a1446.91,1446.91,0,0,0,166,85.12c258.86,112.9,499.32,134.25,537.07,47.7S801,680.14,542.09,567.25Z"/>
            </g>
        </g>
    </svg>)

}
