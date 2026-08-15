const publicUrl = process.env.PUBLIC_URL || "";

export function getAssetPath(path) {
  if (path.startsWith("http")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (!publicUrl) {
    return cleanPath;
  }

  if (publicUrl === ".") {
    return `.${cleanPath}`;
  }

  return `${publicUrl.replace(/\/$/, "")}${cleanPath}`;
}

export function getGalleryLink(path) {
  return `#${path}`;
}

export function getProjectPathFromHash() {
  const path = window.location.hash.replace(/^#/, "");

  if (path.startsWith("/projects/")) {
    return path;
  }

  return "/";
}
