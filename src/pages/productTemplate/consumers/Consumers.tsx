import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../../slices/productSlice";
import { useParams } from "react-router-dom";
import "./Consumers.scss";
import { getConsumers } from "../../../selectors/selectorFile";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RootState, AppDispatch } from "../../../store";
import { CardActionArea } from "@mui/material";

interface Consumer {
  id: string;
  user: string;
  image: string;
  description: string;
}

const Consumers = () => {
  const { productId } = useParams<{ productId: string | undefined }>();
  const dispatch = useDispatch<AppDispatch>();

  const consumers = useSelector(
    (state: RootState) => getConsumers(state, productId ?? "") as Consumer[],

    (prev, next) => prev.length === next.length
  );

  const fetchInitiated = useRef<boolean>(false);

  useEffect(() => {
    if (productId && !consumers.length && !fetchInitiated.current) {
      dispatch(fetchProductDetails(productId));
      fetchInitiated.current = true;
    }
  }, [dispatch, productId, consumers]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = useCallback((consumerId: string) => {
    console.log("Clicked on consumer:", consumerId);
  }, []);

  return (
    <div>
      <div className="consumersContainer">
        <h1>End-users</h1>
        <main className="cardsContainer">
          {consumers.map((e: Consumer) => (
            <Card key={e.id} className="cardItem">
              <CardActionArea onClick={() => handleCardClick(e.id)}>
                <CardMedia
                  component="img"
                  className="cardImage"
                  src={e.image}
                  alt={e.user}
                />
                <CardContent>
                  <Typography className="cardTitle">{e.user}</Typography>
                  <Typography className="cardDescription">
                    {e.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Consumers;
