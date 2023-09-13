import { InternshipsItem } from "./internshipItem";

export function InternshipsPage() {
  return (
    <div>
      <InternshipsItem
        internship={{
          enterprise: {
            name: "Sonhin",
          },
        }}
      ></InternshipsItem>
    </div>
  );
}
