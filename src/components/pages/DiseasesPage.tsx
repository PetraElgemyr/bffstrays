import { useNavigate } from "react-router";
import { SecondaryButton } from "../../styled/Buttons/SecondaryButton";
import { PageName } from "../enums/PageName";
import { useState, useEffect } from "react";
import { ColCenteredButtonContainer } from "../../styled/Buttons/ColCenteredButtonContainer";
import { ColCentered, ColStart } from "../../styled/Common/Common";
import { SlideCarousel } from "../SlideCarousel";
import { filterPostsPerPage, findSlide } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { SmallHeadline } from "../../styled/Fonts/SmallHeadline";
import { DiseaseDropDown } from "../../styled/Spain/DiseaseDropDown";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/Fonts/MainHeadline";
import { CommonText } from "../../styled/Fonts/CommonText";

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
          <MainHeadline>{PageName.Diseases}</MainHeadline>
        </ColStart>
        {diseasesDropDowns.map((post: IToggleDropDown, index) => {
          if (index === 0) {
            return (
              <ColStart key={index}>
                <SmallHeadline>{post?.title}</SmallHeadline>
                <CommonText>{post.postContent}</CommonText>
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
                  <CommonText style={{ margin: "3%" }}>
                    {post.postContent}
                  </CommonText>
                )}
              </ColStart>
            );
          }
        })}
        <ColCenteredButtonContainer>
          <CommonText>Vill du läsa mer om hundarna vi räddar?</CommonText>
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
