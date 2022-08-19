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
            title: "Developer guide",
            link: "https://bitcoiners.org",
          },
          {
            title: "WebBTC Specs",
            link: "https://bitcoiners.org",
          },
          {
            title: "App Directory",
            link: "https://bitcoiners.org",
          },
        ],
      }}
      column3={{
        title: "Contact",
        links: [
          {
            title: "Got questions?",
            link: "https://bitcoiners.org",
          },
        ],
      }}
    />
  );
}
