export function onImageError(event: Event) {
  const imgElement = event.target as HTMLImageElement;
  imgElement.src = "https://via.placeholder.com/250x250"; // 替代圖片的路徑
}
