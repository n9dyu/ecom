import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { ThumbsUp } from "lucide-react";

import user1 from "../assets/icon.png";

import cookie from "../assets/flavors/cookiesncream.png"
import matcha from "../assets/flavors/matcha.png"
import choco from "../assets/flavors/chocolate.png"
import berry from "../assets/flavors/strawberry.png"
import banoffee from "../assets/flavors/banoffee.png"
import ubecheese from "../assets/flavors/ubecheese.png"
import mintchoco from "../assets/flavors/mintchoco.png"
import vanilla from "../assets/flavors/vanilla.png"

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Discover", href: "#discover" },
  { label: "Origin", href: "#origin" },
  { label: "FAQ", href: "#faq" },
];

export const features = [
  {
    icon: <ThumbsUp />,
    description:
      "Farm-fresh dairy, handpicked fruits, and ethically sourced chocolates.",
  },
  {
    icon: <ThumbsUp />,
    description:
      "Made in limited quantities to ensure quality, freshness, and a perfectly creamy texture.",
  },
  {
    icon: <ThumbsUp />,
    description:
      "No artificial flavors, colors, or preservatives - just pure, honest taste.",
  },
  {
    icon: <ThumbsUp />,
    description:
      "Carefully curated combinations for a memorable and indulgent ice cream experience.",
  },
];

export const flavors = [
  {
    name: "Cookie Chaos",
    description: "Madagascar vanilla bean cream base, cocoa-dusted chocolate cookies, crushed chocolate wafers, sweet cream ripple, white chocolate flakes, caramelized sugar crumble, milk chocolate drizzle, whipped cream swirl.",
    image: cookie,
    nutrition: {
      calories: "600 kcal",
      fat: "22g fat",
      protein: "18g protein",
    },
    price: 250
  },
  {
    name: "Kyoto White Bloom",
    description: "Ceremonial-grade matcha powder, sweet cream base, Belgian white chocolate chunks, matcha shortbread crisps, white chocolate ganache ripple, almond praline, candied yuzu peel, vanilla bean essence.",
    image: matcha,
    nutrition: {
      calories: "610 kcal",
      fat: "25g fat",
      protein: "17g protein",
    },
    price: 300
  },
  {
    name: "Gianduja Luxe",
    description: "70% dark chocolate, Piedmont hazelnut praline, creamy gianduja swirl, chocolate truffle fudge ripple, caramelized hazelnut shards, cocoa nibs, chocolate brownie bites, hazelnut butter drizzle.",
    image: choco,
    nutrition: {
      calories: "720 kcal",
      fat: "32g fat",
      protein: "20g protein",
    },
    price: 320
  },
  {
    name: "Berry Shortcake Dream",
    description: "Fresh strawberry purée, strawberry cream swirl, golden sponge cake bites, mascarpone cream drizzle, freeze-dried strawberry crunch, strawberry jam ripple, vanilla custard cream, white chocolate curls.",
    image: berry,
    nutrition: {
      calories: "580 kcal",
      fat: "20g fat",
      protein: "16g protein",
    },
    price: 270
  },
  {
    name: "Monkey King's Delight",
    description: "Banana-caramel cream base, dulce de leche ripple, chewy toffee chunks, digestive biscuit crumble, sea salt flakes, caramelized banana pieces, whipped cream mousse, milk chocolate shavings.",
    image: banoffee,
    nutrition: {
      calories: "690 kcal",
      fat: "30g fat",
      protein: "18g protein",
    },
    price: 280
  },
  {
    name: "Velvet Ube Crown",
    description: "Purple yam purée, cream cheese ripple, cheddar cheese swirls, buttery graham crumble, ube halaya chunks, white chocolate drizzle, condensed milk cream, toasted coconut flakes.",
    image: ubecheese,
    nutrition: {
      calories: "640 kcal",
      fat: "27g fat",
      protein: "17g protein",
    },
    price: 260
  },
  {
    name: "Frostbite Chips",
    description: "Fresh garden mint cream base, dark chocolate ganache ribbons, peppermint chocolate shards, milk chocolate chips, cocoa cookie crunch, vanilla cream ripple, peppermint fudge swirl, whipped chocolate mousse.",
    image: mintchoco,
    nutrition: {
      calories: "610 kcal",
      fat: "25g fat",
      protein: "18g protein",
    },
    price: 270
  },
  {
    name: "Velour Vanilla Bean",
    description: "Tahitian vanilla cream base, double-fold vanilla extract, bourbon vanilla bean seeds, caramelized sugar crystals, white chocolate pearls, custard cream ripple, honeycomb crunch, whipped cream topping.",
    image: vanilla,
    nutrition: {
      calories: "570 kcal",
      fat: "22g fat",
      protein: "16g protein",
    },
    price: 240
  },
];

export const faqs = [
  {
    question: "How long does the ice cream last in the freezer?",
    answer:
      "Our ice cream is best enjoyed within 2–3 weeks for maximum freshness, but it can last up to 2 months if stored properly.",
  },
  {
    question: "How do you keep the ice cream from melting during delivery?",
    answer:
      "We use insulated packaging with dry ice to make sure your order stays frozen until it reaches your doorstep.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, we offer same-day delivery for select areas. Delivery availability will be shown at checkout.",
  },
  {
    question: "What makes Zcoop Ice Cream different?",
    answer:
      "We use farm-fresh dairy, handpicked fruits, and ethically sourced chocolates — no artificial flavors or preservatives.",
  },
];
