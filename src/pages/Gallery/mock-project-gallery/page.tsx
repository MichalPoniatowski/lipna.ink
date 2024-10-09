"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { mockProject } from "./mockProject";

const mockPhotos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
];

const ProjectGalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [currentGallery, setCurrentGallery] = useState<
    "final" | "production" | "mock"
  >("final");

  const handleOpen = (
    index: number,
    gallery: "final" | "production" | "mock",
  ) => {
    setSelectedImage(index);
    setCurrentGallery(gallery);
    setOpen(true);
  };

  const handleDownload = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  const renderGallery = (
    images: string[],
    galleryType: "final" | "production" | "mock",
  ) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleOpen(index, galleryType)}
        >
          <Image
            src={galleryType === "mock" ? `/mockPhotos/${image}` : image}
            alt={`${galleryType} Image ${index + 1}`}
            width={400}
            height={300}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <Image
            src={mockProject.featuredImage}
            alt="Main Project Image"
            width={800}
            height={600}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold">{mockProject.name}</h1>
          <p className="mb-4">{mockProject.description}</p>
          <ul className="mb-4 list-disc pl-5">
            {mockProject.mainFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>
            <strong>Inwestor:</strong> {mockProject.investor}
          </p>
          <p>
            <strong>Lokalizacja:</strong> {mockProject.preciseLocation}
          </p>
          <p>
            <strong>Data realizacji:</strong> {mockProject.implementationDate}
          </p>
          <p>
            <strong>Czas realizacji:</strong> {mockProject.leadTime}
          </p>
        </div>
      </div>

      {/* Video and 3D Walkthrough Section */}
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Film YouTube</h2>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${mockProject.movieLink.split("v=")[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Wirtualny spacer 3D</h2>
          <iframe
            width="100%"
            height="315"
            src={mockProject.walk3DthroughLink}
            title="Matterport 3D Walkthrough"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Final Images Gallery */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Galeria zdjęć końcowych</h2>
        {renderGallery(mockProject.finalImages, "final")}
      </div>

      {/* Production Images Gallery */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Galeria zdjęć produkcyjnych</h2>
        {renderGallery(mockProject.productionImages, "production")}
      </div>

      {/* Mock Photos Gallery */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Zdjęcia mockowe</h2>
        {renderGallery(mockPhotos, "mock")}
      </div>

      {/* Blueprint Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Rzut projektu</h2>
        <iframe
          src={mockProject.blueprint[0]}
          width="100%"
          height="600"
          className="border-none"
        ></iframe>
      </div>

      {/* Attachments Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Załączniki</h2>
        <div className="flex space-x-4">
          <a
            href={mockProject.attachments.catalogue}
            onClick={(e) =>
              handleDownload(e, mockProject.attachments.catalogue)
            }
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Pobierz katalog
          </a>
          <a
            href={mockProject.attachments.pricing}
            onClick={(e) => handleDownload(e, mockProject.attachments.pricing)}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Pobierz cennik
          </a>
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={
            currentGallery === "mock"
              ? mockPhotos.map((photo) => ({ src: `/mockPhotos/${photo}` }))
              : (currentGallery === "final"
                  ? mockProject.finalImages
                  : mockProject.productionImages
                ).map((image) => ({ src: `${image}` })) // Adjust the path
          }
          index={selectedImage}
        />
      )}
    </div>
  );
};

export default ProjectGalleryPage;
