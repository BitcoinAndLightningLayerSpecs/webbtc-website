import Footer from "../../components/footer";

export default function FooterWebLN() {
  return (
    <Footer
      column1={{
        title: "WebLN",
      }}
      column2={{
        title: "App & Wallet Developers",
        links: [
          {
            title: "Developer guide",
            link: "https://bitcoiners.org",
          },
          {
            title: "WebLN Specs",
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
