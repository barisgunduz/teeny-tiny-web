import PromptClientPage from "./PromptClientPage";

export const metadata = {
    title: "100 ChatGPT Prompts for Content Creators",
    description: "Discover 100 curated ChatGPT prompts designed to boost your content creation process, from blog ideas to marketing strategies.",
    openGraph: {
        title: "100 ChatGPT Prompts for Content Creators",
        description: "Explore actionable and categorized prompts to get inspired for your next article, social media post, or project.",
        url: "https://www.teenytinyweb.com/100-chatgpt-promt",
        siteName: "TeenyTinyWeb",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "100 ChatGPT Prompts",
            },
        ],
    },
};

export default function Page() {
    return <PromptClientPage />;
}
