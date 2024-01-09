import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import { IDog } from "../models/IDog";
import {
  ButtonContainer,
  CardText,
  CardTextContainer,
  CardTitle,
  ColContainer,
  DogCard,
  FilterButton,
  FilterOptionsContainers,
  Image,
  ImageContainer,
  StyledDiv,
} from "../../styled/AllDogs/DogCard";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import {
  Col,
  ColCentered,
  ColCenteredResponsive,
  DividerLine,
} from "../../styled/Common/Common";
import { PrimaryButton } from "../../styled/Buttons/PrimaryButton";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage, filterAdoptedDogs } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { IPost } from "../models/IPost";
import {
  TextContainer,
  DescriptiveCardText,
  DescriptiveCardTitle,
  DescriptiveImage,
  DescriptiveCard,
  DescriptiveImageContainer,
  CardContainer,
} from "../../styled/Home/DescriptiveCard";
import { Filter } from "../enums/Filter";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { ColStart } from "../../styled/Spain/Spain";

export const AllDogsPage = () => {
  const navigate = useNavigate();
  const { dogs, posts, setPosts } = useAppContext();
  const [filters, setFilters] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDogs, setFilteredDogs] = useState<IDog[]>([]);
  const [allDogsPosts, setAllDogsPosts] = useState<IPost[]>([]);
  const [unadoptedDogs, setUnadoptedDogs] = useState<IDog[]>([]);
  // const allFilters = [
  //   "TIK",
  //   "HANE",
  //   "LITEN < 8KG",
  //   "MELLAN 9-25KG",
  //   "STOR > 25KG",
  //   "VALP < 1 ÅR",
  //   "VUXEN 1-5 ÅR",
  //   "SENIOR > 6 ÅR",
  // ];

  const allFilters = [
    "TIK",
    "HANE",
    "LITEN",
    "MELLAN",
    "STOR",
    "VALP",
    "VUXEN",
    "SENIOR",
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
    filterDogs();
  }, [filters]);

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

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Dogs);
      setAllDogsPosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Dogs);
          setAllDogsPosts(filteredPosts);
        } else {
          console.log("Inga inlägg");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const unadoptedDogs: IDog[] = filterAdoptedDogs(dogs, false);
    setUnadoptedDogs(unadoptedDogs);
    setFilteredDogs(unadoptedDogs);
  }, [dogs]);

  return (
    <>
      <StyledDiv>
        <ColCentered>
          {allDogsPosts.map((post, index) => {
            if (post.title.toLowerCase() === PageName.Dogs.toLowerCase()) {
              return (
                <ColCenteredResponsive key={index}>
                  <h2>{post.title}</h2>
                  <p style={{ marginTop: "2%" }}>{post.postText}</p>
                </ColCenteredResponsive>
              );
            }
          })}
          <ButtonContainer width="80%">
            <Col>
              <PrimaryButton
                selected={showDropdown}
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                Filtrera <FilterAltRoundedIcon />{" "}
              </PrimaryButton>
            </Col>
            <Col>
              <PrimaryButton selected={false}>
                Sortera <SortRoundedIcon />{" "}
              </PrimaryButton>
            </Col>
          </ButtonContainer>{" "}
          <ColStart>
            {showDropdown && (
              <FilterOptionsContainers>
                {filters.map((filter) => (
                  <span>
                    {filter}
                    <ClearRoundedIcon
                      onClick={() => handleFilterChange(filter.toUpperCase())}
                    ></ClearRoundedIcon>
                  </span> // onclick ta bort filter
                ))}
                <p
                  onClick={() => {
                    setFilteredDogs(unadoptedDogs);
                    setFilters([]);
                  }}
                >
                  Rensa filter
                </p>
                <span>Alla filter</span>
                {allFilters.map((filter) => (
                  <FilterButton
                    selected={filters.includes(filter)}
                    onClick={() => handleFilterChange(filter.toUpperCase())}
                  >
                    {filter}
                  </FilterButton>
                ))}

                {/* <span>Kön</span>
                <FilterButton onClick={() => handleFilterChange(Filter.Female)}>
                  Tik
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange(Filter.Male)}>
                  Hane
                </FilterButton>
                <span>Storlek</span>
                <FilterButton onClick={() => handleFilterChange(Filter.Small)}>
                  {"Liten < 8kg"}
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange(Filter.Medium)}>
                  {"Mellan 9-25kg"}
                </FilterButton>

                <FilterButton onClick={() => handleFilterChange(Filter.Big)}>
                  {"Stor > 25kg"}
                </FilterButton>
                <span>Ålder</span>
                <FilterButton onClick={() => handleFilterChange(Filter.Puppy)}>
                  {"Valp < 1 år"}
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange(Filter.Adult)}>
                  {"Vuxen 1-5 år"}
                </FilterButton>
                <FilterButton onClick={() => handleFilterChange(Filter.Senior)}>
                  {"Senior > 6 år"}
                </FilterButton> */}
              </FilterOptionsContainers>
            )}
          </ColStart>
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
                  <ButtonContainer>
                    {" "}
                    <CardText>Storlek: {dog.size}</CardText>
                    <PrimaryButton
                      selected={false}
                      onClick={() => {
                        navigate(`/hundar-som-soker-hem/${dog.id}`);
                      }}
                    >
                      Läs mer
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
      </StyledDiv>
    </>
  );
};
