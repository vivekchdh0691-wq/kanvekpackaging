"use client";

import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
const [mainImage, setMainImage] = useState(images[0]);

return ( <div>


  {/* MAIN IMAGE */}

  <div className="bg-white rounded-xl shadow-md overflow-hidden">

    <img
      src={mainImage}
      className="w-full h-[420px] object-cover hover:scale-105 transition duration-300"
    />

  </div>

  {/* THUMBNAILS */}

  <div className="flex gap-4 mt-4">

    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        onClick={() => setMainImage(img)}
        className="w-24 h-24 object-cover rounded-lg cursor-pointer border hover:border-green-600"
      />
    ))}

  </div>

</div>


);
}
