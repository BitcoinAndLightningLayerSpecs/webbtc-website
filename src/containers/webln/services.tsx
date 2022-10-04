import Services from "../../components/services";

export default function ServicesWebLN() {
  return (
    <Services
      title="Services using WebLN"
      apps={[
        {
          name: "BOLT.FUN",
          image: "/images/services/bolt-fun.png",
          link: "https://makers.bolt.fun",
        },
        {
          name: "Kollider",
          image: "/images/services/kollider.png",
          link: "https://kollider.xyz",
        },
        {
          name: "LN Markets",
          image: "/images/services/lnmarkets.svg",
          link: "https://lnmarkets.com",
        },
        {
          name: "Stacker News",
          image: "/images/services/stackernews.svg",
          link: "https://www.stackernews.com",
        },
        {
          name: "Podverse",
          image: "/images/services/podverse.svg",
          link: "https://www.podverse.fm",
        },
        {
          name: "Wavlake",
          image: "/images/services/wavlake.svg",
          link: "https://www.wavlake.com",
        }
      ]}
    />
  );
}
