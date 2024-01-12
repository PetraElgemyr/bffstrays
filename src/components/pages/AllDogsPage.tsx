import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";
import {
  StyledDiv,
  ButtonContainer,
  ColContainer,
  DogCard,
  ImageContainer,
  CardTitle,
  CardTextContainer,
  CardText,
  Image,
} from "../../styled/AllDogs/DogCard";
import {
  FilterOptionsContainers,
  FilterButton,
  FilterButtonContainer,
} from "../../styled/AllDogs/Filter";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import {
  ColCentered,
  ColCenteredResponsive,
  Col,
  DividerLine,
  Row,
  ColStart,
} from "../../styled/Common/Common";
import {
  CardContainer,
  DescriptiveCard,
  DescriptiveImageContainer,
  DescriptiveImage,
  TextContainer,
  DescriptiveCardTitle,
  DescriptiveCardText,
} from "../../styled/Home/DescriptiveCard";
import { PageName } from "../enums/PageName";
import { IDog } from "../models/IDog";
import { Filter } from "../enums/Filter";
import { useNavigate } from "react-router";
import { filterPostsPerPage, filterAdoptedDogs } from "../helpers/FilterHelper";
import { IPost } from "../models/IPost";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { SmallHeadline } from "../../styled/Fonts/SmallHeadline";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { colors } from "../../styled/colors";
import { useAppContext } from "../hooks/useAppContext";
import { MainHeadline } from "../../styled/Fonts/MainHeadline";
import { CommonText } from "../../styled/Fonts/CommonText";

type Anchor = "left" | "right";

