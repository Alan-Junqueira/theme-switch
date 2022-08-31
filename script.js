const switchTheme = () => {
  const body = document.querySelector('body');
  const circleSwitch = document.querySelector('.circleSwitch');
  const darkImage = document.querySelector('.dark');
  const lightImage = document.querySelector('.light');
  arrayImageAndSwitch = [circleSwitch, darkImage, lightImage];

  arrayImageAndSwitch.forEach((item) => {
    item.addEventListener('click', (event) => {
      if (screen.availWidth === 1440) {
        if (event.clientX < 680) {
          circleSwitch.classList.add('darkThemeSwitcher');
          circleSwitch.classList.remove('lightThemeSwitcher');
          body.classList.add('darkThemeBg');
          body.classList.remove('lightThemeBg');
        } else {
          circleSwitch.classList.add('lightThemeSwitcher');
          circleSwitch.classList.remove('darkThemeSwitcher');
          body.classList.remove('darkThemeBg');
          body.classList.add('lightThemeBg');
        }
      } else if (screen.availWidth === 1024) {
        if (event.clientX < 475) {
          circleSwitch.classList.add('darkThemeSwitcher');
          circleSwitch.classList.remove('lightThemeSwitcher');
        } else {
          circleSwitch.classList.add('lightThemeSwitcher');
          circleSwitch.classList.remove('darkThemeSwitcher');
        }
      } else if (screen.availWidth <= 768) {
        if (event.clientX < 350) {
          circleSwitch.classList.add('darkThemeSwitcher');
          circleSwitch.classList.remove('lightThemeSwitcher');
        } else {
          circleSwitch.classList.add('lightThemeSwitcher');
          circleSwitch.classList.remove('darkThemeSwitcher');
        }
      } else if (screen.availWidth <= 425) {
        if (event.clientX < 175) {
          circleSwitch.classList.add('darkThemeSwitcher');
          circleSwitch.classList.remove('lightThemeSwitcher');
        } else {
          circleSwitch.classList.add('lightThemeSwitcher');
          circleSwitch.classList.remove('darkThemeSwitcher');
        }
      } else if (screen.availWidth <= 375) {
        if (event.clientX < 165) {
          circleSwitch.classList.add('darkThemeSwitcherSmallScreen');
          circleSwitch.classList.remove('lightThemeSwitcherSmallScreen');
        } else {
          circleSwitch.classList.add('lightThemeSwitcherSmallScreen');
          circleSwitch.classList.remove('darkThemeSwitcherSmallScreen');
        }
      } else if (screen.availWidth <= 320) {
        if (event.clientX < 155) {
          circleSwitch.classList.add('darkThemeSwitcherVerySmallScreen');
          circleSwitch.classList.remove('lightThemeSwitcherVerySmallScreen');
        } else {
          circleSwitch.classList.add('lightThemeSwitcherVerySmallScreen');
          circleSwitch.classList.remove('darkThemeSwitcherVerySmallScreen');
        }
      } else if (screen.availWidth > 1440) {
        if (event.clientX < 680) {
          circleSwitch.classList.add('darkThemeSwitcher');
          circleSwitch.classList.remove('lightThemeSwitcher');
          body.classList.add('darkThemeBg');
          body.classList.remove('lightThemeBg');
        } else {
          circleSwitch.classList.add('lightThemeSwitcher');
          circleSwitch.classList.remove('darkThemeSwitcher');
          body.classList.remove('darkThemeBg');
          body.classList.add('lightThemeBg');
        }
      } else if (screen.availWidth > 1024) {
        if (event.clientX < 650) {
          circleSwitch.classList.add('darkThemeSwitcher');
          circleSwitch.classList.remove('lightThemeSwitcher');
          body.classList.add('darkThemeBg');
          body.classList.remove('lightThemeBg');
        } else {
          circleSwitch.classList.add('lightThemeSwitcher');
          circleSwitch.classList.remove('darkThemeSwitcher');
          body.classList.remove('darkThemeBg');
          body.classList.add('lightThemeBg');
        }
      }
    });
  });
};
switchTheme();
