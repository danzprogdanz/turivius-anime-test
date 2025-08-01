interface Image {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: {
    dimensions: {
      tiny: {
        width: number | null;
        height: number | null;
      };
      small: {
        width: number | null;
        height: number | null;
      };
      medium: {
        width: number | null;
        height: number | null;
      };
      large: {
        width: number | null;
        height: number | null;
      };
    };
  };
}

interface CategoryAttributes {
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  totalMediaCount: number;
  slug: string;
  nsfw: boolean;
  childCount: number;
  image: Image | null;
}

interface RelationshipLinks {
  self: string;
  related: string;
}

interface Relationship {
  links: RelationshipLinks;
}

interface CategoryRelationships {
  parent: Relationship;
  anime: Relationship;
  drama: Relationship;
  manga: Relationship;
}

interface Category {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: CategoryAttributes;
  relationships: CategoryRelationships;
}

interface PaginationLinks {
  first: string;
  prev: string;
  next: string;
  last: string;
}

export interface CategoriesResponse {
  data: Category[];
  meta: {
    count: number;
  };
  links: PaginationLinks;
}