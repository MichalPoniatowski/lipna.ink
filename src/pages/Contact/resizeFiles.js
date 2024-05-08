import imageCompression from "browser-image-compression";

export const reSizeFiles = async (fileSizeLimit, files) => {
  let compressedFiles = [];

  const options = {
    maxSizeMB: fileSizeLimit / (1024 * 1024),
    useWebWorker: true,
  };

  for (const file of files) {
    try {
      const compressedBlob = await imageCompression(file, options);
      const compressedFile = new File([compressedBlob], file.name, {
        type: compressedBlob.type,
        lastModified: new Date(),
      });
      compressedFiles.push(compressedFile);
    } catch (error) {
      console.error("Error with compresssing file", error.message);
    }
  }

  console.log("COMPRESSED FILES", compressedFiles);

  return compressedFiles;
};
