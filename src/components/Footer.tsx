import { useCallback, useEffect, useState } from "react";
import { FooterEntrySkeleton } from "./models/Footer";
import { client } from "../client";
import * as contentful from "contentful";
import { FooterColumn, FooterRow, StyledFooter } from "../styled/StyledFooter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const [footerInfo, setFooterInfo] = useState<FooterEntrySkeleton>();

  const getFooterInfo = useCallback(() => {
    client
      .getEntries({ content_type: "footer" })
      .then(
        (
          entries: contentful.EntryCollection<
            contentful.EntrySkeletonType,
            undefined,
            string
          >
        ) => {
          entries.items.map((item) => {
            const facebook = item.fields
              .facebook as contentful.EntryFieldTypes.Text;
            const instagram = item.fields
              .instagram as contentful.EntryFieldTypes.Text;
            const email = item.fields.email as contentful.EntryFieldTypes.Text;
            const bankgiro = item.fields
              .bankgiro as contentful.EntryFieldTypes.Text;
            const swish = item.fields.swish as contentful.EntryFieldTypes.Text;
            const organisationsNummer = item.fields
              .organisationsNummer as contentful.EntryFieldTypes.Text;
            const adress = item.fields
              .adress as contentful.EntryFieldTypes.Text;
            const postNummerOrt = item.fields
              .postNummerOrt as contentful.EntryFieldTypes.Text;
            const personMedAdressen = item.fields
              .personMedAdressen as contentful.EntryFieldTypes.Text;

            const data: FooterEntrySkeleton = {
              facebook,
              instagram,
              email,
              bankgiro,
              swish,
              organisationsNummer,
              adress,
              postNummerOrt,
              personMedAdressen,
            };
            setFooterInfo(data);
          });
        }
      );
  }, []);

  useEffect(() => {
    getFooterInfo();
  }, [getFooterInfo]);

  return (
    <StyledFooter>
      <FooterColumn>
        <FooterRow>
          <a href={footerInfo?.facebook.toString()}>
            Facebook
            <i>
              <FacebookIcon />{" "}
            </i>
          </a>
        </FooterRow>
        <FooterRow>
          <a href={footerInfo?.instagram.toString()}>
            Instagram{" "}
            <i>
              <InstagramIcon />
            </i>
          </a>
        </FooterRow>
        <FooterRow>Mejl: {footerInfo?.email.toString()}</FooterRow>
        <FooterRow>Bankgiro: {footerInfo?.bankgiro.toString()}</FooterRow>
        <FooterRow>Swish: {footerInfo?.swish.toString()}</FooterRow>
        <FooterRow>
          Organisationsnummer: {footerInfo?.organisationsNummer.toString()}
        </FooterRow>
      </FooterColumn>

      <FooterColumn>
        <FooterRow>{footerInfo?.personMedAdressen.toString()}</FooterRow>
        <FooterRow>{footerInfo?.adress.toString()}</FooterRow>
        <FooterRow>{footerInfo?.postNummerOrt.toString()}</FooterRow>
      </FooterColumn>
    </StyledFooter>
  );
};
