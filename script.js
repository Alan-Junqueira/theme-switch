const switchTheme = () => {
  const body = document.querySelector('body');
  const circleSwitch = document.querySelector('.circleSwitch');
  const darkImage = document.querySelector('.dark');
  const lightImage = document.querySelector('.light');
  arrayImageAndSwitch = [circleSwitch, darkImage, lightImage];

  arrayImageAndSwitch.forEach((item) => {
    item.addEventListener('click', (event) => {
      if (screen.availWidth >= 1331 && screen.availWidth <= 1440) {
        if (event.clientX < 700) {
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
      } else if (screen.availWidth >= 1171 && screen.availWidth <= 1330) {
        if (event.clientX < 625) {
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
      } else if (screen.availWidth >= 1025 && screen.availWidth <= 1170) {
        if (event.clientX < 545) {
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
      } else if (screen.availWidth >= 931 && screen.availHeight <= 1024) {
        if (event.clientX < 475) {
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
      } else if (screen.availWidth >= 769 && screen.availHeight <= 930) {
        if (event.clientX < 425) {
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
      } else if (screen.availWidth >= 581 && screen.availHeight <= 768) {
        if (event.clientX < 340) {
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
      } else if (screen.availWidth >= 425 || screen.availHeight <= 580) {
        if (event.clientX < 245) {
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
      } else if (screen.availWidth === 375) {
        if (event.clientX < 165) {
          circleSwitch.classList.add('darkThemeSwitcherSmallScreen');
          circleSwitch.classList.remove('lightThemeSwitcherSmallScreen');
          body.classList.add('darkThemeBg');
          body.classList.remove('lightThemeBg');
        } else {
          circleSwitch.classList.add('lightThemeSwitcherSmallScreen');
          circleSwitch.classList.remove('darkThemeSwitcherSmallScreen');
          body.classList.remove('darkThemeBg');
          body.classList.add('lightThemeBg');
        }
      } else if (screen.availWidth === 320) {
        if (event.clientX < 155) {
          circleSwitch.classList.add('darkThemeSwitcherVerySmallScreen');
          circleSwitch.classList.remove('lightThemeSwitcherVerySmallScreen');
          body.classList.add('darkThemeBg');
          body.classList.remove('lightThemeBg');
        } else {
          circleSwitch.classList.add('lightThemeSwitcherVerySmallScreen');
          circleSwitch.classList.remove('darkThemeSwitcherVerySmallScreen');
          body.classList.remove('darkThemeBg');
          body.classList.add('lightThemeBg');
        }
      }
    });
  });
};
switchTheme();
