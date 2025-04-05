import { Bike, Contact, LayoutDashboard } from "lucide-react";

export const UserNavItems = [
  {
    id: "1",
    label: "Home",
    path: "/",
  },
  {
    id: "2",
    label: "About",
    path: "/1",
  },

  {
    id: "3",
    label: "Products",
    path: "/2",
  },
  {
    id: "4",
    label: "Contact",
    path: "/3",
  },
  // {
  //   id: "5",
  //   label: "Login",
  //   path: "/login",
  // },
];

export const verifyFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Your Email Address",
    componentType: "input",
    type: "email",
  },
  {
    name: "code",
    label: "Code",
    placeholder: "Code",
    componentType: "input",
    type: "text",
  },
];

export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Your Full Name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Your Email Address",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Passcode",
    componentType: "input",
    type: "password",
  },
];

export const profileFormControls = [
  // {
  //   name: "userName",
  //   label: "UserName",
  //   placeholder: "UserName",
  //   componentType: "input",
  //   type: "text",
  // },
  // {
  //   name: "email",
  //   label: "Email",
  //   placeholder: "Email",
  //   componentType: "input",
  //   type: "text",
  // },

  {
    name: "dob",
    label: "Date of Birth",
    placeholder: "Enter your Date of Birth",
    componentType: "input",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter Phone number",
    componentType: "input",
    type: "text",
  },
  {
    name: "dl",
    label: "Driving Licence",
    placeholder: "Enter Driving Licence Id",
    componentType: "input",
    type: "text",
  },
];

export const ContactFormElements = [
  {
    name: "name",
    label: "",
    componentType: "input",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    name: "email",
    label: "",
    placeholder: "Enter Email Address",
    componentType: "input",
    type: "email",
  },
  {
    name: "phone",
    label: "",
    componentType: "input",
    type: "number",
    placeholder: "Enter Contact Number",
  },
  {
    name: "comment",
    label: "",
    componentType: "textarea",
    placeholder: "Enter Contact Message",
  },
];

export const addReviewFormElements = [
  {
    label: "Name",
    name: "userName",
    componentType: "input",
    type: "text",
    placeholder: "Enter Person's Name",
  },
  {
    label: "From",
    name: "icon",
    componentType: "select",
    options: [
      { id: "instagram", label: "Instagram" },
      { id: "facebook", label: "Facebook" },
    ],
  },
  {
    label: "Review",
    name: "review",
    componentType: "textarea",
    placeholder: "Enter a Review",
  },
];

export const addDashboardFormElements = [
  {
    label: "Heading",
    name: "heading",
    componentType: "input",
    type: "text",
    placeholder: "Enter Dashboard heading",
  },
];

export const addContactDetails = [
  {
    name: "phone",
    label: "Phone No.",
    placeholder: "Enter Phone number",
    componentType: "input",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    componentType: "input",
    type: "text",
    placeholder: "Enter Ride Name",
  },
  {
    label: "Instagram Link",
    name: "instagram",
    componentType: "input",
    type: "text",
    placeholder: "Enter Instagram Link",
  },
  {
    label: "Facebook Link",
    name: "facebook",
    componentType: "input",
    type: "text",
    placeholder: "Enter Facebook Link",
  },
  {
    label: "Twitter Link",
    name: "twitter",
    componentType: "input",
    type: "text",
    placeholder: "Enter Twitter Link",
  },
  {
    label: "Whatsapp Link",
    name: "whatsapp",
    componentType: "input",
    type: "text",
    placeholder: "Enter Whatsapp Link",
  },
  {
    label: "Location",
    name: "address",
    componentType: "textarea",
    placeholder: "Enter Location",
  },
];

export const productFormElements = [
  {
    label: "Image URL",
    name: "image",
    componentType: "input",
    type: "text",
    placeholder: "Enter Image URL",
  },
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter Title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter Description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "input",
    type: "text",
    placeholder: "Enter Category",
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "input",
    type: "text",
    placeholder: "Enter Brand",
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter Price",
  },
  {
    label: "Sale Price",
    name: "sale_price",
    componentType: "input",
    type: "number",
    placeholder: "Enter Sale Price",
  },
  {
    label: "Total Stock",
    name: "total_stock",
    componentType: "input",
    type: "number",
    placeholder: "Enter Total Stock",
  },
  {
    label: "Average Review",
    name: "average_review",
    componentType: "input",
    type: "number",
    placeholder: "Enter Average Review",
    step: "0.1",
  },
];

export const categoryOptionsMap = {
  bike: "Bike",
  scooty: "Scooty",
};

export const brandOptionsMap = {
  yamaha: "Yamaha",
  suzuki: "Suzuki",
  bajaj: "Bajaj",
  royal_Enfield: "Royal Enfield",
  hero: "Hero",
  tvs: "TVS",
  honda: "Honda",
  jawa: "Jawa",
};

export const filterOptions = {
  category: [
    { id: "bike", label: "Bike" },
    { id: "scooty", label: "Scooty" },
  ],
  brand: [
    { id: "yamaha", label: "Yamaha" },
    { id: "suzuki", label: "Suzuki" },
    { id: "bajaj", label: "Bajaj" },
    { id: "royal Enfield", label: "Royal Enfield" },
    { id: "hero", label: "Hero" },
    { id: "tvs", label: "TVS" },
    { id: "honda", label: "Honda" },
    { id: "jawa", label: "Jawa" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Rent: Low to High" },
  { id: "price-hightolow", label: "Rent: High to Low" },
  // { id: "title-atoz", label: "Title: A to Z" },
  // { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "State",
    name: "state",
    componentType: "input",
    type: "text",
    placeholder: "Enter your State",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
];
