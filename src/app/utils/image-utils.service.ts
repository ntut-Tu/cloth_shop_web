export function onImageError(event: Event) {
  const imgElement = event.target as HTMLImageElement;
  imgElement.src = "/assets/images/150.jpg"; // 替代圖片的路徑
}
