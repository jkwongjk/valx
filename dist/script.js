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
  ticker: '$VALX',
  description: 'The ValueX DeFi ETF (VALX) seeks to find undervalued DeFi assets using a formula that accounts for a protocol\'s value creation and value capture mechanisms.',
  risk: 'lowmed',
  objective: 'ValueX ETFs use a value investing paradigm that involves weighting DeFi tokens according to a ratio of their Total Value Locked (TVL) and Market Capitalization (MC). The result is a basket of DeFi tokens that appear to be trading for less than their intrinsic value, which means the ValueX DeFi ETF picks assets that the crypto markets are currently undervaluing.',
  value: 'Value investing is a long term investment strategy based on a financial analysis of an asset\'s long term fundamentals, popularized by Warren Buffet\'s approach to the stock market. By combining a value investing approach with a crypto exchange traded fund (ETF), ValueX provides investors with a diversified portfolio that protects against volatility, while seeking to supply higher than average returns through long term investments in undervalued crypto assets.',
  methodology: 'In decentralized finance (DeFi), investors stake their capital in a protocol to provide liquidity and collateral for lending and other financial activities. This is indicated by the Total Value Locked (TVL) metric, which represents the value of assets that investors have chosen to stake in a protocol in return for a return on their assets. While TLV is not without its own nuances, the metric can be useful as a leading indicator of investor faith in a DeFi system. Similarly, most DeFi protocols also have a utility token which can be used for governance, staking, and collateral, among other use values. These tokens can be traded on decentralized exchanges (DEXes) and are represented by a market capitalization (MC), which is a lagging indicator of a protocol\'s performance.',
  method: 'Value can be examined through the lens of value creation and value capture, both of which are independent variables (Peter Thiel). As such, a general formula for Value can be seen as [ Value = valueCaptured / valueCreated ], since a valuable business or asset should create more value than it is able to capture. Consequently, a method for evaluating the value of DeFi tokens can be modeled similarly, [ Value = totalValueLocked / marketCap ] where market cap represents the total value created by a DeFi protocol while TVL represents the total value captured by the DeFi protocol.   ' ,
  analysis: 'An analysis of the top 85 DeFi protocols reveals an average V/M ratio of 1.23, with a median of 1.07 across the $67.9B TVL and $55.1B Market Cap of the top 85 DeFi assets as of 5/25. The assets picked for the first VALX basket represent a combination of DeFi protocols with high V/M ratios, indicative of undervalued assets with long term growth potential.',
  allocation: 'Each DeFi category is assigned a weight based on its cumulative V/M ratio, which is used to determine the number of assets per category to be added to the ETF basket. Within each DeFi category, the top scoring assets by V/M ratio are further weighted to determine the percentage that each asset is distributed within the fund.',
  details: [
  {
    title: 'Ticker',
    text: 'VALX' },

  {
    title: 'Inception Date',
    text: '05/25/21' },

  {
    title: 'Number of Holdings',
    text: '20' },

  {
    title: 'Market Cap',
    text: '$6,643' },

  {
    title: '$VALX Price',
    text: '$105.44' },

  {
    title: 'Total Expense Ratio',
    text: '1%' },

  {
    title: '24h Returns',
    text: '8.3%' }],


  documents: [
  {
    name: 'Prospectus' },

  {
    name: 'Crypto Guide' },

  {
    name: 'Fact Sheet' }],


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
      categories: [50, 25, 10, 2] },

    tooltip: {
      valueSuffix: ' assets' },

    series: [
    {
      data: [1, 4, 10, 5] }] },



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
        name: 'Lending',
        y: 30 },

      {
        name: 'Assets',
        y: 24 },

      {
        name: 'Payments',
        y: 17 },

      {
        name: 'Derivatives',
        y: 16 },

      {
        name: 'Decentralized Exchanges',
        y: 13 }] }] } };







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
        // dynamic positioning – sometimes sets too low top if scrolling fast
        // this.offsetTop = pos + this.$refs.sidebar.getBoundingClientRect().top - this._sidebarTop;
      }
    } } });
