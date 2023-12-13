import { useEffect, useState } from "react";
import { api } from "../api/api";

export function useResource<T>(path: string) {
  const [resource, setResource] = useState<T>();

  async function getResource() {
    const res = await api.get<T>(path);
    setResource(res.data);
  }

  useEffect(() => {
    getResource();
  }, []);

  return resource;
}
