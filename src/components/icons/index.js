import React from 'react';

const Svg = ({ children, className }) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      {children}
    </svg>
  );
};
// Sidebar Icons
export const TwitterIcon = () => {
  return (
    <Svg className="h-8">
      <g>
        <path
          d="M23.643 4.93701C22.808 5.30701 21.911 5.55701 20.968 5.67001C21.93 5.09401 22.668 4.18001 23.016 3.09201C22.116 3.62601 21.119 4.01401 20.058 4.22201C19.208 3.31801 17.998 2.75201 16.658 2.75201C14.086 2.75201 12 4.83801 12 7.41201C12 7.77601 12.042 8.13001 12.12 8.47201C8.24701 8.27701 4.81601 6.42201 2.51801 3.60401C2.11801 4.29401 1.88801 5.09401 1.88801 5.94601C1.88801 7.56201 2.71101 8.98901 3.96001 9.82401C3.19601 9.79901 2.47801 9.59001 1.85001 9.24101V9.30101C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95201C21.332 7.75201 21.327 7.55001 21.318 7.35001C22.228 6.69201 23.018 5.87301 23.641 4.94001L23.643 4.93701Z"
          fill="#1DA1F2"
        />
      </g>
    </Svg>
  );
};
export const DotsIcon = () => {
  return (
    <Svg className="h-5">
      <g>
        <circle cx="5" cy="12" r="2"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="19" cy="12" r="2"></circle>
      </g>
    </Svg>
  );
};
export const HomeIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M22.46 7.57002L12.357 2.11502C12.134 1.99502 11.867 1.99502 11.644 2.11502L1.54299 7.57002C1.17899 7.76702 1.04299 8.22202 1.23999 8.58702C1.37499 8.83702 1.63399 8.98002 1.89999 8.98002C2.01999 8.98002 2.14299 8.95002 2.25599 8.89002L3.07099 8.45002L4.69999 19.963C4.91399 21.178 6.00799 22.025 7.35799 22.025H16.64C17.992 22.025 19.085 21.177 19.303 19.938L20.929 8.44802L21.747 8.89002C22.111 9.08302 22.567 8.95002 22.764 8.58602C22.96 8.22302 22.824 7.76802 22.46 7.57002ZM17.822 19.703C17.715 20.309 17.119 20.525 16.642 20.525H7.35999C6.87999 20.525 6.28499 20.309 6.18199 19.727L4.47999 7.69002L12 3.62802L19.522 7.68802L17.822 19.703Z" />
        <path d="M8.21997 12.1841C8.21997 14.2681 9.91497 15.9641 12 15.9641C14.085 15.9641 15.78 14.2681 15.78 12.1841C15.78 10.1001 14.085 8.40405 12 8.40405C9.91497 8.40405 8.21997 10.1001 8.21997 12.1841ZM14.28 12.1841C14.28 13.4421 13.258 14.4641 12 14.4641C10.742 14.4641 9.71997 13.4421 9.71997 12.1841C9.71997 10.9261 10.742 9.90405 12 9.90405C13.258 9.90405 14.28 10.9261 14.28 12.1841Z" />
      </g>
    </Svg>
  );
};
export const HomeFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M22.58 7.34998L12.475 1.89698C12.178 1.73698 11.821 1.73698 11.525 1.89698L1.42502 7.34998C0.939018 7.61398 0.758018 8.21998 1.02002 8.70598C1.20002 9.04098 1.54502 9.23098 1.90002 9.23098C2.06002 9.23098 2.22402 9.19298 2.37502 9.11098L3.10902 8.71498L4.69902 19.965C4.91502 21.179 6.00902 22.027 7.35902 22.027H16.641C17.991 22.027 19.085 21.179 19.303 19.939L20.891 8.71398L21.628 9.11198C22.113 9.37498 22.72 9.19398 22.982 8.70798C23.245 8.22198 23.062 7.61498 22.578 7.35298L22.58 7.34998ZM12 15.435C10.205 15.435 8.75002 13.98 8.75002 12.185C8.75002 10.39 10.205 8.93498 12 8.93498C13.795 8.93498 15.25 10.39 15.25 12.185C15.25 13.98 13.795 15.435 12 15.435Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};
export const ExploreIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
      </g>
    </Svg>
  );
};
export const ExploreFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M20.585 9.46798C21.245 9.46798 21.785 8.92998 21.785 8.26798C21.785 7.60598 21.245 7.06798 20.585 7.06798H17.365L17.675 3.52098C17.702 3.20298 17.605 2.89098 17.398 2.64598C17.192 2.40098 16.903 2.24998 16.576 2.22098C15.926 2.18598 15.341 2.65298 15.283 3.31398L14.957 7.06798H9.9L10.208 3.52298C10.268 2.86498 9.778 2.28098 9.111 2.22098C8.446 2.17098 7.876 2.65098 7.818 3.31298L7.493 7.06698H4.163C3.5 7.06698 2.963 7.60498 2.963 8.26698C2.963 8.92898 3.501 9.46698 4.163 9.46698H7.285L6.845 14.531H3.416C2.754 14.531 2.216 15.071 2.216 15.731C2.216 16.391 2.754 16.933 3.416 16.933H6.636L6.326 20.481C6.269 21.138 6.758 21.721 7.416 21.781L7.522 21.786C8.148 21.786 8.662 21.314 8.717 20.688L9.044 16.935H14.1L13.792 20.479C13.732 21.137 14.222 21.721 14.882 21.781L14.988 21.786C15.605 21.786 16.13 21.304 16.183 20.688L16.508 16.935H19.838C20.498 16.935 21.038 16.395 21.038 15.735C21.038 15.075 20.498 14.533 19.838 14.533H16.716L17.156 9.46898H20.586L20.585 9.46798ZM14.747 9.46798L14.307 14.531H9.253L9.693 9.46898H14.748L14.747 9.46798Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};

