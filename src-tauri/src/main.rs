// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn read_file(path: String) -> Result<String, String> {
  match std::fs::read_to_string(&path) {
    Ok(contents) => Ok(contents),
    Err(error) => Err(format!("Failed to read file: {}", error)),
  }
}

#[tauri::command]
async fn write_file(path: String, contents: String) -> Result<(), String> {
  match std::fs::write(&path, contents) {
    Ok(_) => Ok(()),
    Err(error) => Err(format!("Failed to write file: {}", error)),
  }
}

#[tauri::command]
async fn create_file(options: serde_json::Value) -> Result<(), String> {
  let path = options["path"].as_str().unwrap_or_default();
  match std::fs::File::create(&path) {
    Ok(_) => Ok(()),
    Err(error) => Err(format!("Failed to create file: {}", error)),
  }
}




fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet , read_file , write_file,create_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
