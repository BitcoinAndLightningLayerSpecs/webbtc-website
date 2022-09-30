import Providers from "../../components/providers";

export default function ProvidersWebLN() {
  return (
    <Providers
      title="Get your WebLN wallet now!"
      description="Use Bitcoin payments on the web with one of these apps available today."
      apps={[
        {
          name: "Alby",
          image: "/images/providers/alby.png",
          link: "https://getalby.com",
        },
        {
          name: "Blixt Wallet",
          image: "/images/providers/blixt.png",
          link: "https://blixtwallet.github.io",
        },
        {
          name: "BlueWallet",
          image: "/images/providers/bluewallet.png",
          link: "https://bluewallet.io",
        },
        {
          name: "Breez",
          image: "/images/providers/breez.png",
          link: "https://breez.technology",
        }
      ]}
    />
  );
}