export const NotificationsIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
      </g>
    </Svg>
  );
};
export const NotificationsFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90501 18.782 5.65601 17.247 4.10401C15.872 2.71101 14.01 1.94001 12.005 1.93201H11.992C9.98798 1.94001 8.12597 2.71201 6.74997 4.10401C5.21597 5.65701 4.38297 7.90601 4.40397 10.437C4.44097 14.769 2.38397 16.404 2.30197 16.467C2.04197 16.661 1.93597 16.997 2.03697 17.305C2.13797 17.613 2.42697 17.82 2.74997 17.82H7.24397C7.34397 20.364 9.43198 22.407 12 22.407C14.568 22.407 16.655 20.364 16.756 17.82H21.25C21.574 17.82 21.86 17.612 21.962 17.305C22.064 16.998 21.957 16.661 21.697 16.468ZM12 20.408C10.534 20.408 9.34298 19.261 9.24398 17.82H14.756C14.656 19.26 13.466 20.407 12 20.407V20.408Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};
export const MessagesIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
      </g>
    </Svg>
  );
};
export const MessagesFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M11.55 12.082C11.823 12.264 12.177 12.264 12.45 12.082L22 5.716V5.5C22 4.26 20.99 3.25 19.75 3.25H4.25C3.01 3.25 2 4.26 2 5.5V5.697L11.55 12.082Z"
          fill="currentColor"
        />
        <path
          d="M13.26 13.295C12.877 13.55 12.44 13.677 12 13.677C11.56 13.677 11.123 13.55 10.74 13.294L2 7.45203V19.122C2 20.362 3.01 21.372 4.25 21.372H19.75C20.99 21.372 22 20.362 22 19.122V7.47003L13.26 13.293V13.295Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};
