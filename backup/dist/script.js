console.clear();

const offset = 50;
const chartTheme = {
  title: null,
  credits: {
    enabled: false },

  tooltip: {
    pointFormat: '{point.y}<br/>' },

  legend: {
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    symbolPadding: 10,
    itemMarginTop: 5,
    itemMarginBottom: 5 },

  xAxis: {
    // visible: false
  },
  yAxis: {
    visible: false },

  plotOptions: {
    pie: {
      innerSize: '75%',
      dataLabels: {
        enabled: false },

      showInLegend: true },

    area: {
      marker: {
        enabled: false } } } };




const data = {
  name: 'ValueX DeFi ETF',
  series: 'A',
  description: 'The battle station is heavily shielded and carries a firepower greater than half the star fleet. It\'s defenses are designed around a direct large-scale assault. A small one-man fighter should be able to penetrate the outer defense. Pardon me for asking, sir, but what good are snub fighters going to be against that? Well, the Empire doesn\'t consider a small one-man fighter to be any threat, or they\'d have a tighter defense. An analysis of the plans provided by Princess Leia has demonstrated a weakness in the battle station.',
  risk: 'lowmed',
  details: [
  {
    title: 'Series',
    text: 'F' },

  {
    title: 'Currency',
    text: 'CAD' },

  {
    title: 'Inception date',
    text: '01/01/01' },

  {
    title: 'NAV',
    text: '$11.11' },

  {
    title: 'MER',
    text: '3.14%' },

  {
    title: 'Net Assets',
    text: '$12.34' },

  {
    title: 'Min investment',
    text: '$500' },

  {
    title: 'Status',
    text: 'Open' }],


  documents: [
  {
    name: 'Fund Facts' },

  {
    name: 'Prospectus' },

  {
    name: 'Annual Report' },

  {
    name: 'Semi-Annual Report' }],


  growth10k: {
    legend: {
      enabled: false },

    xAxis: {
      categories: [1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
      tickInterval: 20 },

    tooltip: {
      valuePrefix: '$' },

    series: [
    {
      name: '',
      type: 'line',
      data: [11520.34, 11520.03, 11500.73, 11500.60, 11490.16, 11470.37, 11470.55, 11440.96, 11410.10, 11350.58, 11330.86, 11340.42, 11330.54, 11330.92, 11360.83, 11400.67, 11420.61, 11460.24, 11480.23, 11490.29, 11500.73, 11510.19, 11510.59, 11520.39, 11540.23, 11560.65, 11570.57, 11550.84, 11550.64, 11560.69, 11550.10, 11530.66, 11540.60, 11550.33, 11570.11, 11570.29, 11590.02, 11570.50, 11570.95, 11540.64, 11520.04, 11500.36, 11480.99, 11480.51, 11470.09, 11460.37, 11460.94, 11480.78, 11480.96, 11470.72, 11450.89, 11450.13, 11450.07, 11440.00, 11450.08, 11460.14, 11450.45, 11460.16, 11460.10, 11470.92, 11470.93, 11460.75, 11460.69, 11480.32, 11480.82, 11500.29, 11510.38, 11510.10, 11510.30, 11510.62, 11520.68, 11540.01, 11530.17, 11530.03, 11530.36, 11520.17, 11510.79, 11510.78, 11500.69, 11500.33, 11500.64, 11500.09, 11500.55, 11500.96, 11510.05, 11520.20, 11520.01, 11520.25, 11520.54, 11520.40] }] },



  calendarReturns: {
    chart: {
      type: 'column' },

    legend: {
      enabled: false },

    xAxis: {
      categories: [2014, 2015, 2016, 2017, 2018] },

    tooltip: {
      valueSuffix: '%' },

    series: [
    {
      data: [2.50, 2.25, 1.50, 1.00, 0.75] }] },



  assetAllocation: {
    chart: {
      type: 'pie' },

    tooltip: {
      valueSuffix: '%' },

    series: [
    {
      type: 'pie',
      name: 'Percentages',
      data: [
      {
        name: 'Cash',
        y: 5.2 },

      {
        name: 'Fixed Income',
        y: 34.5 },

      {
        name: 'Canadian Equities',
        y: 18.7 },

      {
        name: 'US Equities',
        y: 23.5 },

      {
        name: 'International Equities',
        y: 18.1 }] }] } };







const app = new Vue({
  el: '#app',
  data() {
    return {
      fund: data,
      isStuck: false,
      directionChange: false,
      scrollDown: false,
      scrollPosition: 0,
      offsetTop: 0 };

  },
  computed: {
    isMd() {
      return window.matchMedia('(max-width: 991px)').matches;
    },
    sidebarStyles() {
      return {
        position: this.isStuck ? 'fixed' : null,
        bottom: this.isStuck && this.scrollDown ? offset + 'px' : null,
        top: this.isStuck && !this.scrollDown ?
        offset + 'px' :
        this.offsetTop && !this.isStuck ?
        this.offsetTop + 'px' :
        null,
        width: this._sidebarWidth + 'px' };

    } },

  mounted() {
    if (!this.isMd) {
      // ensure first render is complete to get proper positions
      this.$nextTick(() => {
        const { width, height, top } = this.$refs.sidebar.getBoundingClientRect();
        this._sidebarHeight = height;
        this._sidebarWidth = width;
        this._sidebarTop = top;
        this._sidebarBottom = this._sidebarTop +
        this._sidebarHeight +
        offset -
        window.innerHeight;
        this._footerTop = this.$refs.footer.getBoundingClientRect().top;
        this._footerHeight = this.$refs.footer.getBoundingClientRect().height;

        document.addEventListener('scroll', this.handleScroll);
      });
    }

    // chart initializing for demo
    Highcharts.theme = chartTheme;
    Highcharts.setOptions(Highcharts.theme);
    Highcharts.chart('chart-assetAllocation', data.assetAllocation);
    Highcharts.chart('chart-calendarReturns', data.calendarReturns);
    Highcharts.chart('chart-growth10k', data.growth10k);
  },
  methods: {
    handleScroll() {
      let newScrollPosition = window.pageYOffset;
      this.directionChange = false;

      // scrolling downwards
      if (newScrollPosition > this.scrollPosition) {
        this.checkPosition(newScrollPosition, 'down');

        // scrolling upwards
      } else {
        this.checkPosition(newScrollPosition, 'up');
      }

      // save the current scroll position to compare to the next scroll position
      this.scrollPosition = newScrollPosition;
    },
    checkPosition(pos, dir = 'down') {
      // check if the direction has recently changed
      if (dir === 'up' && this.scrollDown) {
        this.directionChange = true;
        this.scrollDown = false;
      }
      if (dir === 'down' && !this.scrollDown) {
        this.directionChange = true;
        this.scrollDown = true;
      }

      // check if the sidebar should be position fixed / isStuck
      if (
      dir === 'up' &&
      pos < this.offsetTop - offset + this._sidebarTop ||
      dir == 'down' &&
      pos > this._sidebarBottom + this.offsetTop)
      {
        this.isStuck = true;
      } else {
        // if the direction has recently changed, set the top style to the current top position of the sidebar
        if (this.directionChange) {
          this.offsetTop = pos + this.$refs.sidebar.getBoundingClientRect().top - this._sidebarTop;
        }
        this.isStuck = false;
      }

      // if the sidebar / scroll has reached it's usual place at the top of the page
      if (dir === 'up' && pos <= this._sidebarTop - offset) {
        this.isStuck = false;
        this.offsetTop = null;
      }

      // if we've reached the footer area
      // then unstick the sidebar and set the top style
      if (dir === 'down' && pos > this._footerTop - window.innerHeight - offset) {
        this.isStuck = false;
        this.offsetTop = this._footerTop - this._footerHeight - this._sidebarHeight - this._sidebarTop - offset * 2;
        // dynamic positioning ??? sometimes sets too low top if scrolling fast
        // this.offsetTop = pos + this.$refs.sidebar.getBoundingClientRect().top - this._sidebarTop;
      }
    } } });



const fundData = {
  funds: [
  {
    name: 'PH&N Canadian Money Market Fund',
    code: '1234',
    series: 'F',
    assetClass: 'Money Market Funds',
    risk: 'low',
    mer: 0.12,
    objective: 'He said that I was going to get to rob the bank for real. I think like a girl, I think. Not to discriminate against budgets, I feel that independent films tend to ask more questions and don\'t pretend to know as much as the bigger films, which tend to think they know everything. I\'m not a good enough actor to become a character. Then, telling Derek Cianfrance that I\'d ever I could rob a bank I\'d do it on my motorcycle, and he said \'That\'s weird, I just wrote a script about that\'.' },
  {
    name: 'PH&N Bond Fund',
    code: '8901',
    series: 'F',
    assetClass: 'Fixed Income Funds',
    risk: 'low',
    mer: 0.34,
    objective: 'It\'s nice to be around people that have a sense of the world around them, that are, in general, more conscious and conscientious. I went through puberty in a theme park. Anything happens a minute either side of that, and you\'re on your own. I think the one thing I love most about being an adult is the right to buy candy whenever and wherever I want. I won\'t eat my cereal.' },
  {
    name: 'PH&N Balanced Fund',
    code: '567',
    series: 'F',
    assetClass: 'Balanced Funds and Portfolio Solutions',
    risk: 'low to meduim',
    mer: 0.56,
    objective: 'I don\'t carry a gun. Change moves in spirals, not circles. Hey girl, I brought home a few bottles of wine since I know you needed more corks for that pinterest project. We\'re always changing. I could be whatever you want.' }] };