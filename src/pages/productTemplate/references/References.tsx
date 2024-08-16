import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../../slices/productSlice";
import { useParams } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./References.scss";
import { getReferences } from "../../../selectors/selectorFile";
import { RootState, AppDispatch } from "../../../store";

interface Reference {
  id: string;
  label: string;
  link: string;
}

const References = () => {
  const { productId } = useParams<{ productId: string | undefined }>();
  const dispatch = useDispatch<AppDispatch>();
  const references = useSelector((state: RootState) =>
    getReferences(state, productId ?? "")
  ) as Reference[];
  const fetchInitiated = useRef<boolean>(false);

  useEffect(() => {
    if (productId && !references.length && !fetchInitiated.current) {
      dispatch(fetchProductDetails(productId));
      fetchInitiated.current = true;
    }
  }, [dispatch, productId, references]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick =
    (url: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
    <div>
      <div className="referenceContainer">
        <main>
          <h1>References</h1>
          <ul>
            {references.map((e) => (
              <li key={e.id}>
                <a
                  href={e.link}
                  onClick={handleLinkClick(e.link)}
                  className="link"
                >
                  {e.label} <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default References;
