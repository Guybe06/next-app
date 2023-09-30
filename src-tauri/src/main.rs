// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![
            minimize_window,
            maximize_window,
            unmaximize_window,
            close_window
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn minimize_window(window: tauri::Window) {
    // Réduis la fenêtre
    window.minimize().unwrap();
}

#[tauri::command]
fn maximize_window(window: tauri::Window) {
    // Réduis la fenêtre
    window.maximize().unwrap();
}

#[tauri::command]
fn unmaximize_window(window: tauri::Window) {
    // Réduis la fenêtre
    window.unmaximize().unwrap();
}

#[tauri::command]
fn close_window(window: tauri::Window) {
    // Réduis la fenêtre
    window.close().unwrap();
}
