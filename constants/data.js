import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "Presentation Control",
        text: "Empower presenters with the ability to seamlessly control presentations using hand gestures."
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Hardware Compatibility",
        text: "Ensure seamless integration with common hardware setups, including webcams."
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Customizable Gesture Commands",
        text: "Allow presenters to use different gestures to perform specific actions, providing a customizable and flexible control interface."
    },
    {
        id: 4, 
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Laser Pointer Activation",
        text: " Integrate a laser pointer that dynamically follows hand movements, allowing presenters."
    },
    {
        id: 5,
        icon: <ImMagicWand style = {{ fill: gradient }} />,
        title: "Setup and Calibration Instructions",
        text: " Provide clear and user-friendly instructions for setting up and calibrating the system."
    },
    {
        id: 6,
        icon: <FaShoppingCart style = {{ fill: gradient }} />,
        title: "Future Enhancement Opportunities",
        text: " Explore potential avenues for future improvements and expansions."
    }
];

const about = [
    {
        id: 7,
        text: "GestuSlide Master is a modern presentation tool that incorporates state-of-the-art computer vision and gesture recognition technologies. Its primary mission is to create an innovative and assistive technology solution that can change the presentation experience of educational systems and corporate organizations. This pioneering and groundbreaking technology can effectively interpret and respond to hand gestures and can create a new avenue for accessibility and engagement."
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "Do you keep a copy of my processed files?",
        text: "Absolutely not. Your files are only yours. While your files are in our servers, they are strictly secured and no one can access them. We just keep them for a while until you are using it. Right after, they are completely removed forever from our servers."
    },
    {

        id: 11,
        title: "What are the benefits of using gesture recognition in PowerPoint presentations?",
        text: "In the fast-paced world of presentations, the need for a more intuitive and interactive approach has never been more crucial. Enter GestuSlide Master, a cutting-edge presentation tool designed to revolutionize the way we engage with our audience. Powered by state-of-the-art computer vision and gesture recognition technologies, GestuSlide Master is set to redefine the art of presentations."
    },
    {
        id: 12,
        title: "How can I upload my files?",
        text: "The easiest way is to drag and drop your files straight to our canvas. You can also click on ‘Select files’ button and import your files your local Disk"
    },
    {
        id: 13,
        title: "Why does it take so long to start with the system?",
        text: "Unfortunately, this is not entirely in our hands. Processing speed depends on many factors, so the time that will take you to get your files converted will depend as well on your own Internet connection speed, the size of the selected files and, mostly, on how busy our servers are."
    },
    {
        id: 14,
        title: "Is gesture recognition technology compatible with different versions of PowerPoint?",
        text: "Righ now it is avalaible with the basic version of your PowerPoint,however we aim to make the system compatible with other versions too."
    }, 
    {
        id: 15,
        title: "How does gesture recognition compare to other methods of controlling presentations, such as remote clickers or input devices?",
        text: "You just don't need to be dependant on traditional  methods now.Gesture recognition offers a more intuitive and interactive experience compared to traditional methods like remote clickers, enabling natural gestures for slide navigation and content manipulation."
    }
   
];

const portfolio = [
    {
        id: 16,
        title: "Login/Signup",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.bg,
    },
    {
        id: 17,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Marie Jordan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Ann Brown",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Bill",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stawer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Green",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        image: images.customer_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+425 235 712",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "solnhub@info.com",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "United Kingdom, New Street",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;
