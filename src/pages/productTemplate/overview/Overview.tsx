import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../../slices/productSlice";
import { useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ReactPlayer from "react-player";
import "./Overview.scss";
import { getOverview } from "../../../selectors/selectorFile";
import { RootState, AppDispatch } from "../../../store";

interface Image {
  img: string;
  title: string;
}

interface Video {
  video: string;
  title: string;
}

interface OverviewType {
  intro?: string;
  working?: string;
  deviceTypes?: string;
  assests?: {
    images?: Image[];
    videos?: Video[];
  }[];
}

const Overview = () => {
  const { productId } = useParams<{ productId?: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const overview = useSelector((state: RootState) =>
    getOverview(state, productId ?? "")
  ) as OverviewType | undefined;
  const fetchInitiated = useRef<boolean>(false);

  const initiateFetch = useCallback(() => {
    if (productId && (!overview || !Object.keys(overview).length)) {
      if (!fetchInitiated.current) {
        dispatch(fetchProductDetails(productId));
        fetchInitiated.current = true;
      }
    }
  }, [dispatch, productId, overview]);

  useEffect(() => {
    initiateFetch();
  }, [initiateFetch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = overview?.assests?.[0]?.images ?? [];
  const videos = overview?.assests?.[1]?.videos ?? [];

  if (!productId) {
    return <div>Product ID is missing</div>;
  }

  return (
    <div>
      <div className="overviewContainer">
        <div className="productInfo">
          <h1>Product Overview</h1>
          <p>{overview?.intro}</p>
          <div className="mediaListContainer">
            <ImageList className="imageList" cols={images.length || 1}>
              {images.map((image) => (
                <ImageListItem key={image.title} className="imageListItem">
                  <img
                    src={image.img}
                    alt={image.title}
                    loading="lazy"
                    className="image"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <div className="videoList">
              {videos.map((video) => (
                <div key={video.title} className="videoListItem">
                  <ReactPlayer url={video.video} controls className="video" />
                </div>
              ))}
            </div>
          </div>
          <p>{overview?.working}</p>
          <p>{overview?.deviceTypes}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
