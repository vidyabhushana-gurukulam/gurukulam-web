/*
  src/data/media.ts
  Single registry for the homepage photography and child cutouts served from public/images.
  Alt text is written descriptively on purpose: the school opens in June 2027, so this imagery
  illustrates the intended model and must never read as documentary proof of an existing campus.
  Regenerate the files themselves with scripts/optimize-images.sh.
*/

export interface MediaAsset {
  src: string;
  alt: string;
}

/** Wide scene photography used inside framed panels. */
export const SCENES = {
  classroomDiscussion: {
    src: "/images/school-life/classroom-discussion.webp",
    alt: "A calm classroom of children at low wooden desks, hands raised toward a teacher at the blackboard",
  },
  outdoorDiscussion: {
    src: "/images/school-life/outdoor-discussion.webp",
    alt: "A teacher seated under a tree with a circle of children reading and discussing together",
  },
  abacusMaths: {
    src: "/images/school-life/abacus-maths.webp",
    alt: "Children working through a mathematics lesson on wooden abacus frames",
  },
  geometryClass: {
    src: "/images/school-life/geometry-class.webp",
    alt: "A teacher constructing a triangle on the blackboard while children copy the figure into notebooks",
  },
  yogaClass: {
    src: "/images/school-life/yoga-class.webp",
    alt: "Children seated in meditation on mats along an open colonnade",
  },
  natureStudy: {
    src: "/images/school-life/nature-study.webp",
    alt: "Children examining leaves with a magnifying glass and recording what they observe",
  },
  handsOnLearning: {
    src: "/images/school-life/hands-on-learning.webp",
    alt: "A teacher and children exploring counting materials and wooden models around a low table",
  },
  courtyardWalk: {
    src: "/images/school-life/courtyard-walk.webp",
    alt: "Four children in traditional dress walking through a sunlit courtyard carrying books and a globe",
  },
} as const satisfies Record<string, MediaAsset>;

/** Portraits for the Our Inspiration page. */
export const INSPIRATION = {
  prabhupada: {
    src: "/images/inspiration/srila-prabhupada.webp",
    alt: "Commemorative medallion of His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, Founder-Acharya of ISKCON",
  },
  baladeva: {
    src: "/images/inspiration/baladeva-vidyabhushana.webp",
    alt: "Traditional painting of Srila Baladeva Vidyabhushana writing on palm leaves with a peacock-feather quill, a temple behind him",
  },
} as const satisfies Record<string, MediaAsset>;

/** Transparent full-figure cutouts used as floating accents. */
export const CHILDREN = {
  readingRaisedHand: {
    src: "/images/children/boy-reading-raised-hand.webp",
    alt: "A boy holding an open book with one hand raised",
  },
  wateringSapling: {
    src: "/images/children/girl-watering-sapling.webp",
    alt: "A girl crouching to water a young sapling from a clay pot",
  },
  kirtanKartals: {
    src: "/images/children/girl-kirtan-kartals.webp",
    alt: "A girl playing kartals during kirtan",
  },
  nrityaPose: {
    src: "/images/children/girl-nritya-pose.webp",
    alt: "A girl in a classical nritya pose",
  },
  abacus: {
    src: "/images/children/boy-abacus.webp",
    alt: "A boy holding a wooden abacus",
  },
  readingBook: {
    src: "/images/children/boy-reading-book.webp",
    alt: "A boy reading from an open book",
  },
  writingNotebook: {
    src: "/images/children/boy-writing-notebook.webp",
    alt: "A boy writing in a notebook",
  },
  geometryModel: {
    src: "/images/children/girl-geometry-model.webp",
    alt: "A girl holding a geometric model",
  },
} as const satisfies Record<string, MediaAsset>;
