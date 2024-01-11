import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { PageName } from "../enums/PageName";
import { useState, useEffect } from "react";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { ColCentered } from "../../styled/Common/Common";
import { ColStart } from "../../styled/Spain/Spain";
import { SlideCarousel } from "../SlideCarousel";
import { useAppContext } from "../hooks/useAppContext";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { SmallHeadline } from "../../styled/Fonts/SmallHeadline";
import { DiseaseDropDown } from "../DiseaseDropDown";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

interface IToggleDropDown {
  show: boolean;
  title: string;
  postContent: string;
}

export const DiseasesPage = () => {
  const { slides, posts } = useAppContext();
  const [diseasesPosts, setDiseasesPosts] = useState<IPost[]>([]);
  const [diseasesPageSlides, setDiseasesPageSlides] = useState<ISlide[]>([]);
  const navigate = useNavigate();
  const [diseasesDropDowns, setDiseasesDropDowns] = useState<IToggleDropDown[]>(
    []
  );

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Diseases);
    setDiseasesPosts(filteredPosts);
    const diseasesSlides: ISlide[] = [];
    const slide = findSlide(slides, PageName.Diseases);

    if (slide) {
      diseasesSlides.push(slide);
      setDiseasesPageSlides(diseasesSlides);
    }
  }, [slides, posts]);

  useEffect(() => {
    const createdDropDownObjects: IToggleDropDown[] = [];

    diseasesPosts.forEach((post) => {
      const dropDown: IToggleDropDown = {
        show: false,
        title: post.title,
        postContent: post.postText,
      };

      createdDropDownObjects.push(dropDown);
    });
    setDiseasesDropDowns(createdDropDownObjects);
  }, [diseasesPosts]);

  const toggleDiseaseDropDown = (clickedTitle: string) => {
    diseasesDropDowns.map((dropDown) => {
      if (clickedTitle === dropDown.title) {
        dropDown.show = !dropDown.show;
        setDiseasesDropDowns([...diseasesDropDowns]);
      }
    });
  };

  return (
    <>
      <SlideCarousel slides={diseasesPageSlides} />
      <ColCentered>
        <ColStart>
          <h2>Sjukdomar</h2>
        </ColStart>
        {diseasesDropDowns.map((post: IToggleDropDown, index) => {
          if (index === 0) {
            return (
              <ColStart key={index}>
                <SmallHeadline>{post?.title}</SmallHeadline>
                <p>{post.postContent}</p>
              </ColStart>
            );
          } else {
            return (
              <ColStart key={index}>
                <DiseaseDropDown
                  onClick={() => toggleDiseaseDropDown(post.title)}
                >
                  <SmallHeadline>{post?.title}</SmallHeadline>
                  <span>
                    {post.show ? (
                      <KeyboardArrowDownRoundedIcon fontSize="large" />
                    ) : (
                      <KeyboardArrowUpRoundedIcon fontSize="large" />
                    )}
                  </span>
                </DiseaseDropDown>
                {post.show && (
                  <p style={{ margin: "3%" }}>{post.postContent}</p>
                )}
              </ColStart>
            );
          }
        })}
        <ColCenteredButtonContainer>
          <p>Vill du läsa mer om hundarna vi räddar?</p>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/situationen-i-spanien")}
          >
            {PageName.Spain}
          </SecondaryButton>
          <SecondaryButton
            selected={false}
            onClick={() => navigate("/myter-om-gatuhundar")}
          >
            {PageName.Myths}
          </SecondaryButton>
        </ColCenteredButtonContainer>
      </ColCentered>
    </>
  );
};
