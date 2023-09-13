import { InternshipsItem } from "./internshipItem";

export function InternshipsPage() {
  return (
    <div className="items-center p-2">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
        {[...Array(20)].map((index) => {
          return (
            <InternshipsItem
              internship={{
                id: "randomId",
                position: "Rockstar",
                enterprise: {
                  name: "Sonhin",
                  picture: "/enterprise mock cover.svg",
                },
              }}
            ></InternshipsItem>
          );
        })}
      </div>
    </div>
  );
}
