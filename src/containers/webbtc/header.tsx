import Header from "./../../components/header";

export default function HeaderWebBTC() {
  return (
    <Header
      name="WebBTC"
      logo="/images/webbtc-logo.png"
      links={[
        { title: "WebLN", href: "/webln" },
      ]}
    />
  );
}
