// CarouselGallery.js
import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS for default styles
import Gallery1Img from "../../../assets/gallery/gallery-1.jpg";
import Gallery2Img from "../../../assets/gallery/gallery-2.jpg";
import Gallery3Img from "../../../assets/gallery/gallery-3.jpg";
import Gallery4Img from "../../../assets/gallery/gallery-4.jpg";
import Gallery5Img from "../../../assets/gallery/gallery-5.jpg";
import Gallery6Img from "../../../assets/gallery/gallery-6.jpg";
import Gallery7Img from "../../../assets/gallery/gallery-7.jpg";
import Gallery8Img from "../../../assets/gallery/gallery-8.jpg";
import Gallery9Img from "../../../assets/gallery/gallery-9.jpg";
const CarouselGallery = () => {
  const images = [
    {
      src: Gallery1Img,
      caption: "Our Cherity Project-1",
    },
    {
      src: Gallery2Img,
      caption: "Our Cherity Project-2",
    },
    {
      src: Gallery3Img,
      caption: "Our Cherity Project-3",
    },
    {
      src: Gallery4Img,
      caption: "Our Cherity Project-4",
    },
    {
      src: Gallery5Img,
      caption: "Our Cherity Project-5",
    },
    {
      src: Gallery6Img,
      caption: "Our Cherity Project-6",
    },
    {
      src: Gallery7Img,
      caption: "Our Cherity Project-7",
    },
    {
      src: Gallery8Img,
      caption: "Our Cherity Project-8",
    },
    {
      src: Gallery9Img,
      caption: "Our Cherity Project-9",
    },
  ];

  const imageItems = images.map((image) => ({
    original: image.src,
    thumbnail: image.src, // Using the same image for thumbnail
    originalAlt: "Image",
    thumbnailAlt: "Thumbnail",
    bullet: true,
  }));
  const galleryOptions = {
    showNav: false, // Hide navigation arrows
    showBullets: true, // Show bullets
    thumbnailPosition: "right", // Position thumbnail bar on the right
    autoPlay: true,
    showPlayButton: false,
  };
  return (
    <div className="p-4">
      <DynamicTitle heading="Meet Charity Projects" title="PORTFOLIO GALLERY" />
      <ImageGallery
        items={imageItems}
        showNav={galleryOptions.showNav}
        showBullets={galleryOptions.showBullets}
        thumbnailPosition={
          galleryOptions.thumbnailPosition as
            | "right"
            | "top"
            | "bottom"
            | "left"
            | undefined
        }
        autoPlay={galleryOptions.autoPlay}
        showPlayButton={galleryOptions.showPlayButton}
      />
    </div>
  );
};

export default CarouselGallery;
