interface Attachment {
  catalogue: string;
  pricing: string;
}

interface Project {
  id: number;
  name: string;
  projectType: string;
  investor: string;
  locationCity: string;
  preciseLocation: string;
  implementationDate: string;
  leadTime: string;
  description: string;
  mainFeatures: string[];
  movieLink: string;
  walk3DthroughLink: string;
  featuredImage: string;
  finalImages: string[];
  productionImages: string[];
  blueprint: string[];
  attachments: Attachment;
}

export const mockProject: Project = {
  id: 1,
  name: "MERKURY",
  projectType: "Modular house",
  investor: "Merkury Real Estate",
  locationCity: "Wrocław",
  preciseLocation: "Wrocław, ul. Wrocławska 123",
  implementationDate: "2023-01",
  leadTime: "5 months",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque laborum dignissimos itaque nemo molestiae. Dicta aut eos ut saepe neque odio totam corrupti nemo? Ut architecto exercitationem, quo atque iste eos harum recusandae. Eius, cumque fuga alias natus similique sapiente doloremque molestiae fugit ab sint, accusamus eligendi modi error?",
  mainFeatures: [
    "year-round",
    "water placement option",
    "6 persons",
    "building area: 46,17",
    "floor area: 38,51",
    "2 bedrooms",
    "living room with kitchenette",
    "aluminum window joinery",
    "recuperation",
    "infrared mat heating",
  ],
  movieLink: "https://www.youtube.com/watch?v=R-vbFQNepNo&t=12s",
  walk3DthroughLink: "https://my.matterport.com/show/?m=1GumSy8KxTo",
  featuredImage:
    "https://drive.google.com/uc?export=view&id=1V9vabIhgMXKZKkuppjU4kBDAqQcLOhS_",
  finalImages: [
    "https://drive.google.com/uc?export=view&id=1A5tT9f9uMM5yhuMNWttEwH2SmyAsabj9",
    "https://drive.google.com/uc?export=view&id=1OqXrU8DVxbp9iZrCvR3w6-D2N55_gUuG",
    "https://drive.google.com/uc?export=view&id=1Wu70JEXCE5poscyX-NfaNMEYhV5OT2Rm",
    "https://drive.google.com/uc?export=view&id=1fkerPxSY-T9MZRqsG7WDDYWNINjkhoFi",
    "https://drive.google.com/uc?export=view&id=1vszGwWQAcCA4eNk5kWZR6MP85czFa185",
    "https://drive.google.com/uc?export=view&id=1bwhb6zmYKKMlyp-nbNZpH6uIQ-LvmSnW",
    "https://drive.google.com/uc?export=view&id=1L0ZcXy2UzVoD0bHggQce9u0ZMePe3fpK",
    "https://drive.google.com/uc?export=view&id=1XzZe_Bk29PZ7wRNtfDkXk5Xphy05PQKO",
    "https://drive.google.com/uc?export=view&id=1PeCRJS2qPGZLtfJoW4C_W_8OoZhNgtoz",
    "https://drive.google.com/uc?export=view&id=1foeOiShg0awEq4R6Sto6IzZsFCeU1pP3",
    "https://drive.google.com/uc?export=view&id=1TvuCeXarwqJFVYOivGhGRp420UQp4Ss5",
  ],
  productionImages: [
    "https://drive.google.com/uc?export=view&id=1TMbwZFlzp3IAdgur-EbYjaVZjnoFK8XN",
    "https://drive.google.com/uc?export=view&id=1t61gyUSxFnGe_qncB7bAy1yDSiLiYw8u",
    "https://drive.google.com/uc?export=view&id=1mENAqeXtiwcJKfbLaVKAU2zMk1DNgVmE",
    "https://drive.google.com/uc?export=view&id=1Z8RbsmZo6yzWxXNngPlWpOeJ76IMKn2p",
    "https://drive.google.com/uc?export=view&id=1pwyvdP5d38jGMGbEhvNoG2dufNDLGMZU",
    "https://drive.google.com/uc?export=view&id=1MoiqrxkMczwrezGqqDj-dkHMwEff7ba3",
    "https://drive.google.com/uc?export=view&id=1HgNUSSiHhVuqQC0lNnXFZrFSGTGkaGWr",
    "https://drive.google.com/uc?export=view&id=1E7gpJRa6-8v6IEQEM6ZvKu8uJz5mStnN",
    "https://drive.google.com/uc?export=view&id=15FvOQJRvr9l8NYcPtNKvhR2JgqTjyf8L",
    "https://drive.google.com/uc?export=view&id=11SsgN-JYCmsBU1-mRZdGGi9Ax3okrXv3",
    "https://drive.google.com/uc?export=view&id=1LA1rYP_WPf9JGygKBL2rHnmVTgMVRvlp",
    "https://drive.google.com/uc?export=view&id=1dwIVS6NelN3pMzdPXWEdqlNmNhyyovQE",
    "https://drive.google.com/uc?export=view&id=1DEWd8NY77ywcowVfd9_AG7OiUd4vrKR8",
    "https://drive.google.com/uc?export=view&id=1GmB7U9jtjvbAVgndoybZlTimxhkJixAs",
    "https://drive.google.com/uc?export=view&id=1morMmZOQUazcTB3lCzQlBJRd5Y_B-ebY",
    "https://drive.google.com/uc?export=view&id=1ULXnQuaCQy_QKtoX4r5ydv1zvgoaIgkS",
    "https://drive.google.com/uc?export=view&id=1pBah9yV4AZpztN_DDftD-C4lKzbr_mpd",
  ],
  blueprint: [
    "https://drive.google.com/file/d/1OMJyrBLubnxWFVUX7QBuNrDFBrcaMUJe/preview",
  ],
  attachments: {
    catalogue:
      "https://drive.google.com/uc?export=view&id=1hBvaRHNHb7_JtBpaJgntZo1038fGCeRD",
    pricing:
      "https://drive.google.com/uc?export=view&id=1hBvaRHNHb7_JtBpaJgntZo1038fGCeRD",
  },
};