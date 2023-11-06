import { TypedObject } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

export interface About extends SanityBase {
  nameTitle: string;
  name: string;
  shortBio: TypedObject[];
  title: string;
  fullBio: TypedObject[];
}

export interface Social extends SanityBase {
  name: string;
  url: string;
  label: string;
  svg: SocialSVG;
}

export interface SocialSVG {
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  }
}

export interface Experience extends SanityBase {
  title: string;
  subTitle: string;
  timeframe: string;
  description: TypedObject[];
  competencies: string[];
}
