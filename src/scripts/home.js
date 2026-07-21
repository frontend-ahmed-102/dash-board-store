import Chart from 'chart.js/auto';



(function () {
        const closeBanners = document.querySelectorAll('.js-banner-close');
        closeBanners.forEach(closeBanner => {
            closeBanner.addEventListener('click', event => {
                const banner = event.target.parentNode;
                banner.classList.add('collapse');

                banner.addEventListener('transitionend', function (event) {
                    if (event.target === this) {
                        this.remove();
                    }
                })
            })
        })
    })();

 
  const ctx = document.getElementById('example-chart');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفبمر', 'ديسمبر'],
      datasets: [{
        label: 'مبيعات الشهر',
        data: [423, 534, 1200, 122, 644, 322, 1240, 1630, 234, 442, 543, 123],
        borderColor: '#2541b2',
        backgroundColor: 'transparent',
        lineTension: 0.2
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false
        }
      },
      scales: {
        y: {
          display: false
        },
        x: {
            position: 'top'
        }
      }
    }
  });

  const navigation = document.querySelector('.c-table__navigation');

  console.log(navigation);

  const randomArray = (myLength, max) => Array.from({ length: myLength }, () => Math.round(Math.random() * max));

  navigation.addEventListener('click', () => {
    chart.data.datasets[0].data = randomArray(12, 1200);
    chart.update();
  });



  (function () {
        const tabs = document.querySelectorAll('.js-tabs');

        Array.from(tabs, (tab) => {
            const tabsLinks = tab.querySelectorAll('.js-tab-link');
            let currentActiveTab = tab.querySelector('.js-tab-link.is-active');
            const toggleTab = (toggledTabLink = currentActiveTab) => {
                currentActiveTab = toggledTabLink;
                toggledTabLink.classList.toggle('is-active');

                const toggledTabData = toggledTabLink.dataset.index;
                const toggledTabArea = tab.querySelector(`.js-tab-area[data-indexed=${toggledTabData}]`);
                toggledTabArea.classList.toggle('is-active');

            };

            if (!currentActiveTab) {
                toggleTab(tabsLinks[0]);
            }


            tabsLinks.forEach(tabsLink => {
                tabsLink.addEventListener('click', function (event) {
                    if (currentActiveTab === this) {
                        return;
                    }

                    if (currentActiveTab) {
                        toggleTab();
                    }

                    toggleTab(this);
                })
            })
        })
    })();