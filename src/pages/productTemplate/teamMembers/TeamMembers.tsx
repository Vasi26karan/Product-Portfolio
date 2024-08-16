import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../../slices/productSlice";
import { useParams } from "react-router-dom";
import "./TeamMembers.scss";
import { getTeamMembers } from "../../../selectors/selectorFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { RootState, AppDispatch } from "../../../store";

interface TeamMember {
  id: string;
  pic: string;
  name: string;
  designation: string;
  developmentType: string;
  email: string;
  linkedin: string;
}

const TeamMembers = () => {
  const { productId } = useParams<{ productId: string | undefined }>();
  const dispatch = useDispatch<AppDispatch>();
  const teamMembers = useSelector((state: RootState) =>
    getTeamMembers(state, productId ?? "")
  );

  const fetchInitiated = useRef<boolean>(false);

  useEffect(() => {
    if (productId && !teamMembers.length && !fetchInitiated.current) {
      dispatch(fetchProductDetails(productId));
      fetchInitiated.current = true;
    }
  }, [dispatch, productId, teamMembers]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = useCallback(
    (url: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    },
    []
  );

  return (
    <>
      <div className="title">
        <h1>Team Members</h1>
        <h2>
          This is the team of <span>main project</span> development
        </h2>
      </div>
      <div className="teamContainerWrapper">
        <div className="teamContainer">
          {teamMembers.map((member: TeamMember) => (
            <div className="teamCard" key={member.id}>
              <img className="teamImage" src={member.pic} alt={member.name} />
              <div className="teamInfo">
                <h3 className="teamName">{member.name}</h3>
                <p className="teamPosition">{member.designation}</p>
                <p className="teamDesignation">{member.developmentType}</p>
                <div className="socialIcons">
                  <a href={`mailto:${member.email}`}>
                    <EmailIcon />
                  </a>
                  <a
                    href={member.linkedin}
                    onClick={handleLinkClick(member.linkedin)}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
