type Project = {
  name: string;
  href: string;
}

type Config = {
  profile: {
    name: string;
    image: string;
    role: string;
    bio: string;
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
  projects?: Project[];
  blog: {
    title: string;
    description: string;
    scheme: string;
  };
  link: string;
  since: number;
  lang: string;
  ogImageGenerateURL: string;
  notionConfig: {
    pageId: string;
  };
  googleAnalytics: {
    enable: boolean;
    config: {
      measurementId: string;
    };
  };
  googleSearchConsole: {
    enable: boolean;
    config: {
      siteVerification: string;
    };
  };
  naverSearchAdvisor: {
    enable: boolean;
    config: {
      siteVerification: string;
    };
  };
  utterances: {
    enable: boolean;
    config: {
      repo: string;
      "issue-term": string;
      label: string;
    };
  };
  cusdis: {
    enable: boolean;
    config: {
      host: string;
      appid: string;
    };
  };
  isProd: boolean;
  revalidateTime: number;
}

const CONFIG: Config = {
  profile: {
    name: "narashin",
    image: "./notion-avatar.svg",
    role: "Software Engineer",
    bio: "쓰고 만듭니다",
    email: "ca3rot@gmail.com",
    linkedin: "shinnara",
    github: "narashin",
    instagram: "spacediscoman",
  },
  projects: [], // 여기에 빈 배열로 설정하거나 완전히 제거할 수 있습니다.
  blog: {
    title: "naralog",
    description: "welcome to naralog!",
    scheme: "system",
  },
  link: "https://naralog.vercel.app",
  since: 2024,
  lang: "ko-KR",
  ogImageGenerateURL: "https://og-image-korean.vercel.app",
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID || '',
  },
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 3600,
};

export { CONFIG };


const CONFIG: Config = {
  // profile setting (required)
  profile: {
    name: "narashin",
    image: "./notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "쓰고 만듭니다",
    email: "ca3rot@gmail.com",
    linkedin: "shinnara",
    github: "narashin",
    instagram: "spacediscoman",
  },
  // projects: [
  //    {
  //      name: `naralog`,
  //      href: "https://github.com/narashin/morethan-log",
  //    },
  // ],
  // blog setting (required)
  blog: {
    title: "naralog",
    description: "welcome to naralog!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://naralog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600, // revalidate time for [slug], index
}

module.exports = { CONFIG }
