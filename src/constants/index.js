
import { instagramIcon, facebookIcon, youtubeIcon, twitterIcon, funfact1, funfact2, funfact3, funfact4, funfact5} from "../assets"

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

export const socialMedias = [
    {
        id:"social-media-1",
        icon:`${facebookIcon}`
    },
    {
        id:"social-media-2",
        icon:`${instagramIcon}`
    },
    {
        id:"social-media-3",
        icon:`${twitterIcon}`
    },
    {
        id:"social-media-4",
        icon:`${youtubeIcon}`
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
           },
        ],
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
            },
        ],
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
            },
        ],
    },
];

export const funfact = [
    {
        image: `${funfact1}`,
        desc: "Setiap tahun, diperkirakan satu pertiga dari semua makanan yang dihasilkan di dunia (sekitar 1,3 miliar ton) terbuang percuma."
    },
    {
        image: `${funfact2}`,
        desc: "Makanan yang tidak sempurna seringkali masih segar dan bermanfaat secara nutrisi. Mereka dapat mengandung jumlah nutrisi yang sama dengan makanan yang sempurna secara visual."
    },
    {
        image: `${funfact3}`,
        desc : "Makanan yang tidak sempurna sering diabaikan meskipun masih bisa dimakan."
    },
    {
        image: `${funfact4}`,
        desc: "Makanan yang tidak sempurna seringkali dianggap lebih murah dan mudah didapat oleh orang-orang yang tinggal di daerah pedesaan atau wilayah yang kurang berkembang."
    },
    {
        image: `${funfact5}`,
        desc: 'Mengonsumsi makanan yang tidak sempurna dapat membantu mengurangi limbah pangan dan membantu petani mendapatkan nilai lebih dari hasil panen mereka'
    },
    
]