# cordova-plugin-mediastore

This Cordova plugin enables file management using the Storage Access Framework and Mediastore on Android devices.

## Installation

Use the Cordova CLI to install the plugin:

```bash
cordova plugin add cordova-plugin-mediastorefiles
```

## Methods

### `selectFolder(uri: string): Promise<string>`

Launches an intent to select a folder for file storage. Returns the content URI of the selected folder.

### `selectFile(uri: string): Promise<string>`

Launches an intent to select a file. Returns the content URI of the selected file.

### `openFolder(uri: string): Promise<void>`

Launches an intent to open a folder using the folder picker.

### `openFile(uri: string): Promise<void>`

Launches an intent to open a file.

### `readFile(uri: string): Promise<ArrayBuffer>`

Reads a file specified by the content URI. Returns the file data as an ArrayBuffer.

### `writeFile(params: { data: string, filename: string, folder?: string, subFolder?: string }): Promise<string>`

Writes a file with the specified filename. Optionally, specify a folder and subfolder. The `data` parameter should be a Base64 string. If the subfolder does not exist, it will be created. Returns the content URI of the saved file.

### `overwriteFile(params: { uri: string, data: string }): Promise<string>`

Overwrites a file at the specified content URI with the provided data. Returns the content URI of the overwritten file.

### `saveFile(params: { data: string, filename?: string, folder?: string }): Promise<string>`

Launches a file picker intent to save a file. Optionally, specify a preferred filename and folder. The `data` parameter should be a Base64 string. Returns the content URI of the saved file.

### `deleteFile(uri: string): Promise<number>`

Deletes a file specified by the content URI. Returns the number of files deleted.

### `getFileName(uri: string): Promise<string>`

Retrieves the filename associated with the provided content URI.

### `getUri(params: { folder: string, subFolder?: string, filename?: string }): Promise<string>`

Retrieves the content URI of a file located in the specified folder and subfolder.

## Usage

To call the plugin methods, use the following syntax:

```typescript
cordova.plugins.MediaStoreFiles.<function>(params); // returns a Promise
await cordova.plugins.MediaStoreFiles.<function>(params); // in an async function
```

Replace `<function>` with the desired method name and provide the appropriate parameters as specified in the method signature.

## Example

Here's an example of using the `selectFolder` method:

```typescript
// Call selectFolder method
cordova.plugins.Mediastore.selectFolder(
  "content://com.example.provider/external_files/"
)
  .then((folderUri) => {
    // Handle the selected folder URI
    console.log("Selected folder URI:", folderUri);
  })
  .catch((error) => {
    // Handle the error
    console.error("Error selecting folder:", error);
  });
```

This example demonstrates how to use the `selectFolder` method to select a folder for file storage. The returned folder URI is then logged to the console.

## Contributions

Contributions to improve `cordova-plugin-mediastorefiles` are welcome. Please follow the [contribution guidelines](CONTRIBUTING.md) when submitting pull requests.
