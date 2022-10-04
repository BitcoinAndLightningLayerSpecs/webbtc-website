import Cards from "../../components/cards";

export default function Section2() {
  const cardInfo = {
    tag: "Developers",
    title: "Integrates as fast as Lightning",
    text: "Integrating WebLN in your web application is straightforward. Set up support for this new standard today and join the era of Bitcoin interoperability!",
    cards: [
      {
        title: "Simple Integration",
        image: "/images/icons/simple-integration.png",
        text: "WebLN can be integrated into existing apps very easily, often by just adding a few lines of code. ",
      },
      {
        title: "Superior UX for your users",
        image: "/images/icons/superior-ux.png",
        text: "Boost conversion with seamless one-click payments in any browser: mobile or desktop",
      },
      {
        title: "No Vendor Lock-in",
        image: "/images/icons/no-vendor-lock-in.png",
        text: "Build on an open and decentralized peer-to-peer network made for inexpensive transactions at scale.",
      },
    ],
  };
  return (
    <Cards
      cards={cardInfo.cards}
      text={cardInfo.text}
      tag={cardInfo.tag}
      title={cardInfo.title}
    />
  );
}
