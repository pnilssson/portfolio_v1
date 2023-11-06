import { TypedObject } from "sanity";

type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

type SanityAsset = {
  _ref: string;
  _type: string;
}

type Image = {
  alt: string;
  asset: SanityAsset;
}

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
  image: Image;
}

export interface Experience extends SanityBase {
  title: string;
  subTitle: string;
  timeframe: string;
  description: TypedObject[];
  competencies: string[];
}

export interface Certificate extends SanityBase {
  title: string;
  description: TypedObject[];
  url: string;
  label: string;
  image: Image;
}

export interface Downloadable extends SanityBase {
  title: string;
  label: string;
  name: string;
  file: {
    asset: SanityAsset;
    url: string;
  };
}