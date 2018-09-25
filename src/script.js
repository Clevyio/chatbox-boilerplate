/***
 *               /$$
 *              | $$
 *      /$$$$$$$| $$  /$$$$$$  /$$    /$$ /$$   /$$
 *     /$$_____/| $$ /$$__  $$|  $$  /$$/| $$  | $$
 *    | $$      | $$| $$$$$$$$ \  $$/$$/ | $$  | $$
 *    | $$      | $$| $$_____/  \  $$$/  | $$  | $$
 *    |  $$$$$$$| $$|  $$$$$$$   \  $/   |  $$$$$$$
 *     \_______/|__/ \_______/    \_/     \____  $$
 *                                        /$$  | $$
 *                                       |  $$$$$$/
 *                                        \______/
 */


(function (d) {

  const currentScript = d.getElementById('clevy-chatbox');
  const iframeSrc = currentScript.src.split('webapp_url=')[1];

  /**
   * Defaults
   */
  const loaded = {
    iframe: false,
    styles: false
  };
  let iframeInserted = false;

  /**
   * -----------------------------------------------------------------------
   * Modify this section if you wish to import our CSS file (src/style.scss)
   * Otherwise you can remove this and use your own CSS file.
   * -----------------------------------------------------------------------
   */
  const linkStyleTag = d.createElement('link');
  linkStyleTag.rel = 'stylesheet';
  linkStyleTag.type = 'text/css';
  linkStyleTag.href = '../dist/style.min.css'; // Replace with the actual path to the CSS file
  const headTag = d.querySelector('head');
  headTag.appendChild(linkStyleTag);

  linkStyleTag.addEventListener('load', function () {
    loaded.styles = true;
  });

  /**
   * Make the chatbox toggle button appear only when the stylesheet is loaded
   */
  const loadingWatcher = setInterval(function () {
    if (loaded.styles) {
      container.classList.remove(`${classes.containerLoading}`);
      clearInterval(loadingWatcher);
    }
  }, 200);

  /**
   * -----------------------------------------------------------------------
   * End of section to modify
   * -----------------------------------------------------------------------
   */


  const classes = {
    container: 'l-clevy-container',
    containerLoading: 'l-clevy-container--loading',
    iframeContainer: 'l-clevy-iframe-container',
    iframe: 'l-clevy-iframe-container__iframe',
    launcherContainer: 'l-clevy-launcher-container',
    launcherWrapper: 'l-clevy-launcher-wrapper',
    launcherOpenIcon: 'l-clevy-launcher-wrapper__icon-open',
    launcherCloseIcon: 'l-clevy-launcher-wrapper__icon-close',
    iframeContainerCloseIcon: 'l-clevy-iframe-container__icon-close',
  };


  const HTML = `
    <div class=${classes.iframeContainer}>
      <div class=${classes.iframeContainerCloseIcon}>
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
          <path d='M13.978 12.637l-1.341 1.341L6.989 8.33l-5.648 5.648L0 12.637l5.648-5.648L0 1.341 1.341 0l5.648 5.648L12.637 0l1.341 1.341L8.33 6.989l5.648 5.648z'/>
        </svg>
      </div>

      <!-- <iframe class=${classes.iframe} src=${iframeSrc} frameBorder='0'></iframe> -->

    </div>
    <div class=${classes.launcherContainer}>
      <div class=${classes.launcherWrapper}>

        <!-- svg open  -->
        <div class=${classes.launcherOpenIcon}>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='#FFFFFF'>
              <path d='M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z'/>
          </svg>
        </div>

        <!-- svg close -->
        <div class=${classes.launcherCloseIcon}>
          <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='#FFFFFF'>
            <path d='M13.978 12.637l-1.341 1.341L6.989 8.33l-5.648 5.648L0 12.637l5.648-5.648L0 1.341 1.341 0l5.648 5.648L12.637 0l1.341 1.341L8.33 6.989l5.648 5.648z'/>
          </svg>
        </div>

      </div>
    </div>`;

  /**
   * Insert our script in the page
   */
  const container = d.createElement('div');
  container.className = `${classes.container} ${classes.containerLoading}`;
  container.innerHTML = HTML;

  /**
   * Open/close the chatbox and show open/close buttons on user click
   */
  container.querySelector(`.${classes.launcherContainer}`).addEventListener('click', function () {
    container.classList.toggle(`${classes.container}--visible`);

    if (!iframeInserted) {
      const iframeContainer = document.querySelector(`.${classes.iframeContainer}`);
      iframeContainer.innerHTML += `<iframe class=${classes.iframe} src=${iframeSrc} frameBorder='0'></iframe>`;
      iframeInserted = true;
    }
  });
  container.querySelector(`.${classes.iframeContainerCloseIcon}`).addEventListener('click', function () {
    container.classList.toggle(`${classes.container}--visible`);
  });

  d.body.appendChild(container);

})(document, undefined);
