import Providers from "../../components/providers";

export default function ProvidersWebLNC() {
  return (
    <Providers
      title="Get your WebBTC Wallet now!"
      description="Use Bitcoin payments on the web with one of these apps available today."
      apps={[
        {
          name: "Alby",
          image: "/images/providers/alby.png",
          link: "https://webbtc.io",
        },
        {
          name: "Zap",
          image: "/images/providers/zap.png",
          link: "https://webbtc.io",
        },
        {
          name: "Blue",
          image: "/images/providers/blue.png",
          link: "https://webbtc.io",
        },
        {
          name: "Joule",
          image: "/images/providers/joule.png",
          link: "https://webbtc.io",
        },
        {
          name: "Breez",
          image: "/images/providers/breez.png",
          link: "https://webbtc.io",
        },
      ]}
    />
  );
}
