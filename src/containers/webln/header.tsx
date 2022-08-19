import Header from "./../../components/header";

export default function HeaderWebLN() {
  return (
    <Header
      name="WebLN"
      logo="/images/webln-logo.png"
      links={[
        { title: "Home" },
        { title: "Developers Docs" },
        { title: "Current Projects" },
      ]}
    />
  );
}
