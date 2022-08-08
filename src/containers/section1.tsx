import Cards from "../components/cards";

export default function Section1() {
  const cardInfo = {
    tag: "Users",
    title: "Why WebLN?",
    text: " WebLN was created to empower everyone to send and receive money on the web. Coupled with the Lightning Network’s ability to send bitcoin instantly and with (almost) no fees, we’re ushering in a new standard for how value moves around the world.",
    cards: [
      {
        title: "Open Network",
        image: "/images/open-network.png",
        text: "Add a permissionless and global payment network. Allow anyone to exchange payments with your app.",
      },
      {
        title: "Improved UX",
        image: "/images/improved-ux.png",
        text: "No friction of searching for payment card details or mobile wallets to scan QR codes.",
      },
      {
        title: "New Use-cases",
        image: "/images/new-use-cases.png",
        text: "Create apps with instant micropayments, streaming money, passwordless authentication and more.",
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
