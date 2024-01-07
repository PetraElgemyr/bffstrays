import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { PageName } from "../enums/PageName";
import { filterPostsPerPage } from "../helpers/FilterHelper";
import { getAllPosts } from "../helpers/RepositoryHelper";
import { Post } from "../models/Post";
import { StyledDiv } from "../../styled/AllDogs/DogCard";
import { ColCentered } from "../../styled/Common/Common";
import {
  CardContainer,
  DescriptiveCard,
  DescriptiveCardText,
  DescriptiveCardTitle,
  DescriptiveInfoImage,
  DescriptiveInfoImageContainer,
  StyledDivCardContainer,
  TextContainer,
} from "../../styled/Home/DescriptiveCard";
import "../../scss/home.scss";

export const DonatePage = () => {
  const { posts, setPosts } = useAppContext();
  const [donatePosts, setDonatePosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length > 0) {
      const filteredPosts = filterPostsPerPage(posts, PageName.Donate);
      setDonatePosts(filteredPosts);
    } else {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
          const filteredPosts = filterPostsPerPage(response, PageName.Donate);
          setDonatePosts(filteredPosts);
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

  return (
    <>
      <StyledDiv>
        <ColCentered>
          {/* <ColStart> */}
          <h2>Donera</h2>
          <p style={{ width: "85%" }}>
            Alla bidrag är oerhört välkomna, stora som små! Om du inte har
            möjlighet att adoptera en hund just nu så kan du hjälpa oss på flera
            olika sätt. Nedan kan du läsa mer om hur du kan göra skillnad.
          </p>
          {/* </ColStart> */}
        </ColCentered>{" "}
      </StyledDiv>

      <StyledDivCardContainer style={{ marginTop: "3%" }}>
        <CardContainer>
          {donatePosts.map((post, key) => (
            <DescriptiveCard
              bgcolor={key % 2 === 0 ? "blue" : "green"}
              key={key}
              style={{ cursor: "unset" }}
            >
              <>
                <DescriptiveInfoImageContainer className="descriptive__img--mobile">
                  <DescriptiveInfoImage
                    src={`https:${post.img[0].fields.file.url}`}
                    alt={post.title}
                  />
                </DescriptiveInfoImageContainer>
                {key % 2 === 0 ? (
                  <DescriptiveInfoImageContainer className="descriptive__img--tablet">
                    <DescriptiveInfoImage
                      src={`https:${post.img[0].fields.file.url}`}
                      alt={post.title}
                    />
                  </DescriptiveInfoImageContainer>
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
                {key % 2 !== 0 ? (
                  <DescriptiveInfoImageContainer className="descriptive__img--tablet">
                    <DescriptiveInfoImage
                      src={`https:${post.img[0].fields.file.url}`}
                      alt={post.title}
                    />
                  </DescriptiveInfoImageContainer>
                ) : (
                  <></>
                )}
              </>
            </DescriptiveCard>
          ))}
        </CardContainer>
      </StyledDivCardContainer>
    </>
  );
};
