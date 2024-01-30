import { readdir, stat } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const folderRelativePath = "../../static/videos";
const currentScriptPath = import.meta.url;
const folderPath = currentScriptPath
  ? join(dirname(fileURLToPath(currentScriptPath)), folderRelativePath)
  : join(__dirname, folderRelativePath);

export async function listVideos(category) {
  try {
    const files = await readdir(folderPath);

    const fileList = await Promise.all(
      files.map(async (file) => {
        const filePath = join(folderPath, file);
        const fileStat = await stat(filePath);
        return fileStat.isFile() ? file : null;
      })
    );
    if (category == "all") {
      return fileList.map(
        (file) => (file = "/static/videos/" + file)
      );
    } else {
      const categoryRegex = new RegExp(`^${category}`, "i");
      return fileList
        .filter((file) => categoryRegex.test(file))
        .map((file) => (file = "/static/videos/" + file));
    }
  } catch (err) {
    console.error("Error reading folder:", err);
  }
}

export async function deleteVideo(video) {
  const videoPath = join(folderPath, video);
  try {
    await fs.unlink(videoPath);
    return true;
  } catch (err) {
    return false;
  }
}
