export function createObjFile(url: string) {
    const filename = url.split("/").pop();
    const extension = filename.split(".").pop();
    const file = new File([url], filename, { type: `image/${extension}` });
    return file;
  }