export const BookmarksIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
      </g>
    </Svg>
  );
};
export const BookmarksFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M19.9 23.5C19.7 23.5 19.6 23.5 19.5 23.4L12 17.9L4.49999 23.3C4.29999 23.5 3.99999 23.5 3.69999 23.4C3.49999 23.3 3.29999 23 3.29999 22.7V5.60002C3.29999 4.40002 4.29999 3.40002 5.49999 3.40002H18.3C19.5 3.40002 20.5 4.40002 20.5 5.60002V22.7C20.5 23 20.3 23.2 20.1 23.4C20.1 23.5 20 23.5 19.9 23.5Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};
export const ListsIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
        <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
      </g>
    </Svg>
  );
};
export const ListsFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M19.75 2H4.25C3.013 2 2 3.013 2 4.25V19.75C2 20.987 3.013 22 4.25 22H19.75C20.987 22 22 20.987 22 19.75V4.25C22 3.013 20.987 2 19.75 2ZM11 16.75H7C6.586 16.75 6.25 16.414 6.25 16C6.25 15.586 6.586 15.25 7 15.25H11C11.414 15.25 11.75 15.586 11.75 16C11.75 16.414 11.414 16.75 11 16.75ZM17 12.75H7C6.586 12.75 6.25 12.414 6.25 12C6.25 11.586 6.586 11.25 7 11.25H17C17.414 11.25 17.75 11.586 17.75 12C17.75 12.414 17.414 12.75 17 12.75ZM17 8.75H7C6.586 8.75 6.25 8.414 6.25 8C6.25 7.586 6.586 7.25 7 7.25H17C17.414 7.25 17.75 7.586 17.75 8C17.75 8.414 17.414 8.75 17 8.75Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};
export const ProfileIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
      </g>
    </Svg>
  );
};
export const ProfileFillIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <path
          d="M12.225 12.165C10.869 12.165 9.35301 12.015 8.38501 10.909C7.57101 9.97903 7.30801 8.54103 7.58001 6.51703C7.96001 3.69103 9.69601 2.00403 12.226 2.00403C14.756 2.00403 16.493 3.69103 16.872 6.51703C17.144 8.54103 16.88 9.97703 16.066 10.909C15.096 12.015 13.581 12.164 12.226 12.164L12.225 12.165ZM18.074 22.015H6.37601C5.71301 22.015 5.12601 21.735 4.72601 21.229C4.30401 20.695 4.15001 19.959 4.31601 19.261C5.15001 15.731 8.40201 13.264 12.224 13.264C16.046 13.264 19.298 15.73 20.134 19.261C20.298 19.959 20.144 20.695 19.722 21.228C19.322 21.733 18.737 22.013 18.074 22.013V22.015Z"
          fill="currentColor"
        />
      </g>
    </Svg>
  );
};
export const MoreIcon = () => {
  return (
    <Svg className="w-7 h-7">
      <g>
        <circle cx="17" cy="12" r="1.5"></circle>
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="7" cy="12" r="1.5"></circle>
        <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
      </g>
    </Svg>
  );
};

// Header Icons

export const PopulerIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
      </g>
    </Svg>
  );
};

export const ImageIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
        <circle cx="8.868" cy="8.309" r="1.542"></circle>
      </g>
    </Svg>
  );
};
export const GIFIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path>
        <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path>
      </g>
    </Svg>
  );
};

export const PollIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path>
      </g>
    </Svg>
  );
};

export const EmojiIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
        <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path>
        <circle cx="14.738" cy="9.458" r="1.478"></circle>
        <circle cx="9.262" cy="9.458" r="1.478"></circle>
      </g>
    </Svg>
  );
};

export const ScheduleIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path>
        <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"></path>
        <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path>
        <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path>
      </g>
      ;
    </Svg>
  );
};

export const ReplyIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
      </g>
    </Svg>
  );
};

export const ReTweetIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
      </g>
    </Svg>
  );
};

export const LikeIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
      </g>
    </Svg>
  );
};

export const ShareIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
        <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
      </g>
    </Svg>
  );
};

// Widget Icons

export const SearchIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <g>
        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
      </g>
    </Svg>
  );
};
