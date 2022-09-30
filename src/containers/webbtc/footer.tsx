import Footer from "../../components/footer";

export default function FooterWebBTC() {
  return (
    <Footer
      column1={{
        title: "WebBTC",
      }}
      column2={{
        title: "App & Wallet Developers",
        links: [
          {
            title: "WebBTC Specification",
            link: "https://balls.dev/webbtc/",
          },
          {
            title: "WebLN Guide",
            link: "https://webln.guide",
          },
        ],
      }}
      column3={{
        title: "Feedback & Questions",
        links: [
          {
            title: "Telegram",
            link: "https://t.me/bitcoinandlightningspecs",
          },
          {
            title: "Github",
            link: "https://github.com/BitcoinAndLightningLayerSpecs/WebBTC/",
          },
        ],
      }}
    />
  );
}
