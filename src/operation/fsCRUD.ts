import { invoke } from "@tauri-apps/api";

export async function createFile(filePath: string) {
  try {
    await invoke("create_file", { options: { path: filePath } });
    console.log("File created:", filePath);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function readFile(filePath: string) {
  try {
    const data = await invoke("read_file", { path: filePath });
    console.log("File content:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function writeFile(filePath: string, content: string) {
  try {
    const data = await invoke("write_file", {
      path: filePath,
      contents: content,
    });
    console.log("File written:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
