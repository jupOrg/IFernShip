import { InternshipsItem } from "./internshipItem";

export function InternshipsPage() {
  return (
    <div>
      <InternshipsItem
        internship={{
          position: "Rockstar",
          enterprise: {
            name: "Sonhin",
            picture: "/enterprise mock cover.svg",
          },
        }}
      ></InternshipsItem>
    </div>
  );
}
