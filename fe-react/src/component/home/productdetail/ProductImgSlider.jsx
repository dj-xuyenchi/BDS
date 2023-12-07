import Gallery from "react-image-gallery";
import "./style.css";
import "react-image-gallery/styles/css/image-gallery.css";
function ProductImgSlider({ imgs }) {
  imgs = imgs
    ? imgs.map((item) => {
      return {
        original: item.linkHinhAnh,
        thumbnail: item.linkHinhAnh,
        description: "Description 1",
      };
    })
    : [
      {
        original: "",
        thumbnail: "",
        description: "Description 1",
      },
    ];

  return (
    <div className="slider-img" style={{
      maxHeight: "420px",
      minHeight: "420px"
    }}>
      <Gallery items={imgs} />
    </div>
  );
}

export default ProductImgSlider;
