export const Categories = [
  {
    value: "clothes",
    label: "Clothes",
  },
  {
    value: "foods",
    label: "Foods",
  },
  {
    value: "toys",
    label: "Toys",
  },
];
export const NavLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/",
    label: "Get pro",
  },
];


export const FooterQuickLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/offer",
    label: "Offer",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

export const HelpCenterLinks = [
  {
    href: "/faqs",
    label: "FAQS",
  },
  {
    href: "/payment",
    label: "Payment",
  },
  {
    href: "/returns_refunds",
    label: "Returns & Refunds",
  },
  {
    href: "/checkout",
    label: "Checkout",
  },
  {
    href: "/deliveryInfo",
    label: "Delivery Information",
  },
];

export const Pages = [
  {
    href: "/about",
    label: "About us",
  },
  {
    href: "/wishlist",
    label: "Wish List",
  },
  {
    href: "/cart",
    label: "Cart",
  },
  {
    href: "/checkout",
    label: "Checkout",
  },
  {
    href: "/account",
    label: "FAQS",
  },
];

//Testimonials samples
export const Testimonials = [
  {
    text: "The best place to find everything my pup needs! The toys are high-quality, and the treats are irresistible!",
    author: "— Emily R., Happy Dog Mom",
  },
  {
    text: "I found the perfect cozy bed for my cat here. The variety is amazing, and the prices are super reasonable!",
    author: "— James P., Cat Lover",
  },
  {
    text: "Shopping here is a breeze! I ordered a leash, some treats, and grooming supplies, and they all arrived quickly. My dog and I couldn’t be happier!",
    author: "— Samantha K., Loyal Customer",
  },
];
//fake data
export const DemoProductList = [
  {
    product: {
      mainImage: "/dog.png",
      name: "Hoodie",
      status: "Sale",
      price: 100,
      discount: 20,
      rating: 4,
    },
  },
  {
    product: {
      mainImage: "/cat.png",
      name: "Hoodie",
      status: "Sale",
      price: 100,
      discount: 20,
      rating: 5,
    },
  },
  {
    product: {
      mainImage: "/bird.png",
      name: "Hoodie",
      status: "Sale",
      price: 100,
      discount: 20,
      rating: 3.5,
    },
  },
  {
    product: {
      mainImage: "/fish.png",
      name: "Hoodie",
      status: "Sale",
      price: 100,
      discount: 20,
      rating: 2,
    },
  },
];
export const DemoBlogPosts: BlogType[] = [
  {
    blog: {
      _id: "123",
      author: "Rahul Mijar",
      image: "/dog.png",
      title: "The Tale of Max: A Dog’s Love",
      createdAt: new Date().toDateString(),
      text: "Max was no ordinary dog. Rescued from a shelter, he became the heart of his family. Every morning, Max would greet his humans with boundless enthusiasm, his wagging tail a testament to unconditional love. Whether it was accompanying the kids to school or comforting his owner after a hard day, Max always knew how to make things better. Dogs, like Max, are the epitome of loyalty. They teach us to live in the moment, find joy in simple things, and love without conditions. For centuries, they’ve been our protectors, friends, and even healers. Truly, life feels incomplete without these furry angels.",
    },
  },
  {
    blog: {
      _id: "1234",
      author: "Rahul Mijar",
      image: "/cat.png",
      title: "Whiskers and Secrets: A Cat’s World",
      createdAt: Date.now().toString(),
      text: "Luna, a sleek black cat, ruled her household with an air of mystery. She’d lounge in sunbeams during the day and explore the world at night. Her piercing green eyes seemed to see through the deepest secrets of her humans. But beneath her independent demeanor, Luna had a soft side. She’d curl up on her owner’s lap, purring softly, offering comfort without words. Cats are creatures of elegance and enigma. They’ve been worshipped in ancient cultures and cherished as companions for centuries. Whether they’re playfully chasing shadows or quietly observing the world, cats remind us to enjoy life at our own pace and embrace the mysteries it holds.",
    },
  },
  {
    blog: {
      _id: "1235",
      author: "Rahul Mijar",
      image: "/bird.png",
      title: "The Morning Orchestra: The Life of Birds",
      createdAt: Date.now().toString(),
      text: "Every morning, the world wakes up to the symphony of birds. From the cheerful chirps of sparrows to the majestic calls of eagles, birds bring life to our surroundings. These winged wonders are nature's messengers, reminding us of freedom and beauty.Take the tiny hummingbird, for example. It flits from flower to flower, drinking nectar and pollinating plants along the way. Then there’s the wise old owl, a symbol of knowledge, silently watching the night. Birds not only brighten our skies but also play a crucial role in maintaining ecological balance. Protecting them ensures a healthier, more vibrant planet for generations to come.",
    },
  },
];
export const AllProductList = [
  {
    data: DemoProductList,
    shopLink: "#",
    title: "Pet Foodies",
  },
  {
    data: DemoProductList,
    shopLink: "#",
    title: "Pet Clothing",
  },
  {
    data: DemoProductList,
    shopLink: "#",
    title: "Pet Toys",
  },
];
