import Header from "./../../components/header";

export default function HeaderWebBTC() {
  return (
    <Header
      name="WebBTC"
      logo="/images/webln-logo.png"
      links={[
        { title: "Home" },
        { title: "Developers Docs" },
        { title: "Current Projects" },
      ]}
    />
  );
}
