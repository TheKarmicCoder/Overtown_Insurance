// servicesData.js
import {
  FaCar,
  FaHome,
  FaBusinessTime,
  FaUserShield,
  FaStamp, // Notary Services
  FaFileAlt, // Registrations and Title Services
  FaFileInvoice, // Tax Services
} from 'react-icons/fa';

const serviceData = [
  {
    id: 1,
    title: 'Personal Auto Insurance',
    icon: <FaCar />,
    description: "Overtown Insurance Agency understands the importance of protecting your personal vehicle. Our Personal Auto Insurance offers comprehensive coverage, ensuring you have the right protection in place for unexpected events on the road. Drive with confidence knowing that you're covered against accidents, theft, and more.",
  },
  {
    id: 2,
    title: 'Commercial Auto Insurance',
    icon: <FaCar />,
    description: "For business owners who rely on vehicles for their operations, our Commercial Auto Insurance provides tailored coverage. Whether you have a fleet of vehicles or a single company car, we offer insurance solutions designed to safeguard your business against potential risks on the road."
  },
  {
    id: 3,
    title: 'Home Insurance',
    icon: <FaHome />,
    description:"Your home is a significant investment, and Overtown Insurance Agency is here to protect it. Our Homeowners Insurance provides comprehensive coverage for your property, ensuring you're financially secure in the face of unforeseen events such as damage, theft, or liability claims."
  },
  {
    id: 4,
    title: 'Business Insurance',
    icon: <FaBusinessTime />,
    description: "Overtown Insurance Agency specializes in Business Insurance tailored for small business owners. Whether you're a plumber, electrician, handyman, or run any other small business, our insurance solutions are designed to protect your business assets and mitigate risks."
  },
  {
    id: 5,
    title: 'Life Insurance',
    icon: <FaUserShield />,
    description: "Safeguard the financial future of your loved ones with Overtown Insurance Agency's Life Insurance solutions. Our policies offer peace of mind, providing financial support to your family in the event of your passing. Choose from various coverage options to suit your unique needs."
  },
  {
    id: 6,
    title: 'Notary Services',
    icon: <FaStamp />, // Updated icon
    description: "Need official document verification? Overtown Insurance Agency offers Notary Public services. Our 'Certified Notaries' ensure the authenticity and legality of your documents, providing you with the peace of mind that comes with proper documentation."
  },
  {
    id: 7,
    title: 'Registrations and Title Services',
    icon: <FaFileAlt />, // Updated icon
    description: "Simplify the often complex process of online registrations and title services with Overtown Insurance Agency. Our experts guide you through the necessary steps, ensuring accurate and efficient registration for various services."
  },
  {
    id: 8,
    title: 'Tax Services',
    icon: <FaFileInvoice />, // Updated icon
    description: "Trust Overtown Insurance Agency for your tax needs. Our comprehensive Tax Services include electronic filing of your Federal, State, and Local Taxes. Let our experienced team navigate the tax landscape for you, ensuring compliance and maximizing your returns."
  },
  // Add more services as needed
];

export default serviceData;
