import { useCallback, useEffect } from "react";
import { client } from "../../client";
import * as contentful from "contentful";

type PostType = {
  contentTypeId: "post";
  fields: {
    id: contentful.EntryFieldTypes.Number;
    postText: contentful.EntryFieldTypes.RichText;
    title: contentful.EntryFieldTypes.Text;
  };
};

export const HomePage = () => {
  // const [dogs, setDogs] = useState()

  const getContentfulDogData = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "dog",
      });

      console.log(response.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getContentfulPostData = useCallback(async () => {
    try {
      const response = await client.getEntries<PostType>({
        content_type: "post",
      });

      console.log(response.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getContentfulDogData();
    getContentfulPostData();
  }, [getContentfulDogData, getContentfulPostData]);
  return (
    <>
      <div>Tjoooobaaa</div>
    </>
  );
};