export const AllDogsPage = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });
  const navigate = useNavigate();
  const { dogs, posts } = useAppContext();
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<IDog[]>([]);
  const [allDogsPosts, setAllDogsPosts] = useState<IPost[]>([]);
  const [unadoptedDogs, setUnadoptedDogs] = useState<IDog[]>([]);

  const allFilters = [
    "TIK",
    "HANE",
    "VALP",
    "VUXEN",
    "SENIOR",
    "LITEN",
    "MELLAN",
    "STOR",
  ];

  const handleFilterChange = (option: string) => {
    if (option === Filter.Clear) {
      setFilters([]);
      setFilteredDogs(unadoptedDogs);
      return;
    }

    setFilters((prevFilters) => {
      if (prevFilters.includes(option)) {
        return prevFilters.filter((f) => f !== option);
      } else {
        return [...prevFilters, option];
      }
    });
  };

  useEffect(() => {
    const filterDogs = () => {
      let newFilteredDogs = unadoptedDogs;

      filters.forEach((filter) => {
        newFilteredDogs = newFilteredDogs.filter((dog) => {
          if (
            filter === Filter.Male &&
            dog.gender.toString().toUpperCase() === Filter.Male
          ) {
            return true;
          }
          if (
            filter === Filter.Female &&
            dog.gender.toString().toUpperCase() === Filter.Female
          ) {
            return true;
          }
          if (
            filter === Filter.Small &&
            dog.size.toString().toUpperCase() === Filter.Small
          ) {
            return true;
          }
          if (
            filter === Filter.Medium &&
            dog.size.toString().toUpperCase() === Filter.Medium
          ) {
            return true;
          }
          if (
            filter === Filter.Big &&
            dog.size.toString().toUpperCase() === Filter.Big
          ) {
            return true;
          }
          if (
            filter === Filter.Puppy &&
            dog.ageGroup.toString().toUpperCase() === Filter.Puppy
          ) {
            return true;
          }
          if (
            filter === Filter.Adult &&
            dog.ageGroup.toString().toUpperCase() === Filter.Adult
          ) {
            return true;
          }
          if (
            filter === Filter.Senior &&
            dog.ageGroup.toString().toUpperCase() === Filter.Senior
          ) {
            return true;
          }
          return false;
        });
      });

      setFilteredDogs(newFilteredDogs);
    };

    filterDogs();
  }, [filters, unadoptedDogs]);

  useEffect(() => {
    const filteredPosts = filterPostsPerPage(posts, PageName.Dogs);
    setAllDogsPosts(filteredPosts);
    const unadoptedDogs: IDog[] = filterAdoptedDogs(dogs, false);
    setUnadoptedDogs(unadoptedDogs);
    setFilteredDogs(unadoptedDogs);
  }, [dogs, posts]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <FilterOptionsContainers onKeyDown={toggleDrawer("left", false)}>
      <Row
        onClick={toggleDrawer("left", false)}
        style={{
          justifyContent: "flex-start",
        }}
      >
        <FilterButton
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
          selected={false}
        >
          <span>Stäng filtrering</span>
          <CloseRoundedIcon
            sx={{ color: colors.secondary_green }}
            fontSize="large"
          ></CloseRoundedIcon>
        </FilterButton>
      </Row>
      <DividerLine></DividerLine>
      <SmallHeadline>Valda filter</SmallHeadline>
      <FilterButton
        selected={false}
        onClick={() => {
          setFilteredDogs(unadoptedDogs);
          setFilters([]);
        }}
      >
        Rensa filter
      </FilterButton>
      {filters.map((filter) => (
        <FilterButton selected={false}>
          {filter}
          <ClearRoundedIcon
            onClick={() => handleFilterChange(filter.toUpperCase())}
          ></ClearRoundedIcon>
        </FilterButton>
      ))}
      <DividerLine></DividerLine>
      <SmallHeadline>Alla filter</SmallHeadline>
      <FilterButtonContainer>
        {allFilters.map((filter) => (
          <FilterButton
            selected={filters.includes(filter)}
            onClick={() => handleFilterChange(filter.toUpperCase())}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterButtonContainer>
    </FilterOptionsContainers>
  );

  return (
    <div>
      <StyledDiv>
        <ColCentered>
          {allDogsPosts.map((post, index) => {
            if (post.title.toLowerCase() === PageName.Dogs.toLowerCase()) {
              return (
                <ColCenteredResponsive key={index}>
                  <MainHeadline>{post.title}</MainHeadline>
                  <CommonText style={{ marginTop: "2%" }}>
                    {post.postText}
                  </CommonText>
                </ColCenteredResponsive>
              );
            }
          })}
          <ButtonContainer width="80%">
            <Col>
              <PrimaryButton
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
                selected={state.left}
                onClick={toggleDrawer("left", true)}
              >
                Filtrera <FilterAltRoundedIcon />{" "}
              </PrimaryButton>
            </Col>
            <Col>
              <PrimaryButton
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
                selected={false}
              >
                Sortera <SortRoundedIcon />{" "}
              </PrimaryButton>
            </Col>
          </ButtonContainer>{" "}
          <ColStart></ColStart>
          <ColContainer>
            {filteredDogs.map((dog: IDog, index) => (
              <DogCard
                onClick={() => {
                  navigate(`/hundar-som-soker-hem/${dog.id}`);
                }}
                key={index}
              >
                <ImageContainer>
                  <Image
                    src={`https:${dog.img[0].fields.file.url}`}
                    alt={dog.name}
                  />
                </ImageContainer>
                <CardTitle>{dog.name}</CardTitle>
                <CardTextContainer>
                  <CardText>Ålder: {dog.age}</CardText>
                  <CardText>Ras: {dog.breed}</CardText>
                  <CardText>
                    Kastrerad: {dog.isNeutered ? "Ja" : "Nej"}
                  </CardText>
                  <CardText>Pris: {dog.price}kr</CardText>
                  <CardText>Storlek: {dog.size}</CardText>
                  <ButtonContainer
                    style={{
                      justifyContent: "flex-end",
                      alignContent: "flex-end",
                    }}
                  >
                    <PrimaryButton
                      style={{ position: "relative", bottom: 0, right: 0 }}
                      selected={false}
                      onClick={() => {
                        navigate(`/hundar-som-soker-hem/${dog.id}`);
                      }}
                    >
                      Mer om {dog.name}
                    </PrimaryButton>
                  </ButtonContainer>
                </CardTextContainer>
              </DogCard>
            ))}
          </ColContainer>
          <CardContainer>
            <DividerLine></DividerLine>
            {allDogsPosts.map((post, index) => {
              if (post.title.toLowerCase() !== PageName.Dogs.toLowerCase()) {
                return (
                  <DescriptiveCard
                    bgcolor="blue"
                    key={index}
                    onClick={() => {
                      switch (post.title.toLowerCase()) {
                        case PageName.Requirements.toLowerCase():
                          navigate("/krav-pa-adoptorer");
                          break;
                        case PageName.RegisterInterest.toLowerCase():
                          navigate("/intresseanmalan");
                          break;
                        default:
                          break;
                      }
                    }}
                  >
                    <>
                      <DescriptiveImageContainer className="descriptive__img--mobile">
                        <DescriptiveImage
                          src={`https:${post.img[0].fields.file.url}`}
                          alt={post.title}
                        />
                      </DescriptiveImageContainer>
                      {index % 2 === 0 ? (
                        <DescriptiveImageContainer className="descriptive__img--tablet">
                          <DescriptiveImage
                            src={`https:${post.img[0].fields.file.url}`}
                            alt={post.title}
                          />
                        </DescriptiveImageContainer>
                      ) : (
                        <></>
                      )}
                      <TextContainer>
                        <DescriptiveCardTitle>
                          {post.title.toString()}
                        </DescriptiveCardTitle>
                        <DescriptiveCardText>
                          {post.postText.toString()}
                        </DescriptiveCardText>
                      </TextContainer>
                      {index % 2 !== 0 ? (
                        <DescriptiveImageContainer className="descriptive__img--tablet">
                          <DescriptiveImage
                            src={`https:${post.img[0].fields.file.url}`}
                            alt={post.title}
                          />
                        </DescriptiveImageContainer>
                      ) : (
                        <></>
                      )}
                    </>
                  </DescriptiveCard>
                );
              }
            })}
          </CardContainer>
        </ColCentered>
      </StyledDiv>{" "}
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};
