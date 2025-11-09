export const getImg = (assetFileName:string, name:string) => {
  return new URL(`/src/assets/${assetFileName}/${name}`, import.meta.url).href
}
