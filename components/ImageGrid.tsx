type ImageGridProps = {
  images: string[];
  altPrefix?: string;
};

const ImageGrid = ({ images, altPrefix = "画像" }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${altPrefix} ${index + 1}`}
          className="rounded-xl object-cover aspect-[4/3] w-full"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
