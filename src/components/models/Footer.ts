import * as contentful from "contentful";

export interface FooterEntrySkeleton {
  facebook: contentful.EntryFieldTypes.Text;
  instagram: contentful.EntryFieldTypes.Text;
  email: contentful.EntryFieldTypes.Text;
  bankgiro: contentful.EntryFieldTypes.Text;
  swish: contentful.EntryFieldTypes.Text;
  organisationsNummer: contentful.EntryFieldTypes.Text;
  adress: contentful.EntryFieldTypes.Text;
  postNummerOrt: contentful.EntryFieldTypes.Text;
  personMedAdressen: contentful.EntryFieldTypes.Text;
}
