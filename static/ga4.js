{
  const GA4_ID = "G-P1RN2MFCZ2";
  this.dataLayer = this.dataLayer || [];
  this.gtag = function () {
    dataLayer.push(arguments);
  };

  gtag("consent", "default", {
    "analytics_storage": "denied",
    "ad_storage": "denied",
    "ad_user_data": "denied",
    "ad_personalization": "denied",
    wait_for_update: 100,
  });

  if (location.hostname === "localhost") { // local dev
    this._dataLayer = this._dataLayer || [];
    this.gtag = function gtag() {
      console.log(arguments);
      _dataLayer.push(arguments);
    };
    this.dataLayer.push = console.log;
  } else { // live production
    const sc = document.createElement("script");
    sc.async = true;
    sc.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.append(sc);

    gtag("consent", "update", {
      "analytics_storage": "granted",
      "ad_storage": "granted",
      "ad_user_data": "granted",
      "ad_personalization": "granted",
    });
  }

  gtag("js", new Date());
  gtag("config", GA4_ID);
}
