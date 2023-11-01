import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SearchInput() {
  return (
    <div>
      <FontAwesomeIcon className="bg-red-500" icon={["fal", "coffee"]} />
      <FontAwesomeIcon icon={["far", "coffee"]} />
      <FontAwesomeIcon icon={["fas", "coffee"]} />
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon={["fab", "github"]} />

      <input type="text" name="" id="" className="default-input rounded-full" />
    </div>
  );
}
