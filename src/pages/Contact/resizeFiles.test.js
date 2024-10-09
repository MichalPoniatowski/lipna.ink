import React from 'react';
import imageCompression from 'browser-image-compression';
import { reSizeFiles } from './resizeFiles';

jest.mock('browser-image-compression', () => {
  return jest.fn().mockImplementation((file, options) => {
    return Promise.resolve(
      new Blob(['compressed content'], { type: file.type })
    );
  });
});

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const IMAGE_TYPE = 'image/png';

function createMockFile(name, content = 'content', type = IMAGE_TYPE) {
  return new File([content], name, { type });
}

function createMockBlob(content, type = IMAGE_TYPE) {
  return new Blob([content], { type });
}

describe('reSizeFiles', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should compress a single file and return an array with one compressed file', async () => {
    const mockFile = createMockFile('test.png');
    const mockCompressedBlob = createMockBlob('compressed content');

    imageCompression.mockResolvedValue(mockCompressedBlob);

    const result = await reSizeFiles(MAX_FILE_SIZE, [mockFile]);

    expect(imageCompression).toHaveBeenCalledWith(
      mockFile,
      expect.objectContaining({
        maxSizeMB: 2,
        useWebWorker: true,
      })
    );

    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Blob);
    expect(result[0].type).toBe(IMAGE_TYPE);
  });

  it('should compress multiple files and return an array of all compressed files', async () => {
    const mockFile1 = createMockFile('test1.png');
    const mockFile2 = createMockFile('test2.png');

    const mockCompressedBlob1 = createMockBlob('compressed content 1');
    const mockCompressedBlob2 = createMockBlob('compressed content 2');

    imageCompression
      .mockResolvedValueOnce(mockCompressedBlob1)
      .mockResolvedValueOnce(mockCompressedBlob2);

    const result = await reSizeFiles(MAX_FILE_SIZE, [mockFile1, mockFile2]);

    expect(imageCompression).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(2);
    expect(result[0]).toBeInstanceOf(Blob);
    expect(result[1]).toBeInstanceOf(Blob);
  });

  it('should handle errors during compression and return an empty array', async () => {
    const mockFile = createMockFile('test.png');

    imageCompression.mockRejectedValue(new Error('Compression error'));

    const result = await reSizeFiles(MAX_FILE_SIZE, [mockFile]);

    expect(imageCompression).toHaveBeenCalledWith(
      mockFile,
      expect.objectContaining({
        maxSizeMB: 2,
        useWebWorker: true,
      })
    );

    expect(result).toEqual([]);
  });
});
