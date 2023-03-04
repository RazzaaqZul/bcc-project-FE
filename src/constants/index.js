import { Button } from "../components"
import { instagramIcon, facebookIcon, youtubeIcon, twitterIcon } from "../assets"

export const navLinks = [
    {
        id:"home",
        title:"Home"
    },
    {
        id:"foodLoss",
        title:"FoodLoss"
    },
    {
        id:"contact",
        title:"Contact"
    }
]

export const socialMedia = [
    {
        id:"social-media-1",
        icon:{facebookIcon}
    },
    {
        id:"social-media-2",
        icon:{instagramIcon}
    },
    {
        id:"social-media-3",
        icon:{twitterIcon}
    },
    {
        id:"social-media-4",
        icon:{youtubeIcon}
    }
]

export const footerLinks = [
    {
        links: [
           {
            name:"Easy Meal Business",
            link:""
           },
           {
            name:"Get the app",
            link:""
           },
           {
            name:"investor",
            link:""
           }
        ]
    },
    {
        links: [
            {
                name:"Blog",
                link:""
            },
            {
                name:"Help",
                link:""
            },
            {
                name:"Accessibility Statement",
                link:""
            }
        ]
    },
    {
        links: [
            {
                name:"Terms",
                link:""
            },
            {
                name:"Privacy Policy and Cookie Policy",
                link:""
            },
            {
                name:"Sitemap",
                link:""
            },
            {
                name: "Featured Topics",
                link:""
            }
        ]
    }
]